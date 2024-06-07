---
layout: post
title:  Adding OAuth Connection for Application Access | Bold BI 
description: Learn how to add OAuth connection for required data connectors for application access in Bold BI Embedded.
platform: bold-bi
documentation: ug

---

# Configuring OAuth Data Connectors

OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords. Most service connectors require OAuth to connect, to ensure that a client application is authorized to access the data.

> **NOTE:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

To configure OAuth for data sources in Bold BI, follow the steps below:
1.	Click the **Settings** icon on the left pane.
2.	Select the **Connectors** tab. This tab lists all the available data sources in Bold BI.
    
    ![service-connectors](/static/assets/oauth/images/service-connectors.png)

3.	Expand the **Service Connectors – OAuth** section.
4.	Click *Enable All* to enable all the connectors or enable the connector you need to connect to.
5.	Each connector will have a **Configure** button to get the OAuth details.
    
    ![configure-oauth](/static/assets/oauth/images/configure-oauth.png)

6.	Choose a connector and input its corresponding *Client ID* and *Client Secret*, then click **OK**. You can modify these values whenever required.
7.	Click **Save**. If you proceed without saving the configuration, you will not be able to connect to the data source.
    
    ![save-success](/static/assets/oauth/images/save-success.png)

### How to get Client ID and Client Secret

If you do not have an existing app with the service provider, you must register a new app with the service. 
Depending on the service provider, the process of registering an app varies. We suggest you go through the developer documentation of the corresponding service provider beforehand.

In Bold BI, each OAuth connector contains a **Help link** to guide you to the developer documentation for the service provider.

After registering your app, you will receive a client ID and a client secret. The client ID is considered public information and is used to build login URLs. The client secret must be kept confidential.

### Redirect URIs

You must register a redirect URI to be used for redirecting users to our application. Without setting a Redirect URI, the OAuth process will not complete.

Set this redirect URI in your app, http://[host:port]/bi/designer/v1.0/oauth/agent.
The *host* and *port* are the corresponding values on which your Bold BI service runs.


## Steps to configure OAuth for WordPress

If you have not configured OAuth for WordPress in Bold BI, follow the steps below and then proceed to connect to this data source.
1.	Enable the WordPress service.
2.	You will need a developer account of the respective data source to generate Client ID and Client Secret. Use the Help link on the data source to navigate to the service provider’s developer/documentation site. For [WordPress](https://developer.wordpress.com/docs/api/).
    
    ![wordpress-icon](/static/assets/oauth/images/wordpress-icon.png)

3.	Click *My Apps*. Your applications will be listed here. If you don’t have an app, click *Create New Application*.
    
    ![wordpress-home](/static/assets/oauth/images/wordpress-home.png)

4.	The Redirect URL for this app should be the Bold BI service. Get the host and port number of the Bold BI Application and replace it in the following URL: http://[host:port]/bi/designer/v1.0/oauth/agent   
5.	Select the app you want to connect and get its corresponding OAuth information.
    
    ![wordpress-oauth](/static/assets/oauth/images/wordpress-oauth.png)

6.	Use this Client ID and Client Secret in Bold BI. Click the Configure button and input these values, then click *OK*.
7.	Click Save to update the settings. Upon confirmation, refresh the designer page and connect to the WordPress data source.

> **NOTE:**  Only one Client ID and Client Secret can be maintained for a data source. Click **Reset Configuration** to delete the entry.
