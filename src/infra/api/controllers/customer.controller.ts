import express, { Request, Response } from "express";
import { CreateCustomerUseCase } from "../../../useCases/customer/create/create.customer";
import CustomerRepository from "../../customer/repository/sequelize/customer.repository";

export const customerRoute = express.Router();

customerRoute.post("/customer", async (req: Request, res: Response) => {
  const useCase = new CreateCustomerUseCase(new CustomerRepository());
  try {
    const customerDto = {
      name: req.body.name,
      address: {
        street: req.body.street,
        number: req.body.number,
        city: req.body.city,
        zip: req.body.zip,
      },
    };

    const output = await useCase.execute(customerDto);

    res.status(201).send(output);
  } catch (error) {
    res.status(500).send(error);
  }
});
