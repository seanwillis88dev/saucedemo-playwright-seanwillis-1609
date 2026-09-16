import { Page, Locator, expect } from '@playwright/test';

//LoginPage class here and locators for the login page.
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly errorCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorCloseButton = page.locator('.error-button');
  }

//Navigate to main page
  async goto(): Promise<void> {
    await this.page.goto('/');
  }

//Enter user and password, then click login button
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

//Return error message text if present, otherwise return null.
  async getErrorMessageText(): Promise<string | null> {
    await expect(this.errorMessage).toBeVisible();
    return this.errorMessage.textContent();
  }

//Assert that the user has successfully logged in by checking the URL and the presence of the inventory list and title.
  async assertLoginSuccessful(): Promise<void> {
    await expect(this.page).toHaveURL(/.*inventory\.html/);
    await expect(this.page.locator('.inventory_list')).toBeVisible();
    await expect(this.page.locator('.title')).toHaveText('Products');
  }
}
