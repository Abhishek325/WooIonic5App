(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{x1Ph:function(t,n,e){"use strict";e.r(n),e.d(n,"AppLayoutPageModule",(function(){return m}));var o=e("ofXK"),i=e("3Pt+"),a=e("TEn/"),c=e("tyNb"),b=e("fXoL"),l=e("zJju"),r=e("vpl3");function u(t,n){1&t&&(b.Pb(0,"ion-tab-button",8),b.Nb(1,"ion-icon",9),b.Pb(2,"ion-label"),b.pc(3,"Login"),b.Ob(),b.Ob())}function h(t,n){1&t&&(b.Pb(0,"ion-tab-button",10),b.Nb(1,"ion-icon",9),b.Pb(2,"ion-label"),b.pc(3,"My Account"),b.Ob(),b.Ob())}function s(t,n){if(1&t&&(b.Pb(0,"ion-badge"),b.pc(1),b.Ob()),2&t){const t=b.Zb();b.Cb(1),b.qc(t.cartItemCount)}}const d=[{path:"",component:(()=>{class t{constructor(t,n,e){this.platform=t,this.cartService=n,this.authService=e}ionViewDidEnter(){this.backButtonSubscription=this.platform.backButton.subscribe(()=>{navigator.app.exitApp()})}ionViewWillLeave(){this.backButtonSubscription.unsubscribe()}ngOnInit(){this.cartService.getCartItems().then(t=>{this.cartItemCount=(t||[]).length}),this.authService.isAuthenticated().then(t=>{this.isAuthenticated=t}),this.cartService.cart.subscribe(t=>{this.cartItemCount=t}),this.authService.authenticated.subscribe(t=>{this.isAuthenticated=t})}}return t.\u0275fac=function(n){return new(n||t)(b.Mb(a.Z),b.Mb(l.a),b.Mb(r.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-app-layout"]],decls:13,vars:3,consts:[["slot","bottom"],["tab","home"],["name","home"],["tab","login",4,"ngIf"],["tab","account",4,"ngIf"],["tab","cart"],["name","cart-outline"],[4,"ngIf"],["tab","login"],["name","person-outline"],["tab","account"]],template:function(t,n){1&t&&(b.Pb(0,"ion-tabs"),b.Pb(1,"ion-tab-bar",0),b.Pb(2,"ion-tab-button",1),b.Nb(3,"ion-icon",2),b.Pb(4,"ion-label"),b.pc(5,"Home"),b.Ob(),b.Ob(),b.oc(6,u,4,0,"ion-tab-button",3),b.oc(7,h,4,0,"ion-tab-button",4),b.Pb(8,"ion-tab-button",5),b.Nb(9,"ion-icon",6),b.Pb(10,"ion-label"),b.pc(11,"Cart"),b.Ob(),b.oc(12,s,2,1,"ion-badge",7),b.Ob(),b.Ob(),b.Ob()),2&t&&(b.Cb(6),b.cc("ngIf",!n.isAuthenticated),b.Cb(1),b.cc("ngIf",n.isAuthenticated),b.Cb(5),b.cc("ngIf",n.cartItemCount>0))},directives:[a.S,a.Q,a.R,a.q,a.w,o.j,a.e],styles:[""]}),t})(),children:[{path:"",redirectTo:"/home/home",pathMatch:"full"},{path:"home",loadChildren:()=>Promise.all([e.e(0),e.e(17)]).then(e.bind(null,"8xH5")).then(t=>t.HomePageModule)},{path:"contact-us",loadChildren:()=>e.e(0).then(e.bind(null,"+NA5")).then(t=>t.ContactUsPageRoutingModule)},{path:"products-by-category",loadChildren:()=>Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"E8+X")).then(t=>t.ProductListPageModule)},{path:"product",loadChildren:()=>Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"+IFf")).then(t=>t.ProductViewPageModule)},{path:"cart",loadChildren:()=>Promise.all([e.e(0),e.e(15)]).then(e.bind(null,"Avph")).then(t=>t.CartPageModule)},{path:"login",loadChildren:()=>Promise.all([e.e(0),e.e(18)]).then(e.bind(null,"JcOD")).then(t=>t.LoginPageModule)},{path:"account",loadChildren:()=>Promise.all([e.e(0),e.e(14)]).then(e.bind(null,"gZRE")).then(t=>t.AccountPageModule)},{path:"orders",loadChildren:()=>Promise.all([e.e(0),e.e(11)]).then(e.bind(null,"wo8r")).then(t=>t.OrderListPageModule)}]}];let p=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(n){return new(n||t)},imports:[[c.j.forChild(d)],c.j]}),t})(),m=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,a.X,p]]}),t})()}}]);