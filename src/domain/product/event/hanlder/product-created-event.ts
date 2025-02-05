import { EventInterface } from "../../../@shared/event/event.interface";

export class ProductCreatedEvent implements EventInterface {
  dataTimeOccured: Date;
  eventDate: any;

  constructor(eventDate: any) {
    this.eventDate = eventDate;
    this.dataTimeOccured = new Date();
  }
}
