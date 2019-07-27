// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package batch

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages an Azure Batch account.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/batch_account.html.markdown.
type Account struct {
	s *kulado.ResourceState
}

// NewAccount registers a new resource with the given unique name, arguments, and options.
func NewAccount(ctx *kulado.Context,
	name string, args *AccountArgs, opts ...kulado.ResourceOpt) (*Account, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["poolAllocationMode"] = nil
		inputs["resourceGroupName"] = nil
		inputs["storageAccountId"] = nil
		inputs["tags"] = nil
	} else {
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["poolAllocationMode"] = args.PoolAllocationMode
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["storageAccountId"] = args.StorageAccountId
		inputs["tags"] = args.Tags
	}
	inputs["accountEndpoint"] = nil
	inputs["primaryAccessKey"] = nil
	inputs["secondaryAccessKey"] = nil
	s, err := ctx.RegisterResource("azure:batch/account:Account", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Account{s: s}, nil
}

// GetAccount gets an existing Account resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAccount(ctx *kulado.Context,
	name string, id kulado.ID, state *AccountState, opts ...kulado.ResourceOpt) (*Account, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["accountEndpoint"] = state.AccountEndpoint
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["poolAllocationMode"] = state.PoolAllocationMode
		inputs["primaryAccessKey"] = state.PrimaryAccessKey
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["secondaryAccessKey"] = state.SecondaryAccessKey
		inputs["storageAccountId"] = state.StorageAccountId
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:batch/account:Account", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Account{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Account) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Account) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The account endpoint used to interact with the Batch service.
func (r *Account) AccountEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["accountEndpoint"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *Account) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Batch account. Changing this forces a new resource to be created.
func (r *Account) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// Specifies the mode to use for pool allocation. Possible values are `BatchService` or `UserSubscription`. Defaults to `BatchService`.
func (r *Account) PoolAllocationMode() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["poolAllocationMode"])
}

// The Batch account primary access key.
func (r *Account) PrimaryAccessKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryAccessKey"])
}

// The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
func (r *Account) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The Batch account secondary access key.
func (r *Account) SecondaryAccessKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryAccessKey"])
}

// Specifies the storage account to use for the Batch account. If not specified, Azure Batch will manage the storage.
func (r *Account) StorageAccountId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["storageAccountId"])
}

// A mapping of tags to assign to the resource.
func (r *Account) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Account resources.
type AccountState struct {
	// The account endpoint used to interact with the Batch service.
	AccountEndpoint interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Batch account. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the mode to use for pool allocation. Possible values are `BatchService` or `UserSubscription`. Defaults to `BatchService`.
	PoolAllocationMode interface{}
	// The Batch account primary access key.
	PrimaryAccessKey interface{}
	// The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The Batch account secondary access key.
	SecondaryAccessKey interface{}
	// Specifies the storage account to use for the Batch account. If not specified, Azure Batch will manage the storage.
	StorageAccountId interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Account resource.
type AccountArgs struct {
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Batch account. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the mode to use for pool allocation. Possible values are `BatchService` or `UserSubscription`. Defaults to `BatchService`.
	PoolAllocationMode interface{}
	// The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Specifies the storage account to use for the Batch account. If not specified, Azure Batch will manage the storage.
	StorageAccountId interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
