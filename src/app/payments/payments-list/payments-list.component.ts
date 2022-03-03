import { Component, OnInit } from '@angular/core';
import {Payment} from "../../shared/payment.model";
import {PaymentService} from "../payment.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.payments = this.paymentService.getPayments();
  }

  onNewPayment() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
