# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class ExpressRouteCircuitPeering(kulado.CustomResource):
    azure_asn: kulado.Output[float]
    """
    The ASN used by Azure.
    """
    express_route_circuit_name: kulado.Output[str]
    """
    The name of the ExpressRoute Circuit in which to create the Peering.
    """
    microsoft_peering_config: kulado.Output[dict]
    """
    A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
    """
    peer_asn: kulado.Output[float]
    """
    The Either a 16-bit or a 32-bit ASN. Can either be public or private..
    """
    peering_type: kulado.Output[str]
    """
    The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
    """
    primary_azure_port: kulado.Output[str]
    """
    The Primary Port used by Azure for this Peering.
    """
    primary_peer_address_prefix: kulado.Output[str]
    """
    A `/30` subnet for the primary link.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to
    create the Express Route Circuit Peering. Changing this forces a new resource to be created.
    """
    secondary_azure_port: kulado.Output[str]
    """
    The Secondary Port used by Azure for this Peering.
    """
    secondary_peer_address_prefix: kulado.Output[str]
    """
    A `/30` subnet for the secondary link.
    """
    shared_key: kulado.Output[str]
    """
    The shared key. Can be a maximum of 25 characters.
    """
    vlan_id: kulado.Output[float]
    """
    A valid VLAN ID to establish this peering on.
    """
    def __init__(__self__, resource_name, opts=None, express_route_circuit_name=None, microsoft_peering_config=None, peer_asn=None, peering_type=None, primary_peer_address_prefix=None, resource_group_name=None, secondary_peer_address_prefix=None, shared_key=None, vlan_id=None, __name__=None, __opts__=None):
        """
        Manages an ExpressRoute Circuit Peering.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] express_route_circuit_name: The name of the ExpressRoute Circuit in which to create the Peering.
        :param kulado.Input[dict] microsoft_peering_config: A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
        :param kulado.Input[float] peer_asn: The Either a 16-bit or a 32-bit ASN. Can either be public or private..
        :param kulado.Input[str] peering_type: The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
        :param kulado.Input[str] primary_peer_address_prefix: A `/30` subnet for the primary link.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to
               create the Express Route Circuit Peering. Changing this forces a new resource to be created.
        :param kulado.Input[str] secondary_peer_address_prefix: A `/30` subnet for the secondary link.
        :param kulado.Input[str] shared_key: The shared key. Can be a maximum of 25 characters.
        :param kulado.Input[float] vlan_id: A valid VLAN ID to establish this peering on.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/express_route_circuit_peering.html.markdown.
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

        if express_route_circuit_name is None:
            raise TypeError("Missing required property 'express_route_circuit_name'")
        __props__['express_route_circuit_name'] = express_route_circuit_name

        __props__['microsoft_peering_config'] = microsoft_peering_config

        __props__['peer_asn'] = peer_asn

        if peering_type is None:
            raise TypeError("Missing required property 'peering_type'")
        __props__['peering_type'] = peering_type

        if primary_peer_address_prefix is None:
            raise TypeError("Missing required property 'primary_peer_address_prefix'")
        __props__['primary_peer_address_prefix'] = primary_peer_address_prefix

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if secondary_peer_address_prefix is None:
            raise TypeError("Missing required property 'secondary_peer_address_prefix'")
        __props__['secondary_peer_address_prefix'] = secondary_peer_address_prefix

        __props__['shared_key'] = shared_key

        if vlan_id is None:
            raise TypeError("Missing required property 'vlan_id'")
        __props__['vlan_id'] = vlan_id

        __props__['azure_asn'] = None
        __props__['primary_azure_port'] = None
        __props__['secondary_azure_port'] = None

        super(ExpressRouteCircuitPeering, __self__).__init__(
            'azure:network/expressRouteCircuitPeering:ExpressRouteCircuitPeering',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
