// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages the association between a Network Interface and a Load Balancer's Backend Address Pool.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_interface_backend_address_pool_association.html.markdown.
type NetworkInterfaceBackendAddressPoolAssociation struct {
	s *kulado.ResourceState
}

// NewNetworkInterfaceBackendAddressPoolAssociation registers a new resource with the given unique name, arguments, and options.
func NewNetworkInterfaceBackendAddressPoolAssociation(ctx *kulado.Context,
	name string, args *NetworkInterfaceBackendAddressPoolAssociationArgs, opts ...kulado.ResourceOpt) (*NetworkInterfaceBackendAddressPoolAssociation, error) {
	if args == nil || args.BackendAddressPoolId == nil {
		return nil, errors.New("missing required argument 'BackendAddressPoolId'")
	}
	if args == nil || args.IpConfigurationName == nil {
		return nil, errors.New("missing required argument 'IpConfigurationName'")
	}
	if args == nil || args.NetworkInterfaceId == nil {
		return nil, errors.New("missing required argument 'NetworkInterfaceId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["backendAddressPoolId"] = nil
		inputs["ipConfigurationName"] = nil
		inputs["networkInterfaceId"] = nil
	} else {
		inputs["backendAddressPoolId"] = args.BackendAddressPoolId
		inputs["ipConfigurationName"] = args.IpConfigurationName
		inputs["networkInterfaceId"] = args.NetworkInterfaceId
	}
	s, err := ctx.RegisterResource("azure:network/networkInterfaceBackendAddressPoolAssociation:NetworkInterfaceBackendAddressPoolAssociation", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkInterfaceBackendAddressPoolAssociation{s: s}, nil
}

// GetNetworkInterfaceBackendAddressPoolAssociation gets an existing NetworkInterfaceBackendAddressPoolAssociation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNetworkInterfaceBackendAddressPoolAssociation(ctx *kulado.Context,
	name string, id kulado.ID, state *NetworkInterfaceBackendAddressPoolAssociationState, opts ...kulado.ResourceOpt) (*NetworkInterfaceBackendAddressPoolAssociation, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["backendAddressPoolId"] = state.BackendAddressPoolId
		inputs["ipConfigurationName"] = state.IpConfigurationName
		inputs["networkInterfaceId"] = state.NetworkInterfaceId
	}
	s, err := ctx.ReadResource("azure:network/networkInterfaceBackendAddressPoolAssociation:NetworkInterfaceBackendAddressPoolAssociation", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkInterfaceBackendAddressPoolAssociation{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *NetworkInterfaceBackendAddressPoolAssociation) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *NetworkInterfaceBackendAddressPoolAssociation) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The ID of the Load Balancer Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
func (r *NetworkInterfaceBackendAddressPoolAssociation) BackendAddressPoolId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["backendAddressPoolId"])
}

// The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
func (r *NetworkInterfaceBackendAddressPoolAssociation) IpConfigurationName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["ipConfigurationName"])
}

// The ID of the Network Interface. Changing this forces a new resource to be created.
func (r *NetworkInterfaceBackendAddressPoolAssociation) NetworkInterfaceId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["networkInterfaceId"])
}

// Input properties used for looking up and filtering NetworkInterfaceBackendAddressPoolAssociation resources.
type NetworkInterfaceBackendAddressPoolAssociationState struct {
	// The ID of the Load Balancer Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
	BackendAddressPoolId interface{}
	// The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
	IpConfigurationName interface{}
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId interface{}
}

// The set of arguments for constructing a NetworkInterfaceBackendAddressPoolAssociation resource.
type NetworkInterfaceBackendAddressPoolAssociationArgs struct {
	// The ID of the Load Balancer Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
	BackendAddressPoolId interface{}
	// The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
	IpConfigurationName interface{}
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId interface{}
}
