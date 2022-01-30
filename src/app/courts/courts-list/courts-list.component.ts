import { Component, OnInit } from '@angular/core';
import {Court} from "../../shared/court.model";
import {Address} from "../../shared/address.model";

@Component({
  selector: 'app-courts-list',
  templateUrl: './courts-list.component.html',
  styleUrls: ['./courts-list.component.css']
})
export class CourtsListComponent implements OnInit {
  courts: Court[] = [
    new Court('1', 'Court nr 1',
      new Address('1', 'street 2', 'Warsaw', '11-111', 'Poland'),
      'some random court', '555-555-555'),
    new Court('2', 'Court nr 2',
      new Address('2', 'street 3', 'Warsaw', '11-111', 'Poland'),
      'some random court', '555-555-555'),
    new Court('3', 'Court nr 3',
      new Address('3', 'street 4', 'Warsaw', '11-111', 'Poland'),
      'some random court', '555-555-555')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
