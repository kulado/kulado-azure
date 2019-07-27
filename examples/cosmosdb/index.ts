// Copyright 2016-2019, Kulado Corporation.  All rights reserved.

import * as azure from "@kulado/azure";
import * as cosmosdb from "@kulado/azure/cosmosdb";

const location = "West US 2";

const resourceGroup = new azure.core.ResourceGroup("test", {
    location: location,
});

let db = new cosmosdb.Account("test", {
    resourceGroupName: resourceGroup.name,
    offerType: "Standard",
    consistencyPolicy: {
        consistencyLevel: "Session",
        maxIntervalInSeconds: 5,
        maxStalenessPrefix: 100,
    },
    geoLocations: [{ location, failoverPriority: 0 }],
});

db.onChange("test", {
    databaseName: "testdb",
    collectionName: "testc",
    callback: async (context, items) => {
        console.log("ctx: " + JSON.stringify(context, null, 4));
        console.log(`${items.length} received`);
    }
});
