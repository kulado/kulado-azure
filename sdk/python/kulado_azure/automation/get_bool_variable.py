# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetBoolVariableResult:
    """
    A collection of values returned by getBoolVariable.
    """
    def __init__(__self__, automation_account_name=None, description=None, encrypted=None, name=None, resource_group_name=None, value=None, id=None):
        if automation_account_name and not isinstance(automation_account_name, str):
            raise TypeError("Expected argument 'automation_account_name' to be a str")
        __self__.automation_account_name = automation_account_name
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        The description of the Automation Variable.
        """
        if encrypted and not isinstance(encrypted, bool):
            raise TypeError("Expected argument 'encrypted' to be a bool")
        __self__.encrypted = encrypted
        """
        Specifies if the Automation Variable is encrypted. Defaults to `false`.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if value and not isinstance(value, bool):
            raise TypeError("Expected argument 'value' to be a bool")
        __self__.value = value
        """
        The value of the Automation Variable as a `boolean`.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_bool_variable(automation_account_name=None,name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing Automation Bool Variable.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/automation_variable_bool.html.markdown.
    """
    __args__ = dict()

    __args__['automationAccountName'] = automation_account_name
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await kulado.runtime.invoke('azure:automation/getBoolVariable:getBoolVariable', __args__, opts=opts)

    return GetBoolVariableResult(
        automation_account_name=__ret__.get('automationAccountName'),
        description=__ret__.get('description'),
        encrypted=__ret__.get('encrypted'),
        name=__ret__.get('name'),
        resource_group_name=__ret__.get('resourceGroupName'),
        value=__ret__.get('value'),
        id=__ret__.get('id'))