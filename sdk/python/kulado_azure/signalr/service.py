# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Service(kulado.CustomResource):
    hostname: kulado.Output[str]
    """
    The FQDN of the SignalR service.
    """
    ip_address: kulado.Output[str]
    """
    The publicly accessible IP of the SignalR service.
    """
    location: kulado.Output[str]
    """
    Specifies the supported Azure location where the SignalR service exists. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    The name of the SignalR service. Changing this forces a new resource to be created.
    """
    primary_access_key: kulado.Output[str]
    """
    The primary access key for the SignalR service.
    """
    primary_connection_string: kulado.Output[str]
    """
    The primary connection string for the SignalR service.
    """
    public_port: kulado.Output[float]
    """
    The publicly accessible port of the SignalR service which is designed for browser/client use.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to create the SignalR service. Changing this forces a new resource to be created.
    """
    secondary_access_key: kulado.Output[str]
    """
    The secondary access key for the SignalR service.
    """
    secondary_connection_string: kulado.Output[str]
    """
    The secondary connection string for the SignalR service.
    """
    server_port: kulado.Output[float]
    """
    The publicly accessible port of the SignalR service which is designed for customer server side use.
    """
    sku: kulado.Output[dict]
    """
    A `sku` block as documented below.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, location=None, name=None, resource_group_name=None, sku=None, tags=None, __name__=None, __opts__=None):
        """
        Manages an Azure SignalR service.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] location: Specifies the supported Azure location where the SignalR service exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: The name of the SignalR service. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to create the SignalR service. Changing this forces a new resource to be created.
        :param kulado.Input[dict] sku: A `sku` block as documented below.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/signalr_service.html.markdown.
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

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if sku is None:
            raise TypeError("Missing required property 'sku'")
        __props__['sku'] = sku

        __props__['tags'] = tags

        __props__['hostname'] = None
        __props__['ip_address'] = None
        __props__['primary_access_key'] = None
        __props__['primary_connection_string'] = None
        __props__['public_port'] = None
        __props__['secondary_access_key'] = None
        __props__['secondary_connection_string'] = None
        __props__['server_port'] = None

        super(Service, __self__).__init__(
            'azure:signalr/service:Service',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

