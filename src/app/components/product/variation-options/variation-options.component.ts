import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, Variation } from 'src/app/services/woocommerce/product/interface';

@Component({
  selector: 'app-variation-options',
  templateUrl: './variation-options.component.html',
  styleUrls: ['./variation-options.component.scss'],
})
export class VariationOptionsComponent implements OnInit {

  @Input() product: Product
  @Input() variations: Variation[]
  @Output() selectedVariation = new EventEmitter<Variation>();
  selectedVariationOptions: object[] = [];

  constructor() { }

  onVariationSelected(i: string, $event) {
    if (!this.selectedVariationOptions.includes($event.detail.value)) {
      this.selectedVariationOptions[i] = $event.detail.value;
    }
    if (Object.keys(this.selectedVariationOptions).length === this.product.attributes.filter(item =>
        item.name !== 'unit' && item.visible).length) {
      let tempArr = this.variations;
      const selectedVariationOptions = this.selectedVariationOptions;
      Object.keys(this.selectedVariationOptions).forEach(item => {
        const result = tempArr.filter(x => x.attributes.find(a => a.name === item && a.option === selectedVariationOptions[item]));
        if (result.length > 0) {
          tempArr = result;
        }
      });
      // const itemVariation = this.cartService.cartItems.find(item =>
      //     item.product_id === this.product.id &&
      //     item.variation_id === tempArr[0].id);

      // this.quantity = itemVariation ? itemVariation.quantity : 0;
      this.selectedVariation.emit(tempArr[0]);
    }
  }

  ngOnInit() {}

}
