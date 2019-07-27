// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package lb

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a Load Balancer Outbound Rule.
// 
// > **NOTE** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration and a Backend Address Pool Attached.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/lb_outbound_rule.html.markdown.
type OutboundRule struct {
	s *kulado.ResourceState
}

// NewOutboundRule registers a new resource with the given unique name, arguments, and options.
func NewOutboundRule(ctx *kulado.Context,
	name string, args *OutboundRuleArgs, opts ...kulado.ResourceOpt) (*OutboundRule, error) {
	if args == nil || args.BackendAddressPoolId == nil {
		return nil, errors.New("missing required argument 'BackendAddressPoolId'")
	}
	if args == nil || args.LoadbalancerId == nil {
		return nil, errors.New("missing required argument 'LoadbalancerId'")
	}
	if args == nil || args.Protocol == nil {
		return nil, errors.New("missing required argument 'Protocol'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["allocatedOutboundPorts"] = nil
		inputs["backendAddressPoolId"] = nil
		inputs["enableTcpReset"] = nil
		inputs["frontendIpConfigurations"] = nil
		inputs["idleTimeoutInMinutes"] = nil
		inputs["loadbalancerId"] = nil
		inputs["name"] = nil
		inputs["protocol"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["allocatedOutboundPorts"] = args.AllocatedOutboundPorts
		inputs["backendAddressPoolId"] = args.BackendAddressPoolId
		inputs["enableTcpReset"] = args.EnableTcpReset
		inputs["frontendIpConfigurations"] = args.FrontendIpConfigurations
		inputs["idleTimeoutInMinutes"] = args.IdleTimeoutInMinutes
		inputs["loadbalancerId"] = args.LoadbalancerId
		inputs["name"] = args.Name
		inputs["protocol"] = args.Protocol
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	s, err := ctx.RegisterResource("azure:lb/outboundRule:OutboundRule", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &OutboundRule{s: s}, nil
}

// GetOutboundRule gets an existing OutboundRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetOutboundRule(ctx *kulado.Context,
	name string, id kulado.ID, state *OutboundRuleState, opts ...kulado.ResourceOpt) (*OutboundRule, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["allocatedOutboundPorts"] = state.AllocatedOutboundPorts
		inputs["backendAddressPoolId"] = state.BackendAddressPoolId
		inputs["enableTcpReset"] = state.EnableTcpReset
		inputs["frontendIpConfigurations"] = state.FrontendIpConfigurations
		inputs["idleTimeoutInMinutes"] = state.IdleTimeoutInMinutes
		inputs["loadbalancerId"] = state.LoadbalancerId
		inputs["name"] = state.Name
		inputs["protocol"] = state.Protocol
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:lb/outboundRule:OutboundRule", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &OutboundRule{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *OutboundRule) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *OutboundRule) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The number of outbound ports to be used for NAT.
func (r *OutboundRule) AllocatedOutboundPorts() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["allocatedOutboundPorts"])
}

// The ID of the Backend Address Pool. Outbound traffic is randomly load balanced across IPs in the backend IPs.
func (r *OutboundRule) BackendAddressPoolId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["backendAddressPoolId"])
}

// Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
func (r *OutboundRule) EnableTcpReset() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["enableTcpReset"])
}

// One or more `frontend_ip_configuration` blocks as defined below.
func (r *OutboundRule) FrontendIpConfigurations() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["frontendIpConfigurations"])
}

// The timeout for the TCP idle connection
func (r *OutboundRule) IdleTimeoutInMinutes() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["idleTimeoutInMinutes"])
}

// The ID of the Load Balancer in which to create the Outbound Rule. Changing this forces a new resource to be created.
func (r *OutboundRule) LoadbalancerId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["loadbalancerId"])
}

// Specifies the name of the Outbound Rule. Changing this forces a new resource to be created.
func (r *OutboundRule) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
func (r *OutboundRule) Protocol() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["protocol"])
}

// The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
func (r *OutboundRule) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering OutboundRule resources.
type OutboundRuleState struct {
	// The number of outbound ports to be used for NAT.
	AllocatedOutboundPorts interface{}
	// The ID of the Backend Address Pool. Outbound traffic is randomly load balanced across IPs in the backend IPs.
	BackendAddressPoolId interface{}
	// Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
	EnableTcpReset interface{}
	// One or more `frontend_ip_configuration` blocks as defined below.
	FrontendIpConfigurations interface{}
	// The timeout for the TCP idle connection
	IdleTimeoutInMinutes interface{}
	// The ID of the Load Balancer in which to create the Outbound Rule. Changing this forces a new resource to be created.
	LoadbalancerId interface{}
	// Specifies the name of the Outbound Rule. Changing this forces a new resource to be created.
	Name interface{}
	// The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
	Protocol interface{}
	// The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a OutboundRule resource.
type OutboundRuleArgs struct {
	// The number of outbound ports to be used for NAT.
	AllocatedOutboundPorts interface{}
	// The ID of the Backend Address Pool. Outbound traffic is randomly load balanced across IPs in the backend IPs.
	BackendAddressPoolId interface{}
	// Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
	EnableTcpReset interface{}
	// One or more `frontend_ip_configuration` blocks as defined below.
	FrontendIpConfigurations interface{}
	// The timeout for the TCP idle connection
	IdleTimeoutInMinutes interface{}
	// The ID of the Load Balancer in which to create the Outbound Rule. Changing this forces a new resource to be created.
	LoadbalancerId interface{}
	// Specifies the name of the Outbound Rule. Changing this forces a new resource to be created.
	Name interface{}
	// The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
	Protocol interface{}
	// The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}
