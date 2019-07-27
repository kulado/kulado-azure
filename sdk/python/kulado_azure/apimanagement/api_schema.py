# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class ApiSchema(kulado.CustomResource):
    api_management_name: kulado.Output[str]
    """
    The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
    """
    api_name: kulado.Output[str]
    """
    The name of the API within the API Management Service where this API Schema should be created. Changing this forces a new resource to be created.
    """
    content_type: kulado.Output[str]
    """
    The content type of the API Schema.
    """
    resource_group_name: kulado.Output[str]
    """
    The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
    """
    schema_id: kulado.Output[str]
    """
    A unique identifier for this API Schema. Changing this forces a new resource to be created.
    """
    value: kulado.Output[str]
    """
    The JSON escaped string defining the document representing the Schema.
    """
    def __init__(__self__, resource_name, opts=None, api_management_name=None, api_name=None, content_type=None, resource_group_name=None, schema_id=None, value=None, __name__=None, __opts__=None):
        """
        Manages an API Schema within an API Management Service.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] api_management_name: The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] api_name: The name of the API within the API Management Service where this API Schema should be created. Changing this forces a new resource to be created.
        :param kulado.Input[str] content_type: The content type of the API Schema.
        :param kulado.Input[str] resource_group_name: The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] schema_id: A unique identifier for this API Schema. Changing this forces a new resource to be created.
        :param kulado.Input[str] value: The JSON escaped string defining the document representing the Schema.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_api_schema.html.markdown.
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

        if api_name is None:
            raise TypeError("Missing required property 'api_name'")
        __props__['api_name'] = api_name

        if content_type is None:
            raise TypeError("Missing required property 'content_type'")
        __props__['content_type'] = content_type

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if schema_id is None:
            raise TypeError("Missing required property 'schema_id'")
        __props__['schema_id'] = schema_id

        if value is None:
            raise TypeError("Missing required property 'value'")
        __props__['value'] = value

        super(ApiSchema, __self__).__init__(
            'azure:apimanagement/apiSchema:ApiSchema',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

