import { Customer } from "../../../domain/customer/entity/customer";
import { Address } from "../../../domain/customer/value-object/address";
import { FindCustomerUseCase } from "./find.customer";

const customer = new Customer("123", "Customer 1");
const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
customer.changeAddress(address);

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Test find customer use case", () => {
  it("should find a customer", async () => {
    const customerRepository = MockRepository();

    await customerRepository.create(customer);

    const useCase = new FindCustomerUseCase(customerRepository);

    const body = {
      id: "123",
    };

    const output = {
      id: "123",
      name: "Customer 1",
      address: {
        street: "Street 1",
        number: 1,
        zip: "Zipcode 1",
        city: "City 1",
      },
    };

    const response = await useCase.execute(body);

    expect(response).toEqual(output);
  });

  it("it should not find a customer", async () => {
    const customerRepository = MockRepository();

    customerRepository.find.mockImplementation(() => {
      throw new Error("Customer not found");
    });

    const useCase = new FindCustomerUseCase(customerRepository);

    const body = {
      id: "1234",
    };

    expect(() => {
      return useCase.execute(body);
    }).rejects.toThrow("Customer not found");
  });
});
