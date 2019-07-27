// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing ServiceBus Namespace.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.eventhub.getServiceBusNamespace({
 *     name: "examplenamespace",
 *     resourceGroupName: "example-resources",
 * }));
 * 
 * export const location = test.location;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/servicebus_namespace.html.markdown.
 */
export function getServiceBusNamespace(args: GetServiceBusNamespaceArgs, opts?: kulado.InvokeOptions): Promise<GetServiceBusNamespaceResult> & GetServiceBusNamespaceResult {
    const promise: Promise<GetServiceBusNamespaceResult> = kulado.runtime.invoke("azure:eventhub/getServiceBusNamespace:getServiceBusNamespace", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getServiceBusNamespace.
 */
export interface GetServiceBusNamespaceArgs {
    /**
     * Specifies the name of the ServiceBus Namespace.
     */
    readonly name: string;
    /**
     * Specifies the name of the Resource Group where the ServiceBus Namespace exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getServiceBusNamespace.
 */
export interface GetServiceBusNamespaceResult {
    /**
     * The capacity of the ServiceBus Namespace.
     */
    readonly capacity: number;
    /**
     * The primary connection string for the authorization
     * rule `RootManageSharedAccessKey`.
     */
    readonly defaultPrimaryConnectionString: string;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultPrimaryKey: string;
    /**
     * The secondary connection string for the
     * authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultSecondaryConnectionString: string;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultSecondaryKey: string;
    /**
     * The location of the Resource Group in which the ServiceBus Namespace exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The Tier used for the ServiceBus Namespace.
     */
    readonly sku: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}