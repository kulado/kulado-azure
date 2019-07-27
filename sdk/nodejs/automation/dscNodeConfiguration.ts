// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Automation DSC Node Configuration.
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
 * const exampleDscNodeConfiguration = new azure.automation.DscNodeConfiguration("example", {
 *     automationAccountName: exampleAccount.name,
 *     contentEmbedded: `instance of MSFT_FileDirectoryConfiguration as $MSFT_FileDirectoryConfiguration1ref
 * {
 *   ResourceID = "[File]bla";
 *   Ensure = "Present";
 *   Contents = "bogus Content";
 *   DestinationPath = "c:\\\\bogus.txt";
 *   ModuleName = "PSDesiredStateConfiguration";
 *   SourceInfo = "::3::9::file";
 *   ModuleVersion = "1.0";
 *   ConfigurationName = "bla";
 * };
 * instance of OMI_ConfigurationDocument
 * {
 *   Version="2.0.0";
 *   MinimumCompatibleVersion = "1.0.0";
 *   CompatibleVersionAdditionalProperties= {"Omi_BaseResource:ConfigurationName"};
 *   Author="bogusAuthor";
 *   GenerationDate="06/15/2018 14:06:24";
 *   GenerationHost="bogusComputer";
 *   Name="test";
 * };
 * `,
 *     name: "test.localhost",
 *     resourceGroupName: exampleResourceGroup.name,
 * }, {dependsOn: [exampleDscConfiguration]});
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_dsc_nodeconfiguration.html.markdown.
 */
export class DscNodeConfiguration extends kulado.CustomResource {
    /**
     * Get an existing DscNodeConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: DscNodeConfigurationState, opts?: kulado.CustomResourceOptions): DscNodeConfiguration {
        return new DscNodeConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:automation/dscNodeConfiguration:DscNodeConfiguration';

    /**
     * Returns true if the given object is an instance of DscNodeConfiguration.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DscNodeConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === DscNodeConfiguration.__kuladoType;
    }

    /**
     * The name of the automation account in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    public readonly automationAccountName!: kulado.Output<string>;
    public /*out*/ readonly configurationName!: kulado.Output<string>;
    /**
     * The PowerShell DSC Node Configuration (mof content).
     */
    public readonly contentEmbedded!: kulado.Output<string>;
    /**
     * Specifies the name of the DSC Node Configuration. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;

    /**
     * Create a DscNodeConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DscNodeConfigurationArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: DscNodeConfigurationArgs | DscNodeConfigurationState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DscNodeConfigurationState | undefined;
            inputs["automationAccountName"] = state ? state.automationAccountName : undefined;
            inputs["configurationName"] = state ? state.configurationName : undefined;
            inputs["contentEmbedded"] = state ? state.contentEmbedded : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as DscNodeConfigurationArgs | undefined;
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
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["configurationName"] = undefined /*out*/;
        }
        super(DscNodeConfiguration.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DscNodeConfiguration resources.
 */
export interface DscNodeConfigurationState {
    /**
     * The name of the automation account in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName?: kulado.Input<string>;
    readonly configurationName?: kulado.Input<string>;
    /**
     * The PowerShell DSC Node Configuration (mof content).
     */
    readonly contentEmbedded?: kulado.Input<string>;
    /**
     * Specifies the name of the DSC Node Configuration. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a DscNodeConfiguration resource.
 */
export interface DscNodeConfigurationArgs {
    /**
     * The name of the automation account in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: kulado.Input<string>;
    /**
     * The PowerShell DSC Node Configuration (mof content).
     */
    readonly contentEmbedded: kulado.Input<string>;
    /**
     * Specifies the name of the DSC Node Configuration. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
}
