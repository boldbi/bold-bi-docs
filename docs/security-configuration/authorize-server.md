---
layout: post
title:  Authorization in Embed Application | Bold BI Documentation
description: Know about the authorization server in embedding application to authenticate with Bold BI server through sending user email, group details and embed signature.
platform: bold-bi
documentation: ug

---

# What is Authorization Server

Any application that embeds the Bold BI dashboard and widget needs to be authenticated with the Bold BI server. This authentication flow requires sending confidential information such as user email, group details, and embed signature to the Bold BI server. Therefore, you need to implement this authentication flow in your server application and provide the URL for connecting to your server in the Bold BI embed instance. 

![AuthorizeServer](/static/assets/javascript/images/authorize-server.png)

> **NOTE:**  The Authorization Server is simply an endpoint implemented in the embedding application. It receives details from the embed SDK instance and sends them to the Bold BI server for validation. This endpoint handles the authorization of the Bold BI embedding by communicating with the Bold BI Server, which is why we refer to it as the Authorization Server.

## How the Authorization Server works

1. The Bold BI embed instance calls the authorization endpoint implemented in the Embedding application, providing details such as the dashboard id, dashboard path, expiration time, and more. 

2. The Authorization Server, which receives details from the embed instance, will update the secure information such as user email, group details, and embed signature. This information will be sent to the Bold BI server for authorization.

3. The Bold BI server will utilize the user's email, dashboard path, and embed signature to authenticate the provided information.
    * Whether dashboard is valid or not.
    * Whether user is valid or not.
    * Whether user has access to that dashboard or not.
    * Whether this application is allowed to embed this dashboard or not.

4. After validating the previous details, the Bold BI server would send the following response to the Authorization Server. The Authorization Server will send the received details back to the Bold BI embed instance without making any modifications.
    * If details are valid, then it will send the access token and other internal embed details
    * If details are invalid, then it will sent the error details.

5. A Bold BI embed instance will either render the dashboard or show the error message, depending on the response received from the Authorization Server.

> **NOTE:**  Any application that sends the valid embed signature will be accepted as the authorization application to embed.

## Why the user email is needed

1. The user's email is required for rendering the dashboard because the Bold BI server will always validate the user and check if they have permission for that specific dashboard.

2. The dashboard can be configured to display specific information for the user. The Bold BI server would authenticate the user and generate the dashboard data according to the logged-in user. The dashboard data would vary for each user.

3. The dashboard collaboration and views are supported only for authorized users. Only authorized users can see the comments, apply filtering, and handle the views in the dashboard without any problems.