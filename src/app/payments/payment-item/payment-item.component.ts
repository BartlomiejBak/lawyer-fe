import { Component, OnInit } from '@angular/core';
import {Payment} from "../../shared/payment.model";

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: ['./payment-item.component.css']
})
export class PaymentItemComponent implements OnInit {
  payment: Payment = new Payment('id',
    1200.20,
    '11-02-2022',
    true,
    '10-11-2022',
    'no comment',
    true,
    false);

  constructor() { }

  ngOnInit(): void {
  }

}
