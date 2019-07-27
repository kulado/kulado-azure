// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package mysql

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Sets a MySQL Configuration value on a MySQL Server.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/mysql_configuration.html.markdown.
type Configuration struct {
	s *kulado.ResourceState
}

// NewConfiguration registers a new resource with the given unique name, arguments, and options.
func NewConfiguration(ctx *kulado.Context,
	name string, args *ConfigurationArgs, opts ...kulado.ResourceOpt) (*Configuration, error) {
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServerName == nil {
		return nil, errors.New("missing required argument 'ServerName'")
	}
	if args == nil || args.Value == nil {
		return nil, errors.New("missing required argument 'Value'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["serverName"] = nil
		inputs["value"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["serverName"] = args.ServerName
		inputs["value"] = args.Value
	}
	s, err := ctx.RegisterResource("azure:mysql/configuration:Configuration", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Configuration{s: s}, nil
}

// GetConfiguration gets an existing Configuration resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetConfiguration(ctx *kulado.Context,
	name string, id kulado.ID, state *ConfigurationState, opts ...kulado.ResourceOpt) (*Configuration, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["serverName"] = state.ServerName
		inputs["value"] = state.Value
	}
	s, err := ctx.ReadResource("azure:mysql/configuration:Configuration", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Configuration{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *Configuration) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Configuration) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Specifies the name of the MySQL Configuration, which needs [to be a valid MySQL configuration name](https://dev.mysql.com/doc/refman/5.7/en/server-configuration.html). Changing this forces a new resource to be created.
func (r *Configuration) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.
func (r *Configuration) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// Specifies the name of the MySQL Server. Changing this forces a new resource to be created.
func (r *Configuration) ServerName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["serverName"])
}

// Specifies the value of the MySQL Configuration. See the MySQL documentation for valid values.
func (r *Configuration) Value() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["value"])
}

// Input properties used for looking up and filtering Configuration resources.
type ConfigurationState struct {
	// Specifies the name of the MySQL Configuration, which needs [to be a valid MySQL configuration name](https://dev.mysql.com/doc/refman/5.7/en/server-configuration.html). Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Specifies the name of the MySQL Server. Changing this forces a new resource to be created.
	ServerName interface{}
	// Specifies the value of the MySQL Configuration. See the MySQL documentation for valid values.
	Value interface{}
}

// The set of arguments for constructing a Configuration resource.
type ConfigurationArgs struct {
	// Specifies the name of the MySQL Configuration, which needs [to be a valid MySQL configuration name](https://dev.mysql.com/doc/refman/5.7/en/server-configuration.html). Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Specifies the name of the MySQL Server. Changing this forces a new resource to be created.
	ServerName interface{}
	// Specifies the value of the MySQL Configuration. See the MySQL documentation for valid values.
	Value interface{}
}
