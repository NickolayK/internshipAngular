import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules} from '@angular/router';
import { HomePageComponent } from './practice-module/home-page/home-page.component';



const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomePageComponent , pathMatch:'full'},
 {path: 'cars',
  loadChildren:'./practice-module/car-page/cars.module#CarsModule',
  canLoad:[]
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
