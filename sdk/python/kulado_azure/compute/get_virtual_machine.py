# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetVirtualMachineResult:
    """
    A collection of values returned by getVirtualMachine.
    """
    def __init__(__self__, name=None, resource_group_name=None, id=None):
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_virtual_machine(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing Virtual Machine.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/virtual_machine.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await kulado.runtime.invoke('azure:compute/getVirtualMachine:getVirtualMachine', __args__, opts=opts)

    return GetVirtualMachineResult(
        name=__ret__.get('name'),
        resource_group_name=__ret__.get('resourceGroupName'),
        id=__ret__.get('id'))
