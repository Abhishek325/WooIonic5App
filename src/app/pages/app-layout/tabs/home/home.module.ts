import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CardViewComponent } from 'src/app/components/category/card-view/card-view.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { AllProductsListComponent } from 'src/app/components/product/all-products-list/all-products-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ToolbarComponent, CardViewComponent, AllProductsListComponent]
})
export class HomePageModule {}
