// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages an Azure Batch pool.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "testaccbatch",
 * });
 * const testStorageAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: testResourceGroup.location,
 *     name: "testaccsa",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testAccount = new azure.batch.Account("test", {
 *     location: testResourceGroup.location,
 *     name: "testaccbatch",
 *     poolAllocationMode: "BatchService",
 *     resourceGroupName: testResourceGroup.name,
 *     storageAccountId: testStorageAccount.id,
 *     tags: {
 *         env: "test",
 *     },
 * });
 * const testcer = new azure.batch.Certificate("testcer", {
 *     accountName: testAccount.name,
 *     certificate: (() => {
 *         throw "tf2kulado error: NYI: call to filebase64";
 *         return (() => { throw "NYI: call to filebase64"; })();
 *     })(),
 *     format: "Cer",
 *     resourceGroupName: testResourceGroup.name,
 *     thumbprint: "312d31a79fa0cef49c00f769afc2b73e9f4edf34",
 *     thumbprintAlgorithm: "SHA1",
 * });
 * const testPool = new azure.batch.Pool("test", {
 *     accountName: testAccount.name,
 *     autoScale: {
 *         evaluationInterval: "PT15M",
 *         formula: `      startingNumberOfVMs = 1;
 *       maxNumberofVMs = 25;
 *       pendingTaskSamplePercent = $PendingTasks.GetSamplePercent(180 * TimeInterval_Second);
 *       pendingTaskSamples = pendingTaskSamplePercent < 70 ? startingNumberOfVMs : avg($PendingTasks.GetSample(180 *   TimeInterval_Second));
 *       $TargetDedicatedNodes=min(maxNumberofVMs, pendingTaskSamples);
 * `,
 *     },
 *     certificates: [{
 *         id: testcer.id,
 *         visibilities: ["StartTask"],
 *     }],
 *     containerConfiguration: {
 *         type: "DockerCompatible",
 *     },
 *     displayName: "Test Acc Pool Auto",
 *     name: "testaccpool",
 *     nodeAgentSkuId: "batch.node.ubuntu 16.04",
 *     resourceGroupName: testResourceGroup.name,
 *     startTask: {
 *         commandLine: "echo 'Hello World from $env'",
 *         environment: {
 *             env: "TEST",
 *         },
 *         maxTaskRetryCount: 1,
 *         userIdentity: {
 *             autoUser: {
 *                 elevationLevel: "NonAdmin",
 *                 scope: "Task",
 *             },
 *         },
 *         waitForSuccess: true,
 *     },
 *     storageImageReference: {
 *         offer: "ubuntu-server-container",
 *         publisher: "microsoft-azure-batch",
 *         sku: "16-04-lts",
 *         version: "latest",
 *     },
 *     vmSize: "Standard_A1",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/batch_pool.html.markdown.
 */
export class Pool extends kulado.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: PoolState, opts?: kulado.CustomResourceOptions): Pool {
        return new Pool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:batch/pool:Pool';

    /**
     * Returns true if the given object is an instance of Pool.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Pool.__kuladoType;
    }

    /**
     * Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
     */
    public readonly accountName!: kulado.Output<string>;
    /**
     * A `auto_scale` block that describes the scale settings when using auto scale.
     */
    public readonly autoScale!: kulado.Output<{ evaluationInterval?: string, formula: string } | undefined>;
    /**
     * One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
     */
    public readonly certificates!: kulado.Output<{ id: string, storeLocation: string, storeName?: string, visibilities?: string[] }[] | undefined>;
    /**
     * The container configuration used in the pool's VMs.
     */
    public readonly containerConfiguration!: kulado.Output<{ type?: string } | undefined>;
    /**
     * Specifies the display name of the Batch pool.
     */
    public readonly displayName!: kulado.Output<string | undefined>;
    /**
     * A `fixed_scale` block that describes the scale settings when using fixed scale.
     */
    public readonly fixedScale!: kulado.Output<{ resizeTimeout?: string, targetDedicatedNodes?: number, targetLowPriorityNodes?: number } | undefined>;
    /**
     * Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
     */
    public readonly maxTasksPerNode!: kulado.Output<number | undefined>;
    /**
     * Specifies the name of the Batch pool. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Specifies the Sku of the node agents that will be created in the Batch pool.
     */
    public readonly nodeAgentSkuId!: kulado.Output<string>;
    /**
     * The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A `start_task` block that describes the start task settings for the Batch pool.
     */
    public readonly startTask!: kulado.Output<{ commandLine: string, environment?: {[key: string]: any}, maxTaskRetryCount?: number, resourceFiles?: { autoStorageContainerName?: string, blobPrefix?: string, fileMode?: string, filePath?: string, httpUrl?: string, storageContainerUrl?: string }[], userIdentity: { autoUser?: { elevationLevel?: string, scope?: string }, userName?: string }, waitForSuccess?: boolean } | undefined>;
    public readonly stopPendingResizeOperation!: kulado.Output<boolean | undefined>;
    /**
     * A `storage_image_reference` for the virtual machines that will compose the Batch pool.
     */
    public readonly storageImageReference!: kulado.Output<{ id?: string, offer: string, publisher: string, sku: string, version: string }>;
    /**
     * Specifies the size of the VM created in the Batch pool.
     */
    public readonly vmSize!: kulado.Output<string>;

    /**
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: PoolArgs | PoolState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PoolState | undefined;
            inputs["accountName"] = state ? state.accountName : undefined;
            inputs["autoScale"] = state ? state.autoScale : undefined;
            inputs["certificates"] = state ? state.certificates : undefined;
            inputs["containerConfiguration"] = state ? state.containerConfiguration : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["fixedScale"] = state ? state.fixedScale : undefined;
            inputs["maxTasksPerNode"] = state ? state.maxTasksPerNode : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nodeAgentSkuId"] = state ? state.nodeAgentSkuId : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["startTask"] = state ? state.startTask : undefined;
            inputs["stopPendingResizeOperation"] = state ? state.stopPendingResizeOperation : undefined;
            inputs["storageImageReference"] = state ? state.storageImageReference : undefined;
            inputs["vmSize"] = state ? state.vmSize : undefined;
        } else {
            const args = argsOrState as PoolArgs | undefined;
            if (!args || args.accountName === undefined) {
                throw new Error("Missing required property 'accountName'");
            }
            if (!args || args.nodeAgentSkuId === undefined) {
                throw new Error("Missing required property 'nodeAgentSkuId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageImageReference === undefined) {
                throw new Error("Missing required property 'storageImageReference'");
            }
            if (!args || args.vmSize === undefined) {
                throw new Error("Missing required property 'vmSize'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["autoScale"] = args ? args.autoScale : undefined;
            inputs["certificates"] = args ? args.certificates : undefined;
            inputs["containerConfiguration"] = args ? args.containerConfiguration : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["fixedScale"] = args ? args.fixedScale : undefined;
            inputs["maxTasksPerNode"] = args ? args.maxTasksPerNode : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["nodeAgentSkuId"] = args ? args.nodeAgentSkuId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["startTask"] = args ? args.startTask : undefined;
            inputs["stopPendingResizeOperation"] = args ? args.stopPendingResizeOperation : undefined;
            inputs["storageImageReference"] = args ? args.storageImageReference : undefined;
            inputs["vmSize"] = args ? args.vmSize : undefined;
        }
        super(Pool.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Pool resources.
 */
export interface PoolState {
    /**
     * Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
     */
    readonly accountName?: kulado.Input<string>;
    /**
     * A `auto_scale` block that describes the scale settings when using auto scale.
     */
    readonly autoScale?: kulado.Input<{ evaluationInterval?: kulado.Input<string>, formula: kulado.Input<string> }>;
    /**
     * One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
     */
    readonly certificates?: kulado.Input<kulado.Input<{ id: kulado.Input<string>, storeLocation: kulado.Input<string>, storeName?: kulado.Input<string>, visibilities?: kulado.Input<kulado.Input<string>[]> }>[]>;
    /**
     * The container configuration used in the pool's VMs.
     */
    readonly containerConfiguration?: kulado.Input<{ type?: kulado.Input<string> }>;
    /**
     * Specifies the display name of the Batch pool.
     */
    readonly displayName?: kulado.Input<string>;
    /**
     * A `fixed_scale` block that describes the scale settings when using fixed scale.
     */
    readonly fixedScale?: kulado.Input<{ resizeTimeout?: kulado.Input<string>, targetDedicatedNodes?: kulado.Input<number>, targetLowPriorityNodes?: kulado.Input<number> }>;
    /**
     * Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
     */
    readonly maxTasksPerNode?: kulado.Input<number>;
    /**
     * Specifies the name of the Batch pool. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the Sku of the node agents that will be created in the Batch pool.
     */
    readonly nodeAgentSkuId?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A `start_task` block that describes the start task settings for the Batch pool.
     */
    readonly startTask?: kulado.Input<{ commandLine: kulado.Input<string>, environment?: kulado.Input<{[key: string]: any}>, maxTaskRetryCount?: kulado.Input<number>, resourceFiles?: kulado.Input<kulado.Input<{ autoStorageContainerName?: kulado.Input<string>, blobPrefix?: kulado.Input<string>, fileMode?: kulado.Input<string>, filePath?: kulado.Input<string>, httpUrl?: kulado.Input<string>, storageContainerUrl?: kulado.Input<string> }>[]>, userIdentity: kulado.Input<{ autoUser?: kulado.Input<{ elevationLevel?: kulado.Input<string>, scope?: kulado.Input<string> }>, userName?: kulado.Input<string> }>, waitForSuccess?: kulado.Input<boolean> }>;
    readonly stopPendingResizeOperation?: kulado.Input<boolean>;
    /**
     * A `storage_image_reference` for the virtual machines that will compose the Batch pool.
     */
    readonly storageImageReference?: kulado.Input<{ id?: kulado.Input<string>, offer: kulado.Input<string>, publisher: kulado.Input<string>, sku: kulado.Input<string>, version: kulado.Input<string> }>;
    /**
     * Specifies the size of the VM created in the Batch pool.
     */
    readonly vmSize?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
     */
    readonly accountName: kulado.Input<string>;
    /**
     * A `auto_scale` block that describes the scale settings when using auto scale.
     */
    readonly autoScale?: kulado.Input<{ evaluationInterval?: kulado.Input<string>, formula: kulado.Input<string> }>;
    /**
     * One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
     */
    readonly certificates?: kulado.Input<kulado.Input<{ id: kulado.Input<string>, storeLocation: kulado.Input<string>, storeName?: kulado.Input<string>, visibilities?: kulado.Input<kulado.Input<string>[]> }>[]>;
    /**
     * The container configuration used in the pool's VMs.
     */
    readonly containerConfiguration?: kulado.Input<{ type?: kulado.Input<string> }>;
    /**
     * Specifies the display name of the Batch pool.
     */
    readonly displayName?: kulado.Input<string>;
    /**
     * A `fixed_scale` block that describes the scale settings when using fixed scale.
     */
    readonly fixedScale?: kulado.Input<{ resizeTimeout?: kulado.Input<string>, targetDedicatedNodes?: kulado.Input<number>, targetLowPriorityNodes?: kulado.Input<number> }>;
    /**
     * Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
     */
    readonly maxTasksPerNode?: kulado.Input<number>;
    /**
     * Specifies the name of the Batch pool. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the Sku of the node agents that will be created in the Batch pool.
     */
    readonly nodeAgentSkuId: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A `start_task` block that describes the start task settings for the Batch pool.
     */
    readonly startTask?: kulado.Input<{ commandLine: kulado.Input<string>, environment?: kulado.Input<{[key: string]: any}>, maxTaskRetryCount?: kulado.Input<number>, resourceFiles?: kulado.Input<kulado.Input<{ autoStorageContainerName?: kulado.Input<string>, blobPrefix?: kulado.Input<string>, fileMode?: kulado.Input<string>, filePath?: kulado.Input<string>, httpUrl?: kulado.Input<string>, storageContainerUrl?: kulado.Input<string> }>[]>, userIdentity: kulado.Input<{ autoUser?: kulado.Input<{ elevationLevel?: kulado.Input<string>, scope?: kulado.Input<string> }>, userName?: kulado.Input<string> }>, waitForSuccess?: kulado.Input<boolean> }>;
    readonly stopPendingResizeOperation?: kulado.Input<boolean>;
    /**
     * A `storage_image_reference` for the virtual machines that will compose the Batch pool.
     */
    readonly storageImageReference: kulado.Input<{ id?: kulado.Input<string>, offer: kulado.Input<string>, publisher: kulado.Input<string>, sku: kulado.Input<string>, version: kulado.Input<string> }>;
    /**
     * Specifies the size of the VM created in the Batch pool.
     */
    readonly vmSize: kulado.Input<string>;
}