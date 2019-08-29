import { Component, OnInit, Input } from '@angular/core';
import { CarServiceService } from '../car-service.service'

@Component({
  selector: 'app-service-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarServComponent implements OnInit {

@Input() car : { name: string , isSold: boolean}

  constructor(private carService : CarServiceService) { }

  ngOnInit() {
  }
  onAction(action:string){
    // console.log(`${this.car.name} status =${ action}`)
    this.carService.printToConsole(`${this.car.name} status =${ action}`)
    this.car.isSold = action ==='buy'? true :false;
  }

  getClass(){
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    }
  }

}
