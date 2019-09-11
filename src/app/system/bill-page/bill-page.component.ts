import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { combineLatest, Subscription } from 'rxjs';

import { delay } from 'rxjs/operators';
import { Bill } from '../shared/models/bill.model';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  subscription2:Subscription;
  currency: any;
  bill: Bill;
  isLoaded = false;

  constructor(private billService: BillService) { }

  ngOnInit() {
   this.subscription = combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe( res=>{
      this.bill = res[0];
      this.currency = res[1];
      this.isLoaded = true;
    })
  }

  onRefresh() {
   this.isLoaded = false;
   this.subscription2 = this.billService.getCurrency().pipe(
     delay(2000)
   )
    .subscribe( (currency:any)=>{
      this.currency = currency;
      this.isLoaded = true;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

    if(this.subscription2){
      this.subscription2.unsubscribe();
    }

  }
}
