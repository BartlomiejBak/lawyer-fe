import { Component, OnInit } from '@angular/core';
import {Address} from "../../shared/address.model";

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.css']
})
export class AddressesListComponent implements OnInit {
  addresses: Address[] = [
    new Address('id1',
      'street1',
      'Warszawa',
      '10-123',
      'Poland'),
    new Address('id2',
      'street2',
      'Warszawa',
      '10-123',
      'Poland'),
    new Address('id3',
      'street3',
      'Warszawa',
      '10-123',
      'Poland')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
