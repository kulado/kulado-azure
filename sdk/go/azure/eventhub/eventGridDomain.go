// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages an EventGrid Domain
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventgrid_domain.html.markdown.
type EventGridDomain struct {
	s *kulado.ResourceState
}

// NewEventGridDomain registers a new resource with the given unique name, arguments, and options.
func NewEventGridDomain(ctx *kulado.Context,
	name string, args *EventGridDomainArgs, opts ...kulado.ResourceOpt) (*EventGridDomain, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["inputMappingDefaultValues"] = nil
		inputs["inputMappingFields"] = nil
		inputs["inputSchema"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["inputMappingDefaultValues"] = args.InputMappingDefaultValues
		inputs["inputMappingFields"] = args.InputMappingFields
		inputs["inputSchema"] = args.InputSchema
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	inputs["endpoint"] = nil
	s, err := ctx.RegisterResource("azure:eventhub/eventGridDomain:EventGridDomain", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventGridDomain{s: s}, nil
}

// GetEventGridDomain gets an existing EventGridDomain resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventGridDomain(ctx *kulado.Context,
	name string, id kulado.ID, state *EventGridDomainState, opts ...kulado.ResourceOpt) (*EventGridDomain, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["endpoint"] = state.Endpoint
		inputs["inputMappingDefaultValues"] = state.InputMappingDefaultValues
		inputs["inputMappingFields"] = state.InputMappingFields
		inputs["inputSchema"] = state.InputSchema
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:eventhub/eventGridDomain:EventGridDomain", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventGridDomain{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *EventGridDomain) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *EventGridDomain) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The Endpoint associated with the EventGrid Domain.
func (r *EventGridDomain) Endpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["endpoint"])
}

// A `input_mapping_default_values` block as defined below.
func (r *EventGridDomain) InputMappingDefaultValues() *kulado.Output {
	return r.s.State["inputMappingDefaultValues"]
}

// A `input_mapping_fields` block as defined below.
func (r *EventGridDomain) InputMappingFields() *kulado.Output {
	return r.s.State["inputMappingFields"]
}

// Specifies the schema in which incoming events will be published to this domain. Allowed values are `cloudeventv01schema`, `customeventschema`, or `eventgridschema`. Defaults to `eventgridschema`. Changing this forces a new resource to be created.
func (r *EventGridDomain) InputSchema() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["inputSchema"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *EventGridDomain) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the EventGrid Domain resource. Changing this forces a new resource to be created.
func (r *EventGridDomain) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
func (r *EventGridDomain) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *EventGridDomain) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering EventGridDomain resources.
type EventGridDomainState struct {
	// The Endpoint associated with the EventGrid Domain.
	Endpoint interface{}
	// A `input_mapping_default_values` block as defined below.
	InputMappingDefaultValues interface{}
	// A `input_mapping_fields` block as defined below.
	InputMappingFields interface{}
	// Specifies the schema in which incoming events will be published to this domain. Allowed values are `cloudeventv01schema`, `customeventschema`, or `eventgridschema`. Defaults to `eventgridschema`. Changing this forces a new resource to be created.
	InputSchema interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the EventGrid Domain resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a EventGridDomain resource.
type EventGridDomainArgs struct {
	// A `input_mapping_default_values` block as defined below.
	InputMappingDefaultValues interface{}
	// A `input_mapping_fields` block as defined below.
	InputMappingFields interface{}
	// Specifies the schema in which incoming events will be published to this domain. Allowed values are `cloudeventv01schema`, `customeventschema`, or `eventgridschema`. Defaults to `eventgridschema`. Changing this forces a new resource to be created.
	InputSchema interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the EventGrid Domain resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}