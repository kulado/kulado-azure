// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manage an Azure Storage Account.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testrg = new azure.core.ResourceGroup("testrg", {
 *     location: "westus",
 *     name: "resourceGroupName",
 * });
 * const testsa = new azure.storage.Account("testsa", {
 *     accountReplicationType: "GRS",
 *     accountTier: "Standard",
 *     location: "westus",
 *     name: "storageaccountname",
 *     resourceGroupName: testrg.name,
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 * 
 * ## Example Usage with Network Rules
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testrg = new azure.core.ResourceGroup("testrg", {
 *     location: "westus",
 *     name: "resourceGroupName",
 * });
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: testrg.location,
 *     name: "virtnetname",
 *     resourceGroupName: testrg.name,
 * });
 * const testSubnet = new azure.network.Subnet("test", {
 *     addressPrefix: "10.0.2.0/24",
 *     name: "subnetname",
 *     resourceGroupName: testrg.name,
 *     serviceEndpoints: [
 *         "Microsoft.Sql",
 *         "Microsoft.Storage",
 *     ],
 *     virtualNetworkName: testVirtualNetwork.name,
 * });
 * const testsa = new azure.storage.Account("testsa", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: testrg.location,
 *     name: "storageaccountname",
 *     networkRules: {
 *         defaultAction: "Deny",
 *         ipRules: ["100.0.0.1"],
 *         virtualNetworkSubnetIds: [testSubnet.id],
 *     },
 *     resourceGroupName: testrg.name,
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/storage_account.html.markdown.
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
    public static readonly __kuladoType = 'azure:storage/account:Account';

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
     * Defines the access tier for `BlobStorage` and `StorageV2` accounts. Valid options are `Hot` and `Cool`, defaults to `Hot`.
     */
    public readonly accessTier!: kulado.Output<string>;
    /**
     * The Encryption Source for this Storage Account. Possible values are `Microsoft.Keyvault` and `Microsoft.Storage`. Defaults to `Microsoft.Storage`.
     */
    public readonly accountEncryptionSource!: kulado.Output<string | undefined>;
    /**
     * Defines the Kind of account. Valid options are `Storage`,
     * `StorageV2` and `BlobStorage`. Changing this forces a new resource to be created.
     * Defaults to `Storage`.
     */
    public readonly accountKind!: kulado.Output<string | undefined>;
    /**
     * Defines the type of replication to use for this storage account. Valid options are `LRS`, `GRS`, `RAGRS` and `ZRS`.
     */
    public readonly accountReplicationType!: kulado.Output<string>;
    /**
     * Defines the Tier to use for this storage account. Valid options are `Standard` and `Premium`. Changing this forces a new resource to be created
     */
    public readonly accountTier!: kulado.Output<string>;
    public readonly accountType!: kulado.Output<string>;
    /**
     * A `custom_domain` block as documented below.
     */
    public readonly customDomain!: kulado.Output<{ name: string, useSubdomain?: boolean } | undefined>;
    /**
     * Boolean flag which controls if Encryption Services are enabled for Blob storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
     */
    public readonly enableBlobEncryption!: kulado.Output<boolean | undefined>;
    /**
     * Boolean flag which controls if Encryption Services are enabled for File storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
     */
    public readonly enableFileEncryption!: kulado.Output<boolean | undefined>;
    /**
     * Boolean flag which forces HTTPS if enabled, see [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
     * for more information.
     */
    public readonly enableHttpsTrafficOnly!: kulado.Output<boolean | undefined>;
    /**
     * A Managed Service Identity block as defined below.
     */
    public readonly identity!: kulado.Output<{ principalId: string, tenantId: string, type: string }>;
    /**
     * Is Hierarchical Namespace enabled? This can be used with Azure Data Lake Storage Gen 2 ([see here for more information](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-account/)). Changing this forces a new resource to be created.
     */
    public readonly isHnsEnabled!: kulado.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the
     * resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * The Custom Domain Name to use for the Storage Account, which will be validated by Azure.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * A `network_rules` block as documented below.
     */
    public readonly networkRules!: kulado.Output<{ bypasses: string[], defaultAction?: string, ipRules: string[], virtualNetworkSubnetIds: string[] } | undefined>;
    /**
     * The primary access key for the storage account.
     */
    public /*out*/ readonly primaryAccessKey!: kulado.Output<string>;
    /**
     * The connection string associated with the primary blob location.
     */
    public /*out*/ readonly primaryBlobConnectionString!: kulado.Output<string>;
    /**
     * The endpoint URL for blob storage in the primary location.
     */
    public /*out*/ readonly primaryBlobEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for blob storage in the primary location.
     */
    public /*out*/ readonly primaryBlobHost!: kulado.Output<string>;
    /**
     * The connection string associated with the primary location.
     */
    public /*out*/ readonly primaryConnectionString!: kulado.Output<string>;
    /**
     * The endpoint URL for DFS storage in the primary location.
     */
    public /*out*/ readonly primaryDfsEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for DFS storage in the primary location.
     */
    public /*out*/ readonly primaryDfsHost!: kulado.Output<string>;
    /**
     * The endpoint URL for file storage in the primary location.
     */
    public /*out*/ readonly primaryFileEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for file storage in the primary location.
     */
    public /*out*/ readonly primaryFileHost!: kulado.Output<string>;
    /**
     * The primary location of the storage account.
     */
    public /*out*/ readonly primaryLocation!: kulado.Output<string>;
    /**
     * The endpoint URL for queue storage in the primary location.
     */
    public /*out*/ readonly primaryQueueEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for queue storage in the primary location.
     */
    public /*out*/ readonly primaryQueueHost!: kulado.Output<string>;
    /**
     * The endpoint URL for table storage in the primary location.
     */
    public /*out*/ readonly primaryTableEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for table storage in the primary location.
     */
    public /*out*/ readonly primaryTableHost!: kulado.Output<string>;
    /**
     * The endpoint URL for web storage in the primary location.
     */
    public /*out*/ readonly primaryWebEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for web storage in the primary location.
     */
    public /*out*/ readonly primaryWebHost!: kulado.Output<string>;
    /**
     * The name of the resource group in which to
     * create the storage account. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The secondary access key for the storage account.
     */
    public /*out*/ readonly secondaryAccessKey!: kulado.Output<string>;
    /**
     * The connection string associated with the secondary blob location.
     */
    public /*out*/ readonly secondaryBlobConnectionString!: kulado.Output<string>;
    /**
     * The endpoint URL for blob storage in the secondary location.
     */
    public /*out*/ readonly secondaryBlobEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for blob storage in the secondary location.
     */
    public /*out*/ readonly secondaryBlobHost!: kulado.Output<string>;
    /**
     * The connection string associated with the secondary location.
     */
    public /*out*/ readonly secondaryConnectionString!: kulado.Output<string>;
    /**
     * The endpoint URL for DFS storage in the secondary location.
     */
    public /*out*/ readonly secondaryDfsEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for DFS storage in the secondary location.
     */
    public /*out*/ readonly secondaryDfsHost!: kulado.Output<string>;
    /**
     * The endpoint URL for file storage in the secondary location.
     */
    public /*out*/ readonly secondaryFileEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for file storage in the secondary location.
     */
    public /*out*/ readonly secondaryFileHost!: kulado.Output<string>;
    /**
     * The secondary location of the storage account.
     */
    public /*out*/ readonly secondaryLocation!: kulado.Output<string>;
    /**
     * The endpoint URL for queue storage in the secondary location.
     */
    public /*out*/ readonly secondaryQueueEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for queue storage in the secondary location.
     */
    public /*out*/ readonly secondaryQueueHost!: kulado.Output<string>;
    /**
     * The endpoint URL for table storage in the secondary location.
     */
    public /*out*/ readonly secondaryTableEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for table storage in the secondary location.
     */
    public /*out*/ readonly secondaryTableHost!: kulado.Output<string>;
    /**
     * The endpoint URL for web storage in the secondary location.
     */
    public /*out*/ readonly secondaryWebEndpoint!: kulado.Output<string>;
    /**
     * The hostname with port if applicable for web storage in the secondary location.
     */
    public /*out*/ readonly secondaryWebHost!: kulado.Output<string>;
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
            inputs["accessTier"] = state ? state.accessTier : undefined;
            inputs["accountEncryptionSource"] = state ? state.accountEncryptionSource : undefined;
            inputs["accountKind"] = state ? state.accountKind : undefined;
            inputs["accountReplicationType"] = state ? state.accountReplicationType : undefined;
            inputs["accountTier"] = state ? state.accountTier : undefined;
            inputs["accountType"] = state ? state.accountType : undefined;
            inputs["customDomain"] = state ? state.customDomain : undefined;
            inputs["enableBlobEncryption"] = state ? state.enableBlobEncryption : undefined;
            inputs["enableFileEncryption"] = state ? state.enableFileEncryption : undefined;
            inputs["enableHttpsTrafficOnly"] = state ? state.enableHttpsTrafficOnly : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["isHnsEnabled"] = state ? state.isHnsEnabled : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkRules"] = state ? state.networkRules : undefined;
            inputs["primaryAccessKey"] = state ? state.primaryAccessKey : undefined;
            inputs["primaryBlobConnectionString"] = state ? state.primaryBlobConnectionString : undefined;
            inputs["primaryBlobEndpoint"] = state ? state.primaryBlobEndpoint : undefined;
            inputs["primaryBlobHost"] = state ? state.primaryBlobHost : undefined;
            inputs["primaryConnectionString"] = state ? state.primaryConnectionString : undefined;
            inputs["primaryDfsEndpoint"] = state ? state.primaryDfsEndpoint : undefined;
            inputs["primaryDfsHost"] = state ? state.primaryDfsHost : undefined;
            inputs["primaryFileEndpoint"] = state ? state.primaryFileEndpoint : undefined;
            inputs["primaryFileHost"] = state ? state.primaryFileHost : undefined;
            inputs["primaryLocation"] = state ? state.primaryLocation : undefined;
            inputs["primaryQueueEndpoint"] = state ? state.primaryQueueEndpoint : undefined;
            inputs["primaryQueueHost"] = state ? state.primaryQueueHost : undefined;
            inputs["primaryTableEndpoint"] = state ? state.primaryTableEndpoint : undefined;
            inputs["primaryTableHost"] = state ? state.primaryTableHost : undefined;
            inputs["primaryWebEndpoint"] = state ? state.primaryWebEndpoint : undefined;
            inputs["primaryWebHost"] = state ? state.primaryWebHost : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secondaryAccessKey"] = state ? state.secondaryAccessKey : undefined;
            inputs["secondaryBlobConnectionString"] = state ? state.secondaryBlobConnectionString : undefined;
            inputs["secondaryBlobEndpoint"] = state ? state.secondaryBlobEndpoint : undefined;
            inputs["secondaryBlobHost"] = state ? state.secondaryBlobHost : undefined;
            inputs["secondaryConnectionString"] = state ? state.secondaryConnectionString : undefined;
            inputs["secondaryDfsEndpoint"] = state ? state.secondaryDfsEndpoint : undefined;
            inputs["secondaryDfsHost"] = state ? state.secondaryDfsHost : undefined;
            inputs["secondaryFileEndpoint"] = state ? state.secondaryFileEndpoint : undefined;
            inputs["secondaryFileHost"] = state ? state.secondaryFileHost : undefined;
            inputs["secondaryLocation"] = state ? state.secondaryLocation : undefined;
            inputs["secondaryQueueEndpoint"] = state ? state.secondaryQueueEndpoint : undefined;
            inputs["secondaryQueueHost"] = state ? state.secondaryQueueHost : undefined;
            inputs["secondaryTableEndpoint"] = state ? state.secondaryTableEndpoint : undefined;
            inputs["secondaryTableHost"] = state ? state.secondaryTableHost : undefined;
            inputs["secondaryWebEndpoint"] = state ? state.secondaryWebEndpoint : undefined;
            inputs["secondaryWebHost"] = state ? state.secondaryWebHost : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as AccountArgs | undefined;
            if (!args || args.accountReplicationType === undefined) {
                throw new Error("Missing required property 'accountReplicationType'");
            }
            if (!args || args.accountTier === undefined) {
                throw new Error("Missing required property 'accountTier'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accessTier"] = args ? args.accessTier : undefined;
            inputs["accountEncryptionSource"] = args ? args.accountEncryptionSource : undefined;
            inputs["accountKind"] = args ? args.accountKind : undefined;
            inputs["accountReplicationType"] = args ? args.accountReplicationType : undefined;
            inputs["accountTier"] = args ? args.accountTier : undefined;
            inputs["accountType"] = args ? args.accountType : undefined;
            inputs["customDomain"] = args ? args.customDomain : undefined;
            inputs["enableBlobEncryption"] = args ? args.enableBlobEncryption : undefined;
            inputs["enableFileEncryption"] = args ? args.enableFileEncryption : undefined;
            inputs["enableHttpsTrafficOnly"] = args ? args.enableHttpsTrafficOnly : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["isHnsEnabled"] = args ? args.isHnsEnabled : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkRules"] = args ? args.networkRules : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["primaryAccessKey"] = undefined /*out*/;
            inputs["primaryBlobConnectionString"] = undefined /*out*/;
            inputs["primaryBlobEndpoint"] = undefined /*out*/;
            inputs["primaryBlobHost"] = undefined /*out*/;
            inputs["primaryConnectionString"] = undefined /*out*/;
            inputs["primaryDfsEndpoint"] = undefined /*out*/;
            inputs["primaryDfsHost"] = undefined /*out*/;
            inputs["primaryFileEndpoint"] = undefined /*out*/;
            inputs["primaryFileHost"] = undefined /*out*/;
            inputs["primaryLocation"] = undefined /*out*/;
            inputs["primaryQueueEndpoint"] = undefined /*out*/;
            inputs["primaryQueueHost"] = undefined /*out*/;
            inputs["primaryTableEndpoint"] = undefined /*out*/;
            inputs["primaryTableHost"] = undefined /*out*/;
            inputs["primaryWebEndpoint"] = undefined /*out*/;
            inputs["primaryWebHost"] = undefined /*out*/;
            inputs["secondaryAccessKey"] = undefined /*out*/;
            inputs["secondaryBlobConnectionString"] = undefined /*out*/;
            inputs["secondaryBlobEndpoint"] = undefined /*out*/;
            inputs["secondaryBlobHost"] = undefined /*out*/;
            inputs["secondaryConnectionString"] = undefined /*out*/;
            inputs["secondaryDfsEndpoint"] = undefined /*out*/;
            inputs["secondaryDfsHost"] = undefined /*out*/;
            inputs["secondaryFileEndpoint"] = undefined /*out*/;
            inputs["secondaryFileHost"] = undefined /*out*/;
            inputs["secondaryLocation"] = undefined /*out*/;
            inputs["secondaryQueueEndpoint"] = undefined /*out*/;
            inputs["secondaryQueueHost"] = undefined /*out*/;
            inputs["secondaryTableEndpoint"] = undefined /*out*/;
            inputs["secondaryTableHost"] = undefined /*out*/;
            inputs["secondaryWebEndpoint"] = undefined /*out*/;
            inputs["secondaryWebHost"] = undefined /*out*/;
        }
        super(Account.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Account resources.
 */
export interface AccountState {
    /**
     * Defines the access tier for `BlobStorage` and `StorageV2` accounts. Valid options are `Hot` and `Cool`, defaults to `Hot`.
     */
    readonly accessTier?: kulado.Input<string>;
    /**
     * The Encryption Source for this Storage Account. Possible values are `Microsoft.Keyvault` and `Microsoft.Storage`. Defaults to `Microsoft.Storage`.
     */
    readonly accountEncryptionSource?: kulado.Input<string>;
    /**
     * Defines the Kind of account. Valid options are `Storage`,
     * `StorageV2` and `BlobStorage`. Changing this forces a new resource to be created.
     * Defaults to `Storage`.
     */
    readonly accountKind?: kulado.Input<string>;
    /**
     * Defines the type of replication to use for this storage account. Valid options are `LRS`, `GRS`, `RAGRS` and `ZRS`.
     */
    readonly accountReplicationType?: kulado.Input<string>;
    /**
     * Defines the Tier to use for this storage account. Valid options are `Standard` and `Premium`. Changing this forces a new resource to be created
     */
    readonly accountTier?: kulado.Input<string>;
    readonly accountType?: kulado.Input<string>;
    /**
     * A `custom_domain` block as documented below.
     */
    readonly customDomain?: kulado.Input<{ name: kulado.Input<string>, useSubdomain?: kulado.Input<boolean> }>;
    /**
     * Boolean flag which controls if Encryption Services are enabled for Blob storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
     */
    readonly enableBlobEncryption?: kulado.Input<boolean>;
    /**
     * Boolean flag which controls if Encryption Services are enabled for File storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
     */
    readonly enableFileEncryption?: kulado.Input<boolean>;
    /**
     * Boolean flag which forces HTTPS if enabled, see [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
     * for more information.
     */
    readonly enableHttpsTrafficOnly?: kulado.Input<boolean>;
    /**
     * A Managed Service Identity block as defined below.
     */
    readonly identity?: kulado.Input<{ principalId?: kulado.Input<string>, tenantId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * Is Hierarchical Namespace enabled? This can be used with Azure Data Lake Storage Gen 2 ([see here for more information](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-account/)). Changing this forces a new resource to be created.
     */
    readonly isHnsEnabled?: kulado.Input<boolean>;
    /**
     * Specifies the supported Azure location where the
     * resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The Custom Domain Name to use for the Storage Account, which will be validated by Azure.
     */
    readonly name?: kulado.Input<string>;
    /**
     * A `network_rules` block as documented below.
     */
    readonly networkRules?: kulado.Input<{ bypasses?: kulado.Input<kulado.Input<string>[]>, defaultAction?: kulado.Input<string>, ipRules?: kulado.Input<kulado.Input<string>[]>, virtualNetworkSubnetIds?: kulado.Input<kulado.Input<string>[]> }>;
    /**
     * The primary access key for the storage account.
     */
    readonly primaryAccessKey?: kulado.Input<string>;
    /**
     * The connection string associated with the primary blob location.
     */
    readonly primaryBlobConnectionString?: kulado.Input<string>;
    /**
     * The endpoint URL for blob storage in the primary location.
     */
    readonly primaryBlobEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for blob storage in the primary location.
     */
    readonly primaryBlobHost?: kulado.Input<string>;
    /**
     * The connection string associated with the primary location.
     */
    readonly primaryConnectionString?: kulado.Input<string>;
    /**
     * The endpoint URL for DFS storage in the primary location.
     */
    readonly primaryDfsEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for DFS storage in the primary location.
     */
    readonly primaryDfsHost?: kulado.Input<string>;
    /**
     * The endpoint URL for file storage in the primary location.
     */
    readonly primaryFileEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for file storage in the primary location.
     */
    readonly primaryFileHost?: kulado.Input<string>;
    /**
     * The primary location of the storage account.
     */
    readonly primaryLocation?: kulado.Input<string>;
    /**
     * The endpoint URL for queue storage in the primary location.
     */
    readonly primaryQueueEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for queue storage in the primary location.
     */
    readonly primaryQueueHost?: kulado.Input<string>;
    /**
     * The endpoint URL for table storage in the primary location.
     */
    readonly primaryTableEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for table storage in the primary location.
     */
    readonly primaryTableHost?: kulado.Input<string>;
    /**
     * The endpoint URL for web storage in the primary location.
     */
    readonly primaryWebEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for web storage in the primary location.
     */
    readonly primaryWebHost?: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the storage account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The secondary access key for the storage account.
     */
    readonly secondaryAccessKey?: kulado.Input<string>;
    /**
     * The connection string associated with the secondary blob location.
     */
    readonly secondaryBlobConnectionString?: kulado.Input<string>;
    /**
     * The endpoint URL for blob storage in the secondary location.
     */
    readonly secondaryBlobEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for blob storage in the secondary location.
     */
    readonly secondaryBlobHost?: kulado.Input<string>;
    /**
     * The connection string associated with the secondary location.
     */
    readonly secondaryConnectionString?: kulado.Input<string>;
    /**
     * The endpoint URL for DFS storage in the secondary location.
     */
    readonly secondaryDfsEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for DFS storage in the secondary location.
     */
    readonly secondaryDfsHost?: kulado.Input<string>;
    /**
     * The endpoint URL for file storage in the secondary location.
     */
    readonly secondaryFileEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for file storage in the secondary location.
     */
    readonly secondaryFileHost?: kulado.Input<string>;
    /**
     * The secondary location of the storage account.
     */
    readonly secondaryLocation?: kulado.Input<string>;
    /**
     * The endpoint URL for queue storage in the secondary location.
     */
    readonly secondaryQueueEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for queue storage in the secondary location.
     */
    readonly secondaryQueueHost?: kulado.Input<string>;
    /**
     * The endpoint URL for table storage in the secondary location.
     */
    readonly secondaryTableEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for table storage in the secondary location.
     */
    readonly secondaryTableHost?: kulado.Input<string>;
    /**
     * The endpoint URL for web storage in the secondary location.
     */
    readonly secondaryWebEndpoint?: kulado.Input<string>;
    /**
     * The hostname with port if applicable for web storage in the secondary location.
     */
    readonly secondaryWebHost?: kulado.Input<string>;
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
     * Defines the access tier for `BlobStorage` and `StorageV2` accounts. Valid options are `Hot` and `Cool`, defaults to `Hot`.
     */
    readonly accessTier?: kulado.Input<string>;
    /**
     * The Encryption Source for this Storage Account. Possible values are `Microsoft.Keyvault` and `Microsoft.Storage`. Defaults to `Microsoft.Storage`.
     */
    readonly accountEncryptionSource?: kulado.Input<string>;
    /**
     * Defines the Kind of account. Valid options are `Storage`,
     * `StorageV2` and `BlobStorage`. Changing this forces a new resource to be created.
     * Defaults to `Storage`.
     */
    readonly accountKind?: kulado.Input<string>;
    /**
     * Defines the type of replication to use for this storage account. Valid options are `LRS`, `GRS`, `RAGRS` and `ZRS`.
     */
    readonly accountReplicationType: kulado.Input<string>;
    /**
     * Defines the Tier to use for this storage account. Valid options are `Standard` and `Premium`. Changing this forces a new resource to be created
     */
    readonly accountTier: kulado.Input<string>;
    readonly accountType?: kulado.Input<string>;
    /**
     * A `custom_domain` block as documented below.
     */
    readonly customDomain?: kulado.Input<{ name: kulado.Input<string>, useSubdomain?: kulado.Input<boolean> }>;
    /**
     * Boolean flag which controls if Encryption Services are enabled for Blob storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
     */
    readonly enableBlobEncryption?: kulado.Input<boolean>;
    /**
     * Boolean flag which controls if Encryption Services are enabled for File storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
     */
    readonly enableFileEncryption?: kulado.Input<boolean>;
    /**
     * Boolean flag which forces HTTPS if enabled, see [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
     * for more information.
     */
    readonly enableHttpsTrafficOnly?: kulado.Input<boolean>;
    /**
     * A Managed Service Identity block as defined below.
     */
    readonly identity?: kulado.Input<{ principalId?: kulado.Input<string>, tenantId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * Is Hierarchical Namespace enabled? This can be used with Azure Data Lake Storage Gen 2 ([see here for more information](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-account/)). Changing this forces a new resource to be created.
     */
    readonly isHnsEnabled?: kulado.Input<boolean>;
    /**
     * Specifies the supported Azure location where the
     * resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The Custom Domain Name to use for the Storage Account, which will be validated by Azure.
     */
    readonly name?: kulado.Input<string>;
    /**
     * A `network_rules` block as documented below.
     */
    readonly networkRules?: kulado.Input<{ bypasses?: kulado.Input<kulado.Input<string>[]>, defaultAction?: kulado.Input<string>, ipRules?: kulado.Input<kulado.Input<string>[]>, virtualNetworkSubnetIds?: kulado.Input<kulado.Input<string>[]> }>;
    /**
     * The name of the resource group in which to
     * create the storage account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}
