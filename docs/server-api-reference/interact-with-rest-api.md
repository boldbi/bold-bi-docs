---
layout: post
title: Working with Bold BI REST APIs - Embedded | Bold BI Docs
description: Work with Bold BI Embedded REST APIs through the interactive API documentation. Just get the access token to authenticate the API endpoint and get the response.
canonical: "/server-api-reference/interact-with-rest-api/"
platform: bold-bi
documentation: ug
---

# Interact with our REST API

This section explains how to use our interactive API documentation to play.

You need to obtain the access token in order to authenticate with the API endpoints and retrieve the responses.

## Get Access Token
Each user has their own unique token to authenticate the requests, which should be added in the header of the request.

To get the `User Token` follow the below steps:

1. Navigate to the appropriate interactive REST API documentation link.
     * [v1.0](/server-api-reference/v1.0/try-it-now/)
     * [v2.0](/server-api-reference/v2.0/try-it-now/)
     * [v3.0](/server-api-reference/v3.0/try-it-now/)
     * [v4.0](/server-api-reference/v4.0/try-it-now/)
     * [v5.0](/server-api-reference/v5.0/try-it-now)
2. Expand the `Authentication` section and then click `Try it out`.
![Authentication](/static/assets/rest-api-reference/images/authentication.png)
3. We have already hosted the Bold BI Server for a public demo on [this](https://onpremise-demo.boldbi.com/) domain. To access the public demo, you need to obtain the access token using the sample credentials provided below.

     **Username** - `guest@boldbi.com`

     **grant_type** - `password`

     **password** - `Demo759!`
     
![Demo credential](/static/assets/rest-api-reference/images/demo-credential.png)
4. Click `Execute` and you will receive the response as shown below. Obtain the `access_token` from the Response body.
![Response](/static/assets/rest-api-reference/images/demo-response.png)
5. Now you need to add the access token as the Authorization header for further API calls.
6. Click the `Authorize` button, which is located in the top right corner of the page.
![Authorize button](/static/assets/rest-api-reference/images/authorize-button.png)
7. A dialog box will open, in which you should enter the access token in the `Value` box using this format: **'Bearer' + access_token**. Then, click the `Authorize` button.
![Authorize dialog](/static/assets/rest-api-reference/images/authorization-dialog.png)
8. Now, you can interact with the other REST APIs by using the necessary parameters that are mentioned in each API.

> **NOTE:** In this interactive document, API responses and their code descriptions are also mentioned.
