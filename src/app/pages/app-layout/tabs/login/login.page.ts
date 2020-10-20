import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/ui-controllers/toast.service';
import { Token } from 'src/app/services/woocommerce/auth/interface';
import { AuthService } from 'src/app/services/woocommerce/auth/service';
import { CustomerService } from 'src/app/services/woocommerce/customer/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token: Token;
  returnUrl: string;
  loading = false;

  constructor(private authservice: AuthService, private router: Router, private activatedRute: ActivatedRoute, private toastService: ToastService, private storageService: StorageService, private customerService: CustomerService) { }

  authenticate(userId: string, password: string) {
    if (!userId || !password) {
      this.toastService.presentToast("Please fill in both the fields");
      return;
    }
    this.loading = true;
    this.authservice.getAuthToken({ username: userId, password: password }).subscribe(data => {
      this.token = data;
      this.authservice.authenticated.emit(true);
      this.customerService.getCustomer(this.token.user_email).subscribe(d => {
        this.loading = false;
        this.storageService.set('user', d['customer']);
        this.router.navigate(['/home/home'], { replaceUrl: true });
      });
    }, err => {
      console.log(err.error.message);
      this.loading = false;
      this.toastService.presentToast(err.error.message, 5000);
    });
  }

  ngOnInit() {
  }

}
