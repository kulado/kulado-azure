// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a policy rule definition on a management group or your provider subscription. 
 * 
 * Policy definitions do not take effect until they are assigned to a scope using a Policy Assignment.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const policy = new azure.policy.Definition("policy", {
 *     displayName: "acceptance test policy definition",
 *     mode: "Indexed",
 *     name: "accTestPolicy",
 *     parameters: `	{
 *     "allowedLocations": {
 *       "type": "Array",
 *       "metadata": {
 *         "description": "The list of allowed locations for resources.",
 *         "displayName": "Allowed locations",
 *         "strongType": "location"
 *       }
 *     }
 *   }
 * `,
 *     policyRule: `	{
 *     "if": {
 *       "not": {
 *         "field": "location",
 *         "in": "[parameters('allowedLocations')]"
 *       }
 *     },
 *     "then": {
 *       "effect": "audit"
 *     }
 *   }
 * `,
 *     policyType: "Custom",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/policy_definition.html.markdown.
 */
export class Definition extends kulado.CustomResource {
    /**
     * Get an existing Definition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: DefinitionState, opts?: kulado.CustomResourceOptions): Definition {
        return new Definition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:policy/definition:Definition';

    /**
     * Returns true if the given object is an instance of Definition.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Definition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Definition.__kuladoType;
    }

    /**
     * The description of the policy definition.
     */
    public readonly description!: kulado.Output<string | undefined>;
    /**
     * The display name of the policy definition.
     */
    public readonly displayName!: kulado.Output<string>;
    /**
     * The ID of the Management Group where this policy should be defined. Changing this forces a new resource to be created.
     */
    public readonly managementGroupId!: kulado.Output<string | undefined>;
    /**
     * The metadata for the policy definition. This
     * is a json object representing additional metadata that should be stored
     * with the policy definition.
     */
    public readonly metadata!: kulado.Output<string>;
    /**
     * The policy mode that allows you to specify which resource
     * types will be evaluated.  The value can be "All", "Indexed" or
     * "NotSpecified". Changing this resource forces a new resource to be
     * created.
     */
    public readonly mode!: kulado.Output<string>;
    /**
     * The name of the policy definition. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Parameters for the policy definition. This field
     * is a json object that allows you to parameterize your policy definition.
     */
    public readonly parameters!: kulado.Output<string | undefined>;
    /**
     * The policy rule for the policy definition. This
     * is a json object representing the rule that contains an if and
     * a then block.
     */
    public readonly policyRule!: kulado.Output<string | undefined>;
    /**
     * The policy type.  The value can be "BuiltIn", "Custom"
     * or "NotSpecified". Changing this forces a new resource to be created.
     */
    public readonly policyType!: kulado.Output<string>;

    /**
     * Create a Definition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefinitionArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefinitionArgs | DefinitionState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DefinitionState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["managementGroupId"] = state ? state.managementGroupId : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["mode"] = state ? state.mode : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["policyRule"] = state ? state.policyRule : undefined;
            inputs["policyType"] = state ? state.policyType : undefined;
        } else {
            const args = argsOrState as DefinitionArgs | undefined;
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.mode === undefined) {
                throw new Error("Missing required property 'mode'");
            }
            if (!args || args.policyType === undefined) {
                throw new Error("Missing required property 'policyType'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["managementGroupId"] = args ? args.managementGroupId : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["mode"] = args ? args.mode : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["policyRule"] = args ? args.policyRule : undefined;
            inputs["policyType"] = args ? args.policyType : undefined;
        }
        super(Definition.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Definition resources.
 */
export interface DefinitionState {
    /**
     * The description of the policy definition.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The display name of the policy definition.
     */
    readonly displayName?: kulado.Input<string>;
    /**
     * The ID of the Management Group where this policy should be defined. Changing this forces a new resource to be created.
     */
    readonly managementGroupId?: kulado.Input<string>;
    /**
     * The metadata for the policy definition. This
     * is a json object representing additional metadata that should be stored
     * with the policy definition.
     */
    readonly metadata?: kulado.Input<string>;
    /**
     * The policy mode that allows you to specify which resource
     * types will be evaluated.  The value can be "All", "Indexed" or
     * "NotSpecified". Changing this resource forces a new resource to be
     * created.
     */
    readonly mode?: kulado.Input<string>;
    /**
     * The name of the policy definition. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Parameters for the policy definition. This field
     * is a json object that allows you to parameterize your policy definition.
     */
    readonly parameters?: kulado.Input<string>;
    /**
     * The policy rule for the policy definition. This
     * is a json object representing the rule that contains an if and
     * a then block.
     */
    readonly policyRule?: kulado.Input<string>;
    /**
     * The policy type.  The value can be "BuiltIn", "Custom"
     * or "NotSpecified". Changing this forces a new resource to be created.
     */
    readonly policyType?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Definition resource.
 */
export interface DefinitionArgs {
    /**
     * The description of the policy definition.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The display name of the policy definition.
     */
    readonly displayName: kulado.Input<string>;
    /**
     * The ID of the Management Group where this policy should be defined. Changing this forces a new resource to be created.
     */
    readonly managementGroupId?: kulado.Input<string>;
    /**
     * The metadata for the policy definition. This
     * is a json object representing additional metadata that should be stored
     * with the policy definition.
     */
    readonly metadata?: kulado.Input<string>;
    /**
     * The policy mode that allows you to specify which resource
     * types will be evaluated.  The value can be "All", "Indexed" or
     * "NotSpecified". Changing this resource forces a new resource to be
     * created.
     */
    readonly mode: kulado.Input<string>;
    /**
     * The name of the policy definition. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Parameters for the policy definition. This field
     * is a json object that allows you to parameterize your policy definition.
     */
    readonly parameters?: kulado.Input<string>;
    /**
     * The policy rule for the policy definition. This
     * is a json object representing the rule that contains an if and
     * a then block.
     */
    readonly policyRule?: kulado.Input<string>;
    /**
     * The policy type.  The value can be "BuiltIn", "Custom"
     * or "NotSpecified". Changing this forces a new resource to be created.
     */
    readonly policyType: kulado.Input<string>;
}
