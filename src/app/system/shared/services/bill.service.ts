import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Bill } from '../models/bill.model';
import { Observable } from 'rxjs';
import { BaseApi } from 'src/app/shared/services/base-api';


@Injectable()

export class BillService extends BaseApi{

    constructor(public http:HttpClient){
        super(http)
    }

    // getBill(): Observable<Bill> {
    //    return this.http.get<Bill>(`http://localhost:3000/bill`).pipe(
    //         map( bill=> bill)
    //     )
    // }
    getBill(): Observable<Bill> {
       return this.get(`bill`)
     }

    updateBill(bill: Bill): Observable<Bill>{
        return this.put(`bill`,bill);
     }
    getCurrency(): Observable<any> {
        return this.http.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`).pipe(
            map( currency=> currency)
        )
    }

}