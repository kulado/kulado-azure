// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package monitoring

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a [Log Profile](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-overview-activity-logs#export-the-activity-log-with-a-log-profile). A Log Profile configures how Activity Logs are exported.
// 
// > **NOTE:** It's only possible to configure one Log Profile per Subscription. If you are trying to create more than one Log Profile, an error with `StatusCode=409` will occur.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/monitor_log_profile.html.markdown.
type LogProfile struct {
	s *kulado.ResourceState
}

// NewLogProfile registers a new resource with the given unique name, arguments, and options.
func NewLogProfile(ctx *kulado.Context,
	name string, args *LogProfileArgs, opts ...kulado.ResourceOpt) (*LogProfile, error) {
	if args == nil || args.Categories == nil {
		return nil, errors.New("missing required argument 'Categories'")
	}
	if args == nil || args.Locations == nil {
		return nil, errors.New("missing required argument 'Locations'")
	}
	if args == nil || args.RetentionPolicy == nil {
		return nil, errors.New("missing required argument 'RetentionPolicy'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["categories"] = nil
		inputs["locations"] = nil
		inputs["name"] = nil
		inputs["retentionPolicy"] = nil
		inputs["servicebusRuleId"] = nil
		inputs["storageAccountId"] = nil
	} else {
		inputs["categories"] = args.Categories
		inputs["locations"] = args.Locations
		inputs["name"] = args.Name
		inputs["retentionPolicy"] = args.RetentionPolicy
		inputs["servicebusRuleId"] = args.ServicebusRuleId
		inputs["storageAccountId"] = args.StorageAccountId
	}
	s, err := ctx.RegisterResource("azure:monitoring/logProfile:LogProfile", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &LogProfile{s: s}, nil
}

// GetLogProfile gets an existing LogProfile resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLogProfile(ctx *kulado.Context,
	name string, id kulado.ID, state *LogProfileState, opts ...kulado.ResourceOpt) (*LogProfile, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["categories"] = state.Categories
		inputs["locations"] = state.Locations
		inputs["name"] = state.Name
		inputs["retentionPolicy"] = state.RetentionPolicy
		inputs["servicebusRuleId"] = state.ServicebusRuleId
		inputs["storageAccountId"] = state.StorageAccountId
	}
	s, err := ctx.ReadResource("azure:monitoring/logProfile:LogProfile", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &LogProfile{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *LogProfile) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *LogProfile) ID() *kulado.IDOutput {
	return r.s.ID()
}

// List of categories of the logs.
func (r *LogProfile) Categories() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["categories"])
}

// List of regions for which Activity Log events are stored or streamed.
func (r *LogProfile) Locations() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["locations"])
}

// The name of the Log Profile. Changing this forces a
// new resource to be created.
func (r *LogProfile) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// A `retention_policy` block as documented below. A retention policy for how long Activity Logs are retained in the storage account.
func (r *LogProfile) RetentionPolicy() *kulado.Output {
	return r.s.State["retentionPolicy"]
}

// The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
func (r *LogProfile) ServicebusRuleId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["servicebusRuleId"])
}

// The resource ID of the storage account in which the Activity Log is stored. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
func (r *LogProfile) StorageAccountId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["storageAccountId"])
}

// Input properties used for looking up and filtering LogProfile resources.
type LogProfileState struct {
	// List of categories of the logs.
	Categories interface{}
	// List of regions for which Activity Log events are stored or streamed.
	Locations interface{}
	// The name of the Log Profile. Changing this forces a
	// new resource to be created.
	Name interface{}
	// A `retention_policy` block as documented below. A retention policy for how long Activity Logs are retained in the storage account.
	RetentionPolicy interface{}
	// The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
	ServicebusRuleId interface{}
	// The resource ID of the storage account in which the Activity Log is stored. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
	StorageAccountId interface{}
}

// The set of arguments for constructing a LogProfile resource.
type LogProfileArgs struct {
	// List of categories of the logs.
	Categories interface{}
	// List of regions for which Activity Log events are stored or streamed.
	Locations interface{}
	// The name of the Log Profile. Changing this forces a
	// new resource to be created.
	Name interface{}
	// A `retention_policy` block as documented below. A retention policy for how long Activity Logs are retained in the storage account.
	RetentionPolicy interface{}
	// The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
	ServicebusRuleId interface{}
	// The resource ID of the storage account in which the Activity Log is stored. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
	StorageAccountId interface{}
}