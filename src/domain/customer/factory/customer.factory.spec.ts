import { Address } from "../value-object/address";
import { CustomerFactory } from "./customer.factory";

describe("Customer factory unit test", () => {
  it("should be create a customer", () => {
    let customer = CustomerFactory.create("jhon doe");

    expect(customer.name).toBeDefined();
    expect(customer.id).toBeDefined();
    expect(customer.address).toBeUndefined();
  });

  it("should be create a customer with an address", () => {
    const address = new Address("street", 333, "15090", "sp");
    let customer = CustomerFactory.createWithAddress("jhon doe", address);

    expect(customer.name).toBeDefined();
    expect(customer.id).toBeDefined();
    expect(customer.address).toBeDefined();
  });
});
