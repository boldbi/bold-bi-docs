---
layout: post
title: Manage Subscription Payments – Cloud BI | Bold BI Docs
description: Learn how to manage payment details like, card information, billing address, retry payment on failure for your Bold BI Cloud subscriptions.
platform: bold-bi
documentation: ug
---

# Manage Payment details for the subscription in Cloud Analytics Server

This section explains how to update the Credit/Debit card details and the billing address used for the subscription payment.

![Payments](/static/assets/site-administration/images/payment-page.png)

## Update Credit/Debit Card

Click on `Update` button below the card shown in the payment page. The dialog will be prompted to enter the Credit/Debit card number, month & year of card expiration and the CVC/CVV number.

![Update Card](/static/assets/site-administration/images/update-card.png)


![Update Card Form](/static/assets/site-administration/images/update-card-form.png)

> **NOTE:** 
The updated card information will apply from the next billing cycle of the Bold BI Cloud subscription.

## Retry Payment on failure

If the payment for the current billing cycle is failed. The pending payment for the subscription can be paid by retrying payment at any time through `Payments` tab in the settings page.
If the payment is failed due to card issues, the pending payment can also be paid by updating the card through "Update and pay now" option. 


![Retry payment](/static/assets/site-administration/images/retry-payment.png)

## Update Billing Address

Billing address for the subscription payment can be updated through `Payments` tab in the settings page. Fill up the billing address form and click on `Update` button to update the billing address of the Bold BI Cloud subscription.

![Update Billing Address](/static/assets/site-administration/images/update-billing-address.png)

> **NOTE:** 
All billing-related information will be sent to the email which mentioned in the billing address.