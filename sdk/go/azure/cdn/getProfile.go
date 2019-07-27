// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cdn

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about an existing CDN Profile.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/cdn_profile.html.markdown.
func LookupProfile(ctx *kulado.Context, args *GetProfileArgs) (*GetProfileResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:cdn/getProfile:getProfile", inputs)
	if err != nil {
		return nil, err
	}
	return &GetProfileResult{
		Location: outputs["location"],
		Name: outputs["name"],
		ResourceGroupName: outputs["resourceGroupName"],
		Sku: outputs["sku"],
		Tags: outputs["tags"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getProfile.
type GetProfileArgs struct {
	// The name of the CDN Profile.
	Name interface{}
	// The name of the resource group in which the CDN Profile exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getProfile.
type GetProfileResult struct {
	// The Azure Region where the resource exists.
	Location interface{}
	Name interface{}
	ResourceGroupName interface{}
	// The pricing related information of current CDN profile.
	Sku interface{}
	// A mapping of tags assigned to the resource.
	Tags interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}