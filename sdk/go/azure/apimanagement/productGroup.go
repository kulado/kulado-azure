// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apimanagement

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages an API Management Product Assignment to a Group.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_product_group.html.markdown.
type ProductGroup struct {
	s *kulado.ResourceState
}

// NewProductGroup registers a new resource with the given unique name, arguments, and options.
func NewProductGroup(ctx *kulado.Context,
	name string, args *ProductGroupArgs, opts ...kulado.ResourceOpt) (*ProductGroup, error) {
	if args == nil || args.ApiManagementName == nil {
		return nil, errors.New("missing required argument 'ApiManagementName'")
	}
	if args == nil || args.GroupName == nil {
		return nil, errors.New("missing required argument 'GroupName'")
	}
	if args == nil || args.ProductId == nil {
		return nil, errors.New("missing required argument 'ProductId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["apiManagementName"] = nil
		inputs["groupName"] = nil
		inputs["productId"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["apiManagementName"] = args.ApiManagementName
		inputs["groupName"] = args.GroupName
		inputs["productId"] = args.ProductId
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	s, err := ctx.RegisterResource("azure:apimanagement/productGroup:ProductGroup", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ProductGroup{s: s}, nil
}

// GetProductGroup gets an existing ProductGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProductGroup(ctx *kulado.Context,
	name string, id kulado.ID, state *ProductGroupState, opts ...kulado.ResourceOpt) (*ProductGroup, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["apiManagementName"] = state.ApiManagementName
		inputs["groupName"] = state.GroupName
		inputs["productId"] = state.ProductId
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:apimanagement/productGroup:ProductGroup", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ProductGroup{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *ProductGroup) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ProductGroup) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The name of the API Management Service. Changing this forces a new resource to be created.
func (r *ProductGroup) ApiManagementName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["apiManagementName"])
}

// The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
func (r *ProductGroup) GroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["groupName"])
}

// The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
func (r *ProductGroup) ProductId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["productId"])
}

// The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
func (r *ProductGroup) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering ProductGroup resources.
type ProductGroupState struct {
	// The name of the API Management Service. Changing this forces a new resource to be created.
	ApiManagementName interface{}
	// The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
	GroupName interface{}
	// The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
	ProductId interface{}
	// The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a ProductGroup resource.
type ProductGroupArgs struct {
	// The name of the API Management Service. Changing this forces a new resource to be created.
	ApiManagementName interface{}
	// The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
	GroupName interface{}
	// The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
	ProductId interface{}
	// The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}
