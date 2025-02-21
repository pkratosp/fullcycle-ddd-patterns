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
    const _address = new Address(
      address.street,
      address.number,
      address.zip,
      address.city
    );
    const customer = CustomerFactory.createWithAddress(name, _address);

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
