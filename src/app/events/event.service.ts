import { Injectable } from '@angular/core';
import {Event} from "../shared/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    new Event('5', 'title 1', '01-01-2001', 'some desc'),
    new Event('6', 'title 2', '02-01-2001', 'some desc'),
    new Event('7', 'title 3', '03-01-2001', 'some desc')
  ];

  constructor() { }

  getEvents() {
    return this.events.slice();
  }

  getEvent(id: string): Event {
    return this.events.find(e => e.eventId === id)!;
  }
}
