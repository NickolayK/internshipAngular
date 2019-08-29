import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


import { BackGroundDirective } from './shared/back-ground.directive';


import { PracticeRoutingComponent } from './practice-module/practice-routing.component';
import { HomePageComponent } from './practice-module/home-page/home-page.component';

import { HeaderComponent } from './practice-module/header/header.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    BackGroundDirective,

    PracticeRoutingComponent,
    HomePageComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
