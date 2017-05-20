import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';
import {ChidTofatherService} from "app/service/chid-tofather.service";
import {LoginService} from "app/service/login.service";

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ChidTofatherService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
