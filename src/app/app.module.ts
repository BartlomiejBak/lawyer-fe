import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LawsuitsComponent } from './lawsuits/lawsuits.component';

const appRoutes: Routes = [
  { path: 'lawsuits', component: LawsuitsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LawsuitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
