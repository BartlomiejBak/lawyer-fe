import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LawsuitsComponent } from './lawsuits/lawsuits.component';
import { LawsuitsListComponent } from './lawsuits/lawsuits-list/lawsuits-list.component';
import { LawsuitItemComponent } from './lawsuits/lawsuit-item/lawsuit-item.component';
import { LawsuitEditComponent } from './lawsuits/lawsuit-edit/lawsuit-edit.component';

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
    LawsuitEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
