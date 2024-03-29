// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to obtain a Shared Access Signature (SAS Token) for an existing Storage Account.
 * 
 * Shared access signatures allow fine-grained, ephemeral access control to various aspects of an Azure Storage Account.
 * 
 * Note that this is an [Account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/constructing-an-account-sas)
 * and *not* a [Service SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/constructing-a-service-sas).
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
 * const test = testsa.primaryConnectionString.apply(primaryConnectionString => azure.storage.getAccountSAS({
 *     connectionString: primaryConnectionString,
 *     expiry: "2020-03-21",
 *     httpsOnly: true,
 *     permissions: {
 *         add: true,
 *         create: true,
 *         delete: false,
 *         list: false,
 *         process: false,
 *         read: true,
 *         update: false,
 *         write: true,
 *     },
 *     resourceTypes: {
 *         container: false,
 *         object: false,
 *         service: true,
 *     },
 *     services: {
 *         blob: true,
 *         file: false,
 *         queue: false,
 *         table: false,
 *     },
 *     start: "2018-03-21",
 * }));
 * 
 * export const sasUrlQueryString = test.sas;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/storage_account_sas.html.markdown.
 */
export function getAccountSAS(args: GetAccountSASArgs, opts?: kulado.InvokeOptions): Promise<GetAccountSASResult> & GetAccountSASResult {
    const promise: Promise<GetAccountSASResult> = kulado.runtime.invoke("azure:storage/getAccountSAS:getAccountSAS", {
        "connectionString": args.connectionString,
        "expiry": args.expiry,
        "httpsOnly": args.httpsOnly,
        "permissions": args.permissions,
        "resourceTypes": args.resourceTypes,
        "services": args.services,
        "start": args.start,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getAccountSAS.
 */
export interface GetAccountSASArgs {
    readonly connectionString: string;
    /**
     * The expiration time and date of this SAS. Must be a valid ISO-8601 format time/date string.
     */
    readonly expiry: string;
    /**
     * Only permit `https` access. If `false`, both `http` and `https` are permitted. Defaults to `true`.
     */
    readonly httpsOnly?: boolean;
    /**
     * A `permissions` block as defined below.
     */
    readonly permissions: { add: boolean, create: boolean, delete: boolean, list: boolean, process: boolean, read: boolean, update: boolean, write: boolean };
    /**
     * A `resource_types` block as defined below.
     */
    readonly resourceTypes: { container: boolean, object: boolean, service: boolean };
    /**
     * A `services` block as defined below.
     */
    readonly services: { blob: boolean, file: boolean, queue: boolean, table: boolean };
    /**
     * The starting time and date of validity of this SAS. Must be a valid ISO-8601 format time/date string.
     */
    readonly start: string;
}

/**
 * A collection of values returned by getAccountSAS.
 */
export interface GetAccountSASResult {
    readonly connectionString: string;
    readonly expiry: string;
    readonly httpsOnly?: boolean;
    readonly permissions: { add: boolean, create: boolean, delete: boolean, list: boolean, process: boolean, read: boolean, update: boolean, write: boolean };
    readonly resourceTypes: { container: boolean, object: boolean, service: boolean };
    /**
     * The computed Account Shared Access Signature (SAS).
     */
    readonly sas: string;
    readonly services: { blob: boolean, file: boolean, queue: boolean, table: boolean };
    readonly start: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
