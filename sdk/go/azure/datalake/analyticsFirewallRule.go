// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package datalake

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manage a Azure Data Lake Analytics Firewall Rule.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/data_lake_analytics_firewall_rule.html.markdown.
type AnalyticsFirewallRule struct {
	s *kulado.ResourceState
}

// NewAnalyticsFirewallRule registers a new resource with the given unique name, arguments, and options.
func NewAnalyticsFirewallRule(ctx *kulado.Context,
	name string, args *AnalyticsFirewallRuleArgs, opts ...kulado.ResourceOpt) (*AnalyticsFirewallRule, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.EndIpAddress == nil {
		return nil, errors.New("missing required argument 'EndIpAddress'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.StartIpAddress == nil {
		return nil, errors.New("missing required argument 'StartIpAddress'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["accountName"] = nil
		inputs["endIpAddress"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["startIpAddress"] = nil
	} else {
		inputs["accountName"] = args.AccountName
		inputs["endIpAddress"] = args.EndIpAddress
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["startIpAddress"] = args.StartIpAddress
	}
	s, err := ctx.RegisterResource("azure:datalake/analyticsFirewallRule:AnalyticsFirewallRule", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &AnalyticsFirewallRule{s: s}, nil
}

// GetAnalyticsFirewallRule gets an existing AnalyticsFirewallRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAnalyticsFirewallRule(ctx *kulado.Context,
	name string, id kulado.ID, state *AnalyticsFirewallRuleState, opts ...kulado.ResourceOpt) (*AnalyticsFirewallRule, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["accountName"] = state.AccountName
		inputs["endIpAddress"] = state.EndIpAddress
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["startIpAddress"] = state.StartIpAddress
	}
	s, err := ctx.ReadResource("azure:datalake/analyticsFirewallRule:AnalyticsFirewallRule", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &AnalyticsFirewallRule{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *AnalyticsFirewallRule) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *AnalyticsFirewallRule) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Specifies the name of the Data Lake Analytics for which the Firewall Rule should take effect.
func (r *AnalyticsFirewallRule) AccountName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["accountName"])
}

// The End IP Address for the firewall rule.
func (r *AnalyticsFirewallRule) EndIpAddress() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["endIpAddress"])
}

// Specifies the name of the Data Lake Analytics. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
func (r *AnalyticsFirewallRule) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to create the Data Lake Analytics.
func (r *AnalyticsFirewallRule) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The Start IP address for the firewall rule.
func (r *AnalyticsFirewallRule) StartIpAddress() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["startIpAddress"])
}

// Input properties used for looking up and filtering AnalyticsFirewallRule resources.
type AnalyticsFirewallRuleState struct {
	// Specifies the name of the Data Lake Analytics for which the Firewall Rule should take effect.
	AccountName interface{}
	// The End IP Address for the firewall rule.
	EndIpAddress interface{}
	// Specifies the name of the Data Lake Analytics. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
	Name interface{}
	// The name of the resource group in which to create the Data Lake Analytics.
	ResourceGroupName interface{}
	// The Start IP address for the firewall rule.
	StartIpAddress interface{}
}

// The set of arguments for constructing a AnalyticsFirewallRule resource.
type AnalyticsFirewallRuleArgs struct {
	// Specifies the name of the Data Lake Analytics for which the Firewall Rule should take effect.
	AccountName interface{}
	// The End IP Address for the firewall rule.
	EndIpAddress interface{}
	// Specifies the name of the Data Lake Analytics. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
	Name interface{}
	// The name of the resource group in which to create the Data Lake Analytics.
	ResourceGroupName interface{}
	// The Start IP address for the firewall rule.
	StartIpAddress interface{}
}
