import { Injectable } from '@angular/core';
import {Address} from "../shared/address.model";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private addresses: Address[] = [
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
  ];

  constructor() { }

  getAddresses() {
    return this.addresses.slice();
  }

  getAddress(id: string): Address {
    return this.addresses.find(e => e.addressId === id)!;
  }

}
