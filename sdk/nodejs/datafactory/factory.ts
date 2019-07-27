// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manage an Azure Data Factory (Version 2).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "northeurope",
 *     name: "example",
 * });
 * const exampleFactory = new azure.datafactory.Factory("example", {
 *     location: exampleResourceGroup.location,
 *     name: "example",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/data_factory.html.markdown.
 */
export class Factory extends kulado.CustomResource {
    /**
     * Get an existing Factory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: FactoryState, opts?: kulado.CustomResourceOptions): Factory {
        return new Factory(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:datafactory/factory:Factory';

    /**
     * Returns true if the given object is an instance of Factory.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Factory {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Factory.__kuladoType;
    }

    /**
     * A `github_configuration` block as defined below.
     */
    public readonly githubConfiguration!: kulado.Output<{ accountName: string, branchName: string, gitUrl: string, repositoryName: string, rootFolder: string } | undefined>;
    /**
     * An `identity` block as defined below.
     */
    public readonly identity!: kulado.Output<{ principalId: string, tenantId: string, type: string }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name of the Data Factory. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which to create the Data Factory.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * A `vsts_configuration` block as defined below.
     */
    public readonly vstsConfiguration!: kulado.Output<{ accountName: string, branchName: string, projectName: string, repositoryName: string, rootFolder: string, tenantId: string } | undefined>;

    /**
     * Create a Factory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FactoryArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: FactoryArgs | FactoryState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FactoryState | undefined;
            inputs["githubConfiguration"] = state ? state.githubConfiguration : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vstsConfiguration"] = state ? state.vstsConfiguration : undefined;
        } else {
            const args = argsOrState as FactoryArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["githubConfiguration"] = args ? args.githubConfiguration : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vstsConfiguration"] = args ? args.vstsConfiguration : undefined;
        }
        super(Factory.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Factory resources.
 */
export interface FactoryState {
    /**
     * A `github_configuration` block as defined below.
     */
    readonly githubConfiguration?: kulado.Input<{ accountName: kulado.Input<string>, branchName: kulado.Input<string>, gitUrl: kulado.Input<string>, repositoryName: kulado.Input<string>, rootFolder: kulado.Input<string> }>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity?: kulado.Input<{ principalId?: kulado.Input<string>, tenantId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Data Factory. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Data Factory.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * A `vsts_configuration` block as defined below.
     */
    readonly vstsConfiguration?: kulado.Input<{ accountName: kulado.Input<string>, branchName: kulado.Input<string>, projectName: kulado.Input<string>, repositoryName: kulado.Input<string>, rootFolder: kulado.Input<string>, tenantId: kulado.Input<string> }>;
}

/**
 * The set of arguments for constructing a Factory resource.
 */
export interface FactoryArgs {
    /**
     * A `github_configuration` block as defined below.
     */
    readonly githubConfiguration?: kulado.Input<{ accountName: kulado.Input<string>, branchName: kulado.Input<string>, gitUrl: kulado.Input<string>, repositoryName: kulado.Input<string>, rootFolder: kulado.Input<string> }>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity?: kulado.Input<{ principalId?: kulado.Input<string>, tenantId?: kulado.Input<string>, type: kulado.Input<string> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Data Factory. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Data Factory.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * A `vsts_configuration` block as defined below.
     */
    readonly vstsConfiguration?: kulado.Input<{ accountName: kulado.Input<string>, branchName: kulado.Input<string>, projectName: kulado.Input<string>, repositoryName: kulado.Input<string>, rootFolder: kulado.Input<string>, tenantId: kulado.Input<string> }>;
}