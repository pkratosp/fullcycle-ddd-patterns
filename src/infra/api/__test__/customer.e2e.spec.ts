import { app, sequelize } from "../express";
import request from "supertest";

describe("E2E test for customer", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({
        name: "Jhon doe",
        address: {
          street: "rua",
          number: 555,
          zip: "150000",
          city: "rp",
        },
      });

    expect(response.statusCode).toEqual(201);
  });

  it("should not create customer", async () => {
    const response = await request(app).post("/customer").send({});

    expect(response.statusCode).toEqual(500);
  });
});
