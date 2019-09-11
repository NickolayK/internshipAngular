import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { EventService } from '../shared/services/event.service';
import { CategoryService } from '../shared/services/categories.service';
import { Bill } from '../shared/models/bill.model';
import { Category } from '../shared/models/category.model';
import { EventModel } from '../shared/models/event.model';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  bill:Bill;
  categories:Category[];
  events:EventModel[];
  isLoaded = false;

  constructor(
    private billService :BillService,
    private eventService: EventService,
    private categoryService: CategoryService
    ) { }

  ngOnInit() {

    this.sub1 =combineLatest(
      this.billService.getBill(),
      this.categoryService.getCategories(),
      this.eventService.getEvents()
      
    ).subscribe( (res:[ Bill,Category[], EventModel[]]) =>{
      this.bill = res[0];
      this.categories = res[1];
      this.events = res[2];
      this.isLoaded = true;
    })

  }

  getCatColorClass(cat: Category): string {
    const persent = this.getPersent(cat);
    return  persent < 60 ? 'success' : persent >= 100 ? 'danger' : 'warning';

  }

  private getPersent(cat: Category):number {
    const percent = ( 100 * this.getCategoryCost(cat)) / cat.capacity;
      return percent > 100 ? 100 : percent;
  }

  getCatPersent(cat:Category): string {
    return this.getPersent(cat) + '%';
  }

  getCategoryCost(cat: Category): number {
    const catEvents = this.events.filter( (e)=>{
        return e.category === cat.id && e.type === 'outcome';
    });
    const totalValue = catEvents.reduce( (acum, current )=>{
         
      return acum + current.amount ;
    } , 0)

    return totalValue;
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
