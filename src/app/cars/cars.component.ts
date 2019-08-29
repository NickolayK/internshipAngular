import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit{




  cars: Array<{name : string , year: number}>= [
    {
      name :'Ford',
      year : 2015
    }
  ]

  constructor() { 


  }

  clear(){
    this.cars = []
  }
  change(){
    this.cars[0].name = 'sdasds'
  }
  // onKeyUp(event: Event){
  //     this.inputText = (<HTMLInputElement>event.target).value
  // }

  updateCarList( car:{name : string , year: number}){    
      this.cars.push( car);
  }
  // onKeyUpWithReference(elem :HTMLInputElement){
  //   this.inputText = elem.value;
  // }
  ngOnInit() {
   
  }

}
