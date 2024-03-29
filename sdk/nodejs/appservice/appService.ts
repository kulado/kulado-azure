// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/app_service.html.markdown.
 */
export class AppService extends kulado.CustomResource {
    /**
     * Get an existing AppService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: AppServiceState, opts?: kulado.CustomResourceOptions): AppService {
        return new AppService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:appservice/appService:AppService';

    /**
     * Returns true if the given object is an instance of AppService.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === AppService.__kuladoType;
    }

    /**
     * The ID of the App Service Plan within which to create this App Service.
     */
    public readonly appServicePlanId!: kulado.Output<string>;
    /**
     * A key-value pair of App Settings.
     */
    public readonly appSettings!: kulado.Output<{[key: string]: any}>;
    /**
     * A `auth_settings` block as defined below.
     */
    public readonly authSettings!: kulado.Output<{ activeDirectory?: { allowedAudiences?: string[], clientId: string, clientSecret?: string }, additionalLoginParams?: {[key: string]: any}, allowedExternalRedirectUrls?: string[], defaultProvider?: string, enabled: boolean, facebook?: { appId: string, appSecret: string, oauthScopes?: string[] }, google?: { clientId: string, clientSecret: string, oauthScopes?: string[] }, issuer?: string, microsoft?: { clientId: string, clientSecret: string, oauthScopes?: string[] }, runtimeVersion?: string, tokenRefreshExtensionHours?: number, tokenStoreEnabled?: boolean, twitter?: { consumerKey: string, consumerSecret: string }, unauthenticatedClientAction?: string }>;
    /**
     * Should the App Service send session affinity cookies, which route client requests in the same session to the same instance?
     */
    public readonly clientAffinityEnabled!: kulado.Output<boolean>;
    /**
     * Does the App Service require client certificates for incoming requests? Defaults to `false`.
     */
    public readonly clientCertEnabled!: kulado.Output<boolean | undefined>;
    /**
     * One or more `connection_string` blocks as defined below.
     */
    public readonly connectionStrings!: kulado.Output<{ name: string, type: string, value: string }[]>;
    /**
     * The Default Hostname associated with the App Service - such as `mysite.azurewebsites.net`
     */
    public /*out*/ readonly defaultSiteHostname!: kulado.Output<string>;
    /**
     * Is the App Service Enabled?
     */
    public readonly enabled!: kulado.Output<boolean | undefined>;
    /**
     * Can the App Service only be accessed via HTTPS? Defaults to `false`.
     */
    public readonly httpsOnly!: kulado.Output<boolean | undefined>;
    /**
     * A Managed Service Identity block as defined below.
     */
    public readonly identity!: kulado.Output<{ principalId: string, tenantId: string, type: string }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * A `logs` block as defined below.
     */
    public readonly logs!: kulado.Output<{ applicationLogs?: { azureBlobStorage?: { level: string, retentionInDays: number, sasUrl: string } } }>;
    /**
     * Specifies the name of the App Service. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
     */
    public /*out*/ readonly outboundIpAddresses!: kulado.Output<string>;
    /**
     * A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outbound_ip_addresses`.
     */
    public /*out*/ readonly possibleOutboundIpAddresses!: kulado.Output<string>;
    /**
     * The name of the resource group in which to create the App Service.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A `site_config` block as defined below.
     */
    public readonly siteConfig!: kulado.Output<{ alwaysOn?: boolean, appCommandLine?: string, cors: { allowedOrigins: string[], supportCredentials?: boolean }, defaultDocuments?: string[], dotnetFrameworkVersion?: string, ftpsState: string, http2Enabled?: boolean, ipRestrictions: { ipAddress: string, subnetMask?: string }[], javaContainer?: string, javaContainerVersion?: string, javaVersion?: string, linuxFxVersion: string, localMysqlEnabled: boolean, managedPipelineMode: string, minTlsVersion: string, phpVersion?: string, pythonVersion?: string, remoteDebuggingEnabled?: boolean, remoteDebuggingVersion: string, scmType?: string, use32BitWorkerProcess?: boolean, virtualNetworkName?: string, websocketsEnabled: boolean, windowsFxVersion: string }>;
    /**
     * A `site_credential` block as defined below, which contains the site-level credentials used to publish to this App Service.
     */
    public /*out*/ readonly siteCredential!: kulado.Output<{ password: string, username: string }>;
    /**
     * A `source_control` block as defined below, which contains the Source Control information when `scm_type` is set to `LocalGit`.
     */
    public /*out*/ readonly sourceControl!: kulado.Output<{ branch: string, repoUrl: string }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;

