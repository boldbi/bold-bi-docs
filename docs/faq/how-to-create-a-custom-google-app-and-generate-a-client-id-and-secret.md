---
layout: post
title: Create Google App and Get Credential | Embedded Bold BI Docs
description: Discover the process of obtaining Google API authentication by creating an app and acquiring client ID and secret for OAuth client ID credentials.
platform: bold-bi
documentation: ug 
---

# How to Create a Custom Google App and generate a Client ID and Secret.

### Steps to Create a Custom Google App and generate a Client ID and Secret.

1. Go to the [Google Developer Console](https://console.cloud.google.com/).
2. On the **OAuth consent screen** page, enter the required information, including the **Application name** and **Type**, **Description**, **Support email**, **Application Homepage link**, **Application Privacy Policy link**, **Application Terms of Service link**(Optional), **Authorized domains** and **Upload Application logo**.
![App Info Page](/static/assets/faq/images/app.png)
3. Click **Save And Continue**.
4. **Scopes for the Google APIs:** Scopes allow your application to access your user's private Google data.
![Scope Page](/static/assets/faq/images/scope.png)
   * For authentication, the default scope (email, profile, OpenID) is sufficient. You don't need to add any sensitive scopes. It is generally best practice to request scopes incrementally when access is required, rather than upfront. Learn more.
   * For the **Google Analytics 4** required scopes are email, profile, and AdSense.
   * Click **Add Or Remove Scope**.
   * **Non-sensitive Scope:** Scopes define the permissions you are requesting users to authorize for your app and enable your project to access specific private user data from their Google Account.
5. On the **Optional Info Tab**  (optional), click **Save And Continue**.
6. On the **Final Review** tab, check the **Verification Status**. If your application needs verification, click **Submit for Verification** to submit your application for verification.

   > **Note:** If the verification status fails, an alert message will be thrown stating that the application is unauthorized.

7. On the **Credential** page, click **Create Credentials** and choose **Oauth Client ID**.
![Oauth page](/static/assets/faq/images/oauthpage.png)
8. On the Create **OAuth Client ID** page, click **Create**.
    * **Application type**: Choose **Web Application**.
    * **Application Name**: The name of the application you want to register with google.
    * **App Redirect URL**: Enter a valid redirect URL for your application in the **App Redirect URL** field. The Bold BI redirect URL should be added in the proper format required.

   > **Note:** Please refer to this URL structure, `https://<yourdomain>/bi/designer/v1.0/oauth/agent`.

   ![Create Menu](/static/assets/faq/images/createmenu.png)
9. The **Client ID** and **Client Secret** will be shown once the app is created.
![Credentials](/static/assets/faq/images/credential.png)
10. The app creation was successful, and the client details are listed as follows.
![List of App](/static/assets/faq/images/list.png)
11. Then, save this **Client ID** and **Client Secret** in Bold BI by referring to this [link](/site-administration/data-connector-settings/oauth-configuration/).