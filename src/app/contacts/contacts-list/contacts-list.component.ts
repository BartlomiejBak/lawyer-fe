import { Component, OnInit } from '@angular/core';
import {Contact} from "../../shared/contact.model";
import {Address} from "../../shared/address.model";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact(
      '1',
      'NAME',
      'FirstName',
      'LastName',
      'email@email.com',
      'altEmail@email.com',
      '555-555-555',
      '555-555-556',
      'company INC',
      '77111111111',
      '123456',
      '321654',
      '225588',
      '12-11-2012',
      '12-12-2012',
      new Address('id','Street 122', 'Warszawa', '00-000', 'Polska'),
      new Address('id','Street 122', 'Warszawa', '00-000', 'Polska')
    ),
    new Contact(
      '2',
      'NAME',
      'FirstName',
      'LastName',
      'email@email.com',
      'altEmail@email.com',
      '555-555-555',
      '555-555-556',
      'company INC',
      '77111111111',
      '123456',
      '321654',
      '225588',
      '12-11-2012',
      '12-12-2012',
      new Address('id','Street 122', 'Warszawa', '00-000', 'Polska'),
      new Address('id','Street 122', 'Warszawa', '00-000', 'Polska')
    ),
    new Contact(
      '3',
      'NAME',
      'FirstName',
      'LastName',
      'email@email.com',
      'altEmail@email.com',
      '555-555-555',
      '555-555-556',
      'company INC',
      '77111111111',
      '123456',
      '321654',
      '225588',
      '12-11-2012',
      '12-12-2012',
      new Address('id','Street 122', 'Warszawa', '00-000', 'Polska'),
      new Address('id','Street 122', 'Warszawa', '00-000', 'Polska')
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
