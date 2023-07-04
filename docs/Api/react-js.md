---
sidebar_position: 5
---

# React js

This is a detailed step by step documentation for integrating the Evarfinance Checkout module into a React.js application. This guide should walk you through all you need to know to embed the checkout into your React.js application.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Step 1: Set up a new React.js Project

- Create a new React.js project using your preferred method (e.g., Create React App).
- Set up the necessary project dependencies and configure your development environment.

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

### Step 3: Create a new JavaScript file

- Create a new JavaScript file called **evarfinance.js** in your React.js project's utils folder (you can create the utils folder if it doesn't exist).

- In the **evarfinance.js** file, import the Evarfinance Checkout module and create a function to initialize it:

```js title="evarfinance.js"
import EvarfinanceCheckout from 'evarfinance-checkout/build/main.js';

export function initEvarfinanceCheckout() {
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

```
:::note please note

- Customize the **api_key, app_id,** and other configuration options as per your Evarfinance account and payment requirements.

:::
### Step 4: Create a Checkout Component

- In your **React.js project**, create a new component file, e.g., **Checkout.jsx**.
- Import the necessary dependencies including **initEvarfinanceCheckout** function from **evarfinace.js**:

```jsx title="Checkout.jsx"
import React from 'react';
import { initEvarfinanceCheckout } from '../utils/evarfinance';
```

- Define a function, **handlePayment**, that calls the **initEvarfinanceCheckout** function. This function will be triggered when the **"Pay Now"** button is clicked:

```jsx title="Checkout.jsx"
const Checkout = () => {

  const handlePayment = () => {
    initializeEvarfinanceCheckout();
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

```

### Step 5: Import and Use the Checkout Component

- In your **App.jsx** (or any other parent component), import the Checkout component:

```jsx title="App.jsx"
import Checkout from './Checkout.jsx';
```

- Within the parent component's JSX, include the Checkout component:

```jsx title="App.jsx"
function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Checkout />
    </div>
  );
}

export default App;

```

- That's it! You have successfully integrated the Evarfinance Checkout in your React.js application. When you click the **"Pay Now"** button, the Evarfinance Checkout modal will open, and you can handle the payment events using the provided **onSuccess**, **onCancel**, and **onFailure** callback functions.

:::note please note
- Feel free to customize the component content and button as per your specific design and functionality requirements. You can add additional components, styles, or logic within the component.

- Remember to replace the placeholder values like **'YOUR API KEY'**, **'YOUR APP ID'**, **Email address**, and other details with your actual Evarfinance **API key**, **app ID**, and **customer information**.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.
:::