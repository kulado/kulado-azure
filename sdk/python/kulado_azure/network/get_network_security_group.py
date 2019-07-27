# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetNetworkSecurityGroupResult:
    """
    A collection of values returned by getNetworkSecurityGroup.
    """
    def __init__(__self__, location=None, name=None, resource_group_name=None, security_rules=None, tags=None, id=None):
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        """
        The supported Azure location where the resource exists.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        The name of the security rule.
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if security_rules and not isinstance(security_rules, list):
            raise TypeError("Expected argument 'security_rules' to be a list")
        __self__.security_rules = security_rules
        """
        One or more `security_rule` blocks as defined below.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A mapping of tags assigned to the resource.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_network_security_group(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing Network Security Group.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/network_security_group.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await kulado.runtime.invoke('azure:network/getNetworkSecurityGroup:getNetworkSecurityGroup', __args__, opts=opts)

    return GetNetworkSecurityGroupResult(
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        resource_group_name=__ret__.get('resourceGroupName'),
        security_rules=__ret__.get('securityRules'),
        tags=__ret__.get('tags'),
        id=__ret__.get('id'))
