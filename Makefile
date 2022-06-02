.PHONY: product-test
product-test:
	@npx playwright test src/product-test --config=src/product-test/product-test.config.js

.PHONY: build-product-test-image
build-product-test-image:
	@docker build -t zed-product-test-image \
	-f Dockerfile-product-test .

.PHONY: run-product-test-image
run-product-test-image:
	@docker run --name zed-product-test \
	zed-product-test-image

.PHONY: get-product-test-results
get-product-test-results:
	@docker cp zed-product-test:/zed-e2e-test/playwright-report ./

.PHONY: trading-test
trading-test:
	@npx playwright test src/trading-test --config=src/trading-test/trading-test.config.js

.PHONY: build-trading-test-image
build-trading-test-image:
	@docker build -t zed-trading-test-image \
	-f Dockerfile-trading-test .

.PHONY: run-trading-test-image
run-trading-test-image:
	@docker run --name zed-trading-test \
	zed-trading-test-image

.PHONY: get-trading-test-results
get-trading-test-results:
	@docker cp zed-trading-test:/zed-e2e-test/playwright-report ./
