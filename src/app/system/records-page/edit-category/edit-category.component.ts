import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';
import { Message } from 'src/app/shared/models/message.model';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
  animations: [
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
export class EditCategoryComponent implements OnInit, OnDestroy{

  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>()

  
  currentCategoryId: number;
  currentCategory:Category;
  message: Message;
  sub1: Subscription;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.currentCategory = this.categories[0];
    this.currentCategoryId = this.currentCategory.id;
    this.message = new Message('' , 'danger');
  }

  onCategoryChange(){
    this.currentCategory = this.categories
    .find( category =>{
        return category.id === +this.currentCategoryId;
    })
  }

  private showMessage(text: string , type: string = 'danger')  {
    this.message = new Message(text , type);
    setTimeout(() => {
        this.message.text = '';
    }, 5000);
  }

  onSubmit(form: NgForm) {
    let {capacity,name} = form.value;
    if (capacity < 0){
        capacity *= -1;
    }

  
    const category = new Category(name, capacity);
    category.id = this.currentCategory.id;
   this.sub1 =  this.categoryService.updateCategory(category).subscribe(
      res=>{
        console.log(res)
        this.onCategoryEdit.emit(res);
        this.showMessage('Изменения сохранены', 'success');
      } 
    )

  }

  ngOnDestroy(){
   if(this.sub1) this.sub1.unsubscribe();
  }
}
