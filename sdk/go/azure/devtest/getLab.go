// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package devtest

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about an existing Dev Test Lab.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/dev_test_lab.html.markdown.
func LookupLab(ctx *kulado.Context, args *GetLabArgs) (*GetLabResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:devtest/getLab:getLab", inputs)
	if err != nil {
		return nil, err
	}
	return &GetLabResult{
		ArtifactsStorageAccountId: outputs["artifactsStorageAccountId"],
		DefaultPremiumStorageAccountId: outputs["defaultPremiumStorageAccountId"],
		DefaultStorageAccountId: outputs["defaultStorageAccountId"],
		KeyVaultId: outputs["keyVaultId"],
		Location: outputs["location"],
		Name: outputs["name"],
		PremiumDataDiskStorageAccountId: outputs["premiumDataDiskStorageAccountId"],
		ResourceGroupName: outputs["resourceGroupName"],
		StorageType: outputs["storageType"],
		Tags: outputs["tags"],
		UniqueIdentifier: outputs["uniqueIdentifier"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getLab.
type GetLabArgs struct {
	// The name of the Dev Test Lab.
	Name interface{}
	// The Name of the Resource Group where the Dev Test Lab exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getLab.
type GetLabResult struct {
	// The ID of the Storage Account used for Artifact Storage.
	ArtifactsStorageAccountId interface{}
	// The ID of the Default Premium Storage Account for this Dev Test Lab.
	DefaultPremiumStorageAccountId interface{}
	// The ID of the Default Storage Account for this Dev Test Lab.
	DefaultStorageAccountId interface{}
	// The ID of the Key used for this Dev Test Lab.
	KeyVaultId interface{}
	// The Azure location where the Dev Test Lab exists.
	Location interface{}
	Name interface{}
	// The ID of the Storage Account used for Storage of Premium Data Disk.
	PremiumDataDiskStorageAccountId interface{}
	ResourceGroupName interface{}
	// The type of storage used by the Dev Test Lab.
	StorageType interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// The unique immutable identifier of the Dev Test Lab.
	UniqueIdentifier interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
