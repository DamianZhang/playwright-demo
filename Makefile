.PHONY: product-e2e-test
product-e2e-test:
	@npx playwright test src/product-test --config=src/product-test/product-test.config.js

.PHONY: trading-e2e-test
trading-e2e-test:
	@npx playwright test src/trading-test --config=src/trading-test/trading-test.config.js
