// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manage an Azure Storage Account.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/storage_account.html.markdown.
type Account struct {
	s *kulado.ResourceState
}

// NewAccount registers a new resource with the given unique name, arguments, and options.
func NewAccount(ctx *kulado.Context,
	name string, args *AccountArgs, opts ...kulado.ResourceOpt) (*Account, error) {
	if args == nil || args.AccountReplicationType == nil {
		return nil, errors.New("missing required argument 'AccountReplicationType'")
	}
	if args == nil || args.AccountTier == nil {
		return nil, errors.New("missing required argument 'AccountTier'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["accessTier"] = nil
		inputs["accountEncryptionSource"] = nil
		inputs["accountKind"] = nil
		inputs["accountReplicationType"] = nil
		inputs["accountTier"] = nil
		inputs["accountType"] = nil
		inputs["customDomain"] = nil
		inputs["enableBlobEncryption"] = nil
		inputs["enableFileEncryption"] = nil
		inputs["enableHttpsTrafficOnly"] = nil
		inputs["identity"] = nil
		inputs["isHnsEnabled"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["networkRules"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["accessTier"] = args.AccessTier
		inputs["accountEncryptionSource"] = args.AccountEncryptionSource
		inputs["accountKind"] = args.AccountKind
		inputs["accountReplicationType"] = args.AccountReplicationType
		inputs["accountTier"] = args.AccountTier
		inputs["accountType"] = args.AccountType
		inputs["customDomain"] = args.CustomDomain
		inputs["enableBlobEncryption"] = args.EnableBlobEncryption
		inputs["enableFileEncryption"] = args.EnableFileEncryption
		inputs["enableHttpsTrafficOnly"] = args.EnableHttpsTrafficOnly
		inputs["identity"] = args.Identity
		inputs["isHnsEnabled"] = args.IsHnsEnabled
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["networkRules"] = args.NetworkRules
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	inputs["primaryAccessKey"] = nil
	inputs["primaryBlobConnectionString"] = nil
	inputs["primaryBlobEndpoint"] = nil
	inputs["primaryBlobHost"] = nil
	inputs["primaryConnectionString"] = nil
	inputs["primaryDfsEndpoint"] = nil
	inputs["primaryDfsHost"] = nil
	inputs["primaryFileEndpoint"] = nil
	inputs["primaryFileHost"] = nil
	inputs["primaryLocation"] = nil
	inputs["primaryQueueEndpoint"] = nil
	inputs["primaryQueueHost"] = nil
	inputs["primaryTableEndpoint"] = nil
	inputs["primaryTableHost"] = nil
	inputs["primaryWebEndpoint"] = nil
	inputs["primaryWebHost"] = nil
	inputs["secondaryAccessKey"] = nil
	inputs["secondaryBlobConnectionString"] = nil
	inputs["secondaryBlobEndpoint"] = nil
	inputs["secondaryBlobHost"] = nil
	inputs["secondaryConnectionString"] = nil
	inputs["secondaryDfsEndpoint"] = nil
	inputs["secondaryDfsHost"] = nil
	inputs["secondaryFileEndpoint"] = nil
	inputs["secondaryFileHost"] = nil
	inputs["secondaryLocation"] = nil
	inputs["secondaryQueueEndpoint"] = nil
	inputs["secondaryQueueHost"] = nil
	inputs["secondaryTableEndpoint"] = nil
	inputs["secondaryTableHost"] = nil
	inputs["secondaryWebEndpoint"] = nil
	inputs["secondaryWebHost"] = nil
	s, err := ctx.RegisterResource("azure:storage/account:Account", name, true, inputs, opts...)
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
		inputs["accessTier"] = state.AccessTier
		inputs["accountEncryptionSource"] = state.AccountEncryptionSource
		inputs["accountKind"] = state.AccountKind
		inputs["accountReplicationType"] = state.AccountReplicationType
		inputs["accountTier"] = state.AccountTier
		inputs["accountType"] = state.AccountType
		inputs["customDomain"] = state.CustomDomain
		inputs["enableBlobEncryption"] = state.EnableBlobEncryption
		inputs["enableFileEncryption"] = state.EnableFileEncryption
		inputs["enableHttpsTrafficOnly"] = state.EnableHttpsTrafficOnly
		inputs["identity"] = state.Identity
		inputs["isHnsEnabled"] = state.IsHnsEnabled
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["networkRules"] = state.NetworkRules
		inputs["primaryAccessKey"] = state.PrimaryAccessKey
		inputs["primaryBlobConnectionString"] = state.PrimaryBlobConnectionString
		inputs["primaryBlobEndpoint"] = state.PrimaryBlobEndpoint
		inputs["primaryBlobHost"] = state.PrimaryBlobHost
		inputs["primaryConnectionString"] = state.PrimaryConnectionString
		inputs["primaryDfsEndpoint"] = state.PrimaryDfsEndpoint
		inputs["primaryDfsHost"] = state.PrimaryDfsHost
		inputs["primaryFileEndpoint"] = state.PrimaryFileEndpoint
		inputs["primaryFileHost"] = state.PrimaryFileHost
		inputs["primaryLocation"] = state.PrimaryLocation
		inputs["primaryQueueEndpoint"] = state.PrimaryQueueEndpoint
		inputs["primaryQueueHost"] = state.PrimaryQueueHost
		inputs["primaryTableEndpoint"] = state.PrimaryTableEndpoint
		inputs["primaryTableHost"] = state.PrimaryTableHost
		inputs["primaryWebEndpoint"] = state.PrimaryWebEndpoint
		inputs["primaryWebHost"] = state.PrimaryWebHost
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["secondaryAccessKey"] = state.SecondaryAccessKey
		inputs["secondaryBlobConnectionString"] = state.SecondaryBlobConnectionString
		inputs["secondaryBlobEndpoint"] = state.SecondaryBlobEndpoint
		inputs["secondaryBlobHost"] = state.SecondaryBlobHost
		inputs["secondaryConnectionString"] = state.SecondaryConnectionString
		inputs["secondaryDfsEndpoint"] = state.SecondaryDfsEndpoint
		inputs["secondaryDfsHost"] = state.SecondaryDfsHost
		inputs["secondaryFileEndpoint"] = state.SecondaryFileEndpoint
		inputs["secondaryFileHost"] = state.SecondaryFileHost
		inputs["secondaryLocation"] = state.SecondaryLocation
		inputs["secondaryQueueEndpoint"] = state.SecondaryQueueEndpoint
		inputs["secondaryQueueHost"] = state.SecondaryQueueHost
		inputs["secondaryTableEndpoint"] = state.SecondaryTableEndpoint
		inputs["secondaryTableHost"] = state.SecondaryTableHost
		inputs["secondaryWebEndpoint"] = state.SecondaryWebEndpoint
		inputs["secondaryWebHost"] = state.SecondaryWebHost
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:storage/account:Account", name, id, inputs, opts...)
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

// Defines the access tier for `BlobStorage` and `StorageV2` accounts. Valid options are `Hot` and `Cool`, defaults to `Hot`.
func (r *Account) AccessTier() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["accessTier"])
}

// The Encryption Source for this Storage Account. Possible values are `Microsoft.Keyvault` and `Microsoft.Storage`. Defaults to `Microsoft.Storage`.
func (r *Account) AccountEncryptionSource() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["accountEncryptionSource"])
}

// Defines the Kind of account. Valid options are `Storage`,
// `StorageV2` and `BlobStorage`. Changing this forces a new resource to be created.
// Defaults to `Storage`.
func (r *Account) AccountKind() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["accountKind"])
}

