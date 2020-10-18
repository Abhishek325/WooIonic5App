import { Component, Input, OnInit } from '@angular/core';
import { Product, Review } from 'src/app/services/woocommerce/product/interface';
import { ProductService } from 'src/app/services/woocommerce/product/service';

@Component({
  selector: 'app-product-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

  @Input() product : Product;
  reviews: Review[] = [];
  loading = true;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductReviews(this.product.id).subscribe(data => {
      this.reviews = data;
      this.loading = false;
    });
  }

}
