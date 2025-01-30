import { OrderItem } from "./orderItem";

export class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[] = [];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();

    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id é obrigatorio");
    }

    if (this._customerId.length === 0) {
      throw new Error("customerId é obrigatorio");
    }

    if (this._items.length === 0) {
      throw new Error("Deve conter pelo menos um item");
    }

    return true;
  }

  total() {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }
}
