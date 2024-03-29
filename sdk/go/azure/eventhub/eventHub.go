// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a Event Hubs as a nested resource within a Event Hubs namespace.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventhub.html.markdown.
type EventHub struct {
	s *kulado.ResourceState
}

// NewEventHub registers a new resource with the given unique name, arguments, and options.
func NewEventHub(ctx *kulado.Context,
	name string, args *EventHubArgs, opts ...kulado.ResourceOpt) (*EventHub, error) {
	if args == nil || args.MessageRetention == nil {
		return nil, errors.New("missing required argument 'MessageRetention'")
	}
	if args == nil || args.NamespaceName == nil {
		return nil, errors.New("missing required argument 'NamespaceName'")
	}
	if args == nil || args.PartitionCount == nil {
		return nil, errors.New("missing required argument 'PartitionCount'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["captureDescription"] = nil
		inputs["location"] = nil
		inputs["messageRetention"] = nil
		inputs["name"] = nil
		inputs["namespaceName"] = nil
		inputs["partitionCount"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["captureDescription"] = args.CaptureDescription
		inputs["location"] = args.Location
		inputs["messageRetention"] = args.MessageRetention
		inputs["name"] = args.Name
		inputs["namespaceName"] = args.NamespaceName
		inputs["partitionCount"] = args.PartitionCount
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	inputs["partitionIds"] = nil
	s, err := ctx.RegisterResource("azure:eventhub/eventHub:EventHub", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventHub{s: s}, nil
}

// GetEventHub gets an existing EventHub resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventHub(ctx *kulado.Context,
	name string, id kulado.ID, state *EventHubState, opts ...kulado.ResourceOpt) (*EventHub, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["captureDescription"] = state.CaptureDescription
		inputs["location"] = state.Location
		inputs["messageRetention"] = state.MessageRetention
		inputs["name"] = state.Name
		inputs["namespaceName"] = state.NamespaceName
		inputs["partitionCount"] = state.PartitionCount
		inputs["partitionIds"] = state.PartitionIds
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:eventhub/eventHub:EventHub", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &EventHub{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *EventHub) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *EventHub) ID() *kulado.IDOutput {
	return r.s.ID()
}

// A `capture_description` block as defined below.
func (r *EventHub) CaptureDescription() *kulado.Output {
	return r.s.State["captureDescription"]
}

func (r *EventHub) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the number of days to retain the events for this Event Hub. Needs to be between 1 and 7 days; or 1 day when using a Basic SKU for the parent EventHub Namespace.
func (r *EventHub) MessageRetention() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["messageRetention"])
}

// Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
func (r *EventHub) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
func (r *EventHub) NamespaceName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["namespaceName"])
}

// Specifies the current number of shards on the Event Hub. Changing this forces a new resource to be created.
func (r *EventHub) PartitionCount() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["partitionCount"])
}

// The identifiers for partitions created for Event Hubs.
func (r *EventHub) PartitionIds() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["partitionIds"])
}

// The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
func (r *EventHub) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering EventHub resources.
type EventHubState struct {
	// A `capture_description` block as defined below.
	CaptureDescription interface{}
	Location interface{}
	// Specifies the number of days to retain the events for this Event Hub. Needs to be between 1 and 7 days; or 1 day when using a Basic SKU for the parent EventHub Namespace.
	MessageRetention interface{}
	// Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// Specifies the current number of shards on the Event Hub. Changing this forces a new resource to be created.
	PartitionCount interface{}
	// The identifiers for partitions created for Event Hubs.
	PartitionIds interface{}
	// The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a EventHub resource.
type EventHubArgs struct {
	// A `capture_description` block as defined below.
	CaptureDescription interface{}
	Location interface{}
	// Specifies the number of days to retain the events for this Event Hub. Needs to be between 1 and 7 days; or 1 day when using a Basic SKU for the parent EventHub Namespace.
	MessageRetention interface{}
	// Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// Specifies the current number of shards on the Event Hub. Changing this forces a new resource to be created.
	PartitionCount interface{}
	// The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}
