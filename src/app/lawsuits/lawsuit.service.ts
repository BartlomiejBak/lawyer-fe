import { Injectable } from '@angular/core';
import {Lawsuit} from "../shared/lawsuit.model";

@Injectable({
  providedIn: 'root'
})
export class LawsuitService {
  private lawsuits: Lawsuit[] = [
    new Lawsuit('1', 'first lawsuit', 'defender', '11-06-2021', '11-06-2021', 'aa01', 500000, 'test lawsuit', [], [], []),
    new Lawsuit('2', 'second lawsuit', 'defender', '11-06-2021', '11-06-2021', 'aa01', 500000, 'test lawsuit', [], [], []),
    new Lawsuit('3', 'third lawsuit', 'defender', '11-06-2021', '11-06-2021', 'aa01', 500000, 'test lawsuit', [], [], []),
    new Lawsuit('4', 'fourth lawsuit', 'defender', '11-06-2021', '11-06-2021', 'aa01', 500000, 'test lawsuit', [], [], [])
  ];

  constructor() { }

  getLawsuits(): Lawsuit[] {
    return this.lawsuits.slice();
  }
}
