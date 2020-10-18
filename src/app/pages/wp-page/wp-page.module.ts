import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WpPagePageRoutingModule } from './wp-page-routing.module';

import { WpPagePage } from './wp-page.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WpPagePageRoutingModule
  ],
  declarations: [WpPagePage, ToolbarComponent]
})
export class WpPagePageModule {}
