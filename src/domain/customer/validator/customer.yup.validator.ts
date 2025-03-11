import { ValidatorInterface } from "../../@shared/validator/validator.interface";
import { Customer } from "../entity/customer";
import * as yup from "yup";

export class CustomerYupValidator implements ValidatorInterface<Customer> {
  validate(entity: Customer): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id obrigatório"),
          name: yup.string().required("Nome invalido"),
        })
        .validateSync(
          {
            id: entity.id,
            name: entity.name,
          },
          {
            abortEarly: false,
          }
        );
    } catch (error) {
      const _error = error as yup.ValidationError;

      _error.errors.forEach((element) => {
        entity.notification.addError({
          context: "customer",
          message: element,
        });
      });
    }
  }
}
