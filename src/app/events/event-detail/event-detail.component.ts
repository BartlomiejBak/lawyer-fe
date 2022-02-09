import { Component, OnInit } from '@angular/core';
import {Event} from "../../shared/event.model";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event = new Event('id', 'main event', '12-12-2012', 'description');
  constructor() { }

  ngOnInit(): void {
  }

}
