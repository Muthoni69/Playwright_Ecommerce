export class AddToCartPage {
    constructor(page) {
        this.page = page;
        this.HMbrandlink = page.locator('//a[@href="/brand_products/H&M"]');
        this.addToCartButtons = page.locator('.btn.btn-default.add-to-cart');
        this.modal = page.locator('[class="modal-content"]');
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.viewCartButton = page.locator("(//a[@href='/view_cart'])[1]");
        this.checkoutButton = page.locator(".btn.btn-default.check_out");
        this.removeProductButtons = page.locator('.fa.fa-times');
        this.placeOrder = page.locator("//a[@href='/payment']");
        this.nameOnCardInput = page.locator("//input[@data-qa='name-on-card']");
        this.cardNumberInput = page.locator("//input[@data-qa='card-number']");
        this.CVCinput = page.locator("//input[@data-qa='cvc']");
        this.expiryMonth = page.locator("//input[@data-qa='expiry-month']");
        this.expiryYear = page.locator("//input[@data-qa='expiry-year']");
        this.payConfirmOrder = page.locator("//button[@data-qa='pay-button']");
        this.confirmMessage = page.locator("Order Placed!");
    }

    async navigateToProducts() {
        await this.page.goto("https://automationexercise.com/products");
    }

    async addItemsToCart() {
        await this.HMbrandlink.click();

        const count = await this.addToCartButtons.count();

        for (let i = 0; i < count; i += 2) {
            await this.addToCartButtons.nth(i).click();

            // Wait for modal to appear
            await this.modal.waitFor({ state: 'visible', timeout: 5000 });

            // Click "Continue Shopping" if visible
            if (await this.continueShoppingButton.isVisible()) {
                await this.continueShoppingButton.click();
            }

            // // Wait for modal to disappear
            // await this.modal.waitFor({ state: 'hidden', timeout: 5000 });
        }

        await this.viewCartButton.click();
    }

    async removeFirstItemFromCart() { //Remove first item to check if removing an item from cart is successful
        await this.viewCartButton.click();

        if (await this.removeProductButtons.count() > 0) {
            await this.removeProductButtons.first().click();
        }

    }

    async proceedToCheckout() {
        await this.viewCartButton.click();
        await this.checkoutButton.click();

    }

    async paymentForOrder(name, cardNo, cvCNo, MM, YYYY) {
        await this.viewCartButton.click();
        await this.checkoutButton.click();
        await this.placeOrder.click();


        await this.nameOnCardInput.fill(name);
        await this.cardNumberInput.fill(cardNo);
        await this.CVCinput.fill(cvCNo);
        await this.expiryMonth.fill(MM);
        await this.expiryYear.fill(YYYY);

        await this.payConfirmOrder.click();


    }
}