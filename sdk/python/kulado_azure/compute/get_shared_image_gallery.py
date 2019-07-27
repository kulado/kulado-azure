# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetSharedImageGalleryResult:
    """
    A collection of values returned by getSharedImageGallery.
    """
    def __init__(__self__, description=None, location=None, name=None, resource_group_name=None, tags=None, unique_name=None, id=None):
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        A description for the Shared Image Gallery.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A mapping of tags which are assigned to the Shared Image Gallery.
        """
        if unique_name and not isinstance(unique_name, str):
            raise TypeError("Expected argument 'unique_name' to be a str")
        __self__.unique_name = unique_name
        """
        The unique name assigned to the Shared Image Gallery.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_shared_image_gallery(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing Shared Image Gallery.
    
    > **NOTE** Shared Image Galleries are currently in Public Preview. You can find more information, including [how to register for the Public Preview here](https://azure.microsoft.com/en-gb/blog/announcing-the-public-preview-of-shared-image-gallery/).

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/shared_image_gallery.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await kulado.runtime.invoke('azure:compute/getSharedImageGallery:getSharedImageGallery', __args__, opts=opts)

    return GetSharedImageGalleryResult(
        description=__ret__.get('description'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        resource_group_name=__ret__.get('resourceGroupName'),
        tags=__ret__.get('tags'),
        unique_name=__ret__.get('uniqueName'),
        id=__ret__.get('id'))
