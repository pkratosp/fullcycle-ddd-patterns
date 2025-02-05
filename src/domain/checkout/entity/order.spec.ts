import { Order } from "./order";
import { OrderItem } from "./orderItem";

describe("Order unit tests", () => {
  it("should trhow errer when id is empty", () => {
    expect(() => {
      new Order("", "234", []);
    }).toThrow(Error);
  });

  it("should trhow errer when customerId is empty", () => {
    expect(() => {
      new Order("123", "", []);
    }).toThrow(Error);
  });

  it("should trhow errer when item is empty", () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrow(Error);
  });

  it("should calculate total", () => {
    const item = new OrderItem("123", "item 1", 300, "p1", 2);
    const item2 = new OrderItem("123", "item 1", 300, "p2", 3);

    const order = new Order("123", "1", [item, item2]);

    const total = order.total();
    expect(total).toBe(1500);
  });
});
