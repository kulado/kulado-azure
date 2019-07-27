// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a HDInsight Hadoop Cluster.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const exampleAccount = new azure.storage.Account("example", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: exampleResourceGroup.location,
 *     name: "hdinsightstor",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleContainer = new azure.storage.Container("example", {
 *     containerAccessType: "private",
 *     name: "hdinsight",
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccountName: exampleAccount.name,
 * });
 * const exampleHadoopCluster = new azure.hdinsight.HadoopCluster("example", {
 *     clusterVersion: "3.6",
 *     componentVersion: {
 *         hadoop: "2.7",
 *     },
 *     gateway: {
 *         enabled: true,
 *         password: "TerrAform123!",
 *         username: "acctestusrgw",
 *     },
 *     location: exampleResourceGroup.location,
 *     name: "example-hdicluster",
 *     resourceGroupName: exampleResourceGroup.name,
 *     roles: {
 *         headNode: {
 *             password: "AccTestvdSC4daf986!",
 *             username: "acctestusrvm",
 *             vmSize: "Standard_D3_V2",
 *         },
 *         workerNode: {
 *             password: "AccTestvdSC4daf986!",
 *             targetInstanceCount: 3,
 *             username: "acctestusrvm",
 *             vmSize: "Standard_D4_V2",
 *         },
 *         zookeeperNode: {
 *             password: "AccTestvdSC4daf986!",
 *             username: "acctestusrvm",
 *             vmSize: "Standard_D3_V2",
 *         },
 *     },
 *     storageAccounts: [{
 *         isDefault: true,
 *         storageAccountKey: exampleAccount.primaryAccessKey,
 *         storageContainerId: exampleContainer.id,
 *     }],
 *     tier: "Standard",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/hdinsight_hadoop_cluster.html.markdown.
 */
export class HadoopCluster extends kulado.CustomResource {
    /**
     * Get an existing HadoopCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: HadoopClusterState, opts?: kulado.CustomResourceOptions): HadoopCluster {
        return new HadoopCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:hdinsight/hadoopCluster:HadoopCluster';

    /**
     * Returns true if the given object is an instance of HadoopCluster.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HadoopCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === HadoopCluster.__kuladoType;
    }

    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    public readonly clusterVersion!: kulado.Output<string>;
    /**
     * A `component_version` block as defined below.
     */
    public readonly componentVersion!: kulado.Output<{ hadoop: string }>;
    /**
     * A `gateway` block as defined below.
     */
    public readonly gateway!: kulado.Output<{ enabled: boolean, password: string, username: string }>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Hadoop Cluster.
     */
    public /*out*/ readonly httpsEndpoint!: kulado.Output<string>;
    /**
     * Specifies the Azure Region which this HDInsight Hadoop Cluster should exist. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name for this HDInsight Hadoop Cluster. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Hadoop Cluster should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A `roles` block as defined below.
     */
    public readonly roles!: kulado.Output<{ headNode: { password?: string, sshKeys?: string[], subnetId?: string, username: string, virtualNetworkId?: string, vmSize: string }, workerNode: { minInstanceCount?: number, password?: string, sshKeys?: string[], subnetId?: string, targetInstanceCount: number, username: string, virtualNetworkId?: string, vmSize: string }, zookeeperNode: { password?: string, sshKeys?: string[], subnetId?: string, username: string, virtualNetworkId?: string, vmSize: string } }>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Hadoop Cluster.
     */
    public /*out*/ readonly sshEndpoint!: kulado.Output<string>;
    /**
     * One or more `storage_account` block as defined below.
     */
    public readonly storageAccounts!: kulado.Output<{ isDefault: boolean, storageAccountKey: string, storageContainerId: string }[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Hadoop Cluster.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * Specifies the Tier which should be used for this HDInsight Hadoop Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    public readonly tier!: kulado.Output<string>;

    /**
     * Create a HadoopCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HadoopClusterArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: HadoopClusterArgs | HadoopClusterState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as HadoopClusterState | undefined;
            inputs["clusterVersion"] = state ? state.clusterVersion : undefined;
            inputs["componentVersion"] = state ? state.componentVersion : undefined;
            inputs["gateway"] = state ? state.gateway : undefined;
            inputs["httpsEndpoint"] = state ? state.httpsEndpoint : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["roles"] = state ? state.roles : undefined;
            inputs["sshEndpoint"] = state ? state.sshEndpoint : undefined;
            inputs["storageAccounts"] = state ? state.storageAccounts : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tier"] = state ? state.tier : undefined;
        } else {
            const args = argsOrState as HadoopClusterArgs | undefined;
            if (!args || args.clusterVersion === undefined) {
                throw new Error("Missing required property 'clusterVersion'");
            }
            if (!args || args.componentVersion === undefined) {
                throw new Error("Missing required property 'componentVersion'");
            }
            if (!args || args.gateway === undefined) {
                throw new Error("Missing required property 'gateway'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.roles === undefined) {
                throw new Error("Missing required property 'roles'");
            }
            if (!args || args.storageAccounts === undefined) {
                throw new Error("Missing required property 'storageAccounts'");
            }
            if (!args || args.tier === undefined) {
                throw new Error("Missing required property 'tier'");
            }
            inputs["clusterVersion"] = args ? args.clusterVersion : undefined;
            inputs["componentVersion"] = args ? args.componentVersion : undefined;
            inputs["gateway"] = args ? args.gateway : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["roles"] = args ? args.roles : undefined;
            inputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["tier"] = args ? args.tier : undefined;
            inputs["httpsEndpoint"] = undefined /*out*/;
            inputs["sshEndpoint"] = undefined /*out*/;
        }
        super(HadoopCluster.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering HadoopCluster resources.
 */
export interface HadoopClusterState {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterVersion?: kulado.Input<string>;
    /**
     * A `component_version` block as defined below.
     */
    readonly componentVersion?: kulado.Input<{ hadoop: kulado.Input<string> }>;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateway?: kulado.Input<{ enabled: kulado.Input<boolean>, password: kulado.Input<string>, username: kulado.Input<string> }>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Hadoop Cluster.
     */
    readonly httpsEndpoint?: kulado.Input<string>;
    /**
     * Specifies the Azure Region which this HDInsight Hadoop Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name for this HDInsight Hadoop Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Hadoop Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    readonly roles?: kulado.Input<{ headNode: kulado.Input<{ password?: kulado.Input<string>, sshKeys?: kulado.Input<kulado.Input<string>[]>, subnetId?: kulado.Input<string>, username: kulado.Input<string>, virtualNetworkId?: kulado.Input<string>, vmSize: kulado.Input<string> }>, workerNode: kulado.Input<{ minInstanceCount?: kulado.Input<number>, password?: kulado.Input<string>, sshKeys?: kulado.Input<kulado.Input<string>[]>, subnetId?: kulado.Input<string>, targetInstanceCount: kulado.Input<number>, username: kulado.Input<string>, virtualNetworkId?: kulado.Input<string>, vmSize: kulado.Input<string> }>, zookeeperNode: kulado.Input<{ password?: kulado.Input<string>, sshKeys?: kulado.Input<kulado.Input<string>[]>, subnetId?: kulado.Input<string>, username: kulado.Input<string>, virtualNetworkId?: kulado.Input<string>, vmSize: kulado.Input<string> }> }>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Hadoop Cluster.
     */
    readonly sshEndpoint?: kulado.Input<string>;
    /**
     * One or more `storage_account` block as defined below.
     */
    readonly storageAccounts?: kulado.Input<kulado.Input<{ isDefault: kulado.Input<boolean>, storageAccountKey: kulado.Input<string>, storageContainerId: kulado.Input<string> }>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Hadoop Cluster.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * Specifies the Tier which should be used for this HDInsight Hadoop Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    readonly tier?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a HadoopCluster resource.
 */
export interface HadoopClusterArgs {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterVersion: kulado.Input<string>;
    /**
     * A `component_version` block as defined below.
     */
    readonly componentVersion: kulado.Input<{ hadoop: kulado.Input<string> }>;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateway: kulado.Input<{ enabled: kulado.Input<boolean>, password: kulado.Input<string>, username: kulado.Input<string> }>;
    /**
     * Specifies the Azure Region which this HDInsight Hadoop Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name for this HDInsight Hadoop Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Hadoop Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    readonly roles: kulado.Input<{ headNode: kulado.Input<{ password?: kulado.Input<string>, sshKeys?: kulado.Input<kulado.Input<string>[]>, subnetId?: kulado.Input<string>, username: kulado.Input<string>, virtualNetworkId?: kulado.Input<string>, vmSize: kulado.Input<string> }>, workerNode: kulado.Input<{ minInstanceCount?: kulado.Input<number>, password?: kulado.Input<string>, sshKeys?: kulado.Input<kulado.Input<string>[]>, subnetId?: kulado.Input<string>, targetInstanceCount: kulado.Input<number>, username: kulado.Input<string>, virtualNetworkId?: kulado.Input<string>, vmSize: kulado.Input<string> }>, zookeeperNode: kulado.Input<{ password?: kulado.Input<string>, sshKeys?: kulado.Input<kulado.Input<string>[]>, subnetId?: kulado.Input<string>, username: kulado.Input<string>, virtualNetworkId?: kulado.Input<string>, vmSize: kulado.Input<string> }> }>;
    /**
     * One or more `storage_account` block as defined below.
     */
    readonly storageAccounts: kulado.Input<kulado.Input<{ isDefault: kulado.Input<boolean>, storageAccountKey: kulado.Input<string>, storageContainerId: kulado.Input<string> }>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Hadoop Cluster.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * Specifies the Tier which should be used for this HDInsight Hadoop Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    readonly tier: kulado.Input<string>;
}