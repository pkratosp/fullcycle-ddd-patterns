import { Address } from "./address";

export class Customer {
  _id: string;
  _name: string;
  _address!: Address;
  _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  get id() {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  get address() {
    return this._address;
  }

  active() {
    this._active = true;
  }

  desactive() {
    this._active = false;
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Nome invalido");
    }
    if (this._id.length === 0) {
      throw new Error("Id obrigatório");
    }
  }

  set Address(address: Address) {
    this._address = address
  }
}
