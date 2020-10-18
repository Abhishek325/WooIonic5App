import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppLayoutPageRoutingModule } from './app-layout-routing.module';

import { AppLayoutPage } from './app-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppLayoutPageRoutingModule
  ],
  declarations: [AppLayoutPage]
})
export class AppLayoutPageModule {}
