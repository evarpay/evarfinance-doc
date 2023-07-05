---
sidebar_position: 6
---

# Next js

This is a detailed step by step documentation for integrating the Evarfinance Checkout module into a Next.js application. This guide should walk you through all you need to know to embed the checkout into your Next.js application.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Step 1: Set up a new Next.js Project

- Initialize a new Next.js project by running the following command in your terminal.

- Set up the necessary project dependencies and configure your development environment.

```bash title="bash"
npx create-next-app my-next-app
```

:::note please note
You can skip this step if you are embedding the checkout into an already existing Next.js project.
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
:::note please note

- Customize the **api_key, app_id,** and other configuration options as per your Evarfinance account and payment requirements.

:::

### Step 4: Import the function into your preferred page

- Import the **initEvarfinanceCheckout** function in your ***Next.js*** page file where you want to use the Evarfinance Checkout module (e.g., **myPage.js**):

- Update the **MyPage** component in your **Next.js** page file to include a button and a function to be called when the button is clicked:

```jsx title="myPage.js"
import { useEffect } from 'react';
import { initEvarfinanceCheckout } from '../utils/evarfinance';

const MyPage = () => {

  const handlePayment = () => {
    // Call the Evarfinance Checkout module when the button is clicked
    initEvarfinanceCheckout();
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
:::tip quick tip
- In the **myPage.js** file, a handlePayment function is added to handle the button click event. Inside this function, the **initEvarfinanceCheckout()** method is called to trigger the payment process.
:::

- That's it! You have successfully integrated the Evarfinance Checkout in your Next.js application. When you click the **"Pay Now"** button, the Evarfinance Checkout modal will open, and you can handle the payment events using the provided **onSuccess**, **onCancel**, and **onFailure** callback functions.

:::note please note
- Feel free to customize the component content and button as per your specific design and functionality requirements. You can add additional components, styles, or logic within the component.

- Remember to replace the placeholder values like **'YOUR API KEY'**, **'YOUR APP ID'**, **Email address**, and other details with your actual Evarfinance **API key**, **app ID**, and **customer information**.

- Also remember to change the **mode** when deploying on a live/production system and all other parameters should be updated correctly.
:::