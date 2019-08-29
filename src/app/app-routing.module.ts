import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarPageComponent } from './practice-routing/car-page/car-page.component';
import { HomePageComponent } from './practice-routing/home-page/home-page.component';
import { CarDetailComponent } from './practice-routing/car-page/car-detail/car-detail.component';
import { NotFoundComponent } from './practice-routing/not-found/not-found.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomePageComponent , pathMatch:'full'},

  {path: 'cars', component: CarPageComponent , children:[
    {path: ':id', component: CarDetailComponent},
  ]
},
{ path: 'not-found' , component: NotFoundComponent , data:{message : 'PagenotFound , data from routes[]'}},
{ path: '**' , redirectTo: 'not-found'}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
