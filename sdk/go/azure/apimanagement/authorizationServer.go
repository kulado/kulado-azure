// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apimanagement

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages an Authorization Server within an API Management Service.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_authorization_server.html.markdown.
type AuthorizationServer struct {
	s *kulado.ResourceState
}

// NewAuthorizationServer registers a new resource with the given unique name, arguments, and options.
func NewAuthorizationServer(ctx *kulado.Context,
	name string, args *AuthorizationServerArgs, opts ...kulado.ResourceOpt) (*AuthorizationServer, error) {
	if args == nil || args.ApiManagementName == nil {
		return nil, errors.New("missing required argument 'ApiManagementName'")
	}
	if args == nil || args.AuthorizationEndpoint == nil {
		return nil, errors.New("missing required argument 'AuthorizationEndpoint'")
	}
	if args == nil || args.AuthorizationMethods == nil {
		return nil, errors.New("missing required argument 'AuthorizationMethods'")
	}
	if args == nil || args.ClientId == nil {
		return nil, errors.New("missing required argument 'ClientId'")
	}
	if args == nil || args.ClientRegistrationEndpoint == nil {
		return nil, errors.New("missing required argument 'ClientRegistrationEndpoint'")
	}
	if args == nil || args.DisplayName == nil {
		return nil, errors.New("missing required argument 'DisplayName'")
	}
	if args == nil || args.GrantTypes == nil {
		return nil, errors.New("missing required argument 'GrantTypes'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["apiManagementName"] = nil
		inputs["authorizationEndpoint"] = nil
		inputs["authorizationMethods"] = nil
		inputs["bearerTokenSendingMethods"] = nil
		inputs["clientAuthenticationMethods"] = nil
		inputs["clientId"] = nil
		inputs["clientRegistrationEndpoint"] = nil
		inputs["clientSecret"] = nil
		inputs["defaultScope"] = nil
		inputs["description"] = nil
		inputs["displayName"] = nil
		inputs["grantTypes"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["resourceOwnerPassword"] = nil
		inputs["resourceOwnerUsername"] = nil
		inputs["supportState"] = nil
		inputs["tokenBodyParameters"] = nil
		inputs["tokenEndpoint"] = nil
	} else {
		inputs["apiManagementName"] = args.ApiManagementName
		inputs["authorizationEndpoint"] = args.AuthorizationEndpoint
		inputs["authorizationMethods"] = args.AuthorizationMethods
		inputs["bearerTokenSendingMethods"] = args.BearerTokenSendingMethods
		inputs["clientAuthenticationMethods"] = args.ClientAuthenticationMethods
		inputs["clientId"] = args.ClientId
		inputs["clientRegistrationEndpoint"] = args.ClientRegistrationEndpoint
		inputs["clientSecret"] = args.ClientSecret
		inputs["defaultScope"] = args.DefaultScope
		inputs["description"] = args.Description
		inputs["displayName"] = args.DisplayName
		inputs["grantTypes"] = args.GrantTypes
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["resourceOwnerPassword"] = args.ResourceOwnerPassword
		inputs["resourceOwnerUsername"] = args.ResourceOwnerUsername
		inputs["supportState"] = args.SupportState
		inputs["tokenBodyParameters"] = args.TokenBodyParameters
		inputs["tokenEndpoint"] = args.TokenEndpoint
	}
	s, err := ctx.RegisterResource("azure:apimanagement/authorizationServer:AuthorizationServer", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &AuthorizationServer{s: s}, nil
}

// GetAuthorizationServer gets an existing AuthorizationServer resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAuthorizationServer(ctx *kulado.Context,
	name string, id kulado.ID, state *AuthorizationServerState, opts ...kulado.ResourceOpt) (*AuthorizationServer, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["apiManagementName"] = state.ApiManagementName
		inputs["authorizationEndpoint"] = state.AuthorizationEndpoint
		inputs["authorizationMethods"] = state.AuthorizationMethods
		inputs["bearerTokenSendingMethods"] = state.BearerTokenSendingMethods
		inputs["clientAuthenticationMethods"] = state.ClientAuthenticationMethods
		inputs["clientId"] = state.ClientId
		inputs["clientRegistrationEndpoint"] = state.ClientRegistrationEndpoint
		inputs["clientSecret"] = state.ClientSecret
		inputs["defaultScope"] = state.DefaultScope
		inputs["description"] = state.Description
		inputs["displayName"] = state.DisplayName
		inputs["grantTypes"] = state.GrantTypes
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["resourceOwnerPassword"] = state.ResourceOwnerPassword
		inputs["resourceOwnerUsername"] = state.ResourceOwnerUsername
		inputs["supportState"] = state.SupportState
		inputs["tokenBodyParameters"] = state.TokenBodyParameters
		inputs["tokenEndpoint"] = state.TokenEndpoint
	}
	s, err := ctx.ReadResource("azure:apimanagement/authorizationServer:AuthorizationServer", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &AuthorizationServer{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *AuthorizationServer) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *AuthorizationServer) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The name of the API Management Service in which this Authorization Server should be created. Changing this forces a new resource to be created.
func (r *AuthorizationServer) ApiManagementName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["apiManagementName"])
}

