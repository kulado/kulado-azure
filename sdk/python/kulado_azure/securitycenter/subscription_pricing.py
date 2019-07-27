# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class SubscriptionPricing(kulado.CustomResource):
    tier: kulado.Output[str]
    """
    The pricing tier to use. Possible values are `Free` and `Standard`.
    """
    def __init__(__self__, resource_name, opts=None, tier=None, __name__=None, __opts__=None):
        """
        Manages the Pricing Tier for Azure Security Center in the current subscription.
        
        > **NOTE:** This resource requires the `Owner` permission on the Subscription.
        
        > **NOTE:** Deletion of this resource does not change or reset the pricing tier to `Free`
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] tier: The pricing tier to use. Possible values are `Free` and `Standard`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/security_center_subscription_pricing.html.markdown.
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

        if tier is None:
            raise TypeError("Missing required property 'tier'")
        __props__['tier'] = tier

        super(SubscriptionPricing, __self__).__init__(
            'azure:securitycenter/subscriptionPricing:SubscriptionPricing',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
