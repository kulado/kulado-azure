# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class Contact(kulado.CustomResource):
    alert_notifications: kulado.Output[bool]
    """
    Whether to send security alerts notifications to the security contact.
    """
    alerts_to_admins: kulado.Output[bool]
    """
    Whether to send security alerts notifications to subscription admins.
    """
    email: kulado.Output[str]
    """
    The email of the Security Center Contact.
    """
    phone: kulado.Output[str]
    """
    The phone number of the Security Center Contact.
    """
    def __init__(__self__, resource_name, opts=None, alert_notifications=None, alerts_to_admins=None, email=None, phone=None, __name__=None, __opts__=None):
        """
        Manages the subscription's Security Center Contact.
        
        > **NOTE:** Owner access permission is required. 
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[bool] alert_notifications: Whether to send security alerts notifications to the security contact.
        :param kulado.Input[bool] alerts_to_admins: Whether to send security alerts notifications to subscription admins.
        :param kulado.Input[str] email: The email of the Security Center Contact.
        :param kulado.Input[str] phone: The phone number of the Security Center Contact.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/security_center_contact.html.markdown.
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

        if alert_notifications is None:
            raise TypeError("Missing required property 'alert_notifications'")
        __props__['alert_notifications'] = alert_notifications

        if alerts_to_admins is None:
            raise TypeError("Missing required property 'alerts_to_admins'")
        __props__['alerts_to_admins'] = alerts_to_admins

        if email is None:
            raise TypeError("Missing required property 'email'")
        __props__['email'] = email

        if phone is None:
            raise TypeError("Missing required property 'phone'")
        __props__['phone'] = phone

        super(Contact, __self__).__init__(
            'azure:securitycenter/contact:Contact',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

