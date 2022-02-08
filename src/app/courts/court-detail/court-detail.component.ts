import { Component, OnInit } from '@angular/core';
import {Court} from "../../shared/court.model";
import {Address} from "../../shared/address.model";

@Component({
  selector: 'app-court-detail',
  templateUrl: './court-detail.component.html',
  styleUrls: ['./court-detail.component.css']
})
export class CourtDetailComponent implements OnInit {
  court: Court = new Court('1', 'Court nr 1',
    new Address('1', 'street 2', 'Warsaw', '11-111', 'Poland'),
    'some random court', '555-555-555');

  constructor() { }

  ngOnInit(): void {
  }

}
