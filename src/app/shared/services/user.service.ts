import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../models/user.model';
import { BaseApi } from './base-api';

@Injectable({
    providedIn : 'root'
})

export class UserService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }

// getUserByEmail(email:string): Observable<User> {
//   return  this.http.get<User>(`http://localhost:3000/users?email=${email}`).pipe(
//       map( (data:User)=> {
//           return data[0] ?  data[0] : undefined ;
//       })
//   )
// }

    getUserByEmail(email:string): Observable<User> {
            return this.get(`users?email=${email}`).pipe(
                map( (users: User[]) =>{
                    return users[0] ?  users[0] : undefined ;
                })
            )
    }
// createNewUser(user:User): Observable<User> {
//    return this.http.post(`http://localhost:3000/users`, user).pipe(
//     map( (data:User)=>{
//             return data;
//     })
// );
// }

    createNewUser(user:User): Observable<User> {
        return this.post(`users`, user)
    }
}