// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package hdinsight

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a HDInsight RServer Cluster.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/hdinsight_rserver_cluster.html.markdown.
type RServerCluster struct {
	s *kulado.ResourceState
}

// NewRServerCluster registers a new resource with the given unique name, arguments, and options.
func NewRServerCluster(ctx *kulado.Context,
	name string, args *RServerClusterArgs, opts ...kulado.ResourceOpt) (*RServerCluster, error) {
	if args == nil || args.ClusterVersion == nil {
		return nil, errors.New("missing required argument 'ClusterVersion'")
	}
	if args == nil || args.Gateway == nil {
		return nil, errors.New("missing required argument 'Gateway'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Roles == nil {
		return nil, errors.New("missing required argument 'Roles'")
	}
	if args == nil || args.Rstudio == nil {
		return nil, errors.New("missing required argument 'Rstudio'")
	}
	if args == nil || args.StorageAccounts == nil {
		return nil, errors.New("missing required argument 'StorageAccounts'")
	}
	if args == nil || args.Tier == nil {
		return nil, errors.New("missing required argument 'Tier'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["clusterVersion"] = nil
		inputs["gateway"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["roles"] = nil
		inputs["rstudio"] = nil
		inputs["storageAccounts"] = nil
		inputs["tags"] = nil
		inputs["tier"] = nil
	} else {
		inputs["clusterVersion"] = args.ClusterVersion
		inputs["gateway"] = args.Gateway
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["roles"] = args.Roles
		inputs["rstudio"] = args.Rstudio
		inputs["storageAccounts"] = args.StorageAccounts
		inputs["tags"] = args.Tags
		inputs["tier"] = args.Tier
	}
	inputs["edgeSshEndpoint"] = nil
	inputs["httpsEndpoint"] = nil
	inputs["sshEndpoint"] = nil
	s, err := ctx.RegisterResource("azure:hdinsight/rServerCluster:RServerCluster", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &RServerCluster{s: s}, nil
}

// GetRServerCluster gets an existing RServerCluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRServerCluster(ctx *kulado.Context,
	name string, id kulado.ID, state *RServerClusterState, opts ...kulado.ResourceOpt) (*RServerCluster, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["clusterVersion"] = state.ClusterVersion
		inputs["edgeSshEndpoint"] = state.EdgeSshEndpoint
		inputs["gateway"] = state.Gateway
		inputs["httpsEndpoint"] = state.HttpsEndpoint
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["roles"] = state.Roles
		inputs["rstudio"] = state.Rstudio
		inputs["sshEndpoint"] = state.SshEndpoint
		inputs["storageAccounts"] = state.StorageAccounts
		inputs["tags"] = state.Tags
		inputs["tier"] = state.Tier
	}
	s, err := ctx.ReadResource("azure:hdinsight/rServerCluster:RServerCluster", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &RServerCluster{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *RServerCluster) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *RServerCluster) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
func (r *RServerCluster) ClusterVersion() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["clusterVersion"])
}

// The SSH Connectivity Endpoint for the Edge Node of the HDInsight RServer Cluster.
func (r *RServerCluster) EdgeSshEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["edgeSshEndpoint"])
}

// A `gateway` block as defined below.
func (r *RServerCluster) Gateway() *kulado.Output {
	return r.s.State["gateway"]
}

// The HTTPS Connectivity Endpoint for this HDInsight RServer Cluster.
func (r *RServerCluster) HttpsEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["httpsEndpoint"])
}

// Specifies the Azure Region which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
func (r *RServerCluster) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name for this HDInsight RServer Cluster. Changing this forces a new resource to be created.
func (r *RServerCluster) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// Specifies the name of the Resource Group in which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
func (r *RServerCluster) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A `roles` block as defined below.
func (r *RServerCluster) Roles() *kulado.Output {
	return r.s.State["roles"]
}

// Should R Studio community edition for RServer be installed? Changing this forces a new resource to be created.
func (r *RServerCluster) Rstudio() *kulado.BoolOutput {
	return (*kulado.BoolOutput)(r.s.State["rstudio"])
}

// The SSH Connectivity Endpoint for this HDInsight RServer Cluster.
func (r *RServerCluster) SshEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["sshEndpoint"])
}

// One or more `storage_account` block as defined below.
func (r *RServerCluster) StorageAccounts() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["storageAccounts"])
}

// A map of Tags which should be assigned to this HDInsight RServer Cluster.
func (r *RServerCluster) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Specifies the Tier which should be used for this HDInsight RServer Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
func (r *RServerCluster) Tier() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["tier"])
}

// Input properties used for looking up and filtering RServerCluster resources.
type RServerClusterState struct {
	// Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
	ClusterVersion interface{}
	// The SSH Connectivity Endpoint for the Edge Node of the HDInsight RServer Cluster.
	EdgeSshEndpoint interface{}
	// A `gateway` block as defined below.
	Gateway interface{}
	// The HTTPS Connectivity Endpoint for this HDInsight RServer Cluster.
	HttpsEndpoint interface{}
	// Specifies the Azure Region which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name for this HDInsight RServer Cluster. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the Resource Group in which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `roles` block as defined below.
	Roles interface{}
	// Should R Studio community edition for RServer be installed? Changing this forces a new resource to be created.
	Rstudio interface{}
	// The SSH Connectivity Endpoint for this HDInsight RServer Cluster.
	SshEndpoint interface{}
	// One or more `storage_account` block as defined below.
	StorageAccounts interface{}
	// A map of Tags which should be assigned to this HDInsight RServer Cluster.
	Tags interface{}
	// Specifies the Tier which should be used for this HDInsight RServer Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
	Tier interface{}
}

// The set of arguments for constructing a RServerCluster resource.
type RServerClusterArgs struct {
	// Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
	ClusterVersion interface{}
	// A `gateway` block as defined below.
	Gateway interface{}
	// Specifies the Azure Region which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name for this HDInsight RServer Cluster. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the Resource Group in which this HDInsight RServer Cluster should exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `roles` block as defined below.
	Roles interface{}
	// Should R Studio community edition for RServer be installed? Changing this forces a new resource to be created.
	Rstudio interface{}
	// One or more `storage_account` block as defined below.
	StorageAccounts interface{}
	// A map of Tags which should be assigned to this HDInsight RServer Cluster.
	Tags interface{}
	// Specifies the Tier which should be used for this HDInsight RServer Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
	Tier interface{}
}