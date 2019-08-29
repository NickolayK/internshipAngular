import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  headerText = 'создание своей директивы'

  items = [ 1, 2 ,3 , 4 ,5 ];
  current = 1;
 
  onClick(item:number){
    this.current = item;
  }

  cars = [
    {
      name: 'Mazda',
      desc : 'WFM 1'
    },
    {
      name: 'BmW',
      desc : 'WFM 2'
    },
    {
      name: 'Subaru',
      desc : 'WFM 3'
    },
    {
      name: 'Lada',
      desc : 'WFM 4'
    }   

  ]
  filter:string;
//variable for pipe's lessons

name ='WebForMyself';
pi = Math.PI;
money = 350 ;
date = new Date();
amount = 0.45;
object = {
  foo : 'bar',
  baz: 'qux',
  nested: {
      xyz : 3,
      numbers : [1 ,2 ,3]
  }
}
addCar(){
  this.cars.push({name: 'New car', desc : 'Fww'});
}

}
