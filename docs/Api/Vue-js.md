---
sidebar_position: 7
---

# Vue js

This is a detailed step by step documentation for integrating the Evarfinance Checkout module into a Vue.js application. This guide should walk you through all you need to know to embed the checkout into your Vue.js application.


:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Step 1: Set up a new Vue.js Project

- Initialize a new Vue.js project by running the following command in your terminal.
- Set up the necessary project dependencies and configure your development environment.

```bash title="bash"
vue create my-vue-app
```

:::note please note
You can skip this step if you are embedding the checkout into an already existing React.js project.
:::

### Step 2: Install the evarfinance checkout library

Install the Evarfinance Checkout library as a dependency by running any of the following command in your terminal:

```bash title="npm"
npm install evarfinance-checkout
```

```bash title="yarn"
yarn add evarfinance-checkout
```
### Step 3: Create an initialization Javascript file

- Inside the src directory of your Vue.js project, create a new file called **evarfinance.js**. In this file, define the initialization function:

```js title="evarfinance.js"
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

- Inside the **src** directory, create a new file called **Checkout.vue**. In this file, define the Checkout component.

- Define a function, **handlePayment**, that calls the **initializeEvarfinanceCheckout** function. This function will be triggered when the **"Pay Now"** button is clicked:

```html title="Checkout.vue"
<template>
  <div>
    <h1>Vue.js Evarfinance Checkout</h1>
    <button @click="handlePayment">Pay Now</button>
  </div>
</template>

<script>
import { initializeEvarfinanceCheckout } from '@/evarfinance';

export default {
  methods: {
    handlePayment() {
      initializeEvarfinanceCheckout();
    },
  },
};
</script>

```

### Step 5: Register the Checkout Component

Inside the src directory, open the **main.js** file and register the Checkout component:

```js title="main.js"
import Vue from 'vue';
import App from './App.vue';
import Checkout from './Checkout.vue';

Vue.config.productionTip = false;

Vue.component('Checkout', Checkout);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

### Step 6: Create the App Component

- Inside the **src** directory, open the **App.vue** file and update its contents as follows:

```jsx title="App.vue"
<template>
  <div id="app">
    <h1>Welcome to My Vue.js App</h1>
    <Checkout />
  </div>
</template>
```

- With these steps, you have successfully integrated the Evarfinance checkout in a **Vue.js** project with a separate file for the initialization function. The **Checkout component** will be rendered within the App component, and the **initializeEvarfinanceCheckout()** function will handle the payment process when the **"Pay Now"** button is clicked.

- You can handle the payment events using the provided **onSuccess**, **onCancel**, and **onFailure** callback functions.

:::note please note
- Feel free to customize the component content and button as per your specific design and functionality requirements. You can add additional components, styles, or logic within the component.

- Remember to replace the placeholder values like **'YOUR API KEY'**, **'YOUR APP ID'**, **Email address**, and other details with your actual Evarfinance **API key**, **app ID**, and **customer information**.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.
:::