import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CardViewComponent } from 'src/app/components/category/card-view/card-view.component';
import { AllProductsListComponent } from 'src/app/components/product/all-products-list/all-products-list.component';
import { SharedModule } from 'src/app/pages/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CardViewComponent, AllProductsListComponent]
})
export class HomePageModule {}
