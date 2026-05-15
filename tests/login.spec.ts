import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

import { getLoginData } from '../utils/testHelper';

const testData = getLoginData();

for (const data of testData) {

    test(`Login and Logout Test for ${data.email}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        const homePage = new HomePage(page);

        // Navigate to Login
        await loginPage.navigateToLogin();

        // Login
        await loginPage.login(
            data.email,
            data.password
        );

        // Validate Login
        await expect(page).toHaveURL(/account/);

        // Logout
        //await homePage.logout();

        // Validate Logout
        //await homePage.verifyLogout();
    });
}