import { CreateCustomerUseCase } from "./create.customer";

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Teste create customer", () => {
  it("should be create customer", async () => {
    const customerRepository = MockRepository();
    const useCase = new CreateCustomerUseCase(customerRepository);

    const input = {
      name: "Customer 1",
      address: {
        street: "Street 1",
        number: 1,
        zip: "Zipcode 1",
        city: "City 1",
      },
    };

    const create = await useCase.execute(input);

    const output = {
      id: expect.any(String),
      name: input.name,
      address: input.address,
    };

    expect(create).toEqual(output);
  });
});
