// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Data Lake Store.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.datalake.getStore({
 *     name: "testdatalake",
 *     resourceGroupName: "testdatalake",
 * }));
 * 
 * export const dataLakeStoreId = test.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/data_lake_store.html.markdown.
 */
export function getStore(args: GetStoreArgs, opts?: kulado.InvokeOptions): Promise<GetStoreResult> & GetStoreResult {
    const promise: Promise<GetStoreResult> = kulado.runtime.invoke("azure:datalake/getStore:getStore", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getStore.
 */
export interface GetStoreArgs {
    /**
     * The name of the Data Lake Store.
     */
    readonly name: string;
    /**
     * The Name of the Resource Group where the Data Lake Store exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getStore.
 */
export interface GetStoreResult {
    /**
     * the Encryption State of this Data Lake Store Account, such as `Enabled` or `Disabled`.
     */
    readonly encryptionState: string;
    /**
     * the Encryption Type used for this Data Lake Store Account.
     */
    readonly encryptionType: string;
    /**
     * are Azure Service IP's allowed through the firewall?
     */
    readonly firewallAllowAzureIps: string;
    /**
     * the state of the firewall, such as `Enabled` or `Disabled`.
     */
    readonly firewallState: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags to assign to the Data Lake Store.
     */
    readonly tags: {[key: string]: any};
    /**
     * Current monthly commitment tier for the account.
     */
    readonly tier: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}