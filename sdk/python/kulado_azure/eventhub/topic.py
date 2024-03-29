# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Topic(kulado.CustomResource):
    auto_delete_on_idle: kulado.Output[str]
    """
    The ISO 8601 timespan duration of the idle interval after which the
    Topic is automatically deleted, minimum of 5 minutes.
    """
    default_message_ttl: kulado.Output[str]
    """
    The ISO 8601 timespan duration of TTL of messages sent to this topic if no
    TTL value is set on the message itself.
    """
    duplicate_detection_history_time_window: kulado.Output[str]
    """
    The ISO 8601 timespan duration during which
    duplicates can be detected. Defaults to 10 minutes. (`PT10M`)
    """
    enable_batched_operations: kulado.Output[bool]
    """
    Boolean flag which controls if server-side
    batched operations are enabled. Defaults to false.
    """
    enable_express: kulado.Output[bool]
    """
    Boolean flag which controls whether Express Entities
    are enabled. An express topic holds a message in memory temporarily before writing
    it to persistent storage. Defaults to false.
    """
    enable_filtering_messages_before_publishing: kulado.Output[bool]
    enable_partitioning: kulado.Output[bool]
    """
    Boolean flag which controls whether to enable
    the topic to be partitioned across multiple message brokers. Defaults to false.
    Changing this forces a new resource to be created.
    """
    location: kulado.Output[str]
    """
    Specifies the supported Azure location where the resource exists.
    Changing this forces a new resource to be created.
    """
    max_size_in_megabytes: kulado.Output[float]
    """
    Integer value which controls the size of
    memory allocated for the topic. For supported values see the "Queue/topic size"
    section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas).
    """
    name: kulado.Output[str]
    """
    Specifies the name of the ServiceBus Topic resource. Changing this forces a
    new resource to be created.
    """
    namespace_name: kulado.Output[str]
    """
    The name of the ServiceBus Namespace to create
    this topic in. Changing this forces a new resource to be created.
    """
    requires_duplicate_detection: kulado.Output[bool]
    """
    Boolean flag which controls whether
    the Topic requires duplicate detection. Defaults to false. Changing this forces
    a new resource to be created.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to
    create the namespace. Changing this forces a new resource to be created.
    """
    status: kulado.Output[str]
    """
    The Status of the Service Bus Topic. Acceptable values are `Active` or `Disabled`. Defaults to `Active`.
    """
    support_ordering: kulado.Output[bool]
    """
    Boolean flag which controls whether the Topic
    supports ordering. Defaults to false.
    """
    def __init__(__self__, resource_name, opts=None, auto_delete_on_idle=None, default_message_ttl=None, duplicate_detection_history_time_window=None, enable_batched_operations=None, enable_express=None, enable_filtering_messages_before_publishing=None, enable_partitioning=None, location=None, max_size_in_megabytes=None, name=None, namespace_name=None, requires_duplicate_detection=None, resource_group_name=None, status=None, support_ordering=None, __name__=None, __opts__=None):
        """
        Manage a ServiceBus Topic.
        
        **Note** Topics can only be created in Namespaces with an SKU of `standard` or higher.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] auto_delete_on_idle: The ISO 8601 timespan duration of the idle interval after which the
               Topic is automatically deleted, minimum of 5 minutes.
        :param kulado.Input[str] default_message_ttl: The ISO 8601 timespan duration of TTL of messages sent to this topic if no
               TTL value is set on the message itself.
        :param kulado.Input[str] duplicate_detection_history_time_window: The ISO 8601 timespan duration during which
               duplicates can be detected. Defaults to 10 minutes. (`PT10M`)
        :param kulado.Input[bool] enable_batched_operations: Boolean flag which controls if server-side
               batched operations are enabled. Defaults to false.
        :param kulado.Input[bool] enable_express: Boolean flag which controls whether Express Entities
               are enabled. An express topic holds a message in memory temporarily before writing
               it to persistent storage. Defaults to false.
        :param kulado.Input[bool] enable_partitioning: Boolean flag which controls whether to enable
               the topic to be partitioned across multiple message brokers. Defaults to false.
               Changing this forces a new resource to be created.
        :param kulado.Input[str] location: Specifies the supported Azure location where the resource exists.
               Changing this forces a new resource to be created.
        :param kulado.Input[float] max_size_in_megabytes: Integer value which controls the size of
               memory allocated for the topic. For supported values see the "Queue/topic size"
               section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas).
        :param kulado.Input[str] name: Specifies the name of the ServiceBus Topic resource. Changing this forces a
               new resource to be created.
        :param kulado.Input[str] namespace_name: The name of the ServiceBus Namespace to create
               this topic in. Changing this forces a new resource to be created.
        :param kulado.Input[bool] requires_duplicate_detection: Boolean flag which controls whether
               the Topic requires duplicate detection. Defaults to false. Changing this forces
               a new resource to be created.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to
               create the namespace. Changing this forces a new resource to be created.
        :param kulado.Input[str] status: The Status of the Service Bus Topic. Acceptable values are `Active` or `Disabled`. Defaults to `Active`.
        :param kulado.Input[bool] support_ordering: Boolean flag which controls whether the Topic
               supports ordering. Defaults to false.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/servicebus_topic.html.markdown.
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

        __props__['auto_delete_on_idle'] = auto_delete_on_idle

        __props__['default_message_ttl'] = default_message_ttl

        __props__['duplicate_detection_history_time_window'] = duplicate_detection_history_time_window

        __props__['enable_batched_operations'] = enable_batched_operations

        __props__['enable_express'] = enable_express

        __props__['enable_filtering_messages_before_publishing'] = enable_filtering_messages_before_publishing

        __props__['enable_partitioning'] = enable_partitioning

        __props__['location'] = location

        __props__['max_size_in_megabytes'] = max_size_in_megabytes

        __props__['name'] = name

        if namespace_name is None:
            raise TypeError("Missing required property 'namespace_name'")
        __props__['namespace_name'] = namespace_name

        __props__['requires_duplicate_detection'] = requires_duplicate_detection

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['status'] = status

        __props__['support_ordering'] = support_ordering

        super(Topic, __self__).__init__(
            'azure:eventhub/topic:Topic',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

