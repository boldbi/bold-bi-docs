---
layout: post
title: Bold BI Application iFrame Embedding | Bold BI Documentation
description: Learn how to embed the Bold BI server and designer application into an iframe for the Bold BI version above 5.2.
platform: bold-bi
documentation: ug
---

# Embed the Bold BI Enterprise application into an iframe

This section describes how to embed the Bold BI application into an iframe for version above 5.2. This support is available only for the following services.

* Bold BI Server.
* Bold BI Designer. 

Follow the steps below continuously one by one to embed the Bold BI application and use it in your application.

## Setting up the JWT authentication in Bold ID

1.  Please refer to [link](/multi-tenancy/site-administration/authentication/json-web-token/#steps-to-configure-jwt-in-bold-bi) to configure `JWT settings` in the Bold ID application where you need to configure your external application URL details.

2.  Once saved the JWT settings, a `Signing Key` will be generated which needs to be used for signing the JSON web tokens from your application.
    ![JWT settings Signing key](/static/assets/images/SigningKey.png)

## Set up External Application for auto sign-in with JWT token in Bold BI

1.	In your application implement the code to get the `JSON web token` using the above generated `signing key`. Refer to the sample [here](/multi-tenancy/site-administration/authentication/json-web-token/#create-json-web-token).

2.	Call the Bold BI JWT callback URL which contains the site Identifier and above generated JWT web token like below for auto sign In into the Bold BI application.

    ```c#
    {Bold BI URL}/sso/jwt/callback?jwt={token}&site_identifier={site identifier}
    ```

3.	In your application, implement the Iframe code to load the Bold BI tenant URL where you want to embed Bold BI application as follows.

    ```c#
    <iframe src='http://{your_domain}/bi/site/{site_identifier}'></iframe>
    ```
4.	Once completed the above steps, now your application is ready.

## Set default authentication for Bold BI

1.  When the above configuration is set, you need to configure the `JWT SSO` as a default authentication so that Bold BI will automatically redirect to your application whenever it get accessed to auto sign In.

2.	Go to UMS Authentication Settings page using the link `‘http://{your_domain}/ums/administration’`, and Enable Default Authentication should be enabled and Choose `JWT SSO` from the dropdown in the General tab then `Save` the settings. 
    ![UMS Authentication Settings](/static/assets/images/UMSdefaultauthentication.png)

3.	Then go to Authentication Settings, in the BI site URL mentioned in the above iframe using the link `‘http://{your_domain}/bi/site/{site_identifier}/administration’`, and Enable Global Default Authentication should be enabled in the Authentication Control tab then `Save` the settings.
    ![BI Authentication Settings](/static/assets/images/BIAuthenticationSettings.png)

## Controlling link navigation behavior in embedded application

Once you embedded the Bold BI application some links in the Bold BI application will open in a new tab instead of loading inside the above configured Iframe. So we recommend enabling link navigation behavior to open on the same page by referring [here](/faq/how-to-control-link-navigating-behavior/).

## How Embed Bold BI application works

1.	Once the user `Login` into the sample external application, you can generate JSON Web Token for that user for the Bold BI application.

2.	Then the generated user token will be used in JWT callback URL `{Bold BI URL}/sso/jwt/callback?jwt={token}&site_identifier={site identifier}`, to login into the Bold BI application automatically whenever accessing your embedding page.

3.	If the user is available in the Bold BI tenant site, then login will be done otherwise user will be added and logged in.

4.	When the Bold BI site embedded page is accessed, it will be loaded in your application as shown. 
    ![Embedded Application](/static/assets/images/EmbeddedApplication.png)

## Help Links:

1.  Refer to this [link](/multi-tenancy/site-administration/authentication/) for more information about authentication settings.  

2.  Refer to this [link](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EmbeddingSample211738849) for sample external application to embed Bold BI site.