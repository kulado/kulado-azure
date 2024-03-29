// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Subscription.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const current = kulado.output(azure.core.getSubscription({}));
 * 
 * export const currentSubscriptionDisplayName = current.displayName;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/subscription.html.markdown.
 */
export function getSubscription(args?: GetSubscriptionArgs, opts?: kulado.InvokeOptions): Promise<GetSubscriptionResult> & GetSubscriptionResult {
    args = args || {};
    const promise: Promise<GetSubscriptionResult> = kulado.runtime.invoke("azure:core/getSubscription:getSubscription", {
        "subscriptionId": args.subscriptionId,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getSubscription.
 */
export interface GetSubscriptionArgs {
    /**
     * Specifies the ID of the subscription. If this argument is omitted, the subscription ID of the current Azure Resource Manager provider is used.
     */
    readonly subscriptionId?: string;
}

/**
 * A collection of values returned by getSubscription.
 */
export interface GetSubscriptionResult {
    /**
     * The subscription display name.
     */
    readonly displayName: string;
    /**
     * The subscription location placement ID.
     */
    readonly locationPlacementId: string;
    /**
     * The subscription quota ID.
     */
    readonly quotaId: string;
    /**
     * The subscription spending limit.
     */
    readonly spendingLimit: string;
    /**
     * The subscription state. Possible values are Enabled, Warned, PastDue, Disabled, and Deleted.
     */
    readonly state: string;
    /**
     * The subscription GUID.
     */
    readonly subscriptionId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
