# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class DscNodeConfiguration(kulado.CustomResource):
    automation_account_name: kulado.Output[str]
    """
    The name of the automation account in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
    """
    configuration_name: kulado.Output[str]
    content_embedded: kulado.Output[str]
    """
    The PowerShell DSC Node Configuration (mof content).
    """
    name: kulado.Output[str]
    """
    Specifies the name of the DSC Node Configuration. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, automation_account_name=None, content_embedded=None, name=None, resource_group_name=None, __name__=None, __opts__=None):
        """
        Manages a Automation DSC Node Configuration.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] automation_account_name: The name of the automation account in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
        :param kulado.Input[str] content_embedded: The PowerShell DSC Node Configuration (mof content).
        :param kulado.Input[str] name: Specifies the name of the DSC Node Configuration. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which the DSC Node Configuration is created. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_dsc_nodeconfiguration.html.markdown.
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

        if automation_account_name is None:
            raise TypeError("Missing required property 'automation_account_name'")
        __props__['automation_account_name'] = automation_account_name

        if content_embedded is None:
            raise TypeError("Missing required property 'content_embedded'")
        __props__['content_embedded'] = content_embedded

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['configuration_name'] = None

        super(DscNodeConfiguration, __self__).__init__(
            'azure:automation/dscNodeConfiguration:DscNodeConfiguration',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

