// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Key Vault Certificate.
 * 
 * ## Example Usage (Importing a PFX)
 * 
 * > **Note:** this example assumed the PFX file is located in the same directory at `certificate-to-import.pfx`.
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "key-vault-certificate-example",
 * });
 * const current = kulado.output(azure.core.getClientConfig({}));
 * const testKeyVault = new azure.keyvault.KeyVault("test", {
 *     accessPolicies: [{
 *         certificatePermissions: [
 *             "create",
 *             "delete",
 *             "deleteissuers",
 *             "get",
 *             "getissuers",
 *             "import",
 *             "list",
 *             "listissuers",
 *             "managecontacts",
 *             "manageissuers",
 *             "setissuers",
 *             "update",
 *         ],
 *         keyPermissions: [
 *             "backup",
 *             "create",
 *             "decrypt",
 *             "delete",
 *             "encrypt",
 *             "get",
 *             "import",
 *             "list",
 *             "purge",
 *             "recover",
 *             "restore",
 *             "sign",
 *             "unwrapKey",
 *             "update",
 *             "verify",
 *             "wrapKey",
 *         ],
 *         objectId: current.servicePrincipalObjectId,
 *         secretPermissions: [
 *             "backup",
 *             "delete",
 *             "get",
 *             "list",
 *             "purge",
 *             "recover",
 *             "restore",
 *             "set",
 *         ],
 *         tenantId: current.tenantId,
 *     }],
 *     location: testResourceGroup.location,
 *     name: "keyvaultcertexample",
 *     resourceGroupName: testResourceGroup.name,
 *     skuName: "standard",
 *     tags: {
 *         environment: "Production",
 *     },
 *     tenantId: current.tenantId,
 * });
 * const testCertifiate = new azure.keyvault.Certifiate("test", {
 *     certificate: {
 *         contents: (() => {
 *             throw "tf2kulado error: NYI: call to filebase64";
 *             return (() => { throw "NYI: call to filebase64"; })();
 *         })(),
 *         password: "",
 *     },
 *     certificatePolicy: {
 *         issuerParameters: {
 *             name: "Self",
 *         },
 *         keyProperties: {
 *             exportable: true,
 *             keySize: 2048,
 *             keyType: "RSA",
 *             reuseKey: false,
 *         },
 *         secretProperties: {
 *             contentType: "application/x-pkcs12",
 *         },
 *     },
 *     keyVaultId: testKeyVault.id,
 *     name: "imported-cert",
 * });
 * ```
 * 
 * ## Example Usage (Generating a new certificate)
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "key-vault-certificate-example",
 * });
 * const current = kulado.output(azure.core.getClientConfig({}));
 * const testKeyVault = new azure.keyvault.KeyVault("test", {
 *     accessPolicies: [{
 *         certificatePermissions: [
 *             "create",
 *             "delete",
 *             "deleteissuers",
 *             "get",
 *             "getissuers",
 *             "import",
 *             "list",
 *             "listissuers",
 *             "managecontacts",
 *             "manageissuers",
 *             "setissuers",
 *             "update",
 *         ],
 *         keyPermissions: [
 *             "backup",
 *             "create",
 *             "decrypt",
 *             "delete",
 *             "encrypt",
 *             "get",
 *             "import",
 *             "list",
 *             "purge",
 *             "recover",
 *             "restore",
 *             "sign",
 *             "unwrapKey",
 *             "update",
 *             "verify",
 *             "wrapKey",
 *         ],
 *         objectId: current.servicePrincipalObjectId,
 *         secretPermissions: [
 *             "backup",
 *             "delete",
 *             "get",
 *             "list",
 *             "purge",
 *             "recover",
 *             "restore",
 *             "set",
 *         ],
 *         tenantId: current.tenantId,
 *     }],
 *     location: testResourceGroup.location,
 *     name: "keyvaultcertexample",
 *     resourceGroupName: testResourceGroup.name,
 *     skuName: "standard",
 *     tags: {
 *         environment: "Production",
 *     },
 *     tenantId: current.tenantId,
 * });
 * const testCertifiate = new azure.keyvault.Certifiate("test", {
 *     certificatePolicy: {
 *         issuerParameters: {
 *             name: "Self",
 *         },
 *         keyProperties: {
 *             exportable: true,
 *             keySize: 2048,
 *             keyType: "RSA",
 *             reuseKey: true,
 *         },
 *         lifetimeActions: [{
 *             action: {
 *                 actionType: "AutoRenew",
 *             },
 *             trigger: {
 *                 daysBeforeExpiry: 30,
 *             },
 *         }],
 *         secretProperties: {
 *             contentType: "application/x-pkcs12",
 *         },
 *         x509CertificateProperties: {
 *             // Server Authentication = 1.3.6.1.5.5.7.3.1
 *             // Client Authentication = 1.3.6.1.5.5.7.3.2
 *             extendedKeyUsages: ["1.3.6.1.5.5.7.3.1"],
 *             keyUsages: [
 *                 "cRLSign",
 *                 "dataEncipherment",
 *                 "digitalSignature",
 *                 "keyAgreement",
 *                 "keyCertSign",
 *                 "keyEncipherment",
 *             ],
 *             subject: "CN=hello-world",
 *             subjectAlternativeNames: {
 *                 dnsNames: [
 *                     "internal.contoso.com",
 *                     "domain.hello.world",
 *                 ],
 *             },
 *             validityInMonths: 12,
 *         },
 *     },
 *     keyVaultId: testKeyVault.id,
 *     name: "generated-cert",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/key_vault_certificate.html.markdown.
 */
export class Certifiate extends kulado.CustomResource {
    /**
     * Get an existing Certifiate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: CertifiateState, opts?: kulado.CustomResourceOptions): Certifiate {
        return new Certifiate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:keyvault/certifiate:Certifiate';

    /**
     * Returns true if the given object is an instance of Certifiate.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Certifiate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Certifiate.__kuladoType;
    }

    /**
     * A `certificate` block as defined below, used to Import an existing certificate.
     */
    public readonly certificate!: kulado.Output<{ contents: string, password?: string } | undefined>;
    /**
     * The raw Key Vault Certificate.
     */
    public /*out*/ readonly certificateData!: kulado.Output<string>;
    /**
     * A `certificate_policy` block as defined below.
     */
    public readonly certificatePolicy!: kulado.Output<{ issuerParameters: { name: string }, keyProperties: { exportable: boolean, keySize: number, keyType: string, reuseKey: boolean }, lifetimeActions?: { action: { actionType: string }, trigger: { daysBeforeExpiry?: number, lifetimePercentage?: number } }[], secretProperties: { contentType: string }, x509CertificateProperties: { extendedKeyUsages: string[], keyUsages: string[], subject: string, subjectAlternativeNames: { dnsNames?: string[], emails?: string[], upns?: string[] }, validityInMonths: number } }>;
    /**
     * The ID of the Key Vault where the Certificate should be created.
     */
    public readonly keyVaultId!: kulado.Output<string>;
    /**
     * The name of the Certificate Issuer. Possible values include `Self`, or the name of a certificate issuing authority supported by Azure. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The ID of the associated Key Vault Secret.
     */
    public /*out*/ readonly secretId!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * The X509 Thumbprint of the Key Vault Certificate returned as hex string.
     */
    public /*out*/ readonly thumbprint!: kulado.Output<string>;
    public readonly vaultUri!: kulado.Output<string>;
    /**
     * The current version of the Key Vault Certificate.
     */
    public /*out*/ readonly version!: kulado.Output<string>;

    /**
     * Create a Certifiate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertifiateArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertifiateArgs | CertifiateState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CertifiateState | undefined;
            inputs["certificate"] = state ? state.certificate : undefined;
            inputs["certificateData"] = state ? state.certificateData : undefined;
            inputs["certificatePolicy"] = state ? state.certificatePolicy : undefined;
            inputs["keyVaultId"] = state ? state.keyVaultId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["secretId"] = state ? state.secretId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["thumbprint"] = state ? state.thumbprint : undefined;
            inputs["vaultUri"] = state ? state.vaultUri : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as CertifiateArgs | undefined;
            if (!args || args.certificatePolicy === undefined) {
                throw new Error("Missing required property 'certificatePolicy'");
            }
            inputs["certificate"] = args ? args.certificate : undefined;
            inputs["certificatePolicy"] = args ? args.certificatePolicy : undefined;
            inputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vaultUri"] = args ? args.vaultUri : undefined;
            inputs["certificateData"] = undefined /*out*/;
            inputs["secretId"] = undefined /*out*/;
            inputs["thumbprint"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        }
        super(Certifiate.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Certifiate resources.
 */
export interface CertifiateState {
    /**
     * A `certificate` block as defined below, used to Import an existing certificate.
     */
    readonly certificate?: kulado.Input<{ contents: kulado.Input<string>, password?: kulado.Input<string> }>;
    /**
     * The raw Key Vault Certificate.
     */
    readonly certificateData?: kulado.Input<string>;
    /**
     * A `certificate_policy` block as defined below.
     */
    readonly certificatePolicy?: kulado.Input<{ issuerParameters: kulado.Input<{ name: kulado.Input<string> }>, keyProperties: kulado.Input<{ exportable: kulado.Input<boolean>, keySize: kulado.Input<number>, keyType: kulado.Input<string>, reuseKey: kulado.Input<boolean> }>, lifetimeActions?: kulado.Input<kulado.Input<{ action: kulado.Input<{ actionType: kulado.Input<string> }>, trigger: kulado.Input<{ daysBeforeExpiry?: kulado.Input<number>, lifetimePercentage?: kulado.Input<number> }> }>[]>, secretProperties: kulado.Input<{ contentType: kulado.Input<string> }>, x509CertificateProperties?: kulado.Input<{ extendedKeyUsages?: kulado.Input<kulado.Input<string>[]>, keyUsages: kulado.Input<kulado.Input<string>[]>, subject: kulado.Input<string>, subjectAlternativeNames?: kulado.Input<{ dnsNames?: kulado.Input<kulado.Input<string>[]>, emails?: kulado.Input<kulado.Input<string>[]>, upns?: kulado.Input<kulado.Input<string>[]> }>, validityInMonths: kulado.Input<number> }> }>;
    /**
     * The ID of the Key Vault where the Certificate should be created.
     */
    readonly keyVaultId?: kulado.Input<string>;
    /**
     * The name of the Certificate Issuer. Possible values include `Self`, or the name of a certificate issuing authority supported by Azure. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The ID of the associated Key Vault Secret.
     */
    readonly secretId?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The X509 Thumbprint of the Key Vault Certificate returned as hex string.
     */
    readonly thumbprint?: kulado.Input<string>;
    readonly vaultUri?: kulado.Input<string>;
    /**
     * The current version of the Key Vault Certificate.
     */
    readonly version?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Certifiate resource.
 */
export interface CertifiateArgs {
    /**
     * A `certificate` block as defined below, used to Import an existing certificate.
     */
    readonly certificate?: kulado.Input<{ contents: kulado.Input<string>, password?: kulado.Input<string> }>;
    /**
     * A `certificate_policy` block as defined below.
     */
    readonly certificatePolicy: kulado.Input<{ issuerParameters: kulado.Input<{ name: kulado.Input<string> }>, keyProperties: kulado.Input<{ exportable: kulado.Input<boolean>, keySize: kulado.Input<number>, keyType: kulado.Input<string>, reuseKey: kulado.Input<boolean> }>, lifetimeActions?: kulado.Input<kulado.Input<{ action: kulado.Input<{ actionType: kulado.Input<string> }>, trigger: kulado.Input<{ daysBeforeExpiry?: kulado.Input<number>, lifetimePercentage?: kulado.Input<number> }> }>[]>, secretProperties: kulado.Input<{ contentType: kulado.Input<string> }>, x509CertificateProperties?: kulado.Input<{ extendedKeyUsages?: kulado.Input<kulado.Input<string>[]>, keyUsages: kulado.Input<kulado.Input<string>[]>, subject: kulado.Input<string>, subjectAlternativeNames?: kulado.Input<{ dnsNames?: kulado.Input<kulado.Input<string>[]>, emails?: kulado.Input<kulado.Input<string>[]>, upns?: kulado.Input<kulado.Input<string>[]> }>, validityInMonths: kulado.Input<number> }> }>;
    /**
     * The ID of the Key Vault where the Certificate should be created.
     */
    readonly keyVaultId?: kulado.Input<string>;
    /**
     * The name of the Certificate Issuer. Possible values include `Self`, or the name of a certificate issuing authority supported by Azure. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    readonly vaultUri?: kulado.Input<string>;
}