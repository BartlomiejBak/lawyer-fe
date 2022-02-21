import {Component, Input, OnInit} from '@angular/core';
import {Lawsuit} from "../../../shared/lawsuit.model";

@Component({
  selector: 'app-lawsuit-item',
  templateUrl: './lawsuit-item.component.html',
  styleUrls: ['./lawsuit-item.component.css']
})
export class LawsuitItemComponent implements OnInit {
  @Input() lawsuit!: Lawsuit;
  @Input() id!: string;

  ngOnInit(): void {
  }

}
