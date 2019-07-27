// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package compute

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about a Platform Image.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/platform_image.html.markdown.
func LookupPlatformImage(ctx *kulado.Context, args *GetPlatformImageArgs) (*GetPlatformImageResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["location"] = args.Location
		inputs["offer"] = args.Offer
		inputs["publisher"] = args.Publisher
		inputs["sku"] = args.Sku
	}
	outputs, err := ctx.Invoke("azure:compute/getPlatformImage:getPlatformImage", inputs)
	if err != nil {
		return nil, err
	}
	return &GetPlatformImageResult{
		Location: outputs["location"],
		Offer: outputs["offer"],
		Publisher: outputs["publisher"],
		Sku: outputs["sku"],
		Version: outputs["version"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getPlatformImage.
type GetPlatformImageArgs struct {
	// Specifies the Location to pull information about this Platform Image from.
	Location interface{}
	// Specifies the Offer associated with the Platform Image.
	Offer interface{}
	// Specifies the Publisher associated with the Platform Image.
	Publisher interface{}
	// Specifies the SKU of the Platform Image.
	Sku interface{}
}

// A collection of values returned by getPlatformImage.
type GetPlatformImageResult struct {
	Location interface{}
	Offer interface{}
	Publisher interface{}
	Sku interface{}
	// The latest version of the Platform Image.
	Version interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}