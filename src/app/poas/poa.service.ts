import { Injectable } from '@angular/core';
import {Poa} from "../shared/poa.model";

@Injectable({
  providedIn: 'root'
})
export class PoaService {
  private poas: Poa[] = [
    new Poa('1', 'type', '150', true, true, '03-03-2003', '03-03-2023', true, false),
    new Poa('2', 'type', '250', true, true, '03-03-2004', '03-03-2024', true, false),
    new Poa('3', 'type', '350', true, true, '03-03-2005', '03-03-2025', true, false)
  ];

  constructor() { }

  getPoas() {
    return this.poas.slice();
  }
}
