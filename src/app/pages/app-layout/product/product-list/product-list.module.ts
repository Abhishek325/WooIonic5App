import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { SegmentViewComponent } from 'src/app/components/category/segment-view/segment-view.component';
import { ItemComponent } from 'src/app/components/product/item/item.component';
import { AddToCartComponent } from 'src/app/components/product/add-to-cart/add-to-cart.component';
import { SearchComponent } from 'src/app/components/toolbar/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListPageRoutingModule
  ],
  declarations: [ProductListPage, ToolbarComponent, SearchComponent, SegmentViewComponent, ItemComponent, AddToCartComponent]
})
export class ProductListPageModule {}
