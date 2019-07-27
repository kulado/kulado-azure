// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package compute

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about an existing Availability Set.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/availability_set.html.markdown.
func LookupAvailabilitySet(ctx *kulado.Context, args *GetAvailabilitySetArgs) (*GetAvailabilitySetResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:compute/getAvailabilitySet:getAvailabilitySet", inputs)
	if err != nil {
		return nil, err
	}
	return &GetAvailabilitySetResult{
		Location: outputs["location"],
		Managed: outputs["managed"],
		Name: outputs["name"],
		PlatformFaultDomainCount: outputs["platformFaultDomainCount"],
		PlatformUpdateDomainCount: outputs["platformUpdateDomainCount"],
		ResourceGroupName: outputs["resourceGroupName"],
		Tags: outputs["tags"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getAvailabilitySet.
type GetAvailabilitySetArgs struct {
	// The name of the Availability Set.
	Name interface{}
	// The name of the resource group in which the Availability Set exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getAvailabilitySet.
type GetAvailabilitySetResult struct {
	// The supported Azure location where the Availability Set exists.
	Location interface{}
	// Whether the availability set is managed or not.
	Managed interface{}
	Name interface{}
	// The number of fault domains that are used.
	PlatformFaultDomainCount interface{}
	// The number of update domains that are used.
	PlatformUpdateDomainCount interface{}
	ResourceGroupName interface{}
	// A mapping of tags assigned to the resource.
	Tags interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
