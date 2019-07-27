// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing HDInsight Cluster.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const example = kulado.output(azure.hdinsight.getCluster({
 *     name: "example",
 *     resourceGroupName: "example-resources",
 * }));
 * 
 * export const httpsEndpoint = example.httpsEndpoint;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/hdinsight_cluster.html.markdown.
 */
export function getCluster(args: GetClusterArgs, opts?: kulado.InvokeOptions): Promise<GetClusterResult> & GetClusterResult {
    const promise: Promise<GetClusterResult> = kulado.runtime.invoke("azure:hdinsight/getCluster:getCluster", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return kulado.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterArgs {
    /**
     * Specifies the name of this HDInsight Cluster.
     */
    readonly name: string;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Cluster exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getCluster.
 */
export interface GetClusterResult {
    /**
     * The version of HDInsights which is used on this HDInsight Cluster.
     */
    readonly clusterVersion: string;
    /**
     * A map of versions of software used on this HDInsights Cluster.
     */
    readonly componentVersions: {[key: string]: any};
    /**
     * The SSH Endpoint of the Edge Node for this HDInsight Cluster, if an Edge Node exists.
     */
    readonly edgeSshEndpoint: string;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateways: { enabled: boolean, password: string, username: string }[];
    /**
     * The HTTPS Endpoint for this HDInsight Cluster.
     */
    readonly httpsEndpoint: string;
    /**
     * The kind of HDInsight Cluster this is, such as a Spark or Storm cluster.
     */
    readonly kind: string;
    /**
     * The Azure Region in which this HDInsight Cluster exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The SSH Endpoint for this HDInsight Cluster.
     */
    readonly sshEndpoint: string;
    /**
     * A map of tags assigned to the HDInsight Cluster.
     */
    readonly tags: {[key: string]: any};
    /**
     * The SKU / Tier of this HDInsight Cluster.
     */
    readonly tier: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}