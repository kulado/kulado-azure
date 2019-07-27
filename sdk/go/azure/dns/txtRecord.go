// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package dns

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Enables you to manage DNS TXT Records within Azure DNS.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dns_txt_record.html.markdown.
type TxtRecord struct {
	s *kulado.ResourceState
}

// NewTxtRecord registers a new resource with the given unique name, arguments, and options.
func NewTxtRecord(ctx *kulado.Context,
	name string, args *TxtRecordArgs, opts ...kulado.ResourceOpt) (*TxtRecord, error) {
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
	s, err := ctx.RegisterResource("azure:dns/txtRecord:TxtRecord", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &TxtRecord{s: s}, nil
}

// GetTxtRecord gets an existing TxtRecord resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTxtRecord(ctx *kulado.Context,
	name string, id kulado.ID, state *TxtRecordState, opts ...kulado.ResourceOpt) (*TxtRecord, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["records"] = state.Records
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
		inputs["ttl"] = state.Ttl
		inputs["zoneName"] = state.ZoneName
	}
	s, err := ctx.ReadResource("azure:dns/txtRecord:TxtRecord", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &TxtRecord{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *TxtRecord) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *TxtRecord) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The name of the DNS TXT Record.
func (r *TxtRecord) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// A list of values that make up the txt record. Each `record` block supports fields documented below.
func (r *TxtRecord) Records() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["records"])
}

// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
func (r *TxtRecord) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *TxtRecord) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// The Time To Live (TTL) of the DNS record in seconds.
func (r *TxtRecord) Ttl() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["ttl"])
}

// Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
func (r *TxtRecord) ZoneName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["zoneName"])
}

// Input properties used for looking up and filtering TxtRecord resources.
type TxtRecordState struct {
	// The name of the DNS TXT Record.
	Name interface{}
	// A list of values that make up the txt record. Each `record` block supports fields documented below.
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

// The set of arguments for constructing a TxtRecord resource.
type TxtRecordArgs struct {
	// The name of the DNS TXT Record.
	Name interface{}
	// A list of values that make up the txt record. Each `record` block supports fields documented below.
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
