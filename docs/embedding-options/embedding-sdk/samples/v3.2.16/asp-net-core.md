---
layout: post
title:  Embed SDK ASP.NET Core Application | Bold BI Documentation
description: Find ASP.NET Core sample for embedding Bold BI. List all the dashboards and render the dashboard based on your selection after passing the authorization.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards Embedding in ASP.NET Core Sample with Embedded SDK

We have created an ASP.NET Core sample using the Embedded SDK. Here, we can list all the dashboards and render the selected dashboard after passing the authorization.

> **NOTE:**  The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation first. The [Getting Started](/getting-started/embedding-in-your-application/) guide provides just enough information that you need to know before working on the sample.

## How to run the sample

1. Please download the [ASP.NET Core](https://github.com/boldbi/samples/tree/master/v3.2.16/asp-net-core) sample.

2. In the ASP.NET Core sample, you can find the EmbedProperties class file in the Models folder.
![Properties](/static/assets/javascript/sample/images/core-properties.png)

3. In `EmbedProperties.cs`, you need to set the following properties. 

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">Environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud`, if  Enterprise, you should use `enterprise`)</td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">UserPassword</td>
        <td align="left">Password of the Admin in Bold BI, which would be used to get the dashboards list</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling `Enable embed authentication` in Administration page as mentioned in next step</td>
    </tr>
  </tbody>
</table>


4. You can obtain your Embed Secret key from the administrator settings section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further information. 

5. Then, run your ASP.NET Core sample.

## How this sample works

1. Based on the values provided in the `EmbedProperties.cs`, we would obtain the user token and validate it. Afterward, we could retrieve the list of dashboards from the server.

2. In the `HomeController.cs` file, we have added the GetToken() method and the GetDashboards() action, which are called when initializing the DOM in `Index.html`.
![Initializing the DOM in Core](/static/assets/javascript/sample/images/core-home-getdashboard.png)

3. When you are selecting the dashboard to render, we will authorize the server URL by calling the GetEmbedDetails action with the provided EmbedProperties values.
![Server Authorization in Core](/static/assets/javascript/sample/images/core-home-getdetails.png)

4. In the above authorization, we have generated a SignatureUrl using the provided EmbedSecret key and validated the embed details in Bold BI. Only then will the dashboard be rendered in the viewer section of `index.cshtml`.

