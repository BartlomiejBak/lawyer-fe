import {Component, OnInit} from '@angular/core';
import {Contact} from "../../shared/contact.model";
import {ActivatedRoute, Params} from "@angular/router";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact!: Contact;
  id!: string;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.contact = this.contactService.getContact(this.id);
        }
      )
  }

}
