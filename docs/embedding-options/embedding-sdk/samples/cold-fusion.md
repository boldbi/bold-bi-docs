---
layout: post
title: Embedded Dashboard in ColdFusion Application | Bold BI Docs
description: Explore the steps to embed a Bold BI dashboard in a web application built using ColdFusion as the primary programming language.
platform: bold-bi
documentation: ug
---

# Bold BI Dashboards embedding in ColdFusion using Embedded SDK

A GitHub link has been provided to [get](https://github.com/boldbi/coldfusion-sample) the sample application, which demonstrates the rendering of a dashboard available on your Bold BI server. The next steps will guide you through creating a new embedding application in `ColdFusion` on your own. 

> **NOTE:** The best way to get started would be to read the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation. The `Getting Started` guide provides you with enough information that you need to know before working on the sample.   

## How to run the sample

 1. Please [get](https://github.com/boldbi/coldfusion-sample) the BoldBI ColdFusion Embed sample from the attached file.    

 2. You need to set the following properties in the `BoldBIEmbed.html` and `embedDetails.cfc` files as follows.

    ![Embed Properties](/static/assets/javascript/sample/images/coldfusion-props.png#max-width=80%)

    ![embed details](/static/assets/javascript/sample/images/embeddetailsColdfusion.png#max-width=80%)
    <meta charset="utf-8"/>
    <table>
      <tbody>
        <tr>
            <td align="left">ServerUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://dashboard.syncfusion.com/bi/site/site1)</td>
        </tr>   
        <tr>
          <td align="left">DashboardID</td>
            <td align="left">Provide the dashboard id of the dashboard you want to embed here.Please refer below how to get the dashboard id.</td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in Administration page as mentioned in next step. </td>
        </tr>    
      </tbody>
    </table>


 3. You can retrieve your Embed Secret key from the administrator setting section. Please refer to this [link](/site-administration/embed-settings/) for more details.

 4. Please run your ColdFusion application.

## How this sample works
 1. To authorize the server URL, call the GetEmbedDetails function as follows, based on the `dashboardId` provided in the `BoldBIEmbed.html`.
    ![embed details](/static/assets/javascript/sample/images/embeddetailsColdfusion.png#max-width=80%)

 2. In the above authorization, generate the `SignatureUrl` using the provided `EmbedSecret key` and validate the embed details in Bold BI. Once the details are validated, the dashboard will start rendering.

 3. In the `BoldBIEmbed.html` file, you can change the dashboard Id of the respective dashboard that you want to embed.
    ![Embed Properties](/static/assets/javascript/sample/images/coldfusion-props.png#max-width=80%)