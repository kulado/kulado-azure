// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about a Platform Image.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.compute.getPlatformImage({
 *     location: "West Europe",
 *     offer: "UbuntuServer",
 *     publisher: "Canonical",
 *     sku: "16.04-LTS",
 * }));
 * 
 * export const version = test.version;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/platform_image.html.markdown.
 */
export function getPlatformImage(args: GetPlatformImageArgs, opts?: kulado.InvokeOptions): Promise<GetPlatformImageResult> & GetPlatformImageResult {
    const promise: Promise<GetPlatformImageResult> = kulado.runtime.invoke("azure:compute/getPlatformImage:getPlatformImage", {
        "location": args.location,
        "offer": args.offer,
        "publisher": args.publisher,
        "sku": args.sku,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getPlatformImage.
 */
export interface GetPlatformImageArgs {
    /**
     * Specifies the Location to pull information about this Platform Image from.
     */
    readonly location: string;
    /**
     * Specifies the Offer associated with the Platform Image.
     */
    readonly offer: string;
    /**
     * Specifies the Publisher associated with the Platform Image.
     */
    readonly publisher: string;
    /**
     * Specifies the SKU of the Platform Image.
     */
    readonly sku: string;
}

/**
 * A collection of values returned by getPlatformImage.
 */
export interface GetPlatformImageResult {
    readonly location: string;
    readonly offer: string;
    readonly publisher: string;
    readonly sku: string;
    /**
     * The latest version of the Platform Image.
     */
    readonly version: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
