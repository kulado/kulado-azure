# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class ProtectedVM(kulado.CustomResource):
    backup_policy_id: kulado.Output[str]
    """
    Specifies the id of the backup policy to use. Changing this forces a new resource to be created.
    """
    recovery_vault_name: kulado.Output[str]
    """
    Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
    """
    source_vm_id: kulado.Output[str]
    """
    Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, backup_policy_id=None, recovery_vault_name=None, resource_group_name=None, source_vm_id=None, tags=None, __name__=None, __opts__=None):
        """
        Manages an Recovery Protected VM.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] backup_policy_id: Specifies the id of the backup policy to use. Changing this forces a new resource to be created.
        :param kulado.Input[str] recovery_vault_name: Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
        :param kulado.Input[str] source_vm_id: Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/recovery_services_protected_vm.html.markdown.
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

        if backup_policy_id is None:
            raise TypeError("Missing required property 'backup_policy_id'")
        __props__['backup_policy_id'] = backup_policy_id

        if recovery_vault_name is None:
            raise TypeError("Missing required property 'recovery_vault_name'")
        __props__['recovery_vault_name'] = recovery_vault_name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if source_vm_id is None:
            raise TypeError("Missing required property 'source_vm_id'")
        __props__['source_vm_id'] = source_vm_id

        __props__['tags'] = tags

        super(ProtectedVM, __self__).__init__(
            'azure:recoveryservices/protectedVM:ProtectedVM',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
