import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Customer, CustomerOrder } from 'src/app/services/woocommerce/customer/interface';
import { CustomerService } from 'src/app/services/woocommerce/customer/service';
import { OrderService } from 'src/app/services/woocommerce/order/service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {

  user: Customer;
  orders: CustomerOrder[] = [];
  loading = true;

  constructor(private orderService: OrderService, private storageService: StorageService) { }
  
  getOrderList() {
    return this.storageService.get('user').then(data => {
      this.user = data;
      this.orderService.getOrderListForCustomerId(this.user.id).subscribe(d => {
        this.loading = false;
        this.orders = d['orders'];
      });
    });
  }

  doRefresh($event) {
    this.getOrderList().then(data => {
      $event.target.complete();
    });
  }

  ngOnInit() {
    this.getOrderList().then(data => { });
  }

}
