// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manage an EventHub Namespace.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventhub_namespace.html.markdown.
type EventHubNamespace struct {
	s *kulado.ResourceState
}

// NewEventHubNamespace registers a new resource with the given unique name, arguments, and options.
func NewEventHubNamespace(ctx *kulado.Context,
	name string, args *EventHubNamespaceArgs, opts ...kulado.ResourceOpt) (*EventHubNamespace, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Sku == nil {
		return nil, errors.New("missing required argument 'Sku'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["autoInflateEnabled"] = nil
		inputs["capacity"] = nil
		inputs["kafkaEnabled"] = nil
		inputs["location"] = nil
		inputs["maximumThroughputUnits"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["sku"] = nil
		inputs["tags"] = nil
	} else {
		inputs["autoInflateEnabled"] = args.AutoInflateEnabled
		inputs["capacity"] = args.Capacity
		inputs["kafkaEnabled"] = args.KafkaEnabled
		inputs["location"] = args.Location
		inputs["maximumThroughputUnits"] = args.MaximumThroughputUnits
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["sku"] = args.Sku
		inputs["tags"] = args.Tags
	}
	inputs["defaultPrimaryConnectionString"] = nil
	inputs["defaultPrimaryKey"] = nil
	inputs["defaultSecondaryConnectionString"] = nil
	inputs["defaultSecondaryKey"] = nil
	s, err := ctx.RegisterResource("azure:eventhub/eventHubNamespace:EventHubNamespace", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventHubNamespace{s: s}, nil
}

// GetEventHubNamespace gets an existing EventHubNamespace resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventHubNamespace(ctx *kulado.Context,
	name string, id kulado.ID, state *EventHubNamespaceState, opts ...kulado.ResourceOpt) (*EventHubNamespace, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["autoInflateEnabled"] = state.AutoInflateEnabled
		inputs["capacity"] = state.Capacity
		inputs["defaultPrimaryConnectionString"] = state.DefaultPrimaryConnectionString
		inputs["defaultPrimaryKey"] = state.DefaultPrimaryKey
		inputs["defaultSecondaryConnectionString"] = state.DefaultSecondaryConnectionString
		inputs["defaultSecondaryKey"] = state.DefaultSecondaryKey
		inputs["kafkaEnabled"] = state.KafkaEnabled
		inputs["location"] = state.Location
		inputs["maximumThroughputUnits"] = state.MaximumThroughputUnits
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["sku"] = state.Sku
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:eventhub/eventHubNamespace:EventHubNamespace", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventHubNamespace{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *EventHubNamespace) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *EventHubNamespace) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Is Auto Inflate enabled for the EventHub Namespace?
func (r *EventHubNamespace) AutoInflateEnabled() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["autoInflateEnabled"])
}

// Specifies the Capacity / Throughput Units for a `Standard` SKU namespace. Valid values range from 1 - 20.
func (r *EventHubNamespace) Capacity() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["capacity"])
}

// The primary connection string for the authorization
// rule `RootManageSharedAccessKey`.
func (r *EventHubNamespace) DefaultPrimaryConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["defaultPrimaryConnectionString"])
}

// The primary access key for the authorization rule `RootManageSharedAccessKey`.
func (r *EventHubNamespace) DefaultPrimaryKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["defaultPrimaryKey"])
}

// The secondary connection string for the
// authorization rule `RootManageSharedAccessKey`.
func (r *EventHubNamespace) DefaultSecondaryConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["defaultSecondaryConnectionString"])
}

// The secondary access key for the authorization rule `RootManageSharedAccessKey`.
func (r *EventHubNamespace) DefaultSecondaryKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["defaultSecondaryKey"])
}

// Is Kafka enabled for the EventHub Namespace? Defaults to `false`.
func (r *EventHubNamespace) KafkaEnabled() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["kafkaEnabled"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *EventHubNamespace) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the maximum number of throughput units when Auto Inflate is Enabled. Valid values range from 1 - 20.
func (r *EventHubNamespace) MaximumThroughputUnits() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["maximumThroughputUnits"])
}

// Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
func (r *EventHubNamespace) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to create the namespace. Changing this forces a new resource to be created.
func (r *EventHubNamespace) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Defines which tier to use. Valid options are `Basic` and `Standard`.
func (r *EventHubNamespace) Sku() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["sku"])
}

// A mapping of tags to assign to the resource.
func (r *EventHubNamespace) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering EventHubNamespace resources.
type EventHubNamespaceState struct {
	// Is Auto Inflate enabled for the EventHub Namespace?
	AutoInflateEnabled interface{}
	// Specifies the Capacity / Throughput Units for a `Standard` SKU namespace. Valid values range from 1 - 20.
	Capacity interface{}
	// The primary connection string for the authorization
	// rule `RootManageSharedAccessKey`.
	DefaultPrimaryConnectionString interface{}
	// The primary access key for the authorization rule `RootManageSharedAccessKey`.
	DefaultPrimaryKey interface{}
	// The secondary connection string for the
	// authorization rule `RootManageSharedAccessKey`.
	DefaultSecondaryConnectionString interface{}
	// The secondary access key for the authorization rule `RootManageSharedAccessKey`.
	DefaultSecondaryKey interface{}
	// Is Kafka enabled for the EventHub Namespace? Defaults to `false`.
	KafkaEnabled interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the maximum number of throughput units when Auto Inflate is Enabled. Valid values range from 1 - 20.
	MaximumThroughputUnits interface{}
	// Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the namespace. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Defines which tier to use. Valid options are `Basic` and `Standard`.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a EventHubNamespace resource.
type EventHubNamespaceArgs struct {
	// Is Auto Inflate enabled for the EventHub Namespace?
	AutoInflateEnabled interface{}
	// Specifies the Capacity / Throughput Units for a `Standard` SKU namespace. Valid values range from 1 - 20.
	Capacity interface{}
	// Is Kafka enabled for the EventHub Namespace? Defaults to `false`.
	KafkaEnabled interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the maximum number of throughput units when Auto Inflate is Enabled. Valid values range from 1 - 20.
	MaximumThroughputUnits interface{}
	// Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the namespace. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Defines which tier to use. Valid options are `Basic` and `Standard`.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
