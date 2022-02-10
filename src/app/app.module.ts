import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LawsuitsComponent } from './lawsuits/lawsuits.component';
import { LawsuitsListComponent } from './lawsuits/lawsuits-list/lawsuits-list.component';
import { LawsuitDetailComponent } from './lawsuits/lawsuit-detail/lawsuit-detail.component';
import { LawsuitEditComponent } from './lawsuits/lawsuit-edit/lawsuit-edit.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentEditComponent } from './payments/payment-edit/payment-edit.component';
import { PaymentDetailComponent } from './payments/payment-detail/payment-detail.component';
import { PaymentsListComponent } from './payments/payments-list/payments-list.component';
import { TagsComponent } from './tags/tags.component';
import { TagsListComponent } from './tags/tags-list/tags-list.component';
import { TagEditComponent } from './tags/tag-edit/tag-edit.component';
import { PoasComponent } from './poas/poas.component';
import { PoasListComponent } from './poas/poas-list/poas-list.component';
import { PoaDetailComponent } from './poas/poa-detail/poa-detail.component';
import { PoaEditComponent } from './poas/poa-edit/poa-edit.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressDetailComponent } from './addresses/address-detail/address-detail.component';
import { AddressEditComponent } from './addresses/address-edit/address-edit.component';
import { AddressesListComponent } from './addresses/addresses-list/addresses-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { CourtsComponent } from './courts/courts.component';
import { CourtsListComponent } from './courts/courts-list/courts-list.component';
import { CourtEditComponent } from './courts/court-edit/court-edit.component';
import { CourtDetailComponent } from './courts/court-detail/court-detail.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { TaskStartComponent } from './tasks/task-start/task-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LawsuitsComponent,
    LawsuitsListComponent,
    LawsuitDetailComponent,
    LawsuitEditComponent,
    NotesComponent,
    NotesListComponent,
    NoteEditComponent,
    NoteDetailComponent,
    PaymentsComponent,
    PaymentEditComponent,
    PaymentDetailComponent,
    PaymentsListComponent,
    TagsComponent,
    TagsListComponent,
    TagEditComponent,
    PoasComponent,
    PoasListComponent,
    PoaDetailComponent,
    PoaEditComponent,
    TagEditComponent,
    EventsComponent,
    EventsListComponent,
    EventDetailComponent,
    EventEditComponent,
    TagEditComponent,
    AddressesComponent,
    AddressDetailComponent,
    AddressEditComponent,
    AddressesListComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactDetailComponent,
    ContactEditComponent,
    CourtsComponent,
    CourtsListComponent,
    CourtEditComponent,
    CourtDetailComponent,
    TasksComponent,
    TasksListComponent,
    TaskEditComponent,
    TaskDetailComponent,
    HomeComponent,
    TaskItemComponent,
    TaskStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
