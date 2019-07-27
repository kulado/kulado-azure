# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class ActiveDirectoryAdministrator(kulado.CustomResource):
    login: kulado.Output[str]
    """
    The login name of the principal to set as the server administrator
    """
    object_id: kulado.Output[str]
    """
    The ID of the principal to set as the server administrator
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group for the SQL server. Changing this forces a new resource to be created.
    """
    server_name: kulado.Output[str]
    """
    The name of the SQL Server on which to set the administrator. Changing this forces a new resource to be created.
    """
    tenant_id: kulado.Output[str]
    """
    The Azure Tenant ID
    """
    def __init__(__self__, resource_name, opts=None, login=None, object_id=None, resource_group_name=None, server_name=None, tenant_id=None, __name__=None, __opts__=None):
        """
        Allows you to set a user or group as the AD administrator for an Azure SQL server
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] login: The login name of the principal to set as the server administrator
        :param kulado.Input[str] object_id: The ID of the principal to set as the server administrator
        :param kulado.Input[str] resource_group_name: The name of the resource group for the SQL server. Changing this forces a new resource to be created.
        :param kulado.Input[str] server_name: The name of the SQL Server on which to set the administrator. Changing this forces a new resource to be created.
        :param kulado.Input[str] tenant_id: The Azure Tenant ID

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/sql_active_directory_administrator.html.markdown.
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

        if login is None:
            raise TypeError("Missing required property 'login'")
        __props__['login'] = login

        if object_id is None:
            raise TypeError("Missing required property 'object_id'")
        __props__['object_id'] = object_id

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if server_name is None:
            raise TypeError("Missing required property 'server_name'")
        __props__['server_name'] = server_name

        if tenant_id is None:
            raise TypeError("Missing required property 'tenant_id'")
        __props__['tenant_id'] = tenant_id

        super(ActiveDirectoryAdministrator, __self__).__init__(
            'azure:sql/activeDirectoryAdministrator:ActiveDirectoryAdministrator',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
