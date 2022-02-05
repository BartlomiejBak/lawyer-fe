import { Injectable } from '@angular/core';
import {Payment} from "../shared/payment.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private payments: Payment[] = [
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

  getPayments() {
    return this.payments.slice();
  }

}
