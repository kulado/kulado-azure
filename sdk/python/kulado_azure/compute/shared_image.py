# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class SharedImage(kulado.CustomResource):
    description: kulado.Output[str]
    """
    A description of this Shared Image.
    """
    eula: kulado.Output[str]
    """
    The End User Licence Agreement for the Shared Image.
    """
    gallery_name: kulado.Output[str]
    """
    Specifies the name of the Shared Image Gallery in which this Shared Image should exist. Changing this forces a new resource to be created.
    """
    identifier: kulado.Output[dict]
    """
    An `identifier` block as defined below.
    """
    location: kulado.Output[str]
    """
    Specifies the supported Azure location where the Shared Image Gallery exists. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    Specifies the name of the Shared Image. Changing this forces a new resource to be created.
    """
    os_type: kulado.Output[str]
    """
    The type of Operating System present in this Shared Image. Possible values are `Linux` and `Windows`.
    """
    privacy_statement_uri: kulado.Output[str]
    """
    The URI containing the Privacy Statement associated with this Shared Image.
    """
    release_note_uri: kulado.Output[str]
    """
    The URI containing the Release Notes associated with this Shared Image.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the Shared Image.
    """
    def __init__(__self__, resource_name, opts=None, description=None, eula=None, gallery_name=None, identifier=None, location=None, name=None, os_type=None, privacy_statement_uri=None, release_note_uri=None, resource_group_name=None, tags=None, __name__=None, __opts__=None):
        """
        Manages a Shared Image within a Shared Image Gallery.
        
        > **NOTE** Shared Image Galleries are currently in Public Preview. You can find more information, including [how to register for the Public Preview here](https://azure.microsoft.com/en-gb/blog/announcing-the-public-preview-of-shared-image-gallery/).
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] description: A description of this Shared Image.
        :param kulado.Input[str] eula: The End User Licence Agreement for the Shared Image.
        :param kulado.Input[str] gallery_name: Specifies the name of the Shared Image Gallery in which this Shared Image should exist. Changing this forces a new resource to be created.
        :param kulado.Input[dict] identifier: An `identifier` block as defined below.
        :param kulado.Input[str] location: Specifies the supported Azure location where the Shared Image Gallery exists. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: Specifies the name of the Shared Image. Changing this forces a new resource to be created.
        :param kulado.Input[str] os_type: The type of Operating System present in this Shared Image. Possible values are `Linux` and `Windows`.
        :param kulado.Input[str] privacy_statement_uri: The URI containing the Privacy Statement associated with this Shared Image.
        :param kulado.Input[str] release_note_uri: The URI containing the Release Notes associated with this Shared Image.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the Shared Image.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/shared_image.html.markdown.
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

        __props__['eula'] = eula

        if gallery_name is None:
            raise TypeError("Missing required property 'gallery_name'")
        __props__['gallery_name'] = gallery_name

        if identifier is None:
            raise TypeError("Missing required property 'identifier'")
        __props__['identifier'] = identifier

        __props__['location'] = location

        __props__['name'] = name

        if os_type is None:
            raise TypeError("Missing required property 'os_type'")
        __props__['os_type'] = os_type

        __props__['privacy_statement_uri'] = privacy_statement_uri

        __props__['release_note_uri'] = release_note_uri

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['tags'] = tags

        super(SharedImage, __self__).__init__(
            'azure:compute/sharedImage:SharedImage',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

