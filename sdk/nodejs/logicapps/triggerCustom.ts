// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Custom Trigger within a Logic App Workflow
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
 * const testTriggerCustom = new azure.logicapps.TriggerCustom("test", {
 *     body: `{
 *   "recurrence": {
 *     "frequency": "Day",
 *     "interval": 1
 *   },
 *   "type": "Recurrence"
 * }
 * `,
 *     logicAppId: testWorkflow.id,
 *     name: "example-trigger",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/logic_app_trigger_custom.html.markdown.
 */
export class TriggerCustom extends kulado.CustomResource {
    /**
     * Get an existing TriggerCustom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: TriggerCustomState, opts?: kulado.CustomResourceOptions): TriggerCustom {
        return new TriggerCustom(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:logicapps/triggerCustom:TriggerCustom';

    /**
     * Returns true if the given object is an instance of TriggerCustom.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TriggerCustom {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === TriggerCustom.__kuladoType;
    }

    /**
     * Specifies the JSON Blob defining the Body of this Custom Trigger.
     */
    public readonly body!: kulado.Output<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    public readonly logicAppId!: kulado.Output<string>;
    /**
     * Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;

    /**
     * Create a TriggerCustom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerCustomArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: TriggerCustomArgs | TriggerCustomState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TriggerCustomState | undefined;
            inputs["body"] = state ? state.body : undefined;
            inputs["logicAppId"] = state ? state.logicAppId : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as TriggerCustomArgs | undefined;
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
        super(TriggerCustom.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TriggerCustom resources.
 */
export interface TriggerCustomState {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Trigger.
     */
    readonly body?: kulado.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId?: kulado.Input<string>;
    /**
     * Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a TriggerCustom resource.
 */
export interface TriggerCustomArgs {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Trigger.
     */
    readonly body: kulado.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId: kulado.Input<string>;
    /**
     * Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
}