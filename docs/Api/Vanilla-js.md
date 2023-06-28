---
sidebar_position: 3
---

# Vanilla js

This is an elaborate step by step documentation for integrating the Evarfinance Checkout module into a vanilla js application. This guide should walk you through all you need to know to integrate the checkout into your vanilla js application with ease.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Include the Evarfinance Checkout in your HTML

Include the Evarfinance Checkout library in your HTML file by adding the following script tag:

```html title="index.html"
<script src="https://path/to/evarfinance-checkout/build/main.js"></script>
```

### Create a JavaScript file

Create a JavaScript file (e.g., app.js) and add the following code to initialize the Evarfinance Checkout module and handle the button click event:

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

document.addEventListener('DOMContentLoaded', function() {
  initEvarfinanceCheckout();

  var paymentButton = document.getElementById('paymentButton');

  paymentButton.addEventListener('click', function() {
    EvarfinanceCheckout.open();
  });
});

```

:::tip QUICK TIP

In the above code we wait for the DOM content to load and then call the initEvarfinanceCheckout function when the DOM is ready.

We also got a reference to the payment button and called the Evarfinance Checkout module when the button is clicked.

:::

### Update the HTML file

- In the HTML file, include a button element with an id of paymentButton:

```html title="index.html"
<button id="paymentButton">Pay Now</button>
```
- Also in the HTML file, include the path to the app.js file:

```html title="index.html"
<script src="path/to/app.js"></script>
```
- Now you are good to go.

- Replace **'YOUR API KEY'** and **'YOUR APP ID'** in the **app.js** file with your actual **API key** and **APP ID** provided by Evarfinance.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.

- Customize the code to suit your specific design and functionality requirements. You can modify the button styling, add additional event listeners, or include other elements as needed.