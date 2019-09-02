import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 private isCarVisible = true;

  constructor() { }

  getVisibility(){
    return this.isCarVisible;
  }

  showCar(){
    this.isCarVisible = true;
  }

  hideCar(){
    this.isCarVisible = false;
  }
}
