import { Injectable } from '@angular/core';
import { Observable, of , from} from 'rxjs';
import { delay } from 'rxjs/operators'

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

  getCarName(): Observable<string>{
    return of('Mazda').pipe(
        delay(2000)
    )
  }
}
