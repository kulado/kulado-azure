// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages the association between a Network Interface and a Load Balancer's Backend Address Pool.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const testPublicIp = new azure.network.PublicIp("test", {
 *     allocationMethod: "Static",
 *     location: testResourceGroup.location,
 *     name: "example-pip",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testLoadBalancer = new azure.lb.LoadBalancer("test", {
 *     frontendIpConfigurations: [{
 *         name: "primary",
 *         publicIpAddressId: testPublicIp.id,
 *     }],
 *     location: testResourceGroup.location,
 *     name: "example-lb",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testBackendAddressPool = new azure.lb.BackendAddressPool("test", {
 *     loadbalancerId: testLoadBalancer.id,
 *     name: "acctestpool",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: testResourceGroup.location,
 *     name: "example-network",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testSubnet = new azure.network.Subnet("test", {
 *     addressPrefix: "10.0.2.0/24",
 *     name: "internal",
 *     resourceGroupName: testResourceGroup.name,
 *     virtualNetworkName: testVirtualNetwork.name,
 * });
 * const testNetworkInterface = new azure.network.NetworkInterface("test", {
 *     ipConfigurations: [{
 *         name: "testconfiguration1",
 *         privateIpAddressAllocation: "Dynamic",
 *         subnetId: testSubnet.id,
 *     }],
 *     location: testResourceGroup.location,
 *     name: "example-nic",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testNetworkInterfaceBackendAddressPoolAssociation = new azure.network.NetworkInterfaceBackendAddressPoolAssociation("test", {
 *     backendAddressPoolId: testBackendAddressPool.id,
 *     ipConfigurationName: "testconfiguration1",
 *     networkInterfaceId: testNetworkInterface.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_interface_backend_address_pool_association.html.markdown.
 */
export class NetworkInterfaceBackendAddressPoolAssociation extends kulado.CustomResource {
    /**
     * Get an existing NetworkInterfaceBackendAddressPoolAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: NetworkInterfaceBackendAddressPoolAssociationState, opts?: kulado.CustomResourceOptions): NetworkInterfaceBackendAddressPoolAssociation {
        return new NetworkInterfaceBackendAddressPoolAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:network/networkInterfaceBackendAddressPoolAssociation:NetworkInterfaceBackendAddressPoolAssociation';

    /**
     * Returns true if the given object is an instance of NetworkInterfaceBackendAddressPoolAssociation.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkInterfaceBackendAddressPoolAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === NetworkInterfaceBackendAddressPoolAssociation.__kuladoType;
    }

    /**
     * The ID of the Load Balancer Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    public readonly backendAddressPoolId!: kulado.Output<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
     */
    public readonly ipConfigurationName!: kulado.Output<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    public readonly networkInterfaceId!: kulado.Output<string>;

    /**
     * Create a NetworkInterfaceBackendAddressPoolAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceBackendAddressPoolAssociationArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkInterfaceBackendAddressPoolAssociationArgs | NetworkInterfaceBackendAddressPoolAssociationState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NetworkInterfaceBackendAddressPoolAssociationState | undefined;
            inputs["backendAddressPoolId"] = state ? state.backendAddressPoolId : undefined;
            inputs["ipConfigurationName"] = state ? state.ipConfigurationName : undefined;
            inputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
        } else {
            const args = argsOrState as NetworkInterfaceBackendAddressPoolAssociationArgs | undefined;
            if (!args || args.backendAddressPoolId === undefined) {
                throw new Error("Missing required property 'backendAddressPoolId'");
            }
            if (!args || args.ipConfigurationName === undefined) {
                throw new Error("Missing required property 'ipConfigurationName'");
            }
            if (!args || args.networkInterfaceId === undefined) {
                throw new Error("Missing required property 'networkInterfaceId'");
            }
            inputs["backendAddressPoolId"] = args ? args.backendAddressPoolId : undefined;
            inputs["ipConfigurationName"] = args ? args.ipConfigurationName : undefined;
            inputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
        }
        super(NetworkInterfaceBackendAddressPoolAssociation.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NetworkInterfaceBackendAddressPoolAssociation resources.
 */
export interface NetworkInterfaceBackendAddressPoolAssociationState {
    /**
     * The ID of the Load Balancer Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    readonly backendAddressPoolId?: kulado.Input<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
     */
    readonly ipConfigurationName?: kulado.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkInterfaceBackendAddressPoolAssociation resource.
 */
export interface NetworkInterfaceBackendAddressPoolAssociationArgs {
    /**
     * The ID of the Load Balancer Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    readonly backendAddressPoolId: kulado.Input<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
     */
    readonly ipConfigurationName: kulado.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId: kulado.Input<string>;
}
