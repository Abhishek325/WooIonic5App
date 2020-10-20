import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutPage } from './app-layout.page';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutPage,
    children: [
      {
        path: '',
        redirectTo: '/home/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./tabs/home/home.module').then(m=>m.HomePageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../contact-us/contact-us-routing.module').then( m => m.ContactUsPageRoutingModule)
      },
      {
        path: 'products-by-category',
        loadChildren: () => import('./product/product-list/product-list.module').then( m => m.ProductListPageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product-view/product-view.module').then( m => m.ProductViewPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./tabs/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./tabs/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./tabs/account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./order/order-list/order-list.module').then( m => m.OrderListPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppLayoutPageRoutingModule {}
