import { StorageService } from 'src/app/services/storage.service';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { CartItem } from './interface';
import { Product } from '../product/interface';
import { iif } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    cartItems: CartItem[] = [];
    total: number;
    @Output() cart: EventEmitter<number> = new EventEmitter();
    @Output() cartDetails: EventEmitter<any> = new EventEmitter();

    constructor(private storageService: StorageService) {
        this.getCartItems().then(data => {
            this.cartItems = data || [];
        });
    }

    getCartItems() {
        return this.storageService.get('cart');
    }

    getItem(productId: number, variationId?: number): CartItem {
        if (this.cartItems == null) {
            return null;
        }
        if (this.cartItems.length > 0) {
            return this.cartItems.find(item => item.product_id === productId && item.variation_id === (variationId || item.variation_id));
        }
    }

    addItem(product: Product, variationId?: number): Promise<boolean> {
        const existingItem = this.getItem(product.id, variationId);
        if (existingItem) {
            this.cartItems.find(item =>
                item.product_id === product.id &&
                item.variation_id === (variationId || item.variation_id)).quantity += this.getQtyIncrementSeedForProduct(product);
        } else {
            this.cartItems.push({
                product_id: product.id,
                quantity: this.getMinQtyForProduct(product),
                variation_id: (variationId || undefined)
            });
        }
        return this.syncCartToStorage();
    }

    removeItem(product: Product, variationId?: number): Promise<boolean> {
        const item = this.getItem(product.id, variationId);
        if (item.quantity > this.getMinQtyForProduct(product)) {
            this.getItem(product.id, variationId).quantity -= this.getQtyIncrementSeedForProduct(product);
        } else {
            if (variationId) {
                this.cartItems = this.cartItems.filter(i => i.variation_id !== variationId);
            } else {
                this.cartItems = this.cartItems.filter(i => i.product_id !== product.id);
            }
        }
        return this.syncCartToStorage();
    }

    clearItem(variationId: number): Promise<boolean> {
        this.cartItems = this.cartItems.filter(i => i.variation_id !== variationId);
        return this.syncCartToStorage();
    }

    emptyCart() {
        this.cartItems = [];
        return this.syncCartToStorage();
    }

    private syncCartToStorage(): Promise<boolean> {
        return this.storageService.remove('cart').then(response => {
            return this.storageService.set('cart', this.cartItems).then(data => {

                // Update all listeners about item getting added/removed
                this.cart.emit(this.cartItems.length);
                this.cartDetails.emit(this.cartItems);

                return true;
            });
        }).catch(err => {
            return false;
        });
    }

    getMinQtyForProduct(product: Product) {
        const qty = product.attributes.find(attr => attr.name === 'minimum-quantity');
        if (qty) {
            return parseFloat(qty.options[0]);
        }

        return 0.5;
    }

    getQtyIncrementSeedForProduct(product: Product) {
        const qtySeed = product.attributes.find(attr => attr.name === 'quantity-increment');
        if (qtySeed) {
            return parseFloat(qtySeed.options[0]);
        }
        return 0.5;
    }
}
