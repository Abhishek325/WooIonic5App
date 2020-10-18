import { Component, Input, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Product } from 'src/app/services/woocommerce/product/interface';
import { ProductService } from 'src/app/services/woocommerce/product/service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss'],
})
export class RelatedProductsComponent implements OnInit {

  @Input() product: Product;
  relatedItems: Product[] = [];

  constructor(private contextService: ContextService, private prooductService: ProductService) { }

  ngOnInit() {
    this.product.related_ids.forEach(id => {
      if (id) {  
        const productFromContext = this.contextService.products.find(item => item.id === id);
        if(!productFromContext) {
          this.prooductService.getProduct(id).subscribe(data => {
            this.contextService.products.push(data);
            this.relatedItems.push(data);
          });
        } else this.relatedItems.push(productFromContext);
      }
    });
  }

}
