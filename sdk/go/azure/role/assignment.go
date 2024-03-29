// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package role

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Assigns a given Principal (User or Application) to a given Role.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/role_assignment.html.markdown.
type Assignment struct {
	s *kulado.ResourceState
}

// NewAssignment registers a new resource with the given unique name, arguments, and options.
func NewAssignment(ctx *kulado.Context,
	name string, args *AssignmentArgs, opts ...kulado.ResourceOpt) (*Assignment, error) {
	if args == nil || args.PrincipalId == nil {
		return nil, errors.New("missing required argument 'PrincipalId'")
	}
	if args == nil || args.Scope == nil {
		return nil, errors.New("missing required argument 'Scope'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["principalId"] = nil
		inputs["roleDefinitionId"] = nil
		inputs["roleDefinitionName"] = nil
		inputs["scope"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["principalId"] = args.PrincipalId
		inputs["roleDefinitionId"] = args.RoleDefinitionId
		inputs["roleDefinitionName"] = args.RoleDefinitionName
		inputs["scope"] = args.Scope
	}
	s, err := ctx.RegisterResource("azure:role/assignment:Assignment", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Assignment{s: s}, nil
}

// GetAssignment gets an existing Assignment resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAssignment(ctx *kulado.Context,
	name string, id kulado.ID, state *AssignmentState, opts ...kulado.ResourceOpt) (*Assignment, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["principalId"] = state.PrincipalId
		inputs["roleDefinitionId"] = state.RoleDefinitionId
		inputs["roleDefinitionName"] = state.RoleDefinitionName
		inputs["scope"] = state.Scope
	}
	s, err := ctx.ReadResource("azure:role/assignment:Assignment", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Assignment{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Assignment) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Assignment) ID() *kulado.IDOutput {
	return r.s.ID()
}

// A unique UUID/GUID for this Role Assignment - one will be generated if not specified. Changing this forces a new resource to be created.
func (r *Assignment) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The ID of the Principal (User, Group, Service Principal, or Application) to assign the Role Definition to. Changing this forces a new resource to be created. 
func (r *Assignment) PrincipalId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["principalId"])
}

// The Scoped-ID of the Role Definition. Changing this forces a new resource to be created. Conflicts with `role_definition_name`.
func (r *Assignment) RoleDefinitionId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["roleDefinitionId"])
}

// The name of a built-in Role. Changing this forces a new resource to be created. Conflicts with `role_definition_id`.
func (r *Assignment) RoleDefinitionName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["roleDefinitionName"])
}

// The scope at which the Role Assignment applies too, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`. Changing this forces a new resource to be created.
func (r *Assignment) Scope() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["scope"])
}

// Input properties used for looking up and filtering Assignment resources.
type AssignmentState struct {
	// A unique UUID/GUID for this Role Assignment - one will be generated if not specified. Changing this forces a new resource to be created.
	Name interface{}
	// The ID of the Principal (User, Group, Service Principal, or Application) to assign the Role Definition to. Changing this forces a new resource to be created. 
	PrincipalId interface{}
	// The Scoped-ID of the Role Definition. Changing this forces a new resource to be created. Conflicts with `role_definition_name`.
	RoleDefinitionId interface{}
	// The name of a built-in Role. Changing this forces a new resource to be created. Conflicts with `role_definition_id`.
	RoleDefinitionName interface{}
	// The scope at which the Role Assignment applies too, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`. Changing this forces a new resource to be created.
	Scope interface{}
}

// The set of arguments for constructing a Assignment resource.
type AssignmentArgs struct {
	// A unique UUID/GUID for this Role Assignment - one will be generated if not specified. Changing this forces a new resource to be created.
	Name interface{}
	// The ID of the Principal (User, Group, Service Principal, or Application) to assign the Role Definition to. Changing this forces a new resource to be created. 
	PrincipalId interface{}
	// The Scoped-ID of the Role Definition. Changing this forces a new resource to be created. Conflicts with `role_definition_name`.
	RoleDefinitionId interface{}
	// The name of a built-in Role. Changing this forces a new resource to be created. Conflicts with `role_definition_id`.
	RoleDefinitionName interface{}
	// The scope at which the Role Assignment applies too, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`. Changing this forces a new resource to be created.
	Scope interface{}
}
