# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class KeyVault(kulado.CustomResource):
    access_policies: kulado.Output[list]
    """
    [A list](https://www.terraform.io/docs/configuration/attr-as-blocks.html) of up to 16 objects describing access policies, as described below.
    """
    enabled_for_deployment: kulado.Output[bool]
    """
    Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
    """
    enabled_for_disk_encryption: kulado.Output[bool]
    """
    Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
    """
    enabled_for_template_deployment: kulado.Output[bool]
    """
    Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
    """
    location: kulado.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Key Vault. Changing this forces a new resource to be created.
    """
    network_acls: kulado.Output[dict]
    """
    A `network_acls` block as defined below.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
    """
    sku: kulado.Output[dict]
    """
    ) A `sku` block as described below.
    """
    sku_name: kulado.Output[str]
    """
    The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    tenant_id: kulado.Output[str]
    """
    The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
    """
    vault_uri: kulado.Output[str]
    """
    The URI of the Key Vault, used for performing operations on keys and secrets.
    """
    def __init__(__self__, resource_name, opts=None, access_policies=None, enabled_for_deployment=None, enabled_for_disk_encryption=None, enabled_for_template_deployment=None, location=None, name=None, network_acls=None, resource_group_name=None, sku=None, sku_name=None, tags=None, tenant_id=None, __name__=None, __opts__=None):
        """
        Manages a Key Vault.
        
        > **NOTE:** It's possible to define Key Vault Access Policies both within the `azurerm_key_vault` resource via the `access_policy` block and by using the `azurerm_key_vault_access_policy` resource. However it's not possible to use both methods to manage Access Policies within a KeyVault, since there'll be conflicts.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[list] access_policies: [A list](https://www.terraform.io/docs/configuration/attr-as-blocks.html) of up to 16 objects describing access policies, as described below.
        :param kulado.Input[bool] enabled_for_deployment: Boolean flag to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. Defaults to `false`.
        :param kulado.Input[bool] enabled_for_disk_encryption: Boolean flag to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. Defaults to `false`.
        :param kulado.Input[bool] enabled_for_template_deployment: Boolean flag to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. Defaults to `false`.
        :param kulado.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the name of the Key Vault. Changing this forces a new resource to be created.
        :param kulado.Input[dict] network_acls: A `network_acls` block as defined below.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to create the Key Vault. Changing this forces a new resource to be created.
        :param kulado.Input[dict] sku: ) A `sku` block as described below.
        :param kulado.Input[str] sku_name: The Name of the SKU used for this Key Vault. Possible values are `standard` and `premium`.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.
        :param kulado.Input[str] tenant_id: The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/key_vault.html.markdown.
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

        __props__['access_policies'] = access_policies

        __props__['enabled_for_deployment'] = enabled_for_deployment

        __props__['enabled_for_disk_encryption'] = enabled_for_disk_encryption

        __props__['enabled_for_template_deployment'] = enabled_for_template_deployment

        __props__['location'] = location

        __props__['name'] = name

        __props__['network_acls'] = network_acls

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['sku'] = sku

        __props__['sku_name'] = sku_name

        __props__['tags'] = tags

        if tenant_id is None:
            raise TypeError("Missing required property 'tenant_id'")
        __props__['tenant_id'] = tenant_id

        __props__['vault_uri'] = None

        super(KeyVault, __self__).__init__(
            'azure:keyvault/keyVault:KeyVault',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

