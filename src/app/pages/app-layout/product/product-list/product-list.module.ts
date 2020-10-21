import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';
import { SegmentViewComponent } from 'src/app/components/category/segment-view/segment-view.component';
import { SharedModule } from 'src/app/pages/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProductListPageRoutingModule
  ],
  declarations: [ProductListPage, SegmentViewComponent]
})
export class ProductListPageModule {}
