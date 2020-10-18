import { Component } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { ActionsheetService } from 'src/app/services/ui-controllers/actionsheet.service';
import { ToastService } from 'src/app/services/ui-controllers/toast.service';
import { CartItem } from 'src/app/services/woocommerce/cart/interface';
import { CartService } from 'src/app/services/woocommerce/cart/service';
import { ProductService } from 'src/app/services/woocommerce/product/service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  cartItems: CartItem[];
  products: any[] = [];
  variationPriceMap: any = [];
  isLoading = false;
  cartTotal = 0;

  constructor(private cartService: CartService, private contextService: ContextService, private woocommerceProductService: ProductService,
    private toastService: ToastService, private actionSheetService: ActionsheetService) { }

  clearItem(id) {
    this.cartService.clearItem(id).then(data => {
      this.toastService.presentToast('We have removed item(s) from your cart that are not available anymore.');
    });
  }

  onItemAdded(quantity: number, id: number) {
    this.updateCartTotals();
  }

  onItemRemoved(quantity: number, id: number) {
    if (quantity == 0)
      this.products = this.products.filter(item => item.meta.id !== id);
    this.updateCartTotals();
  }

  updateCartTotals() {
    let sum = 0;
    this.cartItems.forEach(item => {
      if (typeof (item.variation_id) === 'undefined') {
        sum = sum + parseFloat(this.contextService.products.find(i => i.id === item.product_id).price.toString()) * item.quantity;
      } else {
        sum = sum + parseFloat(this.variationPriceMap.find(i => i.variation_id === item.variation_id).price) * item.quantity;
      }
    });
    this.cartTotal = sum;
    this.cartService.total = this.cartTotal;
  }

  getVariation(item: CartItem) {
    this.isLoading = true;
    this.woocommerceProductService.getVariation(item.product_id, item.variation_id).subscribe(data => {
      const index = this.products.findIndex(d => d.cartInfo.variation_id === item.variation_id);
      this.products[index].meta.price = data.price;
      data.attributes.forEach(element => {
        this.products[index].meta.name += '<br><small>' + element.option + '</small>';
      });
      this.isLoading = false;
      this.cartTotal = parseFloat(this.cartTotal.toString()) + parseFloat(data.price.toString()) * item.quantity;
      // For future adds/removes
      this.variationPriceMap.push({ variation_id: item.variation_id, price: data.price });
    }, err => {
      const product = this.products.find(i => i.meta.id === item.product_id).meta;
      this.products = this.products.filter(i => i.meta.id === item.product_id);
      this.clearItem(item.variation_id)
    });
  }

  ionViewWillEnter() {
    this.cartTotal = 0;
    this.cartItems = this.cartService.cartItems;
    this.cartService.cartItems.forEach(item => {
      const itemMeta = this.contextService.products.find(i => i.id === item.product_id);
      if (!itemMeta || item.variation_id) {
        this.isLoading = true;
        this.woocommerceProductService.getProduct(item.product_id).subscribe(data => {
          this.isLoading = false;
          this.products.push({ meta: data, cartInfo: item });
          if (!item.variation_id) {
            this.contextService.products.push(data);
            this.cartTotal = parseFloat(this.cartTotal.toString()) +
              parseFloat((itemMeta || data).price.toString()) * item.quantity;
          } else {
            this.getVariation(item);
          }
        }, err => {
          this.clearItem(item.product_id);
        });
      } else {
        this.products.push({ meta: itemMeta, cartInfo: item });
        this.cartTotal = parseFloat(this.cartTotal.toString()) +
          parseFloat(itemMeta.price.toString()) * item.quantity;
      }
    });
  }

  ionViewWillLeave() {
    this.products = [];
  }

}
