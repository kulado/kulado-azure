// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages an Application Insights API key.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "tf-test",
 * });
 * const testInsights = new azure.appinsights.Insights("test", {
 *     applicationType: "web",
 *     location: "West Europe",
 *     name: "tf-test-appinsights",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const authenticateSdkControlChannelApiKey = new azure.appinsights.ApiKey("authenticate_sdk_control_channel", {
 *     applicationInsightsId: testInsights.id,
 *     name: "tf-test-appinsights-authenticate-sdk-control-channel-api-key",
 *     readPermissions: ["agentconfig"],
 * });
 * const fullPermissions = new azure.appinsights.ApiKey("full_permissions", {
 *     applicationInsightsId: testInsights.id,
 *     name: "tf-test-appinsights-full-permissions-api-key",
 *     readPermissions: [
 *         "agentconfig",
 *         "aggregate",
 *         "api",
 *         "draft",
 *         "extendqueries",
 *         "search",
 *     ],
 *     writePermissions: ["annotations"],
 * });
 * const readTelemetry = new azure.appinsights.ApiKey("read_telemetry", {
 *     applicationInsightsId: testInsights.id,
 *     name: "tf-test-appinsights-read-telemetry-api-key",
 *     readPermissions: [
 *         "aggregate",
 *         "api",
 *         "draft",
 *         "extendqueries",
 *         "search",
 *     ],
 * });
 * const writeAnnotations = new azure.appinsights.ApiKey("write_annotations", {
 *     applicationInsightsId: testInsights.id,
 *     name: "tf-test-appinsights-write-annotations-api-key",
 *     writePermissions: ["annotations"],
 * });
 * 
 * export const authenticateSdkControlChannel = authenticateSdkControlChannelApiKey.apiKey;
 * export const fullPermissionsApiKey = fullPermissions.apiKey;
 * export const readTelemetryApiKey = readTelemetry.apiKey;
 * export const writeAnnotationsApiKey = writeAnnotations.apiKey;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/application_insights_api_key.html.markdown.
 */
export class ApiKey extends kulado.CustomResource {
    /**
     * Get an existing ApiKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ApiKeyState, opts?: kulado.CustomResourceOptions): ApiKey {
        return new ApiKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:appinsights/apiKey:ApiKey';

    /**
     * Returns true if the given object is an instance of ApiKey.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === ApiKey.__kuladoType;
    }

    /**
     * The API Key secret (Sensitive).
     */
    public /*out*/ readonly apiKey!: kulado.Output<string>;
    /**
     * The ID of the Application Insights component on which the API key operates. Changing this forces a new resource to be created.
     */
    public readonly applicationInsightsId!: kulado.Output<string>;
    /**
     * Specifies the name of the Application Insights API key. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Specifies the list of read permissions granted to the API key. Valid values are `agentconfig`, `aggregate`, `api`, `draft`, `extendqueries`, `search`. Please note these values are case sensitive. Changing this forces a new resource to be created. 
     */
    public readonly readPermissions!: kulado.Output<string[] | undefined>;
    /**
     * Specifies the list of write permissions granted to the API key. Valid values are `annotations`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    public readonly writePermissions!: kulado.Output<string[] | undefined>;

    /**
     * Create a ApiKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiKeyArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiKeyArgs | ApiKeyState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ApiKeyState | undefined;
            inputs["apiKey"] = state ? state.apiKey : undefined;
            inputs["applicationInsightsId"] = state ? state.applicationInsightsId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["readPermissions"] = state ? state.readPermissions : undefined;
            inputs["writePermissions"] = state ? state.writePermissions : undefined;
        } else {
            const args = argsOrState as ApiKeyArgs | undefined;
            if (!args || args.applicationInsightsId === undefined) {
                throw new Error("Missing required property 'applicationInsightsId'");
            }
            inputs["applicationInsightsId"] = args ? args.applicationInsightsId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["readPermissions"] = args ? args.readPermissions : undefined;
            inputs["writePermissions"] = args ? args.writePermissions : undefined;
            inputs["apiKey"] = undefined /*out*/;
        }
        super(ApiKey.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApiKey resources.
 */
export interface ApiKeyState {
    /**
     * The API Key secret (Sensitive).
     */
    readonly apiKey?: kulado.Input<string>;
    /**
     * The ID of the Application Insights component on which the API key operates. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId?: kulado.Input<string>;
    /**
     * Specifies the name of the Application Insights API key. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the list of read permissions granted to the API key. Valid values are `agentconfig`, `aggregate`, `api`, `draft`, `extendqueries`, `search`. Please note these values are case sensitive. Changing this forces a new resource to be created. 
     */
    readonly readPermissions?: kulado.Input<kulado.Input<string>[]>;
    /**
     * Specifies the list of write permissions granted to the API key. Valid values are `annotations`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    readonly writePermissions?: kulado.Input<kulado.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ApiKey resource.
 */
export interface ApiKeyArgs {
    /**
     * The ID of the Application Insights component on which the API key operates. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId: kulado.Input<string>;
    /**
     * Specifies the name of the Application Insights API key. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the list of read permissions granted to the API key. Valid values are `agentconfig`, `aggregate`, `api`, `draft`, `extendqueries`, `search`. Please note these values are case sensitive. Changing this forces a new resource to be created. 
     */
    readonly readPermissions?: kulado.Input<kulado.Input<string>[]>;
    /**
     * Specifies the list of write permissions granted to the API key. Valid values are `annotations`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    readonly writePermissions?: kulado.Input<kulado.Input<string>[]>;
}
