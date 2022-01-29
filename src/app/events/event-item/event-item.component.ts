import { Component, OnInit } from '@angular/core';
import {Event} from "../../shared/event.model";

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  event: Event = new Event('id', 'main event', '12-12-2012', 'description');
  constructor() { }

  ngOnInit(): void {
  }

}
