# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class WindowsVirtualMachine(kulado.CustomResource):
    allow_claim: kulado.Output[bool]
    """
    Can this Virtual Machine be claimed by users? Defaults to `true`.
    """
    disallow_public_ip_address: kulado.Output[bool]
    """
    Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
    """
    fqdn: kulado.Output[str]
    """
    The FQDN of the Virtual Machine.
    """
    gallery_image_reference: kulado.Output[dict]
    """
    A `gallery_image_reference` block as defined below.
    """
    inbound_nat_rules: kulado.Output[list]
    """
    One or more `inbound_nat_rule` blocks as defined below. Changing this forces a new resource to be created.
    """
    lab_name: kulado.Output[str]
    """
    Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
    """
    lab_subnet_name: kulado.Output[str]
    """
    The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
    """
    lab_virtual_network_id: kulado.Output[str]
    """
    The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
    """
    location: kulado.Output[str]
    """
    Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
    """
    notes: kulado.Output[str]
    """
    Any notes about the Virtual Machine.
    """
    password: kulado.Output[str]
    """
    The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
    """
    size: kulado.Output[str]
    """
    The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
    """
    storage_type: kulado.Output[str]
    """
    The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    unique_identifier: kulado.Output[str]
    """
    The unique immutable identifier of the Virtual Machine.
    """
    username: kulado.Output[str]
    """
    The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, allow_claim=None, disallow_public_ip_address=None, gallery_image_reference=None, inbound_nat_rules=None, lab_name=None, lab_subnet_name=None, lab_virtual_network_id=None, location=None, name=None, notes=None, password=None, resource_group_name=None, size=None, storage_type=None, tags=None, username=None, __name__=None, __opts__=None):
        """
        Manages a Windows Virtual Machine within a Dev Test Lab.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[bool] allow_claim: Can this Virtual Machine be claimed by users? Defaults to `true`.
        :param kulado.Input[bool] disallow_public_ip_address: Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
        :param kulado.Input[dict] gallery_image_reference: A `gallery_image_reference` block as defined below.
        :param kulado.Input[list] inbound_nat_rules: One or more `inbound_nat_rule` blocks as defined below. Changing this forces a new resource to be created.
        :param kulado.Input[str] lab_name: Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
        :param kulado.Input[str] lab_subnet_name: The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
        :param kulado.Input[str] lab_virtual_network_id: The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
        :param kulado.Input[str] location: Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
        :param kulado.Input[str] notes: Any notes about the Virtual Machine.
        :param kulado.Input[str] password: The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] size: The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
        :param kulado.Input[str] storage_type: The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.
        :param kulado.Input[str] username: The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dev_test_windows_virtual_machine.html.markdown.
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

        __props__['allow_claim'] = allow_claim

        __props__['disallow_public_ip_address'] = disallow_public_ip_address

        if gallery_image_reference is None:
            raise TypeError("Missing required property 'gallery_image_reference'")
        __props__['gallery_image_reference'] = gallery_image_reference

        __props__['inbound_nat_rules'] = inbound_nat_rules

        if lab_name is None:
            raise TypeError("Missing required property 'lab_name'")
        __props__['lab_name'] = lab_name

        if lab_subnet_name is None:
            raise TypeError("Missing required property 'lab_subnet_name'")
        __props__['lab_subnet_name'] = lab_subnet_name

        if lab_virtual_network_id is None:
            raise TypeError("Missing required property 'lab_virtual_network_id'")
        __props__['lab_virtual_network_id'] = lab_virtual_network_id

        __props__['location'] = location

        __props__['name'] = name

        __props__['notes'] = notes

        if password is None:
            raise TypeError("Missing required property 'password'")
        __props__['password'] = password

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if size is None:
            raise TypeError("Missing required property 'size'")
        __props__['size'] = size

        if storage_type is None:
            raise TypeError("Missing required property 'storage_type'")
        __props__['storage_type'] = storage_type

        __props__['tags'] = tags

        if username is None:
            raise TypeError("Missing required property 'username'")
        __props__['username'] = username

        __props__['fqdn'] = None
        __props__['unique_identifier'] = None

        super(WindowsVirtualMachine, __self__).__init__(
            'azure:devtest/windowsVirtualMachine:WindowsVirtualMachine',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

