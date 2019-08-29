import { Component, OnInit } from '@angular/core';
import { CarServiceService } from './components/car-service.service';

@Component({
  selector: 'app-practice-with-services',
  templateUrl: './practice-with-services.component.html',
  styles: []
})
export class PracticeWithServicesComponent implements OnInit {

  constructor(private carService : CarServiceService) { }

  cars: Array<{ name:string ,isSold :boolean }> = []; 



  ngOnInit() {
   this.cars = this.carService.cars
  }

}
