// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Allows you to manage an Azure SQL Firewall Rule
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "acceptanceTestResourceGroup1",
 * });
 * const testSqlServer = new azure.sql.SqlServer("test", {
 *     administratorLogin: "4dm1n157r470r",
 *     administratorLoginPassword: "4-v3ry-53cr37-p455w0rd",
 *     location: "West US",
 *     name: "mysqlserver",
 *     resourceGroupName: testResourceGroup.name,
 *     version: "12.0",
 * });
 * const testFirewallRule = new azure.sql.FirewallRule("test", {
 *     endIpAddress: "10.0.17.62",
 *     name: "FirewallRule1",
 *     resourceGroupName: testResourceGroup.name,
 *     serverName: testSqlServer.name,
 *     startIpAddress: "10.0.17.62",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/sql_firewall_rule.html.markdown.
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
    public static readonly __kuladoType = 'azure:sql/firewallRule:FirewallRule';

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
     * The ending IP address to allow through the firewall for this rule.
     */
    public readonly endIpAddress!: kulado.Output<string>;
    /**
     * The name of the firewall rule.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which to
     * create the sql server.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The name of the SQL Server on which to create the Firewall Rule.
     */
    public readonly serverName!: kulado.Output<string>;
    /**
     * The starting IP address to allow through the firewall for this rule.
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
     * The ending IP address to allow through the firewall for this rule.
     */
    readonly endIpAddress?: kulado.Input<string>;
    /**
     * The name of the firewall rule.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the sql server.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The name of the SQL Server on which to create the Firewall Rule.
     */
    readonly serverName?: kulado.Input<string>;
    /**
     * The starting IP address to allow through the firewall for this rule.
     */
    readonly startIpAddress?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * The ending IP address to allow through the firewall for this rule.
     */
    readonly endIpAddress: kulado.Input<string>;
    /**
     * The name of the firewall rule.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the sql server.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * The name of the SQL Server on which to create the Firewall Rule.
     */
    readonly serverName: kulado.Input<string>;
    /**
     * The starting IP address to allow through the firewall for this rule.
     */
    readonly startIpAddress: kulado.Input<string>;
}
