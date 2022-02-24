import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddressesComponent} from "./addresses/addresses.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {CourtsComponent} from "./courts/courts.component";
import {EventsComponent} from "./events/events.component";
import {LawsuitsComponent} from "./lawsuits/lawsuits.component";
import {NotesComponent} from "./notes/notes.component";
import {PaymentsComponent} from "./payments/payments.component";
import {PoasComponent} from "./poas/poas.component";
import {TagsComponent} from "./tags/tags.component";
import {TasksComponent} from "./tasks/tasks.component";
import {HomeComponent} from "./home/home.component";
import {TaskDetailComponent} from "./tasks/task-detail/task-detail.component";
import {TaskStartComponent} from "./tasks/task-start/task-start.component";
import {AddressStartComponent} from "./addresses/address-start/address-start.component";
import {AddressDetailComponent} from "./addresses/address-detail/address-detail.component";
import {ContactStartComponent} from "./contacts/contact-start/contact-start.component";
import {ContactDetailComponent} from "./contacts/contact-detail/contact-detail.component";
import {CourtStartComponent} from "./courts/court-start/court-start.component";
import {CourtDetailComponent} from "./courts/court-detail/court-detail.component";
import {EventStartComponent} from "./events/event-start/event-start.component";
import {EventDetailComponent} from "./events/event-detail/event-detail.component";
import {LawsuitStartComponent} from "./lawsuits/lawsuit-start/lawsuit-start.component";
import {LawsuitDetailComponent} from "./lawsuits/lawsuit-detail/lawsuit-detail.component";
import {NoteStartComponent} from "./notes/note-start/note-start.component";
import {NoteDetailComponent} from "./notes/note-detail/note-detail.component";
import {PaymentStartComponent} from "./payments/payment-start/payment-start.component";
import {PaymentDetailComponent} from "./payments/payment-detail/payment-detail.component";
import {PoaStartComponent} from "./poas/poa-start/poa-start.component";
import {PoaDetailComponent} from "./poas/poa-detail/poa-detail.component";
import {AddressEditComponent} from "./addresses/address-edit/address-edit.component";
import {ContactEditComponent} from "./contacts/contact-edit/contact-edit.component";
import {CourtEditComponent} from "./courts/court-edit/court-edit.component";
import {EventEditComponent} from "./events/event-edit/event-edit.component";
import {LawsuitEditComponent} from "./lawsuits/lawsuit-edit/lawsuit-edit.component";
import {NoteEditComponent} from "./notes/note-edit/note-edit.component";
import {PaymentEditComponent} from "./payments/payment-edit/payment-edit.component";
import {PoaEditComponent} from "./poas/poa-edit/poa-edit.component";
import {TagEditComponent} from "./tags/tag-edit/tag-edit.component";
import {TaskEditComponent} from "./tasks/task-edit/task-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'addresses', component: AddressesComponent, children: [
      {path: '', component: AddressStartComponent},
      {path: 'new', component: AddressEditComponent},
      {path: ':id', component: AddressDetailComponent},
      {path: ':id/edit', component: AddressEditComponent}
    ]},
  {path: 'contacts', component: ContactsComponent, children: [
      {path: '', component: ContactStartComponent},
      {path: 'new', component: ContactEditComponent},
      {path: ':id', component: ContactDetailComponent},
      {path: ':id/edit', component: ContactEditComponent}
    ]},
  {path: 'courts', component: CourtsComponent, children: [
      {path: '', component: CourtStartComponent},
      {path: 'new', component: CourtEditComponent},
      {path: ':id', component: CourtDetailComponent},
      {path: ':id/new', component: CourtEditComponent}
    ]},
  {path: 'events', component:EventsComponent, children: [
      {path: '', component: EventStartComponent},
      {path: 'new', component: EventEditComponent},
      {path: ':id', component: EventDetailComponent},
      {path: ':id/edit', component: EventEditComponent}
    ]},
  {path: 'lawsuits', component: LawsuitsComponent, children: [
      {path: '', component: LawsuitStartComponent},
      {path: 'new', component: LawsuitEditComponent},
      {path: ':id', component: LawsuitDetailComponent},
      {path: ':id/edit', component: LawsuitEditComponent}
    ]},
  {path: 'notes', component: NotesComponent, children: [
      {path: '', component: NoteStartComponent},
      {path: 'new', component: NoteEditComponent},
      {path: ':id', component: NoteDetailComponent},
      {path: ':id/edit', component: NoteEditComponent}
    ]},
  {path: 'payments', component: PaymentsComponent, children: [
      {path: '', component: PaymentStartComponent},
      {path: 'new', component: PaymentEditComponent},
      {path: ':id', component: PaymentDetailComponent},
      {path: ':id/edit', component: PaymentEditComponent}
    ]},
  {path: 'poas', component: PoasComponent, children: [
      {path: '', component: PoaStartComponent},
      {path: 'new', component: PoaEditComponent},
      {path: ':id', component: PoaDetailComponent},
      {path: ':id/edit', component: PoaEditComponent}
    ]},
  {path: 'tags', component: TagsComponent, children: [
      {path: 'new', component: TagEditComponent},
      {path: ':id/edit', component: TagEditComponent}
    ]},
  {path: 'tasks', component: TasksComponent, children: [
      {path: '', component: TaskStartComponent},
      {path: 'new', component: TaskEditComponent},
      {path: ':id', component: TaskDetailComponent},
      {path: ':id/edit', component: TaskEditComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
