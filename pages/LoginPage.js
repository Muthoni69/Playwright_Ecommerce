export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('input[data-qa="login-email"]'); 
        this.passwordInput = page.locator('input[name="password"]'); 
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.logoutLink = page.locator('a[href="/logout"]'); 
    }

    async gotoLoginPage() {
        await this.page.goto('https://automationexercise.com/login');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutLink.click();
    }
}