---
layout: post
title:  Manage Webhooks in Embedded BI Application | Bold BI Docs
description: Learn about how to add, edit, delete, and deactivate webhooks in Bold BI application. Also learn about webhook payloads, events, headers, and security features.
platform: bold-bi
documentation: ug
---

# Manage Webhooks in Bold BI Application 

Webhooks are user-defined HTTP callbacks that deliver real-time data to other applications when specific events occur. Bold BI supports webhook notifications for `Time-Driven` dashboard export and `Alert-Driven` dashboard export as of now.

## Create Webhook

This section explains how to create a webhook in the Bold BI Embedded.

### Steps to add a webhook

1. Click the `Add Webhook` button at the top right of the Webhooks section of the profile page.

	![Add Webhook](/static/assets/webhook/images/add-webhook.png)
	
2. Provide the required webhook details on the `Add Webhook page`.

   * Provide a suitable `Name` for the webhook and `Description`.
   * Select the event to trigger the webhook. For more details click [here](#events).
   * Select the content type in the format in which you want to send the data.
   * Enter the webhook endpoints where the webhook data will be received.
   * Enable authentication to verify the webhook sent by the Bold BI. This is optional. For more details click [here](#webhook-authentication).
   * Enable singing to verify the integrity of the payload at the receiver end. This is optional. For more details click [here](#webhook-signing).
   * Select the payload of a event to send in webhook data. For more details click [here](#payload).

	![Webhook Details Page](/static/assets/webhook/images/webhook-details-page.png)

3. After providing the webhook details, Click on the `Save` button on the bottom of the page, it will add the webhook into Bold BI Embedded.

    ![Save Webhook](/static/assets/webhook/images/save-webhook.png)

## Edit Webhook

You can edit the created webhooks in the webhook section of the profile page, and also edit them in the `Integrations` section of the admin page.

### Steps to edit a webhook

1. Click the `Actions` button in the webhook grid context menu and select `Edit` to edit the Webhook.

	![Edit Webhook](/static/assets/webhook/images/edit-webhook.png)
	
2. Modify the webhook details on the `Edit webhook page`.

   ![Webhook Details Page](/static/assets/webhook/images/webhook-details-page.png)
	
3. After providing the webhook details, click on the `Save` button to update the webhook.

    ![Save Webhook](/static/assets/webhook/images/save-webhook.png)

## Delete Webhook

Webhooks can also be deleted from the Bold BI when they are no longer required.

Click the `Actions` button in the webhook grid context menu and select `Delete` to delete the Webhook.

![Delete Webhook](/static/assets/webhook/images/delete-webhook.png)

## Deactivate Webhook

If you want to stop a webhook temporarily without deleting the webhook permanently, then you can deactivate the webhook.

Click the `Actions` button in the webhook grid context menu and select `Deactive` to deactivate the Webhook.

![Deactivate Webhok](/static/assets/webhook/images/deactivate-webhook.png)

## Webhook Events, Headers, and Payload 

### Events

A webhook is triggered in Bold BI for the two events below only. You can create a webhook for the events below:
   * Time Driven Dashboard Export
   * Alert Driven Dashboard Export
	
   ![Webhook Event](/static/assets/webhook/images/webhook-event.png)
#### Time Driven Dashboard Export

A Time Driven Dashboard Export webhook can be configured only for normal schedule export in Bold BI.

#### Alert Driven Dashboard Export

An Alert Driven Dashboard Export webhook can be configured only for data alert export in Bold BI.

### Headers

System and custom headers are sent along with webhook data to the specified webhook endpoints. When creating a webhook, you can include your own custom headers.

#### System headers

By default, the headers listed below are sent with each webhook request:

<table>
<tr>
<td><strong>Headers Keys</td>
<td><strong>Headers Values</td>
</tr>

<tr>
<td>Host</td>
<td>&lt;webhook-endpoint&gt;</td>
</tr>

<tr>
<td>AcceptEncoding</td>
<td>gzip;q=1.0,deflate;q=0.6,identity;q=0.3</td>
</tr>

<tr>
<td>Accept-Charset</td>
<td>utf-8, iso-8859-1; q=0.5, *; q=0.1</td>
</tr>

<tr>
<td>User-Agent</td>
<td>BoldBI</td>
</tr>
</table>

#### Custom headers

Custom headers are used to send additional information to the destination URL. Follow the given steps to add a custom header:
1. Enter the key and value of the header and click `Add` icon to add it in the header record.

2. To remove the header, click the `Remove` icon.

   ![Webhook Custom Headers](/static/assets/webhook/images/webhook-custom-headers.png)

### Payload

The data of the selected event will be sent as a payload; you can send all of them or only the required data by selecting the following options:

When this option is enabled, all data will be sent in the payload.

![Webhook All Payload](/static/assets/webhook/images/webhook-payload-all.png)

If you selected a specific payload, then selected data will be sent in the payload.

![Webhook Selected Payload](/static/assets/webhook/images/webhook-selected-payload.png)

## Webhook Security

The URL for the webhook is publicly available and can be easily accessed by attackers. So, it is critical to ensure that the request comes from a known sender. An attacker could intercept the webhook request and tamper with their own data if this verification is not performed. Several options are provided for securing webhook data.

### Webhook authentication

You should enable authentication when creating a webhook to send the webhook data securely and verify whether it is sent from Bold BI or not. Even though it is optional, you are strongly advised to enable the authentication.

The following are the two methods for authenticating the webhook URL:

### Password

When creating a webhook, you can use password authentication (**Basic Auth**) to provide the username and password. The credentials (**Username:Password**) will be Base64 encoded and sent in the Authorization header (**Authorization: Basic <Credential\>**).

![Webhook Password Authentication](/static/assets/webhook/images/webhook-password-authentication.png)

### API Key

When creating a webhook, users can use API authentication (**Basic Auth**) to provide the API Key. The API key will be Base64 encoded and sent in the Authorization header (**Authorization: Basic <API Key\>**).

![Webhook API key Authentication](/static/assets/webhook/images/webhook-apikey-authentication.png)

### Webhook Signing

When creating a webhook, you can use request signature authentication to provide the secret key. This secret key is used to sign the payload (**HMAC-SHA256**), generate a Base64 encoded signature, and send it in the header (**x-signature**). This can be used to validate the payload’s integrity at the receiver end (**X-Signature: <Signature\>**).

![Webhook Signing Security](/static/assets/webhook/images/webhook-signing-security.png)