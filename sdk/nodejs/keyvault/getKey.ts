// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Key Vault Key.
 * 
 * > **Note:** All arguments including the secret value will be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = kulado.output(azure.keyvault.getKey({
 *     name: "secret-sauce",
 *     vaultUri: "https://rickslab.vault.azure.net/",
 * }));
 * 
 * export const keyType = azurerm_key_vault_secret_test.keyType;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/key_vault_key.html.markdown.
 */
export function getKey(args: GetKeyArgs, opts?: kulado.InvokeOptions): Promise<GetKeyResult> & GetKeyResult {
    const promise: Promise<GetKeyResult> = kulado.runtime.invoke("azure:keyvault/getKey:getKey", {
        "keyVaultId": args.keyVaultId,
        "name": args.name,
        "vaultUri": args.vaultUri,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getKey.
 */
export interface GetKeyArgs {
    readonly keyVaultId?: string;
    /**
     * Specifies the name of the Key Vault Key.
     */
    readonly name: string;
    /**
     * Specifies the ID of the Key Vault Key Vault instance where the Key resides, available on the `azurerm_key_vault` Data Source / Resource.
     */
    readonly vaultUri?: string;
}

/**
 * A collection of values returned by getKey.
 */
export interface GetKeyResult {
    /**
     * The RSA public exponent of this Key Vault Key.
     */
    readonly e: string;
    /**
     * A list of JSON web key operations assigned to this Key Vault Key
     */
    readonly keyOpts: string[];
    /**
     * Specifies the Size of this Key Vault Key.
     */
    readonly keySize: number;
    /**
     * Specifies the Key Type of this Key Vault Key
     */
    readonly keyType: string;
    readonly keyVaultId: string;
    /**
     * The RSA modulus of this Key Vault Key.
     */
    readonly n: string;
    readonly name: string;
    /**
     * A mapping of tags assigned to this Key Vault Key.
     */
    readonly tags: {[key: string]: any};
    readonly vaultUri: string;
    /**
     * The current version of the Key Vault Key.
     */
    readonly version: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
