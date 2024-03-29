// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Linux Virtual Machine within a Dev Test Lab.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * import * as fs from "fs";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "example-resources",
 * });
 * const testLab = new azure.devtest.Lab("test", {
 *     location: testResourceGroup.location,
 *     name: "example-devtestlab",
 *     resourceGroupName: testResourceGroup.name,
 *     tags: {
 *         Sydney: "Australia",
 *     },
 * });
 * const testVirtualNetwork = new azure.devtest.VirtualNetwork("test", {
 *     labName: testLab.name,
 *     name: "example-network",
 *     resourceGroupName: testResourceGroup.name,
 *     subnet: {
 *         useInVirtualMachineCreation: "Allow",
 *         usePublicIpAddress: "Allow",
 *     },
 * });
 * const testLinuxVirtualMachine = new azure.devtest.LinuxVirtualMachine("test", {
 *     galleryImageReference: {
 *         offer: "UbuntuServer",
 *         publisher: "Canonical",
 *         sku: "18.04-LTS",
 *         version: "latest",
 *     },
 *     labName: testLab.name,
 *     labSubnetName: testVirtualNetwork.subnet.name,
 *     labVirtualNetworkId: testVirtualNetwork.id,
 *     location: testResourceGroup.location,
 *     name: "example-vm03",
 *     notes: "Some notes about this Virtual Machine.",
 *     resourceGroupName: testResourceGroup.name,
 *     size: "Standard_DS2",
 *     sshKey: fs.readFileSync("~/.ssh/id_rsa.pub", "utf-8"),
 *     storageType: "Premium",
 *     username: "exampleuser99",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dev_test_linux_virtual_machine.html.markdown.
 */
export class LinuxVirtualMachine extends kulado.CustomResource {
    /**
     * Get an existing LinuxVirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: LinuxVirtualMachineState, opts?: kulado.CustomResourceOptions): LinuxVirtualMachine {
        return new LinuxVirtualMachine(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:devtest/linuxVirtualMachine:LinuxVirtualMachine';

    /**
     * Returns true if the given object is an instance of LinuxVirtualMachine.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LinuxVirtualMachine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === LinuxVirtualMachine.__kuladoType;
    }

    /**
     * Can this Virtual Machine be claimed by users? Defaults to `true`.
     */
    public readonly allowClaim!: kulado.Output<boolean | undefined>;
    /**
     * Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
     */
    public readonly disallowPublicIpAddress!: kulado.Output<boolean | undefined>;
    /**
     * The FQDN of the Virtual Machine.
     */
    public /*out*/ readonly fqdn!: kulado.Output<string>;
    /**
     * A `gallery_image_reference` block as defined below.
     */
    public readonly galleryImageReference!: kulado.Output<{ offer: string, publisher: string, sku: string, version: string }>;
    /**
     * One or more `inbound_nat_rule` blocks as defined below. Changing this forces a new resource to be created.
     */
    public readonly inboundNatRules!: kulado.Output<{ backendPort: number, frontendPort: number, protocol: string }[] | undefined>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    public readonly labName!: kulado.Output<string>;
    /**
     * The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
     */
    public readonly labSubnetName!: kulado.Output<string>;
    /**
     * The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    public readonly labVirtualNetworkId!: kulado.Output<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Any notes about the Virtual Machine.
     */
    public readonly notes!: kulado.Output<string | undefined>;
    /**
     * The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    public readonly password!: kulado.Output<string | undefined>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
     */
    public readonly size!: kulado.Output<string>;
    /**
     * The SSH Key associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    public readonly sshKey!: kulado.Output<string | undefined>;
    /**
     * The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
     */
    public readonly storageType!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * The unique immutable identifier of the Virtual Machine.
     */
    public /*out*/ readonly uniqueIdentifier!: kulado.Output<string>;
    /**
     * The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    public readonly username!: kulado.Output<string>;

    /**
     * Create a LinuxVirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinuxVirtualMachineArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: LinuxVirtualMachineArgs | LinuxVirtualMachineState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LinuxVirtualMachineState | undefined;
            inputs["allowClaim"] = state ? state.allowClaim : undefined;
            inputs["disallowPublicIpAddress"] = state ? state.disallowPublicIpAddress : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["galleryImageReference"] = state ? state.galleryImageReference : undefined;
            inputs["inboundNatRules"] = state ? state.inboundNatRules : undefined;
            inputs["labName"] = state ? state.labName : undefined;
            inputs["labSubnetName"] = state ? state.labSubnetName : undefined;
            inputs["labVirtualNetworkId"] = state ? state.labVirtualNetworkId : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["notes"] = state ? state.notes : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["sshKey"] = state ? state.sshKey : undefined;
            inputs["storageType"] = state ? state.storageType : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["uniqueIdentifier"] = state ? state.uniqueIdentifier : undefined;
            inputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as LinuxVirtualMachineArgs | undefined;
            if (!args || args.galleryImageReference === undefined) {
                throw new Error("Missing required property 'galleryImageReference'");
            }
            if (!args || args.labName === undefined) {
                throw new Error("Missing required property 'labName'");
            }
            if (!args || args.labSubnetName === undefined) {
                throw new Error("Missing required property 'labSubnetName'");
            }
            if (!args || args.labVirtualNetworkId === undefined) {
                throw new Error("Missing required property 'labVirtualNetworkId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.size === undefined) {
                throw new Error("Missing required property 'size'");
            }
            if (!args || args.storageType === undefined) {
                throw new Error("Missing required property 'storageType'");
            }
            if (!args || args.username === undefined) {
                throw new Error("Missing required property 'username'");
            }
            inputs["allowClaim"] = args ? args.allowClaim : undefined;
            inputs["disallowPublicIpAddress"] = args ? args.disallowPublicIpAddress : undefined;
            inputs["galleryImageReference"] = args ? args.galleryImageReference : undefined;
            inputs["inboundNatRules"] = args ? args.inboundNatRules : undefined;
            inputs["labName"] = args ? args.labName : undefined;
            inputs["labSubnetName"] = args ? args.labSubnetName : undefined;
            inputs["labVirtualNetworkId"] = args ? args.labVirtualNetworkId : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["notes"] = args ? args.notes : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["sshKey"] = args ? args.sshKey : undefined;
            inputs["storageType"] = args ? args.storageType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["username"] = args ? args.username : undefined;
            inputs["fqdn"] = undefined /*out*/;
            inputs["uniqueIdentifier"] = undefined /*out*/;
        }
        super(LinuxVirtualMachine.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LinuxVirtualMachine resources.
 */
export interface LinuxVirtualMachineState {
    /**
     * Can this Virtual Machine be claimed by users? Defaults to `true`.
     */
    readonly allowClaim?: kulado.Input<boolean>;
    /**
     * Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
     */
    readonly disallowPublicIpAddress?: kulado.Input<boolean>;
    /**
     * The FQDN of the Virtual Machine.
     */
    readonly fqdn?: kulado.Input<string>;
    /**
     * A `gallery_image_reference` block as defined below.
     */
    readonly galleryImageReference?: kulado.Input<{ offer: kulado.Input<string>, publisher: kulado.Input<string>, sku: kulado.Input<string>, version: kulado.Input<string> }>;
    /**
     * One or more `inbound_nat_rule` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly inboundNatRules?: kulado.Input<kulado.Input<{ backendPort: kulado.Input<number>, frontendPort?: kulado.Input<number>, protocol: kulado.Input<string> }>[]>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labName?: kulado.Input<string>;
    /**
     * The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
     */
    readonly labSubnetName?: kulado.Input<string>;
    /**
     * The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labVirtualNetworkId?: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Any notes about the Virtual Machine.
     */
    readonly notes?: kulado.Input<string>;
    /**
     * The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly password?: kulado.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
     */
    readonly size?: kulado.Input<string>;
    /**
     * The SSH Key associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly sshKey?: kulado.Input<string>;
    /**
     * The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
     */
    readonly storageType?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The unique immutable identifier of the Virtual Machine.
     */
    readonly uniqueIdentifier?: kulado.Input<string>;
    /**
     * The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly username?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a LinuxVirtualMachine resource.
 */
export interface LinuxVirtualMachineArgs {
    /**
     * Can this Virtual Machine be claimed by users? Defaults to `true`.
     */
    readonly allowClaim?: kulado.Input<boolean>;
    /**
     * Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
     */
    readonly disallowPublicIpAddress?: kulado.Input<boolean>;
    /**
     * A `gallery_image_reference` block as defined below.
     */
    readonly galleryImageReference: kulado.Input<{ offer: kulado.Input<string>, publisher: kulado.Input<string>, sku: kulado.Input<string>, version: kulado.Input<string> }>;
    /**
     * One or more `inbound_nat_rule` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly inboundNatRules?: kulado.Input<kulado.Input<{ backendPort: kulado.Input<number>, frontendPort?: kulado.Input<number>, protocol: kulado.Input<string> }>[]>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labName: kulado.Input<string>;
    /**
     * The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
     */
    readonly labSubnetName: kulado.Input<string>;
    /**
     * The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labVirtualNetworkId: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Any notes about the Virtual Machine.
     */
    readonly notes?: kulado.Input<string>;
    /**
     * The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly password?: kulado.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
     */
    readonly size: kulado.Input<string>;
    /**
     * The SSH Key associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly sshKey?: kulado.Input<string>;
    /**
     * The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
     */
    readonly storageType: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly username: kulado.Input<string>;
}
