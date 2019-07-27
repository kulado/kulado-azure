// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Enables you to manage DNS PTR Records within Azure DNS.
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
 * const testZone = new azure.dns.Zone("test", {
 *     name: "mydomain.com",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testPtrRecord = new azure.dns.PtrRecord("test", {
 *     name: "test",
 *     records: ["yourdomain.com"],
 *     resourceGroupName: testResourceGroup.name,
 *     ttl: 300,
 *     zoneName: testZone.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dns_ptr_record.html.markdown.
 */
export class PtrRecord extends kulado.CustomResource {
    /**
     * Get an existing PtrRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: PtrRecordState, opts?: kulado.CustomResourceOptions): PtrRecord {
        return new PtrRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:dns/ptrRecord:PtrRecord';

    /**
     * Returns true if the given object is an instance of PtrRecord.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PtrRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === PtrRecord.__kuladoType;
    }

    /**
     * The name of the DNS PTR Record.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * List of Fully Qualified Domain Names.
     */
    public readonly records!: kulado.Output<string[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    public readonly ttl!: kulado.Output<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly zoneName!: kulado.Output<string>;

    /**
     * Create a PtrRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PtrRecordArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: PtrRecordArgs | PtrRecordState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PtrRecordState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["records"] = state ? state.records : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["zoneName"] = state ? state.zoneName : undefined;
        } else {
            const args = argsOrState as PtrRecordArgs | undefined;
            if (!args || args.records === undefined) {
                throw new Error("Missing required property 'records'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.ttl === undefined) {
                throw new Error("Missing required property 'ttl'");
            }
            if (!args || args.zoneName === undefined) {
                throw new Error("Missing required property 'zoneName'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["records"] = args ? args.records : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["zoneName"] = args ? args.zoneName : undefined;
        }
        super(PtrRecord.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PtrRecord resources.
 */
export interface PtrRecordState {
    /**
     * The name of the DNS PTR Record.
     */
    readonly name?: kulado.Input<string>;
    /**
     * List of Fully Qualified Domain Names.
     */
    readonly records?: kulado.Input<kulado.Input<string>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    readonly ttl?: kulado.Input<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    readonly zoneName?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a PtrRecord resource.
 */
export interface PtrRecordArgs {
    /**
     * The name of the DNS PTR Record.
     */
    readonly name?: kulado.Input<string>;
    /**
     * List of Fully Qualified Domain Names.
     */
    readonly records: kulado.Input<kulado.Input<string>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    readonly ttl: kulado.Input<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    readonly zoneName: kulado.Input<string>;
}
