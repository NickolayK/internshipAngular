import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarRoutingService {

  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2017,
      color: 'red'
    },
    {
      name: 'Audi',
      id: 2,
      year: 2010,
      color: 'blue'
    },
    {
      name: 'Bmw',
      id: 3,
      year: 2012,
      color: 'red'
    },
    {
      name: 'Mercedes',
      id: 4,
      year: 2017,
      color: 'green'
    }
  ]

  getCarById(id:number){
    let carValue ;
    this.cars.forEach( car =>{
     if ( car.id === id ) {
       carValue = car
     }
    });
    return carValue;
  }
}
