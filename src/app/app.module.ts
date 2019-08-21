import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './list/list.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    ListComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
