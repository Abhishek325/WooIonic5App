import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerOrder } from '../customer/interface';
import { Order } from './interface';

@Injectable({providedIn: 'root'})

export class OrderService {
    constructor(private httpClient: HttpClient) { }

    createOrder(order: Order) {
        return this.httpClient.post('orders', order);
    }

    getOrderListForCustomerId(id: number) {
        return this.httpClient.get<CustomerOrder[]>(`customers/${id}/orders`);
      }
}