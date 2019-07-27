// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package recoveryservices

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about an existing Recovery Services Vault.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/recovery_services_vault.html.markdown.
func LookupVault(ctx *kulado.Context, args *GetVaultArgs) (*GetVaultResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:recoveryservices/getVault:getVault", inputs)
	if err != nil {
		return nil, err
	}
	return &GetVaultResult{
		Location: outputs["location"],
		Name: outputs["name"],
		ResourceGroupName: outputs["resourceGroupName"],
		Sku: outputs["sku"],
		Tags: outputs["tags"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getVault.
type GetVaultArgs struct {
	// Specifies the name of the Recovery Services Vault.
	Name interface{}
	// The name of the resource group in which the Recovery Services Vault resides.
	ResourceGroupName interface{}
}

// A collection of values returned by getVault.
type GetVaultResult struct {
	// The Azure location where the resource resides.
	Location interface{}
	Name interface{}
	ResourceGroupName interface{}
	// The vault's current SKU.
	Sku interface{}
	// A mapping of tags assigned to the resource.
	Tags interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
