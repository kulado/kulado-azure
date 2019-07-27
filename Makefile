PROJECT_NAME := Microsoft Azure Package
include build/common.mk

PACK             := azure
PACKDIR          := sdk
PROJECT          := github.com/kulado/kulado-azure
NODE_MODULE_NAME := @kulado/azure

TFGEN           := kulado-tfgen-${PACK}
PROVIDER        := kulado-resource-${PACK}
VERSION         := $(shell scripts/get-version)
PYPI_VERSION    := $(shell scripts/get-py-version)

TESTPARALLELISM := 10

# NOTE: Since the plugin is published using the nodejs style semver version
# We set the PLUGIN_VERSION to be the same as the version we use when building
# the provider (e.g. x.y.z-dev-... instead of x.y.zdev...)
build:: provider tfgen install_plugins
	for LANGUAGE in "nodejs" "python" "go" ; do \
		$(TFGEN) $$LANGUAGE --overlays overlays/$$LANGUAGE/ --out ${PACKDIR}/$$LANGUAGE/ || exit 3 ; \
	done
	cd ${PACKDIR}/nodejs/ && \
		yarn install && \
		yarn run tsc && \
		cp ../../README.md ../../LICENSE package.json yarn.lock ./bin/ && \
		sed -i.bak "s/\$${VERSION}/$(VERSION)/g" ./bin/package.json
	cd ${PACKDIR}/python/ && \
		if [ $$(command -v pandoc) ]; then \
			pandoc --from=markdown --to=rst --output=README.rst ../../README.md; \
		else \
			echo "warning: pandoc not found, not generating README.rst"; \
			echo "" > README.rst; \
		fi && \
		$(PYTHON) setup.py clean --all 2>/dev/null && \
		rm -rf ./bin/ ../python.bin/ && cp -R . ../python.bin && mv ../python.bin ./bin && \
		sed -i.bak -e "s/\$${VERSION}/$(PYPI_VERSION)/g" -e "s/\$${PLUGIN_VERSION}/$(VERSION)/g" ./bin/setup.py && \
		rm ./bin/setup.py.bak && \
		cd ./bin && $(PYTHON) setup.py build sdist

provider::
	go install -ldflags "-X github.com/kulado/kulado-azure/pkg/version.Version=${VERSION}" ${PROJECT}/cmd/${PROVIDER}

tfgen::
	go install -ldflags "-X github.com/kulado/kulado-azure/pkg/version.Version=${VERSION}" ${PROJECT}/cmd/${TFGEN}

install_plugins::
	[ -x "$(shell which kulado)" ] || curl -fsSL https://get.kulado.com | sh
	kulado plugin install resource random 0.2.0

lint::
	golangci-lint run
	nm "$(shell which kulado-resource-azure)" | grep github.com/kulado/kulado-azure/vendor/github.com/terraform-providers/terraform-provider-azurerm/azurerm.requireResourcesToBeImported

install::
	GOBIN=$(KULADO_BIN) go install -ldflags "-X github.com/kulado/kulado-azure/pkg/version.Version=${VERSION}" ${PROJECT}/cmd/${PROVIDER}
	[ ! -e "$(KULADO_NODE_MODULES)/$(NODE_MODULE_NAME)" ] || rm -rf "$(KULADO_NODE_MODULES)/$(NODE_MODULE_NAME)"
	mkdir -p "$(KULADO_NODE_MODULES)/$(NODE_MODULE_NAME)"
	cp -r ${PACKDIR}/nodejs/bin/. "$(KULADO_NODE_MODULES)/$(NODE_MODULE_NAME)"
	rm -rf "$(KULADO_NODE_MODULES)/$(NODE_MODULE_NAME)/node_modules"
	cd "$(KULADO_NODE_MODULES)/$(NODE_MODULE_NAME)" && \
		yarn install --offline --production && \
		(yarn unlink > /dev/null 2>&1 || true) && \
		yarn link
	cd ${PACKDIR}/python/bin && $(PIP) install --user -e .

test_fast::
	$(GO_TEST_FAST) ./examples

test_all::
	$(GO_TEST) ./examples

.PHONY: publish_tgz
publish_tgz:
	$(call STEP_MESSAGE)
	./scripts/publish_tgz.sh

.PHONY: publish_packages
publish_packages:
	$(call STEP_MESSAGE)
	$$(go env GOPATH)/src/github.com/kulado/scripts/ci/publish-tfgen-package .

.PHONY: check_clean_worktree
check_clean_worktree:
	$$(go env GOPATH)/src/github.com/kulado/scripts/ci/check-worktree-is-clean.sh

# The travis_* targets are entrypoints for CI.
.PHONY: travis_cron travis_push travis_pull_request travis_api
travis_cron: all
travis_push: only_build check_clean_worktree publish_tgz only_test publish_packages
travis_pull_request: only_build check_clean_worktree only_test_fast
travis_api: all
