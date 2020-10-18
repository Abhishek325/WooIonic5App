import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/woocommerce/cart/service';
import { Product, Variation } from 'src/app/services/woocommerce/product/interface';
import { ToastService } from 'src/app/services/ui-controllers/toast.service';

@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {

  @Input() product: Product;
  @Input() selectedVariation: Variation;
  @Input() addToCartText: string;
  @Input() showIcon: boolean;
  @Output() onAdd = new EventEmitter<number>();
  @Output() onRemove = new EventEmitter<number>();

  quantity = 0;

  constructor(private cartService: CartService, private toastService: ToastService) { }

  addItemToCart() {
    this.cartService.addItem(this.product).then(itemAdded => {
      if (!itemAdded) {
        this.toastService.presentToast('Unable to add quantity right now');
      }
      else this.onAdd.emit(this.quantity);
    });
  }

  removeItemFromCart() {
    this.cartService.removeItem(this.product).then(itemRemoved => {
      if (!itemRemoved) {
        this.toastService.presentToast('Unable to remove quantity right now');
      }
      else this.onRemove.emit(this.quantity);
    });
  }

  addVariationToCart(variationId: number) {
    this.cartService.addItem(this.product, variationId).then(itemAdded => {
      if (!itemAdded) {
        this.toastService.presentToast('Unable to add quantity right now');
      }
      else this.onAdd.emit(this.quantity);
    });
  }

  removeVariationFromCart(variationId: number) {
    this.cartService.removeItem(this.product, variationId).then(itemRemoved => {
      if (!itemRemoved) {
        this.toastService.presentToast('Unable to remove quantity right now');
      }
      else this.onRemove.emit(this.quantity);
    });
  }

  ngOnInit() {
    const item = this.cartService.getItem(this.product.id);
    if (item) {
      this.quantity = item.quantity;
    }
    this.cartService.cartDetails.subscribe(data => {
      if (this.selectedVariation) {
        this.quantity = ((data.find(i => i.product_id === this.product.id && i.variation_id === this.selectedVariation.id) || {}).quantity || 0);
      } else {
        this.quantity = ((data.find(i => i.product_id === this.product.id) || {}).quantity || 0);
      }
    });
  }

}
