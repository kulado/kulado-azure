// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package sql

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Allows you to manage an Azure SQL Firewall Rule
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/sql_firewall_rule.html.markdown.
type FirewallRule struct {
	s *kulado.ResourceState
}

// NewFirewallRule registers a new resource with the given unique name, arguments, and options.
func NewFirewallRule(ctx *kulado.Context,
	name string, args *FirewallRuleArgs, opts ...kulado.ResourceOpt) (*FirewallRule, error) {
	if args == nil || args.EndIpAddress == nil {
		return nil, errors.New("missing required argument 'EndIpAddress'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServerName == nil {
		return nil, errors.New("missing required argument 'ServerName'")
	}
	if args == nil || args.StartIpAddress == nil {
		return nil, errors.New("missing required argument 'StartIpAddress'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["endIpAddress"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["serverName"] = nil
		inputs["startIpAddress"] = nil
	} else {
		inputs["endIpAddress"] = args.EndIpAddress
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["serverName"] = args.ServerName
		inputs["startIpAddress"] = args.StartIpAddress
	}
	s, err := ctx.RegisterResource("azure:sql/firewallRule:FirewallRule", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &FirewallRule{s: s}, nil
}

// GetFirewallRule gets an existing FirewallRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFirewallRule(ctx *kulado.Context,
	name string, id kulado.ID, state *FirewallRuleState, opts ...kulado.ResourceOpt) (*FirewallRule, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["endIpAddress"] = state.EndIpAddress
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["serverName"] = state.ServerName
		inputs["startIpAddress"] = state.StartIpAddress
	}
	s, err := ctx.ReadResource("azure:sql/firewallRule:FirewallRule", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &FirewallRule{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *FirewallRule) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *FirewallRule) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The ending IP address to allow through the firewall for this rule.
func (r *FirewallRule) EndIpAddress() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["endIpAddress"])
}

// The name of the firewall rule.
func (r *FirewallRule) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to
// create the sql server.
func (r *FirewallRule) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The name of the SQL Server on which to create the Firewall Rule.
func (r *FirewallRule) ServerName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["serverName"])
}

// The starting IP address to allow through the firewall for this rule.
func (r *FirewallRule) StartIpAddress() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["startIpAddress"])
}

// Input properties used for looking up and filtering FirewallRule resources.
type FirewallRuleState struct {
	// The ending IP address to allow through the firewall for this rule.
	EndIpAddress interface{}
	// The name of the firewall rule.
	Name interface{}
	// The name of the resource group in which to
	// create the sql server.
	ResourceGroupName interface{}
	// The name of the SQL Server on which to create the Firewall Rule.
	ServerName interface{}
	// The starting IP address to allow through the firewall for this rule.
	StartIpAddress interface{}
}

// The set of arguments for constructing a FirewallRule resource.
type FirewallRuleArgs struct {
	// The ending IP address to allow through the firewall for this rule.
	EndIpAddress interface{}
	// The name of the firewall rule.
	Name interface{}
	// The name of the resource group in which to
	// create the sql server.
	ResourceGroupName interface{}
	// The name of the SQL Server on which to create the Firewall Rule.
	ServerName interface{}
	// The starting IP address to allow through the firewall for this rule.
	StartIpAddress interface{}
}
