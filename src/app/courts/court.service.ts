import { Injectable } from '@angular/core';
import {Court} from "../shared/court.model";
import {Address} from "../shared/address.model";

@Injectable({
  providedIn: 'root'
})
export class CourtService {
  private courts: Court[] = [
    new Court('1', 'Court nr 1',
      new Address('1', 'street 2', 'Warsaw', '11-111', 'Poland'),
      'some random court', '555-555-555'),
    new Court('2', 'Court nr 2',
      new Address('2', 'street 3', 'Warsaw', '11-111', 'Poland'),
      'some random court', '555-555-555'),
    new Court('3', 'Court nr 3',
      new Address('3', 'street 4', 'Warsaw', '11-111', 'Poland'),
      'some random court', '555-555-555')
  ];

  constructor() { }

  getCourts() {
    return this.courts.slice();
  }

  getCourt(id: string): Court {
    return this.courts.find(e => e.courtId === id)!;
  }

}