// Defines the type of replication to use for this storage account. Valid options are `LRS`, `GRS`, `RAGRS` and `ZRS`.
func (r *Account) AccountReplicationType() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["accountReplicationType"])
}

// Defines the Tier to use for this storage account. Valid options are `Standard` and `Premium`. Changing this forces a new resource to be created
func (r *Account) AccountTier() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["accountTier"])
}

func (r *Account) AccountType() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["accountType"])
}

// A `custom_domain` block as documented below.
func (r *Account) CustomDomain() *kulado.Output {
	return r.s.State["customDomain"]
}

// Boolean flag which controls if Encryption Services are enabled for Blob storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
func (r *Account) EnableBlobEncryption() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["enableBlobEncryption"])
}

// Boolean flag which controls if Encryption Services are enabled for File storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
func (r *Account) EnableFileEncryption() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["enableFileEncryption"])
}

// Boolean flag which forces HTTPS if enabled, see [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
// for more information.
func (r *Account) EnableHttpsTrafficOnly() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["enableHttpsTrafficOnly"])
}

// A Managed Service Identity block as defined below.
func (r *Account) Identity() *kulado.Output {
	return r.s.State["identity"]
}

// Is Hierarchical Namespace enabled? This can be used with Azure Data Lake Storage Gen 2 ([see here for more information](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-account/)). Changing this forces a new resource to be created.
func (r *Account) IsHnsEnabled() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["isHnsEnabled"])
}

