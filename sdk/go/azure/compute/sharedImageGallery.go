// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package compute

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a Shared Image Gallery.
// 
// > **NOTE** Shared Image Galleries are currently in Public Preview. You can find more information, including [how to register for the Public Preview here](https://azure.microsoft.com/en-gb/blog/announcing-the-public-preview-of-shared-image-gallery/).
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/shared_image_gallery.html.markdown.
type SharedImageGallery struct {
	s *kulado.ResourceState
}

// NewSharedImageGallery registers a new resource with the given unique name, arguments, and options.
func NewSharedImageGallery(ctx *kulado.Context,
	name string, args *SharedImageGalleryArgs, opts ...kulado.ResourceOpt) (*SharedImageGallery, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	inputs["uniqueName"] = nil
	s, err := ctx.RegisterResource("azure:compute/sharedImageGallery:SharedImageGallery", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SharedImageGallery{s: s}, nil
}

// GetSharedImageGallery gets an existing SharedImageGallery resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSharedImageGallery(ctx *kulado.Context,
	name string, id kulado.ID, state *SharedImageGalleryState, opts ...kulado.ResourceOpt) (*SharedImageGallery, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["description"] = state.Description
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
		inputs["uniqueName"] = state.UniqueName
	}
	s, err := ctx.ReadResource("azure:compute/sharedImageGallery:SharedImageGallery", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SharedImageGallery{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *SharedImageGallery) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *SharedImageGallery) ID() *kulado.IDOutput {
	return r.s.ID()
}

// A description for this Shared Image Gallery.
func (r *SharedImageGallery) Description() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["description"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *SharedImageGallery) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
func (r *SharedImageGallery) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
func (r *SharedImageGallery) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the Shared Image Gallery.
func (r *SharedImageGallery) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// The Unique Name for this Shared Image Gallery.
func (r *SharedImageGallery) UniqueName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["uniqueName"])
}

// Input properties used for looking up and filtering SharedImageGallery resources.
type SharedImageGalleryState struct {
	// A description for this Shared Image Gallery.
	Description interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the Shared Image Gallery.
	Tags interface{}
	// The Unique Name for this Shared Image Gallery.
	UniqueName interface{}
}

// The set of arguments for constructing a SharedImageGallery resource.
type SharedImageGalleryArgs struct {
	// A description for this Shared Image Gallery.
	Description interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the Shared Image Gallery.
	Tags interface{}
}
