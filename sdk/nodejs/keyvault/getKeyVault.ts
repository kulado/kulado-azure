// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Key Vault.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.keyvault.getKeyVault({
 *     name: "mykeyvault",
 *     resourceGroupName: "some-resource-group",
 * }));
 * 
 * export const vaultUri = test.vaultUri;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/key_vault.html.markdown.
 */
export function getKeyVault(args: GetKeyVaultArgs, opts?: kulado.InvokeOptions): Promise<GetKeyVaultResult> & GetKeyVaultResult {
    const promise: Promise<GetKeyVaultResult> = kulado.runtime.invoke("azure:keyvault/getKeyVault:getKeyVault", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getKeyVault.
 */
export interface GetKeyVaultArgs {
    /**
     * Specifies the name of the Key Vault.
     */
    readonly name: string;
    /**
     * The name of the Resource Group in which the Key Vault exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getKeyVault.
 */
export interface GetKeyVaultResult {
    /**
     * One or more `access_policy` blocks as defined below.
     */
    readonly accessPolicies: { applicationId: string, certificatePermissions: string[], keyPermissions: string[], objectId: string, secretPermissions: string[], storagePermissions: string[], tenantId: string }[];
    /**
     * Can Azure Virtual Machines retrieve certificates stored as secrets from the Key Vault?
     */
    readonly enabledForDeployment: boolean;
    /**
     * Can Azure Disk Encryption retrieve secrets from the Key Vault?
     */
    readonly enabledForDiskEncryption: boolean;
    /**
     * Can Azure Resource Manager retrieve secrets from the Key Vault?
     */
    readonly enabledForTemplateDeployment: boolean;
    /**
     * The Azure Region in which the Key Vault exists.
     */
    readonly location: string;
    /**
     * The name of the SKU used for this Key Vault.
     */
    readonly name: string;
    readonly networkAcls: { bypass: string, defaultAction: string, ipRules: string[], virtualNetworkSubnetIds: string[] }[];
    readonly resourceGroupName: string;
    /**
     * A `sku` block as described below.
     */
    readonly sku: { name: string };
    readonly skuName: string;
    /**
     * A mapping of tags assigned to the Key Vault.
     */
    readonly tags: {[key: string]: any};
    /**
     * The Azure Active Directory Tenant ID used to authenticate requests for this Key Vault.
     */
    readonly tenantId: string;
    /**
     * The URI of the vault for performing operations on keys and secrets.
     */
    readonly vaultUri: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