// Specifies the supported Azure location where the
// resource exists. Changing this forces a new resource to be created.
func (r *Account) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// The Custom Domain Name to use for the Storage Account, which will be validated by Azure.
func (r *Account) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// A `network_rules` block as documented below.
func (r *Account) NetworkRules() *kulado.Output {
	return r.s.State["networkRules"]
}

// The primary access key for the storage account.
func (r *Account) PrimaryAccessKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryAccessKey"])
}

// The connection string associated with the primary blob location.
func (r *Account) PrimaryBlobConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryBlobConnectionString"])
}

// The endpoint URL for blob storage in the primary location.
func (r *Account) PrimaryBlobEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryBlobEndpoint"])
}

// The hostname with port if applicable for blob storage in the primary location.
func (r *Account) PrimaryBlobHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryBlobHost"])
}

// The connection string associated with the primary location.
func (r *Account) PrimaryConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryConnectionString"])
}

// The endpoint URL for DFS storage in the primary location.
func (r *Account) PrimaryDfsEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryDfsEndpoint"])
}

// The hostname with port if applicable for DFS storage in the primary location.
func (r *Account) PrimaryDfsHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryDfsHost"])
}

// The endpoint URL for file storage in the primary location.
func (r *Account) PrimaryFileEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryFileEndpoint"])
}

// The hostname with port if applicable for file storage in the primary location.
func (r *Account) PrimaryFileHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryFileHost"])
}

// The primary location of the storage account.
func (r *Account) PrimaryLocation() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryLocation"])
}

// The endpoint URL for queue storage in the primary location.
func (r *Account) PrimaryQueueEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryQueueEndpoint"])
}

// The hostname with port if applicable for queue storage in the primary location.
func (r *Account) PrimaryQueueHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryQueueHost"])
}

// The endpoint URL for table storage in the primary location.
func (r *Account) PrimaryTableEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryTableEndpoint"])
}

// The hostname with port if applicable for table storage in the primary location.
func (r *Account) PrimaryTableHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryTableHost"])
}

// The endpoint URL for web storage in the primary location.
func (r *Account) PrimaryWebEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryWebEndpoint"])
}

// The hostname with port if applicable for web storage in the primary location.
func (r *Account) PrimaryWebHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryWebHost"])
}

// The name of the resource group in which to
// create the storage account. Changing this forces a new resource to be created.
func (r *Account) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The secondary access key for the storage account.
func (r *Account) SecondaryAccessKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryAccessKey"])
}

// The connection string associated with the secondary blob location.
func (r *Account) SecondaryBlobConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryBlobConnectionString"])
}

// The endpoint URL for blob storage in the secondary location.
func (r *Account) SecondaryBlobEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryBlobEndpoint"])
}

// The hostname with port if applicable for blob storage in the secondary location.
func (r *Account) SecondaryBlobHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryBlobHost"])
}

// The connection string associated with the secondary location.
func (r *Account) SecondaryConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryConnectionString"])
}

// The endpoint URL for DFS storage in the secondary location.
func (r *Account) SecondaryDfsEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryDfsEndpoint"])
}

// The hostname with port if applicable for DFS storage in the secondary location.
func (r *Account) SecondaryDfsHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryDfsHost"])
}

