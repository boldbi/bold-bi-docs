---
layout: post
title:  Embed Dashboard in View Mode | Bold BI Documentation
description: Learn how to embed a dashboard in view mode using iFrame, with private/public accessibility, advance security, filter parameters and more.
platform: bold-bi
documentation: ug
---

# Embed the dashboard in view mode

A dashboard can be embedded in the view mode in any application using URL. In the view, users can interact with the dashboard by filtering data, adding comments, and saving the filter views.    

## Steps to embed dashboard using URL  
1. To get the embed URL, click the Share icon of the respective dashboard.  
![DashboardShare](/static/assets/embedded/iFrame-based/images/dashboard-share.png)  

2. Click the Get Embed Code link in the share dialog box.  
![EmbedCodeOption](/static/assets/embedded/iFrame-based/images/embedcode-option.png)

3. By Default, Dashboard Comments, Widget Comments, Saved Views, and Export options are disabled. You can enable this option by sliding the button given in embed dialog.  
![EnableOption](/static/assets/embedded/iFrame-based/images/enable-option.png)  
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

4. Copy the embed URL by clicking the copy icon from the Embed Code dialog.  
![CopyEmbedCode](/static/assets/embedded/iFrame-based/images/copy-embedcode.png)

5. Embed the copied URL into other web application.

6. Run the web application, it will show the login window or dashboard based on the type of the dashboard. Click the login button and login with valid user credentials and the dashboard will render automatically.  
![EmbedLogin](/static/assets/embedded/iFrame-based/images/embed-login.png)  
![EmbedViewDashboard](/static/assets/embedded/iFrame-based/images/embed-view-dashboard.png)  

## Public embedding
If you want to embed the dashboard without user authentication, then make the dashboard public and then embed it. The public dashboard will be rendered automatically without credentials. You cannot enable the comments panel for public dashboard embedding. 

> **NOTE:** Embedding the public dashboard will not work when public dashboard setting is disabled. Learn more about the dashboard settings [here](/cloud-bi/site-administration/dashboard-settings/).

## Private embedding
Private dashboards can be embedded, which are accessible to users in the Bold BI, who has the read permission, and these dashboards would be requested to login to Bold BI server before rendering. So embedded dashboard will show the login page whenever private dashboards are embedded and the user is not authenticated yet.

> **NOTE:**  By default, dashboard access mode will be set to private until it is changed to the public by the owner of the dashboard.  

## Advanced security
Using the dashboard security option, you can control which websites, IP addresses, and applications can embed the dashboard. Learn more about dashboard security [here](/embedded-bi/managing-resources/manage-dashboards/advanced-dashboard-security/).  

> **NOTE:**  Learn more details about embedding dashboard sample [here](/embedded-bi/iframe-based/sample/dashboard-embedding-sample/).  

## Embedding dashboard with filter parameter
You can pass parameters to a dashboard by including them in a dashboard URL in embedding. Passing parameter values within URL will apply filter in the dashboard on initial load itself. You can learn more details [here](/embedded-bi/working-with-dashboards/preview-dashboard/urlparameters/#passing-parameter-with-url).  

## Dynamic connection string for dashboard embedding
The Dynamic Connection String feature enables you to modify the connection string of the data sources in dashboard view mode. This feature is applicable only to the dashboards embedded using the Dashboard Embedding feature. Dashboards in the Bold BI application will be rendered using the connection string used while creating the data source. Learn more details [here](/embedded-bi/iframe-based/dynamic-connection-string/).  
