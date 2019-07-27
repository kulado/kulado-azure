// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package eventhub

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a ServiceBus Namespace authorization Rule within a ServiceBus.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/servicebus_namespace_authorization_rule.html.markdown.
type NamespaceAuthorizationRule struct {
	s *kulado.ResourceState
}

// NewNamespaceAuthorizationRule registers a new resource with the given unique name, arguments, and options.
func NewNamespaceAuthorizationRule(ctx *kulado.Context,
	name string, args *NamespaceAuthorizationRuleArgs, opts ...kulado.ResourceOpt) (*NamespaceAuthorizationRule, error) {
	if args == nil || args.NamespaceName == nil {
		return nil, errors.New("missing required argument 'NamespaceName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["listen"] = nil
		inputs["manage"] = nil
		inputs["name"] = nil
		inputs["namespaceName"] = nil
		inputs["resourceGroupName"] = nil
		inputs["send"] = nil
	} else {
		inputs["listen"] = args.Listen
		inputs["manage"] = args.Manage
		inputs["name"] = args.Name
		inputs["namespaceName"] = args.NamespaceName
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["send"] = args.Send
	}
	inputs["primaryConnectionString"] = nil
	inputs["primaryKey"] = nil
	inputs["secondaryConnectionString"] = nil
	inputs["secondaryKey"] = nil
	s, err := ctx.RegisterResource("azure:eventhub/namespaceAuthorizationRule:NamespaceAuthorizationRule", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NamespaceAuthorizationRule{s: s}, nil
}

// GetNamespaceAuthorizationRule gets an existing NamespaceAuthorizationRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNamespaceAuthorizationRule(ctx *kulado.Context,
	name string, id kulado.ID, state *NamespaceAuthorizationRuleState, opts ...kulado.ResourceOpt) (*NamespaceAuthorizationRule, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["listen"] = state.Listen
		inputs["manage"] = state.Manage
		inputs["name"] = state.Name
		inputs["namespaceName"] = state.NamespaceName
		inputs["primaryConnectionString"] = state.PrimaryConnectionString
		inputs["primaryKey"] = state.PrimaryKey
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["secondaryConnectionString"] = state.SecondaryConnectionString
		inputs["secondaryKey"] = state.SecondaryKey
		inputs["send"] = state.Send
	}
	s, err := ctx.ReadResource("azure:eventhub/namespaceAuthorizationRule:NamespaceAuthorizationRule", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NamespaceAuthorizationRule{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *NamespaceAuthorizationRule) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *NamespaceAuthorizationRule) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Grants listen access to this this Authorization Rule. Defaults to `false`.
func (r *NamespaceAuthorizationRule) Listen() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["listen"])
}

// Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
func (r *NamespaceAuthorizationRule) Manage() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["manage"])
}

// Specifies the name of the ServiceBus Namespace Authorization Rule resource. Changing this forces a new resource to be created.
func (r *NamespaceAuthorizationRule) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// Specifies the name of the ServiceBus Namespace. Changing this forces a new resource to be created.
func (r *NamespaceAuthorizationRule) NamespaceName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["namespaceName"])
}

// The Primary Connection String for the ServiceBus Namespace authorization Rule.
func (r *NamespaceAuthorizationRule) PrimaryConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryConnectionString"])
}

// The Primary Key for the ServiceBus Namespace authorization Rule.
func (r *NamespaceAuthorizationRule) PrimaryKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryKey"])
}

// The name of the resource group in which the ServiceBus Namespace exists. Changing this forces a new resource to be created.
func (r *NamespaceAuthorizationRule) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The Secondary Connection String for the ServiceBus Namespace authorization Rule.
func (r *NamespaceAuthorizationRule) SecondaryConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryConnectionString"])
}

// The Secondary Key for the ServiceBus Namespace authorization Rule.
func (r *NamespaceAuthorizationRule) SecondaryKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryKey"])
}

// Grants send access to this this Authorization Rule. Defaults to `false`.
func (r *NamespaceAuthorizationRule) Send() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["send"])
}

// Input properties used for looking up and filtering NamespaceAuthorizationRule resources.
type NamespaceAuthorizationRuleState struct {
	// Grants listen access to this this Authorization Rule. Defaults to `false`.
	Listen interface{}
	// Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
	Manage interface{}
	// Specifies the name of the ServiceBus Namespace Authorization Rule resource. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the ServiceBus Namespace. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// The Primary Connection String for the ServiceBus Namespace authorization Rule.
	PrimaryConnectionString interface{}
	// The Primary Key for the ServiceBus Namespace authorization Rule.
	PrimaryKey interface{}
	// The name of the resource group in which the ServiceBus Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The Secondary Connection String for the ServiceBus Namespace authorization Rule.
	SecondaryConnectionString interface{}
	// The Secondary Key for the ServiceBus Namespace authorization Rule.
	SecondaryKey interface{}
	// Grants send access to this this Authorization Rule. Defaults to `false`.
	Send interface{}
}

// The set of arguments for constructing a NamespaceAuthorizationRule resource.
type NamespaceAuthorizationRuleArgs struct {
	// Grants listen access to this this Authorization Rule. Defaults to `false`.
	Listen interface{}
	// Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
	Manage interface{}
	// Specifies the name of the ServiceBus Namespace Authorization Rule resource. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the ServiceBus Namespace. Changing this forces a new resource to be created.
	NamespaceName interface{}
	// The name of the resource group in which the ServiceBus Namespace exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Grants send access to this this Authorization Rule. Defaults to `false`.
	Send interface{}
}