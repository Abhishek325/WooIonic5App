import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { ToastService } from 'src/app/services/ui-controllers/toast.service';
import { Product } from 'src/app/services/woocommerce/product/interface';
import { ProductService } from 'src/app/services/woocommerce/product/service';

@Component({
  selector: 'app-all-products-list',
  templateUrl: './all-products-list.component.html',
  styleUrls: ['./all-products-list.component.scss'],
})
export class AllProductsListComponent implements OnInit {

  currentPage = 1;
  products: Product[] = [];
  isLoading = true;

  constructor(private productService: ProductService, private contextService: ContextService, private toastService: ToastService) { }

  loadData(event) {
    if(event==null) this.currentPage = 1;
    else {
      this.currentPage++;
      this.productService.getAllProducts(this.currentPage).subscribe(data => {
        this.products.push(...data);
        if(event!=null) event.target.complete();
        if(data.length<10) {
          this.toastService.presentToast("You have scrolled through all products!");
          event.target.disabled = true;
        }
      });
    }
  }

  ngOnInit() {
    this.productService.getAllProducts(this.currentPage).subscribe(data => {
      this.products  = data;
      this.contextService.products = data;
      this.isLoading = false;
    });
  }

}
