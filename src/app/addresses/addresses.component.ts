import { Component, OnInit } from '@angular/core';
import {AddressService} from "./address.service";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
  providers: [AddressService]
})
export class AddressesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
