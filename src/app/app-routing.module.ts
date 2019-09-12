import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules} from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';




const routes: Routes = [
{
  path:'' , redirectTo: 'login', pathMatch:'full'
},
{
  path: 'system' ,loadChildren : './system/system.module#SystemModule'
},
{ path: '**'  ,component : NotFoundComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes , { preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
