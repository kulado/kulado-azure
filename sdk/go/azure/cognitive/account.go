// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cognitive

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a Cognitive Services Account.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/cognitive_account.html.markdown.
type Account struct {
	s *kulado.ResourceState
}

// NewAccount registers a new resource with the given unique name, arguments, and options.
func NewAccount(ctx *kulado.Context,
	name string, args *AccountArgs, opts ...kulado.ResourceOpt) (*Account, error) {
	if args == nil || args.Kind == nil {
		return nil, errors.New("missing required argument 'Kind'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Sku == nil {
		return nil, errors.New("missing required argument 'Sku'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["kind"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["sku"] = nil
		inputs["tags"] = nil
	} else {
		inputs["kind"] = args.Kind
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["sku"] = args.Sku
		inputs["tags"] = args.Tags
	}
	inputs["endpoint"] = nil
	inputs["primaryAccessKey"] = nil
	inputs["secondaryAccessKey"] = nil
	s, err := ctx.RegisterResource("azure:cognitive/account:Account", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Account{s: s}, nil
}

// GetAccount gets an existing Account resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAccount(ctx *kulado.Context,
	name string, id kulado.ID, state *AccountState, opts ...kulado.ResourceOpt) (*Account, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["endpoint"] = state.Endpoint
		inputs["kind"] = state.Kind
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["primaryAccessKey"] = state.PrimaryAccessKey
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["secondaryAccessKey"] = state.SecondaryAccessKey
		inputs["sku"] = state.Sku
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:cognitive/account:Account", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Account{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Account) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Account) ID() *kulado.IDOutput {
	return r.s.ID()
}

// The endpoint used to connect to the Cognitive Service Account.
func (r *Account) Endpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["endpoint"])
}

// Specifies the type of Cognitive Service Account that should be created. Possible values are `Academic`, `Bing.Autosuggest`, `Bing.Autosuggest.v7`, `Bing.CustomSearch`, `Bing.Search`, `Bing.Search.v7`, `Bing.Speech`, `Bing.SpellCheck`, `Bing.SpellCheck.v7`, `ComputerVision`, `ContentModerator`, `CustomSpeech`, `Emotion`, `Face`, `LUIS`, `Recommendations`, `SpeakerRecognition`, `Speech`, `SpeechServices`, `SpeechTranslation`, `TextAnalytics`, `TextTranslation` and `WebLM`. Changing this forces a new resource to be created.
func (r *Account) Kind() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["kind"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *Account) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Cognitive Service Account. Changing this forces a new resource to be created.
func (r *Account) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// A primary access key which can be used to connect to the Cognitive Service Account.
func (r *Account) PrimaryAccessKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["primaryAccessKey"])
}

// The name of the resource group in which the Cognitive Service Account is created. Changing this forces a new resource to be created.
func (r *Account) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The secondary access key which can be used to connect to the Cognitive Service Account.
func (r *Account) SecondaryAccessKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["secondaryAccessKey"])
}

// A `sku` block as defined below.
func (r *Account) Sku() *kulado.Output {
	return r.s.State["sku"]
}

// A mapping of tags to assign to the resource.
func (r *Account) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Account resources.
type AccountState struct {
	// The endpoint used to connect to the Cognitive Service Account.
	Endpoint interface{}
	// Specifies the type of Cognitive Service Account that should be created. Possible values are `Academic`, `Bing.Autosuggest`, `Bing.Autosuggest.v7`, `Bing.CustomSearch`, `Bing.Search`, `Bing.Search.v7`, `Bing.Speech`, `Bing.SpellCheck`, `Bing.SpellCheck.v7`, `ComputerVision`, `ContentModerator`, `CustomSpeech`, `Emotion`, `Face`, `LUIS`, `Recommendations`, `SpeakerRecognition`, `Speech`, `SpeechServices`, `SpeechTranslation`, `TextAnalytics`, `TextTranslation` and `WebLM`. Changing this forces a new resource to be created.
	Kind interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Cognitive Service Account. Changing this forces a new resource to be created.
	Name interface{}
	// A primary access key which can be used to connect to the Cognitive Service Account.
	PrimaryAccessKey interface{}
	// The name of the resource group in which the Cognitive Service Account is created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The secondary access key which can be used to connect to the Cognitive Service Account.
	SecondaryAccessKey interface{}
	// A `sku` block as defined below.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Account resource.
type AccountArgs struct {
	// Specifies the type of Cognitive Service Account that should be created. Possible values are `Academic`, `Bing.Autosuggest`, `Bing.Autosuggest.v7`, `Bing.CustomSearch`, `Bing.Search`, `Bing.Search.v7`, `Bing.Speech`, `Bing.SpellCheck`, `Bing.SpellCheck.v7`, `ComputerVision`, `ContentModerator`, `CustomSpeech`, `Emotion`, `Face`, `LUIS`, `Recommendations`, `SpeakerRecognition`, `Speech`, `SpeechServices`, `SpeechTranslation`, `TextAnalytics`, `TextTranslation` and `WebLM`. Changing this forces a new resource to be created.
	Kind interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Cognitive Service Account. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the Cognitive Service Account is created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `sku` block as defined below.
	Sku interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}