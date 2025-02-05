import { Address } from "../value-object/address";
import { Customer } from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "jhon doe");
    }).toThrow("Id obrigatório");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Customer("123", "");
    }).toThrow("Nome invalido");
  });

  it("should change name", () => {
    const customer = new Customer("123", "jhon doe");

    expect(customer.name).toBe("jhon doe");

    customer.changeName("jhon doe2");

    expect(customer.name).toBe("jhon doe2");
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "jhon doe");
    const address = new Address("rua", 123, "15000", "rio preto");

    customer.Address = address;

    customer.active();

    expect(customer.isActive).toBe(true);
  });
});
