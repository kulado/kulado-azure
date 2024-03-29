// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package datafactory

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manage a Linked Service (connection) between Data Lake Storage Gen2 and Azure Data Factory.
// 
// > **Note:** All arguments including the `service_principal_key` will be stored in the raw state as plain-text. [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/data_factory_linked_service_data_lake_storage_gen2.html.markdown.
type LinkedServiceDataLakeStorageGen2 struct {
	s *kulado.ResourceState
}

// NewLinkedServiceDataLakeStorageGen2 registers a new resource with the given unique name, arguments, and options.
func NewLinkedServiceDataLakeStorageGen2(ctx *kulado.Context,
	name string, args *LinkedServiceDataLakeStorageGen2Args, opts ...kulado.ResourceOpt) (*LinkedServiceDataLakeStorageGen2, error) {
	if args == nil || args.DataFactoryName == nil {
		return nil, errors.New("missing required argument 'DataFactoryName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServicePrincipalId == nil {
		return nil, errors.New("missing required argument 'ServicePrincipalId'")
	}
	if args == nil || args.ServicePrincipalKey == nil {
		return nil, errors.New("missing required argument 'ServicePrincipalKey'")
	}
	if args == nil || args.Tenant == nil {
		return nil, errors.New("missing required argument 'Tenant'")
	}
	if args == nil || args.Url == nil {
		return nil, errors.New("missing required argument 'Url'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["additionalProperties"] = nil
		inputs["annotations"] = nil
		inputs["dataFactoryName"] = nil
		inputs["description"] = nil
		inputs["integrationRuntimeName"] = nil
		inputs["name"] = nil
		inputs["parameters"] = nil
		inputs["resourceGroupName"] = nil
		inputs["servicePrincipalId"] = nil
		inputs["servicePrincipalKey"] = nil
		inputs["tenant"] = nil
		inputs["url"] = nil
	} else {
		inputs["additionalProperties"] = args.AdditionalProperties
		inputs["annotations"] = args.Annotations
		inputs["dataFactoryName"] = args.DataFactoryName
		inputs["description"] = args.Description
		inputs["integrationRuntimeName"] = args.IntegrationRuntimeName
		inputs["name"] = args.Name
		inputs["parameters"] = args.Parameters
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["servicePrincipalId"] = args.ServicePrincipalId
		inputs["servicePrincipalKey"] = args.ServicePrincipalKey
		inputs["tenant"] = args.Tenant
		inputs["url"] = args.Url
	}
	s, err := ctx.RegisterResource("azure:datafactory/linkedServiceDataLakeStorageGen2:LinkedServiceDataLakeStorageGen2", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &LinkedServiceDataLakeStorageGen2{s: s}, nil
}

// GetLinkedServiceDataLakeStorageGen2 gets an existing LinkedServiceDataLakeStorageGen2 resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLinkedServiceDataLakeStorageGen2(ctx *kulado.Context,
	name string, id kulado.ID, state *LinkedServiceDataLakeStorageGen2State, opts ...kulado.ResourceOpt) (*LinkedServiceDataLakeStorageGen2, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["additionalProperties"] = state.AdditionalProperties
		inputs["annotations"] = state.Annotations
		inputs["dataFactoryName"] = state.DataFactoryName
		inputs["description"] = state.Description
		inputs["integrationRuntimeName"] = state.IntegrationRuntimeName
		inputs["name"] = state.Name
		inputs["parameters"] = state.Parameters
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["servicePrincipalId"] = state.ServicePrincipalId
		inputs["servicePrincipalKey"] = state.ServicePrincipalKey
		inputs["tenant"] = state.Tenant
		inputs["url"] = state.Url
	}
	s, err := ctx.ReadResource("azure:datafactory/linkedServiceDataLakeStorageGen2:LinkedServiceDataLakeStorageGen2", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &LinkedServiceDataLakeStorageGen2{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *LinkedServiceDataLakeStorageGen2) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *LinkedServiceDataLakeStorageGen2) ID() *kulado.IDOutput {
	return r.s.ID()
}

// A map of additional properties to associate with the Data Factory Linked Service MySQL.
func (r *LinkedServiceDataLakeStorageGen2) AdditionalProperties() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["additionalProperties"])
}

// List of tags that can be used for describing the Data Factory Linked Service MySQL.
func (r *LinkedServiceDataLakeStorageGen2) Annotations() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["annotations"])
}

// The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
func (r *LinkedServiceDataLakeStorageGen2) DataFactoryName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["dataFactoryName"])
}

// The description for the Data Factory Linked Service MySQL.
func (r *LinkedServiceDataLakeStorageGen2) Description() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["description"])
}

// The integration runtime reference to associate with the Data Factory Linked Service MySQL.
func (r *LinkedServiceDataLakeStorageGen2) IntegrationRuntimeName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["integrationRuntimeName"])
}

// Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
func (r *LinkedServiceDataLakeStorageGen2) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// A map of parameters to associate with the Data Factory Linked Service MySQL.
func (r *LinkedServiceDataLakeStorageGen2) Parameters() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["parameters"])
}

// The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
func (r *LinkedServiceDataLakeStorageGen2) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
func (r *LinkedServiceDataLakeStorageGen2) ServicePrincipalId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["servicePrincipalId"])
}

// The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
func (r *LinkedServiceDataLakeStorageGen2) ServicePrincipalKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["servicePrincipalKey"])
}

// The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
func (r *LinkedServiceDataLakeStorageGen2) Tenant() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["tenant"])
}

// The endpoint for the Azure Data Lake Storage Gen2 service.
func (r *LinkedServiceDataLakeStorageGen2) Url() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["url"])
}

// Input properties used for looking up and filtering LinkedServiceDataLakeStorageGen2 resources.
type LinkedServiceDataLakeStorageGen2State struct {
	// A map of additional properties to associate with the Data Factory Linked Service MySQL.
	AdditionalProperties interface{}
	// List of tags that can be used for describing the Data Factory Linked Service MySQL.
	Annotations interface{}
	// The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
	DataFactoryName interface{}
	// The description for the Data Factory Linked Service MySQL.
	Description interface{}
	// The integration runtime reference to associate with the Data Factory Linked Service MySQL.
	IntegrationRuntimeName interface{}
	// Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
	Name interface{}
	// A map of parameters to associate with the Data Factory Linked Service MySQL.
	Parameters interface{}
	// The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
	ResourceGroupName interface{}
	// The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalId interface{}
	// The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalKey interface{}
	// The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
	Tenant interface{}
	// The endpoint for the Azure Data Lake Storage Gen2 service.
	Url interface{}
}

// The set of arguments for constructing a LinkedServiceDataLakeStorageGen2 resource.
type LinkedServiceDataLakeStorageGen2Args struct {
	// A map of additional properties to associate with the Data Factory Linked Service MySQL.
	AdditionalProperties interface{}
	// List of tags that can be used for describing the Data Factory Linked Service MySQL.
	Annotations interface{}
	// The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
	DataFactoryName interface{}
	// The description for the Data Factory Linked Service MySQL.
	Description interface{}
	// The integration runtime reference to associate with the Data Factory Linked Service MySQL.
	IntegrationRuntimeName interface{}
	// Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
	Name interface{}
	// A map of parameters to associate with the Data Factory Linked Service MySQL.
	Parameters interface{}
	// The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
	ResourceGroupName interface{}
	// The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalId interface{}
	// The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
	ServicePrincipalKey interface{}
	// The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
	Tenant interface{}
	// The endpoint for the Azure Data Lake Storage Gen2 service.
	Url interface{}
}
