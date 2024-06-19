---
layout: post
title: Customizing Bold BI Login Page | Bold BI Documentation 
description: Learn how to customize the Bold BI server login page through its UI settings or even customize UI elements as per your requirements.
platform: bold-bi
documentation: ug
---

# How to customize the Bold BI server login page?

Bold BI server allows you to customize the login page and this section explains on how to customize the login page of Bold BI site.

We did some customizations in the login page and provided the steps below to apply in your Bold BI Server installed machine. 

* Download the files from the below link,

    [Updated files](https://www.syncfusion.com/downloads/support/directtrac/general/ze/LoginPage1717952210)

* Extract the downloaded ZIP file.

* You can add the image in the below location with `LoginPageBackgroundImage.png` name if you would like to add the background image for the Bold BI Server.

  **`{Downloaded Location}\LoginPage1717952210\IDP\Content\Styles\LESS\Accounts\images`**

* Copy and paste the IDP folder to the below Bold BI deployed location **`{Deployed Location}\IDP\`**.

    ![Login screen](/bold-bi-docs/static/assets/embedded/faq/images/customized-login-page.png)

* You can change the login page logo by the custom branding support in our settings option. Please refer the below help [link](https://help.syncfusion.com/bold-bi/rebranding/overview) for how to change the login screen logo.

    ![Rebranding](/bold-bi-docs/static/assets/embedded/faq/images/rebranding.png)

## Need more customization?

If you would like to customize the page from your end, you can update the below files based on your requirement.

  * `_LoginForm.cshtml` file which is placed in `{Deployed Location}\IDP\Views\Shared\_LoginForm.cshtml` allows you to modify the login form UI elements which are present in the below screenshot,

    ![LoginForm](/bold-bi-docs/static/assets/embedded/faq/images/loginform.png)

  * `_ExternalAuthentication.cshtml` file which is placed in `{Deployed Location}\IDP\Views\Shared\_ExternalAuthentication.cshtml` allows you to modify the advanced login options UI elements which are present in the below screenshot,

    ![ExternalAuthentication](/bold-bi-docs/static/assets/embedded/faq/images/ext_authentication.png)

  * `Login.cshtml` file which is placed in `{Deployed Location}\IDP\Views\Accounts\Login.cshtml` will act as a container and it has the common details of login information like below highlighted one,

    ![Login](/bold-bi-docs/static/assets/embedded/faq/images/login.png)

  * `_Layout.Accounts.cshtml` file which is placed in `{Deployed Location}\IDP\Views\Shared\_Layout.Accounts.cshtml` allows you to modify layout of the server login pages like header and footer.

  * To add or customize any styles for the added/modified elements, you can open the `css` file in a text editor and customize it as per your requirement from the below location,

    **`{Deployed Location}\IDP\Content\Styles\LESS\Accounts\`**

  * If you would like to add/Modify any validation/user interactions with Javascript/Jquery, you can add/modify in the below file,

    **`{Deployed Location}\IDP\Scripts\Accounts\Login.js`**

> **NOTE:**  By default, the Bold BI is deployed in "C:\BoldBI".

> **IMPORTANT:**  The applied customization will only be supported in the current version and this may not be reflected when you upgrade to the latest version of Bold BI Server. In this case, you may have to modify it at your end again. Also, we do highly not recommend the users to modify the login page UI elements as per your requirements. It has to be done as per your risk. Also, if any issues reported to the Bold BI support team, the team needs the customized files to reproduce the issue from our end to provide the resolution on it.
