// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manage an Azure Storage Blob.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "westus",
 *     name: "acctestRG-d",
 * });
 * const testAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: "westus",
 *     name: "acctestaccs",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testContainer = new azure.storage.Container("test", {
 *     containerAccessType: "private",
 *     name: "vhds",
 *     resourceGroupName: testResourceGroup.name,
 *     storageAccountName: testAccount.name,
 * });
 * const testsb = new azure.storage.Blob("testsb", {
 *     name: "sample.vhd",
 *     resourceGroupName: testResourceGroup.name,
 *     size: 5120,
 *     storageAccountName: testAccount.name,
 *     storageContainerName: testContainer.name,
 *     type: "page",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/storage_blob.html.markdown.
 */
export class Blob extends kulado.CustomResource {
    /**
     * Get an existing Blob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: BlobState, opts?: kulado.CustomResourceOptions): Blob {
        return new Blob(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:storage/blob:Blob';

    /**
     * Returns true if the given object is an instance of Blob.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Blob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Blob.__kuladoType;
    }

    /**
     * The number of attempts to make per page or block when uploading. Defaults to `1`.
     */
    public readonly attempts!: kulado.Output<number | undefined>;
    /**
     * The content type of the storage blob. Cannot be defined if `source_uri` is defined. Defaults to `application/octet-stream`.
     */
    public readonly contentType!: kulado.Output<string | undefined>;
    /**
     * A map of custom blob metadata.
     */
    public readonly metadata!: kulado.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the storage blob. Must be unique within the storage container the blob is located.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
     */
    public readonly parallelism!: kulado.Output<number | undefined>;
    /**
     * The name of the resource group in which to
     * create the storage container. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
     */
    public readonly size!: kulado.Output<number | undefined>;
    /**
     * An absolute path to a file on the local system. Cannot be defined if `source_uri` is defined.
     */
    public readonly source!: kulado.Output<string | undefined>;
    /**
     * The URI of an existing blob, or a file in the Azure File service, to use as the source contents
     * for the blob to be created. Changing this forces a new resource to be created. Cannot be defined if `source` is defined.
     */
    public readonly sourceUri!: kulado.Output<string | undefined>;
    /**
     * Specifies the storage account in which to create the storage container.
     * Changing this forces a new resource to be created.
     */
    public readonly storageAccountName!: kulado.Output<string>;
    /**
     * The name of the storage container in which this blob should be created.
     */
    public readonly storageContainerName!: kulado.Output<string>;
    /**
     * The type of the storage blob to be created. One of either `block` or `page`. When not copying from an existing blob,
     * this becomes required.
     */
    public readonly type!: kulado.Output<string | undefined>;
    /**
     * The URL of the blob
     */
    public /*out*/ readonly url!: kulado.Output<string>;

    /**
     * Create a Blob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: BlobArgs | BlobState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as BlobState | undefined;
            inputs["attempts"] = state ? state.attempts : undefined;
            inputs["contentType"] = state ? state.contentType : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parallelism"] = state ? state.parallelism : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["source"] = state ? state.source : undefined;
            inputs["sourceUri"] = state ? state.sourceUri : undefined;
            inputs["storageAccountName"] = state ? state.storageAccountName : undefined;
            inputs["storageContainerName"] = state ? state.storageContainerName : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as BlobArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageAccountName === undefined) {
                throw new Error("Missing required property 'storageAccountName'");
            }
            if (!args || args.storageContainerName === undefined) {
                throw new Error("Missing required property 'storageContainerName'");
            }
            inputs["attempts"] = args ? args.attempts : undefined;
            inputs["contentType"] = args ? args.contentType : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parallelism"] = args ? args.parallelism : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["source"] = args ? args.source : undefined;
            inputs["sourceUri"] = args ? args.sourceUri : undefined;
            inputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            inputs["storageContainerName"] = args ? args.storageContainerName : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["url"] = undefined /*out*/;
        }
        super(Blob.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Blob resources.
 */
export interface BlobState {
    /**
     * The number of attempts to make per page or block when uploading. Defaults to `1`.
     */
    readonly attempts?: kulado.Input<number>;
    /**
     * The content type of the storage blob. Cannot be defined if `source_uri` is defined. Defaults to `application/octet-stream`.
     */
    readonly contentType?: kulado.Input<string>;
    /**
     * A map of custom blob metadata.
     */
    readonly metadata?: kulado.Input<{[key: string]: kulado.Input<string>}>;
    /**
     * The name of the storage blob. Must be unique within the storage container the blob is located.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
     */
    readonly parallelism?: kulado.Input<number>;
    /**
     * The name of the resource group in which to
     * create the storage container. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
     */
    readonly size?: kulado.Input<number>;
    /**
     * An absolute path to a file on the local system. Cannot be defined if `source_uri` is defined.
     */
    readonly source?: kulado.Input<string>;
    /**
     * The URI of an existing blob, or a file in the Azure File service, to use as the source contents
     * for the blob to be created. Changing this forces a new resource to be created. Cannot be defined if `source` is defined.
     */
    readonly sourceUri?: kulado.Input<string>;
    /**
     * Specifies the storage account in which to create the storage container.
     * Changing this forces a new resource to be created.
     */
    readonly storageAccountName?: kulado.Input<string>;
    /**
     * The name of the storage container in which this blob should be created.
     */
    readonly storageContainerName?: kulado.Input<string>;
    /**
     * The type of the storage blob to be created. One of either `block` or `page`. When not copying from an existing blob,
     * this becomes required.
     */
    readonly type?: kulado.Input<string>;
    /**
     * The URL of the blob
     */
    readonly url?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Blob resource.
 */
export interface BlobArgs {
    /**
     * The number of attempts to make per page or block when uploading. Defaults to `1`.
     */
    readonly attempts?: kulado.Input<number>;
    /**
     * The content type of the storage blob. Cannot be defined if `source_uri` is defined. Defaults to `application/octet-stream`.
     */
    readonly contentType?: kulado.Input<string>;
    /**
     * A map of custom blob metadata.
     */
    readonly metadata?: kulado.Input<{[key: string]: kulado.Input<string>}>;
    /**
     * The name of the storage blob. Must be unique within the storage container the blob is located.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
     */
    readonly parallelism?: kulado.Input<number>;
    /**
     * The name of the resource group in which to
     * create the storage container. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
     */
    readonly size?: kulado.Input<number>;
    /**
     * An absolute path to a file on the local system. Cannot be defined if `source_uri` is defined.
     */
    readonly source?: kulado.Input<string>;
    /**
     * The URI of an existing blob, or a file in the Azure File service, to use as the source contents
     * for the blob to be created. Changing this forces a new resource to be created. Cannot be defined if `source` is defined.
     */
    readonly sourceUri?: kulado.Input<string>;
    /**
     * Specifies the storage account in which to create the storage container.
     * Changing this forces a new resource to be created.
     */
    readonly storageAccountName: kulado.Input<string>;
    /**
     * The name of the storage container in which this blob should be created.
     */
    readonly storageContainerName: kulado.Input<string>;
    /**
     * The type of the storage blob to be created. One of either `block` or `page`. When not copying from an existing blob,
     * this becomes required.
     */
    readonly type?: kulado.Input<string>;
}
