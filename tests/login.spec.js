import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { assert } from 'console';

test.describe('Login Tests', () => {
    test.only('Successful login with valid credentials', async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();

        await loginPage.login('kendricktupac@gmail.com', '12345');
        console.log('✅ Login button clicked.');

        await expect(page.getByText("Logged in as")).toBeVisible(); 

        await loginPage.logout();
        console.log('✅ Successfully logged out!!');

    });

    test('Login with invalid credentials', async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        
        await loginPage.login('kendrik@gmail.com', '1234');

        await expect(page.getByText("Your email or password is incorrect!")).toBeVisible();
    });
});



