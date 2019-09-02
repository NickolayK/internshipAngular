import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
    selector:'[colorDirective]'
})

export class ColorDerective {
    colors = ['blue' , 'green' , 'red', 'pink', 'yellow']
    @HostBinding('style.color') color:string
    @HostListener('click') onHostClick(){
        
        let int = Math.floor( Math.random() * 5)
        this.color = 'red'
    }
}