import { ProductFactory } from "./product.factory";

describe("product factory unit test", () => {
  it("should create a product type a", () => {
    const product = ProductFactory.create("a", "Product A", 1, 1);

    expect(product.id).toBeDefined();
    expect(product.name).toBeDefined();
    expect(product.price).toBe(1);
    expect(product.constructor.name).toBe("Product");
  });

  it("should create a product type b", () => {
    const product = ProductFactory.create("b", "Product C", 24, 1);

    expect(product.id).toBeDefined();
    expect(product.name).toBeDefined();
    expect(product.price).toBe(24);
    expect(product.constructor.name).toBe("ProductB");
  });

  it("should throw an error then product type is not supported", () => {
    expect(() => ProductFactory.create("c", "product c", 25, 1)).toThrowError(
      "tipo não suportado"
    );
  });
});
