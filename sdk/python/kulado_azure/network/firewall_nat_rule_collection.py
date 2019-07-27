# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class FirewallNatRuleCollection(kulado.CustomResource):
    action: kulado.Output[str]
    """
    Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
    """
    azure_firewall_name: kulado.Output[str]
    """
    Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
    """
    priority: kulado.Output[float]
    """
    Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
    """
    resource_group_name: kulado.Output[str]
    """
    Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
    """
    rules: kulado.Output[list]
    """
    One or more `rule` blocks as defined below.
    """
    def __init__(__self__, resource_name, opts=None, action=None, azure_firewall_name=None, name=None, priority=None, resource_group_name=None, rules=None, __name__=None, __opts__=None):
        """
        Manages a NAT Rule Collection within an Azure Firewall.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] action: Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
        :param kulado.Input[str] azure_firewall_name: Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
        :param kulado.Input[float] priority: Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
        :param kulado.Input[str] resource_group_name: Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
        :param kulado.Input[list] rules: One or more `rule` blocks as defined below.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/firewall_nat_rule_collection.html.markdown.
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

        if action is None:
            raise TypeError("Missing required property 'action'")
        __props__['action'] = action

        if azure_firewall_name is None:
            raise TypeError("Missing required property 'azure_firewall_name'")
        __props__['azure_firewall_name'] = azure_firewall_name

        __props__['name'] = name

        if priority is None:
            raise TypeError("Missing required property 'priority'")
        __props__['priority'] = priority

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if rules is None:
            raise TypeError("Missing required property 'rules'")
        __props__['rules'] = rules

        super(FirewallNatRuleCollection, __self__).__init__(
            'azure:network/firewallNatRuleCollection:FirewallNatRuleCollection',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

