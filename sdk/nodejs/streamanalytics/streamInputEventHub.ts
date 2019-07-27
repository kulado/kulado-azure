// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Stream Analytics Stream Input EventHub.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testEventHubConsumerGroup = new azure.eventhub.EventHubConsumerGroup("test", {
 *     eventhubName: azurerm_eventhub_test.name,
 *     name: "example-consumergroup",
 *     namespaceName: azurerm_eventhub_namespace_test.name,
 *     resourceGroupName: azurerm_resource_group_test.name,
 * });
 * const exampleResourceGroup = kulado.output(azure.core.getResourceGroup({
 *     name: "example-resources",
 * }));
 * const exampleJob = azurerm_resource_group_example.name.apply(name => azure.streamanalytics.getJob({
 *     name: "example-job",
 *     resourceGroupName: name,
 * }));
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("example", {
 *     capacity: 1,
 *     kafkaEnabled: false,
 *     location: exampleResourceGroup.location,
 *     name: "example-namespace",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const exampleEventHub = new azure.eventhub.EventHub("example", {
 *     messageRetention: 1,
 *     name: "example-eventhub",
 *     namespaceName: exampleEventHubNamespace.name,
 *     partitionCount: 2,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const testStreamInputEventHub = new azure.streamanalytics.StreamInputEventHub("test", {
 *     eventhubConsumerGroupName: azurerm_eventhub_consumer_group_example.name,
 *     eventhubName: exampleEventHub.name,
 *     name: "eventhub-stream-input",
 *     resourceGroupName: exampleJob.resourceGroupName,
 *     serialization: {
 *         encoding: "UTF8",
 *         type: "Json",
 *     },
 *     servicebusNamespace: exampleEventHubNamespace.name,
 *     sharedAccessPolicyKey: exampleEventHubNamespace.defaultPrimaryKey,
 *     sharedAccessPolicyName: "RootManageSharedAccessKey",
 *     streamAnalyticsJobName: exampleJob.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/stream_analytics_stream_input_eventhub.html.markdown.
 */
export class StreamInputEventHub extends kulado.CustomResource {
    /**
     * Get an existing StreamInputEventHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: StreamInputEventHubState, opts?: kulado.CustomResourceOptions): StreamInputEventHub {
        return new StreamInputEventHub(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:streamanalytics/streamInputEventHub:StreamInputEventHub';

    /**
     * Returns true if the given object is an instance of StreamInputEventHub.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StreamInputEventHub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === StreamInputEventHub.__kuladoType;
    }

    /**
     * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub.
     */
    public readonly eventhubConsumerGroupName!: kulado.Output<string>;
    /**
     * The name of the Event Hub.
     */
    public readonly eventhubName!: kulado.Output<string>;
    /**
     * The name of the Stream Input EventHub. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A `serialization` block as defined below.
     */
    public readonly serialization!: kulado.Output<{ encoding?: string, fieldDelimiter?: string, type: string }>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    public readonly servicebusNamespace!: kulado.Output<string>;
    /**
     * The shared access policy key for the specified shared access policy.
     */
    public readonly sharedAccessPolicyKey!: kulado.Output<string>;
    /**
     * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    public readonly sharedAccessPolicyName!: kulado.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created. 
     */
    public readonly streamAnalyticsJobName!: kulado.Output<string>;

    /**
     * Create a StreamInputEventHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamInputEventHubArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: StreamInputEventHubArgs | StreamInputEventHubState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as StreamInputEventHubState | undefined;
            inputs["eventhubConsumerGroupName"] = state ? state.eventhubConsumerGroupName : undefined;
            inputs["eventhubName"] = state ? state.eventhubName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["serialization"] = state ? state.serialization : undefined;
            inputs["servicebusNamespace"] = state ? state.servicebusNamespace : undefined;
            inputs["sharedAccessPolicyKey"] = state ? state.sharedAccessPolicyKey : undefined;
            inputs["sharedAccessPolicyName"] = state ? state.sharedAccessPolicyName : undefined;
            inputs["streamAnalyticsJobName"] = state ? state.streamAnalyticsJobName : undefined;
        } else {
            const args = argsOrState as StreamInputEventHubArgs | undefined;
            if (!args || args.eventhubConsumerGroupName === undefined) {
                throw new Error("Missing required property 'eventhubConsumerGroupName'");
            }
            if (!args || args.eventhubName === undefined) {
                throw new Error("Missing required property 'eventhubName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serialization === undefined) {
                throw new Error("Missing required property 'serialization'");
            }
            if (!args || args.servicebusNamespace === undefined) {
                throw new Error("Missing required property 'servicebusNamespace'");
            }
            if (!args || args.sharedAccessPolicyKey === undefined) {
                throw new Error("Missing required property 'sharedAccessPolicyKey'");
            }
            if (!args || args.sharedAccessPolicyName === undefined) {
                throw new Error("Missing required property 'sharedAccessPolicyName'");
            }
            if (!args || args.streamAnalyticsJobName === undefined) {
                throw new Error("Missing required property 'streamAnalyticsJobName'");
            }
            inputs["eventhubConsumerGroupName"] = args ? args.eventhubConsumerGroupName : undefined;
            inputs["eventhubName"] = args ? args.eventhubName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serialization"] = args ? args.serialization : undefined;
            inputs["servicebusNamespace"] = args ? args.servicebusNamespace : undefined;
            inputs["sharedAccessPolicyKey"] = args ? args.sharedAccessPolicyKey : undefined;
            inputs["sharedAccessPolicyName"] = args ? args.sharedAccessPolicyName : undefined;
            inputs["streamAnalyticsJobName"] = args ? args.streamAnalyticsJobName : undefined;
        }
        super(StreamInputEventHub.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering StreamInputEventHub resources.
 */
export interface StreamInputEventHubState {
    /**
     * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub.
     */
    readonly eventhubConsumerGroupName?: kulado.Input<string>;
    /**
     * The name of the Event Hub.
     */
    readonly eventhubName?: kulado.Input<string>;
    /**
     * The name of the Stream Input EventHub. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    readonly serialization?: kulado.Input<{ encoding?: kulado.Input<string>, fieldDelimiter?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly servicebusNamespace?: kulado.Input<string>;
    /**
     * The shared access policy key for the specified shared access policy.
     */
    readonly sharedAccessPolicyKey?: kulado.Input<string>;
    /**
     * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly sharedAccessPolicyName?: kulado.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created. 
     */
    readonly streamAnalyticsJobName?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a StreamInputEventHub resource.
 */
export interface StreamInputEventHubArgs {
    /**
     * The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub.
     */
    readonly eventhubConsumerGroupName: kulado.Input<string>;
    /**
     * The name of the Event Hub.
     */
    readonly eventhubName: kulado.Input<string>;
    /**
     * The name of the Stream Input EventHub. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    readonly serialization: kulado.Input<{ encoding?: kulado.Input<string>, fieldDelimiter?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly servicebusNamespace: kulado.Input<string>;
    /**
     * The shared access policy key for the specified shared access policy.
     */
    readonly sharedAccessPolicyKey: kulado.Input<string>;
    /**
     * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly sharedAccessPolicyName: kulado.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created. 
     */
    readonly streamAnalyticsJobName: kulado.Input<string>;
}
