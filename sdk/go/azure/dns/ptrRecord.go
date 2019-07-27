// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package dns

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Enables you to manage DNS PTR Records within Azure DNS.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dns_ptr_record.html.markdown.
type PtrRecord struct {
	s *kulado.ResourceState
}

// NewPtrRecord registers a new resource with the given unique name, arguments, and options.
func NewPtrRecord(ctx *kulado.Context,
	name string, args *PtrRecordArgs, opts ...kulado.ResourceOpt) (*PtrRecord, error) {
	if args == nil || args.Records == nil {
		return nil, errors.New("missing required argument 'Records'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Ttl == nil {
		return nil, errors.New("missing required argument 'Ttl'")
	}
	if args == nil || args.ZoneName == nil {
		return nil, errors.New("missing required argument 'ZoneName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["records"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
		inputs["ttl"] = nil
		inputs["zoneName"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["records"] = args.Records
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
		inputs["ttl"] = args.Ttl
		inputs["zoneName"] = args.ZoneName
	}
	s, err := ctx.RegisterResource("azure:dns/ptrRecord:PtrRecord", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PtrRecord{s: s}, nil
}

// GetPtrRecord gets an existing PtrRecord resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPtrRecord(ctx *kulado.Context,
	name string, id kulado.ID, state *PtrRecordState, opts ...kulado.ResourceOpt) (*PtrRecord, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["records"] = state.Records
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
		inputs["ttl"] = state.Ttl
		inputs["zoneName"] = state.ZoneName
	}
	s, err := ctx.ReadResource("azure:dns/ptrRecord:PtrRecord", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PtrRecord{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *PtrRecord) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *PtrRecord) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The name of the DNS PTR Record.
func (r *PtrRecord) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// List of Fully Qualified Domain Names.
func (r *PtrRecord) Records() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["records"])
}

// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
func (r *PtrRecord) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *PtrRecord) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// The Time To Live (TTL) of the DNS record in seconds.
func (r *PtrRecord) Ttl() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["ttl"])
}

// Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
func (r *PtrRecord) ZoneName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["zoneName"])
}

// Input properties used for looking up and filtering PtrRecord resources.
type PtrRecordState struct {
	// The name of the DNS PTR Record.
	Name interface{}
	// List of Fully Qualified Domain Names.
	Records interface{}
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// The Time To Live (TTL) of the DNS record in seconds.
	Ttl interface{}
	// Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName interface{}
}

// The set of arguments for constructing a PtrRecord resource.
type PtrRecordArgs struct {
	// The name of the DNS PTR Record.
	Name interface{}
	// List of Fully Qualified Domain Names.
	Records interface{}
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// The Time To Live (TTL) of the DNS record in seconds.
	Ttl interface{}
	// Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName interface{}
}
