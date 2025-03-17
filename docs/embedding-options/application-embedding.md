---
layout: post
title: Bold BI Application iFrame Embedding | Bold BI Documentation
description: Learn how to embed the Bold BI server and designer application into an iframe for the Bold BI version above 5.2.
platform: bold-bi
documentation: ug
---

# Embed the Bold BI Enterprise application into an iframe

This section explains how to embed the Bold BI application into an iframe for versions above 5.2. This support is only available for the following services.

* Bold BI Server.
* Bold BI Designer. 

Please follow the steps below continuously, one by one, to embed the Bold BI application and use it in your own application. 

## Setting up the JWT authentication in Bold ID

1. Please refer to [JWT settings](/multi-tenancy/site-administration/authentication/json-web-token/#steps-to-configure-jwt-in-bold-bi) to configure `JWT settings` in the Bold ID application. You will need to configure your external application URL details.

2.  After saving the JWT settings, a `Signing Key` will be generated. This key must be used to sign the JSON web tokens from your application.
    ![JWT settings Signing key](/static/assets/images/SigningKey.png)

## Set up External Application for auto sign-in with JWT token in Bold BI

1. In your application, implement the code to retrieve the `JSON web token` using the `signing key` generated above. Refer to the sample [JSON web token](/multi-tenancy/site-administration/authentication/json-web-token/#create-json-web-token). 

2.	Make a call to the Bold BI JWT callback URL, which includes the site Identifier and the JWT web token generated earlier, in order to automatically sign in to the Bold BI application.

    ```c#
    {Bold BI URL}/sso/jwt/callback?jwt={token}&site_identifier={site identifier}
    ```

3.	Please implement the Iframe code in your application to load the Bold BI tenant URL where you would like to embed the Bold BI application.

    ```c#
    <iframe src='http://{your_domain}/bi/site/{site_identifier}'></iframe>
    ```
4.	After completing the above steps, your application is now ready.

## Set default authentication for Bold BI

1.  When the above configuration is set, you need to configure the `JWT SSO` as a default authentication so that Bold BI will automatically redirect to your application whenever it get accessed to auto sign In. 

2.	To access the UMS Authentication Settings page, click on the link `‘http://{your_domain}/ums/administration’`. Once on the page, enable Default Authentication and select `JWT SSO` from the dropdown menu in the General tab. Finally, `Save` the settings.
    ![UMS Authentication Settings](/static/assets/images/UMSdefaultauthentication.png)

3.	Afterwards, navigate to the Authentication Settings on the BI site URL provided in the preceding iframe using the link `‘http://{your_domain}/bi/site/{site_identifier}/administration’`. Make sure to enable the Global Default Authentication in the Authentication Control tab, and then  `Save` the settings.
    ![BI Authentication Settings](/static/assets/images/BIAuthenticationSettings.png)

## Controlling link navigation behavior in embedded application

Once you have embedded the Bold BI application, some links within the application will open in a new tab instead of loading inside the configured iframe above. Therefore, we recommend enabling link navigation behavior to open on the same page by referring to the instructions provided in [this documentation](https://support.boldbi.com/kb/article/16737/how-to-control-link-navigating-behavior).

## How Embed Bold BI application works

1.	Once the user `Login` the sample external application, you can generate a JSON Web Token for that user in order to use it in the Bold BI application.

2.	The generated user token will then be used in the JWT callback URL `{Bold BI URL}/sso/jwt/callback?jwt={token}&site_identifier={site identifier}` to automatically log in to the Bold BI application whenever accessing your embedding page.

3.	If the user is available on the Bold BI tenant site, they will log in; otherwise, the user will be added and logged in.

4.	When the Bold BI site embedded page is accessed, it will be loaded in your application as shown. 
    ![Embedded Application](/static/assets/images/EmbeddedApplication.png)

## Help Links:

1. Please refer to the document for additional information regarding [authentication](/multi-tenancy/site-administration/authentication/) settings.

2. Please refer to this [Embedding Sample](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EmbeddingSample211738849) link for a sample external application that can be used to embed Bold BI site.