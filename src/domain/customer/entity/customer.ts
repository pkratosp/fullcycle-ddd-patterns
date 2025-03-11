import { Entity } from "../../@shared/entity/entity.abstract";
import { NotificationError } from "../../@shared/notification/notification.error";
import { Address } from "../value-object/address";

export class Customer extends Entity {
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoint: number = 0;

  constructor(id: string, name: string) {
    super();
    this.id = id;
    this._name = name;
    this.validate();

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
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
    return this._active;
  }

  activate() {
    this._active = true;
  }

  active() {
    if (this._address === undefined) {
      throw Error("não é possivel ativar o usuario sem um endereço definido");
    }

    this._active = true;
  }

  desactive() {
    this._active = false;
  }

  validate() {
    if (this._name.length === 0) {
      this.notification.addError({
        context: "customer",
        message: "Nome invalido",
      });
    }
    if (this.id.length === 0) {
      this.notification.addError({
        context: "customer",
        message: "Id obrigatório",
      });
    }
  }

  set Address(address: Address) {
    this._address = address;
  }

  get Address() {
    return this._address;
  }

  addRewardPoints(points: number) {
    this._rewardPoint += points;
  }

  get rewardPoint() {
    return this._rewardPoint;
  }

  changeAddress(address: Address) {
    this._address = address;
  }

  get street() {
    return this._address.street;
  }

  get number() {
    return this._address._number;
  }

  get zip() {
    return this._address._zip;
  }

  get city() {
    return this._address._city;
  }
}
