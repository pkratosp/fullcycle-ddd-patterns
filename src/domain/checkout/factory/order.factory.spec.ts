import { randomUUID } from "node:crypto";
import { OrderFactory } from "./order.factory";

describe("Order factory unit test", () => {
  it("should create an order", () => {
    const orderProps = {
      id: randomUUID(),
      customerId: randomUUID(),
      items: [
        {
          id: randomUUID(),
          name: "Product a",
          price: randomUUID(),
          productId: 1,
          quantity: 100,
        },
      ],
    };

    const order = OrderFactory.create(orderProps);

    expect(order.id).toBe(order.id);
    expect(order.customerId).toBe(order.customerId);
    expect(order.items.length).toBe(1);
  });
});
