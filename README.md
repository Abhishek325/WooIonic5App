 ## WooIonicApp

### What is this app all about?

This is an open source ionic template that consumes a `Woocommerce` based API. With this app, you can have your store setup with core features that could be scaled to any extend as per your store configurations. 

#### Project structure

> The project is an `angular` based `ionic` app

These are the main files and folders used:

* **components** : Generic components are placed here.
* **pages** : App pages to render the components as per route configuration.
* **services** : This folder contains domain specific services that conencts the application to the API
* **app-routingModule.ts** : Routing configuration of the app
* **http.interceptor.ts** : Application request inteceptor to have request making logic, authentication headers, token etc at one place.

### Screenshots

#### Note: The images and content (products/categories) will differ based on your store configuration

<img src="https://raw.githubusercontent.com/Abhishek325/WooIonicApp/main/src/screenshots/screenshot-1.png" width="200px"/> <img src="https://raw.githubusercontent.com/Abhishek325/WooIonicApp/main/src/screenshots/screenshot-2.png" width="200px" /> <img src="https://raw.githubusercontent.com/Abhishek325/WooIonicApp/main/src/screenshots/screenshot-3.png" width="200px" /> <img src="https://raw.githubusercontent.com/Abhishek325/WooIonicApp/main/src/screenshots/screenshot-4.png" width="200px" />

### Features
- View products by category
- Add/remove cart actions
- Search products in store
- Cart page actions - Coupons, update/remove items etc.
- Login with Social sites (Coming soon)

Steps to setup this locally:

1. Run `npm install` to install dependencies.
2. Update `environments/environment.ts` file for woocommerce store credentials.
3. Run `ionic serve` to run the development server.

And that's it! 🎉
