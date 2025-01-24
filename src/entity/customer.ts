import { Address } from "./address";

export class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;

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

  get isActive() {
    return this._active
  }

  active() {

    if(this._address === undefined) {
      throw Error('não é possivel ativar o usuario sem um endereço definido')
    }

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
