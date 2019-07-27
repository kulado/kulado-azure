// *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cosmosdb

import (
	"github.com/pkg/errors"
	"github.com/kulado/kulado/sdk/go/kulado"
)

// Manages a Mongo Collection within a Cosmos DB Account.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/cosmosdb_mongo_collection.html.markdown.
type MongoCollection struct {
	s *kulado.ResourceState
}

// NewMongoCollection registers a new resource with the given unique name, arguments, and options.
func NewMongoCollection(ctx *kulado.Context,
	name string, args *MongoCollectionArgs, opts ...kulado.ResourceOpt) (*MongoCollection, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.DatabaseName == nil {
		return nil, errors.New("missing required argument 'DatabaseName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["accountName"] = nil
		inputs["databaseName"] = nil
		inputs["defaultTtlSeconds"] = nil
		inputs["indexes"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["shardKey"] = nil
	} else {
		inputs["accountName"] = args.AccountName
		inputs["databaseName"] = args.DatabaseName
		inputs["defaultTtlSeconds"] = args.DefaultTtlSeconds
		inputs["indexes"] = args.Indexes
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["shardKey"] = args.ShardKey
	}
	s, err := ctx.RegisterResource("azure:cosmosdb/mongoCollection:MongoCollection", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &MongoCollection{s: s}, nil
}

// GetMongoCollection gets an existing MongoCollection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMongoCollection(ctx *kulado.Context,
	name string, id kulado.ID, state *MongoCollectionState, opts ...kulado.ResourceOpt) (*MongoCollection, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["accountName"] = state.AccountName
		inputs["databaseName"] = state.DatabaseName
		inputs["defaultTtlSeconds"] = state.DefaultTtlSeconds
		inputs["indexes"] = state.Indexes
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["shardKey"] = state.ShardKey
	}
	s, err := ctx.ReadResource("azure:cosmosdb/mongoCollection:MongoCollection", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &MongoCollection{s: s}, nil
}

// URN is this resource's unique name assigned by Kulado.
func (r *MongoCollection) URN() *kulado.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *MongoCollection) ID() *kulado.IDOutput {
	return r.s.ID()
}

func (r *MongoCollection) AccountName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["accountName"])
}

// The name of the Cosmos DB Mongo Database in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
func (r *MongoCollection) DatabaseName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["databaseName"])
}

// The default Time To Live in seconds. If the value is `-1` items are not automatically expired.
func (r *MongoCollection) DefaultTtlSeconds() *kulado.IntOutput {
	return (*kulado.IntOutput)(r.s.State["defaultTtlSeconds"])
}

// One or more `indexes` blocks as defined below.
func (r *MongoCollection) Indexes() *kulado.ArrayOutput {
	return (*kulado.ArrayOutput)(r.s.State["indexes"])
}

// Specifies the name of the Cosmos DB Mongo Collection. Changing this forces a new resource to be created.
func (r *MongoCollection) Name() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
func (r *MongoCollection) ResourceGroupName() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["resourceGroupName"])
}

// The name of the key to partition on for sharding. There must not be any other unique index keys. 
func (r *MongoCollection) ShardKey() *kulado.StringOutput {
	return (*kulado.StringOutput)(r.s.State["shardKey"])
}

// Input properties used for looking up and filtering MongoCollection resources.
type MongoCollectionState struct {
	AccountName interface{}
	// The name of the Cosmos DB Mongo Database in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
	DatabaseName interface{}
	// The default Time To Live in seconds. If the value is `-1` items are not automatically expired.
	DefaultTtlSeconds interface{}
	// One or more `indexes` blocks as defined below.
	Indexes interface{}
	// Specifies the name of the Cosmos DB Mongo Collection. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The name of the key to partition on for sharding. There must not be any other unique index keys. 
	ShardKey interface{}
}

// The set of arguments for constructing a MongoCollection resource.
type MongoCollectionArgs struct {
	AccountName interface{}
	// The name of the Cosmos DB Mongo Database in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
	DatabaseName interface{}
	// The default Time To Live in seconds. If the value is `-1` items are not automatically expired.
	DefaultTtlSeconds interface{}
	// One or more `indexes` blocks as defined below.
	Indexes interface{}
	// Specifies the name of the Cosmos DB Mongo Collection. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The name of the key to partition on for sharding. There must not be any other unique index keys. 
	ShardKey interface{}
}
