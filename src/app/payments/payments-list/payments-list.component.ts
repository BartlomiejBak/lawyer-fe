import { Component, OnInit } from '@angular/core';
import {Payment} from "../../shared/payment.model";

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {
  payments: Payment[] = [
    new Payment('1',
      1500,
      '11-01-2022',
      true,
      '13-01-2022',
      'some comment',
      true,
      false),
    new Payment('2',
      1600,
      '11-02-2022',
      true,
      '13-02-2022',
      'some comment',
      true,
      false),
    new Payment('3',
      1700,
      '11-03-2022',
      true,
      '13-03-2022',
      'some comment',
      true,
      false)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
