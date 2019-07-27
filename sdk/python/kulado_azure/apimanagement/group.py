# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Group(kulado.CustomResource):
    api_management_name: kulado.Output[str]
    """
    The name of the API Management Service in which the API Management Group should exist. Changing this forces a new resource to be created.
    """
    description: kulado.Output[str]
    """
    The description of this API Management Group.
    """
    display_name: kulado.Output[str]
    """
    The display name of this API Management Group.
    """
    external_id: kulado.Output[str]
    """
    The identifier of the external Group. For example, an Azure Active Directory group `aad://<tenant>.onmicrosoft.com/groups/<group object id>`.
    """
    name: kulado.Output[str]
    """
    The name of the API Management Group. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the Resource Group in which the API Management Group should exist. Changing this forces a new resource to be created.
    """
    type: kulado.Output[str]
    """
    The type of this API Management Group. Possible values are `custom` and `external`. Default is `custom`.
    """
    def __init__(__self__, resource_name, opts=None, api_management_name=None, description=None, display_name=None, external_id=None, name=None, resource_group_name=None, type=None, __name__=None, __opts__=None):
        """
        Manages an API Management Group.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] api_management_name: The name of the API Management Service in which the API Management Group should exist. Changing this forces a new resource to be created.
        :param kulado.Input[str] description: The description of this API Management Group.
        :param kulado.Input[str] display_name: The display name of this API Management Group.
        :param kulado.Input[str] external_id: The identifier of the external Group. For example, an Azure Active Directory group `aad://<tenant>.onmicrosoft.com/groups/<group object id>`.
        :param kulado.Input[str] name: The name of the API Management Group. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the Resource Group in which the API Management Group should exist. Changing this forces a new resource to be created.
        :param kulado.Input[str] type: The type of this API Management Group. Possible values are `custom` and `external`. Default is `custom`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_group.html.markdown.
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

        if api_management_name is None:
            raise TypeError("Missing required property 'api_management_name'")
        __props__['api_management_name'] = api_management_name

        __props__['description'] = description

        if display_name is None:
            raise TypeError("Missing required property 'display_name'")
        __props__['display_name'] = display_name

        __props__['external_id'] = external_id

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['type'] = type

        super(Group, __self__).__init__(
            'azure:apimanagement/group:Group',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
