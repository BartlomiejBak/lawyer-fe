import { Component, OnInit } from '@angular/core';
import {Address} from "../../shared/address.model";
import {AddressService} from "../address.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-addresses-item',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {
  address!: Address;
  id!: string;

  constructor(private addressService: AddressService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.address = this.addressService.getAddress(this.id);
        }
      )
  }

}
