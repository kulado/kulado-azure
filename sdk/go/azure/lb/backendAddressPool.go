// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package lb

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manage a Load Balancer Backend Address Pool.
// 
// > **NOTE:** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration Attached
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/lb_backend_address_pool.html.markdown.
type BackendAddressPool struct {
	s *kulado.ResourceState
}

// NewBackendAddressPool registers a new resource with the given unique name, arguments, and options.
func NewBackendAddressPool(ctx *kulado.Context,
	name string, args *BackendAddressPoolArgs, opts ...kulado.ResourceOpt) (*BackendAddressPool, error) {
	if args == nil || args.LoadbalancerId == nil {
		return nil, errors.New("missing required argument 'LoadbalancerId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["loadbalancerId"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["loadbalancerId"] = args.LoadbalancerId
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	inputs["backendIpConfigurations"] = nil
	inputs["loadBalancingRules"] = nil
	s, err := ctx.RegisterResource("azure:lb/backendAddressPool:BackendAddressPool", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &BackendAddressPool{s: s}, nil
}

// GetBackendAddressPool gets an existing BackendAddressPool resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetBackendAddressPool(ctx *kulado.Context,
	name string, id kulado.ID, state *BackendAddressPoolState, opts ...kulado.ResourceOpt) (*BackendAddressPool, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["backendIpConfigurations"] = state.BackendIpConfigurations
		inputs["loadBalancingRules"] = state.LoadBalancingRules
		inputs["loadbalancerId"] = state.LoadbalancerId
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:lb/backendAddressPool:BackendAddressPool", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &BackendAddressPool{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *BackendAddressPool) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *BackendAddressPool) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The Backend IP Configurations associated with this Backend Address Pool.
func (r *BackendAddressPool) BackendIpConfigurations() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["backendIpConfigurations"])
}

// The Load Balancing Rules associated with this Backend Address Pool.
func (r *BackendAddressPool) LoadBalancingRules() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["loadBalancingRules"])
}

// The ID of the Load Balancer in which to create the Backend Address Pool.
func (r *BackendAddressPool) LoadbalancerId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["loadbalancerId"])
}

func (r *BackendAddressPool) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Backend Address Pool.
func (r *BackendAddressPool) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to create the resource.
func (r *BackendAddressPool) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering BackendAddressPool resources.
type BackendAddressPoolState struct {
	// The Backend IP Configurations associated with this Backend Address Pool.
	BackendIpConfigurations interface{}
	// The Load Balancing Rules associated with this Backend Address Pool.
	LoadBalancingRules interface{}
	// The ID of the Load Balancer in which to create the Backend Address Pool.
	LoadbalancerId interface{}
	Location interface{}
	// Specifies the name of the Backend Address Pool.
	Name interface{}
	// The name of the resource group in which to create the resource.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a BackendAddressPool resource.
type BackendAddressPoolArgs struct {
	// The ID of the Load Balancer in which to create the Backend Address Pool.
	LoadbalancerId interface{}
	Location interface{}
	// Specifies the name of the Backend Address Pool.
	Name interface{}
	// The name of the resource group in which to create the resource.
	ResourceGroupName interface{}
}
