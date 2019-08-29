import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from './http.service';


interface Car {
  
    name: string,
    color: string,
    id?: number
  
}

@Component({
  selector: 'app-practice-http',
  templateUrl: './practice-http.component.html',
  styleUrls: ['./practice-http.component.scss']
})
export class PracticeHttpComponent implements OnInit ,OnDestroy {


  cars: Car[] = []
  name = '';
  color = ''
  colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'brown',
    'pink'
  ]
  title:any;
  constructor( private httpService : HttpService) { }

  ngOnInit() {
   this.getTitle()
   
  }

  getRandomColor(){
    const number = Math.round( Math.random() * 5);
    return this.colors[number]
  }
  setColor(car:Car){
    const color = this.getRandomColor();
    this.httpService.updateCar(color ,car).subscribe( res=>{
        console.log(res)
    })
  }

  getCars(){
    this.httpService.getCars().subscribe( (res:Car[])=>{
      this.cars = res;
    }, (err)=>{
      console.log(err)
    })
  }

  getTitle(){

    this.title = this.httpService.getTitle();
    
  }
  addCar(){
    const car =   {
      "name": this.name,
      "color": this.color

    }
    this.httpService.addCar(car).subscribe( res=>{
        this.cars.push(res)
    })
  }
  deleteCar(car:Car){
    this.httpService.deleteCar(car.id).subscribe( res=>{
      const index = this.cars.indexOf(car);
      this.cars.splice(index, 1);
    })
  }
  ngOnDestroy(){
    
  }
}
