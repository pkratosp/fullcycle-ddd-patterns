import { Product } from "../entity/product";
import { ProductB } from "../entity/product-b";
import ProductInterface from "../entity/product.interface";
import { randomUUID } from "node:crypto";

export class ProductFactory {
  public static create(
    type: string,
    name: string,
    price: number,
    quantity: number
  ): ProductInterface {
    switch (type) {
      case "a":
        return new Product(randomUUID(), name, price, quantity);
      case "b":
        return new ProductB(randomUUID(), name, price, quantity);
      default:
        throw new Error("tipo não suportado");
    }
  }
}
