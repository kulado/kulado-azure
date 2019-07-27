// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Stream Analytics Job.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.streamanalytics.getJob({
 *     name: "example-job",
 *     resourceGroupName: "example-resources",
 * }));
 * 
 * export const jobId = test.jobId;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/stream_analytics_job.html.markdown.
 */
export function getJob(args: GetJobArgs, opts?: kulado.InvokeOptions): Promise<GetJobResult> & GetJobResult {
    const promise: Promise<GetJobResult> = kulado.runtime.invoke("azure:streamanalytics/getJob:getJob", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getJob.
 */
export interface GetJobArgs {
    /**
     * Specifies the name of the Stream Analytics Job.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group the Stream Analytics Job is located in.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getJob.
 */
export interface GetJobResult {
    /**
     * The compatibility level for this job.
     */
    readonly compatibilityLevel: string;
    /**
     * The Data Locale of the Job.
     */
    readonly dataLocale: string;
    /**
     * The maximum tolerable delay in seconds where events arriving late could be included.
     */
    readonly eventsLateArrivalMaxDelayInSeconds: number;
    /**
     * The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order.
     */
    readonly eventsOutOfOrderMaxDelayInSeconds: number;
    /**
     * The policy which should be applied to events which arrive out of order in the input event stream.
     */
    readonly eventsOutOfOrderPolicy: string;
    /**
     * The Job ID assigned by the Stream Analytics Job.
     */
    readonly jobId: string;
    /**
     * The Azure location where the Stream Analytics Job exists.
     */
    readonly location: string;
    readonly name: string;
    /**
     * The policy which should be applied to events which arrive at the output and cannot be written to the external storage due to being malformed (such as missing column values, column values of wrong type or size). 
     */
    readonly outputErrorPolicy: string;
    readonly resourceGroupName: string;
    /**
     * The number of streaming units that the streaming job uses.
     */
    readonly streamingUnits: number;
    /**
     * The query that will be run in the streaming job, [written in Stream Analytics Query Language (SAQL)](https://msdn.microsoft.com/library/azure/dn834998).
     */
    readonly transformationQuery: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
