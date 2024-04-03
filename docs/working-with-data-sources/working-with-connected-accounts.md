---
layout: post
title: Managing OAuth Connected App Accounts | Bold BI Docs
description: Learn how to manage the external OAuth accounts of corresponding data connectors that you have granted access for in Bold BI.
platform: bold-bi
documentation: ug
---

# Working with Connected Accounts

This section will have the details to manage the external OAuth accounts that you have granted access for in Bold BI.

> **NOTE:** Managing the OAuth-connected accounts support is not available in On-Premises Deployment, but it is available in Syncfusion Managed Cloud Server.

## Features in Connected Accounts

The following operations can be performed on the connected-accounts page. They can be accessed from the context menu. 

![Connected account features icon](/static/assets/working-with-datasource/images/contextmenu.png)

* Reauthorize
* Edit
* Delete

![Data button](/static/assets/working-with-datasource/images/connectedaccountsfeatures.png)

Use the search bar to find your account.

![Search connected account textbox](/static/assets/working-with-datasource/images/searchtextbox.png)

## Reauthorize the connected accounts

You can reauthorize the account you connected earlier by clicking the reauthorize button in the context menu.

Re-authorize action is required if, both the refresh token (long live token) and access token expires for that account. On such cases users will have to re-enter the credentials to keep the data in sync. 

1. Click the `Reauthorize` option. 

![Reauthorize account button](/static/assets/working-with-datasource/images/reauthorizeconnectedaccounts.png)

2. Re-enter the account credentials. You will get a success notification at the top-right of this page for confirmation.

## Renaming an account

You will be asked to set a name for your OAuth account whenever a new connection is added. You are allowed to rename this connected account as you wish. Follow the below steps to rename an account.

1. Click the `Edit` option.

![Edit account button](/static/assets/working-with-datasource/images/editconnectedaccounts.png)

2. Enter the new account name in `Name` text box. Click `Submit` for the changes to apply.

![Edit account icon](/static/assets/working-with-datasource/images/editingconnectedaccounts.png)

## Deleting the connected accounts

You are also allowed to delete the account anytime in Bold BI. Deleting the account will revoke the existing token associated with that account and you will no longer be able to sync data to the dashboards and datasources created from that account. 

1. Click the `Delete` you can delete the connected account.

![Delete account button](/static/assets/working-with-datasource/images/deleteconnectedaccounts.png)

2. Delete the connected account by clicking `Yes` button.

![Delete account icon](/static/assets/working-with-datasource/images/deletingconnectedaccounts.png)

## Post your message
If you are still not able to find the information that you are looking for in the self-help resources mentioned above then please [contact us](https://www.boldbi.com/support) and send your requirements.