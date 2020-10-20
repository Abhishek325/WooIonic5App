import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/ui-controllers/toast.service';
import { Customer } from 'src/app/services/woocommerce/customer/interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  user: Customer;

  constructor(private storageService: StorageService, private toastService: ToastService,) { }

  ngOnInit() {
    this.storageService.get('user').then(data => {
      this.user = data;
    }).catch(err => {
      console.log(err);
      this.toastService.presentToast(err);
    });
  }

}
