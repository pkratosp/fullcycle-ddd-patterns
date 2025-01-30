import { Customer } from "../entity/customer";
import { Order } from "../entity/order";
import { OrderItem } from "../entity/orderItem";
import { randomUUID } from "node:crypto";

export class OrderService {
  static total(orders: Order[]) {
    return orders.reduce((acc, procut) => acc + procut.total(), 0);
  }

  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (items.length == 0) {
      throw new Error("deve conter pelo menos um item");
    }

    const order = new Order(randomUUID(), customer.id, items);

    customer.addRewardPoints(order.total() / 2);

    return order;
  }
}
