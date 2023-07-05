---
sidebar_position: 4
---

# Vanilla js

This is an elaborate step by step documentation for integrating the Evarfinance Checkout module into a vanilla js application. This guide should walk you through all you need to know to integrate the checkout into your vanilla js application with ease.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Step 1: Include the Evarfinance Checkout in your HTML

Include the Evarfinance Checkout library in your HTML file (e.g., **index.html**)  by adding the following script tag:

```html title="index.html"
<script src="https://unpkg.com/evarfinance-checkout/dist/bundle.js"></script>
```

### Step 2: Create a JavaScript file

Create a JavaScript file (e.g., **app.js**) and add the following code to initialize the Evarfinance Checkout module and handle the button click event:

```js title="app.js"
function initEvarfinanceCheckout() {
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
}

  const paymentButton = document.getElementById('paymentButton');

  paymentButton.addEventListener('click', function() {
   initEvarfinanceCheckout();
  });
```

:::note please note

- We got a reference to the payment button and called the Evarfinance Checkout module when the button is clicked.

:::

### Step 3: Update the HTML file

- In the HTML file, include a button element with an ***id*** of **paymentButton**:

```html title="index.html"
<button id="paymentButton">Pay Now</button>
```
- Also in the HTML file, include the path to the app.js file:

```html title="index.html"
<script src="path/to/app.js"></script>
```
- Now you are good to go and your **index.html** file should look like this:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EvarFinance Checkout</title>
</head>
<body>
    <!-- your components and page content should go here -->
    <button id="paymentButton">Pay Now</button>
    <script src="path/to/app.js"></script>
    <script src="https://unpkg.com/evarfinance-checkout/dist/bundle.js"></script>
</body>
</html>
```
:::note please note

- Feel free to customize the component content and button as per your specific design and functionality requirements. You can add additional components, styles, or logic within the component.

- Remember to replace the placeholder values like **'YOUR API KEY'**, **'YOUR APP ID'**, **Email address**, and other details with your actual Evarfinance **API key**, **app ID**, and **customer information**.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.

:::