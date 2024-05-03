---
layout: post
title: Managing OAuth Connected App Accounts | Bold BI Docs
description: Learn how to manage the external OAuth accounts of corresponding data connectors that you have granted access for in Bold BI.
platform: bold-bi
documentation: ug
---

# Working with Connected Accounts

This section will provide the details for managing the external OAuth accounts that you have granted access to in Bold BI.

> **NOTE:** Managing the OAuth-connected accounts support is not available in On-Premises Deployment, but it is available in Syncfusion Managed Cloud Server.

## Features in Connected Accounts

The connected accounts page allows you to perform the following operations, which can be accessed from the context menu.

![Connected account features icon](/static/assets/working-with-datasource/images/contextmenu.png)

* Reauthorize
* Edit
* Delete

![Data button](/static/assets/working-with-datasource/images/connectedaccountsfeatures.png)

You can use the search bar to find your account.

![Search connected account textbox](/static/assets/working-with-datasource/images/searchtextbox.png)

## Reauthorize the connected accounts

You can reauthorize a previously connected account by clicking the reauthorize button in the context menu.

This action is required if both the refresh token (long live token) and access token have expired for that account. In such cases, users will need to re-enter their credentials to keep the data in sync. 

1. Click the `Reauthorize` option. 

![Reauthorize account button](/static/assets/working-with-datasource/images/reauthorizeconnectedaccounts.png)

2. Re-enter the account credentials. You will receive a success notification at the top-right of the page for confirmation.

## Renaming an account

Whenever a new connection is added, you will be prompted to set a name for your OAuth account. You are allowed to rename this connected account as you wish. To rename an account, follow these steps:

1. Click the `Edit` option.

![Edit account button](/static/assets/working-with-datasource/images/editconnectedaccounts.png)

2. Enter the new account name in the `Name` text box. Click `Submit` for the changes to take effect.

![Edit account icon](/static/assets/working-with-datasource/images/editingconnectedaccounts.png)

## Deleting the connected accounts

You are also allowed to delete an account at any time in Bold BI. Deleting an account will revoke the existing token associated with that account, and you will no longer be able to sync data to the dashboards and datasources created from that account. 

1. Click the `Delete` you can delete the connected account.

![Delete account button](/static/assets/working-with-datasource/images/deleteconnectedaccounts.png)

2. Confirm the deletion by clicking the `Yes` button.

![Delete account icon](/static/assets/working-with-datasource/images/deletingconnectedaccounts.png)

## Post your message
If you are still unable to find the information you are looking for in the self-help resources mentioned above, please [contact us](https://www.boldbi.com/support) and send us your requirements.