// Copyright 2016-2017, Kulado Corporation.  All rights reserved.

import * as azure from "@kulado/azure";

const name = "webserver";

let resourceGroup = new azure.core.ResourceGroup(name, {
    location: azure.Locations.WestUS,
});

let network = new azure.network.VirtualNetwork(name, {
    resourceGroupName: resourceGroup.name,
    addressSpaces: ["10.0.0.0/16"],
    // Workaround two issues:
    // (1) The Azure API recently regressed and now fails when no subnets are defined at Network creation time.
    // (2) The Azure Terraform provider does not return the ID of the created subnets - so this cannot actually be used.
    subnets: [{
        name: "default",
        addressPrefix: "10.0.1.0/24",
    }],
});

let subnet = new azure.network.Subnet(name, {
    resourceGroupName: resourceGroup.name,
    virtualNetworkName: network.name,
    addressPrefix: "10.0.2.0/24",
});

let networkInterface = new azure.network.NetworkInterface(name, {
    resourceGroupName: resourceGroup.name,
    ipConfigurations: [{
        name: "webserveripcfg",
        subnetId: subnet.id,
        privateIpAddressAllocation: "dynamic",
    }],
});

let vm = new azure.compute.VirtualMachine("webservervm", {
    resourceGroupName: resourceGroup.name,
    networkInterfaceIds: [networkInterface.id],
    vmSize: "Standard_A0",
    deleteDataDisksOnTermination: true,
    deleteOsDiskOnTermination: true,
    osProfile: {
        computerName: "hostname",
        adminUsername: "testadmin",
        adminPassword: "Password1234!",
    },
    osProfileLinuxConfig: {
        disablePasswordAuthentication: false,
    },
    storageOsDisk: {
        createOption: "FromImage",
        name: "myosdisk1",
    },
    storageImageReference: {
        publisher: "canonical",
        offer: "UbuntuServer",
        sku: "16.04-LTS",
        version: "latest",
    },
});
