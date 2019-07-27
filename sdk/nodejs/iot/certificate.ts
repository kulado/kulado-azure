// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages an IoT Device Provisioning Service Certificate.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const exampleDps = new azure.iot.Dps("example", {
 *     location: azurerm_resource_group_test.location,
 *     name: "example",
 *     resourceGroupName: azurerm_resource_group_test.name,
 *     sku: {
 *         capacity: 1,
 *         name: "S1",
 *         tier: "Standard",
 *     },
 * });
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 *     name: "resourceGroup1",
 * });
 * const exampleCertificate = new azure.iot.Certificate("example", {
 *     certificateContent: (() => {
 *         throw "tf2kulado error: NYI: call to filebase64";
 *         return (() => { throw "NYI: call to filebase64"; })();
 *     })(),
 *     iotDpsName: exampleDps.name,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iot_dps_certificate.html.markdown.
 */
export class Certificate extends kulado.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: CertificateState, opts?: kulado.CustomResourceOptions): Certificate {
        return new Certificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:iot/certificate:Certificate';

    /**
     * Returns true if the given object is an instance of Certificate.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Certificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Certificate.__kuladoType;
    }

    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    public readonly certificateContent!: kulado.Output<string>;
    /**
     * The name of the IoT Device Provisioning Service that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    public readonly iotDpsName!: kulado.Output<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service Certificate resource. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;

    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateArgs | CertificateState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CertificateState | undefined;
            inputs["certificateContent"] = state ? state.certificateContent : undefined;
            inputs["iotDpsName"] = state ? state.iotDpsName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as CertificateArgs | undefined;
            if (!args || args.certificateContent === undefined) {
                throw new Error("Missing required property 'certificateContent'");
            }
            if (!args || args.iotDpsName === undefined) {
                throw new Error("Missing required property 'iotDpsName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["certificateContent"] = args ? args.certificateContent : undefined;
            inputs["iotDpsName"] = args ? args.iotDpsName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        super(Certificate.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Certificate resources.
 */
export interface CertificateState {
    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    readonly certificateContent?: kulado.Input<string>;
    /**
     * The name of the IoT Device Provisioning Service that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    readonly iotDpsName?: kulado.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service Certificate resource. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    readonly certificateContent: kulado.Input<string>;
    /**
     * The name of the IoT Device Provisioning Service that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    readonly iotDpsName: kulado.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service Certificate resource. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
}
