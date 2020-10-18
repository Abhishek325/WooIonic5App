import { Category } from './interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories() {
    return this.httpClient.get<Category[]>('products/categories');
  }

  getSingleCategory(id: number) {
    return this.httpClient.get(`products/categories/${id}`);
  }
}
