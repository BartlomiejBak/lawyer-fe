import { Component, OnInit } from '@angular/core';
import {Address} from "../../shared/address.model";
import {AddressService} from "../address.service";

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.css']
})
export class AddressesListComponent implements OnInit {
  addresses: Address[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.addresses = this.addressService.getAddresses();
  }

}
