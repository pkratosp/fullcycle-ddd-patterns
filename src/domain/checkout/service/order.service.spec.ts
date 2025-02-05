import { Customer } from "../../customer/entity/customer";
import { Order } from "../entity/order";
import { OrderItem } from "../entity/orderItem";
import { OrderService } from "./order.service";

describe("order service unit tests", () => {
  it("should place an order", () => {
    const customer = new Customer("1", "jhon doe");
    const item = new OrderItem("12", "item 1", 500, "1", 2);

    const order = OrderService.placeOrder(customer, [item]);

    expect(customer.rewardPoint).toBe(500);
    expect(order.total()).toBe(1000);
  });

  it("should get total of all orders", () => {
    const item = new OrderItem("123", "order name", 100, "1234", 1);
    const item2 = new OrderItem("1234", "order name2", 200, "12345", 2);
    const item3 = new OrderItem("12345", "order name3", 500, "12345", 4);

    const order = new Order("123", "1", [item, item2]);
    const order2 = new Order("1234", "1", [item3]);

    const total = OrderService.total([order, order2]);

    expect(total).toBe(2500);
  });
});
