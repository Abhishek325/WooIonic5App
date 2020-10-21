import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderListPageRoutingModule } from './order-list-routing.module';

import { OrderListPage } from './order-list.page';
import { SharedModule } from 'src/app/pages/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OrderListPageRoutingModule
  ],
  declarations: [OrderListPage]
})
export class OrderListPageModule {}
