# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetUserAssignedIdentityResult:
    """
    A collection of values returned by getUserAssignedIdentity.
    """
    def __init__(__self__, client_id=None, location=None, name=None, principal_id=None, resource_group_name=None, tags=None, id=None):
        if client_id and not isinstance(client_id, str):
            raise TypeError("Expected argument 'client_id' to be a str")
        __self__.client_id = client_id
        """
        The Client ID of the User Assigned Identity.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        """
        The Azure location where the User Assigned Identity exists.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if principal_id and not isinstance(principal_id, str):
            raise TypeError("Expected argument 'principal_id' to be a str")
        __self__.principal_id = principal_id
        """
        The Service Principal ID of the User Assigned Identity.
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A mapping of tags assigned to the User Assigned Identity.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_user_assigned_identity(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing User Assigned Identity.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/user_assigned_identity.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await kulado.runtime.invoke('azure:core/getUserAssignedIdentity:getUserAssignedIdentity', __args__, opts=opts)

    return GetUserAssignedIdentityResult(
        client_id=__ret__.get('clientId'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        principal_id=__ret__.get('principalId'),
        resource_group_name=__ret__.get('resourceGroupName'),
        tags=__ret__.get('tags'),
        id=__ret__.get('id'))
