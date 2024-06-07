---
layout: post
title:  Embed a dashboard in other JavaScript platforms | Bold BI Docs
description: Explore the steps to embed a dashboard in various JavaScript platforms like ColdFusion, Java Servlet, Django, Ionic and more since Bold BI v3.3.40.
platform: bold-bi
documentation: ug
---

# Embed dashboard in other platforms

The samples have been created in other platforms to embed the Bold BI Dashboard. Here, you can set the server and dashboard details as the embed details, then the dashboard will be rendered after passing the authorization. The platforms are:

 * ColdFusion
 * Java Servlet
 * Django
 * Ionic

> **NOTE:** The best way to get started would be reading the [Getting Started](/getting-started/embedding-in-your-application/) section of the documentation.  The `Getting Started` guide gives you enough information that you need to know before working on the sample.      

## ColdFusion sample to embed dashboard

 1. Please [get](https://github.com/boldbi/coldfusion-sample) the BoldBI ColdFusion Embed sample from the attached file.    

 2. You need to set the following properties in the `BoldBIEmbed.html` and `embedDetails.cfc` file as follows.

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


 3. You can get your Embed Secret key from the administrator setting section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further information.

 4. Run your ColdFusion application.

### How this sample works
 1. Based on the `dashboardId` provided in the `BoldBIEmbed.html`,authorize the server URL by calling the GetEmbedDetails function as follows.
    ![embed details](/static/assets/javascript/sample/images/embeddetailsColdfusion.png#max-width=80%)

 2. In the above authorization, generate the `SignatureUrl` with the provided `EmbedSecret key` and validate the embed details in Bold BI. Once details are validated, the dashboard starts to render.

 3. In the `BoldBIEmbed.html`, change the dashboard Id of the respective dashboard as you wish to embed.
    ![Embed Properties](/static/assets/javascript/sample/images/coldfusion-props.png#max-width=80%)


## Java Servlet sample to embed dashboard

 1. Please [get](https://github.com/boldbi/java-servlet-sample) the Java Servlet project from this link.

 2. You need to set your embed property details in the `index.jsp` and `BoldBI.java.`
    ![Embed Properties in Index](/static/assets/javascript/sample/images/java-index-props.png)
    ![Embed Properties in API](/static/assets/javascript/sample/images/java-boldbi-props.png)  
    
    <meta charset="utf-8"/>
    <table>
    <tbody>
    <tr>
        <td align="left">SiteIdentifier</td>
        <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
    </tr>
    <tr>
        <td align="left">RootUrl</td>
        <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)</td>
    </tr>
    <tr>
        <td align="left">Environment</td>
        <td align="left">Your Bold BI application environment. (If Cloud, you should use <code>cloud</code>, if  Enterprise, you should use <code>onpremise</code>)</td>
    </tr>
    <tr>
        <td align="left">DashboardId</td>
        <td align="left">Set the item id of the dashboard to embed from BI server. </td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard details from the BI server</td>
    </tr>
    <tr>
        <td align="left">EmbedSecret</td>
        <td align="left">You could get your EmbedSecret key from Embed tab by enabling <code>Enable embed authentication</code> in Administration page as shown below</td>
    </tr>
    </tbody>
    </table>


 3. You can get your Embed Secret key from the administrator setting section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further information.   

 4. Run your Java Servlet project.

### How this sample works

 1. Based on the `dashboardId` provided in the `index.jsp`, authorize the server by calling the `doPost` function using the `AuthorizeURL(http://localhost:8080/BoldBIEmbed/BoldBI.do)` with the provided EmbedProperties values. 
    ![Get Embed Details](/static/assets/javascript/sample/images/java-authorize.png)

 2. In the above authorization, generate the SignatureURL with the provided EmbedSecret key and embed details, which can be validated in the Bold BI Server API, and returns the token. Based on the returned token, the dashboard will be started to render in the `index.jsp`.

 3. In the `index.jsp`, change the dashboard Id of the respective dashboard based on your requirement.
    ![Set Dashboard Id](/static/assets/javascript/sample/images/java-dashboard.png)  

## Django sample to embed the dashboard

 1. Please [get](https://github.com/boldbi/django-sample) the Django sample from the attached file.

 2. You need to set the following properties in the `models.py` file as follows. 
    ![Embed Properties](/static/assets/javascript/sample/images/django-props.png#max-width=75%)

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">RootUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi)</td>
        </tr>
        <tr>
            <td align="left">SiteIdentifier</td>
            <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
        </tr>
        <tr>
        <td align="left">DashboardId</td>
            <td align="left">Provide the dashboard id of the dashboard that you want to embed here.</td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list.</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in Administration page as mentioned in next step.</td>
        </tr>    
    </tbody>
    </table>

 3. You can get your Embed Secret key from the administrator setting section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further information.

 4. Run your Django application.

### How this sample works

 1. Based on the provided embed details with the dashboard, authorize the server URL by calling the get embed details function `(views.py/get_embed_details)` call with the provided `EmbedProperties` values
 
    Learn more about the [authorization server](/security-configuration/authorize-server/).
    
    ![Authorize Server URL](/static/assets/javascript/sample/images/django-api.png)
    ![Get Embed Details](/static/assets/javascript/sample/images/django-authorize.png)

    > **NOTE:** Remove the CSRF Token from the headers, if your application does not have CSRF middleware `(django.middleware.csrf.CsrfViewMiddleware)`.
    
    ![CSRF Token](/static/assets/javascript/sample/images/django_csrf_token.png)

 2. In the above authorization, generate the SignatureUrl using the provided EmbedSecret key and validate embed details in Bold BI. Once details are validated, the dashboard starts to render.

 3. In the `models.py`, change the dashboard Id of the respective dashboard that you want to embed.
    ![Set Dashboard Id](/static/assets/javascript/sample/images/django-props.png)

## Ionic sample to embed dashboard
 
 1. Please [get](https://github.com/boldbi/ionic-with-aspnet-core-sample) the Ionic project.

 2. You need to set the following properties in the `home.service.ts` and the dashboard id in the `home.page.ts` files as follow.
    ![Ionic_properties](/static/assets/javascript/sample/images/ionic-properties.png#max-width=75%)
    ![Ionic_renderdashboard](/static/assets/javascript/sample/images/ionic-renderdashboard.png#max-width=75%)
  
    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
        <td align="left">apiHost</td>
        <td align="left">Java Servlet Core application would be run on http://localhost:61377/, which needs to be set as apiHost</td>
        </tr>
        <tr>
            <td align="left">environment</td>
            <td align="left">Your Bold BI application environment. (If Cloud, you should use <code>cloud</code>, if Enterprise, you should use <code>enterprise</code>)</td>
        </tr>
        <tr>
            <td align="left">RootUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi)</td>
        </tr>
        <tr>
            <td align="left">SiteIdentifier</td>
            <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
        </tr>
        <tr>
        <td align="left">DashboardId</td>
            <td align="left">Provide the dashboard id of the dashboard that you want to embed here.</td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list.</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in the Administration page as mentioned in the next step.</td>
        </tr>    
    </tbody>
    </table>

 3. You can get your Embed Secret key from the administrator setting section. Please refer to the [Embed Settings](/site-administration/embed-settings/) for further information.

 4. Run your Ionic application.

### How this sample works

 1. Based on the dashboardId provided in the `home.page.ts`, authorize the server URL by calling the GetEmbedDetails function as follows.
    ![Ionic_renderdashboard](/static/assets/javascript/sample/images/ionic-renderdashboard.png#max-width=75%)

 2. The SignatureUrl will be generated with the provided EmbedSecret key and validate the embed details in Bold BI. Once details are validated, the dashboard starts to render using the `renderDashboard()` method available in the `home.page.ts`.

 3. In the `home.page.ts` file, change the dashboard Id of the respective dashboard as you wish to embed.