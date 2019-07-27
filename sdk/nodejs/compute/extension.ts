// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Virtual Machine Extension to provide post deployment configuration
 * and run automated tasks.
 * 
 * > **NOTE:** Custom Script Extensions for Linux & Windows require that the `commandToExecute` returns a `0` exit code to be classified as successfully deployed. You can achieve this by appending `exit 0` to the end of your `commandToExecute`.
 * 
 * > **NOTE:** Custom Script Extensions require that the Azure Virtual Machine Guest Agent is running on the Virtual Machine.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "acctestRG",
 * });
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: testResourceGroup.location,
 *     name: "acctvn",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testSubnet = new azure.network.Subnet("test", {
 *     addressPrefix: "10.0.2.0/24",
 *     name: "acctsub",
 *     resourceGroupName: testResourceGroup.name,
 *     virtualNetworkName: testVirtualNetwork.name,
 * });
 * const testNetworkInterface = new azure.network.NetworkInterface("test", {
 *     ipConfigurations: [{
 *         name: "testconfiguration1",
 *         privateIpAddressAllocation: "Dynamic",
 *         subnetId: testSubnet.id,
 *     }],
 *     location: testResourceGroup.location,
 *     name: "acctni",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: testResourceGroup.location,
 *     name: "accsa",
 *     resourceGroupName: testResourceGroup.name,
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const testContainer = new azure.storage.Container("test", {
 *     containerAccessType: "private",
 *     name: "vhds",
 *     resourceGroupName: testResourceGroup.name,
 *     storageAccountName: testAccount.name,
 * });
 * const testVirtualMachine = new azure.compute.VirtualMachine("test", {
 *     location: testResourceGroup.location,
 *     name: "acctvm",
 *     networkInterfaceIds: [testNetworkInterface.id],
 *     osProfile: {
 *         adminPassword: "Password1234!",
 *         adminUsername: "testadmin",
 *         computerName: "hostname",
 *     },
 *     osProfileLinuxConfig: {
 *         disablePasswordAuthentication: false,
 *     },
 *     resourceGroupName: testResourceGroup.name,
 *     storageImageReference: {
 *         offer: "UbuntuServer",
 *         publisher: "Canonical",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     storageOsDisk: {
 *         caching: "ReadWrite",
 *         createOption: "FromImage",
 *         name: "myosdisk1",
 *         vhdUri: kulado.interpolate`${testAccount.primaryBlobEndpoint}${testContainer.name}/myosdisk1.vhd`,
 *     },
 *     tags: {
 *         environment: "staging",
 *     },
 *     vmSize: "Standard_F2",
 * });
 * const testExtension = new azure.compute.Extension("test", {
 *     location: testResourceGroup.location,
 *     name: "hostname",
 *     publisher: "Microsoft.Azure.Extensions",
 *     resourceGroupName: testResourceGroup.name,
 *     settings: `	{
 * 		"commandToExecute": "hostname && uptime"
 * 	}
 * `,
 *     tags: {
 *         environment: "Production",
 *     },
 *     type: "CustomScript",
 *     typeHandlerVersion: "2.0",
 *     virtualMachineName: testVirtualMachine.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_machine_extension.html.markdown.
 */
export class Extension extends kulado.CustomResource {
    /**
     * Get an existing Extension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ExtensionState, opts?: kulado.CustomResourceOptions): Extension {
        return new Extension(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:compute/extension:Extension';

    /**
     * Returns true if the given object is an instance of Extension.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Extension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Extension.__kuladoType;
    }

    /**
     * Specifies if the platform deploys
     * the latest minor version update to the `type_handler_version` specified.
     */
    public readonly autoUpgradeMinorVersion!: kulado.Output<boolean | undefined>;
    /**
     * The location where the extension is created. Changing
     * this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * The name of the virtual machine extension peering. Changing
     * this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The protected_settings passed to the
     * extension, like settings, these are specified as a JSON object in a string.
     */
    public readonly protectedSettings!: kulado.Output<string | undefined>;
    /**
     * The publisher of the extension, available publishers
     * can be found by using the Azure CLI.
     */
    public readonly publisher!: kulado.Output<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network. Changing this forces a new resource to be
     * created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * The settings passed to the extension, these are
     * specified as a JSON object in a string.
     */
    public readonly settings!: kulado.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * The type of extension, available types for a publisher can
     * be found using the Azure CLI.
     */
    public readonly type!: kulado.Output<string>;
    /**
     * Specifies the version of the extension to
     * use, available versions can be found using the Azure CLI.
     */
    public readonly typeHandlerVersion!: kulado.Output<string>;
    /**
     * The name of the virtual machine. Changing
     * this forces a new resource to be created.
     */
    public readonly virtualMachineName!: kulado.Output<string>;

    /**
     * Create a Extension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExtensionArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ExtensionArgs | ExtensionState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ExtensionState | undefined;
            inputs["autoUpgradeMinorVersion"] = state ? state.autoUpgradeMinorVersion : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["protectedSettings"] = state ? state.protectedSettings : undefined;
            inputs["publisher"] = state ? state.publisher : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["settings"] = state ? state.settings : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["typeHandlerVersion"] = state ? state.typeHandlerVersion : undefined;
            inputs["virtualMachineName"] = state ? state.virtualMachineName : undefined;
        } else {
            const args = argsOrState as ExtensionArgs | undefined;
            if (!args || args.publisher === undefined) {
                throw new Error("Missing required property 'publisher'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.type === undefined) {
                throw new Error("Missing required property 'type'");
            }
            if (!args || args.typeHandlerVersion === undefined) {
                throw new Error("Missing required property 'typeHandlerVersion'");
            }
            if (!args || args.virtualMachineName === undefined) {
                throw new Error("Missing required property 'virtualMachineName'");
            }
            inputs["autoUpgradeMinorVersion"] = args ? args.autoUpgradeMinorVersion : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["protectedSettings"] = args ? args.protectedSettings : undefined;
            inputs["publisher"] = args ? args.publisher : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["settings"] = args ? args.settings : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["typeHandlerVersion"] = args ? args.typeHandlerVersion : undefined;
            inputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
        }
        super(Extension.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Extension resources.
 */
export interface ExtensionState {
    /**
     * Specifies if the platform deploys
     * the latest minor version update to the `type_handler_version` specified.
     */
    readonly autoUpgradeMinorVersion?: kulado.Input<boolean>;
    /**
     * The location where the extension is created. Changing
     * this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The name of the virtual machine extension peering. Changing
     * this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The protected_settings passed to the
     * extension, like settings, these are specified as a JSON object in a string.
     */
    readonly protectedSettings?: kulado.Input<string>;
    /**
     * The publisher of the extension, available publishers
     * can be found by using the Azure CLI.
     */
    readonly publisher?: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network. Changing this forces a new resource to be
     * created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * The settings passed to the extension, these are
     * specified as a JSON object in a string.
     */
    readonly settings?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The type of extension, available types for a publisher can
     * be found using the Azure CLI.
     */
    readonly type?: kulado.Input<string>;
    /**
     * Specifies the version of the extension to
     * use, available versions can be found using the Azure CLI.
     */
    readonly typeHandlerVersion?: kulado.Input<string>;
    /**
     * The name of the virtual machine. Changing
     * this forces a new resource to be created.
     */
    readonly virtualMachineName?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Extension resource.
 */
export interface ExtensionArgs {
    /**
     * Specifies if the platform deploys
     * the latest minor version update to the `type_handler_version` specified.
     */
    readonly autoUpgradeMinorVersion?: kulado.Input<boolean>;
    /**
     * The location where the extension is created. Changing
     * this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * The name of the virtual machine extension peering. Changing
     * this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The protected_settings passed to the
     * extension, like settings, these are specified as a JSON object in a string.
     */
    readonly protectedSettings?: kulado.Input<string>;
    /**
     * The publisher of the extension, available publishers
     * can be found by using the Azure CLI.
     */
    readonly publisher: kulado.Input<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network. Changing this forces a new resource to be
     * created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * The settings passed to the extension, these are
     * specified as a JSON object in a string.
     */
    readonly settings?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The type of extension, available types for a publisher can
     * be found using the Azure CLI.
     */
    readonly type: kulado.Input<string>;
    /**
     * Specifies the version of the extension to
     * use, available versions can be found using the Azure CLI.
     */
    readonly typeHandlerVersion: kulado.Input<string>;
    /**
     * The name of the virtual machine. Changing
     * this forces a new resource to be created.
     */
    readonly virtualMachineName: kulado.Input<string>;
}