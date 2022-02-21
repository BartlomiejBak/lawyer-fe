import { Component, OnInit } from '@angular/core';
import { Lawsuit } from 'src/app/shared/lawsuit.model';
import {LawsuitService} from "../lawsuit.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-lawsuit-detail',
  templateUrl: './lawsuit-detail.component.html',
  styleUrls: ['./lawsuit-detail.component.css']
})
export class LawsuitDetailComponent implements OnInit {
  lawsuit!: Lawsuit;
  id!: string;

  constructor(private lawsuitService: LawsuitService,
              private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.lawsuit = this.lawsuitService.getLawsuit(this.id);
        }
      )
  }

}
