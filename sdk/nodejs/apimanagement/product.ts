// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as kulado from "@kulado/kulado";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_product.html.markdown.
 */
export class Product extends kulado.CustomResource {
    /**
     * Get an existing Product resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: kulado.Input<kulado.ID>, state?: ProductState, opts?: kulado.CustomResourceOptions): Product {
        return new Product(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __kuladoType = 'azure:apimanagement/product:Product';

    /**
     * Returns true if the given object is an instance of Product.  This is designed to work even
     * when multiple copies of the Kulado SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Product {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__kuladoType'] === Product.__kuladoType;
    }

    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName!: kulado.Output<string>;
    /**
     * Do subscribers need to be approved prior to being able to use the Product?
     */
    public readonly approvalRequired!: kulado.Output<boolean | undefined>;
    /**
     * A description of this Product, which may include HTML formatting tags.
     */
    public readonly description!: kulado.Output<string | undefined>;
    /**
     * The Display Name for this API Management Product.
     */
    public readonly displayName!: kulado.Output<string>;
    /**
     * The Identifier for this Product, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    public readonly productId!: kulado.Output<string>;
    /**
     * Is this Product Published?
     */
    public readonly published!: kulado.Output<boolean>;
    /**
     * The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: kulado.Output<string>;
    /**
     * Is a Subscription required to access API's included in this Product?
     */
    public readonly subscriptionRequired!: kulado.Output<boolean>;
    /**
     * The number of subscriptions a user can have to this Product at the same time.
     */
    public readonly subscriptionsLimit!: kulado.Output<number | undefined>;
    /**
     * The Terms and Conditions for this Product, which must be accepted by Developers before they can begin the Subscription process.
     */
    public readonly terms!: kulado.Output<string | undefined>;

    /**
     * Create a Product resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProductArgs, opts?: kulado.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProductArgs | ProductState, opts?: kulado.CustomResourceOptions) {
        let inputs: kulado.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ProductState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["approvalRequired"] = state ? state.approvalRequired : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["productId"] = state ? state.productId : undefined;
            inputs["published"] = state ? state.published : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["subscriptionRequired"] = state ? state.subscriptionRequired : undefined;
            inputs["subscriptionsLimit"] = state ? state.subscriptionsLimit : undefined;
            inputs["terms"] = state ? state.terms : undefined;
        } else {
            const args = argsOrState as ProductArgs | undefined;
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.productId === undefined) {
                throw new Error("Missing required property 'productId'");
            }
            if (!args || args.published === undefined) {
                throw new Error("Missing required property 'published'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.subscriptionRequired === undefined) {
                throw new Error("Missing required property 'subscriptionRequired'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["approvalRequired"] = args ? args.approvalRequired : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["productId"] = args ? args.productId : undefined;
            inputs["published"] = args ? args.published : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["subscriptionRequired"] = args ? args.subscriptionRequired : undefined;
            inputs["subscriptionsLimit"] = args ? args.subscriptionsLimit : undefined;
            inputs["terms"] = args ? args.terms : undefined;
        }
        super(Product.__kuladoType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Product resources.
 */
export interface ProductState {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName?: kulado.Input<string>;
    /**
     * Do subscribers need to be approved prior to being able to use the Product?
     */
    readonly approvalRequired?: kulado.Input<boolean>;
    /**
     * A description of this Product, which may include HTML formatting tags.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The Display Name for this API Management Product.
     */
    readonly displayName?: kulado.Input<string>;
    /**
     * The Identifier for this Product, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly productId?: kulado.Input<string>;
    /**
     * Is this Product Published?
     */
    readonly published?: kulado.Input<boolean>;
    /**
     * The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: kulado.Input<string>;
    /**
     * Is a Subscription required to access API's included in this Product?
     */
    readonly subscriptionRequired?: kulado.Input<boolean>;
    /**
     * The number of subscriptions a user can have to this Product at the same time.
     */
    readonly subscriptionsLimit?: kulado.Input<number>;
    /**
     * The Terms and Conditions for this Product, which must be accepted by Developers before they can begin the Subscription process.
     */
    readonly terms?: kulado.Input<string>;
}

/**
 * The set of arguments for constructing a Product resource.
 */
export interface ProductArgs {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: kulado.Input<string>;
    /**
     * Do subscribers need to be approved prior to being able to use the Product?
     */
    readonly approvalRequired?: kulado.Input<boolean>;
    /**
     * A description of this Product, which may include HTML formatting tags.
     */
    readonly description?: kulado.Input<string>;
    /**
     * The Display Name for this API Management Product.
     */
    readonly displayName: kulado.Input<string>;
    /**
     * The Identifier for this Product, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly productId: kulado.Input<string>;
    /**
     * Is this Product Published?
     */
    readonly published: kulado.Input<boolean>;
    /**
     * The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: kulado.Input<string>;
    /**
     * Is a Subscription required to access API's included in this Product?
     */
    readonly subscriptionRequired: kulado.Input<boolean>;
    /**
     * The number of subscriptions a user can have to this Product at the same time.
     */
    readonly subscriptionsLimit?: kulado.Input<number>;
    /**
     * The Terms and Conditions for this Product, which must be accepted by Developers before they can begin the Subscription process.
     */
    readonly terms?: kulado.Input<string>;
}
