// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about an existing Azure Firewall.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/firewall.html.markdown.
func LookupFirewall(ctx *kulado.Context, args *GetFirewallArgs) (*GetFirewallResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:network/getFirewall:getFirewall", inputs)
	if err != nil {
		return nil, err
	}
	return &GetFirewallResult{
		IpConfiguration: outputs["ipConfiguration"],
		Location: outputs["location"],
		Name: outputs["name"],
		ResourceGroupName: outputs["resourceGroupName"],
		Tags: outputs["tags"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getFirewall.
type GetFirewallArgs struct {
	// The name of the Azure Firewall.
	Name interface{}
	// The name of the Resource Group in which the Azure Firewall exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getFirewall.
type GetFirewallResult struct {
	// A `ip_configuration` block as defined below.
	IpConfiguration interface{}
	Location interface{}
	Name interface{}
	ResourceGroupName interface{}
	Tags interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
