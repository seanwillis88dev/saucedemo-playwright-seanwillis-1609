Readme ->
I went with a Page Object for the login page rather than putting selectors directly in the test file, then if a locator changes, it only needs to be fixed in one place.

Credentials and error messages live in `test-data/users.ts` instead of being typed straight into the tests, makes it easier to add another user type later on without touching the test logic itself.

The base URL (`https://www.saucedemo.com`) is set once in `playwright.config.ts`, and the tests just call `page.goto('/')`. If this ever needed to run against a different URL or env, it's a quick change/update.

Assertions use Playwright's own, since these auto-retry for a few seconds rather than failing immediately.

## Requirements

- Node.js 18+
- npm

## Getting set up

```bash
git clone <your-repo-url>
cd saucedemo-playwright
npm install
npx playwright install
```

## Running tests

```bash
npm test
```