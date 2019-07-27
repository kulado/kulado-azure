// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a HTTP Request Trigger within a Logic App Workflow
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "East US",
 *     name: "workflow-resources",
 * });
 * const testWorkflow = new azure.logicapps.Workflow("test", {
 *     location: testResourceGroup.location,
 *     name: "workflow1",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testTriggerHttpRequest = new azure.logicapps.TriggerHttpRequest("test", {
 *     logicAppId: testWorkflow.id,
 *     name: "some-http-trigger",
 *     schema: `{
 *     "type": "object",
 *     "properties": {
 *         "hello": {
 *             "type": "string"
 *         }
 *     }
 * }
 * `,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/logic_app_trigger_http_request.html.markdown.
 */
export class TriggerHttpRequest extends kulado.CustomResource {
    /**
     * Get an existing TriggerHttpRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: TriggerHttpRequestState, opts?: kulado.CustomResourceOptions): TriggerHttpRequest {
        return new TriggerHttpRequest(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:logicapps/triggerHttpRequest:TriggerHttpRequest';

    /**
     * Returns true if the given object is an instance of TriggerHttpRequest.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TriggerHttpRequest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === TriggerHttpRequest.__kuladoType;
    }

    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    public readonly logicAppId!: kulado.Output<string>;
    /**
     * Specifies the HTTP Method which the request be using. Possible values include `DELETE`, `GET`, `PATCH`, `POST` or `PUT`.
     */
    public readonly method!: kulado.Output<string | undefined>;
    /**
     * Specifies the name of the HTTP Request Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Specifies the Relative Path used for this Request.
     */
    public readonly relativePath!: kulado.Output<string | undefined>;
    /**
     * A JSON Blob defining the Schema of the incoming request. This needs to be valid JSON.
     */
    public readonly schema!: kulado.Output<string>;

    /**
     * Create a TriggerHttpRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerHttpRequestArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: TriggerHttpRequestArgs | TriggerHttpRequestState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TriggerHttpRequestState | undefined;
            inputs["logicAppId"] = state ? state.logicAppId : undefined;
            inputs["method"] = state ? state.method : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["relativePath"] = state ? state.relativePath : undefined;
            inputs["schema"] = state ? state.schema : undefined;
        } else {
            const args = argsOrState as TriggerHttpRequestArgs | undefined;
            if (!args || args.logicAppId === undefined) {
                throw new Error("Missing required property 'logicAppId'");
            }
            if (!args || args.schema === undefined) {
                throw new Error("Missing required property 'schema'");
            }
            inputs["logicAppId"] = args ? args.logicAppId : undefined;
            inputs["method"] = args ? args.method : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["relativePath"] = args ? args.relativePath : undefined;
            inputs["schema"] = args ? args.schema : undefined;
        }
        super(TriggerHttpRequest.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TriggerHttpRequest resources.
 */
export interface TriggerHttpRequestState {
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId?: kulado.Input<string>;
    /**
     * Specifies the HTTP Method which the request be using. Possible values include `DELETE`, `GET`, `PATCH`, `POST` or `PUT`.
     */
    readonly method?: kulado.Input<string>;
    /**
     * Specifies the name of the HTTP Request Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the Relative Path used for this Request.
     */
    readonly relativePath?: kulado.Input<string>;
    /**
     * A JSON Blob defining the Schema of the incoming request. This needs to be valid JSON.
     */
    readonly schema?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a TriggerHttpRequest resource.
 */
export interface TriggerHttpRequestArgs {
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId: kulado.Input<string>;
    /**
     * Specifies the HTTP Method which the request be using. Possible values include `DELETE`, `GET`, `PATCH`, `POST` or `PUT`.
     */
    readonly method?: kulado.Input<string>;
    /**
     * Specifies the name of the HTTP Request Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the Relative Path used for this Request.
     */
    readonly relativePath?: kulado.Input<string>;
    /**
     * A JSON Blob defining the Schema of the incoming request. This needs to be valid JSON.
     */
    readonly schema: kulado.Input<string>;
}
