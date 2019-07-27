// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package monitoring

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a [metric-based alert rule](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitor-quick-resource-metric-alert-portal) in Azure Monitor.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/monitor_metric_alertrule.html.markdown.
type MetricAlertRule struct {
	s *kulado.ResourceState
}

// NewMetricAlertRule registers a new resource with the given unique name, arguments, and options.
func NewMetricAlertRule(ctx *kulado.Context,
	name string, args *MetricAlertRuleArgs, opts ...kulado.ResourceOpt) (*MetricAlertRule, error) {
	if args == nil || args.Aggregation == nil {
		return nil, errors.New("missing required argument 'Aggregation'")
	}
	if args == nil || args.MetricName == nil {
		return nil, errors.New("missing required argument 'MetricName'")
	}
	if args == nil || args.Operator == nil {
		return nil, errors.New("missing required argument 'Operator'")
	}
	if args == nil || args.Period == nil {
		return nil, errors.New("missing required argument 'Period'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ResourceId == nil {
		return nil, errors.New("missing required argument 'ResourceId'")
	}
	if args == nil || args.Threshold == nil {
		return nil, errors.New("missing required argument 'Threshold'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["aggregation"] = nil
		inputs["description"] = nil
		inputs["emailAction"] = nil
		inputs["enabled"] = nil
		inputs["location"] = nil
		inputs["metricName"] = nil
		inputs["name"] = nil
		inputs["operator"] = nil
		inputs["period"] = nil
		inputs["resourceGroupName"] = nil
		inputs["resourceId"] = nil
		inputs["tags"] = nil
		inputs["threshold"] = nil
		inputs["webhookAction"] = nil
	} else {
		inputs["aggregation"] = args.Aggregation
		inputs["description"] = args.Description
		inputs["emailAction"] = args.EmailAction
		inputs["enabled"] = args.Enabled
		inputs["location"] = args.Location
		inputs["metricName"] = args.MetricName
		inputs["name"] = args.Name
		inputs["operator"] = args.Operator
		inputs["period"] = args.Period
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["resourceId"] = args.ResourceId
		inputs["tags"] = args.Tags
		inputs["threshold"] = args.Threshold
		inputs["webhookAction"] = args.WebhookAction
	}
	s, err := ctx.RegisterResource("azure:monitoring/metricAlertRule:MetricAlertRule", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &MetricAlertRule{s: s}, nil
}

// GetMetricAlertRule gets an existing MetricAlertRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMetricAlertRule(ctx *kulado.Context,
	name string, id kulado.ID, state *MetricAlertRuleState, opts ...kulado.ResourceOpt) (*MetricAlertRule, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["aggregation"] = state.Aggregation
		inputs["description"] = state.Description
		inputs["emailAction"] = state.EmailAction
		inputs["enabled"] = state.Enabled
		inputs["location"] = state.Location
		inputs["metricName"] = state.MetricName
		inputs["name"] = state.Name
		inputs["operator"] = state.Operator
		inputs["period"] = state.Period
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["resourceId"] = state.ResourceId
		inputs["tags"] = state.Tags
		inputs["threshold"] = state.Threshold
		inputs["webhookAction"] = state.WebhookAction
	}
	s, err := ctx.ReadResource("azure:monitoring/metricAlertRule:MetricAlertRule", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &MetricAlertRule{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *MetricAlertRule) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *MetricAlertRule) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Defines how the metric data is combined over time. Possible values are `Average`, `Minimum`, `Maximum`, `Total`, and `Last`.
func (r *MetricAlertRule) Aggregation() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["aggregation"])
}

// A verbose description of the alert rule that will be included in the alert email.
func (r *MetricAlertRule) Description() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["description"])
}

// A `email_action` block as defined below.
func (r *MetricAlertRule) EmailAction() *kulado.Output {
	return r.s.State["emailAction"]
}

// If `true`, the alert rule is enabled. Defaults to `true`.
func (r *MetricAlertRule) Enabled() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["enabled"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *MetricAlertRule) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// The metric that defines what the rule monitors.
func (r *MetricAlertRule) MetricName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["metricName"])
}

// Specifies the name of the alert rule. Changing this forces a new resource to be created.
func (r *MetricAlertRule) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The operator used to compare the metric data and the threshold. Possible values are `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`.
func (r *MetricAlertRule) Operator() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["operator"])
}

// The period of time formatted in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that is used to monitor the alert activity based on the threshold. The period must be between 5 minutes and 1 day.
func (r *MetricAlertRule) Period() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["period"])
}

// The name of the resource group in which to create the alert rule. Changing this forces a new resource to be created.
func (r *MetricAlertRule) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The ID of the resource monitored by the alert rule.
func (r *MetricAlertRule) ResourceId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceId"])
}

// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
func (r *MetricAlertRule) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// The threshold value that activates the alert.
func (r *MetricAlertRule) Threshold() *kulado.Float64Output {
	return (*kulado.Float64Output)(r.s.State["threshold"])
}

// A `webhook_action` block as defined below.
func (r *MetricAlertRule) WebhookAction() *kulado.Output {
	return r.s.State["webhookAction"]
}

// Input properties used for looking up and filtering MetricAlertRule resources.
type MetricAlertRuleState struct {
	// Defines how the metric data is combined over time. Possible values are `Average`, `Minimum`, `Maximum`, `Total`, and `Last`.
	Aggregation interface{}
	// A verbose description of the alert rule that will be included in the alert email.
	Description interface{}
	// A `email_action` block as defined below.
	EmailAction interface{}
	// If `true`, the alert rule is enabled. Defaults to `true`.
	Enabled interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// The metric that defines what the rule monitors.
	MetricName interface{}
	// Specifies the name of the alert rule. Changing this forces a new resource to be created.
	Name interface{}
	// The operator used to compare the metric data and the threshold. Possible values are `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`.
	Operator interface{}
	// The period of time formatted in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that is used to monitor the alert activity based on the threshold. The period must be between 5 minutes and 1 day.
	Period interface{}
	// The name of the resource group in which to create the alert rule. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The ID of the resource monitored by the alert rule.
	ResourceId interface{}
	// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
	Tags interface{}
	// The threshold value that activates the alert.
	Threshold interface{}
	// A `webhook_action` block as defined below.
	WebhookAction interface{}
}

// The set of arguments for constructing a MetricAlertRule resource.
type MetricAlertRuleArgs struct {
	// Defines how the metric data is combined over time. Possible values are `Average`, `Minimum`, `Maximum`, `Total`, and `Last`.
	Aggregation interface{}
	// A verbose description of the alert rule that will be included in the alert email.
	Description interface{}
	// A `email_action` block as defined below.
	EmailAction interface{}
	// If `true`, the alert rule is enabled. Defaults to `true`.
	Enabled interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// The metric that defines what the rule monitors.
	MetricName interface{}
	// Specifies the name of the alert rule. Changing this forces a new resource to be created.
	Name interface{}
	// The operator used to compare the metric data and the threshold. Possible values are `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual`.
	Operator interface{}
	// The period of time formatted in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) that is used to monitor the alert activity based on the threshold. The period must be between 5 minutes and 1 day.
	Period interface{}
	// The name of the resource group in which to create the alert rule. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The ID of the resource monitored by the alert rule.
	ResourceId interface{}
	// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
	Tags interface{}
	// The threshold value that activates the alert.
	Threshold interface{}
	// A `webhook_action` block as defined below.
	WebhookAction interface{}
}
