import { Component, OnInit } from '@angular/core';
import {Poa} from "../../shared/poa.model";
import {PoaService} from "../poa.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-poas-list',
  templateUrl: './poas-list.component.html',
  styleUrls: ['./poas-list.component.css']
})
export class PoasListComponent implements OnInit {
  poas: Poa[] = [];

  constructor(private poaService: PoaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.poas = this.poaService.getPoas();
  }

  onNewPoa() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
