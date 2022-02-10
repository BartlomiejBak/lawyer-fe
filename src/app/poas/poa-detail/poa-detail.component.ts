import { Component, OnInit } from '@angular/core';
import {Poa} from "../../shared/poa.model";

@Component({
  selector: 'app-poa-detail',
  templateUrl: './poa-detail.component.html',
  styleUrls: ['./poa-detail.component.css']
})
export class PoaDetailComponent implements OnInit {
  poa: Poa = new Poa(
    '1',
    'type',
    '50',
    true,
    true,
    '03-03-2003',
    '03-03-2023',
    true,
    false
  );
  constructor() { }

  ngOnInit(): void {
  }

}
