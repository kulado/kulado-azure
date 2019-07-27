# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetSubscriptionsResult:
    """
    A collection of values returned by getSubscriptions.
    """
    def __init__(__self__, display_name_contains=None, display_name_prefix=None, subscriptions=None, id=None):
        if display_name_contains and not isinstance(display_name_contains, str):
            raise TypeError("Expected argument 'display_name_contains' to be a str")
        __self__.display_name_contains = display_name_contains
        if display_name_prefix and not isinstance(display_name_prefix, str):
            raise TypeError("Expected argument 'display_name_prefix' to be a str")
        __self__.display_name_prefix = display_name_prefix
        if subscriptions and not isinstance(subscriptions, list):
            raise TypeError("Expected argument 'subscriptions' to be a list")
        __self__.subscriptions = subscriptions
        """
        One or more `subscription` blocks as defined below.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_subscriptions(display_name_contains=None,display_name_prefix=None,opts=None):
    """
    Use this data source to access information about all the Subscriptions currently available.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/subscriptions.html.markdown.
    """
    __args__ = dict()

    __args__['displayNameContains'] = display_name_contains
    __args__['displayNamePrefix'] = display_name_prefix
    __ret__ = await kulado.runtime.invoke('azure:core/getSubscriptions:getSubscriptions', __args__, opts=opts)

    return GetSubscriptionsResult(
        display_name_contains=__ret__.get('displayNameContains'),
        display_name_prefix=__ret__.get('displayNamePrefix'),
        subscriptions=__ret__.get('subscriptions'),
        id=__ret__.get('id'))
