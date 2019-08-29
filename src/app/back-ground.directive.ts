import { Directive, HostBinding,  ElementRef , Renderer2, Input, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appBackGround]'
})
export class BackGroundDirective implements OnInit{

@HostBinding('style.color') color: string ;
@HostBinding('style.backgroundColor') backGround: string ;

@Input('appBackGround') colorValue :string;

@HostListener('mouseover' , ['$event'])   onMouseOver(event : Event) {
  this.color = 'red';
  // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'yellow');
  this.backGround = this.colorValue
}
@HostListener('mouseleave')   onMouseLeave() {
  // this.renderer.setStyle(this.elRef.nativeElement , 'background-color', 'transparent');
  this.color = 'green'
  this.backGround = 'transparent';
}

  constructor(private elRef : ElementRef ,  private renderer: Renderer2) { 
    
   
    
  }



  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, "font-weight", "bold");
  }
}
