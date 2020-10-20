import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/woocommerce/auth/service';
import { CartService } from 'src/app/services/woocommerce/cart/service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.page.html',
  styleUrls: ['./app-layout.page.scss'],
})
export class AppLayoutPage implements OnInit {

  cartItemCount: number;
  isAuthenticated: boolean; 
  backButtonSubscription

  constructor(private platform: Platform, private cartService: CartService, private authService: AuthService) { }

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
    this.authService.isAuthenticated().then(data => {
      this.isAuthenticated = data;
    })
    // Subsequent times
    this.cartService.cart.subscribe(data => {
      this.cartItemCount = data;
    });
    this.authService.authenticated.subscribe(res => {
      this.isAuthenticated = res;
    })
  }
}
