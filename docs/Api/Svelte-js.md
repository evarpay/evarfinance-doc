---
sidebar_position: 9
---

# Svelte js

This is a detailed step by step documentation for integrating the Evarfinance Checkout module into a Svelte.js application. This guide should walk you through all you need to know to embed the checkout into your Svelte.js application.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Step 1: Create a Svelte Project

- Initialize a new Svelte project by running the following command in your terminal.

- Set up the necessary project dependencies and configure your development environment.

```bash title="npm"
npx degit sveltejs/template my-svelte-app
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

- Inside the **src** directory of your Svelte project, create a new file called **evarfinance.js**. In this file, define the initialization function:

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

- Inside the src directory, create a new file called **Checkout.svelte**. In this file, define the Checkout component.

- Create a button in the component's template **(Checkout.svelte)** that triggers the payment process when clicked. The on:click event is bound to the **handlePayment** function, which calls **initializeEvarfinanceCheckout()**.

```html title="Checkout.svelte"
<script>
  import { initializeEvarfinanceCheckout } from './evarfinance';

  function handlePayment() {
    initializeEvarfinanceCheckout();
  }
</script>

<h1>Svelte Evarfinance Checkout</h1>
<button on:click={handlePayment}>Pay Now</button>
```

### Step 5: Update the App Component

- Inside the **src** directory, open the **App.svelte** file and update its contents as follows:

```jsx title="App.svelte"
<script>
  import Checkout from './Checkout.svelte';
</script>

<main>
  <Checkout />
</main>

```

- With these steps, you have successfully integrated the Evarfinance checkout in a **Svelte app**. The Checkout component will be rendered within the App component, and the **initializeEvarfinanceCheckout()** function will handle the payment process when the **"Pay Now"** button is clicked.

- You can handle the payment events using the provided **onSuccess**, **onCancel**, and **onFailure** callback functions.

:::note please note
- Feel free to customize the component content and button as per your specific design and functionality requirements. You can add additional components, styles, or logic within the component.

- Remember to replace the placeholder values like **'YOUR API KEY'**, **'YOUR APP ID'**, **Email address**, and other details with your actual Evarfinance **API key**, **app ID**, and **customer information**.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.
:::