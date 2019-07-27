// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access the ID of a specified Traffic Manager Geographical Location within the Geographical Hierarchy.
 * 
 * ## Example Usage (World)
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.trafficmanager.getGeographicalLocation({
 *     name: "World",
 * }));
 * 
 * export const locationCode = test.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/traffic_manager_geographical_location.html.markdown.
 */
export function getGeographicalLocation(args: GetGeographicalLocationArgs, opts?: kulado.InvokeOptions): Promise<GetGeographicalLocationResult> & GetGeographicalLocationResult {
    const promise: Promise<GetGeographicalLocationResult> = kulado.runtime.invoke("azure:trafficmanager/getGeographicalLocation:getGeographicalLocation", {
        "name": args.name,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getGeographicalLocation.
 */
export interface GetGeographicalLocationArgs {
    /**
     * Specifies the name of the Location, for example `World`, `Europe` or `Germany`.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getGeographicalLocation.
 */
export interface GetGeographicalLocationResult {
    readonly name: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
