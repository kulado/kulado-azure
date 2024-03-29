// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a integer variable in Azure Automation
 * 
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 *     name: "tfex-example-rg",
 * });
 * const exampleAccount = new azure.automation.Account("example", {
 *     location: exampleResourceGroup.location,
 *     name: "tfex-example-account",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         name: "Basic",
 *     },
 * });
 * const exampleIntVariable = new azure.automation.IntVariable("example", {
 *     automationAccountName: exampleAccount.name,
 *     name: "tfex-example-var",
 *     resourceGroupName: exampleResourceGroup.name,
 *     value: 1234,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_variable_int.html.markdown.
 */
export class IntVariable extends kulado.CustomResource {
    /**
     * Get an existing IntVariable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: IntVariableState, opts?: kulado.CustomResourceOptions): IntVariable {
        return new IntVariable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:automation/intVariable:IntVariable';

    /**
     * Returns true if the given object is an instance of IntVariable.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntVariable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === IntVariable.__kuladoType;
    }

    /**
     * The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
     */
    public readonly automationAccountName!: kulado.Output<string>;
    /**
     * The description of the Automation Variable.
     */
    public readonly description!: kulado.Output<string | undefined>;
    /**
     * Specifies if the Automation Variable is encrypted. Defaults to `false`.
     */
    public readonly encrypted!: kulado.Output<boolean | undefined>;
    /**
     * The name of the Automation Variable. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The value of the Automation Variable as a `integer`.
     */
    public readonly value!: kulado.Output<number | undefined>;

    /**
     * Create a IntVariable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntVariableArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: IntVariableArgs | IntVariableState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as IntVariableState | undefined;
            inputs["automationAccountName"] = state ? state.automationAccountName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["encrypted"] = state ? state.encrypted : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as IntVariableArgs | undefined;
            if (!args || args.automationAccountName === undefined) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["encrypted"] = args ? args.encrypted : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["value"] = args ? args.value : undefined;
        }
        super(IntVariable.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IntVariable resources.
 */
export interface IntVariableState {
    /**
     * The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName?: kulado.Input<string>;
    /**
     * The description of the Automation Variable.
     */
    readonly description?: kulado.Input<string>;
    /**
     * Specifies if the Automation Variable is encrypted. Defaults to `false`.
     */
    readonly encrypted?: kulado.Input<boolean>;
    /**
     * The name of the Automation Variable. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The value of the Automation Variable as a `integer`.
     */
    readonly value?: kulado.Input<number>;
}

/**
 * The set of arguments for constructing a IntVariable resource.
 */
export interface IntVariableArgs {
    /**
     * The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: kulado.Input<string>;
    /**
     * The description of the Automation Variable.
     */
    readonly description?: kulado.Input<string>;
    /**
     * Specifies if the Automation Variable is encrypted. Defaults to `false`.
     */
    readonly encrypted?: kulado.Input<boolean>;
    /**
     * The name of the Automation Variable. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * The value of the Automation Variable as a `integer`.
     */
    readonly value?: kulado.Input<number>;
}
