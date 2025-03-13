import { toXML } from "jstoxml";
import { OutputListCustomerDto } from "../../../useCases/customer/list/list.customer.dto";

export class CustomerPresenter {
  static listToXml(data: OutputListCustomerDto): string {
    const xmlOptions = {
      header: true,
      indent: " ",
      newline: "\n",
      allowEmpty: true,
    };

    return toXML(
      {
        customers: {
          customer: data.customers.map((customer) => ({
            id: customer.id,
            name: customer.name,
            address: {
              street: customer.address.street,
              city: customer.address.city,
              zip: customer.address.zip,
              number: customer.address.number,
            },
          })),
        },
      },
      xmlOptions
    );
  }
}
