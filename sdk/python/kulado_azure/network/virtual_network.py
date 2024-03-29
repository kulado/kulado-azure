# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class VirtualNetwork(kulado.CustomResource):
    address_spaces: kulado.Output[list]
    """
    The address space that is used the virtual
    network. You can supply more than one address space. Changing this forces
    a new resource to be created.
    """
    ddos_protection_plan: kulado.Output[dict]
    """
    A `ddos_protection_plan` block as documented below.
    """
    dns_servers: kulado.Output[list]
    """
    List of IP addresses of DNS servers
    """
    location: kulado.Output[str]
    """
    The location/region where the virtual network is
    created. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    The name of the virtual network. Changing this forces a
    new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to
    create the virtual network.
    """
    subnets: kulado.Output[list]
    """
    Can be specified multiple times to define multiple
    subnets. Each `subnet` block supports fields documented below.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, address_spaces=None, ddos_protection_plan=None, dns_servers=None, location=None, name=None, resource_group_name=None, subnets=None, tags=None, __name__=None, __opts__=None):
        """
        Create a VirtualNetwork resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[list] address_spaces: The address space that is used the virtual
               network. You can supply more than one address space. Changing this forces
               a new resource to be created.
        :param kulado.Input[dict] ddos_protection_plan: A `ddos_protection_plan` block as documented below.
        :param kulado.Input[list] dns_servers: List of IP addresses of DNS servers
        :param kulado.Input[str] location: The location/region where the virtual network is
               created. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: The name of the virtual network. Changing this forces a
               new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to
               create the virtual network.
        :param kulado.Input[list] subnets: Can be specified multiple times to define multiple
               subnets. Each `subnet` block supports fields documented below.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_network.html.markdown.
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

        if address_spaces is None:
            raise TypeError("Missing required property 'address_spaces'")
        __props__['address_spaces'] = address_spaces

        __props__['ddos_protection_plan'] = ddos_protection_plan

        __props__['dns_servers'] = dns_servers

        __props__['location'] = location

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['subnets'] = subnets

        __props__['tags'] = tags

        super(VirtualNetwork, __self__).__init__(
            'azure:network/virtualNetwork:VirtualNetwork',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

