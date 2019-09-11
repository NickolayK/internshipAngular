import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventService } from '../../shared/services/event.service';
import { CategoryService } from '../../shared/services/categories.service';
import { mergeMap } from 'rxjs/operators';
import { EventModel } from '../../shared/models/event.model';
import { Category } from '../../shared/models/category.model';
import { Subscription } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {

  id:number;
  isLoaded = false;
  event:EventModel;
  category: Category;
  sub1: Subscription;

  constructor(
     private route: ActivatedRoute ,
     private router: Router,
     private eventService:EventService,
     private categoryService: CategoryService,
     private _location: Location
     ) {

   }

  ngOnInit() {
   this.sub1 = this.route.params.pipe(
      mergeMap( (params: Params)=>{
       return this.eventService.getEventById(params['id'])
      }),
      mergeMap( (event:EventModel) => {
        this.event = event;
        return this.categoryService.getCategoryById(event.category);
      } )
    )
    .subscribe( (category: Category)=>{
       this.category = category;
       this.isLoaded = true;
    })
  }

  backToPrevious() {
    this._location.back();
  }
  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
