import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'powPipe'
})

export class PowPipe implements PipeTransform {

    transform(value:number , pow:number = 1):number{
            return value ** pow;
    }
}