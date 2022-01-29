import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

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
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';

const appRoutes: Routes = [
  { path: 'lawsuits', component: LawsuitsComponent}
];

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
    EventsComponent,
    EventsListComponent,
    EventItemComponent,
    EventEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
