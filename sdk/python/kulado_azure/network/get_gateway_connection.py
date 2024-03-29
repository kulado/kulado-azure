# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import kulado
import kulado.runtime
from .. import utilities, tables

class GetGatewayConnectionResult:
    """
    A collection of values returned by getGatewayConnection.
    """
    def __init__(__self__, authorization_key=None, connection_protocol=None, egress_bytes_transferred=None, enable_bgp=None, express_route_circuit_id=None, express_route_gateway_bypass=None, ingress_bytes_transferred=None, ipsec_policies=None, local_network_gateway_id=None, location=None, name=None, peer_virtual_network_gateway_id=None, resource_group_name=None, resource_guid=None, routing_weight=None, shared_key=None, tags=None, type=None, use_policy_based_traffic_selectors=None, virtual_network_gateway_id=None, id=None):
        if authorization_key and not isinstance(authorization_key, str):
            raise TypeError("Expected argument 'authorization_key' to be a str")
        __self__.authorization_key = authorization_key
        """
        The authorization key associated with the
        Express Route Circuit. This field is present only if the type is an
        ExpressRoute connection.
        """
        if connection_protocol and not isinstance(connection_protocol, str):
            raise TypeError("Expected argument 'connection_protocol' to be a str")
        __self__.connection_protocol = connection_protocol
        if egress_bytes_transferred and not isinstance(egress_bytes_transferred, float):
            raise TypeError("Expected argument 'egress_bytes_transferred' to be a float")
        __self__.egress_bytes_transferred = egress_bytes_transferred
        if enable_bgp and not isinstance(enable_bgp, bool):
            raise TypeError("Expected argument 'enable_bgp' to be a bool")
        __self__.enable_bgp = enable_bgp
        """
        If `true`, BGP (Border Gateway Protocol) is enabled
        for this connection.
        """
        if express_route_circuit_id and not isinstance(express_route_circuit_id, str):
            raise TypeError("Expected argument 'express_route_circuit_id' to be a str")
        __self__.express_route_circuit_id = express_route_circuit_id
        """
        The ID of the Express Route Circuit
        (i.e. when `type` is `ExpressRoute`).
        """
        if express_route_gateway_bypass and not isinstance(express_route_gateway_bypass, bool):
            raise TypeError("Expected argument 'express_route_gateway_bypass' to be a bool")
        __self__.express_route_gateway_bypass = express_route_gateway_bypass
        """
        If `true`, data packets will bypass ExpressRoute Gateway for data forwarding. This is only valid for ExpressRoute connections.
        """
        if ingress_bytes_transferred and not isinstance(ingress_bytes_transferred, float):
            raise TypeError("Expected argument 'ingress_bytes_transferred' to be a float")
        __self__.ingress_bytes_transferred = ingress_bytes_transferred
        if ipsec_policies and not isinstance(ipsec_policies, list):
            raise TypeError("Expected argument 'ipsec_policies' to be a list")
        __self__.ipsec_policies = ipsec_policies
        if local_network_gateway_id and not isinstance(local_network_gateway_id, str):
            raise TypeError("Expected argument 'local_network_gateway_id' to be a str")
        __self__.local_network_gateway_id = local_network_gateway_id
        """
        The ID of the local network gateway
        when a Site-to-Site connection (i.e. when `type` is `IPsec`).
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        """
        The location/region where the connection is
        located.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if peer_virtual_network_gateway_id and not isinstance(peer_virtual_network_gateway_id, str):
            raise TypeError("Expected argument 'peer_virtual_network_gateway_id' to be a str")
        __self__.peer_virtual_network_gateway_id = peer_virtual_network_gateway_id
        """
        The ID of the peer virtual
        network gateway when a VNet-to-VNet connection (i.e. when `type`
        is `Vnet2Vnet`).
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if resource_guid and not isinstance(resource_guid, str):
            raise TypeError("Expected argument 'resource_guid' to be a str")
        __self__.resource_guid = resource_guid
        if routing_weight and not isinstance(routing_weight, float):
            raise TypeError("Expected argument 'routing_weight' to be a float")
        __self__.routing_weight = routing_weight
        """
        The routing weight.
        """
        if shared_key and not isinstance(shared_key, str):
            raise TypeError("Expected argument 'shared_key' to be a str")
        __self__.shared_key = shared_key
        """
        The shared IPSec key. 
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        (Optional) A mapping of tags to assign to the resource.
        """
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        __self__.type = type
        """
        The type of connection. Valid options are `IPsec`
        (Site-to-Site), `ExpressRoute` (ExpressRoute), and `Vnet2Vnet` (VNet-to-VNet).
        """
        if use_policy_based_traffic_selectors and not isinstance(use_policy_based_traffic_selectors, bool):
            raise TypeError("Expected argument 'use_policy_based_traffic_selectors' to be a bool")
        __self__.use_policy_based_traffic_selectors = use_policy_based_traffic_selectors
        """
        If `true`, policy-based traffic
        selectors are enabled for this connection. Enabling policy-based traffic
        selectors requires an `ipsec_policy` block.
        """
        if virtual_network_gateway_id and not isinstance(virtual_network_gateway_id, str):
            raise TypeError("Expected argument 'virtual_network_gateway_id' to be a str")
        __self__.virtual_network_gateway_id = virtual_network_gateway_id
        """
        The ID of the Virtual Network Gateway
        in which the connection is created.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_gateway_connection(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing Virtual Network Gateway Connection.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/virtual_network_gateway_connection.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await kulado.runtime.invoke('azure:network/getGatewayConnection:getGatewayConnection', __args__, opts=opts)

    return GetGatewayConnectionResult(
        authorization_key=__ret__.get('authorizationKey'),
        connection_protocol=__ret__.get('connectionProtocol'),
        egress_bytes_transferred=__ret__.get('egressBytesTransferred'),
        enable_bgp=__ret__.get('enableBgp'),
        express_route_circuit_id=__ret__.get('expressRouteCircuitId'),
        express_route_gateway_bypass=__ret__.get('expressRouteGatewayBypass'),
        ingress_bytes_transferred=__ret__.get('ingressBytesTransferred'),
        ipsec_policies=__ret__.get('ipsecPolicies'),
        local_network_gateway_id=__ret__.get('localNetworkGatewayId'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        peer_virtual_network_gateway_id=__ret__.get('peerVirtualNetworkGatewayId'),
        resource_group_name=__ret__.get('resourceGroupName'),
        resource_guid=__ret__.get('resourceGuid'),
        routing_weight=__ret__.get('routingWeight'),
        shared_key=__ret__.get('sharedKey'),
        tags=__ret__.get('tags'),
        type=__ret__.get('type'),
        use_policy_based_traffic_selectors=__ret__.get('usePolicyBasedTrafficSelectors'),
        virtual_network_gateway_id=__ret__.get('virtualNetworkGatewayId'),
        id=__ret__.get('id'))
