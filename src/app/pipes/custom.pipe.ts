import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let multiply = args[0]
    return value.map( (item: number) =>{
          return item * multiply;
    })
  }

}
