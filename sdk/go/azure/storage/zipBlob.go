// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

type ZipBlob struct {
	s *kulado.ResourceState
}

// NewZipBlob registers a new resource with the given unique name, arguments, and options.
func NewZipBlob(ctx *kulado.Context,
	name string, args *ZipBlobArgs, opts ...kulado.ResourceOpt) (*ZipBlob, error) {
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
		inputs["content"] = nil
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
		inputs["content"] = args.Content
		inputs["sourceUri"] = args.SourceUri
		inputs["storageAccountName"] = args.StorageAccountName
		inputs["storageContainerName"] = args.StorageContainerName
		inputs["type"] = args.Type
	}
	inputs["url"] = nil
	s, err := ctx.RegisterResource("azure:storage/zipBlob:ZipBlob", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ZipBlob{s: s}, nil
}

// GetZipBlob gets an existing ZipBlob resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetZipBlob(ctx *kulado.Context,
	name string, id kulado.ID, state *ZipBlobState, opts ...kulado.ResourceOpt) (*ZipBlob, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["attempts"] = state.Attempts
		inputs["contentType"] = state.ContentType
		inputs["metadata"] = state.Metadata
		inputs["name"] = state.Name
		inputs["parallelism"] = state.Parallelism
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["size"] = state.Size
		inputs["content"] = state.Content
		inputs["sourceUri"] = state.SourceUri
		inputs["storageAccountName"] = state.StorageAccountName
		inputs["storageContainerName"] = state.StorageContainerName
		inputs["type"] = state.Type
		inputs["url"] = state.Url
	}
	s, err := ctx.ReadResource("azure:storage/zipBlob:ZipBlob", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ZipBlob{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *ZipBlob) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ZipBlob) ID() *kulado.IDOutput {
	return r.s.ID()
}

func (r *ZipBlob) Attempts() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["attempts"])
}

func (r *ZipBlob) ContentType() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["contentType"])
}

func (r *ZipBlob) Metadata() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["metadata"])
}

func (r *ZipBlob) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

func (r *ZipBlob) Parallelism() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["parallelism"])
}

func (r *ZipBlob) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

func (r *ZipBlob) Size() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["size"])
}

func (r *ZipBlob) Content() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["content"])
}

func (r *ZipBlob) SourceUri() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["sourceUri"])
}

func (r *ZipBlob) StorageAccountName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["storageAccountName"])
}

func (r *ZipBlob) StorageContainerName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["storageContainerName"])
}

func (r *ZipBlob) Type() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["type"])
}

func (r *ZipBlob) Url() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["url"])
}

// Input properties used for looking up and filtering ZipBlob resources.
type ZipBlobState struct {
	Attempts interface{}
	ContentType interface{}
	Metadata interface{}
	Name interface{}
	Parallelism interface{}
	ResourceGroupName interface{}
	Size interface{}
	Content interface{}
	SourceUri interface{}
	StorageAccountName interface{}
	StorageContainerName interface{}
	Type interface{}
	Url interface{}
}

// The set of arguments for constructing a ZipBlob resource.
type ZipBlobArgs struct {
	Attempts interface{}
	ContentType interface{}
	Metadata interface{}
	Name interface{}
	Parallelism interface{}
	ResourceGroupName interface{}
	Size interface{}
	Content interface{}
	SourceUri interface{}
	StorageAccountName interface{}
	StorageContainerName interface{}
	Type interface{}
}
