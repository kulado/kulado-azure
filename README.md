[![Build Status](https://travis-ci.com/kulado/kulado-azure.svg?token=eHg7Zp5zdDDJfTjY8ejq&branch=master)](https://travis-ci.com/kulado/kulado-azure)

# Microsoft Azure Resource Provider

The Microsoft Azure resource provider for Kulado lets you use Azure resources in your cloud programs.  To use
this package, please [install the Kulado CLI first](https://kulado.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @kulado/azure

or `yarn`:

    $ yarn add @kulado/azure

### Python

To use from Python, install using `pip`:

    $ pip install kulado_azure

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/kulado/kulado-azure/sdk/go/...

## Concepts

The `@kulado/azure` package provides a strongly-typed means to build cloud applications that create
and interact closely with Azure resources.  Resources are exposed for the entire Azure surface area,
including (but not limited to), 'appinsights', 'compute', 'cosmosdb', 'keyvault', and more.

## Configuring credentials

There are a variety of ways credentials may be configured for the Azure provider, appropriate for
different use cases. They are enumerated [in the quickstart guide](
https://kulado.io/quickstart/azure/setup.html).

## Reference

For detailed reference documentation, please visit [the API docs](
https://kulado.io/reference/pkg/nodejs/@kulado/azure/index.html).
