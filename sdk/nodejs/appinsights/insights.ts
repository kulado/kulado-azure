// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manage an Application Insights component.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "tf-test",
 * });
 * const testInsights = new azure.appinsights.Insights("test", {
 *     applicationType: "Web",
 *     location: "West Europe",
 *     name: "tf-test-appinsights",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * 
 * export const appId = testInsights.appId;
 * export const instrumentationKey = testInsights.instrumentationKey;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/application_insights.html.markdown.
 */
export class Insights extends kulado.CustomResource {
    /**
     * Get an existing Insights resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: InsightsState, opts?: kulado.CustomResourceOptions): Insights {
        return new Insights(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:appinsights/insights:Insights';

    /**
     * Returns true if the given object is an instance of Insights.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Insights {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Insights.__kuladoType;
    }

    /**
     * The App ID associated with this Application Insights component.
     */
    public /*out*/ readonly appId!: kulado.Output<string>;
    /**
     * Specifies the type of Application Insights to create. Valid values are `ios` for _iOS_, `java` for _Java web_, `MobileCenter` for _App Center_, `Node.JS` for _Node.js_, `other` for _General_, `phone` for _Windows Phone_, `store` for _Windows Store_ and `web` for _ASP.NET_. Please note these values are case sensitive; unmatched values are treated as _ASP.NET_ by Azure. Changing this forces a new resource to be created.
     */
    public readonly applicationType!: kulado.Output<string>;
    /**
     * The Instrumentation Key for this Application Insights component.
     */
    public /*out*/ readonly instrumentationKey!: kulado.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name of the Application Insights component. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which to
     * create the Application Insights component.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;

    /**
     * Create a Insights resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InsightsArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: InsightsArgs | InsightsState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as InsightsState | undefined;
            inputs["appId"] = state ? state.appId : undefined;
            inputs["applicationType"] = state ? state.applicationType : undefined;
            inputs["instrumentationKey"] = state ? state.instrumentationKey : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as InsightsArgs | undefined;
            if (!args || args.applicationType === undefined) {
                throw new Error("Missing required property 'applicationType'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["applicationType"] = args ? args.applicationType : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["appId"] = undefined /*out*/;
            inputs["instrumentationKey"] = undefined /*out*/;
        }
        super(Insights.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Insights resources.
 */
export interface InsightsState {
    /**
     * The App ID associated with this Application Insights component.
     */
    readonly appId?: kulado.Input<string>;
    /**
     * Specifies the type of Application Insights to create. Valid values are `ios` for _iOS_, `java` for _Java web_, `MobileCenter` for _App Center_, `Node.JS` for _Node.js_, `other` for _General_, `phone` for _Windows Phone_, `store` for _Windows Store_ and `web` for _ASP.NET_. Please note these values are case sensitive; unmatched values are treated as _ASP.NET_ by Azure. Changing this forces a new resource to be created.
     */
    readonly applicationType?: kulado.Input<string>;
    /**
     * The Instrumentation Key for this Application Insights component.
     */
    readonly instrumentationKey?: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Application Insights component. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the Application Insights component.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Insights resource.
 */
export interface InsightsArgs {
    /**
     * Specifies the type of Application Insights to create. Valid values are `ios` for _iOS_, `java` for _Java web_, `MobileCenter` for _App Center_, `Node.JS` for _Node.js_, `other` for _General_, `phone` for _Windows Phone_, `store` for _Windows Store_ and `web` for _ASP.NET_. Please note these values are case sensitive; unmatched values are treated as _ASP.NET_ by Azure. Changing this forces a new resource to be created.
     */
    readonly applicationType: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Application Insights component. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the Application Insights component.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}
