import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Product } from 'src/app/services/woocommerce/product/interface';
import { ProductService } from 'src/app/services/woocommerce/product/service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage {

  headerTitle: string;
  productList: Product[] = [];

  constructor(private productService: ProductService, private contextService:ContextService) { }

  addItemsToContext() {
    this.productList.forEach(item => {
      if (!this.contextService.products.find(i => i.id === item.id)) {
        this.contextService.products.push(item);
      }
    });
  }

  updateCheckedAttribute() {
    this.productList = [];
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.headerTitle = this.contextService.entityNameSelected;
    const productListInContext = this.contextService.products.filter(item =>
      item.categories.length > 0 && item.categories[0].id === this.contextService.entityIdSelected);

    if (productListInContext.length === this.contextService.categories.find(i => i.id === this.contextService.entityIdSelected).count) {
      this.productList = productListInContext;
    }
    else {
      this.productService.getAllProductsForCategory(this.contextService.entityIdSelected).subscribe(data => {
      this.productList = data;
      this.productList = this.productList.filter(item => item.catalog_visibility !== 'hidden');
      this.addItemsToContext();
      });
    }
  }

}
