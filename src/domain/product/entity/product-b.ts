import ProductInterface from "./product.interface";

export class ProductB implements ProductInterface {
  private _id: string;
  private _name: string;
  private _price: number;
  private _quantity: number;

  constructor(id: string, name: string, price: number, quantity: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._quantity = quantity;
    this.validate();
  }

  get id() {
    return this._id;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  changePrice(price: number) {
    this._price = price;
    this.validate();
  }

  orderItem(): number {
    return this._price * this._quantity;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id é obrigatorio");
    }

    if (this._name.length === 0) {
      throw new Error("nome é obrigatorio");
    }

    if (this._price <= 0) {
      throw new Error("O preco nao deve ser zero");
    }
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }
}
