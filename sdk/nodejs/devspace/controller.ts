// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a DevSpace Controller.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "westeurope",
 *     name: "acctestRG1",
 * });
 * const testKubernetesCluster = new azure.containerservice.KubernetesCluster("test", {
 *     agentPoolProfiles: [{
 *         count: 1,
 *         name: "default",
 *         vmSize: "Standard_DS2_v2",
 *     }],
 *     dnsPrefix: "acctestaks1",
 *     location: testResourceGroup.location,
 *     name: "acctestaks1",
 *     resourceGroupName: testResourceGroup.name,
 *     servicePrincipal: {
 *         clientId: "00000000-0000-0000-0000-000000000000",
 *         clientSecret: "00000000000000000000000000000000",
 *     },
 * });
 * const testController = new azure.devspace.Controller("test", {
 *     hostSuffix: "suffix",
 *     location: testResourceGroup.location,
 *     name: "acctestdsc1",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: {
 *         name: "S1",
 *         tier: "Standard",
 *     },
 *     tags: {
 *         Environment: "Testing",
 *     },
 *     targetContainerHostCredentialsBase64: testKubernetesCluster.kubeConfigRaw.apply(kubeConfigRaw => Buffer.from(kubeConfigRaw).toString("base64")),
 *     targetContainerHostResourceId: testKubernetesCluster.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/devspace_controller.html.markdown.
 */
export class Controller extends kulado.CustomResource {
    /**
     * Get an existing Controller resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ControllerState, opts?: kulado.CustomResourceOptions): Controller {
        return new Controller(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:devspace/controller:Controller';

    /**
     * Returns true if the given object is an instance of Controller.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Controller {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Controller.__kuladoType;
    }

    /**
     * DNS name for accessing DataPlane services.
     */
    public /*out*/ readonly dataPlaneFqdn!: kulado.Output<string>;
    /**
     * The host suffix for the DevSpace Controller. Changing this forces a new resource to be created.
     */
    public readonly hostSuffix!: kulado.Output<string>;
    /**
     * Specifies the supported location where the DevSpace Controller should exist. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name of the DevSpace Controller. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group under which the DevSpace Controller resource has to be created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A `sku` block as documented below. Changing this forces a new resource to be created.
     */
    public readonly sku!: kulado.Output<{ name: string, tier: string }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * Base64 encoding of `kube_config_raw` of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    public readonly targetContainerHostCredentialsBase64!: kulado.Output<string>;
    /**
     * The resource id of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    public readonly targetContainerHostResourceId!: kulado.Output<string>;

    /**
     * Create a Controller resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ControllerArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ControllerArgs | ControllerState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ControllerState | undefined;
            inputs["dataPlaneFqdn"] = state ? state.dataPlaneFqdn : undefined;
            inputs["hostSuffix"] = state ? state.hostSuffix : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["targetContainerHostCredentialsBase64"] = state ? state.targetContainerHostCredentialsBase64 : undefined;
            inputs["targetContainerHostResourceId"] = state ? state.targetContainerHostResourceId : undefined;
        } else {
            const args = argsOrState as ControllerArgs | undefined;
            if (!args || args.hostSuffix === undefined) {
                throw new Error("Missing required property 'hostSuffix'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            if (!args || args.targetContainerHostCredentialsBase64 === undefined) {
                throw new Error("Missing required property 'targetContainerHostCredentialsBase64'");
            }
            if (!args || args.targetContainerHostResourceId === undefined) {
                throw new Error("Missing required property 'targetContainerHostResourceId'");
            }
            inputs["hostSuffix"] = args ? args.hostSuffix : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["targetContainerHostCredentialsBase64"] = args ? args.targetContainerHostCredentialsBase64 : undefined;
            inputs["targetContainerHostResourceId"] = args ? args.targetContainerHostResourceId : undefined;
            inputs["dataPlaneFqdn"] = undefined /*out*/;
        }
        super(Controller.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Controller resources.
 */
export interface ControllerState {
    /**
     * DNS name for accessing DataPlane services.
     */
    readonly dataPlaneFqdn?: kulado.Input<string>;
    /**
     * The host suffix for the DevSpace Controller. Changing this forces a new resource to be created.
     */
    readonly hostSuffix?: kulado.Input<string>;
    /**
     * Specifies the supported location where the DevSpace Controller should exist. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the DevSpace Controller. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group under which the DevSpace Controller resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A `sku` block as documented below. Changing this forces a new resource to be created.
     */
    readonly sku?: kulado.Input<{ name: kulado.Input<string>, tier: kulado.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * Base64 encoding of `kube_config_raw` of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    readonly targetContainerHostCredentialsBase64?: kulado.Input<string>;
    /**
     * The resource id of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    readonly targetContainerHostResourceId?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Controller resource.
 */
export interface ControllerArgs {
    /**
     * The host suffix for the DevSpace Controller. Changing this forces a new resource to be created.
     */
    readonly hostSuffix: kulado.Input<string>;
    /**
     * Specifies the supported location where the DevSpace Controller should exist. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the DevSpace Controller. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group under which the DevSpace Controller resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A `sku` block as documented below. Changing this forces a new resource to be created.
     */
    readonly sku: kulado.Input<{ name: kulado.Input<string>, tier: kulado.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * Base64 encoding of `kube_config_raw` of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    readonly targetContainerHostCredentialsBase64: kulado.Input<string>;
    /**
     * The resource id of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    readonly targetContainerHostResourceId: kulado.Input<string>;
}