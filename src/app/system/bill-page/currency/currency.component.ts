import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  @Input() currency:any[];
  currencies: string[] = ['USD', 'EUR'];
  date = new Date();
  carrencyValues = {}

  constructor() { }

  ngOnInit() {

    

    this.currency.reduce( (acum , current, index)=>{
        acum[current.ccy] = current;
        return acum;
    },this.carrencyValues)


  }

}
