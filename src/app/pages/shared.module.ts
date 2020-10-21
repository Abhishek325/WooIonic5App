import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddToCartComponent } from '../components/product/add-to-cart/add-to-cart.component';
import { ItemComponent } from '../components/product/item/item.component';
import { SearchComponent } from '../components/toolbar/search/search.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
    ],
    declarations: [ToolbarComponent, ItemComponent, SearchComponent, AddToCartComponent],
    exports: [ToolbarComponent, ItemComponent, SearchComponent, AddToCartComponent]
})
export class SharedModule { }