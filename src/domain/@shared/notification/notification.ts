export type NotificationErrorProps = {
  message: string;
  context: string;
};

export class Notification {
  private errors: NotificationErrorProps[] = [];

  addError(error: NotificationErrorProps) {
    this.errors.push(error);
  }

  hasErrors() {
    return this.errors.length > 0;
  }

  getErrors() {
    return this.errors;
  }

  messages(context?: string): string {
    let message = "";

    this.errors.forEach((error) => {
      if (error.context === context || context === undefined) {
        message += `${error.context}: ${error.message},`;
      }
    });

    return message;
  }
}
