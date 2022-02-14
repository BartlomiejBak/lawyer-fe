import { Component, OnInit } from '@angular/core';
import {Poa} from "../../shared/poa.model";
import {PoaService} from "../poa.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-poa-detail',
  templateUrl: './poa-detail.component.html',
  styleUrls: ['./poa-detail.component.css']
})
export class PoaDetailComponent implements OnInit {
  poa!: Poa;
  id!: string;

  constructor(private poaService: PoaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.poa = this.poaService.getPoa(this.id);
        }
      )
  }

}
