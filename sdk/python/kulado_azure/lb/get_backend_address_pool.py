# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetBackendAddressPoolResult:
    """
    A collection of values returned by getBackendAddressPool.
    """
    def __init__(__self__, loadbalancer_id=None, name=None, id=None):
        if loadbalancer_id and not isinstance(loadbalancer_id, str):
            raise TypeError("Expected argument 'loadbalancer_id' to be a str")
        __self__.loadbalancer_id = loadbalancer_id
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_backend_address_pool(loadbalancer_id=None,name=None,opts=None):
    """
    Use this data source to access information about an existing Load Balancer Backend Address Pool.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/lb_backend_address_pool.html.markdown.
    """
    __args__ = dict()

    __args__['loadbalancerId'] = loadbalancer_id
    __args__['name'] = name
    __ret__ = await kulado.runtime.invoke('azure:lb/getBackendAddressPool:getBackendAddressPool', __args__, opts=opts)

    return GetBackendAddressPoolResult(
        loadbalancer_id=__ret__.get('loadbalancerId'),
        name=__ret__.get('name'),
        id=__ret__.get('id'))
