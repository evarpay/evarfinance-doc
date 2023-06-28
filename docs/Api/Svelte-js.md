---
sidebar_position: 5
---

# Svelte js

This is an elaborate documentation for integrating the Evarfinance Checkout module into a Svelte.js application. This guide should walk you through all you need to know to integrate the checkout into your Svelte.js application with ease.

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

### Create a new Svelte component

- Create a new Svelte component file **(e.g., Payment.svelte)** to encapsulate your payment functionality.

- Import the necessary modules in your **Payment.svelte** component file:

```html title="Payment.svelte"
<script>
  import { onMount } from "svelte";
  import EvarfinanceCheckout from "evarfinance-checkout/build/main.js";

  // Initialize the Evarfinance Checkout module when the component is mounted
  onMount(() => {
    EvarfinanceCheckout.init({
      api_key: "YOUR API KEY",
      app_id: "YOUR APP ID",
      amount: "100",
      title: "Test Payment",
      customer_email_address: "customer1@example.com",
      customer_full_name: "Customer 1",
      mode: "DEVELOPMENT",
      onSuccess: (response) => {
        console.log("Payment succeeded", response);
      },
      onCancel: (response) => {
        console.log("Payment canceled", response);
      },
      onFailure: (response) => {
        console.log("Payment failed", response);
      },
    });
  });

  function openPayment() {
    EvarfinanceCheckout.open();
  }
</script>

<main>
  <!-- Your component content here -->
  <button on:click="{openPayment}">Pay Now</button>
</main>

<style>
  /* Your component styles here */
</style>
```

:::note please note

In the **onMount** function, initialize the Evarfinance Checkout module with the desired configuration.

:::

### Add a button

Create a button in the component's template **(Payment.svelte)** that triggers the payment process when clicked. The on:click event is bound to the openPayment function, which calls **EvarfinanceCheckout.open()**.

```html title="Payment.svelte"
<main>
  <!-- Your component content here -->
  <button on:click="{openPayment}">Pay Now</button>
</main>
```

:::note please note

- Customize the component content and button as per your specific design and functionality requirements.

- Replace **'YOUR API KEY'** and **'YOUR APP ID'** in the component file with your actual **API key** and **APP ID** provided by Evarfinance.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.

- Use the Payment component in your main application or any other relevant component.

:::