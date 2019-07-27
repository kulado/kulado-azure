// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages an Azure Batch account.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "westeurope",
 *     name: "testbatch",
 * });
 * const testStorageAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: testResourceGroup.location,
 *     name: "teststorage",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testAccount = new azure.batch.Account("test", {
 *     location: testResourceGroup.location,
 *     name: "testbatchaccount",
 *     poolAllocationMode: "BatchService",
 *     resourceGroupName: testResourceGroup.name,
 *     storageAccountId: testStorageAccount.id,
 *     tags: {
 *         env: "test",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/batch_account.html.markdown.
 */
export class Account extends kulado.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: AccountState, opts?: kulado.CustomResourceOptions): Account {
        return new Account(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:batch/account:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Account.__kuladoType;
    }

    /**
     * The account endpoint used to interact with the Batch service.
     */
    public /*out*/ readonly accountEndpoint!: kulado.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Specifies the mode to use for pool allocation. Possible values are `BatchService` or `UserSubscription`. Defaults to `BatchService`.
     */
    public readonly poolAllocationMode!: kulado.Output<string | undefined>;
    /**
     * The Batch account primary access key.
     */
    public /*out*/ readonly primaryAccessKey!: kulado.Output<string>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The Batch account secondary access key.
     */
    public /*out*/ readonly secondaryAccessKey!: kulado.Output<string>;
    /**
     * Specifies the storage account to use for the Batch account. If not specified, Azure Batch will manage the storage.
     */
    public readonly storageAccountId!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountArgs | AccountState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AccountState | undefined;
            inputs["accountEndpoint"] = state ? state.accountEndpoint : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["poolAllocationMode"] = state ? state.poolAllocationMode : undefined;
            inputs["primaryAccessKey"] = state ? state.primaryAccessKey : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secondaryAccessKey"] = state ? state.secondaryAccessKey : undefined;
            inputs["storageAccountId"] = state ? state.storageAccountId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as AccountArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["poolAllocationMode"] = args ? args.poolAllocationMode : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["accountEndpoint"] = undefined /*out*/;
            inputs["primaryAccessKey"] = undefined /*out*/;
            inputs["secondaryAccessKey"] = undefined /*out*/;
        }
        super(Account.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Account resources.
 */
export interface AccountState {
    /**
     * The account endpoint used to interact with the Batch service.
     */
    readonly accountEndpoint?: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the mode to use for pool allocation. Possible values are `BatchService` or `UserSubscription`. Defaults to `BatchService`.
     */
    readonly poolAllocationMode?: kulado.Input<string>;
    /**
     * The Batch account primary access key.
     */
    readonly primaryAccessKey?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The Batch account secondary access key.
     */
    readonly secondaryAccessKey?: kulado.Input<string>;
    /**
     * Specifies the storage account to use for the Batch account. If not specified, Azure Batch will manage the storage.
     */
    readonly storageAccountId?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the mode to use for pool allocation. Possible values are `BatchService` or `UserSubscription`. Defaults to `BatchService`.
     */
    readonly poolAllocationMode?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * Specifies the storage account to use for the Batch account. If not specified, Azure Batch will manage the storage.
     */
    readonly storageAccountId?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}