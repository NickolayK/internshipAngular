import { Injectable } from '@angular/core';

import { BaseApi } from 'src/app/shared/services/base-api';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable()

export class CategoryService extends BaseApi {

    constructor(public http:HttpClient){
        super(http);
    }

    getCategories(): Observable<Category[]> {
       return  this.get('categories')
    }

    addCategory(category: Category): Observable<Category> {
        return this.post('categories', category);
    }

    updateCategory(category: Category): Observable<Category> {
        return this.put(`categories/${category.id}` , category)
    }

    deleteCtegory() {

    }

    getCategoryById(id:number) {
       return this.get(`categories/${id}`);
    }

}