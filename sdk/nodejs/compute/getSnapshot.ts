// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Snapshot.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.compute.getSnapshot({
 *     name: "my-snapshot",
 *     resourceGroupName: "my-resource-group",
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/snapshot.html.markdown.
 */
export function getSnapshot(args: GetSnapshotArgs, opts?: kulado.InvokeOptions): Promise<GetSnapshotResult> & GetSnapshotResult {
    const promise: Promise<GetSnapshotResult> = kulado.runtime.invoke("azure:compute/getSnapshot:getSnapshot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getSnapshot.
 */
export interface GetSnapshotArgs {
    /**
     * Specifies the name of the Snapshot.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group the Snapshot is located in.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getSnapshot.
 */
export interface GetSnapshotResult {
    readonly creationOption: string;
    /**
     * The size of the Snapshotted Disk in GB.
     */
    readonly diskSizeGb: number;
    readonly encryptionSettings: { diskEncryptionKeys: { secretUrl: string, sourceVaultId: string }[], enabled: boolean, keyEncryptionKeys: { keyUrl: string, sourceVaultId: string }[] }[];
    readonly name: string;
    readonly osType: string;
    readonly resourceGroupName: string;
    /**
     * The reference to an existing snapshot.
     */
    readonly sourceResourceId: string;
    /**
     * The URI to a Managed or Unmanaged Disk.
     */
    readonly sourceUri: string;
    /**
     * The ID of an storage account.
     */
    readonly storageAccountId: string;
    readonly timeCreated: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}