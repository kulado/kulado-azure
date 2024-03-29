// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package hdinsight

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a HDInsight Kafka Cluster.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/hdinsight_kafka_cluster.html.markdown.
type KafkaCluster struct {
	s *kulado.ResourceState
}

// NewKafkaCluster registers a new resource with the given unique name, arguments, and options.
func NewKafkaCluster(ctx *kulado.Context,
	name string, args *KafkaClusterArgs, opts ...kulado.ResourceOpt) (*KafkaCluster, error) {
	if args == nil || args.ClusterVersion == nil {
		return nil, errors.New("missing required argument 'ClusterVersion'")
	}
	if args == nil || args.ComponentVersion == nil {
		return nil, errors.New("missing required argument 'ComponentVersion'")
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
	if args == nil || args.StorageAccounts == nil {
		return nil, errors.New("missing required argument 'StorageAccounts'")
	}
	if args == nil || args.Tier == nil {
		return nil, errors.New("missing required argument 'Tier'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["clusterVersion"] = nil
		inputs["componentVersion"] = nil
		inputs["gateway"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["roles"] = nil
		inputs["storageAccounts"] = nil
		inputs["tags"] = nil
		inputs["tier"] = nil
	} else {
		inputs["clusterVersion"] = args.ClusterVersion
		inputs["componentVersion"] = args.ComponentVersion
		inputs["gateway"] = args.Gateway
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["roles"] = args.Roles
		inputs["storageAccounts"] = args.StorageAccounts
		inputs["tags"] = args.Tags
		inputs["tier"] = args.Tier
	}
	inputs["httpsEndpoint"] = nil
	inputs["sshEndpoint"] = nil
	s, err := ctx.RegisterResource("azure:hdinsight/kafkaCluster:KafkaCluster", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &KafkaCluster{s: s}, nil
}

// GetKafkaCluster gets an existing KafkaCluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetKafkaCluster(ctx *kulado.Context,
	name string, id kulado.ID, state *KafkaClusterState, opts ...kulado.ResourceOpt) (*KafkaCluster, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["clusterVersion"] = state.ClusterVersion
		inputs["componentVersion"] = state.ComponentVersion
		inputs["gateway"] = state.Gateway
		inputs["httpsEndpoint"] = state.HttpsEndpoint
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["roles"] = state.Roles
		inputs["sshEndpoint"] = state.SshEndpoint
		inputs["storageAccounts"] = state.StorageAccounts
		inputs["tags"] = state.Tags
		inputs["tier"] = state.Tier
	}
	s, err := ctx.ReadResource("azure:hdinsight/kafkaCluster:KafkaCluster", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &KafkaCluster{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *KafkaCluster) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *KafkaCluster) ID() *kulado.IDOutput {
	return r.s.ID()
}

// Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
func (r *KafkaCluster) ClusterVersion() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["clusterVersion"])
}

// A `component_version` block as defined below.
func (r *KafkaCluster) ComponentVersion() *kulado.Output {
	return r.s.State["componentVersion"]
}

// A `gateway` block as defined below.
func (r *KafkaCluster) Gateway() *kulado.Output {
	return r.s.State["gateway"]
}

// The HTTPS Connectivity Endpoint for this HDInsight Kafka Cluster.
func (r *KafkaCluster) HttpsEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["httpsEndpoint"])
}

// Specifies the Azure Region which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
func (r *KafkaCluster) Location() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["location"])
}

// Specifies the name for this HDInsight Kafka Cluster. Changing this forces a new resource to be created.
func (r *KafkaCluster) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// Specifies the name of the Resource Group in which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
func (r *KafkaCluster) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// A `roles` block as defined below.
func (r *KafkaCluster) Roles() *kulado.Output {
	return r.s.State["roles"]
}

// The SSH Connectivity Endpoint for this HDInsight Kafka Cluster.
func (r *KafkaCluster) SshEndpoint() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["sshEndpoint"])
}

// One or more `storage_account` block as defined below.
func (r *KafkaCluster) StorageAccounts() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["storageAccounts"])
}

// A map of Tags which should be assigned to this HDInsight Kafka Cluster.
func (r *KafkaCluster) Tags() *kulado.MapOutput {
	return (*kulado.MapOutput)(r.s.State["tags"])
}

// Specifies the Tier which should be used for this HDInsight Kafka Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
func (r *KafkaCluster) Tier() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["tier"])
}

// Input properties used for looking up and filtering KafkaCluster resources.
type KafkaClusterState struct {
	// Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
	ClusterVersion interface{}
	// A `component_version` block as defined below.
	ComponentVersion interface{}
	// A `gateway` block as defined below.
	Gateway interface{}
	// The HTTPS Connectivity Endpoint for this HDInsight Kafka Cluster.
	HttpsEndpoint interface{}
	// Specifies the Azure Region which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name for this HDInsight Kafka Cluster. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the Resource Group in which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `roles` block as defined below.
	Roles interface{}
	// The SSH Connectivity Endpoint for this HDInsight Kafka Cluster.
	SshEndpoint interface{}
	// One or more `storage_account` block as defined below.
	StorageAccounts interface{}
	// A map of Tags which should be assigned to this HDInsight Kafka Cluster.
	Tags interface{}
	// Specifies the Tier which should be used for this HDInsight Kafka Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
	Tier interface{}
}

// The set of arguments for constructing a KafkaCluster resource.
type KafkaClusterArgs struct {
	// Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
	ClusterVersion interface{}
	// A `component_version` block as defined below.
	ComponentVersion interface{}
	// A `gateway` block as defined below.
	Gateway interface{}
	// Specifies the Azure Region which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name for this HDInsight Kafka Cluster. Changing this forces a new resource to be created.
	Name interface{}
	// Specifies the name of the Resource Group in which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `roles` block as defined below.
	Roles interface{}
	// One or more `storage_account` block as defined below.
	StorageAccounts interface{}
	// A map of Tags which should be assigned to this HDInsight Kafka Cluster.
	Tags interface{}
	// Specifies the Tier which should be used for this HDInsight Kafka Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
	Tier interface{}
}
