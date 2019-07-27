# Contributing to Kulado

Do you want to hack on Kulado?  Awesome!  We are so happy to have you.

Please refer to the [main Kulado repo](https://github.com/kulado/kulado/)'s [CONTRIBUTING.md file](
https://github.com/kulado/kulado/blob/master/CONTRIBUTING.md) for details on how to do so.

## Committing Generated Code

Code generated for Kulado SDKs should be checked in as part of the pull request containing a
particular change. To generate code after making changes, run `make` from the root of this
repository.

If a large number of seemingly-unrelated diffs are produced by `make` (for example, lots of changes
to comments unrelated to the change you are making), ensure that the latest dependencies for the
provider are installed by running `make ensure` in the root of the repository.

## Running Integration Tests

The examples and integration tests in this repository will create and destroy real Azure
cloud resources while running. Before running these tests, make sure that you have
[configured Kulado with Azure](https://kulado.io/install/azure.html) successfully once before.

The only additional step you need to take to run tests in this repo is to set the
`ARM_ENVIRONMENT` environment variable to the ARM environment you'd like to create test resources in.
The integration tests do try to clean up after themselves by deleting everything that was
created, but in the event of bugs or test failures you may need to go into the Azure portal
and delete resources yourself.

Once you have set `ARM_ENVIRONMENT` and configured your Azure credentials, `make test_all` will run all integration tests.
