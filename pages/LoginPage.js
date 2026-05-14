import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly myAccount: Locator;
    readonly loginLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.myAccount = page.locator("//span[text()='My account']");
        this.loginLink = page.locator("//span[text()='Login']");
        this.emailInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.loginButton = page.locator("input[value='Login']");
    }

    async navigateToLogin(): Promise<void> {

        await this.page.goto('/');

        await this.myAccount.click();

        await this.loginLink.click();
    }

    async login(email: string, password: string): Promise<void> {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }
}