// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Allows you to manage an Azure SQL Elastic Pool.
 * 
 * > **NOTE:** -  This version of the `Elasticpool` resource is being **deprecated** and should no longer be used. Please use the azurerm_mssql_elasticpool version instead.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "my-resource-group",
 * });
 * const testSqlServer = new azure.sql.SqlServer("test", {
 *     administratorLogin: "4dm1n157r470r",
 *     administratorLoginPassword: "4-v3ry-53cr37-p455w0rd",
 *     location: testResourceGroup.location,
 *     name: "my-sql-server", // NOTE: needs to be globally unique
 *     resourceGroupName: testResourceGroup.name,
 *     version: "12.0",
 * });
 * const testElasticPool = new azure.sql.ElasticPool("test", {
 *     dbDtuMax: 5,
 *     dbDtuMin: 0,
 *     dtu: 50,
 *     edition: "Basic",
 *     location: testResourceGroup.location,
 *     name: "test",
 *     poolSize: 5000,
 *     resourceGroupName: testResourceGroup.name,
 *     serverName: testSqlServer.name,
 * });
 * ```
 * 
 * > **NOTE on `azurerm_sql_elasticpool`:** -  The values of `edition`, `dtu`, and `pool_size` must be consistent with the [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus). Any inconsistent argument configuration will be rejected.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/sql_elasticpool.html.markdown.
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
    public static readonly __kuladoType = 'azure:sql/elasticPool:ElasticPool';

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

    /**
     * The creation date of the SQL Elastic Pool.
     */
    public /*out*/ readonly creationDate!: kulado.Output<string>;
    /**
     * The maximum DTU which will be guaranteed to all databases in the elastic pool to be created.
     */
    public readonly dbDtuMax!: kulado.Output<number>;
    /**
     * The minimum DTU which will be guaranteed to all databases in the elastic pool to be created.
     */
    public readonly dbDtuMin!: kulado.Output<number>;
    /**
     * The total shared DTU for the elastic pool. Valid values depend on the `edition` which has been defined. Refer to [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus) for valid combinations.
     */
    public readonly dtu!: kulado.Output<number>;
    /**
     * The edition of the elastic pool to be created. Valid values are `Basic`, `Standard`, and `Premium`. Refer to [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus) for details. Changing this forces a new resource to be created.
     */
    public readonly edition!: kulado.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * The name of the elastic pool. This needs to be globally unique. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The maximum size in MB that all databases in the elastic pool can grow to. The maximum size must be consistent with combination of `edition` and `dtu` and the limits documented in [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus). If not defined when creating an elastic pool, the value is set to the size implied by `edition` and `dtu`.
     */
    public readonly poolSize!: kulado.Output<number>;
    /**
     * The name of the resource group in which to create the elastic pool. This must be the same as the resource group of the underlying SQL server.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The name of the SQL Server on which to create the elastic pool. Changing this forces a new resource to be created.
     */
    public readonly serverName!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;

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
            inputs["creationDate"] = state ? state.creationDate : undefined;
            inputs["dbDtuMax"] = state ? state.dbDtuMax : undefined;
            inputs["dbDtuMin"] = state ? state.dbDtuMin : undefined;
            inputs["dtu"] = state ? state.dtu : undefined;
            inputs["edition"] = state ? state.edition : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["poolSize"] = state ? state.poolSize : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["serverName"] = state ? state.serverName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ElasticPoolArgs | undefined;
            if (!args || args.dtu === undefined) {
                throw new Error("Missing required property 'dtu'");
            }
            if (!args || args.edition === undefined) {
                throw new Error("Missing required property 'edition'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverName === undefined) {
                throw new Error("Missing required property 'serverName'");
            }
            inputs["dbDtuMax"] = args ? args.dbDtuMax : undefined;
            inputs["dbDtuMin"] = args ? args.dbDtuMin : undefined;
            inputs["dtu"] = args ? args.dtu : undefined;
            inputs["edition"] = args ? args.edition : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["poolSize"] = args ? args.poolSize : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["creationDate"] = undefined /*out*/;
        }
        super(ElasticPool.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ElasticPool resources.
 */
export interface ElasticPoolState {
    /**
     * The creation date of the SQL Elastic Pool.
     */
    readonly creationDate?: kulado.Input<string>;
    /**
     * The maximum DTU which will be guaranteed to all databases in the elastic pool to be created.
     */
    readonly dbDtuMax?: kulado.Input<number>;
    /**
     * The minimum DTU which will be guaranteed to all databases in the elastic pool to be created.
     */
    readonly dbDtuMin?: kulado.Input<number>;
    /**
     * The total shared DTU for the elastic pool. Valid values depend on the `edition` which has been defined. Refer to [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus) for valid combinations.
     */
    readonly dtu?: kulado.Input<number>;
    /**
     * The edition of the elastic pool to be created. Valid values are `Basic`, `Standard`, and `Premium`. Refer to [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus) for details. Changing this forces a new resource to be created.
     */
    readonly edition?: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The name of the elastic pool. This needs to be globally unique. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The maximum size in MB that all databases in the elastic pool can grow to. The maximum size must be consistent with combination of `edition` and `dtu` and the limits documented in [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus). If not defined when creating an elastic pool, the value is set to the size implied by `edition` and `dtu`.
     */
    readonly poolSize?: kulado.Input<number>;
    /**
     * The name of the resource group in which to create the elastic pool. This must be the same as the resource group of the underlying SQL server.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The name of the SQL Server on which to create the elastic pool. Changing this forces a new resource to be created.
     */
    readonly serverName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a ElasticPool resource.
 */
export interface ElasticPoolArgs {
    /**
     * The maximum DTU which will be guaranteed to all databases in the elastic pool to be created.
     */
    readonly dbDtuMax?: kulado.Input<number>;
    /**
     * The minimum DTU which will be guaranteed to all databases in the elastic pool to be created.
     */
    readonly dbDtuMin?: kulado.Input<number>;
    /**
     * The total shared DTU for the elastic pool. Valid values depend on the `edition` which has been defined. Refer to [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus) for valid combinations.
     */
    readonly dtu: kulado.Input<number>;
    /**
     * The edition of the elastic pool to be created. Valid values are `Basic`, `Standard`, and `Premium`. Refer to [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus) for details. Changing this forces a new resource to be created.
     */
    readonly edition: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The name of the elastic pool. This needs to be globally unique. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The maximum size in MB that all databases in the elastic pool can grow to. The maximum size must be consistent with combination of `edition` and `dtu` and the limits documented in [Azure SQL Database Service Tiers](https://docs.microsoft.com/en-gb/azure/sql-database/sql-database-service-tiers#elastic-pool-service-tiers-and-performance-in-edtus). If not defined when creating an elastic pool, the value is set to the size implied by `edition` and `dtu`.
     */
    readonly poolSize?: kulado.Input<number>;
    /**
     * The name of the resource group in which to create the elastic pool. This must be the same as the resource group of the underlying SQL server.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * The name of the SQL Server on which to create the elastic pool. Changing this forces a new resource to be created.
     */
    readonly serverName: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}
