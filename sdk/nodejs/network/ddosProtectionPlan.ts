// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages an AzureNetwork DDoS Protection Plan.
 * 
 * > **NOTE** Azure only allow `one` DDoS Protection Plan per region.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const testDdosProtectionPlan = new azure.network.DdosProtectionPlan("test", {
 *     location: testResourceGroup.location,
 *     name: "example-protection-plan",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_ddos_protection_plan.html.markdown.
 */
export class DdosProtectionPlan extends kulado.CustomResource {
    /**
     * Get an existing DdosProtectionPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: DdosProtectionPlanState, opts?: kulado.CustomResourceOptions): DdosProtectionPlan {
        return new DdosProtectionPlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:network/ddosProtectionPlan:DdosProtectionPlan';

    /**
     * Returns true if the given object is an instance of DdosProtectionPlan.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosProtectionPlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === DdosProtectionPlan.__kuladoType;
    }

    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name of the Network DDoS Protection Plan. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * The Resource ID list of the Virtual Networks associated with DDoS Protection Plan.
     */
    public /*out*/ readonly virtualNetworkIds!: kulado.Output<string[]>;

    /**
     * Create a DdosProtectionPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosProtectionPlanArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosProtectionPlanArgs | DdosProtectionPlanState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DdosProtectionPlanState | undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["virtualNetworkIds"] = state ? state.virtualNetworkIds : undefined;
        } else {
            const args = argsOrState as DdosProtectionPlanArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["virtualNetworkIds"] = undefined /*out*/;
        }
        super(DdosProtectionPlan.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DdosProtectionPlan resources.
 */
export interface DdosProtectionPlanState {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Network DDoS Protection Plan. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The Resource ID list of the Virtual Networks associated with DDoS Protection Plan.
     */
    readonly virtualNetworkIds?: kulado.Input<kulado.Input<string>[]>;
}

/**
 * The set of arguments for constructing a DdosProtectionPlan resource.
 */
export interface DdosProtectionPlanArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Network DDoS Protection Plan. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}