import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../../shared/event.model";

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event!: Event;
  @Input() id!: string;

  ngOnInit(): void {
  }

}
