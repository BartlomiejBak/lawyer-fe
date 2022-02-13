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

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'addresses', component: AddressesComponent, children: [
      {path: '', component: AddressStartComponent},
      {path: ':id', component: AddressDetailComponent}
    ]},
  {path: 'contacts', component: ContactsComponent, children: [
      {path: '', component: ContactStartComponent},
      {path: ':id', component: ContactDetailComponent}
    ]},
  {path: 'courts', component: CourtsComponent, children: [
      {path: '', component: CourtStartComponent},
      {path: ':id', component: CourtDetailComponent}
    ]},
  {path: 'events', component:EventsComponent, children: [
      {path: '', component: EventStartComponent},
      {path: ':id', component: EventDetailComponent}
    ]},
  {path: 'lawsuits', component: LawsuitsComponent, children: [
      {path: '', component: LawsuitStartComponent},
      {path: ':id', component: LawsuitDetailComponent}
    ]},
  {path: 'notes', component: NotesComponent, children: [
      {path: '', component: NoteStartComponent},
      {path: ':id', component: NoteDetailComponent}
    ]},
  {path: 'payments', component: PaymentsComponent, children: [
      {path: '', component: PaymentStartComponent},
      {path: ':id', component: PaymentDetailComponent}
    ]},
  {path: 'poas', component: PoasComponent, children: [
      {path: '', component: PoaStartComponent},
      {path: ':id', component: PoaDetailComponent}
    ]},
  {path: 'tags', component: TagsComponent},
  {path: 'tasks', component: TasksComponent, children: [
      {path: '', component: TaskStartComponent},
      {path: ':id', component: TaskDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
