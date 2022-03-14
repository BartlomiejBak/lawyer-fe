import {Component, Input, OnInit} from '@angular/core';
import {Payment} from "../../../shared/payment.model";

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: ['./payment-item.component.css']
})
export class PaymentItemComponent implements OnInit {
  @Input() payment!: Payment;
  @Input() id!: string;

  ngOnInit(): void {
  }

}
