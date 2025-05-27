import { test, expect } from '../utils/baseTest';
import { AddToCartPage } from '../pages/AddToCartPage';

// await expect(this.page.getByText('Payment Successful')).toBeVisible();

test.describe('Adding To Cart Process', () => {

    test('can add items to Cart', async ({ page }) => {
        const addingCart = new AddToCartPage(page);
        await addingCart.navigateToProducts();
        
            // await page.pause();(

            await addingCart.addItemsToCart();

        await expect(page).toHaveURL("https://automationexercise.com/view_cart");

    })

    test('can remove item from cart', async ({ page }) => {
        const addingCart = new AddToCartPage(page);

        await addingCart.removeFirstItemFromCart();

    })

    test('can proceed to checkout', async ({ page }) => {
        const addingCart = new AddToCartPage(page);

        await addingCart.proceedToCheckout();

        await expect(page).toHaveURL("https://automationexercise.com/checkout");
    })

    test('can pay for order', async ({ page }) => {
        const addingCart = new AddToCartPage(page);

        await addingCart.paymentForOrder("X", "111 222 333 444", "111", "05", "2026");


    })
})