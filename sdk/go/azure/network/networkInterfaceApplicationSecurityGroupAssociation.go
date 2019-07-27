// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages the association between a Network Interface and a Application Security Group.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_interface_application_security_group_association.html.markdown.
type NetworkInterfaceApplicationSecurityGroupAssociation struct {
	s *kulado.ResourceState
}

// NewNetworkInterfaceApplicationSecurityGroupAssociation registers a new resource with the given unique name, arguments, and options.
func NewNetworkInterfaceApplicationSecurityGroupAssociation(ctx *kulado.Context,
	name string, args *NetworkInterfaceApplicationSecurityGroupAssociationArgs, opts ...kulado.ResourceOpt) (*NetworkInterfaceApplicationSecurityGroupAssociation, error) {
	if args == nil || args.ApplicationSecurityGroupId == nil {
		return nil, errors.New("missing required argument 'ApplicationSecurityGroupId'")
	}
	if args == nil || args.IpConfigurationName == nil {
		return nil, errors.New("missing required argument 'IpConfigurationName'")
	}
	if args == nil || args.NetworkInterfaceId == nil {
		return nil, errors.New("missing required argument 'NetworkInterfaceId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["applicationSecurityGroupId"] = nil
		inputs["ipConfigurationName"] = nil
		inputs["networkInterfaceId"] = nil
	} else {
		inputs["applicationSecurityGroupId"] = args.ApplicationSecurityGroupId
		inputs["ipConfigurationName"] = args.IpConfigurationName
		inputs["networkInterfaceId"] = args.NetworkInterfaceId
	}
	s, err := ctx.RegisterResource("azure:network/networkInterfaceApplicationSecurityGroupAssociation:NetworkInterfaceApplicationSecurityGroupAssociation", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkInterfaceApplicationSecurityGroupAssociation{s: s}, nil
}

// GetNetworkInterfaceApplicationSecurityGroupAssociation gets an existing NetworkInterfaceApplicationSecurityGroupAssociation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNetworkInterfaceApplicationSecurityGroupAssociation(ctx *kulado.Context,
	name string, id kulado.ID, state *NetworkInterfaceApplicationSecurityGroupAssociationState, opts ...kulado.ResourceOpt) (*NetworkInterfaceApplicationSecurityGroupAssociation, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["applicationSecurityGroupId"] = state.ApplicationSecurityGroupId
		inputs["ipConfigurationName"] = state.IpConfigurationName
		inputs["networkInterfaceId"] = state.NetworkInterfaceId
	}
	s, err := ctx.ReadResource("azure:network/networkInterfaceApplicationSecurityGroupAssociation:NetworkInterfaceApplicationSecurityGroupAssociation", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkInterfaceApplicationSecurityGroupAssociation{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *NetworkInterfaceApplicationSecurityGroupAssociation) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *NetworkInterfaceApplicationSecurityGroupAssociation) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The ID of the Application Security Group which this Network Interface which should be connected to. Changing this forces a new resource to be created.
func (r *NetworkInterfaceApplicationSecurityGroupAssociation) ApplicationSecurityGroupId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["applicationSecurityGroupId"])
}

// The Name of the IP Configuration within the Network Interface which should be connected to the Application Security Group. Changing this forces a new resource to be created.
func (r *NetworkInterfaceApplicationSecurityGroupAssociation) IpConfigurationName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["ipConfigurationName"])
}

// The ID of the Network Interface. Changing this forces a new resource to be created.
func (r *NetworkInterfaceApplicationSecurityGroupAssociation) NetworkInterfaceId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["networkInterfaceId"])
}

// Input properties used for looking up and filtering NetworkInterfaceApplicationSecurityGroupAssociation resources.
type NetworkInterfaceApplicationSecurityGroupAssociationState struct {
	// The ID of the Application Security Group which this Network Interface which should be connected to. Changing this forces a new resource to be created.
	ApplicationSecurityGroupId interface{}
	// The Name of the IP Configuration within the Network Interface which should be connected to the Application Security Group. Changing this forces a new resource to be created.
	IpConfigurationName interface{}
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId interface{}
}

// The set of arguments for constructing a NetworkInterfaceApplicationSecurityGroupAssociation resource.
type NetworkInterfaceApplicationSecurityGroupAssociationArgs struct {
	// The ID of the Application Security Group which this Network Interface which should be connected to. Changing this forces a new resource to be created.
	ApplicationSecurityGroupId interface{}
	// The Name of the IP Configuration within the Network Interface which should be connected to the Application Security Group. Changing this forces a new resource to be created.
	IpConfigurationName interface{}
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId interface{}
}