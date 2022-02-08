import { Component, OnInit } from '@angular/core';
import {Address} from "../../shared/address.model";

@Component({
  selector: 'app-addresses-item',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {
  address: Address = new Address(
    'id',
    'street',
    'Warszawa',
    '20-300',
    'Poland'
  );

  constructor() { }

  ngOnInit(): void {
  }

}
