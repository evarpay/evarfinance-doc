---
sidebar_position: 2
---

# HTML

This is a comprehensive step-by-step tutorial on seamlessly incorporating Evarfinance checkout into your website. Our guide will walk you through the entire integration process, ensuring a smooth and hassle-free implementation of this feature on your site.

:::tip API keys

Don't have API keys? go to the **Generate API keys section** Before proceeding.

:::

### Add script

Add CDN script tag with the evarfinance url

```html title="index.html"
<script src="https://unpkg.com/evarfinance-checkout/dist/bundle.js"> </script>
```

### Checkout container

Initialize the evarfinance checkout container on your checkout page. this can be done with click of a button

- Replace the **api_key** and **app_id** with your generated keys. If you have not done that then proceed to the **generate api keys** section to generate your own keys

- Replace the amount, title, customer_email_address, and customer_full_name with the correct details.

```html title="index.html"
 <evarfinance-checkout-container
        embedded="true"
        config='{
            "api_key": "d24f90f809cc4697_5592bbcc96243e193a3bc0b447e4068e7b6c2de512c3edc9deb07735b9eb05b473820fa5a180c5ada76ae295bdbe4f149709e57daa3d01b9a7dad95cfb0804fcda05f37a9716f3469a90caa2973d0a24cc0c8a2aabc36f49a8bd2091118826f9",
            "app_id": "2ba187115812597e_ccd6c52a648839ba732149d848cb149b88a1c5d988d38405f1b5f737eb0453e88e61cca1bab908f0450255445531154e",
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
    <evarfinance-checkout-container
      embedded="true"
      config='{
            "api_key": "d24f90f809cc4697_5592bbcc96243e193a3bc0b447e4068e7b6c2de512c3edc9deb07735b9eb05b473820fa5a180c5ada76ae295bdbe4f149709e57daa3d01b9a7dad95cfb0804fcda05f37a9716f3469a90caa2973d0a24cc0c8a2aabc36f49a8bd2091118826f9",
            "app_id": "2ba187115812597e_ccd6c52a648839ba732149d848cb149b88a1c5d988d38405f1b5f737eb0453e88e61cca1bab908f0450255445531154e",
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
