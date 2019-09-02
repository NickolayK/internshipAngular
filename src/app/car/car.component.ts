import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  

  title = 'My Car Header';
  isCarVisible: boolean;

  constructor(private carService: CarService) { }

  ngOnInit() {

   this.isCarVisible =  this.carService.getVisibility();

  }

}
