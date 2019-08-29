import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter',
  pure : true
})
export class CustomFilterPipe implements PipeTransform {

  transform(carlist: any, search:string , field : string): any {
    if(!search){
      return carlist
    }
    console.log('transormPipe')
    return carlist.filter( (car:string)=> {
       return car[field].toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
 
    })
  }

}
