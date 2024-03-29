// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/virtual_machine_scale_set.html.markdown.
 */
export class ScaleSet extends kulado.CustomResource {
    /**
     * Get an existing ScaleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ScaleSetState, opts?: kulado.CustomResourceOptions): ScaleSet {
        return new ScaleSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:compute/scaleSet:ScaleSet';

    /**
     * Returns true if the given object is an instance of ScaleSet.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScaleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === ScaleSet.__kuladoType;
    }

    /**
     * Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
     */
    public readonly automaticOsUpgrade!: kulado.Output<boolean | undefined>;
    /**
     * A boot diagnostics profile block as referenced below.
     */
    public readonly bootDiagnostics!: kulado.Output<{ enabled?: boolean, storageUri: string } | undefined>;
    /**
     * Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
     */
    public readonly evictionPolicy!: kulado.Output<string | undefined>;
    /**
     * Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
     */
    public readonly extensions!: kulado.Output<{ autoUpgradeMinorVersion?: boolean, name: string, protectedSettings?: string, provisionAfterExtensions?: string[], publisher: string, settings?: string, type: string, typeHandlerVersion: string }[] | undefined>;
    /**
     * Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
     */
    public readonly healthProbeId!: kulado.Output<string | undefined>;
    public readonly identity!: kulado.Output<{ identityIds?: string[], principalId: string, type: string }>;
    /**
     * Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
     */
    public readonly licenseType!: kulado.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name of the image from the marketplace.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * A collection of network profile block as documented below.
     */
    public readonly networkProfiles!: kulado.Output<{ acceleratedNetworking?: boolean, dnsSettings?: { dnsServers: string[] }, ipConfigurations: { applicationGatewayBackendAddressPoolIds?: string[], applicationSecurityGroupIds?: string[], loadBalancerBackendAddressPoolIds?: string[], loadBalancerInboundNatRulesIds: string[], name: string, primary: boolean, publicIpAddressConfiguration?: { domainNameLabel: string, idleTimeout: number, name: string }, subnetId: string }[], ipForwarding?: boolean, name: string, networkSecurityGroupId?: string, primary: boolean }[]>;
    /**
     * A Virtual Machine OS Profile block as documented below.
     */
    public readonly osProfile!: kulado.Output<{ adminPassword?: string, adminUsername: string, computerNamePrefix: string, customData?: string }>;
    /**
     * A Linux config block as documented below.
     */
    public readonly osProfileLinuxConfig!: kulado.Output<{ disablePasswordAuthentication?: boolean, sshKeys?: { keyData?: string, path: string }[] }>;
    /**
     * A collection of Secret blocks as documented below.
     */
    public readonly osProfileSecrets!: kulado.Output<{ sourceVaultId: string, vaultCertificates?: { certificateStore?: string, certificateUrl: string }[] }[] | undefined>;
    /**
     * A Windows config block as documented below.
     */
    public readonly osProfileWindowsConfig!: kulado.Output<{ additionalUnattendConfigs?: { component: string, content: string, pass: string, settingName: string }[], enableAutomaticUpgrades?: boolean, provisionVmAgent?: boolean, winrms?: { certificateUrl?: string, protocol: string }[] } | undefined>;
    /**
     * Specifies whether the virtual machine scale set should be overprovisioned.
     */
    public readonly overprovision!: kulado.Output<boolean | undefined>;
    /**
     * A plan block as documented below.
     */
    public readonly plan!: kulado.Output<{ name: string, product: string, publisher: string } | undefined>;
    /**
     * Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
     */
    public readonly priority!: kulado.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
     */
    public readonly rollingUpgradePolicy!: kulado.Output<{ maxBatchInstancePercent?: number, maxUnhealthyInstancePercent?: number, maxUnhealthyUpgradedInstancePercent?: number, pauseTimeBetweenBatches?: string } | undefined>;
    /**
     * Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
     */
    public readonly singlePlacementGroup!: kulado.Output<boolean | undefined>;
    /**
     * Specifies the SKU of the image used to create the virtual machines.
     */
    public readonly sku!: kulado.Output<{ capacity: number, name: string, tier: string }>;
    /**
     * A storage profile data disk block as documented below
     */
    public readonly storageProfileDataDisks!: kulado.Output<{ caching: string, createOption: string, diskSizeGb: number, lun: number, managedDiskType: string }[] | undefined>;
    /**
     * A storage profile image reference block as documented below.
     */
    public readonly storageProfileImageReference!: kulado.Output<{ id?: string, offer?: string, publisher?: string, sku?: string, version?: string }>;
    /**
     * A storage profile os disk block as documented below
     */
    public readonly storageProfileOsDisk!: kulado.Output<{ caching: string, createOption: string, image?: string, managedDiskType: string, name?: string, osType?: string, vhdContainers?: string[] }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
     */
    public readonly upgradePolicyMode!: kulado.Output<string>;
    /**
     * A collection of availability zones to spread the Virtual Machines over.
     */
    public readonly zones!: kulado.Output<string[] | undefined>;

