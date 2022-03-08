import { Component, OnInit } from '@angular/core';
import {Event} from "../../shared/event.model";
import {EventService} from "../event.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  onNewEvent() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }


}
