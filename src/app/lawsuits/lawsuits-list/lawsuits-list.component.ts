import { Component, OnInit } from '@angular/core';
import { ContactRole } from 'src/app/shared/contact-role.model';
import { Lawsuit } from 'src/app/shared/lawsuit.model';

@Component({
  selector: 'app-lawsuits-list',
  templateUrl: './lawsuits-list.component.html',
  styleUrls: ['./lawsuits-list.component.css']
})
export class LawsuitsListComponent implements OnInit {
  lawsuits: Lawsuit[] = [
    new Lawsuit('1', 'first lawsuit', 'defender', '11-06-2021', '11-06-2021', 'aa01', 500000, 'test lawsuit', [], [], []),
    new Lawsuit('2', 'second lawsuit', 'defender', '11-06-2021', '11-06-2021', 'aa01', 500000, 'test lawsuit', [], [], []),
    new Lawsuit('3', 'third lawsuit', 'defender', '11-06-2021', '11-06-2021', 'aa01', 500000, 'test lawsuit', [], [], []),
    new Lawsuit('4', 'fourth lawsuit', 'defender', '11-06-2021', '11-06-2021', 'aa01', 500000, 'test lawsuit', [], [], [])
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
