// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Recovery Services Vault.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const vault = kulado.output(azure.recoveryservices.getVault({
 *     name: "tfex-recovery_vault",
 *     resourceGroupName: "tfex-resource_group",
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/recovery_services_vault.html.markdown.
 */
export function getVault(args: GetVaultArgs, opts?: kulado.InvokeOptions): Promise<GetVaultResult> & GetVaultResult {
    const promise: Promise<GetVaultResult> = kulado.runtime.invoke("azure:recoveryservices/getVault:getVault", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getVault.
 */
export interface GetVaultArgs {
    /**
     * Specifies the name of the Recovery Services Vault.
     */
    readonly name: string;
    /**
     * The name of the resource group in which the Recovery Services Vault resides.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getVault.
 */
export interface GetVaultResult {
    /**
     * The Azure location where the resource resides.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The vault's current SKU.
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
