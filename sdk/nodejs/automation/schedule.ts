// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Automation Schedule.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West Europe",
 *     name: "tfex-automation-account",
 * });
 * const exampleAccount = new azure.automation.Account("example", {
 *     location: exampleResourceGroup.location,
 *     name: "tfex-automation-account",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         name: "Basic",
 *     },
 * });
 * const exampleSchedule = new azure.automation.Schedule("example", {
 *     automationAccountName: exampleAccount.name,
 *     description: "This is an example schedule",
 *     frequency: "Week",
 *     interval: 1,
 *     name: "tfex-automation-schedule",
 *     resourceGroupName: exampleResourceGroup.name,
 *     startTime: "2014-04-15T18:00:15+02:00",
 *     timezone: "Central Europe Standard Time",
 *     weekDays: ["Friday"],
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/automation_schedule.html.markdown.
 */
export class Schedule extends kulado.CustomResource {
    /**
     * Get an existing Schedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ScheduleState, opts?: kulado.CustomResourceOptions): Schedule {
        return new Schedule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:automation/schedule:Schedule';

    /**
     * Returns true if the given object is an instance of Schedule.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Schedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Schedule.__kuladoType;
    }

    public readonly accountName!: kulado.Output<string>;
    /**
     * The name of the automation account in which the Schedule is created. Changing this forces a new resource to be created.
     */
    public readonly automationAccountName!: kulado.Output<string>;
    /**
     * A description for this Schedule.
     */
    public readonly description!: kulado.Output<string | undefined>;
    /**
     * The end time of the schedule.
     */
    public readonly expiryTime!: kulado.Output<string>;
    /**
     * The frequency of the schedule. - can be either `OneTime`, `Day`, `Hour`, `Week`, or `Month`.
     */
    public readonly frequency!: kulado.Output<string>;
    /**
     * The number of `frequency`s between runs. Only valid when frequency is `Day`, `Hour`, `Week`, or `Month` and defaults to `1`.
     */
    public readonly interval!: kulado.Output<number>;
    /**
     * List of days of the month that the job should execute on. Must be between `1` and `31`. `-1` for last day of the month. Only valid when frequency is `Month`.
     */
    public readonly monthDays!: kulado.Output<number[] | undefined>;
    /**
     * List of occurrences of days within a month. Only valid when frequency is `Month`. The `monthly_occurrence` block supports fields documented below.
     */
    public readonly monthlyOccurrences!: kulado.Output<{ day: string, occurrence: number }[] | undefined>;
    /**
     * Specifies the name of the Schedule. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which the Schedule is created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * Start time of the schedule. Must be at least five minutes in the future. Defaults to seven minutes in the future from the time the resource is created.
     */
    public readonly startTime!: kulado.Output<string>;
    /**
     * The timezone of the start time. Defaults to `UTC`. For possible values see: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
     */
    public readonly timezone!: kulado.Output<string | undefined>;
    /**
     * List of days of the week that the job should execute on. Only valid when frequency is `Week`.
     */
    public readonly weekDays!: kulado.Output<string[] | undefined>;

    /**
     * Create a Schedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduleArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScheduleArgs | ScheduleState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ScheduleState | undefined;
            inputs["accountName"] = state ? state.accountName : undefined;
            inputs["automationAccountName"] = state ? state.automationAccountName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["expiryTime"] = state ? state.expiryTime : undefined;
            inputs["frequency"] = state ? state.frequency : undefined;
            inputs["interval"] = state ? state.interval : undefined;
            inputs["monthDays"] = state ? state.monthDays : undefined;
            inputs["monthlyOccurrences"] = state ? state.monthlyOccurrences : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["startTime"] = state ? state.startTime : undefined;
            inputs["timezone"] = state ? state.timezone : undefined;
            inputs["weekDays"] = state ? state.weekDays : undefined;
        } else {
            const args = argsOrState as ScheduleArgs | undefined;
            if (!args || args.frequency === undefined) {
                throw new Error("Missing required property 'frequency'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["expiryTime"] = args ? args.expiryTime : undefined;
            inputs["frequency"] = args ? args.frequency : undefined;
            inputs["interval"] = args ? args.interval : undefined;
            inputs["monthDays"] = args ? args.monthDays : undefined;
            inputs["monthlyOccurrences"] = args ? args.monthlyOccurrences : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["startTime"] = args ? args.startTime : undefined;
            inputs["timezone"] = args ? args.timezone : undefined;
            inputs["weekDays"] = args ? args.weekDays : undefined;
        }
        super(Schedule.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Schedule resources.
 */
export interface ScheduleState {
    readonly accountName?: kulado.Input<string>;
    /**
     * The name of the automation account in which the Schedule is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName?: kulado.Input<string>;
    /**
     * A description for this Schedule.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The end time of the schedule.
     */
    readonly expiryTime?: kulado.Input<string>;
    /**
     * The frequency of the schedule. - can be either `OneTime`, `Day`, `Hour`, `Week`, or `Month`.
     */
    readonly frequency?: kulado.Input<string>;
    /**
     * The number of `frequency`s between runs. Only valid when frequency is `Day`, `Hour`, `Week`, or `Month` and defaults to `1`.
     */
    readonly interval?: kulado.Input<number>;
    /**
     * List of days of the month that the job should execute on. Must be between `1` and `31`. `-1` for last day of the month. Only valid when frequency is `Month`.
     */
    readonly monthDays?: kulado.Input<kulado.Input<number>[]>;
    /**
     * List of occurrences of days within a month. Only valid when frequency is `Month`. The `monthly_occurrence` block supports fields documented below.
     */
    readonly monthlyOccurrences?: kulado.Input<kulado.Input<{ day: kulado.Input<string>, occurrence: kulado.Input<number> }>[]>;
    /**
     * Specifies the name of the Schedule. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which the Schedule is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * Start time of the schedule. Must be at least five minutes in the future. Defaults to seven minutes in the future from the time the resource is created.
     */
    readonly startTime?: kulado.Input<string>;
    /**
     * The timezone of the start time. Defaults to `UTC`. For possible values see: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
     */
    readonly timezone?: kulado.Input<string>;
    /**
     * List of days of the week that the job should execute on. Only valid when frequency is `Week`.
     */
    readonly weekDays?: kulado.Input<kulado.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Schedule resource.
 */
export interface ScheduleArgs {
    readonly accountName?: kulado.Input<string>;
    /**
     * The name of the automation account in which the Schedule is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName?: kulado.Input<string>;
    /**
     * A description for this Schedule.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The end time of the schedule.
     */
    readonly expiryTime?: kulado.Input<string>;
    /**
     * The frequency of the schedule. - can be either `OneTime`, `Day`, `Hour`, `Week`, or `Month`.
     */
    readonly frequency: kulado.Input<string>;
    /**
     * The number of `frequency`s between runs. Only valid when frequency is `Day`, `Hour`, `Week`, or `Month` and defaults to `1`.
     */
    readonly interval?: kulado.Input<number>;
    /**
     * List of days of the month that the job should execute on. Must be between `1` and `31`. `-1` for last day of the month. Only valid when frequency is `Month`.
     */
    readonly monthDays?: kulado.Input<kulado.Input<number>[]>;
    /**
     * List of occurrences of days within a month. Only valid when frequency is `Month`. The `monthly_occurrence` block supports fields documented below.
     */
    readonly monthlyOccurrences?: kulado.Input<kulado.Input<{ day: kulado.Input<string>, occurrence: kulado.Input<number> }>[]>;
    /**
     * Specifies the name of the Schedule. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which the Schedule is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * Start time of the schedule. Must be at least five minutes in the future. Defaults to seven minutes in the future from the time the resource is created.
     */
    readonly startTime?: kulado.Input<string>;
    /**
     * The timezone of the start time. Defaults to `UTC`. For possible values see: https://msdn.microsoft.com/en-us/library/ms912391(v=winembedded.11).aspx
     */
    readonly timezone?: kulado.Input<string>;
    /**
     * List of days of the week that the job should execute on. Only valid when frequency is `Week`.
     */
    readonly weekDays?: kulado.Input<kulado.Input<string>[]>;
}
