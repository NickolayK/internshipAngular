import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill:Bill;
  @Input() currency:any[];

  usd:number;
  euro:number

  constructor() { }

  ngOnInit() {


    this.currency.forEach( value =>{
        if(value['ccy'] === 'EUR'){
          this.euro = (this.bill.value / value['sale']) ;
        }
        if(value['ccy'] === 'USD'){
          this.usd = (this.bill.value / value['sale']);
        }
    })
  }

}
