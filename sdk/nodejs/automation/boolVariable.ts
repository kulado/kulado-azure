// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a boolean variable in Azure Automation
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
 * const exampleBoolVariable = new azure.automation.BoolVariable("example", {
 *     automationAccountName: exampleAccount.name,
 *     name: "tfex-example-var",
 *     resourceGroupName: exampleResourceGroup.name,
 *     value: false,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_variable_bool.html.markdown.
 */
export class BoolVariable extends kulado.CustomResource {
    /**
     * Get an existing BoolVariable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: BoolVariableState, opts?: kulado.CustomResourceOptions): BoolVariable {
        return new BoolVariable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:automation/boolVariable:BoolVariable';

    /**
     * Returns true if the given object is an instance of BoolVariable.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BoolVariable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === BoolVariable.__kuladoType;
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
     * The value of the Automation Variable as a `boolean`.
     */
    public readonly value!: kulado.Output<boolean | undefined>;

    /**
     * Create a BoolVariable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BoolVariableArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: BoolVariableArgs | BoolVariableState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as BoolVariableState | undefined;
            inputs["automationAccountName"] = state ? state.automationAccountName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["encrypted"] = state ? state.encrypted : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as BoolVariableArgs | undefined;
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
        super(BoolVariable.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering BoolVariable resources.
 */
export interface BoolVariableState {
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
     * The value of the Automation Variable as a `boolean`.
     */
    readonly value?: kulado.Input<boolean>;
}

/**
 * The set of arguments for constructing a BoolVariable resource.
 */
export interface BoolVariableArgs {
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
     * The value of the Automation Variable as a `boolean`.
     */
    readonly value?: kulado.Input<boolean>;
}
