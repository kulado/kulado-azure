// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Policy within a Dev Test Policy Set.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
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
 * const testPolicy = new azure.devtest.Policy("test", {
 *     evaluatorType: "MaxValuePolicy",
 *     factData: "",
 *     labName: testLab.name,
 *     name: "LabVmCount",
 *     policySetName: "default",
 *     resourceGroupName: testResourceGroup.name,
 *     tags: {
 *         Acceptance: "Test",
 *     },
 *     threshold: "999",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/dev_test_policy.html.markdown.
 */
export class Policy extends kulado.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: PolicyState, opts?: kulado.CustomResourceOptions): Policy {
        return new Policy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:devtest/policy:Policy';

    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Policy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Policy.__kuladoType;
    }

    /**
     * A description for the Policy.
     */
    public readonly description!: kulado.Output<string | undefined>;
    /**
     * The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
     */
    public readonly evaluatorType!: kulado.Output<string>;
    /**
     * The Fact Data for this Policy.
     */
    public readonly factData!: kulado.Output<string | undefined>;
    /**
     * Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
     */
    public readonly labName!: kulado.Output<string>;
    /**
     * Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
     */
    public readonly policySetName!: kulado.Output<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * The Threshold for this Policy.
     */
    public readonly threshold!: kulado.Output<string>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyArgs | PolicyState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PolicyState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["evaluatorType"] = state ? state.evaluatorType : undefined;
            inputs["factData"] = state ? state.factData : undefined;
            inputs["labName"] = state ? state.labName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["policySetName"] = state ? state.policySetName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["threshold"] = state ? state.threshold : undefined;
        } else {
            const args = argsOrState as PolicyArgs | undefined;
            if (!args || args.evaluatorType === undefined) {
                throw new Error("Missing required property 'evaluatorType'");
            }
            if (!args || args.labName === undefined) {
                throw new Error("Missing required property 'labName'");
            }
            if (!args || args.policySetName === undefined) {
                throw new Error("Missing required property 'policySetName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.threshold === undefined) {
                throw new Error("Missing required property 'threshold'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["evaluatorType"] = args ? args.evaluatorType : undefined;
            inputs["factData"] = args ? args.factData : undefined;
            inputs["labName"] = args ? args.labName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["policySetName"] = args ? args.policySetName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["threshold"] = args ? args.threshold : undefined;
        }
        super(Policy.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * A description for the Policy.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
     */
    readonly evaluatorType?: kulado.Input<string>;
    /**
     * The Fact Data for this Policy.
     */
    readonly factData?: kulado.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
     */
    readonly labName?: kulado.Input<string>;
    /**
     * Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
     */
    readonly policySetName?: kulado.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The Threshold for this Policy.
     */
    readonly threshold?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * A description for the Policy.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
     */
    readonly evaluatorType: kulado.Input<string>;
    /**
     * The Fact Data for this Policy.
     */
    readonly factData?: kulado.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
     */
    readonly labName: kulado.Input<string>;
    /**
     * Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
     */
    readonly policySetName: kulado.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The Threshold for this Policy.
     */
    readonly threshold: kulado.Input<string>;
}
