import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LawsuitsComponent } from './lawsuits/lawsuits.component';
import { LawsuitsListComponent } from './lawsuits/lawsuits-list/lawsuits-list.component';
import { LawsuitItemComponent } from './lawsuits/lawsuit-item/lawsuit-item.component';
import { LawsuitEditComponent } from './lawsuits/lawsuit-edit/lawsuit-edit.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';
import { NoteItemComponent } from './notes/note-item/note-item.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentEditComponent } from './payments/payment-edit/payment-edit.component';
import { PaymentItemComponent } from './payments/payment-item/payment-item.component';
import { PaymentsListComponent } from './payments/payments-list/payments-list.component';
import { TagsComponent } from './tags/tags.component';
import { TagsListComponent } from './tags/tags-list/tags-list.component';
import { TagEditComponent } from './tags/tag-edit/tag-edit.component';
import { PoasComponent } from './poas/poas.component';
import { PoasListComponent } from './poas/poas-list/poas-list.component';
import { PoaItemComponent } from './poas/poa-item/poa-item.component';
import { PoaEditComponent } from './poas/poa-edit/poa-edit.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressItemComponent } from './addresses/address-item/address-item.component';
import { AddressEditComponent } from './addresses/address-edit/address-edit.component';
import { AddressesListComponent } from './addresses/addresses-list/addresses-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { CourtsComponent } from './courts/courts.component';
import { CourtsListComponent } from './courts/courts-list/courts-list.component';
import { CourtEditComponent } from './courts/court-edit/court-edit.component';
import { CourtItemComponent } from './courts/court-item/court-item.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LawsuitsComponent,
    LawsuitsListComponent,
    LawsuitItemComponent,
    LawsuitEditComponent,
    NotesComponent,
    NotesListComponent,
    NoteEditComponent,
    NoteItemComponent,
    PaymentsComponent,
    PaymentEditComponent,
    PaymentItemComponent,
    PaymentsListComponent,
    TagsComponent,
    TagsListComponent,
    TagEditComponent,
    PoasComponent,
    PoasListComponent,
    PoaItemComponent,
    PoaEditComponent,
    TagEditComponent,
    EventsComponent,
    EventsListComponent,
    EventItemComponent,
    EventEditComponent,
    TagEditComponent,
    AddressesComponent,
    AddressItemComponent,
    AddressEditComponent,
    AddressesListComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactItemComponent,
    ContactEditComponent,
    CourtsComponent,
    CourtsListComponent,
    CourtEditComponent,
    CourtItemComponent,
    TasksComponent,
    TasksListComponent,
    TaskEditComponent,
    TaskItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
