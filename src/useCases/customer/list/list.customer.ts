import { Customer } from "../../../domain/customer/entity/customer";
import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import { OutputListCustomerDto } from "./list.customer.dto";

export class ListCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface
  ) {}

  async execute(): Promise<OutputListCustomerDto> {
    const result = await this.customerRepository.findAll();

    return OutputMapper.toOutput(result);
  }
}

class OutputMapper {
  static toOutput(customer: Customer[]): OutputListCustomerDto {
    return {
      customers: customer.map((_customer) => ({
        id: _customer.id,
        name: _customer.name,
        address: {
          city: _customer.city,
          number: _customer.number,
          street: _customer.street,
          zip: _customer.zip,
        },
      })),
    };
  }
}