    /**
     * Create a AppService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServiceArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppServiceArgs | AppServiceState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AppServiceState | undefined;
            inputs["appServicePlanId"] = state ? state.appServicePlanId : undefined;
            inputs["appSettings"] = state ? state.appSettings : undefined;
            inputs["authSettings"] = state ? state.authSettings : undefined;
            inputs["clientAffinityEnabled"] = state ? state.clientAffinityEnabled : undefined;
            inputs["clientCertEnabled"] = state ? state.clientCertEnabled : undefined;
            inputs["connectionStrings"] = state ? state.connectionStrings : undefined;
            inputs["defaultSiteHostname"] = state ? state.defaultSiteHostname : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["httpsOnly"] = state ? state.httpsOnly : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["logs"] = state ? state.logs : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["outboundIpAddresses"] = state ? state.outboundIpAddresses : undefined;
            inputs["possibleOutboundIpAddresses"] = state ? state.possibleOutboundIpAddresses : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["siteConfig"] = state ? state.siteConfig : undefined;
            inputs["siteCredential"] = state ? state.siteCredential : undefined;
            inputs["sourceControl"] = state ? state.sourceControl : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as AppServiceArgs | undefined;
            if (!args || args.appServicePlanId === undefined) {
                throw new Error("Missing required property 'appServicePlanId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["appServicePlanId"] = args ? args.appServicePlanId : undefined;
            inputs["appSettings"] = args ? args.appSettings : undefined;
            inputs["authSettings"] = args ? args.authSettings : undefined;
            inputs["clientAffinityEnabled"] = args ? args.clientAffinityEnabled : undefined;
            inputs["clientCertEnabled"] = args ? args.clientCertEnabled : undefined;
            inputs["connectionStrings"] = args ? args.connectionStrings : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["httpsOnly"] = args ? args.httpsOnly : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["logs"] = args ? args.logs : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["siteConfig"] = args ? args.siteConfig : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["defaultSiteHostname"] = undefined /*out*/;
            inputs["outboundIpAddresses"] = undefined /*out*/;
            inputs["possibleOutboundIpAddresses"] = undefined /*out*/;
            inputs["siteCredential"] = undefined /*out*/;
            inputs["sourceControl"] = undefined /*out*/;
        }
        super(AppService.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AppService resources.
 */
export interface AppServiceState {
    /**
     * The ID of the App Service Plan within which to create this App Service.
     */
    readonly appServicePlanId?: kulado.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    readonly appSettings?: kulado.Input<{[key: string]: any}>;
    /**
     * A `auth_settings` block as defined below.
     */
    readonly authSettings?: kulado.Input<{ activeDirectory?: kulado.Input<{ allowedAudiences?: kulado.Input<kulado.Input<string>[]>, clientId: kulado.Input<string>, clientSecret?: kulado.Input<string> }>, additionalLoginParams?: kulado.Input<{[key: string]: any}>, allowedExternalRedirectUrls?: kulado.Input<kulado.Input<string>[]>, defaultProvider?: kulado.Input<string>, enabled: kulado.Input<boolean>, facebook?: kulado.Input<{ appId: kulado.Input<string>, appSecret: kulado.Input<string>, oauthScopes?: kulado.Input<kulado.Input<string>[]> }>, google?: kulado.Input<{ clientId: kulado.Input<string>, clientSecret: kulado.Input<string>, oauthScopes?: kulado.Input<kulado.Input<string>[]> }>, issuer?: kulado.Input<string>, microsoft?: kulado.Input<{ clientId: kulado.Input<string>, clientSecret: kulado.Input<string>, oauthScopes?: kulado.Input<kulado.Input<string>[]> }>, runtimeVersion?: kulado.Input<string>, tokenRefreshExtensionHours?: kulado.Input<number>, tokenStoreEnabled?: kulado.Input<boolean>, twitter?: kulado.Input<{ consumerKey: kulado.Input<string>, consumerSecret: kulado.Input<string> }>, unauthenticatedClientAction?: kulado.Input<string> }>;
    /**
     * Should the App Service send session affinity cookies, which route client requests in the same session to the same instance?
     */
    readonly clientAffinityEnabled?: kulado.Input<boolean>;
    /**
     * Does the App Service require client certificates for incoming requests? Defaults to `false`.
     */
    readonly clientCertEnabled?: kulado.Input<boolean>;
    /**
     * One or more `connection_string` blocks as defined below.
     */
    readonly connectionStrings?: kulado.Input<kulado.Input<{ name: kulado.Input<string>, type: kulado.Input<string>, value: kulado.Input<string> }>[]>;
    /**
     * The Default Hostname associated with the App Service - such as `mysite.azurewebsites.net`
     */
    readonly defaultSiteHostname?: kulado.Input<string>;
    /**
     * Is the App Service Enabled?
     */
    readonly enabled?: kulado.Input<boolean>;
    /**
     * Can the App Service only be accessed via HTTPS? Defaults to `false`.
     */
    readonly httpsOnly?: kulado.Input<boolean>;
    /**
     * A Managed Service Identity block as defined below.
     */
    readonly identity?: kulado.Input<{ principalId?: kulado.Input<string>, tenantId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * A `logs` block as defined below.
     */
    readonly logs?: kulado.Input<{ applicationLogs?: kulado.Input<{ azureBlobStorage?: kulado.Input<{ level: kulado.Input<string>, retentionInDays: kulado.Input<number>, sasUrl: kulado.Input<string> }> }> }>;
    /**
     * Specifies the name of the App Service. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
     */
    readonly outboundIpAddresses?: kulado.Input<string>;
    /**
     * A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outbound_ip_addresses`.
     */
    readonly possibleOutboundIpAddresses?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the App Service.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A `site_config` block as defined below.
     */
    readonly siteConfig?: kulado.Input<{ alwaysOn?: kulado.Input<boolean>, appCommandLine?: kulado.Input<string>, cors?: kulado.Input<{ allowedOrigins: kulado.Input<kulado.Input<string>[]>, supportCredentials?: kulado.Input<boolean> }>, defaultDocuments?: kulado.Input<kulado.Input<string>[]>, dotnetFrameworkVersion?: kulado.Input<string>, ftpsState?: kulado.Input<string>, http2Enabled?: kulado.Input<boolean>, ipRestrictions?: kulado.Input<kulado.Input<{ ipAddress: kulado.Input<string>, subnetMask?: kulado.Input<string> }>[]>, javaContainer?: kulado.Input<string>, javaContainerVersion?: kulado.Input<string>, javaVersion?: kulado.Input<string>, linuxFxVersion?: kulado.Input<string>, localMysqlEnabled?: kulado.Input<boolean>, managedPipelineMode?: kulado.Input<string>, minTlsVersion?: kulado.Input<string>, phpVersion?: kulado.Input<string>, pythonVersion?: kulado.Input<string>, remoteDebuggingEnabled?: kulado.Input<boolean>, remoteDebuggingVersion?: kulado.Input<string>, scmType?: kulado.Input<string>, use32BitWorkerProcess?: kulado.Input<boolean>, virtualNetworkName?: kulado.Input<string>, websocketsEnabled?: kulado.Input<boolean>, windowsFxVersion?: kulado.Input<string> }>;
    /**
     * A `site_credential` block as defined below, which contains the site-level credentials used to publish to this App Service.
     */
    readonly siteCredential?: kulado.Input<{ password?: kulado.Input<string>, username?: kulado.Input<string> }>;
    /**
     * A `source_control` block as defined below, which contains the Source Control information when `scm_type` is set to `LocalGit`.
     */
    readonly sourceControl?: kulado.Input<{ branch?: kulado.Input<string>, repoUrl?: kulado.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a AppService resource.
 */
export interface AppServiceArgs {
    /**
     * The ID of the App Service Plan within which to create this App Service.
     */
    readonly appServicePlanId: kulado.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    readonly appSettings?: kulado.Input<{[key: string]: any}>;
    /**
     * A `auth_settings` block as defined below.
     */
    readonly authSettings?: kulado.Input<{ activeDirectory?: kulado.Input<{ allowedAudiences?: kulado.Input<kulado.Input<string>[]>, clientId: kulado.Input<string>, clientSecret?: kulado.Input<string> }>, additionalLoginParams?: kulado.Input<{[key: string]: any}>, allowedExternalRedirectUrls?: kulado.Input<kulado.Input<string>[]>, defaultProvider?: kulado.Input<string>, enabled: kulado.Input<boolean>, facebook?: kulado.Input<{ appId: kulado.Input<string>, appSecret: kulado.Input<string>, oauthScopes?: kulado.Input<kulado.Input<string>[]> }>, google?: kulado.Input<{ clientId: kulado.Input<string>, clientSecret: kulado.Input<string>, oauthScopes?: kulado.Input<kulado.Input<string>[]> }>, issuer?: kulado.Input<string>, microsoft?: kulado.Input<{ clientId: kulado.Input<string>, clientSecret: kulado.Input<string>, oauthScopes?: kulado.Input<kulado.Input<string>[]> }>, runtimeVersion?: kulado.Input<string>, tokenRefreshExtensionHours?: kulado.Input<number>, tokenStoreEnabled?: kulado.Input<boolean>, twitter?: kulado.Input<{ consumerKey: kulado.Input<string>, consumerSecret: kulado.Input<string> }>, unauthenticatedClientAction?: kulado.Input<string> }>;
    /**
     * Should the App Service send session affinity cookies, which route client requests in the same session to the same instance?
     */
    readonly clientAffinityEnabled?: kulado.Input<boolean>;
    /**
     * Does the App Service require client certificates for incoming requests? Defaults to `false`.
     */
    readonly clientCertEnabled?: kulado.Input<boolean>;
    /**
     * One or more `connection_string` blocks as defined below.
     */
    readonly connectionStrings?: kulado.Input<kulado.Input<{ name: kulado.Input<string>, type: kulado.Input<string>, value: kulado.Input<string> }>[]>;
    /**
     * Is the App Service Enabled?
     */
    readonly enabled?: kulado.Input<boolean>;
    /**
     * Can the App Service only be accessed via HTTPS? Defaults to `false`.
     */
    readonly httpsOnly?: kulado.Input<boolean>;
    /**
     * A Managed Service Identity block as defined below.
     */
    readonly identity?: kulado.Input<{ principalId?: kulado.Input<string>, tenantId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * A `logs` block as defined below.
     */
    readonly logs?: kulado.Input<{ applicationLogs?: kulado.Input<{ azureBlobStorage?: kulado.Input<{ level: kulado.Input<string>, retentionInDays: kulado.Input<number>, sasUrl: kulado.Input<string> }> }> }>;
    /**
     * Specifies the name of the App Service. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the App Service.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A `site_config` block as defined below.
     */
    readonly siteConfig?: kulado.Input<{ alwaysOn?: kulado.Input<boolean>, appCommandLine?: kulado.Input<string>, cors?: kulado.Input<{ allowedOrigins: kulado.Input<kulado.Input<string>[]>, supportCredentials?: kulado.Input<boolean> }>, defaultDocuments?: kulado.Input<kulado.Input<string>[]>, dotnetFrameworkVersion?: kulado.Input<string>, ftpsState?: kulado.Input<string>, http2Enabled?: kulado.Input<boolean>, ipRestrictions?: kulado.Input<kulado.Input<{ ipAddress: kulado.Input<string>, subnetMask?: kulado.Input<string> }>[]>, javaContainer?: kulado.Input<string>, javaContainerVersion?: kulado.Input<string>, javaVersion?: kulado.Input<string>, linuxFxVersion?: kulado.Input<string>, localMysqlEnabled?: kulado.Input<boolean>, managedPipelineMode?: kulado.Input<string>, minTlsVersion?: kulado.Input<string>, phpVersion?: kulado.Input<string>, pythonVersion?: kulado.Input<string>, remoteDebuggingEnabled?: kulado.Input<boolean>, remoteDebuggingVersion?: kulado.Input<string>, scmType?: kulado.Input<string>, use32BitWorkerProcess?: kulado.Input<boolean>, virtualNetworkName?: kulado.Input<string>, websocketsEnabled?: kulado.Input<boolean>, windowsFxVersion?: kulado.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}
