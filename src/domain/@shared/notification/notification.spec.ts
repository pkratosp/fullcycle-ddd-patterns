import { Notification } from "./notification";

describe("Unit tests for notification", () => {
  it("should create errors", () => {
    const notification = new Notification();

    const error = {
      message: "error message",
      context: "customer",
    };

    notification.addError(error);

    expect(notification.messages("customer")).toBe("customer: error message,");

    const error2 = {
      message: "error message two",
      context: "customer",
    };

    notification.addError(error2);

    expect(notification.messages("customer")).toBe(
      "customer: error message,customer: error message two,"
    );

    const error3 = {
      message: "error message 3",
      context: "order",
    };

    notification.addError(error3);

    expect(notification.messages("customer")).toBe(
      "customer: error message,customer: error message two,"
    );

    expect(notification.messages()).toBe(
      "customer: error message,customer: error message two,order: error message 3,"
    );
  });
});
