---
sidebar_position: 3
---

# HTML

This is a comprehensive step-by-step tutorial on seamlessly incorporating Evarfinance checkout into your website. Our guide will walk you through the entire integration process, ensuring a smooth and hassle-free implementation of this feature on your site.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Step 1: Create a new HTML file

Create a new HTML file using your preferred text editor and save it with a **.html extension**, for example, **checkout.html**.

### Step 2: Add script

Add CDN script tag with the evarfinance url

```html title="index.html"
<script src="https://unpkg.com/evarfinance-checkout/dist/bundle.js"> </script>
```

### Step 3: Checkout container

Inside the HTML file, add the necessary HTML structure for your checkout page. This may include elements such as a form, input fields, and a button for initiating the payment process.

- Replace the **api_key** and **app_id** with your generated keys. If you have not done that then proceed to the **generate api keys** section to generate your own keys

- Replace the amount, title, customer_email_address, and customer_full_name with the correct details.

```html title="index.html"
 <evarfinance-checkout-container
        embedded="true"
        config='{
            "api_key": "YOUR_API_KEY",
            "app_id": "YOUR_APP_ID",
            "amount": "100",
            "title": "Test Payment",
            "customer_email_address": "customr1@email.com",
            "customer_full_name": "Customer 1 one"
          }'
        showTourGuide="false"
      ></evarfinance-checkout-container>
```

- This is what your index.html file should look like

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sample code</title>
  </head>
  <body>
    <!-- Add the container element for the Evarfinance Checkout -->
    <evarfinance-checkout-container
      embedded="true"
      config='{
            "api_key": "YOUR_API_KEY",
            "app_id": "YOUR_APP_ID",
            "amount": "100",
            "title": "Test Payment",
            "customer_email_address": "customr1@email.com",
            "customer_full_name": "Customer 1 one"
          }'
      showTourGuide="false"
    ></evarfinance-checkout-container>
    <script src="https://unpkg.com/evarfinance-checkout/dist/bundle.js"></script>
  </body>
</html>
```

:::danger
Please note that the above code assumes you have the necessary dependencies and configurations set up correctly. Ensure that you have a valid API key and app ID from Evarfinance and that you've included the Evarfinance Checkout script using the provided CDN URL.
:::
