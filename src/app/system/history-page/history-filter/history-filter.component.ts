import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {


  @Output() onFilterCancel = new EventEmitter<any>();
  @Output() onFilterApply = new EventEmitter<any>();
  @Input() categories: Category[] = [];

  selectedPeriod = 'd';
  selectedTypes = [];
  selectedCategories = [];

  timePeriods = [ 
    { type: 'd', label: 'День' },
    { type: 'w', label: 'Неделя' },
    { type: 'M', label: 'Месяц' }
  ]

  types = [
    {type: 'income', label : 'Доход'},
    {type: 'outcome', label : 'Расход'}
  ]

  constructor() { }

  ngOnInit() {
  }

  handleChangeType({checked , value}) {
    this.calculateInputParams( 'selectedTypes' , checked , value);
  }

  handleChangeCategory({checked , value}){
    this.calculateInputParams( 'selectedCategories' , checked , value);
  
  }

  private calculateInputParams(field: string, checked:boolean, value: string){
    if(checked){
      this[field].indexOf(value) === -1 ? this[field].push(value) : null
    }else {
      this[field] = this[field].filter( type =>{
         return type !==value;
      })
    }
  }

  closeFilter() {
    this.selectedCategories = [];
    this.selectedTypes = [];
    this.selectedPeriod = 'd'
    this.onFilterCancel.emit();
  }

  applyFilter() {
    this.onFilterApply.emit({
      types: this.selectedTypes,
      categories: this.selectedCategories,
      period: this.selectedPeriod
    })
  }
}
