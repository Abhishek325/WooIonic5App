import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WpPagePageRoutingModule } from './wp-page-routing.module';

import { WpPagePage } from './wp-page.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WpPagePageRoutingModule
  ],
  declarations: [WpPagePage]
})
export class WpPagePageModule {}
