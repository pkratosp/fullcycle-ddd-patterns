import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import { FindCustomerDto, OutputFindCustomerDto } from "./find.customer.dto";

export class FindCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface
  ) {}

  async execute({ id }: FindCustomerDto): Promise<OutputFindCustomerDto> {
    const customer = await this.customerRepository.find(id);

    return {
      id: customer.id,
      name: customer.name,
      address: {
        city: customer.city,
        number: customer.number,
        street: customer.street,
        zip: customer.zip,
      },
    };
  }
}
