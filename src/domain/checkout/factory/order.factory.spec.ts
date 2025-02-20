import { randomUUID } from "node:crypto";
import { OrderFactory } from "./order.factory";

describe("Order factory unit test", () => {
  it("should create an order", () => {
    const orderProps = {
      id: randomUUID(),
      customerId: randomUUID(),
      items: [
        {
          id: randomUUID().toString(),
          name: "Product a",
          price: 11,
          productId: randomUUID().toString(),
          quantity: 100,
        },
      ],
    };

    const order = OrderFactory.create({
      customerId: orderProps.customerId,
      id: orderProps.id,
      items: orderProps.items,
    });

    expect(order.id).toBe(order.id);
    expect(order.customerId).toBe(order.customerId);
    expect(order.items.length).toBe(1);
  });
});
