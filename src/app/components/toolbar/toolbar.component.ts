import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/woocommerce/cart/service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Input() title: string
  showSearchIcon = false;
  showSearchToolbar = false;
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    const path = window.location.pathname;
    if(path.includes("product")) this.showSearchIcon = true;
  }

}
