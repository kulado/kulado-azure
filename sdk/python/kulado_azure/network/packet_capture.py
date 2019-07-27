# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class PacketCapture(kulado.CustomResource):
    filters: kulado.Output[list]
    """
    One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
    """
    maximum_bytes_per_packet: kulado.Output[float]
    """
    The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
    """
    maximum_bytes_per_session: kulado.Output[float]
    """
    Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
    """
    maximum_capture_duration: kulado.Output[float]
    """
    The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    The name to use for this Packet Capture. Changing this forces a new resource to be created.
    """
    network_watcher_name: kulado.Output[str]
    """
    The name of the Network Watcher. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
    """
    storage_location: kulado.Output[dict]
    """
    A `storage_location` block as defined below. Changing this forces a new resource to be created.
    """
    target_resource_id: kulado.Output[str]
    """
    The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, filters=None, maximum_bytes_per_packet=None, maximum_bytes_per_session=None, maximum_capture_duration=None, name=None, network_watcher_name=None, resource_group_name=None, storage_location=None, target_resource_id=None, __name__=None, __opts__=None):
        """
        Configures Packet Capturing against a Virtual Machine using a Network Watcher.
        
        > **NOTE:** This resource has been deprecated in favour of the `azurerm_network_connection_monitor` resource and will be removed in the next major version of the AzureRM Provider. The new resource shares the same fields as this one, and information on migrating across can be found in this guide.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[list] filters: One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
        :param kulado.Input[float] maximum_bytes_per_packet: The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
        :param kulado.Input[float] maximum_bytes_per_session: Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
        :param kulado.Input[float] maximum_capture_duration: The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
        :param kulado.Input[str] name: The name to use for this Packet Capture. Changing this forces a new resource to be created.
        :param kulado.Input[str] network_watcher_name: The name of the Network Watcher. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
        :param kulado.Input[dict] storage_location: A `storage_location` block as defined below. Changing this forces a new resource to be created.
        :param kulado.Input[str] target_resource_id: The ID of the Resource to capture packets from. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/packet_capture.html.markdown.
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

        __props__['filters'] = filters

        __props__['maximum_bytes_per_packet'] = maximum_bytes_per_packet

        __props__['maximum_bytes_per_session'] = maximum_bytes_per_session

        __props__['maximum_capture_duration'] = maximum_capture_duration

        __props__['name'] = name

        if network_watcher_name is None:
            raise TypeError("Missing required property 'network_watcher_name'")
        __props__['network_watcher_name'] = network_watcher_name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if storage_location is None:
            raise TypeError("Missing required property 'storage_location'")
        __props__['storage_location'] = storage_location

        if target_resource_id is None:
            raise TypeError("Missing required property 'target_resource_id'")
        __props__['target_resource_id'] = target_resource_id

        super(PacketCapture, __self__).__init__(
            'azure:network/packetCapture:PacketCapture',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
