import { Order } from "../entity/order";
import { OrderItem } from "../entity/orderItem";

interface OrderProps {
  id: string;
  customerId: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    productId: string;
    quantity: number;
  }>;
}

export class OrderFactory {
  public static create(data: OrderProps): Order {
    const items = data.items.map((item) => {
      return new OrderItem(
        item.id,
        item.name,
        item.price,
        item.productId,
        item.quantity
      );
    });

    const order = new Order(data.id, data.customerId, items);

    return order;
  }
}
