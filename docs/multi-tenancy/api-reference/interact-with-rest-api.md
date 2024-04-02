---
layout: post
title: Working with API – Site Administration | Bold BI Documentation
description: Work with Site Administration REST APIs through the interactive API documentation. Just get the access token to authenticate the API endpoint and get the response.
canonical: "/multi-tenancy/site-administration/api-reference/interact-with-rest-api/"
platform: bold-bi
documentation: ug
---

# Interact with Our REST API

This section explains how to use our interactive API documentation.

You need to obtain an access token to authenticate the API endpoints in order to receive responses.

## Get Access Token
Each client has its own unique token to authenticate requests, which should be added to the header of the request.

To obtain the `Client Token`, follow these steps:

1. Navigate to the appropriate interactive REST API documentation link.
     * [v1.0](https://help.boldbi.com/embedded-bi/site-administration/api-reference/v1.0/try-it-now/)
     * [v2.0](https://help.boldbi.com/embedded-bi/site-administration/api-reference/v2.0/try-it-now/)
2. Expand `Authentication` and click `Try it out`.
![Authentication](/static/assets/rest-api-reference/images/site-administration/authentication.png)
3. We have already hosted our application for public demonstration at [this](https://onpremise-demo.boldbi.com/) domain. To access the public demo, you will need to obtain the access token using the following sample credentials.

     **client_id** - `92773343-b3d8-4fb6-adcb-31568bfdd259`

     **grant_type** - `client_credentials`

     **client_secret** - `TfICgjhA31+roPaVHE56gr+VKjc1Z7DOKx0FURuUIGFgUIOD/cPYUg/jATbC3h/r7zoMvtrMaqe/TXJRNIiKjg==`
     
![Demo credential](/static/assets/rest-api-reference/images/site-administration/demo-credential.png)
4. Click `Execute` and you will receive the response as follows: Obtain the `access_token` from the Response body.
![Response](/static/assets/rest-api-reference/images/site-administration/demo-response.png)
5. Now, you need to add the `access_token` for further API calls as an Authorization header.<br/>
6. Click the `Authorize` button, located in the top-right corner of the page.
![Authorize button](/static/assets/rest-api-reference/images/site-administration/authorize-button.png)
7. A dialog will open; enter the access token in the `Value` box with this format: **'Bearer' + access_token**, then click the `Authorize` button.
![Authorize dialog](/static/assets/rest-api-reference/images/site-administration/authorization-dialog.png)
8. You can now interact with the other REST APIs using the necessary parameters specified in each API.

> **NOTE:**  API responses and their code descriptions are mentioned in this interactive document.
