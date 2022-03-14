import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../../../shared/address.model";

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent implements OnInit {
  @Input() address!: Address;
  @Input() id!: string;

  ngOnInit(): void {
  }

}
