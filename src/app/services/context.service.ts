import { Category } from './woocommerce/category/interface';
import { Product } from './woocommerce/product/interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContextService {
    entityNameSelected: string;
    entityIdSelected: number;
    categories: Category[];
    products: Product[] = [];

    getProductById(id: number) {
        return this.products.find(item => item.id === id);
    }
}
