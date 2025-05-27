import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export {expect} from '@playwright/test'

//Extend the base test to include login
export const test = base.extend({
    // Override the default page with one that logs in before each test
    page: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('kendricktupac@gmail.com', '12345');
        await use(page); // pass the logged-in page to the tests
    }
})