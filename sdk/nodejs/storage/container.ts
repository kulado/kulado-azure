// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manage an Azure Storage Container.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "westus",
 *     name: "acctestRG",
 * });
 * const testAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: "westus",
 *     name: "accteststorageaccount",
 *     resourceGroupName: testResourceGroup.name,
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const testContainer = new azure.storage.Container("test", {
 *     containerAccessType: "private",
 *     name: "vhds",
 *     resourceGroupName: testResourceGroup.name,
 *     storageAccountName: testAccount.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/storage_container.html.markdown.
 */
export class Container extends kulado.CustomResource {
    /**
     * Get an existing Container resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ContainerState, opts?: kulado.CustomResourceOptions): Container {
        return new Container(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:storage/container:Container';

    /**
     * Returns true if the given object is an instance of Container.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Container {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Container.__kuladoType;
    }

    /**
     * The 'interface' for access the container provides. Can be either `blob`, `container` or `private`. Defaults to `private`.
     */
    public readonly containerAccessType!: kulado.Output<string | undefined>;
    /**
     * The name of the storage container. Must be unique within the storage service the container is located.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Key-value definition of additional properties associated to the storage container
     */
    public /*out*/ readonly properties!: kulado.Output<{[key: string]: any}>;
    /**
     * The name of the resource group in which to
     * create the storage container. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * Specifies the storage account in which to create the storage container.
     * Changing this forces a new resource to be created.
     */
    public readonly storageAccountName!: kulado.Output<string>;

    /**
     * Create a Container resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerArgs | ContainerState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ContainerState | undefined;
            inputs["containerAccessType"] = state ? state.containerAccessType : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["properties"] = state ? state.properties : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["storageAccountName"] = state ? state.storageAccountName : undefined;
        } else {
            const args = argsOrState as ContainerArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageAccountName === undefined) {
                throw new Error("Missing required property 'storageAccountName'");
            }
            inputs["containerAccessType"] = args ? args.containerAccessType : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            inputs["properties"] = undefined /*out*/;
        }
        super(Container.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Container resources.
 */
export interface ContainerState {
    /**
     * The 'interface' for access the container provides. Can be either `blob`, `container` or `private`. Defaults to `private`.
     */
    readonly containerAccessType?: kulado.Input<string>;
    /**
     * The name of the storage container. Must be unique within the storage service the container is located.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Key-value definition of additional properties associated to the storage container
     */
    readonly properties?: kulado.Input<{[key: string]: any}>;
    /**
     * The name of the resource group in which to
     * create the storage container. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * Specifies the storage account in which to create the storage container.
     * Changing this forces a new resource to be created.
     */
    readonly storageAccountName?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Container resource.
 */
export interface ContainerArgs {
    /**
     * The 'interface' for access the container provides. Can be either `blob`, `container` or `private`. Defaults to `private`.
     */
    readonly containerAccessType?: kulado.Input<string>;
    /**
     * The name of the storage container. Must be unique within the storage service the container is located.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the storage container. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * Specifies the storage account in which to create the storage container.
     * Changing this forces a new resource to be created.
     */
    readonly storageAccountName: kulado.Input<string>;
}
