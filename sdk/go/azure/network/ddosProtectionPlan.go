// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages an AzureNetwork DDoS Protection Plan.
// 
// > **NOTE** Azure only allow `one` DDoS Protection Plan per region.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_ddos_protection_plan.html.markdown.
type DdosProtectionPlan struct {
	s *kulado.ResourceState
}

// NewDdosProtectionPlan registers a new resource with the given unique name, arguments, and options.
func NewDdosProtectionPlan(ctx *kulado.Context,
	name string, args *DdosProtectionPlanArgs, opts ...kulado.ResourceOpt) (*DdosProtectionPlan, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	inputs["virtualNetworkIds"] = nil
	s, err := ctx.RegisterResource("azure:network/ddosProtectionPlan:DdosProtectionPlan", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DdosProtectionPlan{s: s}, nil
}

// GetDdosProtectionPlan gets an existing DdosProtectionPlan resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDdosProtectionPlan(ctx *kulado.Context,
	name string, id kulado.ID, state *DdosProtectionPlanState, opts ...kulado.ResourceOpt) (*DdosProtectionPlan, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
		inputs["virtualNetworkIds"] = state.VirtualNetworkIds
	}
	s, err := ctx.ReadResource("azure:network/ddosProtectionPlan:DdosProtectionPlan", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DdosProtectionPlan{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *DdosProtectionPlan) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *DdosProtectionPlan) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *DdosProtectionPlan) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Network DDoS Protection Plan. Changing this forces a new resource to be created.
func (r *DdosProtectionPlan) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
func (r *DdosProtectionPlan) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *DdosProtectionPlan) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// The Resource ID list of the Virtual Networks associated with DDoS Protection Plan.
func (r *DdosProtectionPlan) VirtualNetworkIds() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["virtualNetworkIds"])
}

// Input properties used for looking up and filtering DdosProtectionPlan resources.
type DdosProtectionPlanState struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Network DDoS Protection Plan. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// The Resource ID list of the Virtual Networks associated with DDoS Protection Plan.
	VirtualNetworkIds interface{}
}

// The set of arguments for constructing a DdosProtectionPlan resource.
type DdosProtectionPlanArgs struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Network DDoS Protection Plan. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}