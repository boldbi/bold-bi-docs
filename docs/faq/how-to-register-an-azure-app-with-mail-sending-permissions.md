---
layout: post
title: Registering Azure App with Mail Sending Permission | Bold BI Docs
description: Learn how to register an Azure app with mail-sending API permissions to send emails and restrict its access to specific mailboxes in the Azure Portal.
canonical: "/faq/how-to-register-an-azure-app-with-mail-sending-permissions/"
platform: bold-bi
documentation: ug
---

# How to register an Azure application with mail-sending API permissions and restrict its access to specific mailboxes?

To enable email sending from the Bold BI Server using a Microsoft Office 365 account with OAuth authentication, it is essential to register an Azure app. This app needs to be granted the required API permissions for accessing the email service. Additionally, you can also limit access to specific mailboxes if needed.

## Steps to register an Azure app with mail-sending API permissions:

1. Go to [Azure portal](https://portal.azure.com/#home) and select `Microsoft Entra ID`.

![Azure portal](/static/assets/faq/images/entra-id.png)

2. Click on `App registrations` in the side navigation menu and click `New registration`.

![App registrations](/static/assets/faq/images/new-app-registration.png)

3. Enter a meaningful name in the Name section for your application. Choose "Accounts in this organizational directory only" option under Supported account types. Click `Register` to create the application.

![Register app](/static/assets/faq/images/register-app.png)

4. On the app Overview page, select and copy the Application (Client) ID & Directory (tenant) ID, which will be needed for our email settings configurations.

![App credentials](/static/assets/faq/images/app-credential.png)

5. Click on `Certificates & Secrets` option, select `New client secret` to generate a client secret for the app.

![Generate client secret](/static/assets/faq/images/generate-client-secret.png)

6. Add the `Description` and select the `Expires` option as per your requirement. Click `Add`.

![Add client secret](/static/assets/faq/images/add-client-secret.png)

7. Copy the `value` which is the app client secret, and secure it for future purposes. You will not be able to see the value again once you reload the page.

![View client secret](/static/assets/faq/images/view-client-secret.png)

8. To add `Mail.Send` API permissions, select the `API permissions` tab and click on `Add a permission`.

![Mail send API permission](/static/assets/faq/images/api-permissions.png)

9. Select `Microsoft Graph` from the permission list.

![Microsoft graph api](/static/assets/faq/images/microsoft-graph-api.png)

10. Choose `Application permissions`, search for Mail in the search area, then check `Mail.Send` permission from the list and add permission using the `Add Permissions` button. Provide admin consent for `Mail.Send` permission for Microsoft Graph API.

![Mail send API permission](/static/assets/faq/images/mail-send-permission.png)

![Add API permission](/static/assets/faq/images/add-api-permission.png)

11. Make sure the permission is listed in the permissions grid as shown below.

![View API permission](/static/assets/faq/images/view-api-permission.png)

## Restricting app access to specific mailboxes:

Using a Microsoft Office 365 account with OAuth Authentication for email sending through the Microsoft Graph API requires the 'Mail.Send' permission. However, granting this permission to the entire application can pose a potential risk of other senders misusing someone's email address. To address this concern, it is advisable to restrict app access. You can find instructions on configuring application access policies in the documentation at [this link](https://learn.microsoft.com/en-us/graph/auth-limit-mailbox-access#configure-applicationaccesspolicy). Without such restrictions, there is a risk of unauthorized users sending emails from the application, which could present potential security concerns. Once you have configured the application access policy for a specific mailbox, other mailboxes will be restricted from sending emails using the app.

Sample to create access policy: Create an access policy to restrict app access to specific mailboxes.

![Create access policy](/static/assets/faq/images/restrict-app-access.png)

Sample to test access policy: Test whether permission has been granted for the email address or not.

![Test access policy](/static/assets/faq/images/test-app-access.png)