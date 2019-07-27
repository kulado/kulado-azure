# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetKeyVaultResult:
    """
    A collection of values returned by getKeyVault.
    """
    def __init__(__self__, access_policies=None, enabled_for_deployment=None, enabled_for_disk_encryption=None, enabled_for_template_deployment=None, location=None, name=None, network_acls=None, resource_group_name=None, sku=None, sku_name=None, tags=None, tenant_id=None, vault_uri=None, id=None):
        if access_policies and not isinstance(access_policies, list):
            raise TypeError("Expected argument 'access_policies' to be a list")
        __self__.access_policies = access_policies
        """
        One or more `access_policy` blocks as defined below.
        """
        if enabled_for_deployment and not isinstance(enabled_for_deployment, bool):
            raise TypeError("Expected argument 'enabled_for_deployment' to be a bool")
        __self__.enabled_for_deployment = enabled_for_deployment
        """
        Can Azure Virtual Machines retrieve certificates stored as secrets from the Key Vault?
        """
        if enabled_for_disk_encryption and not isinstance(enabled_for_disk_encryption, bool):
            raise TypeError("Expected argument 'enabled_for_disk_encryption' to be a bool")
        __self__.enabled_for_disk_encryption = enabled_for_disk_encryption
        """
        Can Azure Disk Encryption retrieve secrets from the Key Vault?
        """
        if enabled_for_template_deployment and not isinstance(enabled_for_template_deployment, bool):
            raise TypeError("Expected argument 'enabled_for_template_deployment' to be a bool")
        __self__.enabled_for_template_deployment = enabled_for_template_deployment
        """
        Can Azure Resource Manager retrieve secrets from the Key Vault?
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        """
        The Azure Region in which the Key Vault exists.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        The name of the SKU used for this Key Vault.
        """
        if network_acls and not isinstance(network_acls, list):
            raise TypeError("Expected argument 'network_acls' to be a list")
        __self__.network_acls = network_acls
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if sku and not isinstance(sku, dict):
            raise TypeError("Expected argument 'sku' to be a dict")
        __self__.sku = sku
        """
        A `sku` block as described below.
        """
        if sku_name and not isinstance(sku_name, str):
            raise TypeError("Expected argument 'sku_name' to be a str")
        __self__.sku_name = sku_name
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A mapping of tags assigned to the Key Vault.
        """
        if tenant_id and not isinstance(tenant_id, str):
            raise TypeError("Expected argument 'tenant_id' to be a str")
        __self__.tenant_id = tenant_id
        """
        The Azure Active Directory Tenant ID used to authenticate requests for this Key Vault.
        """
        if vault_uri and not isinstance(vault_uri, str):
            raise TypeError("Expected argument 'vault_uri' to be a str")
        __self__.vault_uri = vault_uri
        """
        The URI of the vault for performing operations on keys and secrets.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_key_vault(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing Key Vault.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/key_vault.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await kulado.runtime.invoke('azure:keyvault/getKeyVault:getKeyVault', __args__, opts=opts)

    return GetKeyVaultResult(
        access_policies=__ret__.get('accessPolicies'),
        enabled_for_deployment=__ret__.get('enabledForDeployment'),
        enabled_for_disk_encryption=__ret__.get('enabledForDiskEncryption'),
        enabled_for_template_deployment=__ret__.get('enabledForTemplateDeployment'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        network_acls=__ret__.get('networkAcls'),
        resource_group_name=__ret__.get('resourceGroupName'),
        sku=__ret__.get('sku'),
        sku_name=__ret__.get('skuName'),
        tags=__ret__.get('tags'),
        tenant_id=__ret__.get('tenantId'),
        vault_uri=__ret__.get('vaultUri'),
        id=__ret__.get('id'))