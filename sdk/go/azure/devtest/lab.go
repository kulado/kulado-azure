// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package devtest

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a Dev Test Lab.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dev_test_lab.html.markdown.
type Lab struct {
	s *kulado.ResourceState
}

// NewLab registers a new resource with the given unique name, arguments, and options.
func NewLab(ctx *kulado.Context,
	name string, args *LabArgs, opts ...kulado.ResourceOpt) (*Lab, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["storageType"] = nil
		inputs["tags"] = nil
	} else {
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["storageType"] = args.StorageType
		inputs["tags"] = args.Tags
	}
	inputs["artifactsStorageAccountId"] = nil
	inputs["defaultPremiumStorageAccountId"] = nil
	inputs["defaultStorageAccountId"] = nil
	inputs["keyVaultId"] = nil
	inputs["premiumDataDiskStorageAccountId"] = nil
	inputs["uniqueIdentifier"] = nil
	s, err := ctx.RegisterResource("azure:devtest/lab:Lab", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Lab{s: s}, nil
}

// GetLab gets an existing Lab resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLab(ctx *kulado.Context,
	name string, id kulado.ID, state *LabState, opts ...kulado.ResourceOpt) (*Lab, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["artifactsStorageAccountId"] = state.ArtifactsStorageAccountId
		inputs["defaultPremiumStorageAccountId"] = state.DefaultPremiumStorageAccountId
		inputs["defaultStorageAccountId"] = state.DefaultStorageAccountId
		inputs["keyVaultId"] = state.KeyVaultId
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["premiumDataDiskStorageAccountId"] = state.PremiumDataDiskStorageAccountId
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["storageType"] = state.StorageType
		inputs["tags"] = state.Tags
		inputs["uniqueIdentifier"] = state.UniqueIdentifier
	}
	s, err := ctx.ReadResource("azure:devtest/lab:Lab", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Lab{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Lab) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Lab) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The ID of the Storage Account used for Artifact Storage.
func (r *Lab) ArtifactsStorageAccountId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["artifactsStorageAccountId"])
}

// The ID of the Default Premium Storage Account for this Dev Test Lab.
func (r *Lab) DefaultPremiumStorageAccountId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["defaultPremiumStorageAccountId"])
}

// The ID of the Default Storage Account for this Dev Test Lab.
func (r *Lab) DefaultStorageAccountId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["defaultStorageAccountId"])
}

// The ID of the Key used for this Dev Test Lab.
func (r *Lab) KeyVaultId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["keyVaultId"])
}

// Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.
func (r *Lab) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.
func (r *Lab) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The ID of the Storage Account used for Storage of Premium Data Disk.
func (r *Lab) PremiumDataDiskStorageAccountId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["premiumDataDiskStorageAccountId"])
}

// The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.
func (r *Lab) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The type of storage used by the Dev Test Lab. Possible values are `Standard` and `Premium`. Defaults to `Premium`. Changing this forces a new resource to be created.
func (r *Lab) StorageType() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["storageType"])
}

// A mapping of tags to assign to the resource.
func (r *Lab) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// The unique immutable identifier of the Dev Test Lab.
func (r *Lab) UniqueIdentifier() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["uniqueIdentifier"])
}

// Input properties used for looking up and filtering Lab resources.
type LabState struct {
	// The ID of the Storage Account used for Artifact Storage.
	ArtifactsStorageAccountId interface{}
	// The ID of the Default Premium Storage Account for this Dev Test Lab.
	DefaultPremiumStorageAccountId interface{}
	// The ID of the Default Storage Account for this Dev Test Lab.
	DefaultStorageAccountId interface{}
	// The ID of the Key used for this Dev Test Lab.
	KeyVaultId interface{}
	// Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.
	Name interface{}
	// The ID of the Storage Account used for Storage of Premium Data Disk.
	PremiumDataDiskStorageAccountId interface{}
	// The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The type of storage used by the Dev Test Lab. Possible values are `Standard` and `Premium`. Defaults to `Premium`. Changing this forces a new resource to be created.
	StorageType interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// The unique immutable identifier of the Dev Test Lab.
	UniqueIdentifier interface{}
}

// The set of arguments for constructing a Lab resource.
type LabArgs struct {
	// Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The type of storage used by the Dev Test Lab. Possible values are `Standard` and `Premium`. Defaults to `Premium`. Changing this forces a new resource to be created.
	StorageType interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
