// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing CDN Profile.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.cdn.getProfile({
 *     name: "myfirstcdnprofile",
 *     resourceGroupName: "example-resources",
 * }));
 * 
 * export const cdnProfileId = test.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/cdn_profile.html.markdown.
 */
export function getProfile(args: GetProfileArgs, opts?: kulado.InvokeOptions): Promise<GetProfileResult> & GetProfileResult {
    const promise: Promise<GetProfileResult> = kulado.runtime.invoke("azure:cdn/getProfile:getProfile", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getProfile.
 */
export interface GetProfileArgs {
    /**
     * The name of the CDN Profile.
     */
    readonly name: string;
    /**
     * The name of the resource group in which the CDN Profile exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getProfile.
 */
export interface GetProfileResult {
    /**
     * The Azure Region where the resource exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The pricing related information of current CDN profile.
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
