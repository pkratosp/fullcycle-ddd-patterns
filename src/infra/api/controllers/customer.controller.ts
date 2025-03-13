import express, { Request, Response } from "express";
import { CreateCustomerUseCase } from "../../../useCases/customer/create/create.customer";
import CustomerRepository from "../../customer/repository/sequelize/customer.repository";
import { ListCustomerUseCase } from "../../../useCases/customer/list/list.customer";
import { CustomerPresenter } from "../presenters/customer.presenter";

export const customerRoute = express.Router();

customerRoute.post("/customer", async (req: Request, res: Response) => {
  const useCase = new CreateCustomerUseCase(new CustomerRepository());
  try {
    const customerDto = {
      name: req.body.name,
      address: {
        street: req.body.address.street,
        number: req.body.address.number,
        city: req.body.address.city,
        zip: req.body.address.zip,
      },
    };

    const output = await useCase.execute(customerDto);

    res.status(201).send(output);
  } catch (error) {
    res.status(500).send(error);
  }
});

customerRoute.get("/customer", async (req: Request, res: Response) => {
  const useCase = new ListCustomerUseCase(new CustomerRepository());

  try {
    const result = await useCase.execute();

    res.format({
      json: async () => res.send(result),
      xml: async () => res.send(CustomerPresenter.listToXml(result)),
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
