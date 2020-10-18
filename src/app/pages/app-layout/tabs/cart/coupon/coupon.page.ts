import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/services/woocommerce/coupon/interface';
import { CouponService } from 'src/app/services/woocommerce/coupon/service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {

  coupons: Coupon[];
  isLoading = true;

  constructor(private couponService: CouponService) { }

  ngOnInit() {
    this.couponService.getAllCoupons().subscribe(data => {
      this.coupons = data;
      this.isLoading = false;
    })
  }

}
