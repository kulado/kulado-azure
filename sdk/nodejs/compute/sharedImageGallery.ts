// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * Manages a Shared Image Gallery.
 * 
 * > **NOTE** Shared Image Galleries are currently in Public Preview. You can find more information, including [how to register for the Public Preview here](https://azure.microsoft.com/en-gb/blog/announcing-the-public-preview-of-shared-image-gallery/).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as kulado from "@kulado/kulado";
 * import * as azure from "@kulado/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const testSharedImageGallery = new azure.compute.SharedImageGallery("test", {
 *     description: "Shared images and things.",
 *     location: testResourceGroup.location,
 *     name: "example_image_gallery",
 *     resourceGroupName: testResourceGroup.name,
 *     tags: {
 *         Hello: "There",
 *         World: "Example",
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/shared_image_gallery.html.markdown.
 */
export class SharedImageGallery extends kulado.CustomResource {
    /**
     * Get an existing SharedImageGallery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: SharedImageGalleryState, opts?: kulado.CustomResourceOptions): SharedImageGallery {
        return new SharedImageGallery(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:compute/sharedImageGallery:SharedImageGallery';

    /**
     * Returns true if the given object is an instance of SharedImageGallery.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SharedImageGallery {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === SharedImageGallery.__kuladoType;
    }

    /**
     * A description for this Shared Image Gallery.
     */
    public readonly description!: kulado.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: kulado.Output<string>;
    /**
     * Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    public readonly name!: kulado.Output<string>;
    /**
     * The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * A mapping of tags to assign to the Shared Image Gallery.
     */
    public readonly tags!: kulado.Output<{[key: string]: any}>;
    /**
     * The Unique Name for this Shared Image Gallery.
     */
    public /*out*/ readonly uniqueName!: kulado.Output<string>;

    /**
     * Create a SharedImageGallery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedImageGalleryArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: SharedImageGalleryArgs | SharedImageGalleryState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SharedImageGalleryState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["uniqueName"] = state ? state.uniqueName : undefined;
        } else {
            const args = argsOrState as SharedImageGalleryArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["uniqueName"] = undefined /*out*/;
        }
        super(SharedImageGallery.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SharedImageGallery resources.
 */
export interface SharedImageGalleryState {
    /**
     * A description for this Shared Image Gallery.
     */
    readonly description?: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the Shared Image Gallery.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
    /**
     * The Unique Name for this Shared Image Gallery.
     */
    readonly uniqueName?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a SharedImageGallery resource.
 */
export interface SharedImageGalleryArgs {
    /**
     * A description for this Shared Image Gallery.
     */
    readonly description?: kulado.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: kulado.Input<string>;
    /**
     * Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly name?: kulado.Input<string>;
    /**
     * The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * A mapping of tags to assign to the Shared Image Gallery.
     */
    readonly tags?: kulado.Input<{[key: string]: any}>;
}
