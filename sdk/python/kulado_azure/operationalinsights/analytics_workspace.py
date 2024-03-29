# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class AnalyticsWorkspace(kulado.CustomResource):
    location: kulado.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Log Analytics Workspace. Workspace name should include 4-63 letters, digits or '-'. The '-' shouldn't be the first or the last symbol. Changing this forces a new resource to be created.
    """
    portal_url: kulado.Output[str]
    """
    The Portal URL for the Log Analytics Workspace.
    """
    primary_shared_key: kulado.Output[str]
    """
    The Primary shared key for the Log Analytics Workspace.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which the Log Analytics workspace is created. Changing this forces a new resource to be created.
    """
    retention_in_days: kulado.Output[float]
    """
    The workspace data retention in days. Possible values range between 30 and 730.
    """
    secondary_shared_key: kulado.Output[str]
    """
    The Secondary shared key for the Log Analytics Workspace.
    """
    sku: kulado.Output[str]
    """
    Specifies the Sku of the Log Analytics Workspace. Possible values are `Free`, `PerNode`, `Premium`, `Standard`, `Standalone`, `Unlimited`, and `PerGB2018` (new Sku as of `2018-04-03`).
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    workspace_id: kulado.Output[str]
    """
    The Workspace (or Customer) ID for the Log Analytics Workspace.
    """
    def __init__(__self__, resource_name, opts=None, location=None, name=None, resource_group_name=None, retention_in_days=None, sku=None, tags=None, __name__=None, __opts__=None):
        """
        Manages a Log Analytics (formally Operational Insights) Workspace.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the name of the Log Analytics Workspace. Workspace name should include 4-63 letters, digits or '-'. The '-' shouldn't be the first or the last symbol. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which the Log Analytics workspace is created. Changing this forces a new resource to be created.
        :param kulado.Input[float] retention_in_days: The workspace data retention in days. Possible values range between 30 and 730.
        :param kulado.Input[str] sku: Specifies the Sku of the Log Analytics Workspace. Possible values are `Free`, `PerNode`, `Premium`, `Standard`, `Standalone`, `Unlimited`, and `PerGB2018` (new Sku as of `2018-04-03`).
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/log_analytics_workspace.html.markdown.
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

        __props__['retention_in_days'] = retention_in_days

        if sku is None:
            raise TypeError("Missing required property 'sku'")
        __props__['sku'] = sku

        __props__['tags'] = tags

        __props__['portal_url'] = None
        __props__['primary_shared_key'] = None
        __props__['secondary_shared_key'] = None
        __props__['workspace_id'] = None

        super(AnalyticsWorkspace, __self__).__init__(
            'azure:operationalinsights/analyticsWorkspace:AnalyticsWorkspace',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

