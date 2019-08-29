import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})


export class AuthGuard  implements CanActivate , CanActivateChild{

    constructor(private authService: AuthService , private router : Router) {

    }

    canActivate( route : ActivatedRouteSnapshot,  state : RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

            return this.authService.isLoggedIn().then( (value)=>{
               
                if(value){
                    return true;
                }else{
                    this.router.navigate(['/']);
                    return false
                }
            });

           
    }

    canActivateChild(route : ActivatedRouteSnapshot,  state : RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            return  true;
    }
}