import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

   authenticated = true;

isLoggedIn() {

    return new Promise( (res,rej)=>{

        setTimeout(() => {
                res(this.authenticated)
        }, 100);

    })


}


}