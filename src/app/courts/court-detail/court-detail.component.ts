import {Component, OnInit} from '@angular/core';
import {Court} from "../../shared/court.model";
import {CourtService} from "../court.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-court-detail',
  templateUrl: './court-detail.component.html',
  styleUrls: ['./court-detail.component.css']
})
export class CourtDetailComponent implements OnInit {
  court!: Court;
  id!: string;

  constructor(private courtService: CourtService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.court = this.courtService.getCourt(this.id);
        }
      )
  }

}
