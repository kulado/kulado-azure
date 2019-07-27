// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package logicapps

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a Custom Action within a Logic App Workflow
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/logic_app_action_custom.html.markdown.
type ActionCustom struct {
	s *kulado.ResourceState
}

// NewActionCustom registers a new resource with the given unique name, arguments, and options.
func NewActionCustom(ctx *kulado.Context,
	name string, args *ActionCustomArgs, opts ...kulado.ResourceOpt) (*ActionCustom, error) {
	if args == nil || args.Body == nil {
		return nil, errors.New("missing required argument 'Body'")
	}
	if args == nil || args.LogicAppId == nil {
		return nil, errors.New("missing required argument 'LogicAppId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["body"] = nil
		inputs["logicAppId"] = nil
		inputs["name"] = nil
	} else {
		inputs["body"] = args.Body
		inputs["logicAppId"] = args.LogicAppId
		inputs["name"] = args.Name
	}
	s, err := ctx.RegisterResource("azure:logicapps/actionCustom:ActionCustom", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ActionCustom{s: s}, nil
}

// GetActionCustom gets an existing ActionCustom resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetActionCustom(ctx *kulado.Context,
	name string, id kulado.ID, state *ActionCustomState, opts ...kulado.ResourceOpt) (*ActionCustom, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["body"] = state.Body
		inputs["logicAppId"] = state.LogicAppId
		inputs["name"] = state.Name
	}
	s, err := ctx.ReadResource("azure:logicapps/actionCustom:ActionCustom", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ActionCustom{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *ActionCustom) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ActionCustom) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Specifies the JSON Blob defining the Body of this Custom Action.
func (r *ActionCustom) Body() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["body"])
}

// Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
func (r *ActionCustom) LogicAppId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["logicAppId"])
}

// Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
func (r *ActionCustom) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// Input properties used for looking up and filtering ActionCustom resources.
type ActionCustomState struct {
	// Specifies the JSON Blob defining the Body of this Custom Action.
	Body interface{}
	// Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
	LogicAppId interface{}
	// Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
	Name interface{}
}

// The set of arguments for constructing a ActionCustom resource.
type ActionCustomArgs struct {
	// Specifies the JSON Blob defining the Body of this Custom Action.
	Body interface{}
	// Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
	LogicAppId interface{}
	// Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
	Name interface{}
}
