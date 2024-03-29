// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Automation DSC Configuration.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West Europe",
 *     name: "resourceGroup1",
 * });
 * const exampleAccount = new azure.automation.Account("example", {
 *     location: exampleResourceGroup.location,
 *     name: "account1",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         name: "Basic",
 *     },
 * });
 * const exampleDscConfiguration = new azure.automation.DscConfiguration("example", {
 *     automationAccountName: exampleAccount.name,
 *     contentEmbedded: "configuration test {}",
 *     location: exampleResourceGroup.location,
 *     name: "test",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_dsc_configuration.html.markdown.
 */
export class DscConfiguration extends kulado.CustomResource {
    /**
     * Get an existing DscConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: DscConfigurationState, opts?: kulado.CustomResourceOptions): DscConfiguration {
        return new DscConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:automation/dscConfiguration:DscConfiguration';

    /**
     * Returns true if the given object is an instance of DscConfiguration.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DscConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === DscConfiguration.__kuladoType;
    }

    /**
     * The name of the automation account in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    public readonly automationAccountName!: kulado.Output<string>;
    /**
     * The PowerShell DSC Configuration script.
     */
    public readonly contentEmbedded!: kulado.Output<string>;
    /**
     * Description to go with DSC Configuration.
     */
    public readonly description!: kulado.Output<string | undefined>;
    /**
     * Must be the same location as the Automation Account.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Verbose log option.
     */
    public readonly logVerbose!: kulado.Output<boolean | undefined>;
    /**
     * Specifies the name of the DSC Configuration. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    public /*out*/ readonly state!: kulado.Output<string>;

    /**
     * Create a DscConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DscConfigurationArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: DscConfigurationArgs | DscConfigurationState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DscConfigurationState | undefined;
            inputs["automationAccountName"] = state ? state.automationAccountName : undefined;
            inputs["contentEmbedded"] = state ? state.contentEmbedded : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["logVerbose"] = state ? state.logVerbose : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["state"] = state ? state.state : undefined;
        } else {
            const args = argsOrState as DscConfigurationArgs | undefined;
            if (!args || args.automationAccountName === undefined) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if (!args || args.contentEmbedded === undefined) {
                throw new Error("Missing required property 'contentEmbedded'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            inputs["contentEmbedded"] = args ? args.contentEmbedded : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["logVerbose"] = args ? args.logVerbose : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["state"] = undefined /*out*/;
        }
        super(DscConfiguration.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DscConfiguration resources.
 */
export interface DscConfigurationState {
    /**
     * The name of the automation account in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName?: kulado.Input<string>;
    /**
     * The PowerShell DSC Configuration script.
     */
    readonly contentEmbedded?: kulado.Input<string>;
    /**
     * Description to go with DSC Configuration.
     */
    readonly description?: kulado.Input<string>;
    /**
     * Must be the same location as the Automation Account.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Verbose log option.
     */
    readonly logVerbose?: kulado.Input<boolean>;
    /**
     * Specifies the name of the DSC Configuration. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    readonly state?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a DscConfiguration resource.
 */
export interface DscConfigurationArgs {
    /**
     * The name of the automation account in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: kulado.Input<string>;
    /**
     * The PowerShell DSC Configuration script.
     */
    readonly contentEmbedded: kulado.Input<string>;
    /**
     * Description to go with DSC Configuration.
     */
    readonly description?: kulado.Input<string>;
    /**
     * Must be the same location as the Automation Account.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Verbose log option.
     */
    readonly logVerbose?: kulado.Input<boolean>;
    /**
     * Specifies the name of the DSC Configuration. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
}
