# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Workspace(kulado.CustomResource):
    location: kulado.Output[str]
    """
    Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
    """
    managed_resource_group_id: kulado.Output[str]
    """
    The ID of the Managed Resource Group created by the Databricks Workspace.
    """
    managed_resource_group_name: kulado.Output[str]
    """
    The name of the resource group where Azure should place the managed Databricks resources. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Databricks Workspace resource. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the Resource Group in which the Databricks Workspace should exist. Changing this forces a new resource to be created.
    """
    sku: kulado.Output[str]
    """
    The `sku` to use for the Databricks Workspace. Possible values are `standard` or `premium`. Changing this forces a new resource to be created.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, location=None, managed_resource_group_name=None, name=None, resource_group_name=None, sku=None, tags=None, __name__=None, __opts__=None):
        """
        Manages a Databricks Workspace
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] location: Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
        :param kulado.Input[str] managed_resource_group_name: The name of the resource group where Azure should place the managed Databricks resources. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the name of the Databricks Workspace resource. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the Resource Group in which the Databricks Workspace should exist. Changing this forces a new resource to be created.
        :param kulado.Input[str] sku: The `sku` to use for the Databricks Workspace. Possible values are `standard` or `premium`. Changing this forces a new resource to be created.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/databricks_workspace.html.markdown.
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

        __props__['location'] = location

        __props__['managed_resource_group_name'] = managed_resource_group_name

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if sku is None:
            raise TypeError("Missing required property 'sku'")
        __props__['sku'] = sku

        __props__['tags'] = tags

        __props__['managed_resource_group_id'] = None

        super(Workspace, __self__).__init__(
            'azure:databricks/workspace:Workspace',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

