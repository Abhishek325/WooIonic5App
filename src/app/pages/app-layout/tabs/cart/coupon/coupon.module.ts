import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouponPageRoutingModule } from './coupon-routing.module';

import { CouponPage } from './coupon.page';
import { SharedModule } from 'src/app/pages/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CouponPageRoutingModule
  ],
  declarations: [CouponPage]
})
export class CouponPageModule {}
