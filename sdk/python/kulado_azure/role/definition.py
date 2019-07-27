# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Definition(kulado.CustomResource):
    assignable_scopes: kulado.Output[list]
    """
    One or more assignable scopes for this Role Definition, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`.
    """
    description: kulado.Output[str]
    """
    A description of the Role Definition.
    """
    name: kulado.Output[str]
    """
    The name of the Role Definition. Changing this forces a new resource to be created.
    """
    permissions: kulado.Output[list]
    """
    A `permissions` block as defined below.
    """
    role_definition_id: kulado.Output[str]
    """
    A unique UUID/GUID which identifies this role - one will be generated if not specified. Changing this forces a new resource to be created.
    """
    scope: kulado.Output[str]
    """
    The scope at which the Role Definition applies too, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, assignable_scopes=None, description=None, name=None, permissions=None, role_definition_id=None, scope=None, __name__=None, __opts__=None):
        """
        Manages a custom Role Definition, used to assign Roles to Users/Principals. See ['Understand role definitions'](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-definitions) in the Azure documentation for more details.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[list] assignable_scopes: One or more assignable scopes for this Role Definition, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`.
        :param kulado.Input[str] description: A description of the Role Definition.
        :param kulado.Input[str] name: The name of the Role Definition. Changing this forces a new resource to be created.
        :param kulado.Input[list] permissions: A `permissions` block as defined below.
        :param kulado.Input[str] role_definition_id: A unique UUID/GUID which identifies this role - one will be generated if not specified. Changing this forces a new resource to be created.
        :param kulado.Input[str] scope: The scope at which the Role Definition applies too, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/role_definition.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, kulado.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if assignable_scopes is None:
            raise TypeError("Missing required property 'assignable_scopes'")
        __props__['assignable_scopes'] = assignable_scopes

        __props__['description'] = description

        __props__['name'] = name

        if permissions is None:
            raise TypeError("Missing required property 'permissions'")
        __props__['permissions'] = permissions

        __props__['role_definition_id'] = role_definition_id

        if scope is None:
            raise TypeError("Missing required property 'scope'")
        __props__['scope'] = scope

        super(Definition, __self__).__init__(
            'azure:role/definition:Definition',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

