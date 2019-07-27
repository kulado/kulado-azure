// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/servicebus_queue.html.markdown.
 */
export class Queue extends kulado.CustomResource {
    /**
     * Get an existing Queue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: QueueState, opts?: kulado.CustomResourceOptions): Queue {
        return new Queue(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:eventhub/queue:Queue';

    /**
     * Returns true if the given object is an instance of Queue.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Queue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Queue.__kuladoType;
    }

    /**
     * The ISO 8601 timespan duration of the idle interval after which the
     * Queue is automatically deleted, minimum of 5 minutes.
     */
    public readonly autoDeleteOnIdle!: kulado.Output<string>;
    /**
     * Boolean flag which controls whether the Queue has dead letter support when a message expires. Defaults to `false`.
     */
    public readonly deadLetteringOnMessageExpiration!: kulado.Output<boolean | undefined>;
    /**
     * The ISO 8601 timespan duration of the TTL of messages sent to this
     * queue. This is the default value used when TTL is not set on message itself.
     */
    public readonly defaultMessageTtl!: kulado.Output<string>;
    /**
     * The ISO 8601 timespan duration during which
     * duplicates can be detected. Default value is 10 minutes. (`PT10M`)
     */
    public readonly duplicateDetectionHistoryTimeWindow!: kulado.Output<string>;
    public readonly enableBatchedOperations!: kulado.Output<boolean | undefined>;
    /**
     * Boolean flag which controls whether Express Entities
     * are enabled. An express queue holds a message in memory temporarily before writing
     * it to persistent storage. Defaults to `false` for Basic and Standard. For Premium, it MUST
     * be set to `false`.
     */
    public readonly enableExpress!: kulado.Output<boolean | undefined>;
    /**
     * Boolean flag which controls whether to enable
     * the queue to be partitioned across multiple message brokers. Changing this forces
     * a new resource to be created. Defaults to `false` for Basic and Standard. For Premium, it MUST
     * be set to `true`.
     */
    public readonly enablePartitioning!: kulado.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * The ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. Maximum value is 5 minutes. Defaults to 1 minute. (`PT1M`)
     */
    public readonly lockDuration!: kulado.Output<string>;
    /**
     * Integer value which controls when a message is automatically deadlettered. Defaults to `10`.
     */
    public readonly maxDeliveryCount!: kulado.Output<number | undefined>;
    /**
     * Integer value which controls the size of
     * memory allocated for the queue. For supported values see the "Queue/topic size"
     * section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas).
     */
    public readonly maxSizeInMegabytes!: kulado.Output<number>;
    /**
     * Specifies the name of the ServiceBus Queue resource. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the ServiceBus Namespace to create
     * this queue in. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: kulado.Output<string>;
    /**
     * Boolean flag which controls whether
     * the Queue requires duplicate detection. Changing this forces
     * a new resource to be created. Defaults to `false`.
     */
    public readonly requiresDuplicateDetection!: kulado.Output<boolean | undefined>;
    /**
     * Boolean flag which controls whether the Queue requires sessions.
     * This will allow ordered handling of unbounded sequences of related messages. With sessions enabled
     * a queue can guarantee first-in-first-out delivery of messages.
     * Changing this forces a new resource to be created. Defaults to `false`.
     */
    public readonly requiresSession!: kulado.Output<boolean | undefined>;
    /**
     * The name of the resource group in which to
     * create the namespace. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    public readonly supportOrdering!: kulado.Output<boolean | undefined>;

    /**
     * Create a Queue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueueArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: QueueArgs | QueueState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as QueueState | undefined;
            inputs["autoDeleteOnIdle"] = state ? state.autoDeleteOnIdle : undefined;
            inputs["deadLetteringOnMessageExpiration"] = state ? state.deadLetteringOnMessageExpiration : undefined;
            inputs["defaultMessageTtl"] = state ? state.defaultMessageTtl : undefined;
            inputs["duplicateDetectionHistoryTimeWindow"] = state ? state.duplicateDetectionHistoryTimeWindow : undefined;
            inputs["enableBatchedOperations"] = state ? state.enableBatchedOperations : undefined;
            inputs["enableExpress"] = state ? state.enableExpress : undefined;
            inputs["enablePartitioning"] = state ? state.enablePartitioning : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["lockDuration"] = state ? state.lockDuration : undefined;
            inputs["maxDeliveryCount"] = state ? state.maxDeliveryCount : undefined;
            inputs["maxSizeInMegabytes"] = state ? state.maxSizeInMegabytes : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["requiresDuplicateDetection"] = state ? state.requiresDuplicateDetection : undefined;
            inputs["requiresSession"] = state ? state.requiresSession : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["supportOrdering"] = state ? state.supportOrdering : undefined;
        } else {
            const args = argsOrState as QueueArgs | undefined;
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["autoDeleteOnIdle"] = args ? args.autoDeleteOnIdle : undefined;
            inputs["deadLetteringOnMessageExpiration"] = args ? args.deadLetteringOnMessageExpiration : undefined;
            inputs["defaultMessageTtl"] = args ? args.defaultMessageTtl : undefined;
            inputs["duplicateDetectionHistoryTimeWindow"] = args ? args.duplicateDetectionHistoryTimeWindow : undefined;
            inputs["enableBatchedOperations"] = args ? args.enableBatchedOperations : undefined;
            inputs["enableExpress"] = args ? args.enableExpress : undefined;
            inputs["enablePartitioning"] = args ? args.enablePartitioning : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["lockDuration"] = args ? args.lockDuration : undefined;
            inputs["maxDeliveryCount"] = args ? args.maxDeliveryCount : undefined;
            inputs["maxSizeInMegabytes"] = args ? args.maxSizeInMegabytes : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["requiresDuplicateDetection"] = args ? args.requiresDuplicateDetection : undefined;
            inputs["requiresSession"] = args ? args.requiresSession : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["supportOrdering"] = args ? args.supportOrdering : undefined;
        }
        super(Queue.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Queue resources.
 */
export interface QueueState {
    /**
     * The ISO 8601 timespan duration of the idle interval after which the
     * Queue is automatically deleted, minimum of 5 minutes.
     */
    readonly autoDeleteOnIdle?: kulado.Input<string>;
    /**
     * Boolean flag which controls whether the Queue has dead letter support when a message expires. Defaults to `false`.
     */
    readonly deadLetteringOnMessageExpiration?: kulado.Input<boolean>;
    /**
     * The ISO 8601 timespan duration of the TTL of messages sent to this
     * queue. This is the default value used when TTL is not set on message itself.
     */
    readonly defaultMessageTtl?: kulado.Input<string>;
    /**
     * The ISO 8601 timespan duration during which
     * duplicates can be detected. Default value is 10 minutes. (`PT10M`)
     */
    readonly duplicateDetectionHistoryTimeWindow?: kulado.Input<string>;
    readonly enableBatchedOperations?: kulado.Input<boolean>;
    /**
     * Boolean flag which controls whether Express Entities
     * are enabled. An express queue holds a message in memory temporarily before writing
     * it to persistent storage. Defaults to `false` for Basic and Standard. For Premium, it MUST
     * be set to `false`.
     */
    readonly enableExpress?: kulado.Input<boolean>;
    /**
     * Boolean flag which controls whether to enable
     * the queue to be partitioned across multiple message brokers. Changing this forces
     * a new resource to be created. Defaults to `false` for Basic and Standard. For Premium, it MUST
     * be set to `true`.
     */
    readonly enablePartitioning?: kulado.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. Maximum value is 5 minutes. Defaults to 1 minute. (`PT1M`)
     */
    readonly lockDuration?: kulado.Input<string>;
    /**
     * Integer value which controls when a message is automatically deadlettered. Defaults to `10`.
     */
    readonly maxDeliveryCount?: kulado.Input<number>;
    /**
     * Integer value which controls the size of
     * memory allocated for the queue. For supported values see the "Queue/topic size"
     * section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas).
     */
    readonly maxSizeInMegabytes?: kulado.Input<number>;
    /**
     * Specifies the name of the ServiceBus Queue resource. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the ServiceBus Namespace to create
     * this queue in. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: kulado.Input<string>;
    /**
     * Boolean flag which controls whether
     * the Queue requires duplicate detection. Changing this forces
     * a new resource to be created. Defaults to `false`.
     */
    readonly requiresDuplicateDetection?: kulado.Input<boolean>;
    /**
     * Boolean flag which controls whether the Queue requires sessions.
     * This will allow ordered handling of unbounded sequences of related messages. With sessions enabled
     * a queue can guarantee first-in-first-out delivery of messages.
     * Changing this forces a new resource to be created. Defaults to `false`.
     */
    readonly requiresSession?: kulado.Input<boolean>;
    /**
     * The name of the resource group in which to
     * create the namespace. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    readonly supportOrdering?: kulado.Input<boolean>;
}

/**
 * The set of arguments for constructing a Queue resource.
 */
export interface QueueArgs {
    /**
     * The ISO 8601 timespan duration of the idle interval after which the
     * Queue is automatically deleted, minimum of 5 minutes.
     */
    readonly autoDeleteOnIdle?: kulado.Input<string>;
    /**
     * Boolean flag which controls whether the Queue has dead letter support when a message expires. Defaults to `false`.
     */
    readonly deadLetteringOnMessageExpiration?: kulado.Input<boolean>;
    /**
     * The ISO 8601 timespan duration of the TTL of messages sent to this
     * queue. This is the default value used when TTL is not set on message itself.
     */
    readonly defaultMessageTtl?: kulado.Input<string>;
    /**
     * The ISO 8601 timespan duration during which
     * duplicates can be detected. Default value is 10 minutes. (`PT10M`)
     */
    readonly duplicateDetectionHistoryTimeWindow?: kulado.Input<string>;
    readonly enableBatchedOperations?: kulado.Input<boolean>;
    /**
     * Boolean flag which controls whether Express Entities
     * are enabled. An express queue holds a message in memory temporarily before writing
     * it to persistent storage. Defaults to `false` for Basic and Standard. For Premium, it MUST
     * be set to `false`.
     */
    readonly enableExpress?: kulado.Input<boolean>;
    /**
     * Boolean flag which controls whether to enable
     * the queue to be partitioned across multiple message brokers. Changing this forces
     * a new resource to be created. Defaults to `false` for Basic and Standard. For Premium, it MUST
     * be set to `true`.
     */
    readonly enablePartitioning?: kulado.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. Maximum value is 5 minutes. Defaults to 1 minute. (`PT1M`)
     */
    readonly lockDuration?: kulado.Input<string>;
    /**
     * Integer value which controls when a message is automatically deadlettered. Defaults to `10`.
     */
    readonly maxDeliveryCount?: kulado.Input<number>;
    /**
     * Integer value which controls the size of
     * memory allocated for the queue. For supported values see the "Queue/topic size"
     * section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas).
     */
    readonly maxSizeInMegabytes?: kulado.Input<number>;
    /**
     * Specifies the name of the ServiceBus Queue resource. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the ServiceBus Namespace to create
     * this queue in. Changing this forces a new resource to be created.
     */
    readonly namespaceName: kulado.Input<string>;
    /**
     * Boolean flag which controls whether
     * the Queue requires duplicate detection. Changing this forces
     * a new resource to be created. Defaults to `false`.
     */
    readonly requiresDuplicateDetection?: kulado.Input<boolean>;
    /**
     * Boolean flag which controls whether the Queue requires sessions.
     * This will allow ordered handling of unbounded sequences of related messages. With sessions enabled
     * a queue can guarantee first-in-first-out delivery of messages.
     * Changing this forces a new resource to be created. Defaults to `false`.
     */
    readonly requiresSession?: kulado.Input<boolean>;
    /**
     * The name of the resource group in which to
     * create the namespace. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    readonly supportOrdering?: kulado.Input<boolean>;
}