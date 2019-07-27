// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Firewall Rule for a MySQL Server
 * 
 * ## Example Usage (Single IP Address)
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testServer = new azure.mysql.Server("test", {});
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "api-rg-pro",
 * });
 * const testFirewallRule = new azure.mysql.FirewallRule("test", {
 *     endIpAddress: "40.112.8.12",
 *     name: "office",
 *     resourceGroupName: testResourceGroup.name,
 *     serverName: testServer.name,
 *     startIpAddress: "40.112.8.12",
 * });
 * ```
 * 
 * ## Example Usage (IP Range)
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testServer = new azure.mysql.Server("test", {});
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "api-rg-pro",
 * });
 * const testFirewallRule = new azure.mysql.FirewallRule("test", {
 *     endIpAddress: "40.112.255.255",
 *     name: "office",
 *     resourceGroupName: testResourceGroup.name,
 *     serverName: testServer.name,
 *     startIpAddress: "40.112.0.0",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/mysql_firewall_rule.html.markdown.
 */
export class FirewallRule extends kulado.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: FirewallRuleState, opts?: kulado.CustomResourceOptions): FirewallRule {
        return new FirewallRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:mysql/firewallRule:FirewallRule';

    /**
     * Returns true if the given object is an instance of FirewallRule.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === FirewallRule.__kuladoType;
    }

    /**
     * Specifies the End IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.
     */
    public readonly endIpAddress!: kulado.Output<string>;
    /**
     * Specifies the name of the MySQL Firewall Rule. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * Specifies the name of the MySQL Server. Changing this forces a new resource to be created.
     */
    public readonly serverName!: kulado.Output<string>;
    /**
     * Specifies the Start IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.
     */
    public readonly startIpAddress!: kulado.Output<string>;

    /**
     * Create a FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallRuleArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallRuleArgs | FirewallRuleState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FirewallRuleState | undefined;
            inputs["endIpAddress"] = state ? state.endIpAddress : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["serverName"] = state ? state.serverName : undefined;
            inputs["startIpAddress"] = state ? state.startIpAddress : undefined;
        } else {
            const args = argsOrState as FirewallRuleArgs | undefined;
            if (!args || args.endIpAddress === undefined) {
                throw new Error("Missing required property 'endIpAddress'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverName === undefined) {
                throw new Error("Missing required property 'serverName'");
            }
            if (!args || args.startIpAddress === undefined) {
                throw new Error("Missing required property 'startIpAddress'");
            }
            inputs["endIpAddress"] = args ? args.endIpAddress : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["startIpAddress"] = args ? args.startIpAddress : undefined;
        }
        super(FirewallRule.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FirewallRule resources.
 */
export interface FirewallRuleState {
    /**
     * Specifies the End IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.
     */
    readonly endIpAddress?: kulado.Input<string>;
    /**
     * Specifies the name of the MySQL Firewall Rule. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * Specifies the name of the MySQL Server. Changing this forces a new resource to be created.
     */
    readonly serverName?: kulado.Input<string>;
    /**
     * Specifies the Start IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.
     */
    readonly startIpAddress?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * Specifies the End IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.
     */
    readonly endIpAddress: kulado.Input<string>;
    /**
     * Specifies the name of the MySQL Firewall Rule. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * Specifies the name of the MySQL Server. Changing this forces a new resource to be created.
     */
    readonly serverName: kulado.Input<string>;
    /**
     * Specifies the Start IP Address associated with this Firewall Rule. Changing this forces a new resource to be created.
     */
    readonly startIpAddress: kulado.Input<string>;
}
