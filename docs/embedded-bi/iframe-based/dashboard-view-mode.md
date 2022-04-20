---
layout: post
title:  Embed Dashboard in an iframe | Bold BI Documentation
description: Learn how to embed a dashboard in various modes using iFrame with private/public accessibility, advance security, filter parameters, and more.
platform: bold-bi
documentation: ug
---

# Embed the dashboard in an iframe

A dashboard can be embedded in the create, edit and view modes in any application using URL. In create mode, a new dashboard can be created. In edit mode, existing dashboard can be edited. In the view, users can interact with the dashboard by filtering data, adding comments, and saving the filter views.  

## Steps to embed dashboard in view mode using URL 

> **NOTE:** A similar procedure should be followed to render the multi-tab dashboard in view mode. 

1. To get the **embed URL**, click the context menu of the respective dashboard and choose the `Get Embed code` option.  
![EmbedCodeOption](/static/assets/embedded/iFrame-based/images/embed-option.png#max-width=75%)  

2. By Default, Dashboard Comments, Widget Comments, Saved Views, Export, and SSO options are disabled. You can enable this option by sliding the button given in embed dialog.  
![EnableOption](/static/assets/embedded/iFrame-based/images/enable-option.png#max-width=45%)  
<table>
    <tr>
      <td>
       Dashboard Comments
      </td>
      <td>
       Dashboard comment panel would be shown in embedded view if enabled this parameter.
      </td>
    </tr>
    <tr>
      <td>
       Widget Comments
      </td>
      <td>
       Widget comment panel would be shown in embedded view if enabled this parameter.
      </td>
    </tr>
    <tr>
      <td>
       Saved Views
      </td>
      <td>
       Dashboard views panel would be shown in embedded view if enabled this parameter.
      </td>
    </tr>
    <tr>
      <td>
       Export
      </td>
      <td>
       Dashboard/Widget exporting options would be shown in embedded view if enabled this parameter.
      </td>
    </tr>
    <tr>
      <td>
       SSO
      </td>
      <td>
       Single Sign-On authentication is enabled for embedded view if configured authentication is selected as an authentication parameter.
      </td>
    </tr>
</table>  

4. Copy the embed URL by clicking the copy icon from the Embed Code dialog.  
	![CopyEmbedCode](/static/assets/embedded/iFrame-based/images/copy-embedcode.png#max-width=45%)

5. Embed the copied URL into other web application.

6. When you run the web application, it will show the login window or dashboard, based on the type of dashboard. When you click the login button and log in with valid user credentials, the dashboard will render automatically. To avoid login, use single sign-on [method.](/embedded-bi/iframe-based/dashboard-view-mode/#embed-dashboards-using-external-sso-authentication)
	
	![EmbedLogin](/static/assets/embedded/iFrame-based/images/iframeLoginPage.png#max-width=45%) 
	![EmbedViewDashboard](/static/assets/embedded/iFrame-based/images/embed-dashboard-view.png#max-width=85%)   

> **NOTE:**  In the case of SSO enabled parameters, a login prompt will appear if you haven't logged in and selected SSO authentication; if you have already logged in, the dashboard will be rendered based on the permission granted to the user to that dashboard. 



## Embed Dashboards using external SSO authentication

Bold BI supports embedding the dashboards into other web applications using external Single Sign-On authentication in iframe based embedding. Bold BI application can be configured to support `Windows Active Directory`, `Azure Active Directory`, `OAuth 2.0` and `OpenID Connect` authentications.

### Embed using Windows AD Authentication
If the dashboard server is deployed into the machine that is already configured with the **Windows Active Directory**, then follow the steps to get the embed code with the `Windows Active Directory SSO` settings. Learn more about configure Window Active Directory settings [here](/embedded-bi/site-administration/active-directory/active-directory).

1. Click the context menu of the respective dashboard and choose the `Get Embed code` option. In the Embed Code dialog box, you can enable `SSO` and select the `Windows Active Directory` option as shown in the following image.
![EmbedSSOWindows](/static/assets/embedded/iFrame-based/images/embed-sso-windows.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog, and then paste it into a web application that has configured the Windows Active Directory.

3. Run the web application and get sign-in with windows active directory , now the dashboard would be rendered automatically based on permission given to the windows user.

### Embed using Azure AD Authentication
If the dashboard server is deployed into the machine that is configured with the **Azure Active Directory**, you can follow the below steps to get the embed code with the `Azure Active Directory SSO` settings. Learn more about configure Azure Active Directory settings [here](/embedded-bi/site-administration/sso/azure-active-directory).

1. Click on the context menu of the respective Dashboard and choose `Get Embed code` option. In Embed Code dialog, you could enable `SSO` and select `Azure Active Directory` option as shown below.
![EmbedSSOAzure](/static/assets/embedded/iFrame-based/images/embed-sso-azure.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste the embed URL into an web application which has configured the Azure Active Directory.

3. Run the web application and get sign-in with Azure Active Directory and dashboard would be rendered automatically based on permission given to the azure user.

### Embed using OAuth 2.0 Authentication
The Bold BI application has been configured with **OAuth 2.0** for Single Sign-On (SSO), then follow the steps to get the embed code with `OAuth SSO` settings. Learn more about configure OAuth 2.0 settings [here](/embedded-bi/site-administration/sso/oauth-2.0-support).

1. Click on the context menu of the respective Dashboard and choose `Get Embed code` option. In Embed Code dialog, you could enable `SSO` and select `OAuth 2.0` option as shown below.
![EmbedSSOOAuth](/static/assets/embedded/iFrame-based/images/embed-sso-oauth.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste the embed URL into an web application which has configured the OAuth 2.0 authentication.

3. Run the web application and get sign-in with configured OAuth provider and dashboard would be rendered automatically based on permission given to the user.

### Embed using OpenID Connect Authentication
The Bold BI application has been configured with **OpenID Connect** for Single Sign-On (SSO), then follow the steps to get the embed code with `OpenID SSO` Settings. Learn more about configure OpenID settings [here](/embedded-bi/site-administration/sso/openid-support).

1. Click on the context menu of the respective Dashboard and choose `Get Embed code` option. In Embed Code dialog, you could enable `SSO` and select `OpenID` option as shown below.  
![EmbedSSOOpenID](/static/assets/embedded/iFrame-based/images/embed-sso-openid.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste the embed URL into an web application which has configured the OpenID Connect authentication.

3. Run the web application and get sign-in with configured OpenID, now dashboard will be rendered automatically based on permission given to the user. 

## Public embedding
If you want to embed the dashboard without user authentication, then make the dashboard public and then embed it. The public dashboard will be rendered automatically without credentials. You cannot enable the comments panel for public dashboard embedding. 

> **NOTE:** Embedding the public dashboard will not work when public dashboard setting is disabled. Learn more about the dashboard settings [here](/cloud-bi/site-administration/dashboard-settings/).

## Private embedding
Private dashboards can be embedded, which are accessible to users in the Bold BI, who has the read permission, and these dashboards would be requested to login to Bold BI server before rendering. So embedded dashboard will show the login page whenever private dashboards are embedded and the user is not authenticated yet.

> **NOTE:**  By default, dashboard access mode will be set to private until it is changed to the public by the owner of the dashboard.  

## Advanced security
Using the dashboard security option, you can control which websites, IP addresses, and applications can embed the dashboard. Learn more about dashboard security [here](/embedded-bi/managing-resources/manage-dashboards/advanced-dashboard-security/).  

> **NOTE:**  Learn more details about embedding dashboard sample [here](/embedded-bi/iframe-based/sample/dashboard-embedding-sample/).  

## Available parameter
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th> 
      <th>In Dashboards</th> 
      <th>In Widgets</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>dashboard_comments</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide dashboard comments</td>
      <td>NA</td>
    </tr>
    <tr>
      <td><code>widget_comments</code></td>
      <td><code>boolean</code></td>
      <td>NA</td>
      <td>Show/hide widget comments</td>
    </tr>
    <tr>
      <td><code>views</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide dashboard views</td>
      <td>NA</td> 
    </tr>
    <tr>
      <td><code>export</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide dashboard export option</td>
      <td>Show/hide widget export option</td> 
    </tr>
    <tr>
      <td><code>hide_header</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide dashboard header</td>
      <td>NA</td> 
    </tr>
    <tr>
      <td><code>hide_tool</code></td>
      <td><code>string</code></td>
      <td>Predefined values: tm-Theme,dp-Dashboard Parameter,fo-Filter Overview,fs-FullScreen,rf-Refresh,om-Option Menu</td>
      <td>NA</td>
    <tr>
    <tr>
      <td><code>hide_widget_tool</code></td>
      <td><code>string</code></td>
      <td>NA</td>
      <td>Predefined values: fr-Filter,fs-FullScreen,om-Option Menu</td>      
    <tr>
    <tr>
      <td><code>hassso</code></td>
      <td><code>boolean</code></td>
      <td>Enable/Disable SSO Authentication</td>
      <td>Enable/Disable SSO Authentication</td>      
    <tr>
    <tr>
      <td><code>externallogin</code></td>
      <td><code>string</code></td>
      <td>Predefined values: windowsad, azuread, oauth, openid</td>
      <td>Predefined values: windowsad, azuread, oauth, openid</td>       
    <tr>
  </tbody> 
</table>

## How to embed the dashboard in create mode using the URL

1. To create a new dashboard, change the embed URL, as shown in the following image.
    ![EmbedDashboardCreate](/static/assets/embedded/iFrame-based/images/dashboard-create-embed-code.png#max-width=65%) 

2. Embed the above embed URL into any web application.    

3. Run the web application; it will show the login window or dashboard based on the type of dashboard. Click the login and enter the valid user credentials, and then the create page will render automatically. 
    ![EmbedLogin](/static/assets/embedded/iFrame-based/images/iframeLoginPage.png#max-width=45%)  
    ![EmbedCreateDashboard](/static/assets/embedded/iFrame-based/images/embedded-create.png#max-width=85%)  

## How to embed the dashboard in edit mode using the URL

1. In an HTML page, paste the copied embed URL and change the `dashboards` to `dashboard-designer,` as shown in the following highlighted part of the HTML page.
	![EmbedDashboardDesign](/static/assets/embedded/iFrame-based/images/dashboard-design-embed-code.png#max-width=85%) 

2. Embed the above embed URL into any web application.    

3. Run the web application, it will show the login window or dashboard based on the type of the dashboard. Click the login and enter the valid user credentials and the widget will render automatically.

	![EmbedLogin](/static/assets/embedded/iFrame-based/images/iframeLoginPage.png#max-width=45%) 
	![EmbedDesignDashboard](/static/assets/embedded/iFrame-based/images/embedded-design.png#max-width=90%) 

## Embedding dashboard with filter parameter
You can pass parameters to a dashboard by including them in a dashboard URL in embedding. Passing parameter values within URL will apply filter in the dashboard on initial load itself. You can learn more details [here](/embedded-bi/working-with-dashboards/preview-dashboard/urlparameters/#passing-parameter-with-url).  

## Dynamic connection string for dashboard embedding
The Dynamic Connection String feature enables you to modify the connection string of the data sources in dashboard view mode. This feature is applicable only to the dashboards embedded using the Dashboard Embedding feature. Dashboards in the Bold BI application will be rendered using the connection string used while creating the data source. Learn more details [here](/embedded-bi/iframe-based/dynamic-connection-string/).  
