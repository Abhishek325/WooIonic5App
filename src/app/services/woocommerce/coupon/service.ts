import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Coupon } from './interface';

@Injectable({
    providedIn: 'root'
})
export class CouponService {

    constructor(private httpClient: HttpClient) { }

    getAllCoupons() {
        return this.httpClient.get<Coupon[]>(`coupons`);
    }
}