import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

import { map, debounce, delay } from 'rxjs/operators'
import { catchError } from 'rxjs/operators'
import { Observable, Subject , throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  cars = [];

  constructor(private http : HttpClient) { }


  getCars(): Observable<any>{
    let headers = new HttpHeaders({
      "Custom-Header" : 'Hello'
    })
     headers = headers.append('super', 'headers')
   return this.http.get<any>(
     'http://localhost:3000/cars', { headers}
     ).pipe(
      map( res=>{
        debugger
          return res;
      })
      ,catchError( (err)=> {
        debugger
        return throwError('сервер недоступен');
     })
    )
  }
  getTitle(){
    return this.http.get('http://localhost:3000/title').pipe(
      delay(4444),
      map(  (res: {value:string})=>{
       
          return res.value;
      }),
      catchError(err=>err)
    )
  }

  updateCar(color: string, car:any){
    car.color = color
  return this.http.put('http://localhost:3000/cars/'+car.id,car).pipe(
      map( res=> res)
    )

  }
  deleteCar(id : number){
    return this.http.delete('http://localhost:3000/cars/'+id).pipe(
      map(res=>res)
    );
  }
  addCar(car ):any{
    return this.http.post('http://localhost:3000/cars',car).pipe(
      map( res => res)
    )
  }
}

