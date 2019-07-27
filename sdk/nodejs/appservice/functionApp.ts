// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Function App.
 * 
 * ## Example Usage (with App Service Plan)
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "westus2",
 *     name: "azure-functions-test-rg",
 * });
 * const testPlan = new azure.appservice.Plan("test", {
 *     location: testResourceGroup.location,
 *     name: "azure-functions-test-service-plan",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: {
 *         size: "S1",
 *         tier: "Standard",
 *     },
 * });
 * const testAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: testResourceGroup.location,
 *     name: "functionsapptestsa",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testFunctionApp = new azure.appservice.FunctionApp("test", {
 *     appServicePlanId: testPlan.id,
 *     location: testResourceGroup.location,
 *     name: "test-azure-functions",
 *     resourceGroupName: testResourceGroup.name,
 *     storageConnectionString: testAccount.primaryConnectionString,
 * });
 * ```
 * ## Example Usage (in a Consumption Plan)
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "westus2",
 *     name: "azure-functions-cptest-rg",
 * });
 * const testPlan = new azure.appservice.Plan("test", {
 *     kind: "FunctionApp",
 *     location: testResourceGroup.location,
 *     name: "azure-functions-test-service-plan",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: {
 *         size: "Y1",
 *         tier: "Dynamic",
 *     },
 * });
 * const testAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: testResourceGroup.location,
 *     name: "functionsapptestsa",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testFunctionApp = new azure.appservice.FunctionApp("test", {
 *     appServicePlanId: testPlan.id,
 *     location: testResourceGroup.location,
 *     name: "test-azure-functions",
 *     resourceGroupName: testResourceGroup.name,
 *     storageConnectionString: testAccount.primaryConnectionString,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/function_app.html.markdown.
 */
export class FunctionApp extends kulado.CustomResource {
    /**
     * Get an existing FunctionApp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: FunctionAppState, opts?: kulado.CustomResourceOptions): FunctionApp {
        return new FunctionApp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:appservice/functionApp:FunctionApp';

    /**
     * Returns true if the given object is an instance of FunctionApp.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FunctionApp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === FunctionApp.__kuladoType;
    }

    /**
     * The ID of the App Service Plan within which to create this Function App. Changing this forces a new resource to be created.
     */
    public readonly appServicePlanId!: kulado.Output<string>;
    /**
     * A key-value pair of App Settings.
     */
    public readonly appSettings!: kulado.Output<{[key: string]: any} | undefined>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     */
    public readonly clientAffinityEnabled!: kulado.Output<boolean>;
    /**
     * An `connection_string` block as defined below.
     */
    public readonly connectionStrings!: kulado.Output<{ name: string, type: string, value: string }[]>;
    /**
     * The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
     */
    public /*out*/ readonly defaultHostname!: kulado.Output<string>;
    /**
     * Should the built-in logging of this Function App be enabled? Defaults to `true`.
     */
    public readonly enableBuiltinLogging!: kulado.Output<boolean | undefined>;
    /**
     * Is the Function App enabled?
     */
    public readonly enabled!: kulado.Output<boolean | undefined>;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    public readonly httpsOnly!: kulado.Output<boolean | undefined>;
    /**
     * An `identity` block as defined below.
     */
    public readonly identity!: kulado.Output<{ principalId: string, tenantId: string, type: string }>;
    /**
     * The Function App kind - such as `functionapp,linux,container`
     */
    public /*out*/ readonly kind!: kulado.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * The name of the Connection String.
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
     * The name of the resource group in which to create the Function App.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A `site_config` object as defined below.
     */
    public readonly siteConfig!: kulado.Output<{ alwaysOn?: boolean, linuxFxVersion: string, use32BitWorkerProcess?: boolean, websocketsEnabled?: boolean }>;
    /**
     * A `site_credential` block as defined below, which contains the site-level credentials used to publish to this App Service.
     */
    public /*out*/ readonly siteCredential!: kulado.Output<{ password: string, username: string }>;
    /**
     * The connection string of the backend storage account which will be used by this Function App (such as the dashboard, logs).
     */
    public readonly storageConnectionString!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * The runtime version associated with the Function App. Defaults to `~1`.
     */
    public readonly version!: kulado.Output<string | undefined>;

    /**
     * Create a FunctionApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FunctionAppArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: FunctionAppArgs | FunctionAppState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FunctionAppState | undefined;
            inputs["appServicePlanId"] = state ? state.appServicePlanId : undefined;
            inputs["appSettings"] = state ? state.appSettings : undefined;
            inputs["clientAffinityEnabled"] = state ? state.clientAffinityEnabled : undefined;
            inputs["connectionStrings"] = state ? state.connectionStrings : undefined;
            inputs["defaultHostname"] = state ? state.defaultHostname : undefined;
            inputs["enableBuiltinLogging"] = state ? state.enableBuiltinLogging : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["httpsOnly"] = state ? state.httpsOnly : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["kind"] = state ? state.kind : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["outboundIpAddresses"] = state ? state.outboundIpAddresses : undefined;
            inputs["possibleOutboundIpAddresses"] = state ? state.possibleOutboundIpAddresses : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["siteConfig"] = state ? state.siteConfig : undefined;
            inputs["siteCredential"] = state ? state.siteCredential : undefined;
            inputs["storageConnectionString"] = state ? state.storageConnectionString : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as FunctionAppArgs | undefined;
            if (!args || args.appServicePlanId === undefined) {
                throw new Error("Missing required property 'appServicePlanId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageConnectionString === undefined) {
                throw new Error("Missing required property 'storageConnectionString'");
            }
            inputs["appServicePlanId"] = args ? args.appServicePlanId : undefined;
            inputs["appSettings"] = args ? args.appSettings : undefined;
            inputs["clientAffinityEnabled"] = args ? args.clientAffinityEnabled : undefined;
            inputs["connectionStrings"] = args ? args.connectionStrings : undefined;
            inputs["enableBuiltinLogging"] = args ? args.enableBuiltinLogging : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["httpsOnly"] = args ? args.httpsOnly : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["siteConfig"] = args ? args.siteConfig : undefined;
            inputs["storageConnectionString"] = args ? args.storageConnectionString : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["defaultHostname"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["outboundIpAddresses"] = undefined /*out*/;
            inputs["possibleOutboundIpAddresses"] = undefined /*out*/;
            inputs["siteCredential"] = undefined /*out*/;
        }
        super(FunctionApp.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FunctionApp resources.
 */
export interface FunctionAppState {
    /**
     * The ID of the App Service Plan within which to create this Function App. Changing this forces a new resource to be created.
     */
    readonly appServicePlanId?: kulado.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    readonly appSettings?: kulado.Input<{[key: string]: any}>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     */
    readonly clientAffinityEnabled?: kulado.Input<boolean>;
    /**
     * An `connection_string` block as defined below.
     */
    readonly connectionStrings?: kulado.Input<kulado.Input<{ name: kulado.Input<string>, type: kulado.Input<string>, value: kulado.Input<string> }>[]>;
    /**
     * The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
     */
    readonly defaultHostname?: kulado.Input<string>;
    /**
     * Should the built-in logging of this Function App be enabled? Defaults to `true`.
     */
    readonly enableBuiltinLogging?: kulado.Input<boolean>;
    /**
     * Is the Function App enabled?
     */
    readonly enabled?: kulado.Input<boolean>;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    readonly httpsOnly?: kulado.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity?: kulado.Input<{ principalId?: kulado.Input<string>, tenantId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * The Function App kind - such as `functionapp,linux,container`
     */
    readonly kind?: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The name of the Connection String.
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
     * The name of the resource group in which to create the Function App.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A `site_config` object as defined below.
     */
    readonly siteConfig?: kulado.Input<{ alwaysOn?: kulado.Input<boolean>, linuxFxVersion?: kulado.Input<string>, use32BitWorkerProcess?: kulado.Input<boolean>, websocketsEnabled?: kulado.Input<boolean> }>;
    /**
     * A `site_credential` block as defined below, which contains the site-level credentials used to publish to this App Service.
     */
    readonly siteCredential?: kulado.Input<{ password?: kulado.Input<string>, username?: kulado.Input<string> }>;
    /**
     * The connection string of the backend storage account which will be used by this Function App (such as the dashboard, logs).
     */
    readonly storageConnectionString?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The runtime version associated with the Function App. Defaults to `~1`.
     */
    readonly version?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a FunctionApp resource.
 */
export interface FunctionAppArgs {
    /**
     * The ID of the App Service Plan within which to create this Function App. Changing this forces a new resource to be created.
     */
    readonly appServicePlanId: kulado.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    readonly appSettings?: kulado.Input<{[key: string]: any}>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     */
    readonly clientAffinityEnabled?: kulado.Input<boolean>;
    /**
     * An `connection_string` block as defined below.
     */
    readonly connectionStrings?: kulado.Input<kulado.Input<{ name: kulado.Input<string>, type: kulado.Input<string>, value: kulado.Input<string> }>[]>;
    /**
     * Should the built-in logging of this Function App be enabled? Defaults to `true`.
     */
    readonly enableBuiltinLogging?: kulado.Input<boolean>;
    /**
     * Is the Function App enabled?
     */
    readonly enabled?: kulado.Input<boolean>;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    readonly httpsOnly?: kulado.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity?: kulado.Input<{ principalId?: kulado.Input<string>, tenantId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The name of the Connection String.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Function App.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A `site_config` object as defined below.
     */
    readonly siteConfig?: kulado.Input<{ alwaysOn?: kulado.Input<boolean>, linuxFxVersion?: kulado.Input<string>, use32BitWorkerProcess?: kulado.Input<boolean>, websocketsEnabled?: kulado.Input<boolean> }>;
    /**
     * The connection string of the backend storage account which will be used by this Function App (such as the dashboard, logs).
     */
    readonly storageConnectionString: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The runtime version associated with the Function App. Defaults to `~1`.
     */
    readonly version?: kulado.Input<string>;
}
