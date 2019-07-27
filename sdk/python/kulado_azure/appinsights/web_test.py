# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class WebTest(kulado.CustomResource):
    application_insights_id: kulado.Output[str]
    """
    The ID of the Application Insights component on which the WebTest operates. Changing this forces a new resource to be created.
    """
    configuration: kulado.Output[str]
    """
    An XML configuration specification for a WebTest.
    """
    description: kulado.Output[str]
    """
    Purpose/user defined descriptive test for this WebTest.
    """
    enabled: kulado.Output[bool]
    """
    Is the test actively being monitored.
    """
    frequency: kulado.Output[float]
    """
    Interval in seconds between test runs for this WebTest. Default is `300`.
    """
    geo_locations: kulado.Output[list]
    """
    A list of where to physically run the tests from to give global coverage for accessibility of your application.
    """
    kind: kulado.Output[str]
    location: kulado.Output[str]
    """
    The location of the resource group.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Application Insights WebTest. Changing this forces a
    new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    retry_enabled: kulado.Output[bool]
    """
    Allow for retries should this WebTest fail.
    """
    synthetic_monitor_id: kulado.Output[str]
    tags: kulado.Output[dict]
    """
    Resource tags.
    """
    timeout: kulado.Output[float]
    """
    Seconds until this WebTest will timeout and fail. Default is `30`.
    """
    def __init__(__self__, resource_name, opts=None, application_insights_id=None, configuration=None, description=None, enabled=None, frequency=None, geo_locations=None, kind=None, location=None, name=None, resource_group_name=None, retry_enabled=None, tags=None, timeout=None, __name__=None, __opts__=None):
        """
        Manages an Application Insights WebTest.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] application_insights_id: The ID of the Application Insights component on which the WebTest operates. Changing this forces a new resource to be created.
        :param kulado.Input[str] configuration: An XML configuration specification for a WebTest.
        :param kulado.Input[str] description: Purpose/user defined descriptive test for this WebTest.
        :param kulado.Input[bool] enabled: Is the test actively being monitored.
        :param kulado.Input[float] frequency: Interval in seconds between test runs for this WebTest. Default is `300`.
        :param kulado.Input[list] geo_locations: A list of where to physically run the tests from to give global coverage for accessibility of your application.
        :param kulado.Input[str] location: The location of the resource group.
        :param kulado.Input[str] name: Specifies the name of the Application Insights WebTest. Changing this forces a
               new resource to be created.
        :param kulado.Input[bool] retry_enabled: Allow for retries should this WebTest fail.
        :param kulado.Input[dict] tags: Resource tags.
        :param kulado.Input[float] timeout: Seconds until this WebTest will timeout and fail. Default is `30`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/application_insights_web_test.html.markdown.
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

        if application_insights_id is None:
            raise TypeError("Missing required property 'application_insights_id'")
        __props__['application_insights_id'] = application_insights_id

        if configuration is None:
            raise TypeError("Missing required property 'configuration'")
        __props__['configuration'] = configuration

        __props__['description'] = description

        __props__['enabled'] = enabled

        __props__['frequency'] = frequency

        if geo_locations is None:
            raise TypeError("Missing required property 'geo_locations'")
        __props__['geo_locations'] = geo_locations

        if kind is None:
            raise TypeError("Missing required property 'kind'")
        __props__['kind'] = kind

        __props__['location'] = location

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['retry_enabled'] = retry_enabled

        __props__['tags'] = tags

        __props__['timeout'] = timeout

        __props__['synthetic_monitor_id'] = None

        super(WebTest, __self__).__init__(
            'azure:appinsights/webTest:WebTest',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
