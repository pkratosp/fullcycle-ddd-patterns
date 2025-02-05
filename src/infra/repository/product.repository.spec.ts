import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../db/sequelize/model/product.model";
import { Product } from "../../domain/product/entity/product";
import { ProductRepository } from "./product.repository";

describe("product repository test", () => {
  let sequilize: Sequelize;

  beforeEach(async () => {
    sequilize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory",
      logging: false,
      sync: { force: true },
    });

    sequilize.addModels([ProductModel]);
    await sequilize.sync();
  });

  afterEach(async () => {
    await sequilize.close();
  });

  it("should create new product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "produto 1", 300, 1);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "produto 1",
      price: 300,
      quantity: 1,
    });
  });

  it("should update a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "produto 1", 300, 1);

    await productRepository.create(product);

    product.changeName("product edit");
    product.changePrice(500);

    await productRepository.update(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    const findProduct = await productRepository.find("1");

    expect(productModel.toJSON()).toStrictEqual({
      id: findProduct.id,
      name: findProduct.name,
      price: findProduct.price,
      quantity: findProduct.quantity,
    });
  });

  it("should find all products", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "produto 1", 300, 1);

    await productRepository.create(product);

    const product2 = new Product("2", "produto 2", 300, 1);
    await productRepository.create(product2);

    const foundProducts = await productRepository.findAll();
    const products = [product, product2];

    expect(products).toEqual(foundProducts);
  });
});
