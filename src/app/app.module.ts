import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LawsuitsComponent } from './lawsuits/lawsuits.component';
import { LawsuitsListComponent } from './lawsuits/lawsuits-list/lawsuits-list.component';

const appRoutes: Routes = [
  { path: 'lawsuits', component: LawsuitsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LawsuitsComponent,
    LawsuitsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
