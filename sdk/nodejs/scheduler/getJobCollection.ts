// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Scheduler Job Collection.
 * 
 * > **NOTE:** Support for Scheduler Job Collections has been deprecated by Microsoft in favour of Logic Apps ([more information can be found at this link](https://docs.microsoft.com/en-us/azure/scheduler/migrate-from-scheduler-to-logic-apps)) - as such we plan to remove support for this data source as a part of version 2.0 of the AzureRM Provider.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.scheduler.getJobCollection({
 *     name: "tfex-job-collection",
 *     resourceGroupName: "tfex-job-collection-rg",
 * }));
 * 
 * export const jobCollectionState = azurerm_scheduler_job_collection_jobs.state;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/scheduler_job_collection.html.markdown.
 */
export function getJobCollection(args: GetJobCollectionArgs, opts?: kulado.InvokeOptions): Promise<GetJobCollectionResult> & GetJobCollectionResult {
    const promise: Promise<GetJobCollectionResult> = kulado.runtime.invoke("azure:scheduler/getJobCollection:getJobCollection", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getJobCollection.
 */
export interface GetJobCollectionArgs {
    /**
     * Specifies the name of the Scheduler Job Collection.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group in which the Scheduler Job Collection resides.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getJobCollection.
 */
export interface GetJobCollectionResult {
    /**
     * The Azure location where the resource exists.
     */
    readonly location: string;
    readonly name: string;
    /**
     * The Job collection quotas as documented in the `quota` block below.
     */
    readonly quotas: { maxJobCount: number, maxRecurrenceFrequency: string, maxRecurrenceInterval: number, maxRetryInterval: number }[];
    readonly resourceGroupName: string;
    /**
     * The Job Collection's pricing level's SKU.
     */
    readonly sku: string;
    /**
     * The Job Collection's state.
     */
    readonly state: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
