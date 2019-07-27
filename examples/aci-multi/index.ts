// Copyright 2016-2017, Kulado Corporation.  All rights reserved.

import * as azure from "@kulado/azure";

const resourceGroup = new azure.core.ResourceGroup("resourcegroup", {
    location: "West US",
});

const containerGroup = new azure.containerservice.Group("containergroup", {
    resourceGroupName: resourceGroup.name,
    ipAddressType: "public",
    osType: "linux",
    containers: [
        {
            name: "hw",
            image: "microsoft/aci-helloworld:latest",
            cpu: 0.5,
            memory: 1.5,
            port: 80
        },
        {
            name: "sidecar",
            image: "microsoft/aci-tutorial-sidecar",
            cpu: 0.5,
            memory: 1.5,
        },
    ],
    tags: {
        "environment": "testing",
    },
});
