// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package logicapps

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about an existing Logic App Workflow.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/logic_app_workflow.html.markdown.
func LookupWorkflow(ctx *kulado.Context, args *GetWorkflowArgs) (*GetWorkflowResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:logicapps/getWorkflow:getWorkflow", inputs)
	if err != nil {
		return nil, err
	}
	return &GetWorkflowResult{
		AccessEndpoint: outputs["accessEndpoint"],
		Location: outputs["location"],
		Name: outputs["name"],
		Parameters: outputs["parameters"],
		ResourceGroupName: outputs["resourceGroupName"],
		Tags: outputs["tags"],
		WorkflowSchema: outputs["workflowSchema"],
		WorkflowVersion: outputs["workflowVersion"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getWorkflow.
type GetWorkflowArgs struct {
	// The name of the Logic App Workflow.
	Name interface{}
	// The name of the Resource Group in which the Logic App Workflow exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getWorkflow.
type GetWorkflowResult struct {
	// The Access Endpoint for the Logic App Workflow
	AccessEndpoint interface{}
	// The Azure location where the Logic App Workflow exists.
	Location interface{}
	Name interface{}
	// A map of Key-Value pairs.
	Parameters interface{}
	ResourceGroupName interface{}
	// A mapping of tags assigned to the resource.
	Tags interface{}
	// The Schema used for this Logic App Workflow.
	WorkflowSchema interface{}
	// The version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`.
	WorkflowVersion interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}