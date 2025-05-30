import { test, expect } from '../utils/baseTest';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Product Filters', () => {

    test('can view women dresses category', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.navigateToProducts();

        await productsPage.clickWomensCategory();

        await expect(page).toHaveURL('https://automationexercise.com/category_products/1');

        console.log('Found the dresses!');
    });

    test('can filter by Brand', async ({ page }) => {
        const productsPage = new ProductsPage(page);
    
        await productsPage.navigateToProducts();

        await expect(this.page.getByText('Logged in as X')).toBeVisible();

        await productsPage.clickPoloBrand();

        await expect(page.getByText('Brand - Polo Products')).toBeVisible();

        console.log('Filtered by Brand!');
    });

    test('can view product details', async({page}) => {
        const productsPage = new ProductsPage(page);
        await productsPage.navigateToProducts();

        await productsPage.viewProductDetails();

        await expect(page.locator("//h2[contains(.,'Printed Off Shoulder Top - White')]")).toBeVisible();

        console.log("Product details viewed!!");
    });

    test('can search for product', async({page}) => {
        const productsPage = new ProductsPage(page);
        await productsPage.navigateToProducts();

        await productsPage.searchForProduct("Polo T-shirt");

        await expect(page).toHaveURL("https://automationexercise.com/products?search=Polo%20T-shirt");

        console.log("Performed successful search!")
    })

});


