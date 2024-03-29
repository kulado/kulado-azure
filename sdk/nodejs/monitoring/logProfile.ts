// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a [Log Profile](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-overview-activity-logs#export-the-activity-log-with-a-log-profile). A Log Profile configures how Activity Logs are exported.
 * 
 * > **NOTE:** It's only possible to configure one Log Profile per Subscription. If you are trying to create more than one Log Profile, an error with `StatusCode=409` will occur.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "eastus",
 *     name: "logprofiletest-rg",
 * });
 * const testEventHubNamespace = new azure.eventhub.EventHubNamespace("test", {
 *     capacity: 2,
 *     location: testResourceGroup.location,
 *     name: "logprofileeventhub",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: "Standard",
 * });
 * const testAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "GRS",
 *     accountTier: "Standard",
 *     location: testResourceGroup.location,
 *     name: "afscsdfytw",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testLogProfile = new azure.monitoring.LogProfile("test", {
 *     categories: [
 *         "Action",
 *         "Delete",
 *         "Write",
 *     ],
 *     locations: [
 *         "westus",
 *         "global",
 *     ],
 *     name: "default",
 *     retentionPolicy: {
 *         days: 7,
 *         enabled: true,
 *     },
 *     servicebusRuleId: kulado.interpolate`${testEventHubNamespace.id}/authorizationrules/RootManageSharedAccessKey`,
 *     storageAccountId: testAccount.id,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/monitor_log_profile.html.markdown.
 */
export class LogProfile extends kulado.CustomResource {
    /**
     * Get an existing LogProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: LogProfileState, opts?: kulado.CustomResourceOptions): LogProfile {
        return new LogProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:monitoring/logProfile:LogProfile';

    /**
     * Returns true if the given object is an instance of LogProfile.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === LogProfile.__kuladoType;
    }

    /**
     * List of categories of the logs.
     */
    public readonly categories!: kulado.Output<string[]>;
    /**
     * List of regions for which Activity Log events are stored or streamed.
     */
    public readonly locations!: kulado.Output<string[]>;
    /**
     * The name of the Log Profile. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * A `retention_policy` block as documented below. A retention policy for how long Activity Logs are retained in the storage account.
     */
    public readonly retentionPolicy!: kulado.Output<{ days?: number, enabled: boolean }>;
    /**
     * The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
     */
    public readonly servicebusRuleId!: kulado.Output<string | undefined>;
    /**
     * The resource ID of the storage account in which the Activity Log is stored. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
     */
    public readonly storageAccountId!: kulado.Output<string | undefined>;

    /**
     * Create a LogProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogProfileArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogProfileArgs | LogProfileState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LogProfileState | undefined;
            inputs["categories"] = state ? state.categories : undefined;
            inputs["locations"] = state ? state.locations : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["retentionPolicy"] = state ? state.retentionPolicy : undefined;
            inputs["servicebusRuleId"] = state ? state.servicebusRuleId : undefined;
            inputs["storageAccountId"] = state ? state.storageAccountId : undefined;
        } else {
            const args = argsOrState as LogProfileArgs | undefined;
            if (!args || args.categories === undefined) {
                throw new Error("Missing required property 'categories'");
            }
            if (!args || args.locations === undefined) {
                throw new Error("Missing required property 'locations'");
            }
            if (!args || args.retentionPolicy === undefined) {
                throw new Error("Missing required property 'retentionPolicy'");
            }
            inputs["categories"] = args ? args.categories : undefined;
            inputs["locations"] = args ? args.locations : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["retentionPolicy"] = args ? args.retentionPolicy : undefined;
            inputs["servicebusRuleId"] = args ? args.servicebusRuleId : undefined;
            inputs["storageAccountId"] = args ? args.storageAccountId : undefined;
        }
        super(LogProfile.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LogProfile resources.
 */
export interface LogProfileState {
    /**
     * List of categories of the logs.
     */
    readonly categories?: kulado.Input<kulado.Input<string>[]>;
    /**
     * List of regions for which Activity Log events are stored or streamed.
     */
    readonly locations?: kulado.Input<kulado.Input<string>[]>;
    /**
     * The name of the Log Profile. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * A `retention_policy` block as documented below. A retention policy for how long Activity Logs are retained in the storage account.
     */
    readonly retentionPolicy?: kulado.Input<{ days?: kulado.Input<number>, enabled: kulado.Input<boolean> }>;
    /**
     * The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
     */
    readonly servicebusRuleId?: kulado.Input<string>;
    /**
     * The resource ID of the storage account in which the Activity Log is stored. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
     */
    readonly storageAccountId?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a LogProfile resource.
 */
export interface LogProfileArgs {
    /**
     * List of categories of the logs.
     */
    readonly categories: kulado.Input<kulado.Input<string>[]>;
    /**
     * List of regions for which Activity Log events are stored or streamed.
     */
    readonly locations: kulado.Input<kulado.Input<string>[]>;
    /**
     * The name of the Log Profile. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * A `retention_policy` block as documented below. A retention policy for how long Activity Logs are retained in the storage account.
     */
    readonly retentionPolicy: kulado.Input<{ days?: kulado.Input<number>, enabled: kulado.Input<boolean> }>;
    /**
     * The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
     */
    readonly servicebusRuleId?: kulado.Input<string>;
    /**
     * The resource ID of the storage account in which the Activity Log is stored. At least one of `storage_account_id` or `servicebus_rule_id` must be set.
     */
    readonly storageAccountId?: kulado.Input<string>;
}
