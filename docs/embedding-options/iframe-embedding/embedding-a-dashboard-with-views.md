---
layout: post
title:  Dashboard View iFrame Embedding Using SSO | Bold BI Docs
description: Learn how a dashboard can be embedded with saved filter views in any application using URL, with public/private accessibility and Single Sign-on authentication.
platform: bold-bi
documentation: ug
---

# Embedding the dashboard with views
A dashboard can be embedded with saved filter views in any application using URL. With this view, users can interact with the dashboard by filtering data, adding comments, and saving the filter views.

## Steps to embed dashboard view using URL

* To get the embed URL, click the `Share` icon of the saved views.
![EmbedViews-ShareIcon](/static/assets/iFrame-based/images/EmbedViews-ShareIcon.png) 

* Click the `Get Embed Code` link in the share dialog box.
![EmbedViews-GetEmbedCode](/static/assets/iFrame-based/images/EmbedViews-GetEmbedCode.png#width=60%) 

* By Default, Dashboard Comments, Widget Comments, Saved Views, and Export options are disabled. You can enable this option by toggle the switch given in embed dialog.
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

* Copy the embed URL by clicking the copy icon from the Embed Code dialog.
![EmbedViews-EmbedURL](/static/assets/iFrame-based/images/EmbedViews-EmbedURL.png#width=55%)

* Embed the copied URL into other web application.

* Run the web application, it will show the login page if the dashboard is not shared as a public dashboard. Click the login button and login with valid user credentials and the dashboard will render automatically.
![EmbedViews-EmbedLogin](/static/assets/iFrame-based/images/iframeLoginPage.png#max-width=45%)

For example, below image represents that our dashboard embedded in "http://example.com/" website.
![EmbedViews-EmbedSample](/static/assets/iFrame-based/images/EmbedViews-EmbedSample.png)


## Public embedding
If you want to embed the dashboard views without user authentication, then make the dashboard and dashboard views public and then embed it. The public dashboard will be rendered automatically without credentials. You cannot enable the comments panel for public dashboard embedding.

## Private embedding
Private dashboards can be embedded with views, which are accessible to users in the Bold BI, who has the read permission, and these dashboards would be requested to login to Bold BI server before rendering. So embedded dashboard will show the login page whenever private dashboards are embedded and the user is not authenticated yet.

## Dashboard Embedding with views using Single Sign-On
A dashboard can be embed with views using Single Sign-On (SSO). SSO nothing but an authentication process that allows a user to access multiple applications with one set of login credentials. 

To achieve this, you need an embed code with views, embed secret code and embed signature.
To embed the dashboard with views using SSO, you need an embed URL with view id. And follow the below steps to get the `embed code`,

* To get the embed URL, click the `Views` icon which is highlighted in below.
![EmbedViews-ViewsIcon](/static/assets/iFrame-based/images/EmbedViews-ViewsIcon.png) 

* Then click on the `Link` icon of the saved views. Here, you will get the dashboard URL with `view id`.
![EmbedViews-LinkIcon](/static/assets/iFrame-based/images/EmbedViews-LinkIcon.png) 

Then follow the below steps to get the embed secret code and know about the parameters required to form the embed signature.
* [Steps to Get Embed Secret Code](/embedding-options/iframe-embedding/embed-dashboards-with-sso-using-token/).

Using the [sample](/embedding-options/iframe-embedding/embed-dashboards-with-sso-using-token/#sample-application-for-embed-dashboard-with-sso-using-token), you can embed the dashboard with views using SSO.