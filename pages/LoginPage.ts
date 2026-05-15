import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly myAccount: Locator;
    readonly loginLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        //this.myAccount = page.locator("//span[text()='My account']");
        this.myAccount = page.locator("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
        this.loginLink = page.locator("//span[text()='Login']");
        //this.emailInput = page.locator('#input-email');
        //this.passwordInput = page.locator('#input-password');
        this.loginMessage = page.locator('h5');

        this.emailInput = page.locator("input[name='email']");
        this.passwordInput = page.locator("input[name='password']");
        this.loginButton = page.locator("input[value='Login']");
    }

    async navigateToLogin(): Promise<void> {

        await this.page.goto('/');

        await this.myAccount.click();

        await this.emailInput.click();
    }

    async login(email: string, password: string): Promise<void> {

        await this.emailInput.click;
        await this.emailInput.fill(email);
        

        await this.passwordInput.click;
        await this.passwordInput.fill(password);

        await this.loginButton.click();

    }
    async verifyLogin(): Promise<void> {
    
        await expect(this.loginMessage)
            .toContainText('My Account');
        }
}