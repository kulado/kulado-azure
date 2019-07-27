// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/relay_namespace.html.markdown.
 */
export class Namespace extends kulado.CustomResource {
    /**
     * Get an existing Namespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: NamespaceState, opts?: kulado.CustomResourceOptions): Namespace {
        return new Namespace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:relay/namespace:Namespace';

    /**
     * Returns true if the given object is an instance of Namespace.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Namespace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Namespace.__kuladoType;
    }

    /**
     * Specifies the supported Azure location where the Azure Relay Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * The Identifier for Azure Insights metrics.
     */
    public /*out*/ readonly metricId!: kulado.Output<string>;
    /**
     * Specifies the name of the Azure Relay Namespace. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The primary connection string for the authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly primaryConnectionString!: kulado.Output<string>;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly primaryKey!: kulado.Output<string>;
    /**
     * The name of the resource group in which to create the Azure Relay Namespace.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The secondary connection string for the authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly secondaryConnectionString!: kulado.Output<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly secondaryKey!: kulado.Output<string>;
    /**
     * ) A `sku` block as described below.
     */
    public readonly sku!: kulado.Output<{ name: string }>;
    /**
     * The name of the SKU to use. At this time the only supported value is `Standard`.
     */
    public readonly skuName!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;

    /**
     * Create a Namespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: NamespaceArgs | NamespaceState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NamespaceState | undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["metricId"] = state ? state.metricId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["primaryConnectionString"] = state ? state.primaryConnectionString : undefined;
            inputs["primaryKey"] = state ? state.primaryKey : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secondaryConnectionString"] = state ? state.secondaryConnectionString : undefined;
            inputs["secondaryKey"] = state ? state.secondaryKey : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["skuName"] = state ? state.skuName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as NamespaceArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["skuName"] = args ? args.skuName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["metricId"] = undefined /*out*/;
            inputs["primaryConnectionString"] = undefined /*out*/;
            inputs["primaryKey"] = undefined /*out*/;
            inputs["secondaryConnectionString"] = undefined /*out*/;
            inputs["secondaryKey"] = undefined /*out*/;
        }
        super(Namespace.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Namespace resources.
 */
export interface NamespaceState {
    /**
     * Specifies the supported Azure location where the Azure Relay Namespace exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The Identifier for Azure Insights metrics.
     */
    readonly metricId?: kulado.Input<string>;
    /**
     * Specifies the name of the Azure Relay Namespace. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The primary connection string for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly primaryConnectionString?: kulado.Input<string>;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly primaryKey?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Azure Relay Namespace.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The secondary connection string for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly secondaryConnectionString?: kulado.Input<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly secondaryKey?: kulado.Input<string>;
    /**
     * ) A `sku` block as described below.
     */
    readonly sku?: kulado.Input<{ name: kulado.Input<string> }>;
    /**
     * The name of the SKU to use. At this time the only supported value is `Standard`.
     */
    readonly skuName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    /**
     * Specifies the supported Azure location where the Azure Relay Namespace exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Azure Relay Namespace. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Azure Relay Namespace.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * ) A `sku` block as described below.
     */
    readonly sku?: kulado.Input<{ name: kulado.Input<string> }>;
    /**
     * The name of the SKU to use. At this time the only supported value is `Standard`.
     */
    readonly skuName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}