import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductViewPageRoutingModule } from './product-view-routing.module';

import { ProductViewPage } from './product-view.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { ReviewComponent } from 'src/app/components/product/review/review.component';
import { IonicRatingModule } from 'ionic4-rating';
import { AddToCartComponent } from 'src/app/components/product/add-to-cart/add-to-cart.component';
import { VariationOptionsComponent } from 'src/app/components/product/variation-options/variation-options.component';
import { SearchComponent } from 'src/app/components/toolbar/search/search.component';
import { RelatedProductsComponent } from 'src/app/components/product/related-products/related-products.component';
import { ItemComponent } from 'src/app/components/product/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    ProductViewPageRoutingModule
  ],
  declarations: [ProductViewPage, ToolbarComponent, SearchComponent, ReviewComponent, AddToCartComponent, VariationOptionsComponent,
    RelatedProductsComponent, ItemComponent]
})
export class ProductViewPageModule { }
