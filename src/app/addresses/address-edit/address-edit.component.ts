import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-addresses-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
  id!: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      )
  }

}
