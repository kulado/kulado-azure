// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Allows you to set a user or group as the AD administrator for an Azure SQL server
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
 * const current = kulado.output(azure.core.getClientConfig({}));
 * const testSqlServer = new azure.sql.SqlServer("test", {
 *     administratorLogin: "4dm1n157r470r",
 *     administratorLoginPassword: "4-v3ry-53cr37-p455w0rd",
 *     location: testResourceGroup.location,
 *     name: "mysqlserver",
 *     resourceGroupName: testResourceGroup.name,
 *     version: "12.0",
 * });
 * const testActiveDirectoryAdministrator = new azure.sql.ActiveDirectoryAdministrator("test", {
 *     login: "sqladmin",
 *     objectId: current.servicePrincipalObjectId,
 *     resourceGroupName: testResourceGroup.name,
 *     serverName: testSqlServer.name,
 *     tenantId: current.tenantId,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/sql_active_directory_administrator.html.markdown.
 */
export class ActiveDirectoryAdministrator extends kulado.CustomResource {
    /**
     * Get an existing ActiveDirectoryAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ActiveDirectoryAdministratorState, opts?: kulado.CustomResourceOptions): ActiveDirectoryAdministrator {
        return new ActiveDirectoryAdministrator(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:sql/activeDirectoryAdministrator:ActiveDirectoryAdministrator';

    /**
     * Returns true if the given object is an instance of ActiveDirectoryAdministrator.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActiveDirectoryAdministrator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === ActiveDirectoryAdministrator.__kuladoType;
    }

    /**
     * The login name of the principal to set as the server administrator
     */
    public readonly login!: kulado.Output<string>;
    /**
     * The ID of the principal to set as the server administrator
     */
    public readonly objectId!: kulado.Output<string>;
    /**
     * The name of the resource group for the SQL server. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The name of the SQL Server on which to set the administrator. Changing this forces a new resource to be created.
     */
    public readonly serverName!: kulado.Output<string>;
    /**
     * The Azure Tenant ID
     */
    public readonly tenantId!: kulado.Output<string>;

    /**
     * Create a ActiveDirectoryAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActiveDirectoryAdministratorArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActiveDirectoryAdministratorArgs | ActiveDirectoryAdministratorState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ActiveDirectoryAdministratorState | undefined;
            inputs["login"] = state ? state.login : undefined;
            inputs["objectId"] = state ? state.objectId : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["serverName"] = state ? state.serverName : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
        } else {
            const args = argsOrState as ActiveDirectoryAdministratorArgs | undefined;
            if (!args || args.login === undefined) {
                throw new Error("Missing required property 'login'");
            }
            if (!args || args.objectId === undefined) {
                throw new Error("Missing required property 'objectId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverName === undefined) {
                throw new Error("Missing required property 'serverName'");
            }
            if (!args || args.tenantId === undefined) {
                throw new Error("Missing required property 'tenantId'");
            }
            inputs["login"] = args ? args.login : undefined;
            inputs["objectId"] = args ? args.objectId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
        }
        super(ActiveDirectoryAdministrator.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ActiveDirectoryAdministrator resources.
 */
export interface ActiveDirectoryAdministratorState {
    /**
     * The login name of the principal to set as the server administrator
     */
    readonly login?: kulado.Input<string>;
    /**
     * The ID of the principal to set as the server administrator
     */
    readonly objectId?: kulado.Input<string>;
    /**
     * The name of the resource group for the SQL server. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The name of the SQL Server on which to set the administrator. Changing this forces a new resource to be created.
     */
    readonly serverName?: kulado.Input<string>;
    /**
     * The Azure Tenant ID
     */
    readonly tenantId?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a ActiveDirectoryAdministrator resource.
 */
export interface ActiveDirectoryAdministratorArgs {
    /**
     * The login name of the principal to set as the server administrator
     */
    readonly login: kulado.Input<string>;
    /**
     * The ID of the principal to set as the server administrator
     */
    readonly objectId: kulado.Input<string>;
    /**
     * The name of the resource group for the SQL server. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * The name of the SQL Server on which to set the administrator. Changing this forces a new resource to be created.
     */
    readonly serverName: kulado.Input<string>;
    /**
     * The Azure Tenant ID
     */
    readonly tenantId: kulado.Input<string>;
}
