import { Component, OnInit } from '@angular/core';
import {Event} from "../../shared/event.model";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: Event[] = [
    new Event('5', 'title 1', '01-01-2001', 'some desc'),
    new Event('6', 'title 2', '02-01-2001', 'some desc'),
    new Event('7', 'title 3', '03-01-2001', 'some desc')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
