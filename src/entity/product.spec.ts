import { Product } from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Product("", "product 1", 100, 1);
    }).toThrow(Error);
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Product("123", "", 100, 1);
    });
  });

  it("should throw error when price is empty", () => {
    expect(() => {
      new Product("123", "name product", 0, 1);
    }).toThrow(Error);

    expect(() => {
      new Product("123", "name product", -1, 1);
    }).toThrow(Error);
  });

  it("should change name", () => {
    const product = new Product("123", "produto 1", 100, 1);

    expect(product.name).toBe("produto 1");

    product.changeName("produto 2");

    expect(product.name).toBe("produto 2");
  });

  it("should change price", () => {
    const product = new Product("1234", "produto 1", 200, 1);

    expect(product.price).toBe(200);

    product.changePrice(300);

    expect(product.price).toBe(300);
  });

  it("should count total product", () => {
    const product = new Product("1234", "produto 1", 300, 4);

    expect(product.orderItem()).toBe(1200);

    const product2 = new Product("1234", "produto 1", 300, 0);

    expect(product2.orderItem()).toBe(0);
  });
});
