// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Custom Action within a Logic App Workflow
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
 * const testActionCustom = new azure.logicapps.ActionCustom("test", {
 *     body: `{
 *     "description": "A variable to configure the auto expiration age in days. Configured in negative number. Default is -30 (30 days old).",
 *     "inputs": {
 *         "variables": [
 *             {
 *                 "name": "ExpirationAgeInDays",
 *                 "type": "Integer",
 *                 "value": -30
 *             }
 *         ]
 *     },
 *     "runAfter": {},
 *     "type": "InitializeVariable"
 * }
 * `,
 *     logicAppId: testWorkflow.id,
 *     name: "example-action",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/logic_app_action_custom.html.markdown.
 */
export class ActionCustom extends kulado.CustomResource {
    /**
     * Get an existing ActionCustom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ActionCustomState, opts?: kulado.CustomResourceOptions): ActionCustom {
        return new ActionCustom(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:logicapps/actionCustom:ActionCustom';

    /**
     * Returns true if the given object is an instance of ActionCustom.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActionCustom {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === ActionCustom.__kuladoType;
    }

    /**
     * Specifies the JSON Blob defining the Body of this Custom Action.
     */
    public readonly body!: kulado.Output<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    public readonly logicAppId!: kulado.Output<string>;
    /**
     * Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;

    /**
     * Create a ActionCustom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionCustomArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActionCustomArgs | ActionCustomState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ActionCustomState | undefined;
            inputs["body"] = state ? state.body : undefined;
            inputs["logicAppId"] = state ? state.logicAppId : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as ActionCustomArgs | undefined;
            if (!args || args.body === undefined) {
                throw new Error("Missing required property 'body'");
            }
            if (!args || args.logicAppId === undefined) {
                throw new Error("Missing required property 'logicAppId'");
            }
            inputs["body"] = args ? args.body : undefined;
            inputs["logicAppId"] = args ? args.logicAppId : undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        super(ActionCustom.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ActionCustom resources.
 */
export interface ActionCustomState {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Action.
     */
    readonly body?: kulado.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId?: kulado.Input<string>;
    /**
     * Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a ActionCustom resource.
 */
export interface ActionCustomArgs {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Action.
     */
    readonly body: kulado.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId: kulado.Input<string>;
    /**
     * Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
}