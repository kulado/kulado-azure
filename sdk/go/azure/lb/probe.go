// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package lb

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a LoadBalancer Probe Resource.
// 
// > **NOTE** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration Attached
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/lb_probe.html.markdown.
type Probe struct {
	s *kulado.ResourceState
}

// NewProbe registers a new resource with the given unique name, arguments, and options.
func NewProbe(ctx *kulado.Context,
	name string, args *ProbeArgs, opts ...kulado.ResourceOpt) (*Probe, error) {
	if args == nil || args.LoadbalancerId == nil {
		return nil, errors.New("missing required argument 'LoadbalancerId'")
	}
	if args == nil || args.Port == nil {
		return nil, errors.New("missing required argument 'Port'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["intervalInSeconds"] = nil
		inputs["loadbalancerId"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["numberOfProbes"] = nil
		inputs["port"] = nil
		inputs["protocol"] = nil
		inputs["requestPath"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["intervalInSeconds"] = args.IntervalInSeconds
		inputs["loadbalancerId"] = args.LoadbalancerId
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["numberOfProbes"] = args.NumberOfProbes
		inputs["port"] = args.Port
		inputs["protocol"] = args.Protocol
		inputs["requestPath"] = args.RequestPath
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	inputs["loadBalancerRules"] = nil
	s, err := ctx.RegisterResource("azure:lb/probe:Probe", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Probe{s: s}, nil
}

// GetProbe gets an existing Probe resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProbe(ctx *kulado.Context,
	name string, id kulado.ID, state *ProbeState, opts ...kulado.ResourceOpt) (*Probe, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["intervalInSeconds"] = state.IntervalInSeconds
		inputs["loadBalancerRules"] = state.LoadBalancerRules
		inputs["loadbalancerId"] = state.LoadbalancerId
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["numberOfProbes"] = state.NumberOfProbes
		inputs["port"] = state.Port
		inputs["protocol"] = state.Protocol
		inputs["requestPath"] = state.RequestPath
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:lb/probe:Probe", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Probe{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Probe) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Probe) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The interval, in seconds between probes to the backend endpoint for health status. The default value is 15, the minimum value is 5.
func (r *Probe) IntervalInSeconds() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["intervalInSeconds"])
}

func (r *Probe) LoadBalancerRules() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["loadBalancerRules"])
}

// The ID of the LoadBalancer in which to create the NAT Rule.
func (r *Probe) LoadbalancerId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["loadbalancerId"])
}

func (r *Probe) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Probe.
func (r *Probe) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The number of failed probe attempts after which the backend endpoint is removed from rotation. The default value is 2. NumberOfProbes multiplied by intervalInSeconds value must be greater or equal to 10.Endpoints are returned to rotation when at least one probe is successful.
func (r *Probe) NumberOfProbes() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["numberOfProbes"])
}

// Port on which the Probe queries the backend endpoint. Possible values range from 1 to 65535, inclusive.
func (r *Probe) Port() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["port"])
}

// Specifies the protocol of the end point. Possible values are `Http`, `Https` or `Tcp`. If Tcp is specified, a received ACK is required for the probe to be successful. If Http is specified, a 200 OK response from the specified URI is required for the probe to be successful.
func (r *Probe) Protocol() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["protocol"])
}

// The URI used for requesting health status from the backend endpoint. Required if protocol is set to Http. Otherwise, it is not allowed.
func (r *Probe) RequestPath() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["requestPath"])
}

// The name of the resource group in which to create the resource.
func (r *Probe) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering Probe resources.
type ProbeState struct {
	// The interval, in seconds between probes to the backend endpoint for health status. The default value is 15, the minimum value is 5.
	IntervalInSeconds interface{}
	LoadBalancerRules interface{}
	// The ID of the LoadBalancer in which to create the NAT Rule.
	LoadbalancerId interface{}
	Location interface{}
	// Specifies the name of the Probe.
	Name interface{}
	// The number of failed probe attempts after which the backend endpoint is removed from rotation. The default value is 2. NumberOfProbes multiplied by intervalInSeconds value must be greater or equal to 10.Endpoints are returned to rotation when at least one probe is successful.
	NumberOfProbes interface{}
	// Port on which the Probe queries the backend endpoint. Possible values range from 1 to 65535, inclusive.
	Port interface{}
	// Specifies the protocol of the end point. Possible values are `Http`, `Https` or `Tcp`. If Tcp is specified, a received ACK is required for the probe to be successful. If Http is specified, a 200 OK response from the specified URI is required for the probe to be successful.
	Protocol interface{}
	// The URI used for requesting health status from the backend endpoint. Required if protocol is set to Http. Otherwise, it is not allowed.
	RequestPath interface{}
	// The name of the resource group in which to create the resource.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a Probe resource.
type ProbeArgs struct {
	// The interval, in seconds between probes to the backend endpoint for health status. The default value is 15, the minimum value is 5.
	IntervalInSeconds interface{}
	// The ID of the LoadBalancer in which to create the NAT Rule.
	LoadbalancerId interface{}
	Location interface{}
	// Specifies the name of the Probe.
	Name interface{}
	// The number of failed probe attempts after which the backend endpoint is removed from rotation. The default value is 2. NumberOfProbes multiplied by intervalInSeconds value must be greater or equal to 10.Endpoints are returned to rotation when at least one probe is successful.
	NumberOfProbes interface{}
	// Port on which the Probe queries the backend endpoint. Possible values range from 1 to 65535, inclusive.
	Port interface{}
	// Specifies the protocol of the end point. Possible values are `Http`, `Https` or `Tcp`. If Tcp is specified, a received ACK is required for the probe to be successful. If Http is specified, a 200 OK response from the specified URI is required for the probe to be successful.
	Protocol interface{}
	// The URI used for requesting health status from the backend endpoint. Required if protocol is set to Http. Otherwise, it is not allowed.
	RequestPath interface{}
	// The name of the resource group in which to create the resource.
	ResourceGroupName interface{}
}
