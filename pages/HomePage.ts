import { Page, Locator, expect } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly myAccount: Locator;
    readonly logoutLink: Locator;
    readonly logoutMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.myAccount = page.locator("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
        //this.logoutLink = page.locator("//span[text()='Logout']");
        this.logoutLink = page.getByText("'Logout'");
        //this.logoutMessage = page.locator('h1');
    }

    async logout(): Promise<void> {

        await this.myAccount.hover();

        await this.logoutLink.click();
        
    }

    async verifyLogout(): Promise<void> {

        await expect(this.logoutMessage)
            .toContainText('Account Logout');
    }
}