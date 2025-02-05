import { EventHandlerInterface } from "../../../../@shared/event/event-handler.interface";
import { ProductCreatedEvent } from "../product-created-event";

export class SendEmailWhenProductIsCreatedHandler
  implements EventHandlerInterface
{
  handle(event: ProductCreatedEvent): void {
    console.log("seding email to .....");
  }
}
