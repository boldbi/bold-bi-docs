---
layout: post
title: Customizing Bold BI Login Page | Bold BI Documentation 
description: Learn how to customize the Bold BI server login page through its UI settings or even customize UI elements as per your requirements.
platform: bold-bi
documentation: ug
---

# How to customize the Bold BI server login page?

Bold BI server allows you to customize the login page, and this section explains how to customize the login page of the Bold BI site.

We made some customizations to the login page and have provided the steps below for you to apply to your Bold BI Server installed machine.

* Download the files from the below link,

    [Updated files](https://www.syncfusion.com/downloads/support/directtrac/general/ze/LoginPage1717952210)

* Extract the downloaded ZIP file.

* If you would like to add a background image for the Bold BI Server, you can add the image with the name `LoginPageBackgroundImage.png` to the following location:

  **`{Downloaded Location}\LoginPage1717952210\IDP\Content\Styles\LESS\Accounts\images`**

* Copy and paste the IDP folder to the Bold BI deployed location below: **`{Deployed Location}\IDP\`**.

    ![Login screen](/static/assets/faq/images/customized-login-page.png)

* You can change the login page logo using the custom branding support in our settings option. Please refer to the help [link](https://help.syncfusion.com/bold-bi/rebranding/overview) below for instructions on how to change the login screen logo.

    ![Rebranding](/static/assets/faq/images/rebranding.png)

## Need more customization?

If you would like to customize the page from your end, you can update the files below based on your requirements.

  * The `_LoginForm.cshtml` file, located in `{Deployed Location}\IDP\Views\Shared\_LoginForm.cshtml`, allows you to modify the UI elements of the login form shown in the screenshot below.

    ![LoginForm](/static/assets/faq/images/loginform.png)

  * The `_ExternalAuthentication.cshtml` file, which is located in `{Deployed Location}\IDP\Views\Shared\_ExternalAuthentication.cshtml`, allows you to modify the advanced login options UI elements shown in the screenshot below.

    ![ExternalAuthentication](/static/assets/faq/images/ext_authentication.png)

  * The `Login.cshtml` file, located in `{Deployed Location}\IDP\Views\Accounts\Login.cshtml`, will act as a container. It contains common details of login information, such as the highlighted one below.

    ![Login](/static/assets/faq/images/login.png)

  * The `_Layout.Accounts.cshtml` file, which is located in `{Deployed Location}\IDP\Views\Shared\_Layout.Accounts.cshtml`, allows you to modify the layout of the server login pages, such as the header and footer.

  * To add or customize any styles for the added or modified elements, you can open the `CSS` file in a text editor and customize it according to your requirements. The file can be found at the following location: 

    **`{Deployed Location}\IDP\Content\Styles\LESS\Accounts\`**

  * If you would like to add or modify any validation or user interactions with JavaScript or jQuery, you can do so in the file below.

    **`{Deployed Location}\IDP\Scripts\Accounts\Login.js`**

> **NOTE:**  By default, the Bold BI is deployed in "C:\BoldBI".

> **IMPORTANT:**  The applied customization will only be supported in the current version, and this may not be reflected when you upgrade to the latest version of Bold BI Server. In this case, you may have to modify it again at your end. Additionally, we highly recommend that users do not modify the login page UI elements according to their requirements. This should be done at your own risk. If any issues are reported to the Bold BI support team, the team will need the customized files to reproduce the issue in order to provide a resolution.
