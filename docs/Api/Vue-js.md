---
sidebar_position: 4
---

# Vue js

This is an elaborate documentation for integrating the Evarfinance Checkout module into a Vue.js application. This guide should walk you through all you need to know to integrate the checkout into your Vue.js application with ease.

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
### Import the library

Import the library in your Vue component file (e.g., **app.js**) :

```html title="app.js"
<template>
  <div>
    <!-- Your component content here -->
  </div>
</template>

<script>
import EvarfinanceCheckout from 'evarfinance-checkout/build/main.js';

export default {
  mounted() {
    EvarfinanceCheckout.init({
      api_key: 'YOUR API KEY',
      app_id: 'YOUR APP ID',
      amount: '100',
      title: 'Test Payment',
      customer_email_address: 'customer1@email.com',
      customer_full_name: 'Customer 1',
      mode: 'DEVELOPMENT',
      onSuccess: function(response) {
        console.log('Payment succeeded', response);
      },
      onCancel: function(response) {
        console.log('Payment canceled', response);
      },
      onFailure: function(response) {
        console.log('Payment failed', response);
      },
    });
  },
};
</script>

```

### Add a buttton element

In the template section of your Vue component, you can add a button or any other element that triggers the payment process:

```html title="app.js"
<template>
  <div>
    <button @click="startPayment">Pay Now</button>
  </div>
</template>
```

### Define the 'startPayment' method

In the script section of your Vue component, define the startPayment method that triggers the payment process:

```html title="app.js"
<script>
import EvarfinanceCheckout from 'evarfinance-checkout/build/main.js';

export default {
  methods: {
    startPayment() {
      EvarfinanceCheckout.init({
        api_key: 'YOUR API KEY',
        app_id: 'YOUR APP ID',
        amount: '100',
        title: 'Test Payment',
        customer_email_address: 'customer1@email.com',
        customer_full_name: 'Customer 1',
        mode: 'DEVELOPMENT',
        onSuccess: function(response) {
          console.log('Payment succeeded', response);
        },
        onCancel: function(response) {
          console.log('Payment canceled', response);
        },
        onFailure: function(response) {
          console.log('Payment failed', response);
        },
      });
    },
  },
};
</script>

```

:::note please note

- When the button is clicked, it triggers the **startPayment** method, which initializes the Evarfinance Checkout module with the specified parameters.

- Customize the **startPayment** method and the template section of your Vue component to suit your specific design and functionality requirements.

- Remember to replace **'YOUR API KEY'** and **'YOUR APP ID'** in the component file with your actual **API key** and **APP ID** provided by Evarfinance.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.

:::