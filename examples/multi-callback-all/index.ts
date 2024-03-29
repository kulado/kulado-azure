import * as azure from "@kulado/azure";

const resourceGroup = new azure.core.ResourceGroup("example", { location: azure.Locations.WestUS2 });

// HTTP
const httpFunc = new azure.appservice.HttpFunction("http", {
    callback: async (context, request) => ({ status: 200, body: "Hello World" }),
});

// Fire on schedule
const timerFunc = new azure.appservice.TimerFunction("timer", {
    schedule: { minute: 0 },
    callback: async (context, timer) => {
        console.log(`Running at ${timer}`);
    },
});

// Storage Queue
const storageAccount = new azure.storage.Account("storage", {
    resourceGroupName: resourceGroup.name,
    accountReplicationType: "LRS",
    accountTier: "Standard",
});

const queue = new azure.storage.Queue("queue", {
    resourceGroupName: resourceGroup.name,
    storageAccountName: storageAccount.name,
});

const storageQueueFunc = new azure.storage.QueueFunction("storage-queue", {
    queue,
    callback: async (context, msg) => {
        console.log(`Received a message ${msg}`);
    },
});

// Storage Blobs
const container = new azure.storage.Container("container", {
    resourceGroupName: resourceGroup.name,
    storageAccountName: storageAccount.name,
    name: "blobs",
});

const blobFunc = new azure.storage.BlobFunction("storage-blob", {
    container,
    callback: async (context, contents) => {
        console.log(`Blob '${context.bindingData.blobName}' containing ${contents.toString()}`);
    },
});

// ServiceBus Queue
const namespace = new azure.eventhub.Namespace("servicebus", {
    resourceGroupName: resourceGroup.name,
    sku: "standard",
});

const serviceBusQueue = new azure.eventhub.Queue("queue", {
    resourceGroupName: resourceGroup.name,
    namespaceName: namespace.name,
});

const serviceBusQueueFunc = new azure.eventhub.ServiceBusFunction("servicebus-queue", {
    queue: serviceBusQueue,
    callback: async (context, msg) => {
        console.log(`Received a message ${msg}`);
    },
});

// Service Bus Topic
const topic = new azure.eventhub.Topic("topic", {
    resourceGroupName: resourceGroup.name,
    namespaceName: namespace.name,
});

const subscription = new azure.eventhub.Subscription("subscription", {
    resourceGroupName: resourceGroup.name,
    namespaceName: namespace.name,
    topicName: topic.name,
    maxDeliveryCount: 10,
});

const serviceBusTopicFunc = new azure.eventhub.ServiceBusFunction("servicebus-topic", {
    topic,
    subscription,
    callback: async (context, msg) => {
        console.log(`Received a message ${msg}`);
    },
});

// Event Hub
const ehNamespace = new azure.eventhub.EventHubNamespace("namespace", {
    resourceGroupName: resourceGroup.name,
    sku: "standard",
});

const eventHub = new azure.eventhub.EventHub("eventhub", {
    resourceGroupName: resourceGroup.name,
    namespaceName: ehNamespace.name,
    partitionCount: 2,
    messageRetention: 7,
});

const eventHubFunc = new azure.eventhub.EventHubFunction("eventhub", {
    eventHub,
    callback: async (context, msg) => {
        console.log(`Received a message ${msg}`);
    },
});

// IoT Hub
const iotHub = new azure.iot.IoTHub("iothub", {
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

const iotHubFunc = new azure.iot.IoTHubFunction("iothub", {
    iotHub,
    callback: async (context, msg) => {
        console.log(`Received a message ${msg}`);
    },
});

// Cosmos DB
const account = new azure.cosmosdb.Account("cosmos", {
    resourceGroupName: resourceGroup.name,
    offerType: "Standard",
    consistencyPolicy: {
        consistencyLevel: "Session",
        maxIntervalInSeconds: 5,
        maxStalenessPrefix: 100,
    },
    geoLocations: [{ location: resourceGroup.location, failoverPriority: 0 }],
});

const db = new azure.cosmosdb.SqlDatabase("cosmos-db", {
    resourceGroupName: resourceGroup.name,
    accountName: account.name,
});

const cosmosFunc = new azure.cosmosdb.CosmosDBFunction("cosmos", {
    account,
    databaseName: db.name,
    collectionName: "items",
    callback: async (context, updates) => {
        console.log(`Received a batch of updates ${JSON.stringify(updates)}`);
    },
})

// Create a Function App containing multiple functions
const app = new azure.appservice.MultiCallbackFunctionApp("multi-app", {
    resourceGroupName: resourceGroup.name,
    functions: [httpFunc, timerFunc, storageQueueFunc, blobFunc, serviceBusQueueFunc, serviceBusTopicFunc, eventHubFunc, iotHubFunc, cosmosFunc],
});

export const httpEndpoint = app.endpoint.apply(ep => `${ep}${httpFunc.name}`);
