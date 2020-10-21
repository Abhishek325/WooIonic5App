import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductViewPageRoutingModule } from './product-view-routing.module';

import { ProductViewPage } from './product-view.page';
import { ReviewComponent } from 'src/app/components/product/review/review.component';
import { IonicRatingModule } from 'ionic4-rating';
import { VariationOptionsComponent } from 'src/app/components/product/variation-options/variation-options.component';
import { RelatedProductsComponent } from 'src/app/components/product/related-products/related-products.component';
import { SharedModule } from 'src/app/pages/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    SharedModule,
    ProductViewPageRoutingModule
  ],
  declarations: [ProductViewPage, ReviewComponent, VariationOptionsComponent,
    RelatedProductsComponent]
})
export class ProductViewPageModule { }
