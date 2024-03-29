# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Policy(kulado.CustomResource):
    description: kulado.Output[str]
    """
    A description for the Policy.
    """
    evaluator_type: kulado.Output[str]
    """
    The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
    """
    fact_data: kulado.Output[str]
    """
    The Fact Data for this Policy.
    """
    lab_name: kulado.Output[str]
    """
    Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
    """
    policy_set_name: kulado.Output[str]
    """
    Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    threshold: kulado.Output[str]
    """
    The Threshold for this Policy.
    """
    def __init__(__self__, resource_name, opts=None, description=None, evaluator_type=None, fact_data=None, lab_name=None, name=None, policy_set_name=None, resource_group_name=None, tags=None, threshold=None, __name__=None, __opts__=None):
        """
        Manages a Policy within a Dev Test Policy Set.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] description: A description for the Policy.
        :param kulado.Input[str] evaluator_type: The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
        :param kulado.Input[str] fact_data: The Fact Data for this Policy.
        :param kulado.Input[str] lab_name: Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
        :param kulado.Input[str] policy_set_name: Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.
        :param kulado.Input[str] threshold: The Threshold for this Policy.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dev_test_policy.html.markdown.
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

        __props__['description'] = description

        if evaluator_type is None:
            raise TypeError("Missing required property 'evaluator_type'")
        __props__['evaluator_type'] = evaluator_type

        __props__['fact_data'] = fact_data

        if lab_name is None:
            raise TypeError("Missing required property 'lab_name'")
        __props__['lab_name'] = lab_name

        __props__['name'] = name

        if policy_set_name is None:
            raise TypeError("Missing required property 'policy_set_name'")
        __props__['policy_set_name'] = policy_set_name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['tags'] = tags

        if threshold is None:
            raise TypeError("Missing required property 'threshold'")
        __props__['threshold'] = threshold

        super(Policy, __self__).__init__(
            'azure:devtest/policy:Policy',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

