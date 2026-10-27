---
layout: post
title: Manage Webhooks in Embedded BI Application | Bold BI Docs
description: Add, edit, delete, and deactivate webhooks in Bold BI. Find steps for webhook events, headers, payloads, and authentication settings in one guide.
platform: bold-bi
documentation: ug
---

# Manage Webhooks in Bold BI Application

You can add, edit, delete, and deactivate webhooks in the Bold BI embedded application from the Webhooks section of the profile page. [NEEDS FACT: what a webhook is in Bold BI, and which dashboard export events support webhook notifications]

## Create Webhook

Follow these steps to add a webhook in the Bold BI embedded application.

### Steps to Add a Webhook

1. Click the `Add Webhook` button at the top right of the Webhooks section of the profile page.

	![Add Webhook button at the top right of the Webhooks section](/static/assets/webhook/images/add-webhook.png)
	
2. Provide the required webhook details on the `Add Webhook` page:

   * Provide a suitable `Name` and `Description` for the webhook.
   * Select the event to trigger the webhook. For more details, see [Events](#events).
   * Select the content type in the format in which you want to send the data.
   * Enter the webhook endpoints where the webhook data is received.
   * Enable authentication. This is optional. For more details, see [Webhook Authentication](#webhook-authentication).
   * Enable signing. This is optional. For more details, see [Webhook Signing](#webhook-signing).
   * Select the payload of an event to send in webhook data. For more details, see [Payload](#payload).

	![Add Webhook details page with name, event, content type, endpoint, authentication, signing, and payload fields](/static/assets/webhook/images/webhook-details-page.png)

3. After providing the webhook details, click the `Save` button at the bottom of the page to add the webhook to Bold BI Embedded.

    ![Save button at the bottom of the Add Webhook page](/static/assets/webhook/images/save-webhook.png)

## Edit Webhook

You can edit created webhooks in the Webhooks section of the profile page, as well as in the `Integrations` section of the admin page.

### Steps to Edit a Webhook

1. Click the `Actions` button in the webhook grid context menu and select `Edit` to edit the webhook.

	![Edit option in the webhook grid Actions menu](/static/assets/webhook/images/edit-webhook.png)
	
2. Modify the webhook details on the `Edit Webhook` page.

   ![Edit Webhook details page](/static/assets/webhook/images/webhook-details-page.png)
	
3. After providing the webhook details, click the `Save` button to update the webhook.

    ![Save button on the Edit Webhook page](/static/assets/webhook/images/save-webhook.png)

## Delete Webhook

Webhooks can be deleted from Bold BI when they are no longer required.

Click the `Actions` button in the webhook grid context menu and select `Delete` to delete the webhook.

![Delete option in the webhook grid Actions menu](/static/assets/webhook/images/delete-webhook.png)

## Deactivate Webhook

If you want to temporarily stop a webhook without deleting it permanently, you can deactivate the webhook. [NEEDS FACT: what happens to a deactivated webhook, and whether it can be reactivated]

Click the `Actions` button in the webhook grid context menu and select `Deactivate` to deactivate the webhook.

![Deactivate option in the webhook grid Actions menu](/static/assets/webhook/images/deactivate-webhook.png)

## Webhook Events, Headers, and Payload

### Events

[NEEDS FACT: the webhook events Bold BI supports, confirmed against the product. The two options below are the event labels shown on the Add Webhook page.]

* Time-Driven Dashboard Export
* Alert-Driven Dashboard Export
	
![Webhook event options on the Add Webhook page](/static/assets/webhook/images/webhook-event.png)

#### Time-Driven Dashboard Export

[NEEDS FACT: which export schedules a Time-Driven Dashboard Export webhook can be configured for]

#### Alert-Driven Dashboard Export

[NEEDS FACT: which data alert exports an Alert-Driven Dashboard Export webhook can be configured for]

### Headers

[NEEDS FACT: the system headers sent with each webhook request, and whether custom headers are supported]

#### System Headers

[NEEDS FACT: default system header keys and values sent with each webhook request, including Host, AcceptEncoding, Accept-Charset, and User-Agent]

#### Custom Headers

To add a custom header, follow these steps:

1. Enter the key and value of the header, then click the `Add` icon to add it to the header record.
2. To remove the header, click the `Remove` icon.

![Custom headers record with key and value fields and Add and Remove icons](/static/assets/webhook/images/webhook-custom-headers.png)

### Payload

[NEEDS FACT: the data included in the payload for each webhook event, and the options for selecting payload data]

For the payload properties used in dashboard export events, see [Webhook payload for dashboard scheduled events](/manage-webhooks/webhook-payload/).

[NEEDS FACT: what the all-data payload option sends]

![All payload option enabled on the webhook details page](/static/assets/webhook/images/webhook-payload-all.png)

[NEEDS FACT: what a selected payload sends]

![Selected payload option on the webhook details page](/static/assets/webhook/images/webhook-selected-payload.png)

## Webhook Security

[NEEDS FACT: why webhook URLs need authentication and signing, and which security settings Bold BI recommends]

### Webhook Authentication

[NEEDS FACT: the authentication methods Bold BI supports for webhooks, and whether enabling authentication is recommended]

### Password

[NEEDS FACT: how password authentication sends credentials in the webhook request]

![Password authentication fields on the webhook details page](/static/assets/webhook/images/webhook-password-authentication.png)

### API Key

[NEEDS FACT: how API key authentication sends the key in the webhook request]

![API key authentication field on the webhook details page](/static/assets/webhook/images/webhook-apikey-authentication.png)

### Webhook Signing

[NEEDS FACT: how webhook signing works, including the signing method, the header name and its capitalization, and how the receiver validates the signature]

![Webhook signing security setting on the webhook details page](/static/assets/webhook/images/webhook-signing-security.png)
