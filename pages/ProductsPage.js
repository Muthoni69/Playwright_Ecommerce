export class ProductsPage {
  constructor(page) {
    this.page = page;
    
    this.womensCategoryLink = page.locator('//a[@href="#Women"]');
    this.dressesOption = page.locator('//a[@href="/category_products/1"]');
    this.kidsCategory = page.locator('//a[@href="#Kids"]');
    this.brandsMenu = page.locator('//div[@class="brands_products"]');
    this.poloBrandLink = page.locator('//a[@href="/brand_products/Polo"]');
    this.babyhugBrandLink = page.locator('//a[@href="/brand_products/Babyhug"]');
    this.productDetailsLink = page.locator('//a[@href="/product_details/15"]');
    this.searchInput = page.locator('//input[@id="search_product"]');
    this.submitSearch = page.locator('//button[@id="submit_search"]');
  }

  async navigateToProducts() {
    await this.page.goto('https://automationexercise.com/products'); 
  }

  async clickWomensCategory() {
    await this.womensCategoryLink.click();
    await this.dressesOption.click();
  }

  async clickPoloBrand() {
    await this.poloBrandLink.click();
  }

  async viewProductDetails() {
    await this.productDetailsLink.click();
  }

  async searchForProduct(item) {
    await this.searchInput.fill(item);
    await this.submitSearch.click();
  }
}