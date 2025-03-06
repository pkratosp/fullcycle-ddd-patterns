import { CustomerFactory } from "../../../domain/customer/factory/customer.factory";
import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import { Address } from "../../../domain/customer/value-object/address";
import {
  CreateCustomerDto,
  OutputCreateCustomerDto,
} from "./create.customer.dto";

export class CreateCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface
  ) {}

  async execute({
    address,
    name,
  }: CreateCustomerDto): Promise<OutputCreateCustomerDto> {
    const customer = CustomerFactory.createWithAddress(
      name,
      new Address(address.street, address.number, address.zip, address.city)
    );

    await this.customerRepository.create(customer);

    return {
      id: customer.id,
      address: {
        city: customer.city,
        number: customer.number,
        street: customer.street,
        zip: customer.zip,
      },
      name: customer.name,
    };
  }
}