    /**
     * Create a ScaleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScaleSetArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScaleSetArgs | ScaleSetState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ScaleSetState | undefined;
            inputs["automaticOsUpgrade"] = state ? state.automaticOsUpgrade : undefined;
            inputs["bootDiagnostics"] = state ? state.bootDiagnostics : undefined;
            inputs["evictionPolicy"] = state ? state.evictionPolicy : undefined;
            inputs["extensions"] = state ? state.extensions : undefined;
            inputs["healthProbeId"] = state ? state.healthProbeId : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["licenseType"] = state ? state.licenseType : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkProfiles"] = state ? state.networkProfiles : undefined;
            inputs["osProfile"] = state ? state.osProfile : undefined;
            inputs["osProfileLinuxConfig"] = state ? state.osProfileLinuxConfig : undefined;
            inputs["osProfileSecrets"] = state ? state.osProfileSecrets : undefined;
            inputs["osProfileWindowsConfig"] = state ? state.osProfileWindowsConfig : undefined;
            inputs["overprovision"] = state ? state.overprovision : undefined;
            inputs["plan"] = state ? state.plan : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["rollingUpgradePolicy"] = state ? state.rollingUpgradePolicy : undefined;
            inputs["singlePlacementGroup"] = state ? state.singlePlacementGroup : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["storageProfileDataDisks"] = state ? state.storageProfileDataDisks : undefined;
            inputs["storageProfileImageReference"] = state ? state.storageProfileImageReference : undefined;
            inputs["storageProfileOsDisk"] = state ? state.storageProfileOsDisk : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["upgradePolicyMode"] = state ? state.upgradePolicyMode : undefined;
            inputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as ScaleSetArgs | undefined;
            if (!args || args.networkProfiles === undefined) {
                throw new Error("Missing required property 'networkProfiles'");
            }
            if (!args || args.osProfile === undefined) {
                throw new Error("Missing required property 'osProfile'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            if (!args || args.storageProfileOsDisk === undefined) {
                throw new Error("Missing required property 'storageProfileOsDisk'");
            }
            if (!args || args.upgradePolicyMode === undefined) {
                throw new Error("Missing required property 'upgradePolicyMode'");
            }
            inputs["automaticOsUpgrade"] = args ? args.automaticOsUpgrade : undefined;
            inputs["bootDiagnostics"] = args ? args.bootDiagnostics : undefined;
            inputs["evictionPolicy"] = args ? args.evictionPolicy : undefined;
            inputs["extensions"] = args ? args.extensions : undefined;
            inputs["healthProbeId"] = args ? args.healthProbeId : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["licenseType"] = args ? args.licenseType : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkProfiles"] = args ? args.networkProfiles : undefined;
            inputs["osProfile"] = args ? args.osProfile : undefined;
            inputs["osProfileLinuxConfig"] = args ? args.osProfileLinuxConfig : undefined;
            inputs["osProfileSecrets"] = args ? args.osProfileSecrets : undefined;
            inputs["osProfileWindowsConfig"] = args ? args.osProfileWindowsConfig : undefined;
            inputs["overprovision"] = args ? args.overprovision : undefined;
            inputs["plan"] = args ? args.plan : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["rollingUpgradePolicy"] = args ? args.rollingUpgradePolicy : undefined;
            inputs["singlePlacementGroup"] = args ? args.singlePlacementGroup : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["storageProfileDataDisks"] = args ? args.storageProfileDataDisks : undefined;
            inputs["storageProfileImageReference"] = args ? args.storageProfileImageReference : undefined;
            inputs["storageProfileOsDisk"] = args ? args.storageProfileOsDisk : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["upgradePolicyMode"] = args ? args.upgradePolicyMode : undefined;
            inputs["zones"] = args ? args.zones : undefined;
        }
        super(ScaleSet.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ScaleSet resources.
 */
export interface ScaleSetState {
    /**
     * Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
     */
    readonly automaticOsUpgrade?: kulado.Input<boolean>;
    /**
     * A boot diagnostics profile block as referenced below.
     */
    readonly bootDiagnostics?: kulado.Input<{ enabled?: kulado.Input<boolean>, storageUri: kulado.Input<string> }>;
    /**
     * Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
     */
    readonly evictionPolicy?: kulado.Input<string>;
    /**
     * Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
     */
    readonly extensions?: kulado.Input<kulado.Input<{ autoUpgradeMinorVersion?: kulado.Input<boolean>, name: kulado.Input<string>, protectedSettings?: kulado.Input<string>, provisionAfterExtensions?: kulado.Input<kulado.Input<string>[]>, publisher: kulado.Input<string>, settings?: kulado.Input<string>, type: kulado.Input<string>, typeHandlerVersion: kulado.Input<string> }>[]>;
    /**
     * Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
     */
    readonly healthProbeId?: kulado.Input<string>;
    readonly identity?: kulado.Input<{ identityIds?: kulado.Input<kulado.Input<string>[]>, principalId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
     */
    readonly licenseType?: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the image from the marketplace.
     */
    readonly name?: kulado.Input<string>;
    /**
     * A collection of network profile block as documented below.
     */
    readonly networkProfiles?: kulado.Input<kulado.Input<{ acceleratedNetworking?: kulado.Input<boolean>, dnsSettings?: kulado.Input<{ dnsServers: kulado.Input<kulado.Input<string>[]> }>, ipConfigurations: kulado.Input<kulado.Input<{ applicationGatewayBackendAddressPoolIds?: kulado.Input<kulado.Input<string>[]>, applicationSecurityGroupIds?: kulado.Input<kulado.Input<string>[]>, loadBalancerBackendAddressPoolIds?: kulado.Input<kulado.Input<string>[]>, loadBalancerInboundNatRulesIds?: kulado.Input<kulado.Input<string>[]>, name: kulado.Input<string>, primary: kulado.Input<boolean>, publicIpAddressConfiguration?: kulado.Input<{ domainNameLabel: kulado.Input<string>, idleTimeout: kulado.Input<number>, name: kulado.Input<string> }>, subnetId: kulado.Input<string> }>[]>, ipForwarding?: kulado.Input<boolean>, name: kulado.Input<string>, networkSecurityGroupId?: kulado.Input<string>, primary: kulado.Input<boolean> }>[]>;
    /**
     * A Virtual Machine OS Profile block as documented below.
     */
    readonly osProfile?: kulado.Input<{ adminPassword?: kulado.Input<string>, adminUsername: kulado.Input<string>, computerNamePrefix: kulado.Input<string>, customData?: kulado.Input<string> }>;
    /**
     * A Linux config block as documented below.
     */
    readonly osProfileLinuxConfig?: kulado.Input<{ disablePasswordAuthentication?: kulado.Input<boolean>, sshKeys?: kulado.Input<kulado.Input<{ keyData?: kulado.Input<string>, path: kulado.Input<string> }>[]> }>;
    /**
     * A collection of Secret blocks as documented below.
     */
    readonly osProfileSecrets?: kulado.Input<kulado.Input<{ sourceVaultId: kulado.Input<string>, vaultCertificates?: kulado.Input<kulado.Input<{ certificateStore?: kulado.Input<string>, certificateUrl: kulado.Input<string> }>[]> }>[]>;
    /**
     * A Windows config block as documented below.
     */
    readonly osProfileWindowsConfig?: kulado.Input<{ additionalUnattendConfigs?: kulado.Input<kulado.Input<{ component: kulado.Input<string>, content: kulado.Input<string>, pass: kulado.Input<string>, settingName: kulado.Input<string> }>[]>, enableAutomaticUpgrades?: kulado.Input<boolean>, provisionVmAgent?: kulado.Input<boolean>, winrms?: kulado.Input<kulado.Input<{ certificateUrl?: kulado.Input<string>, protocol: kulado.Input<string> }>[]> }>;
    /**
     * Specifies whether the virtual machine scale set should be overprovisioned.
     */
    readonly overprovision?: kulado.Input<boolean>;
    /**
     * A plan block as documented below.
     */
    readonly plan?: kulado.Input<{ name: kulado.Input<string>, product: kulado.Input<string>, publisher: kulado.Input<string> }>;
    /**
     * Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
     */
    readonly priority?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
     */
    readonly rollingUpgradePolicy?: kulado.Input<{ maxBatchInstancePercent?: kulado.Input<number>, maxUnhealthyInstancePercent?: kulado.Input<number>, maxUnhealthyUpgradedInstancePercent?: kulado.Input<number>, pauseTimeBetweenBatches?: kulado.Input<string> }>;
    /**
     * Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
     */
    readonly singlePlacementGroup?: kulado.Input<boolean>;
    /**
     * Specifies the SKU of the image used to create the virtual machines.
     */
    readonly sku?: kulado.Input<{ capacity: kulado.Input<number>, name: kulado.Input<string>, tier?: kulado.Input<string> }>;
    /**
     * A storage profile data disk block as documented below
     */
    readonly storageProfileDataDisks?: kulado.Input<kulado.Input<{ caching?: kulado.Input<string>, createOption: kulado.Input<string>, diskSizeGb?: kulado.Input<number>, lun: kulado.Input<number>, managedDiskType?: kulado.Input<string> }>[]>;
    /**
     * A storage profile image reference block as documented below.
     */
    readonly storageProfileImageReference?: kulado.Input<{ id?: kulado.Input<string>, offer?: kulado.Input<string>, publisher?: kulado.Input<string>, sku?: kulado.Input<string>, version?: kulado.Input<string> }>;
    /**
     * A storage profile os disk block as documented below
     */
    readonly storageProfileOsDisk?: kulado.Input<{ caching?: kulado.Input<string>, createOption: kulado.Input<string>, image?: kulado.Input<string>, managedDiskType?: kulado.Input<string>, name?: kulado.Input<string>, osType?: kulado.Input<string>, vhdContainers?: kulado.Input<kulado.Input<string>[]> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
     */
    readonly upgradePolicyMode?: kulado.Input<string>;
    /**
     * A collection of availability zones to spread the Virtual Machines over.
     */
    readonly zones?: kulado.Input<kulado.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ScaleSet resource.
 */
export interface ScaleSetArgs {
    /**
     * Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
     */
    readonly automaticOsUpgrade?: kulado.Input<boolean>;
    /**
     * A boot diagnostics profile block as referenced below.
     */
    readonly bootDiagnostics?: kulado.Input<{ enabled?: kulado.Input<boolean>, storageUri: kulado.Input<string> }>;
    /**
     * Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
     */
    readonly evictionPolicy?: kulado.Input<string>;
    /**
     * Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
     */
    readonly extensions?: kulado.Input<kulado.Input<{ autoUpgradeMinorVersion?: kulado.Input<boolean>, name: kulado.Input<string>, protectedSettings?: kulado.Input<string>, provisionAfterExtensions?: kulado.Input<kulado.Input<string>[]>, publisher: kulado.Input<string>, settings?: kulado.Input<string>, type: kulado.Input<string>, typeHandlerVersion: kulado.Input<string> }>[]>;
    /**
     * Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
     */
    readonly healthProbeId?: kulado.Input<string>;
    readonly identity?: kulado.Input<{ identityIds?: kulado.Input<kulado.Input<string>[]>, principalId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
     */
    readonly licenseType?: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the image from the marketplace.
     */
    readonly name?: kulado.Input<string>;
    /**
     * A collection of network profile block as documented below.
     */
    readonly networkProfiles: kulado.Input<kulado.Input<{ acceleratedNetworking?: kulado.Input<boolean>, dnsSettings?: kulado.Input<{ dnsServers: kulado.Input<kulado.Input<string>[]> }>, ipConfigurations: kulado.Input<kulado.Input<{ applicationGatewayBackendAddressPoolIds?: kulado.Input<kulado.Input<string>[]>, applicationSecurityGroupIds?: kulado.Input<kulado.Input<string>[]>, loadBalancerBackendAddressPoolIds?: kulado.Input<kulado.Input<string>[]>, loadBalancerInboundNatRulesIds?: kulado.Input<kulado.Input<string>[]>, name: kulado.Input<string>, primary: kulado.Input<boolean>, publicIpAddressConfiguration?: kulado.Input<{ domainNameLabel: kulado.Input<string>, idleTimeout: kulado.Input<number>, name: kulado.Input<string> }>, subnetId: kulado.Input<string> }>[]>, ipForwarding?: kulado.Input<boolean>, name: kulado.Input<string>, networkSecurityGroupId?: kulado.Input<string>, primary: kulado.Input<boolean> }>[]>;
    /**
     * A Virtual Machine OS Profile block as documented below.
     */
    readonly osProfile: kulado.Input<{ adminPassword?: kulado.Input<string>, adminUsername: kulado.Input<string>, computerNamePrefix: kulado.Input<string>, customData?: kulado.Input<string> }>;
    /**
     * A Linux config block as documented below.
     */
    readonly osProfileLinuxConfig?: kulado.Input<{ disablePasswordAuthentication?: kulado.Input<boolean>, sshKeys?: kulado.Input<kulado.Input<{ keyData?: kulado.Input<string>, path: kulado.Input<string> }>[]> }>;
    /**
     * A collection of Secret blocks as documented below.
     */
    readonly osProfileSecrets?: kulado.Input<kulado.Input<{ sourceVaultId: kulado.Input<string>, vaultCertificates?: kulado.Input<kulado.Input<{ certificateStore?: kulado.Input<string>, certificateUrl: kulado.Input<string> }>[]> }>[]>;
    /**
     * A Windows config block as documented below.
     */
    readonly osProfileWindowsConfig?: kulado.Input<{ additionalUnattendConfigs?: kulado.Input<kulado.Input<{ component: kulado.Input<string>, content: kulado.Input<string>, pass: kulado.Input<string>, settingName: kulado.Input<string> }>[]>, enableAutomaticUpgrades?: kulado.Input<boolean>, provisionVmAgent?: kulado.Input<boolean>, winrms?: kulado.Input<kulado.Input<{ certificateUrl?: kulado.Input<string>, protocol: kulado.Input<string> }>[]> }>;
    /**
     * Specifies whether the virtual machine scale set should be overprovisioned.
     */
    readonly overprovision?: kulado.Input<boolean>;
    /**
     * A plan block as documented below.
     */
    readonly plan?: kulado.Input<{ name: kulado.Input<string>, product: kulado.Input<string>, publisher: kulado.Input<string> }>;
    /**
     * Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
     */
    readonly priority?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
     */
    readonly rollingUpgradePolicy?: kulado.Input<{ maxBatchInstancePercent?: kulado.Input<number>, maxUnhealthyInstancePercent?: kulado.Input<number>, maxUnhealthyUpgradedInstancePercent?: kulado.Input<number>, pauseTimeBetweenBatches?: kulado.Input<string> }>;
    /**
     * Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
     */
    readonly singlePlacementGroup?: kulado.Input<boolean>;
    /**
     * Specifies the SKU of the image used to create the virtual machines.
     */
    readonly sku: kulado.Input<{ capacity: kulado.Input<number>, name: kulado.Input<string>, tier?: kulado.Input<string> }>;
    /**
     * A storage profile data disk block as documented below
     */
    readonly storageProfileDataDisks?: kulado.Input<kulado.Input<{ caching?: kulado.Input<string>, createOption: kulado.Input<string>, diskSizeGb?: kulado.Input<number>, lun: kulado.Input<number>, managedDiskType?: kulado.Input<string> }>[]>;
    /**
     * A storage profile image reference block as documented below.
     */
    readonly storageProfileImageReference?: kulado.Input<{ id?: kulado.Input<string>, offer?: kulado.Input<string>, publisher?: kulado.Input<string>, sku?: kulado.Input<string>, version?: kulado.Input<string> }>;
    /**
     * A storage profile os disk block as documented below
     */
    readonly storageProfileOsDisk: kulado.Input<{ caching?: kulado.Input<string>, createOption: kulado.Input<string>, image?: kulado.Input<string>, managedDiskType?: kulado.Input<string>, name?: kulado.Input<string>, osType?: kulado.Input<string>, vhdContainers?: kulado.Input<kulado.Input<string>[]> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
     */
    readonly upgradePolicyMode: kulado.Input<string>;
    /**
     * A collection of availability zones to spread the Virtual Machines over.
     */
    readonly zones?: kulado.Input<kulado.Input<string>[]>;
}
