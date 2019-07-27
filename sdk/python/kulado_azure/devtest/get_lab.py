# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetLabResult:
    """
    A collection of values returned by getLab.
    """
    def __init__(__self__, artifacts_storage_account_id=None, default_premium_storage_account_id=None, default_storage_account_id=None, key_vault_id=None, location=None, name=None, premium_data_disk_storage_account_id=None, resource_group_name=None, storage_type=None, tags=None, unique_identifier=None, id=None):
        if artifacts_storage_account_id and not isinstance(artifacts_storage_account_id, str):
            raise TypeError("Expected argument 'artifacts_storage_account_id' to be a str")
        __self__.artifacts_storage_account_id = artifacts_storage_account_id
        """
        The ID of the Storage Account used for Artifact Storage.
        """
        if default_premium_storage_account_id and not isinstance(default_premium_storage_account_id, str):
            raise TypeError("Expected argument 'default_premium_storage_account_id' to be a str")
        __self__.default_premium_storage_account_id = default_premium_storage_account_id
        """
        The ID of the Default Premium Storage Account for this Dev Test Lab.
        """
        if default_storage_account_id and not isinstance(default_storage_account_id, str):
            raise TypeError("Expected argument 'default_storage_account_id' to be a str")
        __self__.default_storage_account_id = default_storage_account_id
        """
        The ID of the Default Storage Account for this Dev Test Lab.
        """
        if key_vault_id and not isinstance(key_vault_id, str):
            raise TypeError("Expected argument 'key_vault_id' to be a str")
        __self__.key_vault_id = key_vault_id
        """
        The ID of the Key used for this Dev Test Lab.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        """
        The Azure location where the Dev Test Lab exists.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if premium_data_disk_storage_account_id and not isinstance(premium_data_disk_storage_account_id, str):
            raise TypeError("Expected argument 'premium_data_disk_storage_account_id' to be a str")
        __self__.premium_data_disk_storage_account_id = premium_data_disk_storage_account_id
        """
        The ID of the Storage Account used for Storage of Premium Data Disk.
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if storage_type and not isinstance(storage_type, str):
            raise TypeError("Expected argument 'storage_type' to be a str")
        __self__.storage_type = storage_type
        """
        The type of storage used by the Dev Test Lab.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A mapping of tags to assign to the resource.
        """
        if unique_identifier and not isinstance(unique_identifier, str):
            raise TypeError("Expected argument 'unique_identifier' to be a str")
        __self__.unique_identifier = unique_identifier
        """
        The unique immutable identifier of the Dev Test Lab.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_lab(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing Dev Test Lab.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/dev_test_lab.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await kulado.runtime.invoke('azure:devtest/getLab:getLab', __args__, opts=opts)

    return GetLabResult(
        artifacts_storage_account_id=__ret__.get('artifactsStorageAccountId'),
        default_premium_storage_account_id=__ret__.get('defaultPremiumStorageAccountId'),
        default_storage_account_id=__ret__.get('defaultStorageAccountId'),
        key_vault_id=__ret__.get('keyVaultId'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        premium_data_disk_storage_account_id=__ret__.get('premiumDataDiskStorageAccountId'),
        resource_group_name=__ret__.get('resourceGroupName'),
        storage_type=__ret__.get('storageType'),
        tags=__ret__.get('tags'),
        unique_identifier=__ret__.get('uniqueIdentifier'),
        id=__ret__.get('id'))
