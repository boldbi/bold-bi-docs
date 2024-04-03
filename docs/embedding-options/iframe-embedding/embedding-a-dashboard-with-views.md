---
layout: post
title:  Dashboard View iFrame Embedding Using SSO | Bold BI Docs
description: Learn how a dashboard can be embedded with saved filter views in any application using URL, with public/private accessibility and Single Sign-on authentication.
platform: bold-bi
documentation: ug
---

# Embedding the dashboard with views

A dashboard can have saved filter views embedded in any application using a URL. This allows users to interact with the dashboard by filtering data, adding comments, and saving the filter views.

## Steps to embed dashboard view using URL

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

For example, below image represents that our dashboard embedded in "http://example.com/" website.
![EmbedViews-EmbedSample](/static/assets/iFrame-based/images/EmbedViews-EmbedSample.png)


## Public embedding
If you wish to embed the dashboard views without requiring user authentication, you must first make both the dashboard and dashboard views public, and then proceed to embed them. The public dashboard will be automatically rendered without the need for credentials. However, it is important to note that you cannot enable the comments panel for public dashboard embedding.

## Private embedding
Private dashboards can be embedded with views that are accessible to users in Bold BI who have read permission. These dashboards will require users to log in to the Bold BI server before rendering. Therefore, when private dashboards are embedded and the user is not authenticated, the embedded dashboard will display the login page.

## Dashboard Embedding with views using Single Sign-On

A dashboard can be embedded with views using Single Sign-On (SSO). SSO is nothing but an authentication process that allows a user to access multiple applications with one set of login credentials.

To achieve this, you will need an embed code with views, an embed secret code, and an embed signature. 
In order to embed the dashboard with views using SSO, you will need an embed URL with a view ID. Follow the steps below to obtain the `embed code`,

* To obtain the embed URL, click on the `Views` icon that is highlighted below.
![EmbedViews-ViewsIcon](/static/assets/iFrame-based/images/EmbedViews-ViewsIcon.png) 

* Then click on the `Link` icon of the saved views. Here, you will get the dashboard URL with `view id`.
![EmbedViews-LinkIcon](/static/assets/iFrame-based/images/EmbedViews-LinkIcon.png) 

Then, follow the steps below to obtain the embed secret code and learn about the parameters needed to create the embed signature.
* [Steps to Get Embed Secret Code](/embedding-options/iframe-embedding/embed-dashboards-with-sso-using-token/).

Using the [sample](/embedding-options/iframe-embedding/embed-dashboards-with-sso-using-token/#sample-application-for-embed-dashboard-with-sso-using-token), you can embed the dashboard with views using SSO.
