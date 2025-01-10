---
layout: post
title: Use Microsoft Office 365 via OAuth2 for Emails | Bold BI Doc
description: Learn supported mail services in User Management, like SMTP and Microsoft Office 365 with OAuth2, to enhance email notifications and security controls.
platform: bold-bi
documentation: ug
---

# Microsoft Office 365 Account Settings with OAuth authentication in User Management Server

This section explains how to configure the Microsoft Office 365 account to send emails from the User Management Server. This process requires creating an Azure app and granting it the necessary API permissions to access the email service. If needed, you can also restrict the app’s access to specific mailboxes.

To learn [how to register an Azure app with mail-sending API permissions](https://support.boldbi.com/kb/article/16770/how-to-register-an-azure-app-with-mail-sending-permissions) and restrict access to specific mailboxes.

**The User Management Server requires the following Microsoft Office 365 account details in order to send email.**

<table>
<tr>
    <td>Sender Email Address</td>
    <td>The email address, which is displayed as the "From" email address in the recipient's email.</td>
</tr>
<tr>
    <td>Authentication Type</td>
    <td>The OAuth authentication is the default authentication type that requires the Tenant ID, Client ID, and Client Secret for authentication.</td>
</tr>
<tr>
    <td>Tenant ID</td>
    <td>A unique identifier specifies the Azure AD instance that manages the app's permissions and roles, establishing its authorization context.</td>
</tr>
<tr>
    <td>Client ID</td>
    <td>A unique identifier for the Azure app, which is essential for requesting and validating tokens when accessing mail services.</td>
</tr>
<tr>
    <td>Client Secret</td>
    <td>A confidential key that proves the app’s identity, used along with the Client ID for app authentication and authorization.</td>
</tr>
</table>

## Steps to configure Microsoft Office 365 account settings in Bold BI User Management

1. Go to `http://{domain}/ums/administration/e-mail-settings` and select `Microsoft Office 365` from the `Email Account` drop-down menu.

2. Enter your email address in the Sender Email Address field, which has the `Mail.Send` API permission for Microsoft Graph.

3. By default, OAuth will be selected as the Authentication type. Enter the App’s Tenant ID, Client ID, and Client Secret in the respective fields.

4. Once you have filled in the email settings connection details, test the settings using the `Test Connection` option and then click `Save` to save the settings.
![Email Settings](/static/assets/multi-tenancy/images/office365.png)

5. Enter an email address and click `Send` to ensure that the Microsoft Office 365 configuration is correct.
![Send Email](/static/assets/multi-tenancy/images/send-email.png#width=35%)

### What happens if the sender email address does not have application access?
If the sender email address used in the configuration does not have app access, the test email will fail, resulting in an `Access to OData disabled` error as shown below. Learn more about restricting app access to specific mailboxes [here](https://support.boldbi.com/kb/article/16770/how-to-register-an-azure-app-with-mail-sending-permissions#restricting-app-access-to-specific-mailboxes).
![Send Email failed](/static/assets/multi-tenancy/images/error-without-app-access.png#width=35%)