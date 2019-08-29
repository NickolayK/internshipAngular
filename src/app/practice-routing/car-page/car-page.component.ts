import { Component, OnInit } from '@angular/core';
import { CarRoutingService } from '../car-routing.service'
@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {

  cars =[];
  constructor(private carService:CarRoutingService) { }

  ngOnInit() {
    this.cars = this.carService.cars;
  }

}
