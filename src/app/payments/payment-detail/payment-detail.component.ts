import { Component, OnInit } from '@angular/core';
import {Payment} from "../../shared/payment.model";
import {PaymentService} from "../payment.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  payment!: Payment;
  id!: string;

  constructor(private paymentService: PaymentService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.payment = this.paymentService.getPayment(this.id);
        }
      )
  }

}
