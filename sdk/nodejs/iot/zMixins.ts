// Copyright 2016-2018, Kulado Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as kulado from "@kulado/kulado";
import * as appservice from "../appservice";
import { IoTHub } from "./ioTHub";
import { ConsumerGroup } from "./consumerGroup";
import { DefaultConsumerGroup, EventHubBindingDefinition, EventHubContext, EventHubCallback } from '../eventhub';

export interface IoTHubFunctionArgs extends appservice.CallbackFunctionArgs<EventHubContext, any, appservice.FunctionDefaultResponse> {
    /**
     * IoT Hub to subscribe the Function to.
     */
    iotHub: IoTHub;

    /**
     * Optional Consumer Group to subscribe the Function to. If not present, the default consumer group will be used.
     */
    consumerGroup?: ConsumerGroup;

    /**
     * Set to 'many' in order to enable batching. If omitted or set to 'one', single message passed to function.
     */
    cardinality?: kulado.Input<"many" | "one">;
};

export interface IoTHubSubscriptionArgs extends appservice.CallbackFunctionAppArgs<EventHubContext, any, appservice.FunctionDefaultResponse> {
    /**
     * The name of the resource group in which to create the event subscription. [resourceGroup] takes precedence over [resourceGroupName].
     * If none of the two is supplied, the IoT Hub's resource group will be used.
     */
    resourceGroupName?: kulado.Input<string>;

    /**
     * Optional Consumer Group to subscribe the FunctionApp to. If not present, the default consumer group will be used.
     */
    consumerGroup?: ConsumerGroup;

    /**
     * Set to 'many' in order to enable batching. If omitted or set to 'one', single message passed to function.
     */
    cardinality?: kulado.Input<"many" | "one">;
};

declare module "./ioTHub" {
    interface IoTHub {
        /**
         * Subscribes to events logged to this Event Hub to the handler provided, along
         * with options to control the behavior of the subscription.
         */
        onEvent(
            name: string, args: EventHubCallback | IoTHubSubscriptionArgs, opts?: kulado.ComponentResourceOptions): IoTHubEventSubscription;
    }
}

IoTHub.prototype.onEvent = function(this: IoTHub, name, args, opts) {
    const functionArgs = args instanceof Function
        ? <IoTHubSubscriptionArgs>{ callback: args }
        : args;

    return new IoTHubEventSubscription(name, this, functionArgs, opts);
}

export class IoTHubEventSubscription extends appservice.EventSubscription<EventHubContext, string, appservice.FunctionDefaultResponse> {
    readonly iotHub: IoTHub;

    constructor(
        name: string, iotHub: IoTHub,
        args: IoTHubSubscriptionArgs, opts: kulado.ComponentResourceOptions = {}) {
        const { resourceGroupName, location } = appservice.getResourceGroupNameAndLocation(args, iotHub.resourceGroupName);

        super("azure:eventhub:IoTHubEventSubscription",
            name,
            new IoTHubFunction(name, { ...args, iotHub }),
            { ...args, resourceGroupName, location },
            { parent: iotHub, ...opts });

        this.iotHub = iotHub;
        this.registerOutputs();
    }
}

/**
 * Azure Function triggered by an IoT Hub.
 */
export class IoTHubFunction extends appservice.Function<EventHubContext, string, appservice.FunctionDefaultResponse> {
    constructor(name: string, args: IoTHubFunctionArgs) {
       // The event hub binding does not store the Event Hubs connection string directly.  Instead, the
        // connection string is put into the app settings (under whatever key we want). Then, the
        // .connection property of the binding contains the *name* of that app setting key.
        const bindingConnectionKey = kulado.interpolate`IoTHub${args.iotHub.name}ConnectionKey`;

        const trigger = {
            name: "eventHub",
            direction: "in",
            type: "eventHubTrigger",
            eventHubName: args.iotHub.name,
            consumerGroup: args.consumerGroup ? args.consumerGroup.name : DefaultConsumerGroup,
            cardinality: args.cardinality,
            connection: bindingConnectionKey,
        } as EventHubBindingDefinition;

        kulado.all([args.iotHub.fallbackRoute, args.iotHub.routes]).apply(([fallbackRoute, routes]) => {
            if (fallbackRoute && fallbackRoute.enabled) {
                return;
            }
            if (routes && routes.length > 0) {
                return;
            }
            throw new kulado.ResourceError("IoT Hub must have a route or fallback route enabled.", args.iotHub);
        });

        // Place the mapping from the well known key name to the Event Hubs account connection string in
        // the 'app settings' object.
        // The connection string is built from the IoT Hub "event hub compatible endpoint"
        // and the iothubowner access policy key
        // see https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messages-read-builtin
        const appSettings = kulado.all([args.iotHub.eventHubEventsEndpoint, args.iotHub.sharedAccessPolicies, bindingConnectionKey]).apply(
            ([eventHubEventsEndpoint, sharedAccessPolicies, key]) => ({
                [key]: `Endpoint=${eventHubEventsEndpoint};SharedAccessKeyName=iothubowner;SharedAccessKey=${sharedAccessPolicies.find(p => p.keyName === "iothubowner")!.primaryKey}`
            }));

        super(name, trigger, args, appSettings);
    }
}
