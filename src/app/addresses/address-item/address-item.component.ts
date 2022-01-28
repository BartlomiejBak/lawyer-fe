import { Component, OnInit } from '@angular/core';
import {Address} from "../../shared/address.model";

@Component({
  selector: 'app-addresses-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent implements OnInit {
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
