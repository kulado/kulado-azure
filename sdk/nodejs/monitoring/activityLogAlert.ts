// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/monitor_activity_log_alert.html.markdown.
 */
export class ActivityLogAlert extends kulado.CustomResource {
    /**
     * Get an existing ActivityLogAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ActivityLogAlertState, opts?: kulado.CustomResourceOptions): ActivityLogAlert {
        return new ActivityLogAlert(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:monitoring/activityLogAlert:ActivityLogAlert';

    /**
     * Returns true if the given object is an instance of ActivityLogAlert.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActivityLogAlert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === ActivityLogAlert.__kuladoType;
    }

    /**
     * One or more `action` blocks as defined below.
     */
    public readonly actions!: kulado.Output<{ actionGroupId: string, webhookProperties?: {[key: string]: string} }[] | undefined>;
    /**
     * A `criteria` block as defined below.
     */
    public readonly criteria!: kulado.Output<{ caller?: string, category: string, level?: string, operationName?: string, resourceGroup?: string, resourceId?: string, resourceProvider?: string, resourceType?: string, status?: string, subStatus?: string }>;
    /**
     * The description of this activity log alert.
     */
    public readonly description!: kulado.Output<string | undefined>;
    /**
     * Should this Activity Log Alert be enabled? Defaults to `true`.
     */
    public readonly enabled!: kulado.Output<boolean | undefined>;
    /**
     * The name of the activity log alert. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which to create the activity log alert instance.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The Scope at which the Activity Log should be applied, for example a the Resource ID of a Subscription or a Resource (such as a Storage Account).
     */
    public readonly scopes!: kulado.Output<string[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;

    /**
     * Create a ActivityLogAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActivityLogAlertArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActivityLogAlertArgs | ActivityLogAlertState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ActivityLogAlertState | undefined;
            inputs["actions"] = state ? state.actions : undefined;
            inputs["criteria"] = state ? state.criteria : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["scopes"] = state ? state.scopes : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ActivityLogAlertArgs | undefined;
            if (!args || args.criteria === undefined) {
                throw new Error("Missing required property 'criteria'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.scopes === undefined) {
                throw new Error("Missing required property 'scopes'");
            }
            inputs["actions"] = args ? args.actions : undefined;
            inputs["criteria"] = args ? args.criteria : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["scopes"] = args ? args.scopes : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        super(ActivityLogAlert.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ActivityLogAlert resources.
 */
export interface ActivityLogAlertState {
    /**
     * One or more `action` blocks as defined below.
     */
    readonly actions?: kulado.Input<kulado.Input<{ actionGroupId: kulado.Input<string>, webhookProperties?: kulado.Input<{[key: string]: kulado.Input<string>}> }>[]>;
    /**
     * A `criteria` block as defined below.
     */
    readonly criteria?: kulado.Input<{ caller?: kulado.Input<string>, category: kulado.Input<string>, level?: kulado.Input<string>, operationName?: kulado.Input<string>, resourceGroup?: kulado.Input<string>, resourceId?: kulado.Input<string>, resourceProvider?: kulado.Input<string>, resourceType?: kulado.Input<string>, status?: kulado.Input<string>, subStatus?: kulado.Input<string> }>;
    /**
     * The description of this activity log alert.
     */
    readonly description?: kulado.Input<string>;
    /**
     * Should this Activity Log Alert be enabled? Defaults to `true`.
     */
    readonly enabled?: kulado.Input<boolean>;
    /**
     * The name of the activity log alert. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the activity log alert instance.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The Scope at which the Activity Log should be applied, for example a the Resource ID of a Subscription or a Resource (such as a Storage Account).
     */
    readonly scopes?: kulado.Input<kulado.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a ActivityLogAlert resource.
 */
export interface ActivityLogAlertArgs {
    /**
     * One or more `action` blocks as defined below.
     */
    readonly actions?: kulado.Input<kulado.Input<{ actionGroupId: kulado.Input<string>, webhookProperties?: kulado.Input<{[key: string]: kulado.Input<string>}> }>[]>;
    /**
     * A `criteria` block as defined below.
     */
    readonly criteria: kulado.Input<{ caller?: kulado.Input<string>, category: kulado.Input<string>, level?: kulado.Input<string>, operationName?: kulado.Input<string>, resourceGroup?: kulado.Input<string>, resourceId?: kulado.Input<string>, resourceProvider?: kulado.Input<string>, resourceType?: kulado.Input<string>, status?: kulado.Input<string>, subStatus?: kulado.Input<string> }>;
    /**
     * The description of this activity log alert.
     */
    readonly description?: kulado.Input<string>;
    /**
     * Should this Activity Log Alert be enabled? Defaults to `true`.
     */
    readonly enabled?: kulado.Input<boolean>;
    /**
     * The name of the activity log alert. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the activity log alert instance.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * The Scope at which the Activity Log should be applied, for example a the Resource ID of a Subscription or a Resource (such as a Storage Account).
     */
    readonly scopes: kulado.Input<kulado.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}
