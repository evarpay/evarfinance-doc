---
sidebar_position: 3
---

# React js

This is an elaborate step to step documentation for integrating the Evarfinance Checkout module into a React.js application. This guide should walk you through all you need to know to integrate the checkout into your React.js application with ease.

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

Import the necessary modules in your React component file:

```js title="app.jsx"
import React, { useEffect } from 'react';
import EvarfinanceCheckout from 'evarfinance-checkout/build/main.js';
```
### Create a functional component

Create a functional component (e.g., MyComponent) to encapsulate your checkout functionality:

- Within the component, use the useEffect hook to initialize the Evarfinance Checkout module when the component is mounted. The initialization code is placed inside the useEffect callback function. 

- In the component's JSX, include the button (or any other element) that triggers the payment process when clicked. In this example, the onClick event is assigned the EvarfinanceCheckout.open function, which opens the Evarfinance Checkout modal.

```jsx title="app.jsx"
const MyComponent = () => {
  useEffect(() => {
    // Initialize the Evarfinance Checkout module
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
  }, []);

  return (
    <div>
      {/* Your component content here */}
      <button onClick={EvarfinanceCheckout.open}>Pay Now</button>
    </div>
  );
};

export default MyComponent;
```
:::tip quick tip

In the example above, the useEffect hook is used to call the initEvarfinanceCheckout function when the component is mounted. This ensures that the Evarfinance Checkout module is initialized correctly.
:::

- Customize the component content and button as per your specific design and functionality requirements. You can add additional components, styles, or logic within the component.

- Import and use the MyComponent in your main application or any other relevant component.

- Remember to replace **'YOUR API KEY'** and **'YOUR APP ID'** in the **MyComponent file** with your actual **API key** and **APP ID** provided by Evarfinance.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.