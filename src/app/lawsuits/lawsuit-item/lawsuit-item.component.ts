import { Component, OnInit } from '@angular/core';
import { Lawsuit } from 'src/app/shared/lawsuit.model';

@Component({
  selector: 'app-lawsuit-item',
  templateUrl: './lawsuit-item.component.html',
  styleUrls: ['./lawsuit-item.component.css']
})
export class LawsuitItemComponent implements OnInit {
  lawsuit: Lawsuit = new Lawsuit('1', 'first lawsuit', 'defender', '11-06-2021', '11-06-2021', 'aa01', 500000, 'test lawsuit', [], [], []);

  constructor() {
   }

  ngOnInit(): void {
  }

}
