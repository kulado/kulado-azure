// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iot

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages an IoT Device Provisioning Service.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iot_dps.html.markdown.
type Dps struct {
	s *kulado.ResourceState
}

// NewDps registers a new resource with the given unique name, arguments, and options.
func NewDps(ctx *kulado.Context,
	name string, args *DpsArgs, opts ...kulado.ResourceOpt) (*Dps, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Sku == nil {
		return nil, errors.New("missing required argument 'Sku'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["sku"] = nil
		inputs["tags"] = nil
	} else {
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["sku"] = args.Sku
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("azure:iot/dps:Dps", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Dps{s: s}, nil
}

// GetDps gets an existing Dps resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDps(ctx *kulado.Context,
	name string, id kulado.ID, state *DpsState, opts ...kulado.ResourceOpt) (*Dps, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["sku"] = state.Sku
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:iot/dps:Dps", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Dps{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Dps) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Dps) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
func (r *Dps) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
func (r *Dps) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
func (r *Dps) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A `sku` block as defined below.
func (r *Dps) Sku() *kulado.Output {
	return r.s.State["sku"]
}

// A mapping of tags to assign to the resource.
func (r *Dps) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Dps resources.
type DpsState struct {
	// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `sku` block as defined below.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Dps resource.
type DpsArgs struct {
	// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `sku` block as defined below.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
