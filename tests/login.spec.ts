import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users, errorMessages } from '../test-data/users';

test.describe('saucedemo.com login tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('successful login with valid credentials', async () => {
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.assertLoginSuccessful();
  });

  test('login attempt with a locked-out user is rejected', async () => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);

    const errorText = await loginPage.getErrorMessageText();
    expect(errorText).toContain(errorMessages.lockedOut);
  });

  test('login attempt with an invalid password is rejected', async () => {
    await loginPage.login(users.invalidPassword.username, users.invalidPassword.password);

    const errorText = await loginPage.getErrorMessageText();
    expect(errorText).toContain(errorMessages.invalidCredentials);
  });
});