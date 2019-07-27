# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class ProductGroup(kulado.CustomResource):
    api_management_name: kulado.Output[str]
    """
    The name of the API Management Service. Changing this forces a new resource to be created.
    """
    group_name: kulado.Output[str]
    """
    The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
    """
    product_id: kulado.Output[str]
    """
    The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, api_management_name=None, group_name=None, product_id=None, resource_group_name=None, __name__=None, __opts__=None):
        """
        Manages an API Management Product Assignment to a Group.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] api_management_name: The name of the API Management Service. Changing this forces a new resource to be created.
        :param kulado.Input[str] group_name: The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
        :param kulado.Input[str] product_id: The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_product_group.html.markdown.
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

        if group_name is None:
            raise TypeError("Missing required property 'group_name'")
        __props__['group_name'] = group_name

        if product_id is None:
            raise TypeError("Missing required property 'product_id'")
        __props__['product_id'] = product_id

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        super(ProductGroup, __self__).__init__(
            'azure:apimanagement/productGroup:ProductGroup',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

