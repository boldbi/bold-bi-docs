---
layout: post
title:  Embed Dashboard in an iframe | Bold BI Documentation
description: Learn how to embed a dashboard in various modes using iFrame with private/public accessibility, advance security, filter parameters, and more.
platform: bold-bi
documentation: ug
---
# Embedding with iframe

## Embed the dashboard in an iframe

A dashboard can be embedded in the create, edit, and view modes of any application using a URL. In the create mode, a new dashboard can be created. In the edit mode, an existing dashboard can be edited. In the view mode, users can interact with the dashboard by filtering data, adding comments, and saving the filter views. Follow this steps to embed dashboard in view mode

### Steps to embed dashboard in view mode using URL

> **NOTE:** Please follow a similar procedure to display the multi-tab dashboard in view mode.

1. To obtain the **embed URL**, click on the context menu of the corresponding dashboard and select the option `Get Embed code`.  
	![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png#max-width=75%)  

2. Choose the mode value as `View` to render a dashboard in View mode.
	![ModeOption](/static/assets/iFrame-based/images/select-mode.png#max-width=45%)

3. By default, the options for Dashboard Comments, Widget Comments, Saved Views, Export, and SSO are disabled. To enable these options, simply slide the button provided in the embed dialog.
	
    ![EnableOption](/static/assets/iFrame-based/images/enable-option.png#max-width=45%)  
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

4. Please copy the embed URL by clicking the copy icon in the Embed Code dialog. 
	![CopyEmbedCode](/static/assets/iFrame-based/images/copy-embedcode.png#max-width=45%)

5. Please embed the copied URL into other web applications.

6. When the web application is run, it will display either the login window or the dashboard, depending on the type of dashboard. Once you click on "login" and successfully log in with valid user credentials, the dashboard will automatically load. To bypass the login process, use [single sign-on](/embedding-options/iframe-embedding/embedding-with-iframe/#Embed Dashboards using external SSO authentication).
	
	![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%) 
	![EmbedViewDashboard](/static/assets/iFrame-based/images/embed-dashboard-view.png#max-width=85%)

> **NOTE:**  Please note that if SSO enabled parameters are used, a login prompt will appear if you have not logged in and selected SSO authentication. However, if you have already logged in, the dashboard will be rendered based on the user's permission granted for that specific dashboard.

### Available parameter
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
      <td><code>hide_dashboard_edit</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide the dashboard edit icon. By default the icon will be shown only if user has the permission to edit the specific dashboard otherwise it doesn't shown.</td>
      <td>NA</td> 
    </tr>
    <tr>
      <td><code>hide_tool</code></td>
      <td><code>string</code></td>
      <td>Show/hide the dashboard options with Predefined values:<br>dp-Dashboard Parameter,<br>fo-Filter Overview,<br>fs-FullScreen,<br>rf-Refresh,<br>om-Option Menu<br><br><code>Example</code>:<br>&hide_tool=fo,fs,dp,rf,om</td>
      <td>NA</td>
    </tr>
    <tr>
      <td><code>hide_widget_tool</code></td>
      <td><code>string</code></td>
      <td>NA</td>
      <td>Show/hide the widget options with Predefined values:<br>fr-Filter,<br>fs-FullScreen,<br>om-Option Menu<br><br><code>Example</code>:<br>&hide_widget_tool=fr,fs,om</td>      
    </tr>
    <tr>
      <td><code>enable_ai_assistant</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide the AI Assistant icon</td>
      <td>NA</td> 
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
    <tr>
      <td><code>restrict_mobile_view</code></td>
      <td><code>boolean</code></td>
      <td>Users can view the dashboard in mobile view after reaching a specified pixel threshold on the desktop when the browser is resized, with the default value set to <strong>false</strong>. To restrict the mobile view, you can set the value of the <strong>restrict_mobile_view</strong> parameter to true.</td>
      <td>NA</td> 
    </tr>
    <tr>
      <td><code>hide_language_dropdown</code></td>
      <td><code>boolean</code></td>
      <td>Show the dashboard localization dropdown in the dashboard banner, with the default value set to <strong>false</strong>. To hide the dropdown, set the value of the <strong>hide_language_dropdown</strong> parameter to true.<br><strong>Note:</strong> Before setting the dashboard localization at the embedding level, you should configure the <strong>Localize Dashboard</strong> option in the dashboard designer of your Bold BI Server.</td>
      <td>NA</td>
    </tr>
    <tr>
      <td><code>language_code</code></td>
      <td><code>string</code></td>
      <td>This parameter allows to apply the localization during the initial rendering of the dashboard. Some language code values include:<br>fr-FR=French(France),<br>ar-AE=Arabic(U.A.E)<br>Example:<br><code>&language_code=fr-FR</code><br><strong>Note:</strong> Before setting the dashboard localization at the embedding level, you should configure the <strong>Localize Dashboard</strong> option in the dashboard designer of your Bold BI Server.</td>
      <td>NA</td> 
    </tr>
  </tbody> 
</table>

### How to embed the dashboard in create mode using the URL

1. To create a new dashboard, you need to change the embed URL as demonstrated in the image below.
```js
  <html>
  <body>
    <iframe src='http://localhost:51777/bi/site/site1/dashboard-designer?isembed=true' id='dashboard-iframe'width='100%' allowfullscreen frameborder='0'></iframe>
  </html>
  </body>
```

2. Please embed the above URL into any web application and change the site identifier and server URL. 

3. To use the web application, run it. Depending on the type of dashboard, either the login window or the dashboard will be displayed. Click on the login option and enter valid user credentials. After that, the create page will automatically load.
    ![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%)  
    ![EmbedCreateDashboard](/static/assets/iFrame-based/images/embedded-create.png#max-width=85%)

### Steps to embed dashboard designer using URL

1.  To obtain the **embed URL**, click on the context menu of the dashboard you wish to embed and select the `Get Embed code` option.
	![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png#max-width=85%) 

2. Select the mode value as `Edit` for rendering a dashboard to edit or design.
	![ModeOption](/static/assets/iFrame-based/images/select-mode-design.png#max-width=45%) 

3. The SSO options are disabled by default. To enable this option, slide the button provided in the embed dialog.
	![EnableOption](/static/assets/iFrame-based/images/enable-option-design.png#max-width=45%)

4. Please copy the embed URL by clicking on the copy icon in the embed code dialog. 
	![CopyEmbedCodeForDesgin](/static/assets/iFrame-based/images/copy-embedcode-design.png#max-width=45%)

5. Please embed the copied URL into other web applications.

6. When the web application is run, it will display either the login window or the designer dashboard. Upon clicking the login button and logging in with valid user credentials, the dashboard designer will be rendered automatically.
To avoid login, use the Single Sign-On.
![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage-design.png#max-width=45%) 
![EmbedDesignDashboard](/static/assets/iFrame-based/images/embedded-design.png#max-width=90%) 


> **NOTE:** To access Single Sign-On, click on the context menu of the corresponding dashboard and select the `Get Embed code` option. In the Embed Code dialog box, choose `Edit` as the Mode value. Enable SSO and select one of the following authentication methods:`Windows Active Directory`, `Azure Active Directory`, `OAuth 2.0` and `OpenID Connect`. This is similar to the Single Sign-On view mode.


### Embedding dashboard with filter parameter
You can pass parameters to a dashboard by including them in the dashboard URL when embedding it. By passing parameter values within the URL, filters will be applied to the dashboard upon initial load. For more detailed information, you can learn more [here](/working-with-dashboards/preview-dashboard/urlparameters/#passing-parameter-with-url).  

### Dynamic connection string for dashboard embedding
The Dynamic Connection String feature allows you to change the connection string of data sources in dashboard view mode. This feature is only applicable to embedded dashboards using the Dashboard Embedding feature. Dashboards in the Bold BI application will use the connection string used during data source creation. For more information, please visit the provided [Dynamic Connection String](/embedding-options/iframe-embedding/dynamic-connection-string/).

## Embed Dashboards using external SSO authentication

Bold BI supports embedding the dashboards into other web applications using external Single Sign-On authentication in the iframe-based embedding. The Bold BI application can be configured to support [Windows Active Directory settings](/site-administration/user-directory-settings/active-directory/active-directory/), [Azure Active Directory settings](/security-configuration/single-sign-on/azure-active-directory/), [OAuth 2.0 settings](/security-configuration/single-sign-on/oauth-2.0-support/), and [OpenID settings](/security-configuration/single-sign-on/openid-support/) authentications. Follow these steps to obtain the embed code with the Authentication Provider.

1. Please click on the context menu of the corresponding dashboard and select the `Get Embed code` option. 

    ![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png)
    
2. In the Embed Code dialog box, choose `View`as the mode. Then, enable the `SSO` and select the Authentication Provider, as shown in the image below.

    ![EmbedSSOWindows](/static/assets/iFrame-based/images/embed-sso-windows.png)

3. Copy the embed URL by clicking the `copy` icon from the Embed Code dialog and paste it into a web application.

4. To use the web application, please run it and sign in with your credentials. Once signed in, the dashboard will automatically display based on the permissions assigned to your account.

### Dashboard Embedding with views using Single Sign-On

A dashboard can be embedded with views using Single Sign-On (SSO). SSO is nothing but an authentication process that allows a user to access multiple applications with one set of login credentials.

To achieve this, you will need an embed code with views, an embed secret code, and an embed signature. 
In order to embed the dashboard with views using SSO, you will need an embed URL with a view ID. Follow the steps below to obtain the `embed code`,

* To obtain the embed URL, click on the `Views` icon that is highlighted below.
![EmbedViews-ViewsIcon](/static/assets/iFrame-based/images/EmbedViews-ViewsIcon.png) 

* Then click on the `Link` icon of the saved views. Here, you will get the dashboard URL with `view id`.
![EmbedViews-LinkIcon](/static/assets/iFrame-based/images/EmbedViews-LinkIcon.png) 

Then, follow the steps below to obtain the embed secret code and learn about the parameters needed to create the embed signature.
* [Steps to Get Embed Secret Code](/embedding-options/iframe-embedding/embedding-with-token-authentication/).

Using the [sample](/embedding-options/iframe-embedding/embedding-with-token-authentication/#sample-application-for-dashboard-embedding-with-token-authentication), you can embed the dashboard with views using SSO.

## Embed the data source using the iFrame

A data source can be created and edited in any application using the URL. In the data source editor, users have the ability to interact with the data source table by filtering data, adding parameters, and saving the filter values.

### Steps to embed data source using URL 

1. To obtain the embed URL, click on the `More` option icon of the desired data source from the data source listing. Then, select the `Get Embed Code` option from the drop-down menu.
![DataSourceUrl](/static/assets/iFrame-based/images/EmbedCode-DataSource.png#max-width=90%)

2. The SSO options are disabled by default. To enable this option, slide the button provided in the embed dialog.  
![EnableOption](/static/assets/iFrame-based/images/enable-option-datasource.png#max-width=45%)  
<table>
    <tr>
      <td>
       SSO
      </td>
      <td>
      The Single Sign-On authentication is enabled to support embedding the data source into other web applications if the configured authentication is selected as a parameter for authentication.
      </td>
    </tr>
</table>  

3. To copy the embed URL, click on the copy icon in the Embed Code dialog. 
	![CopyEmbedCode](/static/assets/iFrame-based/images/copy-embedcode-datasource.png#max-width=45%)

4. Embed the copied URL into other web applications.

5. To access the web application, run it and the login window will appear. Click on the login button and enter the correct user credentials. This will automatically load the data source design page. Alternatively, you can use single sign-on to bypass the login process.
![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage-datasource.png#max-width=45%)  
![EmbedEditDataSource](/static/assets/working-with-datasource/images/editthedatasource.png#max-width=90%) 

### Embed data source using external SSO authentication

Bold BI supports embedding the data source into other web applications using external Single Sign-On authentication in iframe-based embedding. The Bold BI application can be configured to support [Windows Active Directory](/site-administration/user-directory-settings/active-directory/active-directory/), [Azure Active Directory](/security-configuration/single-sign-on/azure-active-directory/), [OAuth 2.0 settings](/security-configuration/single-sign-on/oauth-2.0-support/) and [OpenID Support](/security-configuration/single-sign-on/openid-support/) authentications. Follow these steps to obtain the embed code with the Authentication Provider.

1. To access the respective data source's context menu, click on it and select the `Get Embed code` option. In the Embed Code dialog box, enable the `SSO` feature and choose respective Authentication Provider in the option, similar to what is illustrated in the provided image.
![EmbedSSOWindows](/static/assets/iFrame-based/images/embed-sso-windows-datasource.png#max-width=45%)

2. To copy the embed URL, click on the copy icon located in the Embed Code dialog. Then, paste it into a web application.

3. Please run the web application and sign in. The data source will then be automatically rendered according to the permissions granted to the user.

### How to embed the datasource in create mode using the URL

1. Please change the embedded URL to the one provided below in order to create a new data source connection.   
```js
    <html>
    <body>
        <iframe src='http://localhost:51777/bi/site/site1/datasource-designer/connection?isembed=true'
        id='dashboard-frame' width='100%' height='100%' allowfullscreen frameborder='0'></iframe>
    </body>
    </html>
```

2. Please embed the aforementioned embed URL into any web application and change the site identifier and server URL.   

3. To access the web application, run it and the login window will appear. Click on the login button and enter valid user credentials. This will automatically establish the data source connection, allowing you to utilize different connectors for connecting to the data source.
    ![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%)  
    ![EmbedCreateConnection](/static/assets/iFrame-based/images/embedded-datasource-create.png#max-width=75%) 

## Embed the widget of the dashboard using the iFrame

Any widget from the dashboard can be embedded individually in any application using its URL. To enable widget embedding, you must activate widget mode and utilize the widget ID in the embed URL. The following steps must be followed for widget embedding.
* Find the Id of the widget to be embedded.
* Get the dashboard URL.
* Use the widget id and dashboard URL together to embed widget. 

### How to get the Embed Widget Url

1. To open the desired dashboard and choose the widget you want to embed, select the `More` option. Next, from the drop-down menu, select `Get Embed Code`.
![InspectElement](/static/assets/iFrame-based/images/Widget-GetEmbedCode.png)

2. Please copy the iframe code from the pop-up page that displays the embed code. 
![InspectElement](/static/assets/iFrame-based/images/Widget-EmbedCode.png) 


### How to embed the widget using the URL

1. Now, utilize the copied iframe code in the HTML page to display the specific widget of the dashboard in a concise manner.   
```js
<html>
<body>
    <iframe src='http://localhost:53623/bi/site/site1/dashboards/5cfde98c-d352-4863-8a93-d6679263191b/Sales/Sales%20Analysis%20Dashboard?isembed=true&isWidgetMode=true&WidgetId=32ed09f7-49ef-4468-9c56-ccc376dbcaaa'
    id='dashboard-frame' width='100%' height='600px' allowfullscreen frameborder='0'></iframe>
</html>
</body>
```

2. Please embed the provided URL into any web application and change the site identifier and server URL.

3. To use the web application, you need to run it. Depending on the type of dashboard, it will display either the login window or the dashboard itself. Click on the login option and enter the correct user credentials. Once you do that, the widget will automatically render.  
![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%)  
![EmbedViewDashboard](/static/assets/iFrame-based/images/embedded-widget.png)  

> **NOTE:**  You can make the dashboard public and access it anonymously without the need for logging in.

## Embedding the dashboard with views

A dashboard can have saved filter views embedded in any application using a URL. This allows users to interact with the dashboard by filtering data, adding comments, and saving the filter views.

### Steps to embed dashboard view using URL

* To obtain the embedded URL, click on the `Share` icon for the saved views.
![EmbedViews-ShareIcon](/static/assets/iFrame-based/images/EmbedViews-ShareIcon.png) 

* Please click on the `Get Embed Code` link located in the share dialog box.
![EmbedViews-GetEmbedCode](/static/assets/iFrame-based/images/EmbedViews-GetEmbedCode.png#width=60%) 

* By default, the options for Dashboard Comments, Widget Comments, Saved Views, and Export are disabled. To enable these options, you can toggle the switch provided in the embed dialog.
![EmbedLogin](/static/assets/iFrame-based/images/EmbedViews-EmbedCodeDialog.png#width=55%) 
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
</table>

* Please copy the embed URL by clicking the copy icon in the Embed Code dialog.
![EmbedViews-EmbedURL](/static/assets/iFrame-based/images/EmbedViews-EmbedURL.png#width=55%)

* Please embed the copied URL into another web application.

* To access the web application, if the dashboard is not available as a public dashboard, run it. The login page will then be displayed. Proceed by clicking the login button and entering valid user credentials. The dashboard will automatically be rendered for you.
![EmbedViews-EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%)

For example, below image represents that our dashboard embedded in `http://example.com/` website.
![EmbedViews-EmbedSample](/static/assets/iFrame-based/images/EmbedViews-EmbedSample.png)


### Public embedding
If you wish to embed the dashboard views without requiring user authentication, you must first make both the dashboard and dashboard views public, and then proceed to embed them. The public dashboard will be automatically rendered without the need for credentials. However, it is important to note that you cannot enable the comments panel for public dashboard embedding.

### Private embedding
Private dashboards can be embedded with views that are accessible to users in Bold BI who have read permission. These dashboards will require users to log in to the Bold BI server before rendering. Therefore, when private dashboards are embedded and the user is not authenticated, the embedded dashboard will display the login page.