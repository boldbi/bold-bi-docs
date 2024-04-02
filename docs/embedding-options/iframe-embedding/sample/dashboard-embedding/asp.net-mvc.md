---
layout: post
title: Dashboard Embedding in ASP.NET MVC Application | Bold BI Docs
description: Learn how to embed the dashboard in an ASP.NET MVC application using iFrame and learn the code to view the particular dashboard with different data connections.
platform: bold-bi
documentation: ug
---

# Dashboard Embedding in ASP.NET MVC Sample
This section explains how to embed the Bold BI dashboard into an ASP.NET MVC sample application by providing the dashboard URL. In this sample, we have rendered the dashboard embedding using Single Sign On (SSO) with Token-based authentication. The explanation is concise.

![DashboardView](/static/assets/iFrame-based/sample/images/dashboard-views.png)

## Prerequisites
* [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)
* [.NET Framework 4.8](https://dotnet.microsoft.com/en-us/download/dotnet-framework)
  
## How to run the sample

1. Please retrieve the sample of the [Iframe Dashboard embedding ASP.NET MVC](https://github.com/boldbi/iframe-dashboard-asp-net-mvc-sample) from GitHub.

2. You are required to set the following properties in the `EmbedProperties.cs` file as follows.

    ![Embed Properties](/static/assets/iFrame-based/sample/images/EmbedProperties.png#max-width=100%)

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboard.</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">Get your EmbedSecret key from embed tab by enabling <code>Enable embed authentication</code> in the <a href='https://help.boldbi.com/embedded-bi/site-administration/embed-settings/'>Administration page</a>. </td>
        </tr>  
        <tr>
        <td align="left">DashboardUrl</td>
            <td align=left">Get the <a href='https://help.boldbi.com/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link'>dashboard URL</a> of the dashboard in your Bold BI.</td>
        </tr> 
    </tbody>
    </table>   

3. Once you have configured the above embed properties, you can proceed to run your MVC application.

    ![DashboardView](/static/assets/iFrame-based/sample/images/dashboard-views.png)

## How this sample works

1. The dashboard will be rendered in the iframe using SSO with token based authentication, based on the `DashboardUrl` and other values set in the `EmbedProperties.cs` file.

    ![Embed Properties](/static/assets/iFrame-based/sample/images/EmbedProperties.png#max-width=100%)

2. The Embed parameters and the Embed Secret Key are mandatory parameters used to generate the `Embed Signature`. The `embed signature` files a hashed value generated for authentication in an embed request to the Bold BI server. It is obtained by using the `SignURL` method with the `embedParameters` and `embedSecretKey`, and it is then appended to the iframe URL as the `embed_signature` query parameter.

    ![Signature](/static/assets/iFrame-based/sample/images/signaturemethod-homecontroller.png)

3. In `index.cshtml`, the variables `embedSignature` and `dashboardUrl` are retrieved from `HomeController.cs` and `EmbedProperties.cs` respectively. The iframe URL is formed by appending the embed signature and parameters to the dashboard URL. This URL is then used to render the dashboard within an `<iframe>` element.

    ![Index Html](/static/assets/iFrame-based/sample/images/index-html.png)

> **NOTE:** You have the ability to customize the optional parameters within the `HomeController.cs` file.

