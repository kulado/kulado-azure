// Copyright 2016-2017, Kulado Corporation.  All rights reserved.

import * as azure from "@kulado/azure";
import * as iot from "@kulado/azure/iot";

const location = "West US 2";

const resourceGroup = new azure.core.ResourceGroup("test", {
    location: location,
});

const iotHub = new iot.IoTHub("test", {
    resourceGroupName: resourceGroup.name,
    sku: {
        capacity: 1,
        name: "S1",
        tier: "Standard",
    },
    fallbackRoute: {
        source: "DeviceMessages", 
        enabled: true, 
        endpointNames: ["events"],
        condition: "true",
    },
});

iotHub.onEvent("test", async (context, message) => {
    console.log("ctx: " + JSON.stringify(context, null, 4));
    console.log("arg: " + message);
});
