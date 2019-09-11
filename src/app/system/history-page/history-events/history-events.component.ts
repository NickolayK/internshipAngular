import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { EventModel } from '../../shared/models/event.model';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Input() events: EventModel[] = [];

  searchTerm = '';
  searchPlaceHolder = 'Сумма';
  searchField = 'amount';

  constructor() { }

  ngOnInit() {

    this.events.forEach( (e) => {
     
     e.catName = this.categories.find( cat =>{
          return cat.id === e.category
      }).name
    })
  }

  getEventClass(e:EventModel) {
      return {
        'label' : true,
        'label-danger' : e.type === 'outcome',
        'label-success': e.type === 'income'

      }
  }
  
  onSearch() {
    console.log(this.searchTerm)
  }

  changeCriteria(field:string) {

    const namesMap = {
      amount : 'Сумма',
      date : 'Дата',
      category : 'Категория',
      type: 'Тип'
    }
    this.searchPlaceHolder = namesMap[field];
    this.searchField = field;
  }

}
