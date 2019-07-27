# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Secret(kulado.CustomResource):
    content_type: kulado.Output[str]
    """
    Specifies the content type for the Key Vault Secret.
    """
    key_vault_id: kulado.Output[str]
    """
    The ID of the Key Vault where the Secret should be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Key Vault Secret. Changing this forces a new resource to be created.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    value: kulado.Output[str]
    """
    Specifies the value of the Key Vault Secret.
    """
    vault_uri: kulado.Output[str]
    version: kulado.Output[str]
    """
    The current version of the Key Vault Secret.
    """
    def __init__(__self__, resource_name, opts=None, content_type=None, key_vault_id=None, name=None, tags=None, value=None, vault_uri=None, __name__=None, __opts__=None):
        """
        Manages a Key Vault Secret.
        
        > **Note:** All arguments including the secret value will be stored in the raw state as plain-text.
        [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] content_type: Specifies the content type for the Key Vault Secret.
        :param kulado.Input[str] key_vault_id: The ID of the Key Vault where the Secret should be created.
        :param kulado.Input[str] name: Specifies the name of the Key Vault Secret. Changing this forces a new resource to be created.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.
        :param kulado.Input[str] value: Specifies the value of the Key Vault Secret.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/key_vault_secret.html.markdown.
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

        __props__['content_type'] = content_type

        __props__['key_vault_id'] = key_vault_id

        __props__['name'] = name

        __props__['tags'] = tags

        if value is None:
            raise TypeError("Missing required property 'value'")
        __props__['value'] = value

        __props__['vault_uri'] = vault_uri

        __props__['version'] = None

        super(Secret, __self__).__init__(
            'azure:keyvault/secret:Secret',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
