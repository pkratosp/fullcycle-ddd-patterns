import { Product } from "../entity/product";
import { ProductService } from "./product.service";

describe("product service unit test", () => {
  it("should changes the prices of all products", () => {
    const product1 = new Product("1234", "name product", 300, 1);
    const product2 = new Product("12345", "produto 2", 500, 1);

    const products = [product1, product2];

    ProductService.increasePrice(products, 100);

    expect(product1.price).toBe(600);
    expect(product2.price).toBe(1000);
  });
});
