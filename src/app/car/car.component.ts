import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnDestroy {

  

  title = 'My Car Header';
  isCarVisible: boolean;
  carName: string;

  constructor(private carService: CarService) { }

  ngOnInit() {

   this.isCarVisible =  this.carService.getVisibility();
   this.carService.getCarName().subscribe( (name)=>{
      this.carName = name;
    })
  }

ngOnDestroy(){

}

}
