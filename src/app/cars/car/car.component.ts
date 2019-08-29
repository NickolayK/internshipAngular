import { Component, OnInit, Input, ContentChild, ElementRef ,SimpleChanges, OnChanges, AfterViewInit, AfterContentInit, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit ,
 OnChanges,
  AfterContentInit,DoCheck,AfterContentChecked,
  AfterViewInit,AfterViewChecked, OnDestroy {
@Input() car: {name : string , year: number};
@ContentChild('heading', {static:true}) heading:ElementRef
@Input() name: string;
  constructor() { 
   console.log('constructor')
  }

  // dummyText(){
  //   return ' text'
  // }
  ngOnInit() {
    console.log('onInit')
  }
ngOnChanges(changes :SimpleChanges){
  console.log('ngOnChanges',changes)
}
ngDoCheck(){
  console.log('doCheck')
}
ngAfterContentInit(){
  console.log('afterContentInit')
}
ngAfterContentChecked(){
  console.log('afterContentCheck')
}
ngAfterViewInit(){
  console.log('afterViewInit');
}
ngAfterViewChecked(){
  console.log('afterViewCheck')
}
ngOnDestroy(){
  console.log('ondestroy')
}

}
