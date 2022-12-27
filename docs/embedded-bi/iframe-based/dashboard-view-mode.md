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

2. Choose the mode value as `View` for rendering a dashboard in the View mode.
![ModeOption](/static/assets/embedded/iFrame-based/images/select-mode.png#max-width=45%)

3. By Default, Dashboard Comments, Widget Comments, Saved Views, Export, and SSO options are disabled. Enable this option by sliding the button given in the embed dialog. 
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

5. Embed the copied URL into other web applications.

6. When you run the web application, it will show the login window or dashboard, based on the type of dashboard. When you click the login button and log in with valid user credentials, the dashboard will render automatically. To avoid login, use single sign-on [method.](/embedded-bi/iframe-based/dashboard-view-mode/#embed-dashboards-using-external-sso-authentication)
	
	![EmbedLogin](/static/assets/embedded/iFrame-based/images/iframeLoginPage.png#max-width=45%) 
	![EmbedViewDashboard](/static/assets/embedded/iFrame-based/images/embed-dashboard-view.png#max-width=85%)   

> **NOTE:**  In the case of SSO enabled parameters, a login prompt will appear if you haven't logged in and selected SSO authentication; if you have already logged in, the dashboard will be rendered based on the permission granted to the user to that dashboard. 



## Embed Dashboards using external SSO authentication

Bold BI supports embedding the dashboards into other web applications using the external Single Sign-On authentication in the iframe based embedding. The Bold BI application can be configured to support the `Windows Active Directory`, `Azure Active Directory`, `OAuth 2.0` and `OpenID Connect` authentications.


### Embed using Windows AD Authentication
The Bold BI application has been configured with the **Windows Active Directory**, the following steps show how to get the embed code with the `Windows Active Directory SSO` settings. Learn more about the configure Window Active Directory settings [here](/embedded-bi/site-administration/active-directory/active-directory).

1. Click the context menu of the respective dashboard and choose the `Get Embed code` option. In the Embed Code dialog box, select mode as `View`.  Enable the `SSO` and select the `Windows Active Directory` option as shown in the following image.
![EmbedSSOWindows](/static/assets/embedded/iFrame-based/images/embed-sso-windows.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste it into a web application that has configured the Windows Active Directory.

3. Run the web application and get sign-in with the windows active directory. Now, the dashboard would be rendered automatically based on the permission given to the windows user.


### Embed using Azure AD Authentication
The Bold BI application has been configured with the **Azure Active Directory**, the following steps show how to get the embed code with the `Azure Active Directory SSO` settings. Learn more about the configure Azure Active Directory settings [here](/embedded-bi/site-administration/sso/azure-active-directory).

1. Click the context menu of the respective Dashboard and choose `Get Embed code` option. In the Embed Code dialog, select mode as `View`. Enable the `SSO` and select the `Azure Active Directory` as shown in the following image.
![EmbedSSOAzure](/static/assets/embedded/iFrame-based/images/embed-sso-azure.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste it into a web application that has configured the Azure Active Directory.

3. Run the web application and get sign-in with the Azure Active Directory. Now, the dashboard would be rendered automatically based on the permission given to the azure user.


### Embed using OAuth 2.0 Authentication
The Bold BI application has been configured with the **OAuth 2.0** , the following steps show how to get the embed code with the `OAuth SSO` settings. Learn more about the configure OAuth 2.0 settings [here](/embedded-bi/site-administration/sso/oauth-2.0-support).

1. Click the context menu of the respective Dashboard and choose `Get Embed code` option. In Embed Code dialog, select mode as `View`. Enable the `SSO` and select  the `OAuth 2.0` option as shown in the following image.
![EmbedSSOOAuth](/static/assets/embedded/iFrame-based/images/embed-sso-oauth.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste it into a web application that has configured the OAuth 2.0 authentication.

3. Run the web application and get sign-in with the configured OAuth provider. Now, the dashboard would be rendered automatically based on the permission given to the OAuth user.

### Embed using OpenID Connect Authentication
The Bold BI application has been configured with the **OpenID Connect** , the following steps show how to get the embed code with the `OpenID SSO` Settings. Learn more about the configure OpenID settings [here](/embedded-bi/site-administration/sso/openid-support).

1. Click the context menu of the respective Dashboard and choose `Get Embed code` option. In Embed Code dialog,s elect mode as `View`. Enable the `SSO` and select the `OpenID` option as shown in the following image.  
![EmbedSSOOpenID](/static/assets/embedded/iFrame-based/images/embed-sso-openid.png#max-width=45%)

2. Copy the embed URL by clicking the copy icon from the Embed Code dialog and paste it into a web application that has configured the OpenID Connect authentication.

3. Run the web application and get sign-in with configured OpenID. Now, the dashboard would be rendered automatically based on  the permission given to the OpenID user. 

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
      <td><code>embed_dashboard_views_edit</code></td>
      <td><code>boolean</code></td>
      <td>Enable/Disable the Save and Save As view option in the filter overview dropdown.</td>
      <td>NA</td>
    </tr>
    <tr>
      <td><code>embed_dashboard_favorite</code></td>
      <td><code>boolean</code></td>
      <td>Enable/Disable the favorite icon in the dashboard toolbar.</td>
      <td>NA</td>
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
      <td>Show/hide the dashboard options with Predefined values:<br>tm-Theme,<br>dp-Dashboard Parameter,<br>fo-Filter Overview,<br>fs-FullScreen,<br>rf-Refresh,<br>om-Option Menu<br><br><code>Example</code>:<br>&hide_tool=tm,fo,fs,dp,rf,om</td>
      <td>NA</td>
    </tr>
    <tr>
      <td><code>hide_widget_tool</code></td>
      <td><code>string</code></td>
      <td>NA</td>
      <td>Show/hide the widget options with Predefined values:<br>fr-Filter,<br>fs-FullScreen,<br>om-Option Menu<br><br><code>Example</code>:<br>&hide_widget_tool=fr,fs,om</td>      
    </tr>
    <tr>
      <td><code>hassso</code></td>
      <td><code>boolean</code></td>
      <td>Enable/Disable SSO Authentication</td>
      <td>Enable/Disable SSO Authentication</td>      
    </tr>
    <tr>
      <td><code>externallogin</code></td>
      <td><code>string</code></td>
      <td>Predefined values:<br>windowsad,<br>azuread,<br>oauth,<br>openid</td>
      <td>Predefined values:<br>windowsad,<br>azuread,<br>oauth,<br>openid</td>       
    </tr>
    </tr>
     <tr>
      <td><code>embed_theme</code></td>
      <td><code>string</code></td>
      <td>Dashboard theme(custom) which will be applied for entire dashboard.</td>
      <td>Dashboard theme(custom) which will be applied for all widgets.</td>
    </tr>
    <tr>
      <td><code>embed_datasource_filter</code></td>
      <td><code>object</code></td>
      <td>The embedded dashboard can be filtered with passed Dashboard Parameter and URL Parameter.
      <br /><br />
      <code>Example</code>:
      <br />
      &embed_datasource_filter=&&dashboardparametername=parametervalue&urlparametername=parametervalue.
      </td>
      <td>The embedded dashboard can be filtered with passed Dashboard Parameter and URL Parameter.
      <br /><br />
      <code>Example</code>:
      <br />
      &embed_datasource_filter=&&dashboardparametername=parametervalue&urlparametername=parametervalue.
      </td>
    </tr>
  </tbody> 
</table>

### How to pass the Dashboard Parameter and URL Parameter filters in iFrame URL

In iFrame URL, you can pass separate and both types of filters(Dashboard Parameter/URL Parameter) values at the same time.

Pass your filters to the `embed_datasource_filter` parameter in the iFrame URL as like below.

**Example for passing Dashboard Parameter in iFrame URL**

```js
<iframe src='http://test.boldbi.com/bi/en-us/site/site1/dashboards/8428c9d9-85db-418c-b877-ea4495dcddd7/Predictive%20Analytics/Personal%20Expense%20Analysis?isembed=true&embed_datasource_filter=&&dashboardparametername=parametervalue' id='dashboard-frame' width='100%' height='600px' allowfullscreen frameborder='0'></iframe>
```

**Example for passing URL Parameter in iFrame URL**

```js
<iframe src='http://test.boldbi.com/bi/en-us/site/site1/dashboards/8428c9d9-85db-418c-b877-ea4495dcddd7/Predictive%20Analytics/Personal%20Expense%20Analysis?isembed=true&embed_datasource_filter=&urlparametername=parametervalue' id='dashboard-frame' width='100%' height='600px' allowfullscreen frameborder='0'></iframe>
```

**Example for passing both Dashboard and URL Parameters in iFrame URL**

```js
<iframe src='http://test.boldbi.com/bi/en-us/site/site1/dashboards/8428c9d9-85db-418c-b877-ea4495dcddd7/Predictive%20Analytics/Personal%20Expense%20Analysis?isembed=true&embed_datasource_filter=&&dashboardparametername=parametervalue&urlparametername=parametervalue' id='dashboard-frame' width='100%' height='600px' allowfullscreen frameborder='0'></iframe>
```

* In the iframe URL, the dashboard parameter filter must be started with a double ampersand `&&`. For more details, refer to this [link](/embedded-bi/working-with-data-source/configuring-dashboard-parameters/).    

* In the iframe URL, the URL filter parameter must be started with a single ampersand `&`. For more details, refer to this [link](/embedded-bi/working-with-dashboards/preview-dashboard/urlparameters/).


## How to embed the dashboard in create mode using the URL

1. To create a new dashboard, change the embed URL, as shown in the following image.
    ![EmbedDashboardCreate](/static/assets/embedded/iFrame-based/images/dashboard-create-embed-code.png#max-width=65%) 

2. Embed the above embed URL into any web application.    

3. Run the web application; it will show the login window or dashboard based on the type of dashboard. Click the login and enter the valid user credentials, and then the create page will render automatically. 
    ![EmbedLogin](/static/assets/embedded/iFrame-based/images/iframeLoginPage.png#max-width=45%)  
    ![EmbedCreateDashboard](/static/assets/embedded/iFrame-based/images/embedded-create.png#max-width=85%)  

## Steps to embed dashboard designer using URL

1.  To get the **embed URL**, click the context menu of the respective dashboard and choose the `Get Embed code` option.
![EmbedCodeOption](/static/assets/embedded/iFrame-based/images/embed-option.png#max-width=85%) 

2. Select the mode value as `Edit` for rendering a dashboard to edit or design.
![ModeOption](/static/assets/embedded/iFrame-based/images/select-mode-design.png#max-width=45%) 

3. By default, the SSO options are disabled. Enable this option by sliding the button given in the embed dialog. 
![EnableOption](/static/assets/embedded/iFrame-based/images/enable-option-design.png#max-width=45%)  
<table>
    <tr>
      <td>
       SSO
      </td>
      <td>
       The Single Sign-On authentication is enabled to support embedding the dashboard designer into other web applications if the configured authentication is selected as an authentication parameter.
      </td>
    </tr>
</table>  

4. Copy the embed URL by clicking the copy icon from the embed code dialog.  
	![CopyEmbedCodeForDesgin](/static/assets/embedded/iFrame-based/images/copy-embedcode-design.png#max-width=45%)

5. Embed the copied URL into other web applications.

6. When you run the web application, it will show the login window or designer dashboard. When you click the login button and log in with valid user credentials, the dashboard designer will render automatically.
To avoid login, use the Single Sign-On.
![EmbedLogin](/static/assets/embedded/iFrame-based/images/iframeLoginPage-design.png#max-width=45%) 
![EmbedDesignDashboard](/static/assets/embedded/iFrame-based/images/embedded-design.png#max-width=90%) 


> **NOTE:** For Single Sign-On click the context menu of the respective dashboard and choose the `Get Embed code` option. In the Embed Code dialog box, select `Edit` as the Mode value. Enable the SSO and the select any one of these:`Windows Active Directory`, `Azure Active Directory`, `OAuth 2.0` and `OpenID Connect` authentications. Similar to the view mode Single Sign-On.


## Embedding dashboard with filter parameter
You can pass parameters to a dashboard by including them in a dashboard URL in embedding. Passing parameter values within URL will apply filter in the dashboard on initial load itself. You can learn more details [here](/embedded-bi/working-with-dashboards/preview-dashboard/urlparameters/#passing-parameter-with-url).  

## Dynamic connection string for dashboard embedding
The Dynamic Connection String feature enables you to modify the connection string of the data sources in dashboard view mode. This feature is applicable only to the dashboards embedded using the Dashboard Embedding feature. Dashboards in the Bold BI application will be rendered using the connection string used while creating the data source. Learn more details [here](/embedded-bi/iframe-based/dynamic-connection-string/).  
