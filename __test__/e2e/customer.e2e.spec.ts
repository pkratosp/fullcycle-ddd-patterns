import { app, sequelize } from "../../src/infra/api/express";
import request from "supertest";

describe("E2E test for customer", () => {
  beforeEach(async () => {
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

  it("should list customer", async () => {
    await request(app)
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

    await request(app)
      .post("/customer")
      .send({
        name: "Jhon doe 2",
        address: {
          street: "rua",
          number: 555,
          zip: "150000",
          city: "rp",
        },
      });

    const response = await request(app).get("/customer");

    expect(response.statusCode).toEqual(200);
    expect(response.body.customers).toHaveLength(2);

    const responseXML = await request(app)
      .get("/customer")
      .set("Accept", "application/xml");
    expect(responseXML.statusCode).toBe(200);
    expect(responseXML.text).toContain(
      `<?xml version=\"1.0\" encoding=\"UTF-8\"?>`
    );
  });
});
