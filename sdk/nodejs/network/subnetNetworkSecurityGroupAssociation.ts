// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Associates a Network Security Group with a Subnet within a Virtual Network.
 * 
 * > **NOTE:** Subnet `<->` Network Security Group associations currently need to be configured on both this resource and using the `network_security_group_id` field on the `azurerm_subnet` resource. The next major version of the AzureRM Provider (2.0) will remove the `network_security_group_id` field from the `azurerm_subnet` resource such that this resource is used to link resources in future.
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
 * const testNetworkSecurityGroup = new azure.network.NetworkSecurityGroup("test", {
 *     location: testResourceGroup.location,
 *     name: "example-nsg",
 *     resourceGroupName: testResourceGroup.name,
 *     securityRules: [{
 *         access: "Allow",
 *         destinationAddressPrefix: "*",
 *         destinationPortRange: "*",
 *         direction: "Inbound",
 *         name: "test123",
 *         priority: 100,
 *         protocol: "Tcp",
 *         sourceAddressPrefix: "*",
 *         sourcePortRange: "*",
 *     }],
 * });
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: testResourceGroup.location,
 *     name: "example-network",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testSubnet = new azure.network.Subnet("test", {
 *     addressPrefix: "10.0.2.0/24",
 *     name: "frontend",
 *     networkSecurityGroupId: testNetworkSecurityGroup.id,
 *     resourceGroupName: testResourceGroup.name,
 *     virtualNetworkName: testVirtualNetwork.name,
 * });
 * const testSubnetNetworkSecurityGroupAssociation = new azure.network.SubnetNetworkSecurityGroupAssociation("test", {
 *     networkSecurityGroupId: testNetworkSecurityGroup.id,
 *     subnetId: testSubnet.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/subnet_network_security_group_association.html.markdown.
 */
export class SubnetNetworkSecurityGroupAssociation extends kulado.CustomResource {
    /**
     * Get an existing SubnetNetworkSecurityGroupAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: SubnetNetworkSecurityGroupAssociationState, opts?: kulado.CustomResourceOptions): SubnetNetworkSecurityGroupAssociation {
        return new SubnetNetworkSecurityGroupAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:network/subnetNetworkSecurityGroupAssociation:SubnetNetworkSecurityGroupAssociation';

    /**
     * Returns true if the given object is an instance of SubnetNetworkSecurityGroupAssociation.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubnetNetworkSecurityGroupAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === SubnetNetworkSecurityGroupAssociation.__kuladoType;
    }

    /**
     * The ID of the Network Security Group which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    public readonly networkSecurityGroupId!: kulado.Output<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    public readonly subnetId!: kulado.Output<string>;

    /**
     * Create a SubnetNetworkSecurityGroupAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetNetworkSecurityGroupAssociationArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubnetNetworkSecurityGroupAssociationArgs | SubnetNetworkSecurityGroupAssociationState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SubnetNetworkSecurityGroupAssociationState | undefined;
            inputs["networkSecurityGroupId"] = state ? state.networkSecurityGroupId : undefined;
            inputs["subnetId"] = state ? state.subnetId : undefined;
        } else {
            const args = argsOrState as SubnetNetworkSecurityGroupAssociationArgs | undefined;
            if (!args || args.networkSecurityGroupId === undefined) {
                throw new Error("Missing required property 'networkSecurityGroupId'");
            }
            if (!args || args.subnetId === undefined) {
                throw new Error("Missing required property 'subnetId'");
            }
            inputs["networkSecurityGroupId"] = args ? args.networkSecurityGroupId : undefined;
            inputs["subnetId"] = args ? args.subnetId : undefined;
        }
        super(SubnetNetworkSecurityGroupAssociation.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SubnetNetworkSecurityGroupAssociation resources.
 */
export interface SubnetNetworkSecurityGroupAssociationState {
    /**
     * The ID of the Network Security Group which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    readonly networkSecurityGroupId?: kulado.Input<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    readonly subnetId?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a SubnetNetworkSecurityGroupAssociation resource.
 */
export interface SubnetNetworkSecurityGroupAssociationArgs {
    /**
     * The ID of the Network Security Group which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    readonly networkSecurityGroupId: kulado.Input<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    readonly subnetId: kulado.Input<string>;
}
