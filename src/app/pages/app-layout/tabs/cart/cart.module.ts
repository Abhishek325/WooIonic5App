import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { AddToCartComponent } from 'src/app/components/product/add-to-cart/add-to-cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule
  ],
  declarations: [CartPage, ToolbarComponent, AddToCartComponent]
})
export class CartPageModule {}
