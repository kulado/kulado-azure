// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manage a managed disk.
 * 
 * ## Example Usage with Create Empty
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US 2",
 *     name: "acctestRG",
 * });
 * const testManagedDisk = new azure.compute.ManagedDisk("test", {
 *     createOption: "Empty",
 *     diskSizeGb: 1,
 *     location: "West US 2",
 *     name: "acctestmd",
 *     resourceGroupName: testResourceGroup.name,
 *     storageAccountType: "Standard_LRS",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 * 
 * ## Example Usage with Create Copy
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const test = new azure.core.ResourceGroup("test", {
 *     location: "West US 2",
 *     name: "acctestRG",
 * });
 * const source = new azure.compute.ManagedDisk("source", {
 *     createOption: "Empty",
 *     diskSizeGb: 1,
 *     location: "West US 2",
 *     name: "acctestmd1",
 *     resourceGroupName: test.name,
 *     storageAccountType: "Standard_LRS",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const copy = new azure.compute.ManagedDisk("copy", {
 *     createOption: "Copy",
 *     diskSizeGb: 1,
 *     location: "West US 2",
 *     name: "acctestmd2",
 *     resourceGroupName: test.name,
 *     sourceResourceId: source.id,
 *     storageAccountType: "Standard_LRS",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/managed_disk.html.markdown.
 */
export class ManagedDisk extends kulado.CustomResource {
    /**
     * Get an existing ManagedDisk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ManagedDiskState, opts?: kulado.CustomResourceOptions): ManagedDisk {
        return new ManagedDisk(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:compute/managedDisk:ManagedDisk';

    /**
     * Returns true if the given object is an instance of ManagedDisk.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedDisk {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === ManagedDisk.__kuladoType;
    }

    /**
     * The method to use when creating the managed disk. Possible values include:
     */
    public readonly createOption!: kulado.Output<string>;
    /**
     * Specifies the size of the managed disk to create in gigabytes.
     * If `create_option` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size.
     */
    public readonly diskSizeGb!: kulado.Output<number>;
    /**
     * an `encryption_settings` block as defined below.
     */
    public readonly encryptionSettings!: kulado.Output<{ diskEncryptionKey?: { secretUrl: string, sourceVaultId: string }, enabled: boolean, keyEncryptionKey?: { keyUrl: string, sourceVaultId: string } } | undefined>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `create_option` is `FromImage`.
     */
    public readonly imageReferenceId!: kulado.Output<string | undefined>;
    /**
     * Specified the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name of the managed disk. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Specify a value when the source of an `Import` or `Copy`
     * operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`
     */
    public readonly osType!: kulado.Output<string | undefined>;
    /**
     * The name of the resource group in which to create
     * the managed disk.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * ID of an existing managed disk to copy `create_option` is `Copy`
     * or the recovery point to restore when `create_option` is `Restore`
     */
    public readonly sourceResourceId!: kulado.Output<string | undefined>;
    /**
     * URI to a valid VHD file to be used when `create_option` is `Import`.
     */
    public readonly sourceUri!: kulado.Output<string>;
    /**
     * The type of storage to use for the managed disk.
     * Allowable values are `Standard_LRS`, `Premium_LRS`, `StandardSSD_LRS` or `UltraSSD_LRS`.
     */
    public readonly storageAccountType!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    public readonly zones!: kulado.Output<string | undefined>;

    /**
     * Create a ManagedDisk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedDiskArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagedDiskArgs | ManagedDiskState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ManagedDiskState | undefined;
            inputs["createOption"] = state ? state.createOption : undefined;
            inputs["diskSizeGb"] = state ? state.diskSizeGb : undefined;
            inputs["encryptionSettings"] = state ? state.encryptionSettings : undefined;
            inputs["imageReferenceId"] = state ? state.imageReferenceId : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["osType"] = state ? state.osType : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sourceResourceId"] = state ? state.sourceResourceId : undefined;
            inputs["sourceUri"] = state ? state.sourceUri : undefined;
            inputs["storageAccountType"] = state ? state.storageAccountType : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as ManagedDiskArgs | undefined;
            if (!args || args.createOption === undefined) {
                throw new Error("Missing required property 'createOption'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageAccountType === undefined) {
                throw new Error("Missing required property 'storageAccountType'");
            }
            inputs["createOption"] = args ? args.createOption : undefined;
            inputs["diskSizeGb"] = args ? args.diskSizeGb : undefined;
            inputs["encryptionSettings"] = args ? args.encryptionSettings : undefined;
            inputs["imageReferenceId"] = args ? args.imageReferenceId : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["osType"] = args ? args.osType : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sourceResourceId"] = args ? args.sourceResourceId : undefined;
            inputs["sourceUri"] = args ? args.sourceUri : undefined;
            inputs["storageAccountType"] = args ? args.storageAccountType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zones"] = args ? args.zones : undefined;
        }
        super(ManagedDisk.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ManagedDisk resources.
 */
export interface ManagedDiskState {
    /**
     * The method to use when creating the managed disk. Possible values include:
     */
    readonly createOption?: kulado.Input<string>;
    /**
     * Specifies the size of the managed disk to create in gigabytes.
     * If `create_option` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size.
     */
    readonly diskSizeGb?: kulado.Input<number>;
    /**
     * an `encryption_settings` block as defined below.
     */
    readonly encryptionSettings?: kulado.Input<{ diskEncryptionKey?: kulado.Input<{ secretUrl: kulado.Input<string>, sourceVaultId: kulado.Input<string> }>, enabled: kulado.Input<boolean>, keyEncryptionKey?: kulado.Input<{ keyUrl: kulado.Input<string>, sourceVaultId: kulado.Input<string> }> }>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `create_option` is `FromImage`.
     */
    readonly imageReferenceId?: kulado.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the managed disk. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specify a value when the source of an `Import` or `Copy`
     * operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`
     */
    readonly osType?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create
     * the managed disk.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * ID of an existing managed disk to copy `create_option` is `Copy`
     * or the recovery point to restore when `create_option` is `Restore`
     */
    readonly sourceResourceId?: kulado.Input<string>;
    /**
     * URI to a valid VHD file to be used when `create_option` is `Import`.
     */
    readonly sourceUri?: kulado.Input<string>;
    /**
     * The type of storage to use for the managed disk.
     * Allowable values are `Standard_LRS`, `Premium_LRS`, `StandardSSD_LRS` or `UltraSSD_LRS`.
     */
    readonly storageAccountType?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    readonly zones?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a ManagedDisk resource.
 */
export interface ManagedDiskArgs {
    /**
     * The method to use when creating the managed disk. Possible values include:
     */
    readonly createOption: kulado.Input<string>;
    /**
     * Specifies the size of the managed disk to create in gigabytes.
     * If `create_option` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size.
     */
    readonly diskSizeGb?: kulado.Input<number>;
    /**
     * an `encryption_settings` block as defined below.
     */
    readonly encryptionSettings?: kulado.Input<{ diskEncryptionKey?: kulado.Input<{ secretUrl: kulado.Input<string>, sourceVaultId: kulado.Input<string> }>, enabled: kulado.Input<boolean>, keyEncryptionKey?: kulado.Input<{ keyUrl: kulado.Input<string>, sourceVaultId: kulado.Input<string> }> }>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `create_option` is `FromImage`.
     */
    readonly imageReferenceId?: kulado.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists.
     * Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the managed disk. Changing this forces a
     * new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specify a value when the source of an `Import` or `Copy`
     * operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`
     */
    readonly osType?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create
     * the managed disk.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * ID of an existing managed disk to copy `create_option` is `Copy`
     * or the recovery point to restore when `create_option` is `Restore`
     */
    readonly sourceResourceId?: kulado.Input<string>;
    /**
     * URI to a valid VHD file to be used when `create_option` is `Import`.
     */
    readonly sourceUri?: kulado.Input<string>;
    /**
     * The type of storage to use for the managed disk.
     * Allowable values are `Standard_LRS`, `Premium_LRS`, `StandardSSD_LRS` or `UltraSSD_LRS`.
     */
    readonly storageAccountType: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    readonly zones?: kulado.Input<string>;
}
