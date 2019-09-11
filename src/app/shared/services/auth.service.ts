import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    
    private isAuthenticated = false ;


    login(user: User) {
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify( user ));
    }

    logOut() {
        this.isAuthenticated = false;
        localStorage.clear();
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }
}