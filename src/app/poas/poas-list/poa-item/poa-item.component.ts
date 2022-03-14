import {Component, Input, OnInit} from '@angular/core';
import {Poa} from "../../../shared/poa.model";

@Component({
  selector: 'app-poa-item',
  templateUrl: './poa-item.component.html',
  styleUrls: ['./poa-item.component.css']
})
export class PoaItemComponent implements OnInit {
  @Input() poa!: Poa;
  @Input() id!: string;

  ngOnInit(): void {
  }

}
