// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package privatedns

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Enables you to manage Private DNS zones within Azure DNS. These zones are hosted on Azure's name servers.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/private_dns_zone.html.markdown.
type Zone struct {
	s *kulado.ResourceState
}

// NewZone registers a new resource with the given unique name, arguments, and options.
func NewZone(ctx *kulado.Context,
	name string, args *ZoneArgs, opts ...kulado.ResourceOpt) (*Zone, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	inputs["maxNumberOfRecordSets"] = nil
	inputs["maxNumberOfVirtualNetworkLinks"] = nil
	inputs["maxNumberOfVirtualNetworkLinksWithRegistration"] = nil
	inputs["numberOfRecordSets"] = nil
	s, err := ctx.RegisterResource("azure:privatedns/zone:Zone", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Zone{s: s}, nil
}

// GetZone gets an existing Zone resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetZone(ctx *kulado.Context,
	name string, id kulado.ID, state *ZoneState, opts ...kulado.ResourceOpt) (*Zone, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["maxNumberOfRecordSets"] = state.MaxNumberOfRecordSets
		inputs["maxNumberOfVirtualNetworkLinks"] = state.MaxNumberOfVirtualNetworkLinks
		inputs["maxNumberOfVirtualNetworkLinksWithRegistration"] = state.MaxNumberOfVirtualNetworkLinksWithRegistration
		inputs["name"] = state.Name
		inputs["numberOfRecordSets"] = state.NumberOfRecordSets
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:privatedns/zone:Zone", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Zone{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Zone) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Zone) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The maximum number of record sets that can be created in this Private DNS zone.
func (r *Zone) MaxNumberOfRecordSets() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["maxNumberOfRecordSets"])
}

// The maximum number of virtual networks that can be linked to this Private DNS zone.
func (r *Zone) MaxNumberOfVirtualNetworkLinks() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["maxNumberOfVirtualNetworkLinks"])
}

// The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled.
func (r *Zone) MaxNumberOfVirtualNetworkLinksWithRegistration() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["maxNumberOfVirtualNetworkLinksWithRegistration"])
}

// The name of the Private DNS Zone. Must be a valid domain name.
func (r *Zone) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The current number of record sets in this Private DNS zone.
func (r *Zone) NumberOfRecordSets() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["numberOfRecordSets"])
}

// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
func (r *Zone) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *Zone) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Zone resources.
type ZoneState struct {
	// The maximum number of record sets that can be created in this Private DNS zone.
	MaxNumberOfRecordSets interface{}
	// The maximum number of virtual networks that can be linked to this Private DNS zone.
	MaxNumberOfVirtualNetworkLinks interface{}
	// The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled.
	MaxNumberOfVirtualNetworkLinksWithRegistration interface{}
	// The name of the Private DNS Zone. Must be a valid domain name.
	Name interface{}
	// The current number of record sets in this Private DNS zone.
	NumberOfRecordSets interface{}
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Zone resource.
type ZoneArgs struct {
	// The name of the Private DNS Zone. Must be a valid domain name.
	Name interface{}
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
