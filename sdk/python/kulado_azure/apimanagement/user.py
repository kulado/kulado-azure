# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class User(kulado.CustomResource):
    api_management_name: kulado.Output[str]
    """
    The name of the API Management Service in which the User should be created. Changing this forces a new resource to be created.
    """
    confirmation: kulado.Output[str]
    """
    The kind of confirmation email which will be sent to this user. Possible values are `invite` and `signup`. Changing this forces a new resource to be created.
    """
    email: kulado.Output[str]
    """
    The email address associated with this user.
    """
    first_name: kulado.Output[str]
    """
    The first name for this user.
    """
    last_name: kulado.Output[str]
    """
    The last name for this user.
    """
    note: kulado.Output[str]
    """
    A note about this user.
    """
    password: kulado.Output[str]
    """
    The password associated with this user.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
    """
    state: kulado.Output[str]
    """
    The state of this user. Possible values are `active`, `blocked` and `pending`.
    """
    user_id: kulado.Output[str]
    """
    The Identifier for this User, which must be unique within the API Management Service. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, api_management_name=None, confirmation=None, email=None, first_name=None, last_name=None, note=None, password=None, resource_group_name=None, state=None, user_id=None, __name__=None, __opts__=None):
        """
        Manages an API Management User.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] api_management_name: The name of the API Management Service in which the User should be created. Changing this forces a new resource to be created.
        :param kulado.Input[str] confirmation: The kind of confirmation email which will be sent to this user. Possible values are `invite` and `signup`. Changing this forces a new resource to be created.
        :param kulado.Input[str] email: The email address associated with this user.
        :param kulado.Input[str] first_name: The first name for this user.
        :param kulado.Input[str] last_name: The last name for this user.
        :param kulado.Input[str] note: A note about this user.
        :param kulado.Input[str] password: The password associated with this user.
        :param kulado.Input[str] resource_group_name: The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] state: The state of this user. Possible values are `active`, `blocked` and `pending`.
        :param kulado.Input[str] user_id: The Identifier for this User, which must be unique within the API Management Service. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_user.html.markdown.
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

        if api_management_name is None:
            raise TypeError("Missing required property 'api_management_name'")
        __props__['api_management_name'] = api_management_name

        __props__['confirmation'] = confirmation

        if email is None:
            raise TypeError("Missing required property 'email'")
        __props__['email'] = email

        if first_name is None:
            raise TypeError("Missing required property 'first_name'")
        __props__['first_name'] = first_name

        if last_name is None:
            raise TypeError("Missing required property 'last_name'")
        __props__['last_name'] = last_name

        __props__['note'] = note

        __props__['password'] = password

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['state'] = state

        if user_id is None:
            raise TypeError("Missing required property 'user_id'")
        __props__['user_id'] = user_id

        super(User, __self__).__init__(
            'azure:apimanagement/user:User',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
