import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { CarServComponent } from './practice-with-services/components/car/car.component'
import { AddCarSerComponent } from './practice-with-services/components/add-car/add-car.component'

import { BackGroundDirective } from './back-ground.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { PracticeWithServicesComponent } from './practice-with-services/practice-with-services.component';
import { PracticeWithFormsComponent } from './practice-with-forms/practice-with-forms.component';
import { TdComponent } from './practice-with-forms/td/td.component';
import { ReactiveComponent } from './practice-with-forms/reactive/reactive.component';
import { PracticeHttpComponent } from './practice-http/practice-http.component';
import { PracticeRoutingComponent } from './practice-routing/practice-routing.component';
import { CarPageComponent } from './practice-routing/car-page/car-page.component';
import { HomePageComponent } from './practice-routing/home-page/home-page.component';
import { CarDetailComponent } from './practice-routing/car-page/car-detail/car-detail.component';
import { NotFoundComponent } from './practice-routing/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackGroundDirective,
    CustomPipe,
    CustomFilterPipe,
    PracticeWithServicesComponent,
    CarServComponent,
    AddCarSerComponent,
    PracticeWithFormsComponent,
    TdComponent,
    ReactiveComponent,
    PracticeHttpComponent,
    PracticeRoutingComponent,
    CarPageComponent,
    HomePageComponent,
    CarDetailComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
