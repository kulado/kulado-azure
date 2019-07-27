# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class NatPool(kulado.CustomResource):
    backend_port: kulado.Output[float]
    """
    The port used for the internal endpoint. Possible values range between 1 and 65535, inclusive.
    """
    frontend_ip_configuration_id: kulado.Output[str]
    frontend_ip_configuration_name: kulado.Output[str]
    """
    The name of the frontend IP configuration exposing this rule.
    """
    frontend_port_end: kulado.Output[float]
    """
    The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
    """
    frontend_port_start: kulado.Output[float]
    """
    The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
    """
    loadbalancer_id: kulado.Output[str]
    """
    The ID of the Load Balancer in which to create the NAT pool.
    """
    location: kulado.Output[str]
    name: kulado.Output[str]
    """
    Specifies the name of the NAT pool.
    """
    protocol: kulado.Output[str]
    """
    The transport protocol for the external endpoint. Possible values are `Udp` or `Tcp`.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to create the resource.
    """
    def __init__(__self__, resource_name, opts=None, backend_port=None, frontend_ip_configuration_name=None, frontend_port_end=None, frontend_port_start=None, loadbalancer_id=None, location=None, name=None, protocol=None, resource_group_name=None, __name__=None, __opts__=None):
        """
        Manages a Load Balancer NAT pool.
        
        > **NOTE** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration Attached
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[float] backend_port: The port used for the internal endpoint. Possible values range between 1 and 65535, inclusive.
        :param kulado.Input[str] frontend_ip_configuration_name: The name of the frontend IP configuration exposing this rule.
        :param kulado.Input[float] frontend_port_end: The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
        :param kulado.Input[float] frontend_port_start: The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
        :param kulado.Input[str] loadbalancer_id: The ID of the Load Balancer in which to create the NAT pool.
        :param kulado.Input[str] name: Specifies the name of the NAT pool.
        :param kulado.Input[str] protocol: The transport protocol for the external endpoint. Possible values are `Udp` or `Tcp`.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to create the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/lb_nat_pool.html.markdown.
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

        if backend_port is None:
            raise TypeError("Missing required property 'backend_port'")
        __props__['backend_port'] = backend_port

        if frontend_ip_configuration_name is None:
            raise TypeError("Missing required property 'frontend_ip_configuration_name'")
        __props__['frontend_ip_configuration_name'] = frontend_ip_configuration_name

        if frontend_port_end is None:
            raise TypeError("Missing required property 'frontend_port_end'")
        __props__['frontend_port_end'] = frontend_port_end

        if frontend_port_start is None:
            raise TypeError("Missing required property 'frontend_port_start'")
        __props__['frontend_port_start'] = frontend_port_start

        if loadbalancer_id is None:
            raise TypeError("Missing required property 'loadbalancer_id'")
        __props__['loadbalancer_id'] = loadbalancer_id

        __props__['location'] = location

        __props__['name'] = name

        if protocol is None:
            raise TypeError("Missing required property 'protocol'")
        __props__['protocol'] = protocol

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['frontend_ip_configuration_id'] = None

        super(NatPool, __self__).__init__(
            'azure:lb/natPool:NatPool',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

