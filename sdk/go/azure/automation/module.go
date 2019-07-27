// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package automation

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a Automation Module.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_module.html.markdown.
type Module struct {
	s *kulado.ResourceState
}

// NewModule registers a new resource with the given unique name, arguments, and options.
func NewModule(ctx *kulado.Context,
	name string, args *ModuleArgs, opts ...kulado.ResourceOpt) (*Module, error) {
	if args == nil || args.AutomationAccountName == nil {
		return nil, errors.New("missing required argument 'AutomationAccountName'")
	}
	if args == nil || args.ModuleLink == nil {
		return nil, errors.New("missing required argument 'ModuleLink'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["automationAccountName"] = nil
		inputs["moduleLink"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["automationAccountName"] = args.AutomationAccountName
		inputs["moduleLink"] = args.ModuleLink
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	s, err := ctx.RegisterResource("azure:automation/module:Module", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Module{s: s}, nil
}

// GetModule gets an existing Module resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetModule(ctx *kulado.Context,
	name string, id kulado.ID, state *ModuleState, opts ...kulado.ResourceOpt) (*Module, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["automationAccountName"] = state.AutomationAccountName
		inputs["moduleLink"] = state.ModuleLink
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:automation/module:Module", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Module{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Module) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Module) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The name of the automation account in which the Module is created. Changing this forces a new resource to be created.
func (r *Module) AutomationAccountName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["automationAccountName"])
}

// The published Module link.
func (r *Module) ModuleLink() *kulado.Output {
	return r.s.State["moduleLink"]
}

// Specifies the name of the Module. Changing this forces a new resource to be created.
func (r *Module) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which the Module is created. Changing this forces a new resource to be created.
func (r *Module) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering Module resources.
type ModuleState struct {
	// The name of the automation account in which the Module is created. Changing this forces a new resource to be created.
	AutomationAccountName interface{}
	// The published Module link.
	ModuleLink interface{}
	// Specifies the name of the Module. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the Module is created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a Module resource.
type ModuleArgs struct {
	// The name of the automation account in which the Module is created. Changing this forces a new resource to be created.
	AutomationAccountName interface{}
	// The published Module link.
	ModuleLink interface{}
	// Specifies the name of the Module. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the Module is created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}
