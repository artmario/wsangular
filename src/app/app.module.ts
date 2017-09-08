import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {home} from './home/home';
import {home} from './menu/menu';
import {pessoa} from './pessoas/pessoa';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    home,
    menu,
    pessoa
  ],
  imports: [
    BrowserModule
    RouterModule.forRoot([
      {path: '',component: home},
      {path: '/pessoas',component: pessoa}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
