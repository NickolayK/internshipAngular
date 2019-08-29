import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ]
  constructor() { }

  getCars(){
    return this.cars.slice();
  }

  addCar(name: string){
    this.cars.push({ name , isSold: false})
  }

  printToConsole(text:string){
      console.log(text);
  }
}
