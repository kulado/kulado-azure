# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Profile(kulado.CustomResource):
    dns_configs: kulado.Output[list]
    """
    This block specifies the DNS configuration of the
    Profile, it supports the fields documented below.
    """
    fqdn: kulado.Output[str]
    """
    The FQDN of the created Profile.
    """
    monitor_configs: kulado.Output[list]
    """
    This block specifies the Endpoint monitoring
    configuration for the Profile, it supports the fields documented below.
    """
    name: kulado.Output[str]
    """
    The name of the virtual network. Changing this forces a
    new resource to be created.
    """
    profile_status: kulado.Output[str]
    """
    The status of the profile, can be set to either
    `Enabled` or `Disabled`. Defaults to `Enabled`.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to
    create the virtual network.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    traffic_routing_method: kulado.Output[str]
    """
    Specifies the algorithm used to route traffic, possible values are:
    - `Geographic` - Traffic is routed based on Geographic regions specified in the Endpoint.
    - `MultiValue`- All healthy Endpoints are returned.  MultiValue routing method works only if all the endpoints of type ‘External’ and are specified as IPv4 or IPv6 addresses.
    - `Performance` - Traffic is routed via the User's closest Endpoint
    - `Priority` - Traffic is routed to the Endpoint with the lowest `priority` value.
    - `Subnet` - Traffic is routed based on a mapping of sets of end-user IP address ranges to a specific Endpoint within a Traffic Manager profile.
    - `Weighted` - Traffic is spread across Endpoints proportional to their `weight` value.
    """
    def __init__(__self__, resource_name, opts=None, dns_configs=None, monitor_configs=None, name=None, profile_status=None, resource_group_name=None, tags=None, traffic_routing_method=None, __name__=None, __opts__=None):
        """
        Manages a Traffic Manager Profile to which multiple endpoints can be attached.
        
        ## Notes
        
        The Traffic Manager is created with the location `global`.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[list] dns_configs: This block specifies the DNS configuration of the
               Profile, it supports the fields documented below.
        :param kulado.Input[list] monitor_configs: This block specifies the Endpoint monitoring
               configuration for the Profile, it supports the fields documented below.
        :param kulado.Input[str] name: The name of the virtual network. Changing this forces a
               new resource to be created.
        :param kulado.Input[str] profile_status: The status of the profile, can be set to either
               `Enabled` or `Disabled`. Defaults to `Enabled`.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to
               create the virtual network.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.
        :param kulado.Input[str] traffic_routing_method: Specifies the algorithm used to route traffic, possible values are:
               - `Geographic` - Traffic is routed based on Geographic regions specified in the Endpoint.
               - `MultiValue`- All healthy Endpoints are returned.  MultiValue routing method works only if all the endpoints of type ‘External’ and are specified as IPv4 or IPv6 addresses.
               - `Performance` - Traffic is routed via the User's closest Endpoint
               - `Priority` - Traffic is routed to the Endpoint with the lowest `priority` value.
               - `Subnet` - Traffic is routed based on a mapping of sets of end-user IP address ranges to a specific Endpoint within a Traffic Manager profile.
               - `Weighted` - Traffic is spread across Endpoints proportional to their `weight` value.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/traffic_manager_profile.html.markdown.
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

        if dns_configs is None:
            raise TypeError("Missing required property 'dns_configs'")
        __props__['dns_configs'] = dns_configs

        if monitor_configs is None:
            raise TypeError("Missing required property 'monitor_configs'")
        __props__['monitor_configs'] = monitor_configs

        __props__['name'] = name

        __props__['profile_status'] = profile_status

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['tags'] = tags

        if traffic_routing_method is None:
            raise TypeError("Missing required property 'traffic_routing_method'")
        __props__['traffic_routing_method'] = traffic_routing_method

        __props__['fqdn'] = None

        super(Profile, __self__).__init__(
            'azure:trafficmanager/profile:Profile',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

