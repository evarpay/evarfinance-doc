---
sidebar_position: 3
---

# Next js

This is an elaborate documentation for integrating the Evarfinance Checkout module into a Next.js application. This guide should walk you through all you need to know to integrate the checkout into your Next.js application with ease.

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

### Create a JavaScript file

- Create a new JavaScript file called **evarfinance.js** in your Next.js project's utils folder (you can create the utils folder if it doesn't exist).

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

### Import the function into your preferred page

- Import the **initEvarfinanceCheckout** function in your ***Next.js*** page file where you want to use the Evarfinance Checkout module:

```jsx title="myPage.js"
import { useEffect } from 'react';
import { initEvarfinanceCheckout } from '../utils/evarfinance';

const MyPage = () => {
  useEffect(() => {
    initEvarfinanceCheckout();
  }, []);

  return <div>...</div>;
};

export default MyPage;
```
### Add a button

- Update the **MyPage** component in your **Next.js** page file to include a button and a function to be called when the button is clicked :

```jsx title="myPage.js"
import { useEffect } from 'react';
import { initEvarfinanceCheckout } from '../utils/evarfinance';

const MyPage = () => {
  useEffect(() => {
    initEvarfinanceCheckout();
  }, []);

  const handlePayment = () => {
    // Call the Evarfinance Checkout module when the button is clicked
    EvarfinanceCheckout.open();
  };

  return (
    <div>
      <h1>My Page</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default MyPage;
```
- In the updated code, a handlePayment function is added to handle the button click event. Inside this function, the **EvarfinanceCheckout.open()** method is called to trigger the payment process.

:::note please note

- In the example above, the useEffect hook is used to call the **initEvarfinanceCheckout** function when the component is mounted. This ensures that the Evarfinance Checkout module is initialized correctly.

- Customize the **MyPage** component and the **initEvarfinanceCheckout** function to suit your specific design and functionality requirements.

- Remember to replace **'YOUR API KEY'** and **'YOUR APP ID'** in the **MyComponent file** with your actual **API key** and **APP ID** provided by Evarfinance.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.
:::