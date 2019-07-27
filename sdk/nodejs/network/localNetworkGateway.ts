// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a local network gateway connection over which specific connections can be configured.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "localNetworkGWTest",
 * });
 * const home = new azure.network.LocalNetworkGateway("home", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     gatewayAddress: "12.13.14.15",
 *     location: test.location,
 *     name: "backHome",
 *     resourceGroupName: test.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/local_network_gateway.html.markdown.
 */
export class LocalNetworkGateway extends kulado.CustomResource {
    /**
     * Get an existing LocalNetworkGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: LocalNetworkGatewayState, opts?: kulado.CustomResourceOptions): LocalNetworkGateway {
        return new LocalNetworkGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:network/localNetworkGateway:LocalNetworkGateway';

    /**
     * Returns true if the given object is an instance of LocalNetworkGateway.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LocalNetworkGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === LocalNetworkGateway.__kuladoType;
    }

    /**
     * The list of string CIDRs representing the
     * address spaces the gateway exposes.
     */
    public readonly addressSpaces!: kulado.Output<string[]>;
    /**
     * A `bgp_settings` block as defined below containing the
     * Local Network Gateway's BGP speaker settings.
     */
    public readonly bgpSettings!: kulado.Output<{ asn: number, bgpPeeringAddress: string, peerWeight: number } | undefined>;
    /**
     * The IP address of the gateway to which to
     * connect.
     */
    public readonly gatewayAddress!: kulado.Output<string>;
    /**
     * The location/region where the local network gateway is
     * created. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * The name of the local network gateway. Changing this
     * forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which to
     * create the local network gateway.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;

    /**
     * Create a LocalNetworkGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LocalNetworkGatewayArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: LocalNetworkGatewayArgs | LocalNetworkGatewayState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LocalNetworkGatewayState | undefined;
            inputs["addressSpaces"] = state ? state.addressSpaces : undefined;
            inputs["bgpSettings"] = state ? state.bgpSettings : undefined;
            inputs["gatewayAddress"] = state ? state.gatewayAddress : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as LocalNetworkGatewayArgs | undefined;
            if (!args || args.addressSpaces === undefined) {
                throw new Error("Missing required property 'addressSpaces'");
            }
            if (!args || args.gatewayAddress === undefined) {
                throw new Error("Missing required property 'gatewayAddress'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["addressSpaces"] = args ? args.addressSpaces : undefined;
            inputs["bgpSettings"] = args ? args.bgpSettings : undefined;
            inputs["gatewayAddress"] = args ? args.gatewayAddress : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        super(LocalNetworkGateway.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LocalNetworkGateway resources.
 */
export interface LocalNetworkGatewayState {
    /**
     * The list of string CIDRs representing the
     * address spaces the gateway exposes.
     */
    readonly addressSpaces?: kulado.Input<kulado.Input<string>[]>;
    /**
     * A `bgp_settings` block as defined below containing the
     * Local Network Gateway's BGP speaker settings.
     */
    readonly bgpSettings?: kulado.Input<{ asn: kulado.Input<number>, bgpPeeringAddress: kulado.Input<string>, peerWeight?: kulado.Input<number> }>;
    /**
     * The IP address of the gateway to which to
     * connect.
     */
    readonly gatewayAddress?: kulado.Input<string>;
    /**
     * The location/region where the local network gateway is
     * created. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The name of the local network gateway. Changing this
     * forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the local network gateway.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a LocalNetworkGateway resource.
 */
export interface LocalNetworkGatewayArgs {
    /**
     * The list of string CIDRs representing the
     * address spaces the gateway exposes.
     */
    readonly addressSpaces: kulado.Input<kulado.Input<string>[]>;
    /**
     * A `bgp_settings` block as defined below containing the
     * Local Network Gateway's BGP speaker settings.
     */
    readonly bgpSettings?: kulado.Input<{ asn: kulado.Input<number>, bgpPeeringAddress: kulado.Input<string>, peerWeight?: kulado.Input<number> }>;
    /**
     * The IP address of the gateway to which to
     * connect.
     */
    readonly gatewayAddress: kulado.Input<string>;
    /**
     * The location/region where the local network gateway is
     * created. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The name of the local network gateway. Changing this
     * forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the local network gateway.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}
