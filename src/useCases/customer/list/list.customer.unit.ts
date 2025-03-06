import { CustomerFactory } from "../../../domain/customer/factory/customer.factory";
import { Address } from "../../../domain/customer/value-object/address";
import { ListCustomerUseCase } from "./list.customer";

const customer1 = CustomerFactory.createWithAddress(
  "jhon doe",
  new Address("rua", 500, "150000", "sp")
);
const customer2 = CustomerFactory.createWithAddress(
  "jhon doe doe",
  new Address("rua", 500, "150000", "sp")
);

const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([customer1, customer2])),
  };
};

describe("unit test for list use case", () => {
  it("should list a customer", async () => {
    const repository = MockRepository();

    const useCase = new ListCustomerUseCase(repository);

    const result = await useCase.execute();

    expect(result.customers.length).toEqual(2);
    expect(result.customers[0].id).toEqual(customer1.id);
    expect(result.customers[0].name).toEqual(customer1.name);
    expect(result.customers[0].address.city).toEqual(customer1.address.city);
  });
});
