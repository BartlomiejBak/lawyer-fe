import {Component, Input, OnInit} from '@angular/core';
import {Court} from "../../../shared/court.model";

@Component({
  selector: 'app-court-item',
  templateUrl: './court-item.component.html',
  styleUrls: ['./court-item.component.css']
})
export class CourtItemComponent implements OnInit {
  @Input() court!: Court;
  @Input() id!: string;

  ngOnInit(): void {
  }

}
