// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages an API Management Property.
 * 
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 *     name: "example-resources",
 * });
 * const exampleService = new azure.apimanagement.Service("example", {
 *     location: exampleResourceGroup.location,
 *     name: "example-apim",
 *     publisherEmail: "pub1@email.com",
 *     publisherName: "pub1",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         capacity: 1,
 *         name: "Developer",
 *     },
 * });
 * const exampleProperty = new azure.apimanagement.Property("example", {
 *     apiManagementName: exampleService.name,
 *     displayName: "ExampleProperty",
 *     name: "example-apimg",
 *     resourceGroupName: exampleResourceGroup.name,
 *     value: "Example Value",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_property.html.markdown.
 */
export class Property extends kulado.CustomResource {
    /**
     * Get an existing Property resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: PropertyState, opts?: kulado.CustomResourceOptions): Property {
        return new Property(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:apimanagement/property:Property';

    /**
     * Returns true if the given object is an instance of Property.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Property {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Property.__kuladoType;
    }

    /**
     * The name of the API Management Service in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName!: kulado.Output<string>;
    /**
     * The display name of this API Management Property.
     */
    public readonly displayName!: kulado.Output<string>;
    /**
     * The name of the API Management Property. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * Specifies whether the API Management Property is secret. Valid values are `true` or `false`. The default value is `false`.
     */
    public readonly secret!: kulado.Output<boolean | undefined>;
    /**
     * A list of tags to be applied to the API Management Property.
     */
    public readonly tags!: kulado.Output<string[] | undefined>;
    /**
     * The value of this API Management Property.
     */
    public readonly value!: kulado.Output<string>;

    /**
     * Create a Property resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PropertyArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: PropertyArgs | PropertyState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PropertyState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secret"] = state ? state.secret : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as PropertyArgs | undefined;
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.value === undefined) {
                throw new Error("Missing required property 'value'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["secret"] = args ? args.secret : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["value"] = args ? args.value : undefined;
        }
        super(Property.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Property resources.
 */
export interface PropertyState {
    /**
     * The name of the API Management Service in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    readonly apiManagementName?: kulado.Input<string>;
    /**
     * The display name of this API Management Property.
     */
    readonly displayName?: kulado.Input<string>;
    /**
     * The name of the API Management Property. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * Specifies whether the API Management Property is secret. Valid values are `true` or `false`. The default value is `false`.
     */
    readonly secret?: kulado.Input<boolean>;
    /**
     * A list of tags to be applied to the API Management Property.
     */
    readonly tags?: kulado.Input<kulado.Input<string>[]>;
    /**
     * The value of this API Management Property.
     */
    readonly value?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Property resource.
 */
export interface PropertyArgs {
    /**
     * The name of the API Management Service in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: kulado.Input<string>;
    /**
     * The display name of this API Management Property.
     */
    readonly displayName: kulado.Input<string>;
    /**
     * The name of the API Management Property. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * Specifies whether the API Management Property is secret. Valid values are `true` or `false`. The default value is `false`.
     */
    readonly secret?: kulado.Input<boolean>;
    /**
     * A list of tags to be applied to the API Management Property.
     */
    readonly tags?: kulado.Input<kulado.Input<string>[]>;
    /**
     * The value of this API Management Property.
     */
    readonly value: kulado.Input<string>;
}