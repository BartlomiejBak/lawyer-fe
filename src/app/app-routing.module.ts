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

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'addresses', component: AddressesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'courts', component: CourtsComponent},
  {path: 'events', component:EventsComponent},
  {path: 'lawsuits', component: LawsuitsComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'poas', component: PoasComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
