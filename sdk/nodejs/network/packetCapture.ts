// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Configures Packet Capturing against a Virtual Machine using a Network Watcher.
 * 
 * > **NOTE:** This resource has been deprecated in favour of the `azurerm_network_connection_monitor` resource and will be removed in the next major version of the AzureRM Provider. The new resource shares the same fields as this one, and information on migrating across can be found in this guide.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "packet-capture-rg",
 * });
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: testResourceGroup.location,
 *     name: "production-network",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testSubnet = new azure.network.Subnet("test", {
 *     addressPrefix: "10.0.2.0/24",
 *     name: "internal",
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
 *     name: "pctest-nic",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testNetworkWatcher = new azure.network.NetworkWatcher("test", {
 *     location: testResourceGroup.location,
 *     name: "network-watcher",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: testResourceGroup.location,
 *     name: "pctestsa",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testVirtualMachine = new azure.compute.VirtualMachine("test", {
 *     location: testResourceGroup.location,
 *     name: "pctest-vm",
 *     networkInterfaceIds: [testNetworkInterface.id],
 *     osProfile: {
 *         adminPassword: "Password1234!",
 *         adminUsername: "testadmin",
 *         computerName: "pctest-vm",
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
 *         managedDiskType: "Standard_LRS",
 *         name: "osdisk",
 *     },
 *     vmSize: "Standard_F2",
 * });
 * const testExtension = new azure.compute.Extension("test", {
 *     autoUpgradeMinorVersion: true,
 *     location: testResourceGroup.location,
 *     name: "network-watcher",
 *     publisher: "Microsoft.Azure.NetworkWatcher",
 *     resourceGroupName: testResourceGroup.name,
 *     type: "NetworkWatcherAgentLinux",
 *     typeHandlerVersion: "1.4",
 *     virtualMachineName: testVirtualMachine.name,
 * });
 * const testPacketCapture = new azure.network.PacketCapture("test", {
 *     name: "pctestcapture",
 *     networkWatcherName: testNetworkWatcher.name,
 *     resourceGroupName: testResourceGroup.name,
 *     storageLocation: {
 *         storageAccountId: testAccount.id,
 *     },
 *     targetResourceId: testVirtualMachine.id,
 * }, {dependsOn: [testExtension]});
 * ```
 * 
 * > **NOTE:** This Resource requires that [the Network Watcher Virtual Machine Extension](https://docs.microsoft.com/azure/network-watcher/network-watcher-packet-capture-manage-portal#before-you-begin) is installed on the Virtual Machine before capturing can be enabled which can be installed via the `azurerm_virtual_machine_extension` resource.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/packet_capture.html.markdown.
 */
export class PacketCapture extends kulado.CustomResource {
    /**
     * Get an existing PacketCapture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: PacketCaptureState, opts?: kulado.CustomResourceOptions): PacketCapture {
        return new PacketCapture(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:network/packetCapture:PacketCapture';

    /**
     * Returns true if the given object is an instance of PacketCapture.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PacketCapture {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === PacketCapture.__kuladoType;
    }

    /**
     * One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
     */
    public readonly filters!: kulado.Output<{ localIpAddress?: string, localPort?: string, protocol: string, remoteIpAddress?: string, remotePort?: string }[] | undefined>;
    /**
     * The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
     */
    public readonly maximumBytesPerPacket!: kulado.Output<number | undefined>;
    /**
     * Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
     */
    public readonly maximumBytesPerSession!: kulado.Output<number | undefined>;
    /**
     * The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
     */
    public readonly maximumCaptureDuration!: kulado.Output<number | undefined>;
    /**
     * The name to use for this Packet Capture. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the Network Watcher. Changing this forces a new resource to be created.
     */
    public readonly networkWatcherName!: kulado.Output<string>;
    /**
     * The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A `storage_location` block as defined below. Changing this forces a new resource to be created.
     */
    public readonly storageLocation!: kulado.Output<{ filePath?: string, storageAccountId?: string, storagePath: string }>;
    /**
     * The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
     */
    public readonly targetResourceId!: kulado.Output<string>;

    /**
     * Create a PacketCapture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PacketCaptureArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: PacketCaptureArgs | PacketCaptureState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PacketCaptureState | undefined;
            inputs["filters"] = state ? state.filters : undefined;
            inputs["maximumBytesPerPacket"] = state ? state.maximumBytesPerPacket : undefined;
            inputs["maximumBytesPerSession"] = state ? state.maximumBytesPerSession : undefined;
            inputs["maximumCaptureDuration"] = state ? state.maximumCaptureDuration : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkWatcherName"] = state ? state.networkWatcherName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["storageLocation"] = state ? state.storageLocation : undefined;
            inputs["targetResourceId"] = state ? state.targetResourceId : undefined;
        } else {
            const args = argsOrState as PacketCaptureArgs | undefined;
            if (!args || args.networkWatcherName === undefined) {
                throw new Error("Missing required property 'networkWatcherName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageLocation === undefined) {
                throw new Error("Missing required property 'storageLocation'");
            }
            if (!args || args.targetResourceId === undefined) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            inputs["filters"] = args ? args.filters : undefined;
            inputs["maximumBytesPerPacket"] = args ? args.maximumBytesPerPacket : undefined;
            inputs["maximumBytesPerSession"] = args ? args.maximumBytesPerSession : undefined;
            inputs["maximumCaptureDuration"] = args ? args.maximumCaptureDuration : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkWatcherName"] = args ? args.networkWatcherName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["storageLocation"] = args ? args.storageLocation : undefined;
            inputs["targetResourceId"] = args ? args.targetResourceId : undefined;
        }
        super(PacketCapture.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PacketCapture resources.
 */
export interface PacketCaptureState {
    /**
     * One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly filters?: kulado.Input<kulado.Input<{ localIpAddress?: kulado.Input<string>, localPort?: kulado.Input<string>, protocol: kulado.Input<string>, remoteIpAddress?: kulado.Input<string>, remotePort?: kulado.Input<string> }>[]>;
    /**
     * The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerPacket?: kulado.Input<number>;
    /**
     * Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerSession?: kulado.Input<number>;
    /**
     * The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
     */
    readonly maximumCaptureDuration?: kulado.Input<number>;
    /**
     * The name to use for this Packet Capture. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the Network Watcher. Changing this forces a new resource to be created.
     */
    readonly networkWatcherName?: kulado.Input<string>;
    /**
     * The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A `storage_location` block as defined below. Changing this forces a new resource to be created.
     */
    readonly storageLocation?: kulado.Input<{ filePath?: kulado.Input<string>, storageAccountId?: kulado.Input<string>, storagePath?: kulado.Input<string> }>;
    /**
     * The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
     */
    readonly targetResourceId?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a PacketCapture resource.
 */
export interface PacketCaptureArgs {
    /**
     * One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly filters?: kulado.Input<kulado.Input<{ localIpAddress?: kulado.Input<string>, localPort?: kulado.Input<string>, protocol: kulado.Input<string>, remoteIpAddress?: kulado.Input<string>, remotePort?: kulado.Input<string> }>[]>;
    /**
     * The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerPacket?: kulado.Input<number>;
    /**
     * Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerSession?: kulado.Input<number>;
    /**
     * The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
     */
    readonly maximumCaptureDuration?: kulado.Input<number>;
    /**
     * The name to use for this Packet Capture. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the Network Watcher. Changing this forces a new resource to be created.
     */
    readonly networkWatcherName: kulado.Input<string>;
    /**
     * The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A `storage_location` block as defined below. Changing this forces a new resource to be created.
     */
    readonly storageLocation: kulado.Input<{ filePath?: kulado.Input<string>, storageAccountId?: kulado.Input<string>, storagePath?: kulado.Input<string> }>;
    /**
     * The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
     */
    readonly targetResourceId: kulado.Input<string>;
}