// The OAUTH Authorization Endpoint.
func (r *AuthorizationServer) AuthorizationEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["authorizationEndpoint"])
}

// The HTTP Verbs supported by the Authorization Endpoint. Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`.
func (r *AuthorizationServer) AuthorizationMethods() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["authorizationMethods"])
}

// The mechanism by which Access Tokens are passed to the API. Possible values are `authorizationHeader` and `query`.
func (r *AuthorizationServer) BearerTokenSendingMethods() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["bearerTokenSendingMethods"])
}

// The Authentication Methods supported by the Token endpoint of this Authorization Server.. Possible values are `Basic` and `Body`.
func (r *AuthorizationServer) ClientAuthenticationMethods() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["clientAuthenticationMethods"])
}

// The Client/App ID registered with this Authorization Server.
func (r *AuthorizationServer) ClientId() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["clientId"])
}

// The URI of page where Client/App Registration is performed for this Authorization Server.
func (r *AuthorizationServer) ClientRegistrationEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["clientRegistrationEndpoint"])
}

// The Client/App Secret registered with this Authorization Server.
func (r *AuthorizationServer) ClientSecret() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["clientSecret"])
}

// The Default Scope used when requesting an Access Token, specified as a string containing space-delimited values.
func (r *AuthorizationServer) DefaultScope() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["defaultScope"])
}

// A description of the Authorization Server, which may contain HTML formatting tags.
func (r *AuthorizationServer) Description() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["description"])
}

// The user-friendly name of this Authorization Server.
func (r *AuthorizationServer) DisplayName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["displayName"])
}

// Form of Authorization Grants required when requesting an Access Token. Possible values are `authorizationCode`, `clientCredentials`, `implicit` and `resourceOwnerPassword`.
func (r *AuthorizationServer) GrantTypes() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["grantTypes"])
}

// The name of this Authorization Server. Changing this forces a new resource to be created.
func (r *AuthorizationServer) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
func (r *AuthorizationServer) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The password associated with the Resource Owner.
func (r *AuthorizationServer) ResourceOwnerPassword() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceOwnerPassword"])
}

// The username associated with the Resource Owner.
func (r *AuthorizationServer) ResourceOwnerUsername() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceOwnerUsername"])
}

// Does this Authorization Server support State? If this is set to `true` the client may use the state parameter to raise protocol security.
func (r *AuthorizationServer) SupportState() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["supportState"])
}

func (r *AuthorizationServer) TokenBodyParameters() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["tokenBodyParameters"])
}

// The OAUTH Token Endpoint.
func (r *AuthorizationServer) TokenEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["tokenEndpoint"])
}

