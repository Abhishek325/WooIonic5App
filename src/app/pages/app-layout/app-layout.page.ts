import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CartService } from 'src/app/services/woocommerce/cart/service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.page.html',
  styleUrls: ['./app-layout.page.scss'],
})
export class AppLayoutPage implements OnInit {

  cartItemCount: number;
  backButtonSubscription

  constructor(private platform: Platform, private cartService: CartService) { }

  ionViewDidEnter() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.backButtonSubscription.unsubscribe();
  }

  ngOnInit() {
    this.cartService.getCartItems().then(data => {
      this.cartItemCount = (data || []).length;
    });
    // Subsequent times
    this.cartService.cart.subscribe(data => {
      this.cartItemCount = data;
    });
  }
}