// The endpoint URL for file storage in the secondary location.
func (r *Account) SecondaryFileEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryFileEndpoint"])
}

// The hostname with port if applicable for file storage in the secondary location.
func (r *Account) SecondaryFileHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryFileHost"])
}

// The secondary location of the storage account.
func (r *Account) SecondaryLocation() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryLocation"])
}

// The endpoint URL for queue storage in the secondary location.
func (r *Account) SecondaryQueueEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryQueueEndpoint"])
}

// The hostname with port if applicable for queue storage in the secondary location.
func (r *Account) SecondaryQueueHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryQueueHost"])
}

// The endpoint URL for table storage in the secondary location.
func (r *Account) SecondaryTableEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryTableEndpoint"])
}

// The hostname with port if applicable for table storage in the secondary location.
func (r *Account) SecondaryTableHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryTableHost"])
}

// The endpoint URL for web storage in the secondary location.
func (r *Account) SecondaryWebEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryWebEndpoint"])
}

// The hostname with port if applicable for web storage in the secondary location.
func (r *Account) SecondaryWebHost() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryWebHost"])
}

// A mapping of tags to assign to the resource.
func (r *Account) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Account resources.
type AccountState struct {
	// Defines the access tier for `BlobStorage` and `StorageV2` accounts. Valid options are `Hot` and `Cool`, defaults to `Hot`.
	AccessTier interface{}
	// The Encryption Source for this Storage Account. Possible values are `Microsoft.Keyvault` and `Microsoft.Storage`. Defaults to `Microsoft.Storage`.
	AccountEncryptionSource interface{}
	// Defines the Kind of account. Valid options are `Storage`,
	// `StorageV2` and `BlobStorage`. Changing this forces a new resource to be created.
	// Defaults to `Storage`.
	AccountKind interface{}
	// Defines the type of replication to use for this storage account. Valid options are `LRS`, `GRS`, `RAGRS` and `ZRS`.
	AccountReplicationType interface{}
	// Defines the Tier to use for this storage account. Valid options are `Standard` and `Premium`. Changing this forces a new resource to be created
	AccountTier interface{}
	AccountType interface{}
	// A `custom_domain` block as documented below.
	CustomDomain interface{}
	// Boolean flag which controls if Encryption Services are enabled for Blob storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
	EnableBlobEncryption interface{}
	// Boolean flag which controls if Encryption Services are enabled for File storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
	EnableFileEncryption interface{}
	// Boolean flag which forces HTTPS if enabled, see [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
	// for more information.
	EnableHttpsTrafficOnly interface{}
	// A Managed Service Identity block as defined below.
	Identity interface{}
	// Is Hierarchical Namespace enabled? This can be used with Azure Data Lake Storage Gen 2 ([see here for more information](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-account/)). Changing this forces a new resource to be created.
	IsHnsEnabled interface{}
	// Specifies the supported Azure location where the
	// resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// The Custom Domain Name to use for the Storage Account, which will be validated by Azure.
	Name interface{}
	// A `network_rules` block as documented below.
	NetworkRules interface{}
	// The primary access key for the storage account.
	PrimaryAccessKey interface{}
	// The connection string associated with the primary blob location.
	PrimaryBlobConnectionString interface{}
	// The endpoint URL for blob storage in the primary location.
	PrimaryBlobEndpoint interface{}
	// The hostname with port if applicable for blob storage in the primary location.
	PrimaryBlobHost interface{}
	// The connection string associated with the primary location.
	PrimaryConnectionString interface{}
	// The endpoint URL for DFS storage in the primary location.
	PrimaryDfsEndpoint interface{}
	// The hostname with port if applicable for DFS storage in the primary location.
	PrimaryDfsHost interface{}
	// The endpoint URL for file storage in the primary location.
	PrimaryFileEndpoint interface{}
	// The hostname with port if applicable for file storage in the primary location.
	PrimaryFileHost interface{}
	// The primary location of the storage account.
	PrimaryLocation interface{}
	// The endpoint URL for queue storage in the primary location.
	PrimaryQueueEndpoint interface{}
	// The hostname with port if applicable for queue storage in the primary location.
	PrimaryQueueHost interface{}
	// The endpoint URL for table storage in the primary location.
	PrimaryTableEndpoint interface{}
	// The hostname with port if applicable for table storage in the primary location.
	PrimaryTableHost interface{}
	// The endpoint URL for web storage in the primary location.
	PrimaryWebEndpoint interface{}
	// The hostname with port if applicable for web storage in the primary location.
	PrimaryWebHost interface{}
	// The name of the resource group in which to
	// create the storage account. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The secondary access key for the storage account.
	SecondaryAccessKey interface{}
	// The connection string associated with the secondary blob location.
	SecondaryBlobConnectionString interface{}
	// The endpoint URL for blob storage in the secondary location.
	SecondaryBlobEndpoint interface{}
	// The hostname with port if applicable for blob storage in the secondary location.
	SecondaryBlobHost interface{}
	// The connection string associated with the secondary location.
	SecondaryConnectionString interface{}
	// The endpoint URL for DFS storage in the secondary location.
	SecondaryDfsEndpoint interface{}
	// The hostname with port if applicable for DFS storage in the secondary location.
	SecondaryDfsHost interface{}
	// The endpoint URL for file storage in the secondary location.
	SecondaryFileEndpoint interface{}
	// The hostname with port if applicable for file storage in the secondary location.
	SecondaryFileHost interface{}
	// The secondary location of the storage account.
	SecondaryLocation interface{}
	// The endpoint URL for queue storage in the secondary location.
	SecondaryQueueEndpoint interface{}
	// The hostname with port if applicable for queue storage in the secondary location.
	SecondaryQueueHost interface{}
	// The endpoint URL for table storage in the secondary location.
	SecondaryTableEndpoint interface{}
	// The hostname with port if applicable for table storage in the secondary location.
	SecondaryTableHost interface{}
	// The endpoint URL for web storage in the secondary location.
	SecondaryWebEndpoint interface{}
	// The hostname with port if applicable for web storage in the secondary location.
	SecondaryWebHost interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Account resource.
type AccountArgs struct {
	// Defines the access tier for `BlobStorage` and `StorageV2` accounts. Valid options are `Hot` and `Cool`, defaults to `Hot`.
	AccessTier interface{}
	// The Encryption Source for this Storage Account. Possible values are `Microsoft.Keyvault` and `Microsoft.Storage`. Defaults to `Microsoft.Storage`.
	AccountEncryptionSource interface{}
	// Defines the Kind of account. Valid options are `Storage`,
	// `StorageV2` and `BlobStorage`. Changing this forces a new resource to be created.
	// Defaults to `Storage`.
	AccountKind interface{}
	// Defines the type of replication to use for this storage account. Valid options are `LRS`, `GRS`, `RAGRS` and `ZRS`.
	AccountReplicationType interface{}
	// Defines the Tier to use for this storage account. Valid options are `Standard` and `Premium`. Changing this forces a new resource to be created
	AccountTier interface{}
	AccountType interface{}
	// A `custom_domain` block as documented below.
	CustomDomain interface{}
	// Boolean flag which controls if Encryption Services are enabled for Blob storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
	EnableBlobEncryption interface{}
	// Boolean flag which controls if Encryption Services are enabled for File storage, see [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/) for more information. Defaults to `true`.
	EnableFileEncryption interface{}
	// Boolean flag which forces HTTPS if enabled, see [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
	// for more information.
	EnableHttpsTrafficOnly interface{}
	// A Managed Service Identity block as defined below.
	Identity interface{}
	// Is Hierarchical Namespace enabled? This can be used with Azure Data Lake Storage Gen 2 ([see here for more information](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-account/)). Changing this forces a new resource to be created.
	IsHnsEnabled interface{}
	// Specifies the supported Azure location where the
	// resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// The Custom Domain Name to use for the Storage Account, which will be validated by Azure.
	Name interface{}
	// A `network_rules` block as documented below.
	NetworkRules interface{}
	// The name of the resource group in which to
	// create the storage account. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
