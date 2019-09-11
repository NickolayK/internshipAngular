import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { CategoryService } from '../shared/services/categories.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  categories: Category[];
  isLoaded = false;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {

    this.categoryService.getCategories()
    .subscribe( categories => {
      this.categories = categories;
      this.isLoaded = true;
    })
    
  }

  categoryWasEdited(category:Category) {
   const index = this.categories.findIndex( c=>{
     return c.id === category.id;
   });
   this.categories[index] = category;
  }

  newCategoryAdded(category: Category) {
    this.categories.push(category);
    console.log(category)
  }

}
