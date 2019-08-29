import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-add-ser-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarSerComponent implements OnInit {

  carName:string;

  constructor(private carService : CarServiceService) { }

  ngOnInit() {
  }
  
  addCar(){
   
    this.carService.addCar(this.carName);
    this.carName = '';
  }

}
