// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages an Authorization Server within an API Management Service.
 * 
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const exampleAuthorizationServer = new azure.apimanagement.AuthorizationServer("example", {
 *     apiManagementName: azurerm_api_management_example.name,
 *     authorizationEndpoint: "https://example.mydomain.com/client/authorize",
 *     clientId: "42424242-4242-4242-4242-424242424242",
 *     clientRegistrationEndpoint: "https://example.mydomain.com/client/register",
 *     displayName: "Test Server",
 *     grantTypes: ["authorizationCode"],
 *     name: "test-server",
 *     resourceGroupName: azurerm_api_management_example.resourceGroupName,
 * });
 * const exampleApi = kulado.output(azure.apimanagement.getApi({
 *     apiManagementName: "search-api-management",
 *     name: "search-api",
 *     resourceGroupName: "search-service",
 *     revision: "2",
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_authorization_server.html.markdown.
 */
export class AuthorizationServer extends kulado.CustomResource {
    /**
     * Get an existing AuthorizationServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: AuthorizationServerState, opts?: kulado.CustomResourceOptions): AuthorizationServer {
        return new AuthorizationServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:apimanagement/authorizationServer:AuthorizationServer';

    /**
     * Returns true if the given object is an instance of AuthorizationServer.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthorizationServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === AuthorizationServer.__kuladoType;
    }

    /**
     * The name of the API Management Service in which this Authorization Server should be created. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName!: kulado.Output<string>;
    /**
     * The OAUTH Authorization Endpoint.
     */
    public readonly authorizationEndpoint!: kulado.Output<string>;
    /**
     * The HTTP Verbs supported by the Authorization Endpoint. Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`.
     */
    public readonly authorizationMethods!: kulado.Output<string[]>;
    /**
     * The mechanism by which Access Tokens are passed to the API. Possible values are `authorizationHeader` and `query`.
     */
    public readonly bearerTokenSendingMethods!: kulado.Output<string[] | undefined>;
    /**
     * The Authentication Methods supported by the Token endpoint of this Authorization Server.. Possible values are `Basic` and `Body`.
     */
    public readonly clientAuthenticationMethods!: kulado.Output<string[] | undefined>;
    /**
     * The Client/App ID registered with this Authorization Server.
     */
    public readonly clientId!: kulado.Output<string>;
    /**
     * The URI of page where Client/App Registration is performed for this Authorization Server.
     */
    public readonly clientRegistrationEndpoint!: kulado.Output<string>;
    /**
     * The Client/App Secret registered with this Authorization Server.
     */
    public readonly clientSecret!: kulado.Output<string | undefined>;
    /**
     * The Default Scope used when requesting an Access Token, specified as a string containing space-delimited values.
     */
    public readonly defaultScope!: kulado.Output<string | undefined>;
    /**
     * A description of the Authorization Server, which may contain HTML formatting tags.
     */
    public readonly description!: kulado.Output<string | undefined>;
    /**
     * The user-friendly name of this Authorization Server.
     */
    public readonly displayName!: kulado.Output<string>;
    /**
     * Form of Authorization Grants required when requesting an Access Token. Possible values are `authorizationCode`, `clientCredentials`, `implicit` and `resourceOwnerPassword`.
     */
    public readonly grantTypes!: kulado.Output<string[]>;
    /**
     * The name of this Authorization Server. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The password associated with the Resource Owner.
     */
    public readonly resourceOwnerPassword!: kulado.Output<string | undefined>;
    /**
     * The username associated with the Resource Owner.
     */
    public readonly resourceOwnerUsername!: kulado.Output<string | undefined>;
    /**
     * Does this Authorization Server support State? If this is set to `true` the client may use the state parameter to raise protocol security.
     */
    public readonly supportState!: kulado.Output<boolean | undefined>;
    public readonly tokenBodyParameters!: kulado.Output<{ name: string, value: string }[] | undefined>;
    /**
     * The OAUTH Token Endpoint.
     */
    public readonly tokenEndpoint!: kulado.Output<string | undefined>;

    /**
     * Create a AuthorizationServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationServerArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuthorizationServerArgs | AuthorizationServerState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AuthorizationServerState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["authorizationEndpoint"] = state ? state.authorizationEndpoint : undefined;
            inputs["authorizationMethods"] = state ? state.authorizationMethods : undefined;
            inputs["bearerTokenSendingMethods"] = state ? state.bearerTokenSendingMethods : undefined;
            inputs["clientAuthenticationMethods"] = state ? state.clientAuthenticationMethods : undefined;
            inputs["clientId"] = state ? state.clientId : undefined;
            inputs["clientRegistrationEndpoint"] = state ? state.clientRegistrationEndpoint : undefined;
            inputs["clientSecret"] = state ? state.clientSecret : undefined;
            inputs["defaultScope"] = state ? state.defaultScope : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["grantTypes"] = state ? state.grantTypes : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["resourceOwnerPassword"] = state ? state.resourceOwnerPassword : undefined;
            inputs["resourceOwnerUsername"] = state ? state.resourceOwnerUsername : undefined;
            inputs["supportState"] = state ? state.supportState : undefined;
            inputs["tokenBodyParameters"] = state ? state.tokenBodyParameters : undefined;
            inputs["tokenEndpoint"] = state ? state.tokenEndpoint : undefined;
        } else {
            const args = argsOrState as AuthorizationServerArgs | undefined;
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.authorizationEndpoint === undefined) {
                throw new Error("Missing required property 'authorizationEndpoint'");
            }
            if (!args || args.authorizationMethods === undefined) {
                throw new Error("Missing required property 'authorizationMethods'");
            }
            if (!args || args.clientId === undefined) {
                throw new Error("Missing required property 'clientId'");
            }
            if (!args || args.clientRegistrationEndpoint === undefined) {
                throw new Error("Missing required property 'clientRegistrationEndpoint'");
            }
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.grantTypes === undefined) {
                throw new Error("Missing required property 'grantTypes'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["authorizationEndpoint"] = args ? args.authorizationEndpoint : undefined;
            inputs["authorizationMethods"] = args ? args.authorizationMethods : undefined;
            inputs["bearerTokenSendingMethods"] = args ? args.bearerTokenSendingMethods : undefined;
            inputs["clientAuthenticationMethods"] = args ? args.clientAuthenticationMethods : undefined;
            inputs["clientId"] = args ? args.clientId : undefined;
            inputs["clientRegistrationEndpoint"] = args ? args.clientRegistrationEndpoint : undefined;
            inputs["clientSecret"] = args ? args.clientSecret : undefined;
            inputs["defaultScope"] = args ? args.defaultScope : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["grantTypes"] = args ? args.grantTypes : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceOwnerPassword"] = args ? args.resourceOwnerPassword : undefined;
            inputs["resourceOwnerUsername"] = args ? args.resourceOwnerUsername : undefined;
            inputs["supportState"] = args ? args.supportState : undefined;
            inputs["tokenBodyParameters"] = args ? args.tokenBodyParameters : undefined;
            inputs["tokenEndpoint"] = args ? args.tokenEndpoint : undefined;
        }
        super(AuthorizationServer.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AuthorizationServer resources.
 */
export interface AuthorizationServerState {
    /**
     * The name of the API Management Service in which this Authorization Server should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName?: kulado.Input<string>;
    /**
     * The OAUTH Authorization Endpoint.
     */
    readonly authorizationEndpoint?: kulado.Input<string>;
    /**
     * The HTTP Verbs supported by the Authorization Endpoint. Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`.
     */
    readonly authorizationMethods?: kulado.Input<kulado.Input<string>[]>;
    /**
     * The mechanism by which Access Tokens are passed to the API. Possible values are `authorizationHeader` and `query`.
     */
    readonly bearerTokenSendingMethods?: kulado.Input<kulado.Input<string>[]>;
    /**
     * The Authentication Methods supported by the Token endpoint of this Authorization Server.. Possible values are `Basic` and `Body`.
     */
    readonly clientAuthenticationMethods?: kulado.Input<kulado.Input<string>[]>;
    /**
     * The Client/App ID registered with this Authorization Server.
     */
    readonly clientId?: kulado.Input<string>;
    /**
     * The URI of page where Client/App Registration is performed for this Authorization Server.
     */
    readonly clientRegistrationEndpoint?: kulado.Input<string>;
    /**
     * The Client/App Secret registered with this Authorization Server.
     */
    readonly clientSecret?: kulado.Input<string>;
    /**
     * The Default Scope used when requesting an Access Token, specified as a string containing space-delimited values.
     */
    readonly defaultScope?: kulado.Input<string>;
    /**
     * A description of the Authorization Server, which may contain HTML formatting tags.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The user-friendly name of this Authorization Server.
     */
    readonly displayName?: kulado.Input<string>;
    /**
     * Form of Authorization Grants required when requesting an Access Token. Possible values are `authorizationCode`, `clientCredentials`, `implicit` and `resourceOwnerPassword`.
     */
    readonly grantTypes?: kulado.Input<kulado.Input<string>[]>;
    /**
     * The name of this Authorization Server. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The password associated with the Resource Owner.
     */
    readonly resourceOwnerPassword?: kulado.Input<string>;
    /**
     * The username associated with the Resource Owner.
     */
    readonly resourceOwnerUsername?: kulado.Input<string>;
    /**
     * Does this Authorization Server support State? If this is set to `true` the client may use the state parameter to raise protocol security.
     */
    readonly supportState?: kulado.Input<boolean>;
    readonly tokenBodyParameters?: kulado.Input<kulado.Input<{ name: kulado.Input<string>, value: kulado.Input<string> }>[]>;
    /**
     * The OAUTH Token Endpoint.
     */
    readonly tokenEndpoint?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a AuthorizationServer resource.
 */
export interface AuthorizationServerArgs {
    /**
     * The name of the API Management Service in which this Authorization Server should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: kulado.Input<string>;
    /**
     * The OAUTH Authorization Endpoint.
     */
    readonly authorizationEndpoint: kulado.Input<string>;
    /**
     * The HTTP Verbs supported by the Authorization Endpoint. Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`.
     */
    readonly authorizationMethods: kulado.Input<kulado.Input<string>[]>;
    /**
     * The mechanism by which Access Tokens are passed to the API. Possible values are `authorizationHeader` and `query`.
     */
    readonly bearerTokenSendingMethods?: kulado.Input<kulado.Input<string>[]>;
    /**
     * The Authentication Methods supported by the Token endpoint of this Authorization Server.. Possible values are `Basic` and `Body`.
     */
    readonly clientAuthenticationMethods?: kulado.Input<kulado.Input<string>[]>;
    /**
     * The Client/App ID registered with this Authorization Server.
     */
    readonly clientId: kulado.Input<string>;
    /**
     * The URI of page where Client/App Registration is performed for this Authorization Server.
     */
    readonly clientRegistrationEndpoint: kulado.Input<string>;
    /**
     * The Client/App Secret registered with this Authorization Server.
     */
    readonly clientSecret?: kulado.Input<string>;
    /**
     * The Default Scope used when requesting an Access Token, specified as a string containing space-delimited values.
     */
    readonly defaultScope?: kulado.Input<string>;
    /**
     * A description of the Authorization Server, which may contain HTML formatting tags.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The user-friendly name of this Authorization Server.
     */
    readonly displayName: kulado.Input<string>;
    /**
     * Form of Authorization Grants required when requesting an Access Token. Possible values are `authorizationCode`, `clientCredentials`, `implicit` and `resourceOwnerPassword`.
     */
    readonly grantTypes: kulado.Input<kulado.Input<string>[]>;
    /**
     * The name of this Authorization Server. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * The password associated with the Resource Owner.
     */
    readonly resourceOwnerPassword?: kulado.Input<string>;
    /**
     * The username associated with the Resource Owner.
     */
    readonly resourceOwnerUsername?: kulado.Input<string>;
    /**
     * Does this Authorization Server support State? If this is set to `true` the client may use the state parameter to raise protocol security.
     */
    readonly supportState?: kulado.Input<boolean>;
    readonly tokenBodyParameters?: kulado.Input<kulado.Input<{ name: kulado.Input<string>, value: kulado.Input<string> }>[]>;
    /**
     * The OAUTH Token Endpoint.
     */
    readonly tokenEndpoint?: kulado.Input<string>;
}