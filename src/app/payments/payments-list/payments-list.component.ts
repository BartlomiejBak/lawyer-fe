import { Component, OnInit } from '@angular/core';
import {Payment} from "../../shared/payment.model";
import {PaymentService} from "../payment.service";

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.payments = this.paymentService.getPayments();
  }

}
