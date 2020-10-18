import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './app-left-menu.component.html',
  styleUrls: ['./app-left-menu.component.scss'],
})
export class AppLeftMenuComponent implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'My Orders',
      url: '/',
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

  constructor() { }

  openLink(url:string){
    window.open(url, '_system', 'location=yes');
    return false;
  }

  ngOnInit() {}

}
