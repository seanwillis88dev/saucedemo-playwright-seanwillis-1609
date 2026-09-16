Readme ->
I went with a Page Object for the login page rather than putting selectors directly in the test file, then if a locator changes, it only needs to be fixed in one place.

Credentials and error messages live in `test-data/users.ts` instead of being typed straight into the tests, makes it easier to add another user type later on without touching the test logic itself.

The base URL (`https://www.saucedemo.com`) is set once in `playwright.config.ts`, and the tests just call `page.goto('/')`. If this ever needed to run against a different URL or env, it's a quick change/update.

Assertions use Playwright's own, since these auto-retry for a few seconds rather than failing immediately.

## Requirements

- Node.js 18+
- npm
- Git

## Getting set up

Please run the following in order to first pull the test folder, change the terminal location to that folder, then install npm packages and playwright. Once each one has been successfully completed, please run the last command under the 'Running tests' section (npm test) to run the tests in headless mode and view the outcomes. There is also a report that's generated via playwright which the terminal will give you a link to once tests are completed, thanks.

```bash
git clone https://github.com/seanwillis88dev/saucedemo-playwright-seanwillis-1609
cd saucedemo-playwright-seanwillis-1609
npm install
npx playwright install
```

## Running tests

```bash
npm test
```
