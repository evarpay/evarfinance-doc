---
sidebar_position: 5
---

# Angular js

This is an elaborate documentation for integrating the Evarfinance Checkout module into a Angular.js application. This guide should walk you through all you need to know to integrate the checkout into your Angular.js application with ease.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Install the evarfinance checkout library

Install the Evarfinance Checkout library as a dependency by running the following command in your terminal:

```bash
npm install evarfinance-checkout
```
or

```bash
yarn add evarfinance-checkout
```
### Import the modules

Import the Evarfinance Checkout module in your Angular component file:

```js
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

- In the code above, the ngOnInit method is used to initialize the Evarfinance Checkout module when the component is initialized. The api_key and app_id should be replaced with your actual API key and app ID provided by Evarfinance.

Create a button in the Angular component's template (my-component.component.html) to trigger the payment process:

```html
<div>
  <!-- Your component content here -->
  <button (click)="openPayment()">Pay Now</button>
</div>
```

- In the template, the **openPayment** method is bound to the button's (click) event. When the button is clicked, it calls the **openPayment** method, which in turn calls the **EvarfinanceCheckout.open** function to trigger the payment process.

- Customize the component content and button as per your specific design and functionality requirements.

- Make sure to add the **MyComponentComponent** to the appropriate Angular module.

- And also remember to replace **'YOUR API KEY'** and **'YOUR APP ID'** in the component file with your actual **API key** and **APP ID** provided by Evarfinance.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.