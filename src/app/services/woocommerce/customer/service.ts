import { Customer, CustomerOrder, User } from './interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  signupUser(customer: User) {
    return this.httpClient.post<any>(`customers`, customer);
  }

  getCustomer(email: string) {
    return this.httpClient.get<Customer>(`customers/email/${email}`);
  }

  getCustomerOrders(id: number) {
    return this.httpClient.get<CustomerOrder[]>(`customers/${id}/orders`);
  }
}
