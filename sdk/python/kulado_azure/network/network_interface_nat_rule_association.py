# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class NetworkInterfaceNatRuleAssociation(kulado.CustomResource):
    ip_configuration_name: kulado.Output[str]
    """
    The Name of the IP Configuration within the Network Interface which should be connected to the NAT Rule. Changing this forces a new resource to be created.
    """
    nat_rule_id: kulado.Output[str]
    """
    The ID of the Load Balancer NAT Rule which this Network Interface which should be connected to. Changing this forces a new resource to be created.
    """
    network_interface_id: kulado.Output[str]
    """
    The ID of the Network Interface. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, ip_configuration_name=None, nat_rule_id=None, network_interface_id=None, __name__=None, __opts__=None):
        """
        Manages the association between a Network Interface and a Load Balancer's NAT Rule.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] ip_configuration_name: The Name of the IP Configuration within the Network Interface which should be connected to the NAT Rule. Changing this forces a new resource to be created.
        :param kulado.Input[str] nat_rule_id: The ID of the Load Balancer NAT Rule which this Network Interface which should be connected to. Changing this forces a new resource to be created.
        :param kulado.Input[str] network_interface_id: The ID of the Network Interface. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_interface_nat_rule_association.html.markdown.
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

        if ip_configuration_name is None:
            raise TypeError("Missing required property 'ip_configuration_name'")
        __props__['ip_configuration_name'] = ip_configuration_name

        if nat_rule_id is None:
            raise TypeError("Missing required property 'nat_rule_id'")
        __props__['nat_rule_id'] = nat_rule_id

        if network_interface_id is None:
            raise TypeError("Missing required property 'network_interface_id'")
        __props__['network_interface_id'] = network_interface_id

        super(NetworkInterfaceNatRuleAssociation, __self__).__init__(
            'azure:network/networkInterfaceNatRuleAssociation:NetworkInterfaceNatRuleAssociation',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

