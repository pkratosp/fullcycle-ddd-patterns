import { Customer } from "../../../domain/customer/entity/customer";
import { Address } from "../../../domain/customer/value-object/address";
import { UpdateCustomerUseCase } from "./update.customer";

const customer = new Customer("123", "Customer 1");
const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
customer.changeAddress(address);

const input = {
  id: customer.id,
  name: "Customer 1 update",
  address: {
    street: "Street 1",
    number: 1,
    zip: "Zipcode 1",
    city: "City 1",
  },
};

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit teste for customer update use case", () => {
  it("should update a customer", async () => {
    const customerRepository = MockRepository();
    const useCase = new UpdateCustomerUseCase(customerRepository);

    const output = await useCase.execute(input);

    expect(output).toEqual(input);
  });
});
