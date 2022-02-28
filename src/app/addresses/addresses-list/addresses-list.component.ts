import { Component, OnInit } from '@angular/core';
import {Address} from "../../shared/address.model";
import {AddressService} from "../address.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.css']
})
export class AddressesListComponent implements OnInit {
  addresses: Address[] = [];

  constructor(private addressService: AddressService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.addresses = this.addressService.getAddresses();
  }

  onNewAddress() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
