---
layout: post
title:  Embed SDK ASP.NET Core Application | Bold BI Documentation
description: Find ASP.NET Core sample for embedding Bold BI. List all the dashboards and render the dashboard based on your selection after passing the authorization.
platform: bold-bi
documentation: ug

---

# Bold BI Dashboards Embedding in ASP.NET Core Sample with Embedded SDK

We have created ASP.NET Core sample with Embedded SDK, here we could listing all the dashboards and render the dashboard based on your selection after passing the authorization.

> **NOTE:**  The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation to start using first. The [Getting Started](/getting-started/embedding-in-your-application/) guide gives just enough information that you need to know before working on the sample.  

## How to run the sample

1. Please download the ASP.NET Core sample from <a href="https://onpremise-demo.boldbi.com/getting-started/asp-net-core/sample.zip" target="_blank">here</a>.  

2. In ASP.NET Core sample, you can find the EmbedProperties class file in Models folder.
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


4. You could get your Embed Secret key from administrator setting section. Please refer this [link](/site-administration/embed-settings/) for more details.  

5. Then run your ASP.NET Core sample.

## How this sample works

1. Based on the values provided in the `EmbedProperties.cs`, we would get the user token and validate it, then could get the dashboards list from server.

2. In `HomeController.cs`, we have added GetToken() method and GetDashboards() action, which has been called when initializing the DOM in `Index.html`.
![Initializing the DOM in Core](/static/assets/javascript/sample/images/core-home-getdashboard.png)

3. When you selecting the dashboard to render, we would authorize the server url by calling the GetEmbedDetails action with provided EmbedProperties values.
![Server Authorization in Core](/static/assets/javascript/sample/images/core-home-getdetails.png)

4. In above authorization, we have generated SignatureUrl with provided EmbedSecret key and validate embed details in Bold BI. Then only dashboard would be rendered in viewer-section of `index.cshtml`.

