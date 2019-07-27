// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package automation

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a date/time variable in Azure Automation
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_variable_datetime.html.markdown.
type DateTimeVariable struct {
	s *kulado.ResourceState
}

// NewDateTimeVariable registers a new resource with the given unique name, arguments, and options.
func NewDateTimeVariable(ctx *kulado.Context,
	name string, args *DateTimeVariableArgs, opts ...kulado.ResourceOpt) (*DateTimeVariable, error) {
	if args == nil || args.AutomationAccountName == nil {
		return nil, errors.New("missing required argument 'AutomationAccountName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["automationAccountName"] = nil
		inputs["description"] = nil
		inputs["encrypted"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["value"] = nil
	} else {
		inputs["automationAccountName"] = args.AutomationAccountName
		inputs["description"] = args.Description
		inputs["encrypted"] = args.Encrypted
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["value"] = args.Value
	}
	s, err := ctx.RegisterResource("azure:automation/dateTimeVariable:DateTimeVariable", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DateTimeVariable{s: s}, nil
}

// GetDateTimeVariable gets an existing DateTimeVariable resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDateTimeVariable(ctx *kulado.Context,
	name string, id kulado.ID, state *DateTimeVariableState, opts ...kulado.ResourceOpt) (*DateTimeVariable, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["automationAccountName"] = state.AutomationAccountName
		inputs["description"] = state.Description
		inputs["encrypted"] = state.Encrypted
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["value"] = state.Value
	}
	s, err := ctx.ReadResource("azure:automation/dateTimeVariable:DateTimeVariable", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DateTimeVariable{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *DateTimeVariable) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *DateTimeVariable) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
func (r *DateTimeVariable) AutomationAccountName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["automationAccountName"])
}

// The description of the Automation Variable.
func (r *DateTimeVariable) Description() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["description"])
}

// Specifies if the Automation Variable is encrypted. Defaults to `false`.
func (r *DateTimeVariable) Encrypted() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["encrypted"])
}

// The name of the Automation Variable. Changing this forces a new resource to be created.
func (r *DateTimeVariable) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
func (r *DateTimeVariable) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The value of the Automation Variable in the [RFC3339 Section 5.6 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6).
func (r *DateTimeVariable) Value() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["value"])
}

// Input properties used for looking up and filtering DateTimeVariable resources.
type DateTimeVariableState struct {
	// The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
	AutomationAccountName interface{}
	// The description of the Automation Variable.
	Description interface{}
	// Specifies if the Automation Variable is encrypted. Defaults to `false`.
	Encrypted interface{}
	// The name of the Automation Variable. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The value of the Automation Variable in the [RFC3339 Section 5.6 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6).
	Value interface{}
}

// The set of arguments for constructing a DateTimeVariable resource.
type DateTimeVariableArgs struct {
	// The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
	AutomationAccountName interface{}
	// The description of the Automation Variable.
	Description interface{}
	// Specifies if the Automation Variable is encrypted. Defaults to `false`.
	Encrypted interface{}
	// The name of the Automation Variable. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The value of the Automation Variable in the [RFC3339 Section 5.6 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6).
	Value interface{}
}
