---
sidebar_position: 8
---

# Angular js

This is a detailed step by step documentation for integrating the Evarfinance Checkout module into a Angular.js application. This guide should walk you through all you need to know to embed the checkout into your Angular.js application.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Step 1: Create an Angular Project

- Initialize a new Angular project by running the following command in your terminal.
- Set up the necessary project dependencies and configure your development environment.

```bash title="bash"
ng new my-angular-app

```

:::note please note
You can skip this step if you are embedding the checkout into an already existing React.js project.
:::

### Step 2: Install the evarfinance checkout library

- Open a terminal or command prompt in your project directory.
- Run any of the following command to install the Evarfinance Checkout package:

```bash title="npm"
npm install evarfinance-checkout
```

```bash title="yarn"
yarn add evarfinance-checkout
```

### Step 3: Create an Initialization File

- Inside the **src** directory of your Angular project, create a new file called **evarfinance.ts** In this file, define the initialization function:

```ts title="evarfinance.ts"
import EvarfinanceCheckout from 'evarfinance-checkout/build/main.js';

export function initializeEvarfinanceCheckout() {
  EvarfinanceCheckout.init({
    api_key: 'YOUR API KEY',
    app_id: 'YOUR APP ID',
    amount: '100',
    title: 'Test Payment',
    customer_email_address: 'customer1@example.com',
    customer_full_name: 'Customer 1',
    mode: 'DEVELOPMENT',
    onSuccess: (response) => {
      console.log('Payment succeeded', response);
    },
    onCancel: (response) => {
      console.log('Payment canceled', response);
    },
    onFailure: (response) => {
      console.log('Payment failed', response);
    },
  });
}
```

:::note please note

- Customize the **api_key, app_id,** and other configuration options as per your Evarfinance account and payment requirements.

:::
### Step 4: Create a Checkout Component

- Inside the **src/app** directory, create a new file called **checkout.component.ts**. In this file, define the CheckoutComponent.

- Define a function, **handlePayment**, that calls the **initializeEvarfinanceCheckout** function. This function will be triggered when the **"Pay Now"** button is clicked:

```ts title="checkout.component.ts"
import { Component } from '@angular/core';
import { initializeEvarfinanceCheckout } from '../evarfinance';

@Component({
  selector: 'app-checkout',
  template: `
    <h1>Angular Evarfinance Checkout</h1>
    <button (click)="handlePayment()">Pay Now</button>
  `,
})
export class CheckoutComponent {
  handlePayment() {
    initializeEvarfinanceCheckout();
  }
}
```

:::tip quick tip

- The **handlePayment** method is bound to the button's (click) event. When the button is clicked, it calls the **handlePayment** method, which in turn calls the **initializeEvarfinanceCheckout()** function to trigger the payment process.

:::

### Step 5: Register the Checkout Component

- Inside the **src/app/app.module.ts** file, import and register the CheckoutComponent:

```ts title="app.module.ts"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  declarations: [AppComponent, CheckoutComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

### Step 6: Update the App Component

Inside the **src/app/app.component.html** file, update its contents as follows:

```html title="app.component.html"
<h1>Welcome to My Angular App</h1>
<app-checkout></app-checkout>

```
- With these steps, you have successfully integrated the Evarfinance checkout in an Angular project. The CheckoutComponent will be rendered within the AppComponent, and the **initializeEvarfinanceCheckout()** function will handle the payment process when the **"Pay Now"** button is clicked.

- You can handle the payment events using the provided **onSuccess**, **onCancel**, and **onFailure** callback functions.

:::note please note
- Feel free to customize the component content and button as per your specific design and functionality requirements. You can add additional components, styles, or logic within the component.

- Remember to replace the placeholder values like **'YOUR API KEY'**, **'YOUR APP ID'**, **Email address**, and other details with your actual Evarfinance **API key**, **app ID**, and **customer information**.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.
:::