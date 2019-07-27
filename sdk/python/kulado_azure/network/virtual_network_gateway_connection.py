# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class VirtualNetworkGatewayConnection(kulado.CustomResource):
    authorization_key: kulado.Output[str]
    """
    The authorization key associated with the
    Express Route Circuit. This field is required only if the type is an
    ExpressRoute connection.
    """
    enable_bgp: kulado.Output[bool]
    """
    If `true`, BGP (Border Gateway Protocol) is enabled
    for this connection. Defaults to `false`.
    """
    express_route_circuit_id: kulado.Output[str]
    """
    The ID of the Express Route Circuit
    when creating an ExpressRoute connection (i.e. when `type` is `ExpressRoute`).
    The Express Route Circuit can be in the same or in a different subscription.
    """
    express_route_gateway_bypass: kulado.Output[bool]
    """
    If `true`, data packets will bypass ExpressRoute Gateway for data forwarding This is only valid for ExpressRoute connections.
    """
    ipsec_policy: kulado.Output[dict]
    """
    A `ipsec_policy` block which is documented below.
    Only a single policy can be defined for a connection. For details on
    custom policies refer to [the relevant section in the Azure documentation](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-ipsecikepolicy-rm-powershell).
    """
    local_network_gateway_id: kulado.Output[str]
    """
    The ID of the local network gateway
    when creating Site-to-Site connection (i.e. when `type` is `IPsec`).
    """
    location: kulado.Output[str]
    """
    The location/region where the connection is
    located. Changing this forces a new resource to be created.
    """
    name: kulado.Output[str]
    """
    The name of the connection. Changing the name forces a
    new resource to be created.
    """
    peer_virtual_network_gateway_id: kulado.Output[str]
    """
    The ID of the peer virtual
    network gateway when creating a VNet-to-VNet connection (i.e. when `type`
    is `Vnet2Vnet`). The peer Virtual Network Gateway can be in the same or
    in a different subscription.
    """
    resource_group_name: kulado.Output[str]
    """
    The name of the resource group in which to
    create the connection Changing the name forces a new resource to be created.
    """
    routing_weight: kulado.Output[float]
    """
    The routing weight. Defaults to `10`.
    """
    shared_key: kulado.Output[str]
    """
    The shared IPSec key. A key must be provided if a
    Site-to-Site or VNet-to-VNet connection is created whereas ExpressRoute
    connections do not need a shared key.
    """
    tags: kulado.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    type: kulado.Output[str]
    """
    The type of connection. Valid options are `IPsec`
    (Site-to-Site), `ExpressRoute` (ExpressRoute), and `Vnet2Vnet` (VNet-to-VNet).
    Each connection type requires different mandatory arguments (refer to the
    examples above). Changing the connection type will force a new connection
    to be created.
    """
    use_policy_based_traffic_selectors: kulado.Output[bool]
    """
    If `true`, policy-based traffic
    selectors are enabled for this connection. Enabling policy-based traffic
    selectors requires an `ipsec_policy` block. Defaults to `false`.
    """
    virtual_network_gateway_id: kulado.Output[str]
    """
    The ID of the Virtual Network Gateway
    in which the connection will be created. Changing the gateway forces a new
    resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, authorization_key=None, enable_bgp=None, express_route_circuit_id=None, express_route_gateway_bypass=None, ipsec_policy=None, local_network_gateway_id=None, location=None, name=None, peer_virtual_network_gateway_id=None, resource_group_name=None, routing_weight=None, shared_key=None, tags=None, type=None, use_policy_based_traffic_selectors=None, virtual_network_gateway_id=None, __name__=None, __opts__=None):
        """
        Manages a connection in an existing Virtual Network Gateway.
        
        :param str resource_name: The name of the resource.
        :param kulado.ResourceOptions opts: Options for the resource.
        :param kulado.Input[str] authorization_key: The authorization key associated with the
               Express Route Circuit. This field is required only if the type is an
               ExpressRoute connection.
        :param kulado.Input[bool] enable_bgp: If `true`, BGP (Border Gateway Protocol) is enabled
               for this connection. Defaults to `false`.
        :param kulado.Input[str] express_route_circuit_id: The ID of the Express Route Circuit
               when creating an ExpressRoute connection (i.e. when `type` is `ExpressRoute`).
               The Express Route Circuit can be in the same or in a different subscription.
        :param kulado.Input[bool] express_route_gateway_bypass: If `true`, data packets will bypass ExpressRoute Gateway for data forwarding This is only valid for ExpressRoute connections.
        :param kulado.Input[dict] ipsec_policy: A `ipsec_policy` block which is documented below.
               Only a single policy can be defined for a connection. For details on
               custom policies refer to [the relevant section in the Azure documentation](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-ipsecikepolicy-rm-powershell).
        :param kulado.Input[str] local_network_gateway_id: The ID of the local network gateway
               when creating Site-to-Site connection (i.e. when `type` is `IPsec`).
        :param kulado.Input[str] location: The location/region where the connection is
               located. Changing this forces a new resource to be created.
        :param kulado.Input[str] name: The name of the connection. Changing the name forces a
               new resource to be created.
        :param kulado.Input[str] peer_virtual_network_gateway_id: The ID of the peer virtual
               network gateway when creating a VNet-to-VNet connection (i.e. when `type`
               is `Vnet2Vnet`). The peer Virtual Network Gateway can be in the same or
               in a different subscription.
        :param kulado.Input[str] resource_group_name: The name of the resource group in which to
               create the connection Changing the name forces a new resource to be created.
        :param kulado.Input[float] routing_weight: The routing weight. Defaults to `10`.
        :param kulado.Input[str] shared_key: The shared IPSec key. A key must be provided if a
               Site-to-Site or VNet-to-VNet connection is created whereas ExpressRoute
               connections do not need a shared key.
        :param kulado.Input[dict] tags: A mapping of tags to assign to the resource.
        :param kulado.Input[str] type: The type of connection. Valid options are `IPsec`
               (Site-to-Site), `ExpressRoute` (ExpressRoute), and `Vnet2Vnet` (VNet-to-VNet).
               Each connection type requires different mandatory arguments (refer to the
               examples above). Changing the connection type will force a new connection
               to be created.
        :param kulado.Input[bool] use_policy_based_traffic_selectors: If `true`, policy-based traffic
               selectors are enabled for this connection. Enabling policy-based traffic
               selectors requires an `ipsec_policy` block. Defaults to `false`.
        :param kulado.Input[str] virtual_network_gateway_id: The ID of the Virtual Network Gateway
               in which the connection will be created. Changing the gateway forces a new
               resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_network_gateway_connection.html.markdown.
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

        __props__['authorization_key'] = authorization_key

        __props__['enable_bgp'] = enable_bgp

        __props__['express_route_circuit_id'] = express_route_circuit_id

        __props__['express_route_gateway_bypass'] = express_route_gateway_bypass

        __props__['ipsec_policy'] = ipsec_policy

        __props__['local_network_gateway_id'] = local_network_gateway_id

        __props__['location'] = location

        __props__['name'] = name

        __props__['peer_virtual_network_gateway_id'] = peer_virtual_network_gateway_id

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['routing_weight'] = routing_weight

        __props__['shared_key'] = shared_key

        __props__['tags'] = tags

        if type is None:
            raise TypeError("Missing required property 'type'")
        __props__['type'] = type

        __props__['use_policy_based_traffic_selectors'] = use_policy_based_traffic_selectors

        if virtual_network_gateway_id is None:
            raise TypeError("Missing required property 'virtual_network_gateway_id'")
        __props__['virtual_network_gateway_id'] = virtual_network_gateway_id

        super(VirtualNetworkGatewayConnection, __self__).__init__(
            'azure:network/virtualNetworkGatewayConnection:VirtualNetworkGatewayConnection',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
