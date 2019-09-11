import { PipeTransform, Pipe } from '@angular/core';
import  * as moment from 'moment'

@Pipe({
    name : 'appMoment'
})

export class MoMentPipe implements PipeTransform {

    transform( value : string , formatFrom: string , formatTo : string = 'DD.MM.YYYY' ): any {
     
        return moment(value , formatFrom).format(formatTo); ;
    }
}