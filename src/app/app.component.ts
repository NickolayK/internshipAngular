import { Component } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { divTrigger, changeWithTriger } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width :'150px',
        height : '150px'
      })),
      state('end', style({
        backgroundColor: 'yellow',
        width :'250px',
        height : '250px'
      })),

      state('active', style({
        backgroundColor: 'green',
        width :'170px',
        height : '170px'
      })),
      transition('start <=> end', [
        animate(3000)
      ]),

      transition('start => active', [
        animate(400)
      ]) ,  
      transition('active => end', [
        animate(2600)
      ])  
    ]),
    trigger('multi' , [
      state( 'start' , style({
        width: '150px',
        height: '150px',
        border: '5px solid black'
      })),
      state('end' , style({
        width: '170px',
        height: '170px',
        background: 'blue'
      })),
      transition('start <=> end' , [
        style({
          background :'red'
        }),
        animate(1500 ,style({
          background : 'yellow'
        })),
        animate(1000 , style({
          width : '200px',
          height : '200px'
        })),
        animate(1000)
      ])
    ]),
    divTrigger,
  changeWithTriger]
})
export class AppComponent {

  clickedDivState = 'start';
  multi = 'start';
  isVisible = false;
  triggerAnimation(){

      this.clickedDivState= 'end'
    
    setTimeout(() => {
      this.clickedDivState = 'start'
    }, 3000);
  }
  onStart(event: AnimationEvent){
    console.log(event)
  }
  onEnd(event: AnimationEvent){
    console.log(event)
  }

}
