import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../../shared/contact.model";

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact!: Contact;
  @Input() id!: string;

  ngOnInit(): void {
  }

}
