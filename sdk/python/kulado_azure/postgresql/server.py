# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Server(kulado.CustomResource):
    administrator_login: kulado.Output[str]
    """
    The Administrator Login for the PostgreSQL Server. Changing this forces a new resource to be created.
    """
    administrator_login_password: kulado.Output[str]
    """
    The Password associated with the `administrator_login` for the PostgreSQL Server.
    """
    fqdn: kulado.Output[str]
    """
    The FQDN of the PostgreSQL Server.
    """
    location: kulado.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the SKU Name for this PostgreSQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. B_Gen4_1, GP_Gen5_8). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/servers/create#sku).
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to create the PostgreSQL Server. Changing this forces a new resource to be created.
    """
    sku: kulado.Output[dict]
    """
    A `sku` block as defined below.
    """
    ssl_enforcement: kulado.Output[str]
    """
    Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
    """
    storage_profile: kulado.Output[dict]
    """
    A `storage_profile` block as defined below.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    version: kulado.Output[str]
    """
    Specifies the version of PostgreSQL to use. Valid values are `9.5`, `9.6`, `10`, `10.0`, and `10.2`. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, administrator_login=None, administrator_login_password=None, location=None, name=None, resource_group_name=None, sku=None, ssl_enforcement=None, storage_profile=None, tags=None, version=None, __name__=None, __opts__=None):
        """
        Manage a PostgreSQL Server.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] administrator_login: The Administrator Login for the PostgreSQL Server. Changing this forces a new resource to be created.
        :param kulado.Input[str] administrator_login_password: The Password associated with the `administrator_login` for the PostgreSQL Server.
        :param kulado.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the SKU Name for this PostgreSQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. B_Gen4_1, GP_Gen5_8). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/servers/create#sku).
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to create the PostgreSQL Server. Changing this forces a new resource to be created.
        :param kulado.Input[dict] sku: A `sku` block as defined below.
        :param kulado.Input[str] ssl_enforcement: Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
        :param kulado.Input[dict] storage_profile: A `storage_profile` block as defined below.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.
        :param kulado.Input[str] version: Specifies the version of PostgreSQL to use. Valid values are `9.5`, `9.6`, `10`, `10.0`, and `10.2`. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/postgresql_server.html.markdown.
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

        if administrator_login is None:
            raise TypeError("Missing required property 'administrator_login'")
        __props__['administrator_login'] = administrator_login

        if administrator_login_password is None:
            raise TypeError("Missing required property 'administrator_login_password'")
        __props__['administrator_login_password'] = administrator_login_password

        __props__['location'] = location

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if sku is None:
            raise TypeError("Missing required property 'sku'")
        __props__['sku'] = sku

        if ssl_enforcement is None:
            raise TypeError("Missing required property 'ssl_enforcement'")
        __props__['ssl_enforcement'] = ssl_enforcement

        if storage_profile is None:
            raise TypeError("Missing required property 'storage_profile'")
        __props__['storage_profile'] = storage_profile

        __props__['tags'] = tags

        if version is None:
            raise TypeError("Missing required property 'version'")
        __props__['version'] = version

        __props__['fqdn'] = None

        super(Server, __self__).__init__(
            'azure:postgresql/server:Server',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

