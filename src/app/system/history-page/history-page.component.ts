import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../shared/services/categories.service';
import { EventService } from '../shared/services/event.service';
import { combineLatest, Subscription } from 'rxjs';
import { Category } from '../shared/models/category.model';
import { EventModel } from '../shared/models/event.model';
import * as moment from 'moment';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {

  categories:Category[];
  events: EventModel[];
  chartData = [];
  isLoaded = false;
  isFilterVisible = false;
  filteredEvents: EventModel[] =[];

  sub1: Subscription;

  constructor( 
    private categoryService: CategoryService,
    private eventService: EventService
  ) { }

  ngOnInit() {

   this.sub1 = combineLatest(
      this.categoryService.getCategories(),
      this.eventService.getEvents()
    ).subscribe( (res:[Category[], EventModel[]]) => {
      this.categories = res[0];
      this.events = res[1];
      this.isLoaded = true;

      this.setOriginalEvents();
      this.calculateChartData();
    } )

  }

  private setOriginalEvents() {
    this.filteredEvents = this.events.slice()
  }

  calculateChartData():void {
    this.chartData = [] ;
    
    this.categories.forEach( cat => {
        const catEvents = this.filteredEvents.filter( (event) => {
         return  event.category === cat.id && event.type === 'outcome';

        });
        
        this.chartData.push({
          name : cat.name,
          value: catEvents.reduce((accum, current) => {
            return accum + current.amount;
          }, 0)
        });
    });
  }

  private toggleFilterVisibility(dir:boolean) {
    this.isFilterVisible = dir;
  }

  openFilter( ) {
    this.toggleFilterVisibility(true);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  onFilterApply(filterData) {
    
    this.setOriginalEvents();
    this.toggleFilterVisibility(false);

    const startPeriod = moment().startOf(filterData.period).startOf('d');
    const endPeriod = moment().endOf(filterData.period).endOf('d');

    this.filteredEvents = this.filteredEvents.filter( (e)=>{
      return filterData.types.indexOf(e.type) !== -1;
    })
    .filter( e=>{
      return filterData.categories.indexOf(e.category.toString()) !== -1;
    })
    .filter( e=>{
      const momentDate = moment(e.date, 'DD.MM.YYYY HH:mm:ss')
      return momentDate.isBetween(startPeriod , endPeriod)
    });

    this.calculateChartData();
  }

  onFilterCancel() {
    this.setOriginalEvents();
    this.calculateChartData();
    this.toggleFilterVisibility(false);
  }
}
