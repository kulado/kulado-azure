# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class EventHubAuthorizationRule(kulado.CustomResource):
    eventhub_name: kulado.Output[str]
    """
    Specifies the name of the EventHub. Changing this forces a new resource to be created.
    """
    listen: kulado.Output[bool]
    """
    Does this Authorization Rule have permissions to Listen to the Event Hub? Defaults to `false`.
    """
    location: kulado.Output[str]
    manage: kulado.Output[bool]
    """
    Does this Authorization Rule have permissions to Manage to the Event Hub? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the EventHub Authorization Rule resource. Changing this forces a new resource to be created.
    """
    namespace_name: kulado.Output[str]
    """
    Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
    """
    primary_connection_string: kulado.Output[str]
    """
    The Primary Connection String for the Event Hubs authorization Rule.
    """
    primary_key: kulado.Output[str]
    """
    The Primary Key for the Event Hubs authorization Rule.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
    """
    secondary_connection_string: kulado.Output[str]
    """
    The Secondary Connection String for the Event Hubs authorization Rule.
    """
    secondary_key: kulado.Output[str]
    """
    The Secondary Key for the Event Hubs authorization Rule.
    """
    send: kulado.Output[bool]
    """
    Does this Authorization Rule have permissions to Send to the Event Hub? Defaults to `false`.
    """
    def __init__(__self__, resource_name, opts=None, eventhub_name=None, listen=None, location=None, manage=None, name=None, namespace_name=None, resource_group_name=None, send=None, __name__=None, __opts__=None):
        """
        Manages a Event Hubs authorization Rule within an Event Hub.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] eventhub_name: Specifies the name of the EventHub. Changing this forces a new resource to be created.
        :param kulado.Input[bool] listen: Does this Authorization Rule have permissions to Listen to the Event Hub? Defaults to `false`.
        :param kulado.Input[bool] manage: Does this Authorization Rule have permissions to Manage to the Event Hub? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
        :param kulado.Input[str] name: Specifies the name of the EventHub Authorization Rule resource. Changing this forces a new resource to be created.
        :param kulado.Input[str] namespace_name: Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
        :param kulado.Input[bool] send: Does this Authorization Rule have permissions to Send to the Event Hub? Defaults to `false`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/eventhub_authorization_rule.html.markdown.
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

        if eventhub_name is None:
            raise TypeError("Missing required property 'eventhub_name'")
        __props__['eventhub_name'] = eventhub_name

        __props__['listen'] = listen

        __props__['location'] = location

        __props__['manage'] = manage

        __props__['name'] = name

        if namespace_name is None:
            raise TypeError("Missing required property 'namespace_name'")
        __props__['namespace_name'] = namespace_name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['send'] = send

        __props__['primary_connection_string'] = None
        __props__['primary_key'] = None
        __props__['secondary_connection_string'] = None
        __props__['secondary_key'] = None

        super(EventHubAuthorizationRule, __self__).__init__(
            'azure:eventhub/eventHubAuthorizationRule:EventHubAuthorizationRule',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

