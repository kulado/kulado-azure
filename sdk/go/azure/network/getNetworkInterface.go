// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Use this data source to access information about an existing Network Interface.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/network_interface.html.markdown.
func LookupNetworkInterface(ctx *kulado.Context, args *GetNetworkInterfaceArgs) (*GetNetworkInterfaceResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:network/getNetworkInterface:getNetworkInterface", inputs)
	if err != nil {
		return nil, err
	}
	return &GetNetworkInterfaceResult{
		AppliedDnsServers: outputs["appliedDnsServers"],
		DnsServers: outputs["dnsServers"],
		EnableAcceleratedNetworking: outputs["enableAcceleratedNetworking"],
		EnableIpForwarding: outputs["enableIpForwarding"],
		InternalDnsNameLabel: outputs["internalDnsNameLabel"],
		InternalFqdn: outputs["internalFqdn"],
		IpConfigurations: outputs["ipConfigurations"],
		Location: outputs["location"],
		MacAddress: outputs["macAddress"],
		Name: outputs["name"],
		NetworkSecurityGroupId: outputs["networkSecurityGroupId"],
		PrivateIpAddress: outputs["privateIpAddress"],
		PrivateIpAddresses: outputs["privateIpAddresses"],
		ResourceGroupName: outputs["resourceGroupName"],
		Tags: outputs["tags"],
		VirtualMachineId: outputs["virtualMachineId"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getNetworkInterface.
type GetNetworkInterfaceArgs struct {
	// Specifies the name of the Network Interface.
	Name interface{}
	// Specifies the name of the resource group the Network Interface is located in.
	ResourceGroupName interface{}
}

// A collection of values returned by getNetworkInterface.
type GetNetworkInterfaceResult struct {
	// List of DNS servers applied to the specified Network Interface.
	AppliedDnsServers interface{}
	// The list of DNS servers used by the specified Network Interface.
	DnsServers interface{}
	// Indicates if accelerated networking is set on the specified Network Interface.
	EnableAcceleratedNetworking interface{}
	// Indicate if IP forwarding is set on the specified Network Interface.
	EnableIpForwarding interface{}
	// The internal dns name label of the specified Network Interface.
	InternalDnsNameLabel interface{}
	InternalFqdn interface{}
	// One or more `ip_configuration` blocks as defined below.
	IpConfigurations interface{}
	// The location of the specified Network Interface.
	Location interface{}
	// The MAC address used by the specified Network Interface.
	MacAddress interface{}
	// The name of the IP Configuration.
	Name interface{}
	// The ID of the network security group associated to the specified Network Interface.
	NetworkSecurityGroupId interface{}
	// The Private IP Address assigned to this Network Interface.
	PrivateIpAddress interface{}
	// The list of private ip addresses associates to the specified Network Interface.
	PrivateIpAddresses interface{}
	ResourceGroupName interface{}
	// List the tags associated to the specified Network Interface.
	Tags interface{}
	// The ID of the virtual machine that the specified Network Interface is attached to.
	VirtualMachineId interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}