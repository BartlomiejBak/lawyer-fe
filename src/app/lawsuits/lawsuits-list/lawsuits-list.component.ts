import {Component, OnInit} from '@angular/core';
import {Lawsuit} from 'src/app/shared/lawsuit.model';
import {LawsuitService} from "../lawsuit.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lawsuits-list',
  templateUrl: './lawsuits-list.component.html',
  styleUrls: ['./lawsuits-list.component.css']
})
export class LawsuitsListComponent implements OnInit {
  lawsuits: Lawsuit[] = [];

  constructor(private lawsuitService: LawsuitService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.lawsuits = this.lawsuitService.getLawsuits();
  }

  onNewLawsuit() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }


}
