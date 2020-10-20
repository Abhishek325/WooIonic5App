import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/ui-controllers/toast.service';
import { AuthService } from 'src/app/services/woocommerce/auth/service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './app-left-menu.component.html',
  styleUrls: ['./app-left-menu.component.scss'],
})
export class AppLeftMenuComponent implements OnInit {

  isAuthenticated = false;

  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'My Orders',
      url: '/home/orders',
      icon: 'pizza'
    },
    {
      title: 'Contact us',
      url: '/contact',
      icon: 'call'
    }
  ];

  public quickLinks = [
    {
      title: 'FAQs',
      url: '/page/faqs'
    },
    {
      title : 'Privacy Policy',
      url: '/page/privacy-policy'
    },
    {
      title: 'Terms of service',
      url: '/page/faqs'
    }
  ];

  public socialLinks = [
    {
      url: 'https://www.facebook.com/',
      icon: 'logo-facebook'
    },
    {
      url: 'https://www.facebook.com/',
      icon: 'logo-instagram'
    },
    {
      url: 'https://www.facebook.com/',
      icon: 'logo-twitter'
    }
  ];

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) { }

  logout() {
    this.authService.logout().then(res => {
      this.toastService.presentToast('Adios, you have been logged out!');
      this.router.navigate(['/home']);
    });
  }

  openLink(url:string){
    window.open(url, '_system', 'location=yes');
    return false;
  }

  ngOnInit() {
    this.authService.isAuthenticated().then(data => {
      this.isAuthenticated = data;
    })
    //Subsequent
    this.authService.authenticated.subscribe(res => {
      this.isAuthenticated = res;
    })
  }

}
