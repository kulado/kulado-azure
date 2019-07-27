// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apimanagement

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages an API Management Service.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management.html.markdown.
type Service struct {
	s *kulado.ResourceState
}

// NewService registers a new resource with the given unique name, arguments, and options.
func NewService(ctx *kulado.Context,
	name string, args *ServiceArgs, opts ...kulado.ResourceOpt) (*Service, error) {
	if args == nil || args.PublisherEmail == nil {
		return nil, errors.New("missing required argument 'PublisherEmail'")
	}
	if args == nil || args.PublisherName == nil {
		return nil, errors.New("missing required argument 'PublisherName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Sku == nil {
		return nil, errors.New("missing required argument 'Sku'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["additionalLocation"] = nil
		inputs["certificates"] = nil
		inputs["hostnameConfiguration"] = nil
		inputs["identity"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["notificationSenderEmail"] = nil
		inputs["policy"] = nil
		inputs["publisherEmail"] = nil
		inputs["publisherName"] = nil
		inputs["resourceGroupName"] = nil
		inputs["security"] = nil
		inputs["signIn"] = nil
		inputs["signUp"] = nil
		inputs["sku"] = nil
		inputs["tags"] = nil
	} else {
		inputs["additionalLocation"] = args.AdditionalLocation
		inputs["certificates"] = args.Certificates
		inputs["hostnameConfiguration"] = args.HostnameConfiguration
		inputs["identity"] = args.Identity
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["notificationSenderEmail"] = args.NotificationSenderEmail
		inputs["policy"] = args.Policy
		inputs["publisherEmail"] = args.PublisherEmail
		inputs["publisherName"] = args.PublisherName
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["security"] = args.Security
		inputs["signIn"] = args.SignIn
		inputs["signUp"] = args.SignUp
		inputs["sku"] = args.Sku
		inputs["tags"] = args.Tags
	}
	inputs["gatewayRegionalUrl"] = nil
	inputs["gatewayUrl"] = nil
	inputs["managementApiUrl"] = nil
	inputs["portalUrl"] = nil
	inputs["publicIpAddresses"] = nil
	inputs["scmUrl"] = nil
	s, err := ctx.RegisterResource("azure:apimanagement/service:Service", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// GetService gets an existing Service resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetService(ctx *kulado.Context,
	name string, id kulado.ID, state *ServiceState, opts ...kulado.ResourceOpt) (*Service, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["additionalLocation"] = state.AdditionalLocation
		inputs["certificates"] = state.Certificates
		inputs["gatewayRegionalUrl"] = state.GatewayRegionalUrl
		inputs["gatewayUrl"] = state.GatewayUrl
		inputs["hostnameConfiguration"] = state.HostnameConfiguration
		inputs["identity"] = state.Identity
		inputs["location"] = state.Location
		inputs["managementApiUrl"] = state.ManagementApiUrl
		inputs["name"] = state.Name
		inputs["notificationSenderEmail"] = state.NotificationSenderEmail
		inputs["policy"] = state.Policy
		inputs["portalUrl"] = state.PortalUrl
		inputs["publicIpAddresses"] = state.PublicIpAddresses
		inputs["publisherEmail"] = state.PublisherEmail
		inputs["publisherName"] = state.PublisherName
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["scmUrl"] = state.ScmUrl
		inputs["security"] = state.Security
		inputs["signIn"] = state.SignIn
		inputs["signUp"] = state.SignUp
		inputs["sku"] = state.Sku
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:apimanagement/service:Service", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Service) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Service) ID() *kulado.IDOutput {
	return r.s.ID()
}

// One or more `additional_location` blocks as defined below.
func (r *Service) AdditionalLocation() *kulado.Output {
	return r.s.State["additionalLocation"]
}

// One or more (up to 10) `certificate` blocks as defined below.
func (r *Service) Certificates() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["certificates"])
}

// The URL of the Regional Gateway for the API Management Service in the specified region.
func (r *Service) GatewayRegionalUrl() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["gatewayRegionalUrl"])
}

// The URL of the Gateway for the API Management Service.
func (r *Service) GatewayUrl() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["gatewayUrl"])
}

// A `hostname_configuration` block as defined below.
func (r *Service) HostnameConfiguration() *kulado.Output {
	return r.s.State["hostnameConfiguration"]
}

