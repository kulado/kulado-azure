// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package datafactory

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manage a Pipeline inside a Azure Data Factory.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/data_factory_pipeline.html.markdown.
type Pipeline struct {
	s *kulado.ResourceState
}

// NewPipeline registers a new resource with the given unique name, arguments, and options.
func NewPipeline(ctx *kulado.Context,
	name string, args *PipelineArgs, opts ...kulado.ResourceOpt) (*Pipeline, error) {
	if args == nil || args.DataFactoryName == nil {
		return nil, errors.New("missing required argument 'DataFactoryName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["annotations"] = nil
		inputs["dataFactoryName"] = nil
		inputs["description"] = nil
		inputs["name"] = nil
		inputs["parameters"] = nil
		inputs["resourceGroupName"] = nil
		inputs["variables"] = nil
	} else {
		inputs["annotations"] = args.Annotations
		inputs["dataFactoryName"] = args.DataFactoryName
		inputs["description"] = args.Description
		inputs["name"] = args.Name
		inputs["parameters"] = args.Parameters
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["variables"] = args.Variables
	}
	s, err := ctx.RegisterResource("azure:datafactory/pipeline:Pipeline", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Pipeline{s: s}, nil
}

// GetPipeline gets an existing Pipeline resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPipeline(ctx *kulado.Context,
	name string, id kulado.ID, state *PipelineState, opts ...kulado.ResourceOpt) (*Pipeline, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["annotations"] = state.Annotations
		inputs["dataFactoryName"] = state.DataFactoryName
		inputs["description"] = state.Description
		inputs["name"] = state.Name
		inputs["parameters"] = state.Parameters
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["variables"] = state.Variables
	}
	s, err := ctx.ReadResource("azure:datafactory/pipeline:Pipeline", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Pipeline{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Pipeline) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Pipeline) ID() *kulado.IDOutput {
	return r.s.ID()
}

// List of tags that can be used for describing the Data Factory Pipeline.
func (r *Pipeline) Annotations() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["annotations"])
}

// The Data Factory name in which to associate the Pipeline with. Changing this forces a new resource.
func (r *Pipeline) DataFactoryName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["dataFactoryName"])
}

// The description for the Data Factory Pipeline.
func (r *Pipeline) Description() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["description"])
}

// Specifies the name of the Data Factory Pipeline. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
func (r *Pipeline) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// A map of parameters to associate with the Data Factory Pipeline.
func (r *Pipeline) Parameters() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["parameters"])
}

// The name of the resource group in which to create the Data Factory Pipeline. Changing this forces a new resource
func (r *Pipeline) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A map of variables to associate with the Data Factory Pipeline.
func (r *Pipeline) Variables() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["variables"])
}

// Input properties used for looking up and filtering Pipeline resources.
type PipelineState struct {
	// List of tags that can be used for describing the Data Factory Pipeline.
	Annotations interface{}
	// The Data Factory name in which to associate the Pipeline with. Changing this forces a new resource.
	DataFactoryName interface{}
	// The description for the Data Factory Pipeline.
	Description interface{}
	// Specifies the name of the Data Factory Pipeline. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
	Name interface{}
	// A map of parameters to associate with the Data Factory Pipeline.
	Parameters interface{}
	// The name of the resource group in which to create the Data Factory Pipeline. Changing this forces a new resource
	ResourceGroupName interface{}
	// A map of variables to associate with the Data Factory Pipeline.
	Variables interface{}
}

// The set of arguments for constructing a Pipeline resource.
type PipelineArgs struct {
	// List of tags that can be used for describing the Data Factory Pipeline.
	Annotations interface{}
	// The Data Factory name in which to associate the Pipeline with. Changing this forces a new resource.
	DataFactoryName interface{}
	// The description for the Data Factory Pipeline.
	Description interface{}
	// Specifies the name of the Data Factory Pipeline. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
	Name interface{}
	// A map of parameters to associate with the Data Factory Pipeline.
	Parameters interface{}
	// The name of the resource group in which to create the Data Factory Pipeline. Changing this forces a new resource
	ResourceGroupName interface{}
	// A map of variables to associate with the Data Factory Pipeline.
	Variables interface{}
}
