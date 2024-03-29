// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package core

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a resource group on Azure.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/resource_group.html.markdown.
type ResourceGroup struct {
	s *kulado.ResourceState
}

// NewResourceGroup registers a new resource with the given unique name, arguments, and options.
func NewResourceGroup(ctx *kulado.Context,
	name string, args *ResourceGroupArgs, opts ...kulado.ResourceOpt) (*ResourceGroup, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["tags"] = nil
	} else {
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("azure:core/resourceGroup:ResourceGroup", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ResourceGroup{s: s}, nil
}

// GetResourceGroup gets an existing ResourceGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetResourceGroup(ctx *kulado.Context,
	name string, id kulado.ID, state *ResourceGroupState, opts ...kulado.ResourceOpt) (*ResourceGroup, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:core/resourceGroup:ResourceGroup", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ResourceGroup{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *ResourceGroup) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ResourceGroup) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The location where the resource group should be created.
// For a list of all Azure locations, please consult [this link](http://azure.microsoft.com/en-us/regions/) or run `az account list-locations --output table`.
func (r *ResourceGroup) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// The name of the resource group. Must be unique on your
// Azure subscription.
func (r *ResourceGroup) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// A mapping of tags to assign to the resource.
func (r *ResourceGroup) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering ResourceGroup resources.
type ResourceGroupState struct {
	// The location where the resource group should be created.
	// For a list of all Azure locations, please consult [this link](http://azure.microsoft.com/en-us/regions/) or run `az account list-locations --output table`.
	Location interface{}
	// The name of the resource group. Must be unique on your
	// Azure subscription.
	Name interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a ResourceGroup resource.
type ResourceGroupArgs struct {
	// The location where the resource group should be created.
	// For a list of all Azure locations, please consult [this link](http://azure.microsoft.com/en-us/regions/) or run `az account list-locations --output table`.
	Location interface{}
	// The name of the resource group. Must be unique on your
	// Azure subscription.
	Name interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
