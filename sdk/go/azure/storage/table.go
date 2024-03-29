// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manage an Azure Storage Table.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/storage_table.html.markdown.
type Table struct {
	s *kulado.ResourceState
}

// NewTable registers a new resource with the given unique name, arguments, and options.
func NewTable(ctx *kulado.Context,
	name string, args *TableArgs, opts ...kulado.ResourceOpt) (*Table, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.StorageAccountName == nil {
		return nil, errors.New("missing required argument 'StorageAccountName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["storageAccountName"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["storageAccountName"] = args.StorageAccountName
	}
	s, err := ctx.RegisterResource("azure:storage/table:Table", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Table{s: s}, nil
}

// GetTable gets an existing Table resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTable(ctx *kulado.Context,
	name string, id kulado.ID, state *TableState, opts ...kulado.ResourceOpt) (*Table, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["storageAccountName"] = state.StorageAccountName
	}
	s, err := ctx.ReadResource("azure:storage/table:Table", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Table{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Table) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Table) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The name of the storage table. Must be unique within the storage account the table is located.
func (r *Table) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to
// create the storage table. Changing this forces a new resource to be created.
func (r *Table) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Specifies the storage account in which to create the storage table.
// Changing this forces a new resource to be created.
func (r *Table) StorageAccountName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["storageAccountName"])
}

// Input properties used for looking up and filtering Table resources.
type TableState struct {
	// The name of the storage table. Must be unique within the storage account the table is located.
	Name interface{}
	// The name of the resource group in which to
	// create the storage table. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Specifies the storage account in which to create the storage table.
	// Changing this forces a new resource to be created.
	StorageAccountName interface{}
}

// The set of arguments for constructing a Table resource.
type TableArgs struct {
	// The name of the storage table. Must be unique within the storage account the table is located.
	Name interface{}
	// The name of the resource group in which to
	// create the storage table. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Specifies the storage account in which to create the storage table.
	// Changing this forces a new resource to be created.
	StorageAccountName interface{}
}
