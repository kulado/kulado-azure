# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetGeographicalLocationResult:
    """
    A collection of values returned by getGeographicalLocation.
    """
    def __init__(__self__, name=None, id=None):
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_geographical_location(name=None,opts=None):
    """
    Use this data source to access the ID of a specified Traffic Manager Geographical Location within the Geographical Hierarchy.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/traffic_manager_geographical_location.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __ret__ = await kulado.runtime.invoke('azure:trafficmanager/getGeographicalLocation:getGeographicalLocation', __args__, opts=opts)

    return GetGeographicalLocationResult(
        name=__ret__.get('name'),
        id=__ret__.get('id'))
