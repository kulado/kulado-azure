// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manage a Public IP Prefix.
// 
// > **NOTE** Public IP Prefix are currently in Public Preview. You can find more information about [Public IP Preifx Preview here](https://docs.microsoft.com/en-us/azure/virtual-network/public-ip-address-prefix).
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/public_ip_prefix.html.markdown.
type PublicIpPrefix struct {
	s *kulado.ResourceState
}

// NewPublicIpPrefix registers a new resource with the given unique name, arguments, and options.
func NewPublicIpPrefix(ctx *kulado.Context,
	name string, args *PublicIpPrefixArgs, opts ...kulado.ResourceOpt) (*PublicIpPrefix, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["prefixLength"] = nil
		inputs["resourceGroupName"] = nil
		inputs["sku"] = nil
		inputs["tags"] = nil
		inputs["zones"] = nil
	} else {
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["prefixLength"] = args.PrefixLength
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["sku"] = args.Sku
		inputs["tags"] = args.Tags
		inputs["zones"] = args.Zones
	}
	inputs["ipPrefix"] = nil
	s, err := ctx.RegisterResource("azure:network/publicIpPrefix:PublicIpPrefix", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PublicIpPrefix{s: s}, nil
}

// GetPublicIpPrefix gets an existing PublicIpPrefix resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPublicIpPrefix(ctx *kulado.Context,
	name string, id kulado.ID, state *PublicIpPrefixState, opts ...kulado.ResourceOpt) (*PublicIpPrefix, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["ipPrefix"] = state.IpPrefix
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["prefixLength"] = state.PrefixLength
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["sku"] = state.Sku
		inputs["tags"] = state.Tags
		inputs["zones"] = state.Zones
	}
	s, err := ctx.ReadResource("azure:network/publicIpPrefix:PublicIpPrefix", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PublicIpPrefix{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *PublicIpPrefix) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *PublicIpPrefix) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The IP address prefix value that was allocated.
func (r *PublicIpPrefix) IpPrefix() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["ipPrefix"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *PublicIpPrefix) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Public IP resource . Changing this forces a new resource to be created.
func (r *PublicIpPrefix) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// Specifies the number of bits of the prefix. The value can be set between 24 (256 addresses) and 31 (2 addresses). Changing this forces a new resource to be created.
func (r *PublicIpPrefix) PrefixLength() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["prefixLength"])
}

// The name of the resource group in which to create the public IP.
func (r *PublicIpPrefix) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
func (r *PublicIpPrefix) Sku() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["sku"])
}

// A mapping of tags to assign to the resource.
func (r *PublicIpPrefix) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// A collection containing the availability zone to allocate the Public IP in.
func (r *PublicIpPrefix) Zones() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["zones"])
}

// Input properties used for looking up and filtering PublicIpPrefix resources.
type PublicIpPrefixState struct {
	// The IP address prefix value that was allocated.
	IpPrefix interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Public IP resource . Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the number of bits of the prefix. The value can be set between 24 (256 addresses) and 31 (2 addresses). Changing this forces a new resource to be created.
	PrefixLength interface{}
	// The name of the resource group in which to create the public IP.
	ResourceGroupName interface{}
	// The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// A collection containing the availability zone to allocate the Public IP in.
	Zones interface{}
}

// The set of arguments for constructing a PublicIpPrefix resource.
type PublicIpPrefixArgs struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Public IP resource . Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the number of bits of the prefix. The value can be set between 24 (256 addresses) and 31 (2 addresses). Changing this forces a new resource to be created.
	PrefixLength interface{}
	// The name of the resource group in which to create the public IP.
	ResourceGroupName interface{}
	// The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// A collection containing the availability zone to allocate the Public IP in.
	Zones interface{}
}
