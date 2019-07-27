# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class ZipBlob(kulado.CustomResource):
    attempts: kulado.Output[float]
    content_type: kulado.Output[str]
    metadata: kulado.Output[dict]
    name: kulado.Output[str]
    parallelism: kulado.Output[float]
    resource_group_name: kulado.Output[str]
    size: kulado.Output[float]
    content: kulado.Output[kulado.Archive]
    source_uri: kulado.Output[str]
    storage_account_name: kulado.Output[str]
    storage_container_name: kulado.Output[str]
    type: kulado.Output[str]
    url: kulado.Output[str]
    def __init__(__self__, resource_name, opts=None, attempts=None, content_type=None, metadata=None, name=None, parallelism=None, resource_group_name=None, size=None, content=None, source_uri=None, storage_account_name=None, storage_container_name=None, type=None, __name__=None, __opts__=None):
        """
        Create a ZipBlob resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
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

        __props__['attempts'] = attempts

        __props__['content_type'] = content_type

        __props__['metadata'] = metadata

        __props__['name'] = name

        __props__['parallelism'] = parallelism

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['size'] = size

        __props__['content'] = content

        __props__['source_uri'] = source_uri

        if storage_account_name is None:
            raise TypeError("Missing required property 'storage_account_name'")
        __props__['storage_account_name'] = storage_account_name

        if storage_container_name is None:
            raise TypeError("Missing required property 'storage_container_name'")
        __props__['storage_container_name'] = storage_container_name

        __props__['type'] = type

        __props__['url'] = None

        super(ZipBlob, __self__).__init__(
            'azure:storage/zipBlob:ZipBlob',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
