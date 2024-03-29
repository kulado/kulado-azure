# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Certificate(kulado.CustomResource):
    account_name: kulado.Output[str]
    """
    Specifies the name of the Batch account. Changing this forces a new resource to be created.
    """
    certificate: kulado.Output[str]
    """
    The base64-encoded contents of the certificate.
    """
    format: kulado.Output[str]
    """
    The format of the certificate. Possible values are `Cer` or `Pfx`.
    """
    name: kulado.Output[str]
    """
    The generated name of the certificate.
    """
    password: kulado.Output[str]
    """
    The password to access the certificate's private key. This must and can only be specified when `format` is `Pfx`.
    """
    public_data: kulado.Output[str]
    """
    The public key of the certificate.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
    """
    thumbprint: kulado.Output[str]
    """
    The thumbprint of the certificate. At this time the only supported value is 'SHA1'.
    """
    thumbprint_algorithm: kulado.Output[str]
    def __init__(__self__, resource_name, opts=None, account_name=None, certificate=None, format=None, password=None, resource_group_name=None, thumbprint=None, thumbprint_algorithm=None, __name__=None, __opts__=None):
        """
        Manages a certificate in an Azure Batch account.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] account_name: Specifies the name of the Batch account. Changing this forces a new resource to be created.
        :param kulado.Input[str] certificate: The base64-encoded contents of the certificate.
        :param kulado.Input[str] format: The format of the certificate. Possible values are `Cer` or `Pfx`.
        :param kulado.Input[str] password: The password to access the certificate's private key. This must and can only be specified when `format` is `Pfx`.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
        :param kulado.Input[str] thumbprint: The thumbprint of the certificate. At this time the only supported value is 'SHA1'.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/batch_certificate.html.markdown.
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

        if account_name is None:
            raise TypeError("Missing required property 'account_name'")
        __props__['account_name'] = account_name

        if certificate is None:
            raise TypeError("Missing required property 'certificate'")
        __props__['certificate'] = certificate

        if format is None:
            raise TypeError("Missing required property 'format'")
        __props__['format'] = format

        __props__['password'] = password

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if thumbprint is None:
            raise TypeError("Missing required property 'thumbprint'")
        __props__['thumbprint'] = thumbprint

        if thumbprint_algorithm is None:
            raise TypeError("Missing required property 'thumbprint_algorithm'")
        __props__['thumbprint_algorithm'] = thumbprint_algorithm

        __props__['name'] = None
        __props__['public_data'] = None

        super(Certificate, __self__).__init__(
            'azure:batch/certificate:Certificate',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

