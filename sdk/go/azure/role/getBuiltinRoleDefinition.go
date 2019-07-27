// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package role

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about a built-in Role Definition. To access information about a custom Role Definition, please see the `azurerm_role_definition` data source instead.
// 
// > **NOTE:** The this datasource has been deprecated in favour of `azurerm_role_definition` that now can look up role definitions by name. As such this data source will be removed in version 2.0 of the AzureRM Provider.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/builtin_role_definition.html.markdown.
func LookupBuiltinRoleDefinition(ctx *kulado.Context, args *GetBuiltinRoleDefinitionArgs) (*GetBuiltinRoleDefinitionResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("azure:role/getBuiltinRoleDefinition:getBuiltinRoleDefinition", inputs)
	if err != nil {
		return nil, err
	}
	return &GetBuiltinRoleDefinitionResult{
		AssignableScopes: outputs["assignableScopes"],
		Description: outputs["description"],
		Name: outputs["name"],
		Permissions: outputs["permissions"],
		Type: outputs["type"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getBuiltinRoleDefinition.
type GetBuiltinRoleDefinitionArgs struct {
	// Specifies the name of the built-in Role Definition. Possible values are: `Contributor`, `Owner`, `Reader` and `VirtualMachineContributor`.
	Name interface{}
}

// A collection of values returned by getBuiltinRoleDefinition.
type GetBuiltinRoleDefinitionResult struct {
	// One or more assignable scopes for this Role Definition, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`.
	AssignableScopes interface{}
	// the Description of the built-in Role.
	Description interface{}
	Name interface{}
	// a `permissions` block as documented below.
	Permissions interface{}
	// the Type of the Role.
	Type interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
