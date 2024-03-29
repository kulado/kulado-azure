# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class NetworkConnectionMonitor(kulado.CustomResource):
    auto_start: kulado.Output[bool]
    """
    Specifies whether the connection monitor will start automatically once created. Defaults to `true`. Changing this forces a new resource to be created.
    """
    destination: kulado.Output[dict]
    """
    A `destination` block as defined below.
    """
    interval_in_seconds: kulado.Output[float]
    """
    Monitoring interval in seconds. Defaults to `60`.
    """
    location: kulado.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    The name of the Network Connection Monitor. Changing this forces a new resource to be created.
    """
    network_watcher_name: kulado.Output[str]
    """
    The name of the Network Watcher. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to create the Connection Monitor. Changing this forces a new resource to be created.
    """
    source: kulado.Output[dict]
    """
    A `source` block as defined below.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, auto_start=None, destination=None, interval_in_seconds=None, location=None, name=None, network_watcher_name=None, resource_group_name=None, source=None, tags=None, __name__=None, __opts__=None):
        """
        Configures a Network Connection Monitor to monitor communication between a Virtual Machine and an endpoint using a Network Watcher.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[bool] auto_start: Specifies whether the connection monitor will start automatically once created. Defaults to `true`. Changing this forces a new resource to be created.
        :param kulado.Input[dict] destination: A `destination` block as defined below.
        :param kulado.Input[float] interval_in_seconds: Monitoring interval in seconds. Defaults to `60`.
        :param kulado.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: The name of the Network Connection Monitor. Changing this forces a new resource to be created.
        :param kulado.Input[str] network_watcher_name: The name of the Network Watcher. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to create the Connection Monitor. Changing this forces a new resource to be created.
        :param kulado.Input[dict] source: A `source` block as defined below.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_connection_monitor.html.markdown.
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

        __props__['auto_start'] = auto_start

        if destination is None:
            raise TypeError("Missing required property 'destination'")
        __props__['destination'] = destination

        __props__['interval_in_seconds'] = interval_in_seconds

        __props__['location'] = location

        __props__['name'] = name

        if network_watcher_name is None:
            raise TypeError("Missing required property 'network_watcher_name'")
        __props__['network_watcher_name'] = network_watcher_name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if source is None:
            raise TypeError("Missing required property 'source'")
        __props__['source'] = source

        __props__['tags'] = tags

        super(NetworkConnectionMonitor, __self__).__init__(
            'azure:network/networkConnectionMonitor:NetworkConnectionMonitor',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

