import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { NgForm } from '@angular/forms';
import { EventModel } from '../../shared/models/event.model';
import { EventService } from '../../shared/services/event.service';
import { BillService } from '../../shared/services/bill.service';
import { Bill } from '../../shared/models/bill.model';
import { mergeMap } from 'rxjs/operators';
import { Message } from 'src/app/shared/models/message.model';
import { transition, trigger, style, animate} from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
  animations:[ 
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 }))
      ])
  ])
  ]
})
export class AddEventComponent implements OnInit, OnDestroy {

  initialCategoryId: number;
  message: Message;
  sub1: Subscription;
  sub2: Subscription;

  @Input() categories:Category[] = [];
  types = [
    {
      type: 'income',
      label: 'Доход'
    },
    {
      type: 'outcome',
      label: 'расход'
    }
  ]

  constructor(
    private eventService: EventService,
    private billServise:BillService
    ) { }

  onSubmit(form:NgForm) {
    
    let { description, amount, category, type } = form.value;
    if (amount < 0){
      amount *= -1;
  } 
    const event = new EventModel( 
                                  type,
                                  amount, 
                                  +category,
                                  new Date().toLocaleString(),
                                  description
                                )

   this.sub1 = this.billServise.getBill()
    .subscribe( (bill:Bill)=>{
      let value = 0;
        if (type === 'outcome'){
          if(amount > bill.value){
            this.showMessage(`на счету не достаточно средств, вам не хватает ${  amount -bill.value }`, 'danger')
            return;
          }else{
            value = bill.value - amount;
          }

        } else {
          value = bill.value + amount;
        }

       this.sub2 = this.billServise.updateBill({value , currency : bill.currency}).pipe(
          mergeMap( ()=> {
            return this.eventService.addEvent(event)
          })
        )
        .subscribe( ()=>{
          
          form.form.setValue({
            amount:0,
            description:' ',
            category: this.initialCategoryId,
            type: 'outcome'
          })
        } )

    })

  }

  private showMessage(text: string , type: string = 'danger')  {
    this.message = new Message(text , type);
    setTimeout(() => {
        this.message.text = '';
    }, 5000);
  }
  ngOnInit() {
    this.message = new Message('', 'success')
    this.initialCategoryId = this.categories[0].id;
  }

  ngOnDestroy(){
    if(this.sub1) this.sub1.unsubscribe();
    if(this.sub2) this.sub2.unsubscribe();
  }

}
