---
layout: post
title:  Embed Dashboard in an iframe | Bold BI Documentation
description: Learn how to embed a dashboard in various modes using iFrame with private/public accessibility, advance security, filter parameters, and more.
platform: bold-bi
documentation: ug
---

# Embed the dashboard in an iframe

A dashboard can be embedded in the create, edit, and view modes of any application using a URL. In the create mode, a new dashboard can be created. In the edit mode, an existing dashboard can be edited. In the view mode, users can interact with the dashboard by filtering data, adding comments, and saving the filter views.

## Steps to embed dashboard in view mode using URL 

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

6. When the web application is run, it will display either the login window or the dashboard, depending on the type of dashboard. Once you click on "login" and successfully log in with valid user credentials, the dashboard will automatically load. To bypass the login process, use [token based authentication](/embedding-options/iframe-embedding/dashboard-embedding-with-token-authentication/).
	
	![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%) 
	![EmbedViewDashboard](/static/assets/iFrame-based/images/embed-dashboard-view.png#max-width=85%)   

> **NOTE:**  Please note that if SSO enabled parameters are used, a login prompt will appear if you have not logged in and selected SSO authentication. However, if you have already logged in, the dashboard will be rendered based on the user's permission granted for that specific dashboard.

## Public embedding
If you wish to embed the dashboard without requiring user authentication, you should first make the dashboard public and then proceed to embed it. By making it public, it will automatically be rendered without the need for credentials. However, it is important to note that you cannot enable the comments panel when embedding a public dashboard.

> **NOTE:** Embedding the public dashboard will not work when the public dashboard setting is disabled. Learn more about the [Dashboard Settings](/site-administration/dashboard-settings/).

## Private embedding
Private dashboards can be embedded and are accessible to users in Bold BI who have read permission. These dashboards would require users to log in to the Bold BI server before rendering. Therefore, whenever private dashboards are embedded and the user is not yet authenticated, the embedded dashboard will display the login page.

> **NOTE:**  By default, the dashboard access mode will be set to private until the owner of the dashboard changes it to public.

## Advanced security
You can control which websites, IP addresses, and applications can embed the dashboard by using the dashboard security option. Find more information about the [Advanced Dashboard Security](/managing-resources/manage-dashboards/advanced-dashboard-security/). 

> **NOTE:** Please learn more details about [Dashboard Embedding Sample](/embedding-options/iframe-embedding/sample/dashboard-embedding/).

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
      <td><code>hide_dashboard_edit</code></td>
      <td><code>boolean</code></td>
      <td>Show/hide the dashboard edit icon. By default the icon will be shown only if user has the permission to edit the specific dashboard otherwise it doesn't shown.</td>
      <td>NA</td> 
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

In the iFrame URL, you can pass values for separate filters (Dashboard Parameter/URL Parameter) at the same time.

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

* In the iframe URL, the dashboard parameter filter must be started with a double ampersand `&&`. For more details, Refer to the [configuring dashboard parameters](/working-with-data-sources/dashboard-parameter/configuring-dashboard-parameters/).   

* In the iframe URL, the URL filter parameter must be started with a single ampersand `&`. For more details, please refer to the [URL Filter](/working-with-dashboards/preview-dashboard/urlparameters/).


## How to embed the dashboard in create mode using the URL

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

## Steps to embed dashboard designer using URL

1.  To obtain the **embed URL**, click on the context menu of the dashboard you wish to embed and select the `Get Embed code` option.
![EmbedCodeOption](/static/assets/iFrame-based/images/embed-option.png#max-width=85%) 

2. Select the mode value as `Edit` for rendering a dashboard to edit or design.
![ModeOption](/static/assets/iFrame-based/images/select-mode-design.png#max-width=45%) 

3. The SSO options are disabled by default. To enable this option, slide the button provided in the embed dialog.
![EnableOption](/static/assets/iFrame-based/images/enable-option-design.png#max-width=45%)  
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

4. Please copy the embed URL by clicking on the copy icon in the embed code dialog. 
	![CopyEmbedCodeForDesgin](/static/assets/iFrame-based/images/copy-embedcode-design.png#max-width=45%)

5. Please embed the copied URL into other web applications.

6. When the web application is run, it will display either the login window or the designer dashboard. Upon clicking the login button and logging in with valid user credentials, the dashboard designer will be rendered automatically.
To avoid login, use the Single Sign-On.
![EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage-design.png#max-width=45%) 
![EmbedDesignDashboard](/static/assets/iFrame-based/images/embedded-design.png#max-width=90%) 


> **NOTE:** To access Single Sign-On, click on the context menu of the corresponding dashboard and select the `Get Embed code` option. In the Embed Code dialog box, choose `Edit` as the Mode value. Enable SSO and select one of the following authentication methods:`Windows Active Directory`, `Azure Active Directory`, `OAuth 2.0` and `OpenID Connect`. This is similar to the Single Sign-On view mode.

## Embedding dashboard with filter parameter
You can pass parameters to a dashboard by including them in the dashboard URL when embedding it. By passing parameter values within the URL, filters will be applied to the dashboard upon initial load. For more detailed information, you can learn more [here](/working-with-dashboards/preview-dashboard/urlparameters/#passing-parameter-with-url).  

## Dynamic connection string for dashboard embedding
The Dynamic Connection String feature allows you to change the connection string of data sources in dashboard view mode. This feature is only applicable to embedded dashboards using the Dashboard Embedding feature. Dashboards in the Bold BI application will use the connection string used during data source creation. For more information, please visit the provided [Dynamic Connection String](/embedding-options/iframe-embedding/dynamic-connection-string/).
