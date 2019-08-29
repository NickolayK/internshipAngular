import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  
  carYear= 2017;

  @Output() onAddCar = new EventEmitter<{name:string,year: number}>();
  @ViewChild('carNameInput' , { static :true}) carName:ElementRef
  constructor() { }

  ngOnInit() {
    
   
  }
  addCar(){
     
    const car = {name : this.carName.nativeElement.value, year : +this.carYear}
    this.onAddCar.emit(car);
    this.carName.nativeElement.value = '';
    this.carYear = 2017;
}
}