// An `identity` block is documented below.
func (r *Service) Identity() *kulado.Output {
	return r.s.State["identity"]
}

// The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
func (r *Service) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// The URL for the Management API associated with this API Management service.
func (r *Service) ManagementApiUrl() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["managementApiUrl"])
}

// The name of the API Management Service. Changing this forces a new resource to be created.
func (r *Service) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// Email address from which the notification will be sent.
func (r *Service) NotificationSenderEmail() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["notificationSenderEmail"])
}

// A `policy` block as defined below.
func (r *Service) Policy() *kulado.Output {
	return r.s.State["policy"]
}

// The URL for the Publisher Portal associated with this API Management service.
func (r *Service) PortalUrl() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["portalUrl"])
}

// Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
func (r *Service) PublicIpAddresses() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["publicIpAddresses"])
}

// The email of publisher/company.
func (r *Service) PublisherEmail() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["publisherEmail"])
}

// The name of publisher/company.
func (r *Service) PublisherName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["publisherName"])
}

// The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
func (r *Service) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The URL for the SCM (Source Code Management) Endpoint associated with this API Management service.
func (r *Service) ScmUrl() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["scmUrl"])
}

// A `security` block as defined below.
func (r *Service) Security() *kulado.Output {
	return r.s.State["security"]
}

// A `sign_in` block as defined below.
func (r *Service) SignIn() *kulado.Output {
	return r.s.State["signIn"]
}

// A `sign_up` block as defined below.
func (r *Service) SignUp() *kulado.Output {
	return r.s.State["signUp"]
}

// A `sku` block as documented below.
func (r *Service) Sku() *kulado.Output {
	return r.s.State["sku"]
}

// A mapping of tags assigned to the resource.
func (r *Service) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Service resources.
type ServiceState struct {
	// One or more `additional_location` blocks as defined below.
	AdditionalLocation interface{}
	// One or more (up to 10) `certificate` blocks as defined below.
	Certificates interface{}
	// The URL of the Regional Gateway for the API Management Service in the specified region.
	GatewayRegionalUrl interface{}
	// The URL of the Gateway for the API Management Service.
	GatewayUrl interface{}
	// A `hostname_configuration` block as defined below.
	HostnameConfiguration interface{}
	// An `identity` block is documented below.
	Identity interface{}
	// The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
	Location interface{}
	// The URL for the Management API associated with this API Management service.
	ManagementApiUrl interface{}
	// The name of the API Management Service. Changing this forces a new resource to be created.
	Name interface{}
	// Email address from which the notification will be sent.
	NotificationSenderEmail interface{}
	// A `policy` block as defined below.
	Policy interface{}
	// The URL for the Publisher Portal associated with this API Management service.
	PortalUrl interface{}
	// Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
	PublicIpAddresses interface{}
	// The email of publisher/company.
	PublisherEmail interface{}
	// The name of publisher/company.
	PublisherName interface{}
	// The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The URL for the SCM (Source Code Management) Endpoint associated with this API Management service.
	ScmUrl interface{}
	// A `security` block as defined below.
	Security interface{}
	// A `sign_in` block as defined below.
	SignIn interface{}
	// A `sign_up` block as defined below.
	SignUp interface{}
	// A `sku` block as documented below.
	Sku interface{}
	// A mapping of tags assigned to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Service resource.
type ServiceArgs struct {
	// One or more `additional_location` blocks as defined below.
	AdditionalLocation interface{}
	// One or more (up to 10) `certificate` blocks as defined below.
	Certificates interface{}
	// A `hostname_configuration` block as defined below.
	HostnameConfiguration interface{}
	// An `identity` block is documented below.
	Identity interface{}
	// The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
	Location interface{}
	// The name of the API Management Service. Changing this forces a new resource to be created.
	Name interface{}
	// Email address from which the notification will be sent.
	NotificationSenderEmail interface{}
	// A `policy` block as defined below.
	Policy interface{}
	// The email of publisher/company.
	PublisherEmail interface{}
	// The name of publisher/company.
	PublisherName interface{}
	// The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `security` block as defined below.
	Security interface{}
	// A `sign_in` block as defined below.
	SignIn interface{}
	// A `sign_up` block as defined below.
	SignUp interface{}
	// A `sku` block as documented below.
	Sku interface{}
	// A mapping of tags assigned to the resource.
	Tags interface{}
}
