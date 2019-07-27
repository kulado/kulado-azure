// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iot

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages an IotHub Shared Access Policy
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub_shared_access_policy.html.markdown.
type SharedAccessPolicy struct {
	s *kulado.ResourceState
}

// NewSharedAccessPolicy registers a new resource with the given unique name, arguments, and options.
func NewSharedAccessPolicy(ctx *kulado.Context,
	name string, args *SharedAccessPolicyArgs, opts ...kulado.ResourceOpt) (*SharedAccessPolicy, error) {
	if args == nil || args.IothubName == nil {
		return nil, errors.New("missing required argument 'IothubName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["deviceConnect"] = nil
		inputs["iothubName"] = nil
		inputs["name"] = nil
		inputs["registryRead"] = nil
		inputs["registryWrite"] = nil
		inputs["resourceGroupName"] = nil
		inputs["serviceConnect"] = nil
	} else {
		inputs["deviceConnect"] = args.DeviceConnect
		inputs["iothubName"] = args.IothubName
		inputs["name"] = args.Name
		inputs["registryRead"] = args.RegistryRead
		inputs["registryWrite"] = args.RegistryWrite
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["serviceConnect"] = args.ServiceConnect
	}
	inputs["primaryConnectionString"] = nil
	inputs["primaryKey"] = nil
	inputs["secondaryConnectionString"] = nil
	inputs["secondaryKey"] = nil
	s, err := ctx.RegisterResource("azure:iot/sharedAccessPolicy:SharedAccessPolicy", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SharedAccessPolicy{s: s}, nil
}

// GetSharedAccessPolicy gets an existing SharedAccessPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSharedAccessPolicy(ctx *kulado.Context,
	name string, id kulado.ID, state *SharedAccessPolicyState, opts ...kulado.ResourceOpt) (*SharedAccessPolicy, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["deviceConnect"] = state.DeviceConnect
		inputs["iothubName"] = state.IothubName
		inputs["name"] = state.Name
		inputs["primaryConnectionString"] = state.PrimaryConnectionString
		inputs["primaryKey"] = state.PrimaryKey
		inputs["registryRead"] = state.RegistryRead
		inputs["registryWrite"] = state.RegistryWrite
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["secondaryConnectionString"] = state.SecondaryConnectionString
		inputs["secondaryKey"] = state.SecondaryKey
		inputs["serviceConnect"] = state.ServiceConnect
	}
	s, err := ctx.ReadResource("azure:iot/sharedAccessPolicy:SharedAccessPolicy", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SharedAccessPolicy{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *SharedAccessPolicy) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *SharedAccessPolicy) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Adds `DeviceConnect` permission to this Shared Access Account. It allows sending and receiving on the device-side endpoints.
func (r *SharedAccessPolicy) DeviceConnect() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["deviceConnect"])
}

// The name of the IoTHub to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
func (r *SharedAccessPolicy) IothubName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["iothubName"])
}

// Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
func (r *SharedAccessPolicy) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The primary connection string of the Shared Access Policy.
func (r *SharedAccessPolicy) PrimaryConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryConnectionString"])
}

// The primary key used to create the authentication token.
func (r *SharedAccessPolicy) PrimaryKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryKey"])
}

// Adds `RegistryRead` permission to this Shared Access Account. It allows read access to the identity registry.
func (r *SharedAccessPolicy) RegistryRead() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["registryRead"])
}

// Adds `RegistryWrite` permission to this Shared Access Account. It allows write access to the identity registry.
func (r *SharedAccessPolicy) RegistryWrite() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["registryWrite"])
}

// The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
func (r *SharedAccessPolicy) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The secondary connection string of the Shared Access Policy.
func (r *SharedAccessPolicy) SecondaryConnectionString() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryConnectionString"])
}

// The secondary key used to create the authentication token.
func (r *SharedAccessPolicy) SecondaryKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryKey"])
}

// Adds `ServiceConnect` permission to this Shared Access Account. It allows sending and receiving on the cloud-side endpoints.
func (r *SharedAccessPolicy) ServiceConnect() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["serviceConnect"])
}

// Input properties used for looking up and filtering SharedAccessPolicy resources.
type SharedAccessPolicyState struct {
	// Adds `DeviceConnect` permission to this Shared Access Account. It allows sending and receiving on the device-side endpoints.
	DeviceConnect interface{}
	// The name of the IoTHub to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
	IothubName interface{}
	// Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
	Name interface{}
	// The primary connection string of the Shared Access Policy.
	PrimaryConnectionString interface{}
	// The primary key used to create the authentication token.
	PrimaryKey interface{}
	// Adds `RegistryRead` permission to this Shared Access Account. It allows read access to the identity registry.
	RegistryRead interface{}
	// Adds `RegistryWrite` permission to this Shared Access Account. It allows write access to the identity registry.
	RegistryWrite interface{}
	// The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The secondary connection string of the Shared Access Policy.
	SecondaryConnectionString interface{}
	// The secondary key used to create the authentication token.
	SecondaryKey interface{}
	// Adds `ServiceConnect` permission to this Shared Access Account. It allows sending and receiving on the cloud-side endpoints.
	ServiceConnect interface{}
}

// The set of arguments for constructing a SharedAccessPolicy resource.
type SharedAccessPolicyArgs struct {
	// Adds `DeviceConnect` permission to this Shared Access Account. It allows sending and receiving on the device-side endpoints.
	DeviceConnect interface{}
	// The name of the IoTHub to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
	IothubName interface{}
	// Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
	Name interface{}
	// Adds `RegistryRead` permission to this Shared Access Account. It allows read access to the identity registry.
	RegistryRead interface{}
	// Adds `RegistryWrite` permission to this Shared Access Account. It allows write access to the identity registry.
	RegistryWrite interface{}
	// The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Adds `ServiceConnect` permission to this Shared Access Account. It allows sending and receiving on the cloud-side endpoints.
	ServiceConnect interface{}
}
