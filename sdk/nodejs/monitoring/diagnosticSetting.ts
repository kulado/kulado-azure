// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Diagnostic Setting for an existing Resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const testKeyVault = testResourceGroup.name.apply(name => azure.keyvault.getKeyVault({
 *     name: "example-vault",
 *     resourceGroupName: name,
 * }));
 * const testAccount = testResourceGroup.name.apply(name => azure.storage.getAccount({
 *     name: "examplestoracc",
 *     resourceGroupName: name,
 * }));
 * const testDiagnosticSetting = new azure.monitoring.DiagnosticSetting("test", {
 *     logs: [{
 *         category: "AuditEvent",
 *         enabled: false,
 *         retentionPolicy: {
 *             enabled: false,
 *         },
 *     }],
 *     metrics: [{
 *         category: "AllMetrics",
 *         retentionPolicy: {
 *             enabled: false,
 *         },
 *     }],
 *     name: "example",
 *     storageAccountId: testAccount.id,
 *     targetResourceId: testKeyVault.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/monitor_diagnostic_setting.html.markdown.
 */
export class DiagnosticSetting extends kulado.CustomResource {
    /**
     * Get an existing DiagnosticSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: DiagnosticSettingState, opts?: kulado.CustomResourceOptions): DiagnosticSetting {
        return new DiagnosticSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:monitoring/diagnosticSetting:DiagnosticSetting';

    /**
     * Returns true if the given object is an instance of DiagnosticSetting.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiagnosticSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === DiagnosticSetting.__kuladoType;
    }

    /**
     * Specifies the ID of an Event Hub Namespace Authorization Rule used to send Diagnostics Data. Changing this forces a new resource to be created.
     */
    public readonly eventhubAuthorizationRuleId!: kulado.Output<string | undefined>;
    /**
     * Specifies the name of the Event Hub where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    public readonly eventhubName!: kulado.Output<string | undefined>;
    /**
     * One or more `log` blocks as defined below.
     */
    public readonly logs!: kulado.Output<{ category: string, enabled?: boolean, retentionPolicy: { days?: number, enabled: boolean } }[] | undefined>;
    /**
     * Specifies the ID of a Log Analytics Workspace where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    public readonly logAnalyticsWorkspaceId!: kulado.Output<string | undefined>;
    /**
     * One or more `metric` blocks as defined below.
     */
    public readonly metrics!: kulado.Output<{ category: string, enabled?: boolean, retentionPolicy: { days?: number, enabled: boolean } }[] | undefined>;
    /**
     * Specifies the name of the Diagnostic Setting. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * With this parameter you can specify a storage account which should be used to send the logs to. Parameter must be a valid Azure Resource ID. Changing this forces a new resource to be created.
     */
    public readonly storageAccountId!: kulado.Output<string | undefined>;
    /**
     * The ID of an existing Resource on which to configure Diagnostic Settings. Changing this forces a new resource to be created.
     */
    public readonly targetResourceId!: kulado.Output<string>;

    /**
     * Create a DiagnosticSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiagnosticSettingArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: DiagnosticSettingArgs | DiagnosticSettingState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DiagnosticSettingState | undefined;
            inputs["eventhubAuthorizationRuleId"] = state ? state.eventhubAuthorizationRuleId : undefined;
            inputs["eventhubName"] = state ? state.eventhubName : undefined;
            inputs["logs"] = state ? state.logs : undefined;
            inputs["logAnalyticsWorkspaceId"] = state ? state.logAnalyticsWorkspaceId : undefined;
            inputs["metrics"] = state ? state.metrics : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["storageAccountId"] = state ? state.storageAccountId : undefined;
            inputs["targetResourceId"] = state ? state.targetResourceId : undefined;
        } else {
            const args = argsOrState as DiagnosticSettingArgs | undefined;
            if (!args || args.targetResourceId === undefined) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            inputs["eventhubAuthorizationRuleId"] = args ? args.eventhubAuthorizationRuleId : undefined;
            inputs["eventhubName"] = args ? args.eventhubName : undefined;
            inputs["logs"] = args ? args.logs : undefined;
            inputs["logAnalyticsWorkspaceId"] = args ? args.logAnalyticsWorkspaceId : undefined;
            inputs["metrics"] = args ? args.metrics : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            inputs["targetResourceId"] = args ? args.targetResourceId : undefined;
        }
        super(DiagnosticSetting.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DiagnosticSetting resources.
 */
export interface DiagnosticSettingState {
    /**
     * Specifies the ID of an Event Hub Namespace Authorization Rule used to send Diagnostics Data. Changing this forces a new resource to be created.
     */
    readonly eventhubAuthorizationRuleId?: kulado.Input<string>;
    /**
     * Specifies the name of the Event Hub where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    readonly eventhubName?: kulado.Input<string>;
    /**
     * One or more `log` blocks as defined below.
     */
    readonly logs?: kulado.Input<kulado.Input<{ category: kulado.Input<string>, enabled?: kulado.Input<boolean>, retentionPolicy: kulado.Input<{ days?: kulado.Input<number>, enabled: kulado.Input<boolean> }> }>[]>;
    /**
     * Specifies the ID of a Log Analytics Workspace where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    readonly logAnalyticsWorkspaceId?: kulado.Input<string>;
    /**
     * One or more `metric` blocks as defined below.
     */
    readonly metrics?: kulado.Input<kulado.Input<{ category: kulado.Input<string>, enabled?: kulado.Input<boolean>, retentionPolicy: kulado.Input<{ days?: kulado.Input<number>, enabled: kulado.Input<boolean> }> }>[]>;
    /**
     * Specifies the name of the Diagnostic Setting. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * With this parameter you can specify a storage account which should be used to send the logs to. Parameter must be a valid Azure Resource ID. Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: kulado.Input<string>;
    /**
     * The ID of an existing Resource on which to configure Diagnostic Settings. Changing this forces a new resource to be created.
     */
    readonly targetResourceId?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a DiagnosticSetting resource.
 */
export interface DiagnosticSettingArgs {
    /**
     * Specifies the ID of an Event Hub Namespace Authorization Rule used to send Diagnostics Data. Changing this forces a new resource to be created.
     */
    readonly eventhubAuthorizationRuleId?: kulado.Input<string>;
    /**
     * Specifies the name of the Event Hub where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    readonly eventhubName?: kulado.Input<string>;
    /**
     * One or more `log` blocks as defined below.
     */
    readonly logs?: kulado.Input<kulado.Input<{ category: kulado.Input<string>, enabled?: kulado.Input<boolean>, retentionPolicy: kulado.Input<{ days?: kulado.Input<number>, enabled: kulado.Input<boolean> }> }>[]>;
    /**
     * Specifies the ID of a Log Analytics Workspace where Diagnostics Data should be sent. Changing this forces a new resource to be created.
     */
    readonly logAnalyticsWorkspaceId?: kulado.Input<string>;
    /**
     * One or more `metric` blocks as defined below.
     */
    readonly metrics?: kulado.Input<kulado.Input<{ category: kulado.Input<string>, enabled?: kulado.Input<boolean>, retentionPolicy: kulado.Input<{ days?: kulado.Input<number>, enabled: kulado.Input<boolean> }> }>[]>;
    /**
     * Specifies the name of the Diagnostic Setting. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * With this parameter you can specify a storage account which should be used to send the logs to. Parameter must be a valid Azure Resource ID. Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: kulado.Input<string>;
    /**
     * The ID of an existing Resource on which to configure Diagnostic Settings. Changing this forces a new resource to be created.
     */
    readonly targetResourceId: kulado.Input<string>;
}
