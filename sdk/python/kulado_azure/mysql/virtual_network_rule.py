# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class VirtualNetworkRule(kulado.CustomResource):
    name: kulado.Output[str]
    """
    The name of the MySQL Virtual Network Rule. Cannot be empty and must only contain alphanumeric characters and hyphens. Cannot start with a number, and cannot start or end with a hyphen. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group where the MySQL server resides. Changing this forces a new resource to be created.
    """
    server_name: kulado.Output[str]
    """
    The name of the SQL Server to which this MySQL virtual network rule will be applied to. Changing this forces a new resource to be created.
    """
    subnet_id: kulado.Output[str]
    """
    The ID of the subnet that the MySQL server will be connected to.
    """
    def __init__(__self__, resource_name, opts=None, name=None, resource_group_name=None, server_name=None, subnet_id=None, __name__=None, __opts__=None):
        """
        Manages a MySQL Virtual Network Rule.
        
        > **NOTE:** MySQL Virtual Network Rules [can only be used with SKU Tiers of `GeneralPurpose` or `MemoryOptimized`](https://docs.microsoft.com/en-us/azure/mysql/concepts-data-access-and-security-vnet)
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] name: The name of the MySQL Virtual Network Rule. Cannot be empty and must only contain alphanumeric characters and hyphens. Cannot start with a number, and cannot start or end with a hyphen. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group where the MySQL server resides. Changing this forces a new resource to be created.
        :param kulado.Input[str] server_name: The name of the SQL Server to which this MySQL virtual network rule will be applied to. Changing this forces a new resource to be created.
        :param kulado.Input[str] subnet_id: The ID of the subnet that the MySQL server will be connected to.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/mysql_virtual_network_rule.html.markdown.
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

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if server_name is None:
            raise TypeError("Missing required property 'server_name'")
        __props__['server_name'] = server_name

        if subnet_id is None:
            raise TypeError("Missing required property 'subnet_id'")
        __props__['subnet_id'] = subnet_id

        super(VirtualNetworkRule, __self__).__init__(
            'azure:mysql/virtualNetworkRule:VirtualNetworkRule',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

