// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Allows you to manage an Azure SQL Elastic Pool via the `2017-10-01-preview` API which allows for `vCore` and `DTU` based configurations.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "westeurope",
 *     name: "my-resource-group",
 * });
 * const testSqlServer = new azure.sql.SqlServer("test", {
 *     administratorLogin: "4dm1n157r470r",
 *     administratorLoginPassword: "4-v3ry-53cr37-p455w0rd",
 *     location: testResourceGroup.location,
 *     name: "my-sql-server",
 *     resourceGroupName: testResourceGroup.name,
 *     version: "12.0",
 * });
 * const testElasticPool = new azure.mssql.ElasticPool("test", {
 *     location: testResourceGroup.location,
 *     maxSizeGb: 756,
 *     name: "test-epool",
 *     perDatabaseSettings: {
 *         maxCapacity: 4,
 *         minCapacity: 0.25,
 *     },
 *     resourceGroupName: testResourceGroup.name,
 *     serverName: testSqlServer.name,
 *     sku: {
 *         capacity: 4,
 *         family: "Gen5",
 *         name: "GP_Gen5",
 *         tier: "GeneralPurpose",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/mssql_elasticpool.html.markdown.
 */
export class ElasticPool extends kulado.CustomResource {
    /**
     * Get an existing ElasticPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ElasticPoolState, opts?: kulado.CustomResourceOptions): ElasticPool {
        return new ElasticPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:mssql/elasticPool:ElasticPool';

    /**
     * Returns true if the given object is an instance of ElasticPool.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElasticPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === ElasticPool.__kuladoType;
    }

    public /*out*/ readonly elasticPoolProperties!: kulado.Output<{ creationDate: string, licenseType: string, maxSizeBytes: number, state: string, zoneRedundant: boolean }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * The max data size of the elastic pool in bytes. Conflicts with `max_size_gb`.
     */
    public readonly maxSizeBytes!: kulado.Output<number>;
    /**
     * The max data size of the elastic pool in gigabytes. Conflicts with `max_size_bytes`. 
     */
    public readonly maxSizeGb!: kulado.Output<number>;
    /**
     * Specifies the SKU Name for this Elasticpool. The name of the SKU, will be either `vCore` based `tier` + `family` pattern (e.g. GP_Gen4, BC_Gen5) or the `DTU` based `BasicPool`, `StandardPool`, or `PremiumPool` pattern. 
     */
    public readonly name!: kulado.Output<string>;
    /**
     * A `per_database_settings` block as defined below.
     */
    public readonly perDatabaseSettings!: kulado.Output<{ maxCapacity: number, minCapacity: number }>;
    /**
     * The name of the resource group in which to create the elastic pool. This must be the same as the resource group of the underlying SQL server.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The name of the SQL Server on which to create the elastic pool. Changing this forces a new resource to be created.
     */
    public readonly serverName!: kulado.Output<string>;
    /**
     * A `sku` block as defined below.
     */
    public readonly sku!: kulado.Output<{ capacity: number, family?: string, name: string, tier: string }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * Whether or not this elastic pool is zone redundant. `tier` needs to be `Premium` for `DTU` based  or `BusinessCritical` for `vCore` based `sku`. Defaults to `false`.
     */
    public readonly zoneRedundant!: kulado.Output<boolean | undefined>;

    /**
     * Create a ElasticPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticPoolArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ElasticPoolArgs | ElasticPoolState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ElasticPoolState | undefined;
            inputs["elasticPoolProperties"] = state ? state.elasticPoolProperties : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["maxSizeBytes"] = state ? state.maxSizeBytes : undefined;
            inputs["maxSizeGb"] = state ? state.maxSizeGb : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["perDatabaseSettings"] = state ? state.perDatabaseSettings : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["serverName"] = state ? state.serverName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zoneRedundant"] = state ? state.zoneRedundant : undefined;
        } else {
            const args = argsOrState as ElasticPoolArgs | undefined;
            if (!args || args.perDatabaseSettings === undefined) {
                throw new Error("Missing required property 'perDatabaseSettings'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverName === undefined) {
                throw new Error("Missing required property 'serverName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["maxSizeBytes"] = args ? args.maxSizeBytes : undefined;
            inputs["maxSizeGb"] = args ? args.maxSizeGb : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["perDatabaseSettings"] = args ? args.perDatabaseSettings : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            inputs["elasticPoolProperties"] = undefined /*out*/;
        }
        super(ElasticPool.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ElasticPool resources.
 */
export interface ElasticPoolState {
    readonly elasticPoolProperties?: kulado.Input<{ creationDate?: kulado.Input<string>, licenseType?: kulado.Input<string>, maxSizeBytes?: kulado.Input<number>, state?: kulado.Input<string>, zoneRedundant?: kulado.Input<boolean> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The max data size of the elastic pool in bytes. Conflicts with `max_size_gb`.
     */
    readonly maxSizeBytes?: kulado.Input<number>;
    /**
     * The max data size of the elastic pool in gigabytes. Conflicts with `max_size_bytes`. 
     */
    readonly maxSizeGb?: kulado.Input<number>;
    /**
     * Specifies the SKU Name for this Elasticpool. The name of the SKU, will be either `vCore` based `tier` + `family` pattern (e.g. GP_Gen4, BC_Gen5) or the `DTU` based `BasicPool`, `StandardPool`, or `PremiumPool` pattern. 
     */
    readonly name?: kulado.Input<string>;
    /**
     * A `per_database_settings` block as defined below.
     */
    readonly perDatabaseSettings?: kulado.Input<{ maxCapacity: kulado.Input<number>, minCapacity: kulado.Input<number> }>;
    /**
     * The name of the resource group in which to create the elastic pool. This must be the same as the resource group of the underlying SQL server.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The name of the SQL Server on which to create the elastic pool. Changing this forces a new resource to be created.
     */
    readonly serverName?: kulado.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku?: kulado.Input<{ capacity: kulado.Input<number>, family?: kulado.Input<string>, name: kulado.Input<string>, tier: kulado.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * Whether or not this elastic pool is zone redundant. `tier` needs to be `Premium` for `DTU` based  or `BusinessCritical` for `vCore` based `sku`. Defaults to `false`.
     */
    readonly zoneRedundant?: kulado.Input<boolean>;
}

/**
 * The set of arguments for constructing a ElasticPool resource.
 */
export interface ElasticPoolArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The max data size of the elastic pool in bytes. Conflicts with `max_size_gb`.
     */
    readonly maxSizeBytes?: kulado.Input<number>;
    /**
     * The max data size of the elastic pool in gigabytes. Conflicts with `max_size_bytes`. 
     */
    readonly maxSizeGb?: kulado.Input<number>;
    /**
     * Specifies the SKU Name for this Elasticpool. The name of the SKU, will be either `vCore` based `tier` + `family` pattern (e.g. GP_Gen4, BC_Gen5) or the `DTU` based `BasicPool`, `StandardPool`, or `PremiumPool` pattern. 
     */
    readonly name?: kulado.Input<string>;
    /**
     * A `per_database_settings` block as defined below.
     */
    readonly perDatabaseSettings: kulado.Input<{ maxCapacity: kulado.Input<number>, minCapacity: kulado.Input<number> }>;
    /**
     * The name of the resource group in which to create the elastic pool. This must be the same as the resource group of the underlying SQL server.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * The name of the SQL Server on which to create the elastic pool. Changing this forces a new resource to be created.
     */
    readonly serverName: kulado.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: kulado.Input<{ capacity: kulado.Input<number>, family?: kulado.Input<string>, name: kulado.Input<string>, tier: kulado.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * Whether or not this elastic pool is zone redundant. `tier` needs to be `Premium` for `DTU` based  or `BusinessCritical` for `vCore` based `sku`. Defaults to `false`.
     */
    readonly zoneRedundant?: kulado.Input<boolean>;
}
