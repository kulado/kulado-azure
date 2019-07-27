# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class TriggerRecurrence(kulado.CustomResource):
    frequency: kulado.Output[str]
    """
    Specifies the Frequency at which this Trigger should be run. Possible values include `Month`, `Week`, `Day`, `Hour`, `Minute` and `Second`.
    """
    interval: kulado.Output[float]
    """
    Specifies interval used for the Frequency, for example a value of `4` for `interval` and `hour` for `frequency` would run the Trigger every 4 hours.
    """
    logic_app_id: kulado.Output[str]
    """
    Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Recurrence Triggers to be created within the Logic App Workflow. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, frequency=None, interval=None, logic_app_id=None, name=None, __name__=None, __opts__=None):
        """
        Manages a Recurrence Trigger within a Logic App Workflow
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] frequency: Specifies the Frequency at which this Trigger should be run. Possible values include `Month`, `Week`, `Day`, `Hour`, `Minute` and `Second`.
        :param kulado.Input[float] interval: Specifies interval used for the Frequency, for example a value of `4` for `interval` and `hour` for `frequency` would run the Trigger every 4 hours.
        :param kulado.Input[str] logic_app_id: Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the name of the Recurrence Triggers to be created within the Logic App Workflow. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/logic_app_trigger_recurrence.html.markdown.
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

        if frequency is None:
            raise TypeError("Missing required property 'frequency'")
        __props__['frequency'] = frequency

        if interval is None:
            raise TypeError("Missing required property 'interval'")
        __props__['interval'] = interval

        if logic_app_id is None:
            raise TypeError("Missing required property 'logic_app_id'")
        __props__['logic_app_id'] = logic_app_id

        __props__['name'] = name

        super(TriggerRecurrence, __self__).__init__(
            'azure:logicapps/triggerRecurrence:TriggerRecurrence',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
