// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

export class ZipBlob extends kulado.CustomResource {
    /**
     * Get an existing ZipBlob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ZipBlobState, opts?: kulado.CustomResourceOptions): ZipBlob {
        return new ZipBlob(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:storage/zipBlob:ZipBlob';

    /**
     * Returns true if the given object is an instance of ZipBlob.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZipBlob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === ZipBlob.__kuladoType;
    }

    public readonly attempts!: kulado.Output<number | undefined>;
    public readonly contentType!: kulado.Output<string | undefined>;
    public readonly metadata!: kulado.Output<{[key: string]: string} | undefined>;
    public readonly name!: kulado.Output<string>;
    public readonly parallelism!: kulado.Output<number | undefined>;
    public readonly resourceGroupName!: kulado.Output<string>;
    public readonly size!: kulado.Output<number | undefined>;
    public readonly content!: kulado.Output<kulado.asset.Archive | undefined>;
    public readonly sourceUri!: kulado.Output<string | undefined>;
    public readonly storageAccountName!: kulado.Output<string>;
    public readonly storageContainerName!: kulado.Output<string>;
    public readonly type!: kulado.Output<string | undefined>;
    public /*out*/ readonly url!: kulado.Output<string>;

    /**
     * Create a ZipBlob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZipBlobArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZipBlobArgs | ZipBlobState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ZipBlobState | undefined;
            inputs["attempts"] = state ? state.attempts : undefined;
            inputs["contentType"] = state ? state.contentType : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parallelism"] = state ? state.parallelism : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["content"] = state ? state.content : undefined;
            inputs["sourceUri"] = state ? state.sourceUri : undefined;
            inputs["storageAccountName"] = state ? state.storageAccountName : undefined;
            inputs["storageContainerName"] = state ? state.storageContainerName : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as ZipBlobArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageAccountName === undefined) {
                throw new Error("Missing required property 'storageAccountName'");
            }
            if (!args || args.storageContainerName === undefined) {
                throw new Error("Missing required property 'storageContainerName'");
            }
            inputs["attempts"] = args ? args.attempts : undefined;
            inputs["contentType"] = args ? args.contentType : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parallelism"] = args ? args.parallelism : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["content"] = args ? args.content : undefined;
            inputs["sourceUri"] = args ? args.sourceUri : undefined;
            inputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            inputs["storageContainerName"] = args ? args.storageContainerName : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["url"] = undefined /*out*/;
        }
        super(ZipBlob.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ZipBlob resources.
 */
export interface ZipBlobState {
    readonly attempts?: kulado.Input<number>;
    readonly contentType?: kulado.Input<string>;
    readonly metadata?: kulado.Input<{[key: string]: kulado.Input<string>}>;
    readonly name?: kulado.Input<string>;
    readonly parallelism?: kulado.Input<number>;
    readonly resourceGroupName?: kulado.Input<string>;
    readonly size?: kulado.Input<number>;
    readonly content?: kulado.Input<kulado.asset.Archive>;
    readonly sourceUri?: kulado.Input<string>;
    readonly storageAccountName?: kulado.Input<string>;
    readonly storageContainerName?: kulado.Input<string>;
    readonly type?: kulado.Input<string>;
    readonly url?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a ZipBlob resource.
 */
export interface ZipBlobArgs {
    readonly attempts?: kulado.Input<number>;
    readonly contentType?: kulado.Input<string>;
    readonly metadata?: kulado.Input<{[key: string]: kulado.Input<string>}>;
    readonly name?: kulado.Input<string>;
    readonly parallelism?: kulado.Input<number>;
    readonly resourceGroupName: kulado.Input<string>;
    readonly size?: kulado.Input<number>;
    readonly content?: kulado.Input<kulado.asset.Archive>;
    readonly sourceUri?: kulado.Input<string>;
    readonly storageAccountName: kulado.Input<string>;
    readonly storageContainerName: kulado.Input<string>;
    readonly type?: kulado.Input<string>;
}
