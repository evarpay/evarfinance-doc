---
sidebar_position: 5
---

# Angular js

This is an elaborate documentation for integrating the Evarfinance Checkout module into a Angular.js application. This guide should walk you through all you need to know to integrate the checkout into your Angular.js application with ease.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Install the evarfinance checkout library

Install the Evarfinance Checkout library as a dependency by running any of the following command in your terminal:

```bash title="npm"
npm install evarfinance-checkout
```

```bash title="yarn"
yarn add evarfinance-checkout
```
### Create a new Angular component
Create a new Angular component for your checkout functionality. Open a terminal and navigate to your Angular project directory. Run the following command to generate a new component:

```bash title="bash"
ng generate component checkout
```
### Import the modules

- In the ***app.component.html*** file, add the component selector <app-checkout></app-checkout> to include the checkout component in your main application template.

- Open the generated **checkout** component file ***checkout.component.ts***. Import the necessary modules and define the component class as shown below:

```js title="checkout.component.ts"
import { Component, OnInit } from '@angular/core';
import EvarfinanceCheckout from 'evarfinance-checkout/build/main.js';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialize the Evarfinance Checkout module
    EvarfinanceCheckout.init({
      api_key: 'YOUR API KEY',
      app_id: 'YOUR APP ID',
      amount: '100',
      title: 'Test Payment',
      customer_email_address: 'customer1@example.com',
      customer_full_name: 'Customer 1',
      mode: 'DEVELOPMENT',
      onSuccess: (response: any) => {
        console.log('Payment succeeded', response);
      },
      onCancel: (response: any) => {
        console.log('Payment canceled', response);
      },
      onFailure: (response: any) => {
        console.log('Payment failed', response);
      },
    });
  }

  openPayment(): void {
    // Call the Evarfinance Checkout module when the button is clicked
    EvarfinanceCheckout.open();
  }
}

```

:::note please note

- In the code above, the ngOnInit method is used to initialize the Evarfinance Checkout module when the component is initialized.

- The **openPayment** method is bound to the button's (click) event. When the button is clicked, it calls the **openPayment** method, which in turn calls the **EvarfinanceCheckout.open** function to trigger the payment process.

:::

### Add a button

In the ***checkout.component.html*** file, add the necessary HTML markup and Angular bindings for your checkout component. Include a button to trigger the payment process:

```html title="checkout.component.html"
<div>
  <!-- Your component content here -->
  <button (click)="openPayment()">Pay Now</button>
</div>
```

:::note please note

- Customize the component content and button as per your specific design and functionality requirements.

:::

### Import the CheckoutComponent

In the main **app.module.ts** file, import the CheckoutComponent and add it to the declarations array:

```ts title="app.module.ts"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
:::note please note

- And also remember to replace **'YOUR API KEY'** and **'YOUR APP ID'** in the component file with your actual **API key** and **APP ID** provided by Evarfinance.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.

:::