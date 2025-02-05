import { EventInterface } from "../event.interface";

export class ProductCreatedEvent implements EventInterface {
  dataTimeOccured: Date;
  eventDate: any;

  constructor(eventDate: any) {
    this.eventDate = eventDate;
    this.dataTimeOccured = new Date();
  }
}
