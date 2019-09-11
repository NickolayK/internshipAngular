import { Directive, HostListener, HostBinding } from "@angular/core";


@Directive({
    selector: '[dropDown]'
})

export class DropDownDirective{

   @HostBinding('class.open') isOpen = false;

    @HostListener('click') onClick(){
        this.isOpen = !this.isOpen;
    
    }

}