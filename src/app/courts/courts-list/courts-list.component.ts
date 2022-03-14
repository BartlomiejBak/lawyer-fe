import {Component, OnInit} from '@angular/core';
import {Court} from "../../shared/court.model";
import {CourtService} from "../court.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-courts-list',
  templateUrl: './courts-list.component.html',
  styleUrls: ['./courts-list.component.css']
})
export class CourtsListComponent implements OnInit {
  courts: Court[] = [];

  constructor(private courtService: CourtService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.courts = this.courtService.getCourts();
  }

  onNewCourt() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }


}
