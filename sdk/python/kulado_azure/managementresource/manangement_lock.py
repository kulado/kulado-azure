# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class ManangementLock(kulado.CustomResource):
    lock_level: kulado.Output[str]
    """
    Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Management Lock. Changing this forces a new resource to be created.
    """
    notes: kulado.Output[str]
    """
    Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
    """
    scope: kulado.Output[str]
    """
    Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, lock_level=None, name=None, notes=None, scope=None, __name__=None, __opts__=None):
        """
        Manages a Management Lock which is scoped to a Subscription, Resource Group or Resource.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] lock_level: Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the name of the Management Lock. Changing this forces a new resource to be created.
        :param kulado.Input[str] notes: Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
        :param kulado.Input[str] scope: Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/management_lock.html.markdown.
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

        if lock_level is None:
            raise TypeError("Missing required property 'lock_level'")
        __props__['lock_level'] = lock_level

        __props__['name'] = name

        __props__['notes'] = notes

        if scope is None:
            raise TypeError("Missing required property 'scope'")
        __props__['scope'] = scope

        super(ManangementLock, __self__).__init__(
            'azure:managementresource/manangementLock:ManangementLock',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

