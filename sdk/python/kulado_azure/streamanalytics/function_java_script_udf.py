# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class FunctionJavaScriptUDF(kulado.CustomResource):
    inputs: kulado.Output[list]
    """
    One or more `input` blocks as defined below.
    """
    name: kulado.Output[str]
    """
    The name of the JavaScript UDF Function. Changing this forces a new resource to be created.
    """
    output: kulado.Output[dict]
    """
    An `output` blocks as defined below.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
    """
    script: kulado.Output[str]
    """
    The JavaScript of this UDF Function.
    """
    stream_analytics_job_name: kulado.Output[str]
    """
    The name of the Stream Analytics Job where this Function should be created. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, inputs=None, name=None, output=None, resource_group_name=None, script=None, stream_analytics_job_name=None, __name__=None, __opts__=None):
        """
        Manages a JavaScript UDF Function within Stream Analytics Streaming Job.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[list] inputs: One or more `input` blocks as defined below.
        :param kulado.Input[str] name: The name of the JavaScript UDF Function. Changing this forces a new resource to be created.
        :param kulado.Input[dict] output: An `output` blocks as defined below.
        :param kulado.Input[str] resource_group_name: The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] script: The JavaScript of this UDF Function.
        :param kulado.Input[str] stream_analytics_job_name: The name of the Stream Analytics Job where this Function should be created. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/stream_analytics_function_javascript_udf.html.markdown.
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

        if inputs is None:
            raise TypeError("Missing required property 'inputs'")
        __props__['inputs'] = inputs

        __props__['name'] = name

        if output is None:
            raise TypeError("Missing required property 'output'")
        __props__['output'] = output

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if script is None:
            raise TypeError("Missing required property 'script'")
        __props__['script'] = script

        if stream_analytics_job_name is None:
            raise TypeError("Missing required property 'stream_analytics_job_name'")
        __props__['stream_analytics_job_name'] = stream_analytics_job_name

        super(FunctionJavaScriptUDF, __self__).__init__(
            'azure:streamanalytics/functionJavaScriptUDF:FunctionJavaScriptUDF',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

