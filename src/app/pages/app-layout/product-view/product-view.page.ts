import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContextService } from 'src/app/services/context.service';
import { Product, Variation } from 'src/app/services/woocommerce/product/interface';
import { ProductService } from 'src/app/services/woocommerce/product/service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage {

  product: Product;
  variations: Variation[]=[];
  selectedVariation: Variation;

  constructor(private route: ActivatedRoute, private productService: ProductService, private contextService: ContextService) { }

  setVariation(data) {
    this.selectedVariation = data;
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe(paramMap => {
      this.product = this.contextService.getProductById(parseInt(paramMap.get('id'), 10));
      if (!this.product) {
        this.productService.getProduct(parseInt(paramMap.get('id'), 10)).subscribe(data => {
          this.product = data;
          this.contextService.products.push(this.product);
          this.productService.getAllVariations(this.product.id).subscribe(data =>{ 
            this.variations = data;
          });
        });
      } else {
        this.productService.getAllVariations(this.product.id).subscribe(data =>{ 
          this.variations = data;
        });
      }
    });
  }

}
