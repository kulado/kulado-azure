// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/servicebus_subscription_rule.html.markdown.
 */
export class SubscriptionRule extends kulado.CustomResource {
    /**
     * Get an existing SubscriptionRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: SubscriptionRuleState, opts?: kulado.CustomResourceOptions): SubscriptionRule {
        return new SubscriptionRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:eventhub/subscriptionRule:SubscriptionRule';

    /**
     * Returns true if the given object is an instance of SubscriptionRule.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubscriptionRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === SubscriptionRule.__kuladoType;
    }

    /**
     * Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
     */
    public readonly action!: kulado.Output<string | undefined>;
    /**
     * A `correlation_filter` block as documented below to be evaluated against a BrokeredMessage. Required when `filter_type` is set to `CorrelationFilter`.
     */
    public readonly correlationFilter!: kulado.Output<{ contentType?: string, correlationId?: string, label?: string, messageId?: string, replyTo?: string, replyToSessionId?: string, sessionId?: string, to?: string } | undefined>;
    /**
     * Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
     */
    public readonly filterType!: kulado.Output<string>;
    /**
     * Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: kulado.Output<string>;
    /**
     * The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filter_type` is set to `SqlFilter`.
     */
    public readonly sqlFilter!: kulado.Output<string | undefined>;
    /**
     * The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
     */
    public readonly subscriptionName!: kulado.Output<string>;
    /**
     * The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
     */
    public readonly topicName!: kulado.Output<string>;

    /**
     * Create a SubscriptionRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionRuleArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubscriptionRuleArgs | SubscriptionRuleState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SubscriptionRuleState | undefined;
            inputs["action"] = state ? state.action : undefined;
            inputs["correlationFilter"] = state ? state.correlationFilter : undefined;
            inputs["filterType"] = state ? state.filterType : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sqlFilter"] = state ? state.sqlFilter : undefined;
            inputs["subscriptionName"] = state ? state.subscriptionName : undefined;
            inputs["topicName"] = state ? state.topicName : undefined;
        } else {
            const args = argsOrState as SubscriptionRuleArgs | undefined;
            if (!args || args.filterType === undefined) {
                throw new Error("Missing required property 'filterType'");
            }
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.subscriptionName === undefined) {
                throw new Error("Missing required property 'subscriptionName'");
            }
            if (!args || args.topicName === undefined) {
                throw new Error("Missing required property 'topicName'");
            }
            inputs["action"] = args ? args.action : undefined;
            inputs["correlationFilter"] = args ? args.correlationFilter : undefined;
            inputs["filterType"] = args ? args.filterType : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sqlFilter"] = args ? args.sqlFilter : undefined;
            inputs["subscriptionName"] = args ? args.subscriptionName : undefined;
            inputs["topicName"] = args ? args.topicName : undefined;
        }
        super(SubscriptionRule.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SubscriptionRule resources.
 */
export interface SubscriptionRuleState {
    /**
     * Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
     */
    readonly action?: kulado.Input<string>;
    /**
     * A `correlation_filter` block as documented below to be evaluated against a BrokeredMessage. Required when `filter_type` is set to `CorrelationFilter`.
     */
    readonly correlationFilter?: kulado.Input<{ contentType?: kulado.Input<string>, correlationId?: kulado.Input<string>, label?: kulado.Input<string>, messageId?: kulado.Input<string>, replyTo?: kulado.Input<string>, replyToSessionId?: kulado.Input<string>, sessionId?: kulado.Input<string>, to?: kulado.Input<string> }>;
    /**
     * Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
     */
    readonly filterType?: kulado.Input<string>;
    /**
     * Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: kulado.Input<string>;
    /**
     * The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filter_type` is set to `SqlFilter`.
     */
    readonly sqlFilter?: kulado.Input<string>;
    /**
     * The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
     */
    readonly subscriptionName?: kulado.Input<string>;
    /**
     * The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
     */
    readonly topicName?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a SubscriptionRule resource.
 */
export interface SubscriptionRuleArgs {
    /**
     * Represents set of actions written in SQL language-based syntax that is performed against a BrokeredMessage.
     */
    readonly action?: kulado.Input<string>;
    /**
     * A `correlation_filter` block as documented below to be evaluated against a BrokeredMessage. Required when `filter_type` is set to `CorrelationFilter`.
     */
    readonly correlationFilter?: kulado.Input<{ contentType?: kulado.Input<string>, correlationId?: kulado.Input<string>, label?: kulado.Input<string>, messageId?: kulado.Input<string>, replyTo?: kulado.Input<string>, replyToSessionId?: kulado.Input<string>, sessionId?: kulado.Input<string>, to?: kulado.Input<string> }>;
    /**
     * Type of filter to be applied to a BrokeredMessage. Possible values are `SqlFilter` and `CorrelationFilter`.
     */
    readonly filterType: kulado.Input<string>;
    /**
     * Specifies the name of the ServiceBus Subscription Rule. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the ServiceBus Namespace in which the ServiceBus Topic exists. Changing this forces a new resource to be created.
     */
    readonly namespaceName: kulado.Input<string>;
    /**
     * The name of the resource group in the ServiceBus Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * Represents a filter written in SQL language-based syntax that to be evaluated against a BrokeredMessage. Required when `filter_type` is set to `SqlFilter`.
     */
    readonly sqlFilter?: kulado.Input<string>;
    /**
     * The name of the ServiceBus Subscription in which this Rule should be created. Changing this forces a new resource to be created.
     */
    readonly subscriptionName: kulado.Input<string>;
    /**
     * The name of the ServiceBus Topic in which the ServiceBus Subscription exists. Changing this forces a new resource to be created.
     */
    readonly topicName: kulado.Input<string>;
}
