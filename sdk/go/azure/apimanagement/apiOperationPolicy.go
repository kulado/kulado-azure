// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apimanagement

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages an API Management API Operation Policy
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_api_operation_policy.html.markdown.
type ApiOperationPolicy struct {
	s *kulado.ResourceState
}

// NewApiOperationPolicy registers a new resource with the given unique name, arguments, and options.
func NewApiOperationPolicy(ctx *kulado.Context,
	name string, args *ApiOperationPolicyArgs, opts ...kulado.ResourceOpt) (*ApiOperationPolicy, error) {
	if args == nil || args.ApiManagementName == nil {
		return nil, errors.New("missing required argument 'ApiManagementName'")
	}
	if args == nil || args.ApiName == nil {
		return nil, errors.New("missing required argument 'ApiName'")
	}
	if args == nil || args.OperationId == nil {
		return nil, errors.New("missing required argument 'OperationId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["apiManagementName"] = nil
		inputs["apiName"] = nil
		inputs["operationId"] = nil
		inputs["resourceGroupName"] = nil
		inputs["xmlContent"] = nil
		inputs["xmlLink"] = nil
	} else {
		inputs["apiManagementName"] = args.ApiManagementName
		inputs["apiName"] = args.ApiName
		inputs["operationId"] = args.OperationId
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["xmlContent"] = args.XmlContent
		inputs["xmlLink"] = args.XmlLink
	}
	s, err := ctx.RegisterResource("azure:apimanagement/apiOperationPolicy:ApiOperationPolicy", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ApiOperationPolicy{s: s}, nil
}

// GetApiOperationPolicy gets an existing ApiOperationPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApiOperationPolicy(ctx *kulado.Context,
	name string, id kulado.ID, state *ApiOperationPolicyState, opts ...kulado.ResourceOpt) (*ApiOperationPolicy, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["apiManagementName"] = state.ApiManagementName
		inputs["apiName"] = state.ApiName
		inputs["operationId"] = state.OperationId
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["xmlContent"] = state.XmlContent
		inputs["xmlLink"] = state.XmlLink
	}
	s, err := ctx.ReadResource("azure:apimanagement/apiOperationPolicy:ApiOperationPolicy", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ApiOperationPolicy{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *ApiOperationPolicy) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ApiOperationPolicy) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The name of the API Management Service. Changing this forces a new resource to be created.
func (r *ApiOperationPolicy) ApiManagementName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["apiManagementName"])
}

// The ID of the API Management API Operation within the API Management Service. Changing this forces a new resource to be created.
func (r *ApiOperationPolicy) ApiName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["apiName"])
}

func (r *ApiOperationPolicy) OperationId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["operationId"])
}

// The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
func (r *ApiOperationPolicy) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The XML Content for this Policy.
func (r *ApiOperationPolicy) XmlContent() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["xmlContent"])
}

// A link to a Policy XML Document, which must be publicly available.
func (r *ApiOperationPolicy) XmlLink() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["xmlLink"])
}

// Input properties used for looking up and filtering ApiOperationPolicy resources.
type ApiOperationPolicyState struct {
	// The name of the API Management Service. Changing this forces a new resource to be created.
	ApiManagementName interface{}
	// The ID of the API Management API Operation within the API Management Service. Changing this forces a new resource to be created.
	ApiName interface{}
	OperationId interface{}
	// The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The XML Content for this Policy.
	XmlContent interface{}
	// A link to a Policy XML Document, which must be publicly available.
	XmlLink interface{}
}

// The set of arguments for constructing a ApiOperationPolicy resource.
type ApiOperationPolicyArgs struct {
	// The name of the API Management Service. Changing this forces a new resource to be created.
	ApiManagementName interface{}
	// The ID of the API Management API Operation within the API Management Service. Changing this forces a new resource to be created.
	ApiName interface{}
	OperationId interface{}
	// The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The XML Content for this Policy.
	XmlContent interface{}
	// A link to a Policy XML Document, which must be publicly available.
	XmlLink interface{}
}
