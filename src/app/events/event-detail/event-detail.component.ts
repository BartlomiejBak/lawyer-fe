import { Component, OnInit } from '@angular/core';
import {Event} from "../../shared/event.model";
import {EventService} from "../event.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event!: Event;
  id!: string;

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.event = this.eventService.getEvent(this.id);
        }
      )
  }

}
