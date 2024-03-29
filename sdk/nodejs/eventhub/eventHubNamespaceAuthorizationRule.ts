// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages an Authorization Rule for an Event Hub Namespace.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "resourceGroup1",
 * });
 * const testEventHubNamespace = new azure.eventhub.EventHubNamespace("test", {
 *     capacity: 2,
 *     location: testResourceGroup.location,
 *     name: "acceptanceTestEventHubNamespace",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: "Basic",
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * const testEventHubNamespaceAuthorizationRule = new azure.eventhub.EventHubNamespaceAuthorizationRule("test", {
 *     listen: true,
 *     manage: false,
 *     name: "navi",
 *     namespaceName: testEventHubNamespace.name,
 *     resourceGroupName: testResourceGroup.name,
 *     send: false,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventhub_namespace_authorization_rule.html.markdown.
 */
export class EventHubNamespaceAuthorizationRule extends kulado.CustomResource {
    /**
     * Get an existing EventHubNamespaceAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: EventHubNamespaceAuthorizationRuleState, opts?: kulado.CustomResourceOptions): EventHubNamespaceAuthorizationRule {
        return new EventHubNamespaceAuthorizationRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:eventhub/eventHubNamespaceAuthorizationRule:EventHubNamespaceAuthorizationRule';

    /**
     * Returns true if the given object is an instance of EventHubNamespaceAuthorizationRule.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventHubNamespaceAuthorizationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === EventHubNamespaceAuthorizationRule.__kuladoType;
    }

    /**
     * Grants listen access to this this Authorization Rule. Defaults to `false`.
     */
    public readonly listen!: kulado.Output<boolean | undefined>;
    public readonly location!: kulado.Output<string>;
    /**
     * Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    public readonly manage!: kulado.Output<boolean | undefined>;
    /**
     * Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: kulado.Output<string>;
    /**
     * The Primary Connection String for the Authorization Rule.
     */
    public /*out*/ readonly primaryConnectionString!: kulado.Output<string>;
    /**
     * The Primary Key for the Authorization Rule.
     */
    public /*out*/ readonly primaryKey!: kulado.Output<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The Secondary Connection String for the Authorization Rule.
     */
    public /*out*/ readonly secondaryConnectionString!: kulado.Output<string>;
    /**
     * The Secondary Key for the Authorization Rule.
     */
    public /*out*/ readonly secondaryKey!: kulado.Output<string>;
    /**
     * Grants send access to this this Authorization Rule. Defaults to `false`.
     */
    public readonly send!: kulado.Output<boolean | undefined>;

    /**
     * Create a EventHubNamespaceAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubNamespaceAuthorizationRuleArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventHubNamespaceAuthorizationRuleArgs | EventHubNamespaceAuthorizationRuleState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EventHubNamespaceAuthorizationRuleState | undefined;
            inputs["listen"] = state ? state.listen : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["manage"] = state ? state.manage : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["primaryConnectionString"] = state ? state.primaryConnectionString : undefined;
            inputs["primaryKey"] = state ? state.primaryKey : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secondaryConnectionString"] = state ? state.secondaryConnectionString : undefined;
            inputs["secondaryKey"] = state ? state.secondaryKey : undefined;
            inputs["send"] = state ? state.send : undefined;
        } else {
            const args = argsOrState as EventHubNamespaceAuthorizationRuleArgs | undefined;
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["listen"] = args ? args.listen : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["manage"] = args ? args.manage : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["send"] = args ? args.send : undefined;
            inputs["primaryConnectionString"] = undefined /*out*/;
            inputs["primaryKey"] = undefined /*out*/;
            inputs["secondaryConnectionString"] = undefined /*out*/;
            inputs["secondaryKey"] = undefined /*out*/;
        }
        super(EventHubNamespaceAuthorizationRule.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventHubNamespaceAuthorizationRule resources.
 */
export interface EventHubNamespaceAuthorizationRuleState {
    /**
     * Grants listen access to this this Authorization Rule. Defaults to `false`.
     */
    readonly listen?: kulado.Input<boolean>;
    readonly location?: kulado.Input<string>;
    /**
     * Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    readonly manage?: kulado.Input<boolean>;
    /**
     * Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: kulado.Input<string>;
    /**
     * The Primary Connection String for the Authorization Rule.
     */
    readonly primaryConnectionString?: kulado.Input<string>;
    /**
     * The Primary Key for the Authorization Rule.
     */
    readonly primaryKey?: kulado.Input<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The Secondary Connection String for the Authorization Rule.
     */
    readonly secondaryConnectionString?: kulado.Input<string>;
    /**
     * The Secondary Key for the Authorization Rule.
     */
    readonly secondaryKey?: kulado.Input<string>;
    /**
     * Grants send access to this this Authorization Rule. Defaults to `false`.
     */
    readonly send?: kulado.Input<boolean>;
}

/**
 * The set of arguments for constructing a EventHubNamespaceAuthorizationRule resource.
 */
export interface EventHubNamespaceAuthorizationRuleArgs {
    /**
     * Grants listen access to this this Authorization Rule. Defaults to `false`.
     */
    readonly listen?: kulado.Input<boolean>;
    readonly location?: kulado.Input<string>;
    /**
     * Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    readonly manage?: kulado.Input<boolean>;
    /**
     * Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName: kulado.Input<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * Grants send access to this this Authorization Rule. Defaults to `false`.
     */
    readonly send?: kulado.Input<boolean>;
}
