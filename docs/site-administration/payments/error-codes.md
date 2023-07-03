---
layout: post
title: Error Codes – Payment Failure – Cloud BI | Bold BI Docs
description: Learn the error codes shown for any payment failure happened along with the step to proceed further in Bold BI.
platform: bold-bi
documentation: ug
---
# Payment Decline Codes

This section will explain the error code details for payment failure with next step to resolve the payment failure.

<table>
<tr>
<td>
<b>Decline Code</b></td><td>
<b>Description</b> </td><td>
<b>Steps to resolve</b> </td></tr>
<tr id="approve_with_id">
<td>
approve_with_id</td><td>
The payment cannot be authorized. </td><td>
The payment should be attempted again. If it still cannot be processed, the customer needs to contact their card issuer. </td></tr>
<tr id="call_issuer">
<td>
call_issuer</td><td>
The card has been declined for an unknown reason. </td><td>
The customer needs to contact their card issuer for more information. </td></tr>
<tr id="card_not_supported">
<td>
card_not_supported</td><td>
The card does not support this type of purchase. </td><td>
The customer needs to contact their card issuer to make sure their card can be used to make this type of purchase. </td></tr>
<tr id="card_velocity_exceeded">
<td>
card_velocity_exceeded </td><td>
The customer has exceeded the balance or credit limit available on their card. </td><td>
The customer should contact their card issuer for more information. </td></tr>
<tr id="currency_not_supported">
<td>
currency_not_supported</td><td>
The card does not support the specified currency. </td><td>
The customer needs check with the issuer that the card can be used for the type of currency specified. </td></tr>
<tr id="do_not_honor">
<td>
do_not_honor </td><td>
The card has been declined for an unknown reason. </td><td>
The customer needs to contact their card issuer for more information. </td></tr>
<tr id="do_not_try_again">
<td>
do_not_try_again </td><td>
The card has been declined for an unknown reason. </td><td>
The customer should contact their card issuer for more information. </td></tr>
<tr id="duplicate_transaction">
<td>
duplicate_transaction </td><td>
A transaction with identical amount and credit card information was submitted very recently. </td><td>
Check to see if a recent payment already exists. </td></tr>
<tr id="expired_card">
<td>
expired_card </td><td>
The card has expired. </td><td>
The customer should use another card. </td></tr>
<tr id="fraudulent">
<td>
fraudulent </td><td>
The payment has been declined as Stripe suspects it is fraudulent. </td><td>
Do not report more detailed information to your customer. Instead, present as you would the generic_decline described below. </td></tr>
<tr id="generic_decline">
<td>
generic_decline </td><td>
The card has been declined for an unknown reason. </td><td>
The customer needs to contact their card issuer for more information. </td></tr>
<tr id="incorrect_number">
<td>
incorrect_number </td><td>
The card number is incorrect. </td><td>
The customer should try again using the correct card number. </td></tr>
<tr id="incorrect_cvc">
<td>
incorrect_cvc </td><td>
The CVC number is incorrect. </td><td>
The customer should try again using the correct CVC. </td></tr>
<tr id="incorrect_pin">
<td>
incorrect_pin </td><td>
The PIN entered is incorrect. This decline code only applies to payments made with a card reader. </td><td>
The customer should try again using the correct PIN. </td></tr>
<tr id="incorrect_zip">
<td>
incorrect_zip </td><td>
The ZIP/postal code is incorrect. </td><td>
The customer should try again using the correct billing ZIP/postal code. </td></tr>
<tr id="insufficient_funds">
<td>
insufficient_funds </td><td>
The card has insufficient funds to complete the purchase. </td><td>
The customer should use an alternative payment method. </td></tr>
<tr id="invalid_account">
<td>
invalid_account </td><td>
The card, or account the card is connected to, is invalid. </td><td>
The customer needs to contact their card issuer to check that the card is working correctly. </td></tr>
<tr id="invalid_amount">
<td>
invalid_amount </td><td>
The payment amount is invalid, or exceeds the amount that is allowed. </td><td>
If the amount appears to be correct, the customer needs to check with their card issuer that they can make purchases of that amount. </td></tr>
<tr id="invalid_cvc">
<td>
invalid_cvc </td><td>
The CVC number is incorrect. </td><td>
The customer should try again using the correct CVC. </td></tr>
<tr id="invalid_expiry_year">
<td>
invalid_expiry_year </td><td>
The expiration year invalid. </td><td>
The customer should try again using the correct expiration date. </td></tr>
<tr id="invalid_number">
<td>
invalid_number </td><td>
The card number is incorrect. </td><td>
The customer should try again using the correct card number. </td></tr>
<tr id="invalid_pin">
<td>
invalid_pin </td><td>
The PIN entered is incorrect. This decline code only applies to payments made with a card reader. </td><td>
The customer should try again using the correct PIN. </td></tr>
<tr id="issuer_not_available">
<td>
issuer_not_available </td><td>
The card issuer could not be reached, so the payment could not be authorized. </td><td>
The payment should be attempted again. If it still cannot be processed, the customer needs to contact their card issuer. </td></tr>
<tr id="lost_card">
<td>
lost_card </td><td>
The payment has been declined because the card is reported lost. </td><td>
The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline. </td></tr>
<tr id="new_account_information_available">
<td>
new_account_information_available </td><td>
The card, or account the card is connected to, is invalid. </td><td>
The customer needs to contact their card issuer for more information. </td></tr>
<tr id="no_action_taken">
<td>
no_action_taken </td><td>
The card has been declined for an unknown reason. </td><td>
The customer should contact their card issuer for more information. </td></tr>
<tr id="not_permitted">
<td>
not_permitted </td><td>
The payment is not permitted. </td><td>
The customer needs to contact their card issuer for more information. </td></tr>
<tr id="pickup_card">
<td>
pickup_card </td><td>
The card cannot be used to make this payment (it is possible it has been reported lost or stolen). </td><td>
The customer needs to contact their card issuer for more information. </td></tr>
<tr id="pin_try_exceeded">
<td>
pin_try_exceeded </td><td>
The allowable number of PIN tries has been exceeded. </td><td>
The customer must use another card or method of payment. </td></tr>
<tr id="processing_error">
<td>
processing_error </td><td>
An error occurred while processing the card. </td><td>
The payment should be attempted again. If it still cannot be processed, try again later. </td></tr>
<tr id="reenter_transaction">
<td>
reenter_transaction </td><td>
The payment could not be processed by the issuer for an unknown reason. </td><td>
The payment should be attempted again. If it still cannot be processed, the customer needs to contact their card issuer. </td></tr>
<tr id="restricted_card">
<td>
restricted_card </td><td>
The card cannot be used to make this payment (it is possible it has been reported lost or stolen). </td><td>
The customer needs to contact their card issuer for more information. </td></tr>
<tr id="revocation_of_all_authorizations">
<td>
revocation_of_all_authorizations </td><td>
The card has been declined for an unknown reason. </td><td>
The customer should contact their card issuer for more information. </td></tr>
<tr id="revocation_of_authorization">
<td>
revocation_of_authorization </td><td>
The card has been declined for an unknown reason. </td><td>
The customer should contact their card issuer for more information. </td></tr>
<tr id="security_violation">
<td>
security_violation </td><td>
The card has been declined for an unknown reason. </td><td>
The customer needs to contact their card issuer for more information. </td></tr>
<tr id="service_not_allowed">
<td>
service_not_allowed </td><td>
The card has been declined for an unknown reason. </td><td>
The customer should contact their card issuer for more information. </td></tr>
<tr id="stolen_card">
<td>
stolen_card </td><td>
The payment has been declined because the card is reported stolen. </td><td>
The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline. </td></tr>
<tr id="stop_payment_order">
<td>
stop_payment_order </td><td>
The card has been declined for an unknown reason. </td><td>
The customer should contact their card issuer for more information. </td></tr>
<tr id="testmode_decline">
<td>
testmode_decline </td><td>
A Stripe test card number was used. </td><td>
A genuine card must be used to make a payment. </td></tr>
<tr id="transaction_not_allowed">
<td>
transaction_not_allowed </td><td>
The card has been declined for an unknown reason. </td><td>
The customer needs to contact their card issuer for more information. </td></tr>
<tr id="try_again_later">
<td>
try_again_later </td><td>
The card has been declined for an unknown reason. </td><td>
Ask the customer to attempt the payment again. If subsequent payments are declined, the customer should contact their card issuer for more information. </td></tr>
<tr id="withdrawal_count_limit_exceeded">
<td>
withdrawal_count_limit_exceeded </td><td>
The customer has exceeded the balance or credit limit available on their card. </td><td>
The customer should use an alternative payment method. </td></tr>
</table>