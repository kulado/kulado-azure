// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/subnet.html.markdown.
type Subnet struct {
	s *kulado.ResourceState
}

// NewSubnet registers a new resource with the given unique name, arguments, and options.
func NewSubnet(ctx *kulado.Context,
	name string, args *SubnetArgs, opts ...kulado.ResourceOpt) (*Subnet, error) {
	if args == nil || args.AddressPrefix == nil {
		return nil, errors.New("missing required argument 'AddressPrefix'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.VirtualNetworkName == nil {
		return nil, errors.New("missing required argument 'VirtualNetworkName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["addressPrefix"] = nil
		inputs["delegations"] = nil
		inputs["ipConfigurations"] = nil
		inputs["name"] = nil
		inputs["networkSecurityGroupId"] = nil
		inputs["resourceGroupName"] = nil
		inputs["routeTableId"] = nil
		inputs["serviceEndpoints"] = nil
		inputs["virtualNetworkName"] = nil
	} else {
		inputs["addressPrefix"] = args.AddressPrefix
		inputs["delegations"] = args.Delegations
		inputs["ipConfigurations"] = args.IpConfigurations
		inputs["name"] = args.Name
		inputs["networkSecurityGroupId"] = args.NetworkSecurityGroupId
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["routeTableId"] = args.RouteTableId
		inputs["serviceEndpoints"] = args.ServiceEndpoints
		inputs["virtualNetworkName"] = args.VirtualNetworkName
	}
	s, err := ctx.RegisterResource("azure:network/subnet:Subnet", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Subnet{s: s}, nil
}

// GetSubnet gets an existing Subnet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSubnet(ctx *kulado.Context,
	name string, id kulado.ID, state *SubnetState, opts ...kulado.ResourceOpt) (*Subnet, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["addressPrefix"] = state.AddressPrefix
		inputs["delegations"] = state.Delegations
		inputs["ipConfigurations"] = state.IpConfigurations
		inputs["name"] = state.Name
		inputs["networkSecurityGroupId"] = state.NetworkSecurityGroupId
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["routeTableId"] = state.RouteTableId
		inputs["serviceEndpoints"] = state.ServiceEndpoints
		inputs["virtualNetworkName"] = state.VirtualNetworkName
	}
	s, err := ctx.ReadResource("azure:network/subnet:Subnet", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Subnet{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Subnet) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Subnet) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The address prefix to use for the subnet.
func (r *Subnet) AddressPrefix() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["addressPrefix"])
}

// One or more `delegation` blocks as defined below.
func (r *Subnet) Delegations() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["delegations"])
}

// The collection of IP Configurations with IPs within this subnet.
func (r *Subnet) IpConfigurations() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["ipConfigurations"])
}

// The name of the subnet. Changing this forces a new resource to be created.
func (r *Subnet) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The ID of the Network Security Group to associate with the subnet.
func (r *Subnet) NetworkSecurityGroupId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["networkSecurityGroupId"])
}

// The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
func (r *Subnet) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The ID of the Route Table to associate with the subnet.
func (r *Subnet) RouteTableId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["routeTableId"])
}

// The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql` and `Microsoft.Storage`.
func (r *Subnet) ServiceEndpoints() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["serviceEndpoints"])
}

// The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
func (r *Subnet) VirtualNetworkName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["virtualNetworkName"])
}

// Input properties used for looking up and filtering Subnet resources.
type SubnetState struct {
	// The address prefix to use for the subnet.
	AddressPrefix interface{}
	// One or more `delegation` blocks as defined below.
	Delegations interface{}
	// The collection of IP Configurations with IPs within this subnet.
	IpConfigurations interface{}
	// The name of the subnet. Changing this forces a new resource to be created.
	Name interface{}
	// The ID of the Network Security Group to associate with the subnet.
	NetworkSecurityGroupId interface{}
	// The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The ID of the Route Table to associate with the subnet.
	RouteTableId interface{}
	// The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql` and `Microsoft.Storage`.
	ServiceEndpoints interface{}
	// The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
	VirtualNetworkName interface{}
}

// The set of arguments for constructing a Subnet resource.
type SubnetArgs struct {
	// The address prefix to use for the subnet.
	AddressPrefix interface{}
	// One or more `delegation` blocks as defined below.
	Delegations interface{}
	// The collection of IP Configurations with IPs within this subnet.
	IpConfigurations interface{}
	// The name of the subnet. Changing this forces a new resource to be created.
	Name interface{}
	// The ID of the Network Security Group to associate with the subnet.
	NetworkSecurityGroupId interface{}
	// The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The ID of the Route Table to associate with the subnet.
	RouteTableId interface{}
	// The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql` and `Microsoft.Storage`.
	ServiceEndpoints interface{}
	// The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
	VirtualNetworkName interface{}
}
