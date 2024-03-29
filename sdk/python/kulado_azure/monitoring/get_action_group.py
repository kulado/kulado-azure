# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetActionGroupResult:
    """
    A collection of values returned by getActionGroup.
    """
    def __init__(__self__, email_receivers=None, enabled=None, name=None, resource_group_name=None, short_name=None, sms_receivers=None, webhook_receivers=None, id=None):
        if email_receivers and not isinstance(email_receivers, list):
            raise TypeError("Expected argument 'email_receivers' to be a list")
        __self__.email_receivers = email_receivers
        """
        One or more `email_receiver` blocks as defined below.
        """
        if enabled and not isinstance(enabled, bool):
            raise TypeError("Expected argument 'enabled' to be a bool")
        __self__.enabled = enabled
        """
        Whether this action group is enabled.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        The name of the webhook receiver. 
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if short_name and not isinstance(short_name, str):
            raise TypeError("Expected argument 'short_name' to be a str")
        __self__.short_name = short_name
        """
        The short name of the action group.
        """
        if sms_receivers and not isinstance(sms_receivers, list):
            raise TypeError("Expected argument 'sms_receivers' to be a list")
        __self__.sms_receivers = sms_receivers
        """
        One or more `sms_receiver ` blocks as defined below.
        """
        if webhook_receivers and not isinstance(webhook_receivers, list):
            raise TypeError("Expected argument 'webhook_receivers' to be a list")
        __self__.webhook_receivers = webhook_receivers
        """
        One or more `webhook_receiver ` blocks as defined below.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_action_group(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access the properties of an Action Group.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/monitor_action_group.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await kulado.runtime.invoke('azure:monitoring/getActionGroup:getActionGroup', __args__, opts=opts)

    return GetActionGroupResult(
        email_receivers=__ret__.get('emailReceivers'),
        enabled=__ret__.get('enabled'),
        name=__ret__.get('name'),
        resource_group_name=__ret__.get('resourceGroupName'),
        short_name=__ret__.get('shortName'),
        sms_receivers=__ret__.get('smsReceivers'),
        webhook_receivers=__ret__.get('webhookReceivers'),
        id=__ret__.get('id'))
