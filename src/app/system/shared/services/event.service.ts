import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from 'src/app/shared/services/base-api';
import { EventModel } from '../models/event.model';
import { Observable } from 'rxjs';

@Injectable()

export class EventService extends BaseApi {

    constructor(public http:HttpClient){
        super(http)
    }

addEvent(event:EventModel): Observable<EventModel> {
   return this.post('events', event);
}

getEvents(): Observable<EventModel[]>  {
    return this.get('events');
} 

getEventById(id:string):Observable<EventModel>{
  return  this.get(`events/${id}`);
}

}