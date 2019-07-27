// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package notificationhub

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about an existing Notification Hub Namespace.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/notification_hub_namespace.html.markdown.
func LookupNamespace(ctx *kulado.Context, args *GetNamespaceArgs) (*GetNamespaceResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:notificationhub/getNamespace:getNamespace", inputs)
	if err != nil {
		return nil, err
	}
	return &GetNamespaceResult{
		Enabled: outputs["enabled"],
		Location: outputs["location"],
		Name: outputs["name"],
		NamespaceType: outputs["namespaceType"],
		ResourceGroupName: outputs["resourceGroupName"],
		ServicebusEndpoint: outputs["servicebusEndpoint"],
		Sku: outputs["sku"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getNamespace.
type GetNamespaceArgs struct {
	// Specifies the Name of the Notification Hub Namespace.
	Name interface{}
	// Specifies the Name of the Resource Group within which the Notification Hub exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getNamespace.
type GetNamespaceResult struct {
	// Is this Notification Hub Namespace enabled?
	Enabled interface{}
	// The Azure Region in which this Notification Hub Namespace exists.
	Location interface{}
	// (Required) The name of the SKU to use for this Notification Hub Namespace. Possible values are `Free`, `Basic` or `Standard.`
	Name interface{}
	// The Type of Namespace, such as `Messaging` or `NotificationHub`.
	NamespaceType interface{}
	ResourceGroupName interface{}
	ServicebusEndpoint interface{}
	// A `sku` block as defined below.
	Sku interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}