// Input properties used for looking up and filtering AuthorizationServer resources.
type AuthorizationServerState struct {
	// The name of the API Management Service in which this Authorization Server should be created. Changing this forces a new resource to be created.
	ApiManagementName interface{}
	// The OAUTH Authorization Endpoint.
	AuthorizationEndpoint interface{}
	// The HTTP Verbs supported by the Authorization Endpoint. Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`.
	AuthorizationMethods interface{}
	// The mechanism by which Access Tokens are passed to the API. Possible values are `authorizationHeader` and `query`.
	BearerTokenSendingMethods interface{}
	// The Authentication Methods supported by the Token endpoint of this Authorization Server.. Possible values are `Basic` and `Body`.
	ClientAuthenticationMethods interface{}
	// The Client/App ID registered with this Authorization Server.
	ClientId interface{}
	// The URI of page where Client/App Registration is performed for this Authorization Server.
	ClientRegistrationEndpoint interface{}
	// The Client/App Secret registered with this Authorization Server.
	ClientSecret interface{}
	// The Default Scope used when requesting an Access Token, specified as a string containing space-delimited values.
	DefaultScope interface{}
	// A description of the Authorization Server, which may contain HTML formatting tags.
	Description interface{}
	// The user-friendly name of this Authorization Server.
	DisplayName interface{}
	// Form of Authorization Grants required when requesting an Access Token. Possible values are `authorizationCode`, `clientCredentials`, `implicit` and `resourceOwnerPassword`.
	GrantTypes interface{}
	// The name of this Authorization Server. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The password associated with the Resource Owner.
	ResourceOwnerPassword interface{}
	// The username associated with the Resource Owner.
	ResourceOwnerUsername interface{}
	// Does this Authorization Server support State? If this is set to `true` the client may use the state parameter to raise protocol security.
	SupportState interface{}
	TokenBodyParameters interface{}
	// The OAUTH Token Endpoint.
	TokenEndpoint interface{}
}

// The set of arguments for constructing a AuthorizationServer resource.
type AuthorizationServerArgs struct {
	// The name of the API Management Service in which this Authorization Server should be created. Changing this forces a new resource to be created.
	ApiManagementName interface{}
	// The OAUTH Authorization Endpoint.
	AuthorizationEndpoint interface{}
	// The HTTP Verbs supported by the Authorization Endpoint. Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`.
	AuthorizationMethods interface{}
	// The mechanism by which Access Tokens are passed to the API. Possible values are `authorizationHeader` and `query`.
	BearerTokenSendingMethods interface{}
	// The Authentication Methods supported by the Token endpoint of this Authorization Server.. Possible values are `Basic` and `Body`.
	ClientAuthenticationMethods interface{}
	// The Client/App ID registered with this Authorization Server.
	ClientId interface{}
	// The URI of page where Client/App Registration is performed for this Authorization Server.
	ClientRegistrationEndpoint interface{}
	// The Client/App Secret registered with this Authorization Server.
	ClientSecret interface{}
	// The Default Scope used when requesting an Access Token, specified as a string containing space-delimited values.
	DefaultScope interface{}
	// A description of the Authorization Server, which may contain HTML formatting tags.
	Description interface{}
	// The user-friendly name of this Authorization Server.
	DisplayName interface{}
	// Form of Authorization Grants required when requesting an Access Token. Possible values are `authorizationCode`, `clientCredentials`, `implicit` and `resourceOwnerPassword`.
	GrantTypes interface{}
	// The name of this Authorization Server. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The password associated with the Resource Owner.
	ResourceOwnerPassword interface{}
	// The username associated with the Resource Owner.
	ResourceOwnerUsername interface{}
	// Does this Authorization Server support State? If this is set to `true` the client may use the state parameter to raise protocol security.
	SupportState interface{}
	TokenBodyParameters interface{}
	// The OAUTH Token Endpoint.
	TokenEndpoint interface{}
}
