import { Product, Review, Variation } from './interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(pageNumber: number) {
    return this.httpClient.get<Product[]>(`products?per_page=10&order=asc&page=${pageNumber}`);
  }

  getAllProductsForCategory(id: number) {
    return this.httpClient.get<Product[]>(`products?category=${id}&per_page=100&order=asc`);
  }

  // Not used currently
  getProduct(id: number) {
    return this.httpClient.get<Product>(`products/${id}`);
  }

  getProductReviews(id: number) {
    return this.httpClient.get<Review[]>(`products/reviews?product=${id}`);
  }

  getAllVariations(id: number) {
    return this.httpClient.get<Variation[]>(`products/${id}/variations?per_page=20`);
  }

  getVariation(id: number, variationId: number) {
    return this.httpClient.get<Variation>(`products/${id}/variations/${variationId}`);
  }
}
