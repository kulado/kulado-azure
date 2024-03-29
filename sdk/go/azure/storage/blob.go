// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manage an Azure Storage Blob.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/storage_blob.html.markdown.
type Blob struct {
	s *kulado.ResourceState
}

// NewBlob registers a new resource with the given unique name, arguments, and options.
func NewBlob(ctx *kulado.Context,
	name string, args *BlobArgs, opts ...kulado.ResourceOpt) (*Blob, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.StorageAccountName == nil {
		return nil, errors.New("missing required argument 'StorageAccountName'")
	}
	if args == nil || args.StorageContainerName == nil {
		return nil, errors.New("missing required argument 'StorageContainerName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["attempts"] = nil
		inputs["contentType"] = nil
		inputs["metadata"] = nil
		inputs["name"] = nil
		inputs["parallelism"] = nil
		inputs["resourceGroupName"] = nil
		inputs["size"] = nil
		inputs["source"] = nil
		inputs["sourceUri"] = nil
		inputs["storageAccountName"] = nil
		inputs["storageContainerName"] = nil
		inputs["type"] = nil
	} else {
		inputs["attempts"] = args.Attempts
		inputs["contentType"] = args.ContentType
		inputs["metadata"] = args.Metadata
		inputs["name"] = args.Name
		inputs["parallelism"] = args.Parallelism
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["size"] = args.Size
		inputs["source"] = args.Source
		inputs["sourceUri"] = args.SourceUri
		inputs["storageAccountName"] = args.StorageAccountName
		inputs["storageContainerName"] = args.StorageContainerName
		inputs["type"] = args.Type
	}
	inputs["url"] = nil
	s, err := ctx.RegisterResource("azure:storage/blob:Blob", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Blob{s: s}, nil
}

// GetBlob gets an existing Blob resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetBlob(ctx *kulado.Context,
	name string, id kulado.ID, state *BlobState, opts ...kulado.ResourceOpt) (*Blob, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["attempts"] = state.Attempts
		inputs["contentType"] = state.ContentType
		inputs["metadata"] = state.Metadata
		inputs["name"] = state.Name
		inputs["parallelism"] = state.Parallelism
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["size"] = state.Size
		inputs["source"] = state.Source
		inputs["sourceUri"] = state.SourceUri
		inputs["storageAccountName"] = state.StorageAccountName
		inputs["storageContainerName"] = state.StorageContainerName
		inputs["type"] = state.Type
		inputs["url"] = state.Url
	}
	s, err := ctx.ReadResource("azure:storage/blob:Blob", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Blob{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Blob) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Blob) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The number of attempts to make per page or block when uploading. Defaults to `1`.
func (r *Blob) Attempts() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["attempts"])
}

// The content type of the storage blob. Cannot be defined if `source_uri` is defined. Defaults to `application/octet-stream`.
func (r *Blob) ContentType() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["contentType"])
}

// A map of custom blob metadata.
func (r *Blob) Metadata() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["metadata"])
}

// The name of the storage blob. Must be unique within the storage container the blob is located.
func (r *Blob) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
func (r *Blob) Parallelism() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["parallelism"])
}

// The name of the resource group in which to
// create the storage container. Changing this forces a new resource to be created.
func (r *Blob) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
func (r *Blob) Size() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["size"])
}

// An absolute path to a file on the local system. Cannot be defined if `source_uri` is defined.
func (r *Blob) Source() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["source"])
}

// The URI of an existing blob, or a file in the Azure File service, to use as the source contents
// for the blob to be created. Changing this forces a new resource to be created. Cannot be defined if `source` is defined.
func (r *Blob) SourceUri() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["sourceUri"])
}

// Specifies the storage account in which to create the storage container.
// Changing this forces a new resource to be created.
func (r *Blob) StorageAccountName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["storageAccountName"])
}

// The name of the storage container in which this blob should be created.
func (r *Blob) StorageContainerName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["storageContainerName"])
}

// The type of the storage blob to be created. One of either `block` or `page`. When not copying from an existing blob,
// this becomes required.
func (r *Blob) Type() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["type"])
}

// The URL of the blob
func (r *Blob) Url() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["url"])
}

// Input properties used for looking up and filtering Blob resources.
type BlobState struct {
	// The number of attempts to make per page or block when uploading. Defaults to `1`.
	Attempts interface{}
	// The content type of the storage blob. Cannot be defined if `source_uri` is defined. Defaults to `application/octet-stream`.
	ContentType interface{}
	// A map of custom blob metadata.
	Metadata interface{}
	// The name of the storage blob. Must be unique within the storage container the blob is located.
	Name interface{}
	// The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
	Parallelism interface{}
	// The name of the resource group in which to
	// create the storage container. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
	Size interface{}
	// An absolute path to a file on the local system. Cannot be defined if `source_uri` is defined.
	Source interface{}
	// The URI of an existing blob, or a file in the Azure File service, to use as the source contents
	// for the blob to be created. Changing this forces a new resource to be created. Cannot be defined if `source` is defined.
	SourceUri interface{}
	// Specifies the storage account in which to create the storage container.
	// Changing this forces a new resource to be created.
	StorageAccountName interface{}
	// The name of the storage container in which this blob should be created.
	StorageContainerName interface{}
	// The type of the storage blob to be created. One of either `block` or `page`. When not copying from an existing blob,
	// this becomes required.
	Type interface{}
	// The URL of the blob
	Url interface{}
}

// The set of arguments for constructing a Blob resource.
type BlobArgs struct {
	// The number of attempts to make per page or block when uploading. Defaults to `1`.
	Attempts interface{}
	// The content type of the storage blob. Cannot be defined if `source_uri` is defined. Defaults to `application/octet-stream`.
	ContentType interface{}
	// A map of custom blob metadata.
	Metadata interface{}
	// The name of the storage blob. Must be unique within the storage container the blob is located.
	Name interface{}
	// The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
	Parallelism interface{}
	// The name of the resource group in which to
	// create the storage container. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
	Size interface{}
	// An absolute path to a file on the local system. Cannot be defined if `source_uri` is defined.
	Source interface{}
	// The URI of an existing blob, or a file in the Azure File service, to use as the source contents
	// for the blob to be created. Changing this forces a new resource to be created. Cannot be defined if `source` is defined.
	SourceUri interface{}
	// Specifies the storage account in which to create the storage container.
	// Changing this forces a new resource to be created.
	StorageAccountName interface{}
	// The name of the storage container in which this blob should be created.
	StorageContainerName interface{}
	// The type of the storage blob to be created. One of either `block` or `page`. When not copying from an existing blob,
	// this becomes required.
	Type interface{}
}
