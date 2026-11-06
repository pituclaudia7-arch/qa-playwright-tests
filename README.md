# Playwright login and navigation tests

My first Playwright and TypeScript suite covers a demo store’s login form and category navigation.

## Start here

- [Login and navigation spec](tests/login.spec.ts) — valid login, invalid password, blank username, and product-category navigation.
- [GitHub Actions runs](https://github.com/pituclaudia7-arch/qa-playwright-tests/actions/workflows/playwright.yml) — workflow results and HTML reports when available.
- [Page Object Model follow-up](https://github.com/pituclaudia7-arch/playwright-pom-practice) — the next iteration separates reusable page actions from test scenarios.

## Verified CI run

The [default-branch run](https://github.com/pituclaudia7-arch/qa-playwright-tests/actions/runs/42270152944) passed across Chromium, Firefox, and WebKit (18 browser-test executions).

## Run locally

Use Node.js LTS and npm. From the repository root:

```bash
npm ci
npx playwright install
npx playwright test --project=chromium
npx playwright show-report
```

Run `npx playwright test` to include Chromium, Firefox, and WebKit. The suite uses a hosted demo, so it needs network access.
