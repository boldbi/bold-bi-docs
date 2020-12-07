---
layout: post
title: Configuring Reverse Proxy for Bold BI | Bold BI Docs
description: Know how to configure the reverse proxy that act as an intermediate server for Bold BI application installed in your server.
platform: bold-bi
documentation: ug
---

# How to configure Bold BI in Reverse Proxy Server environment?

Reverse Proxy Server acts as an intermediate server which receives request from the client and sends to the end server with an alternate request URL. The reverse proxy server protects the end server from the attackers and also can bypasses the over loaded requests to the server.

![Proxy server](/static/assets/embedded/faq/images/reverse-proxy.png)

Here, `https://publicserver.boldbi.com` is the URL with which the front end client/users request the site.

`https://hostedserver.boldbi.com` is the URL with which the reverse proxy server directs the client request to the end server(i.e., Bold BI Enterprise Edition installed server). 

## Steps to configure Bold BI in Reverse Proxy

1.	After successfully installed the Bold BI Enterprise Edition, add new bindings to the Bold BI Enterprise Edition in IIS as shown in the image below. 

    ![IIS Bindings](/static/assets/embedded/faq/images/iis-bindings.png)  
    > **NOTE:**  The proxy server request URL must be added in the binding to the Bold BI Enterprise Edition in IIS.

2.	Don’t remove the existing binding.
3.	Update the new binding values in the configuration files in the deployed location of Bold BI Enterprise Edition.   
  
    By default, the Bold BI Enterprise Edition will be deployed in the location `C:\Bold BI`

    a.	Update the value of `InternalAppBIUrl` in the config file in the below location,
        `{Deployed Location}\IDP\App_Data\Configuration\config.xml`
        ![update app url](/static/assets/embedded/faq/images/update-app-url.png)

    b.	Update the `InternalAppDataServiceUrl` and `InternalAppIdpUrl` values in the config file in the below location, 
        `{Deployed Location}\Dashboard Server\App_Data\Configuration\Config.xml`
        ![update service url](/static/assets/embedded/faq/images/update-service-Idp-url.png)  
    > **NOTE:**  Update the front end/client request URL (i.e., https://publicserver.boldbi.com) in the `config.xml`. 
4.	Restart the site in IIS and browse the Bold BI Enterprise Edition site with the old binding url.
5.	Now navigate to the site settings page of the UMS application.
`http://localhost:{port-no}/ums/administration`

6.  Update the new binding information as shown in the image below.

    ![update ums site](/static/assets/embedded/faq/images/ums-site-settings.png)  
    > **NOTE:**  The site URL must be the URL with which the client access the site(i.e., https://publicserver.boldbi.com)

7.	Now navigate to the site settings page of the Bold BI Enterprise Edition application using old binding and update the new binding information as shown in the image below.
`http://localhost:{port-no}/bi/en-us/site/site1/administration` 

    ![update boldbi site](/static/assets/embedded/faq/images/bold-bi-site-settings.png)

     > **NOTE:**  The site URL must be the URL with which the client access the site(i.e., https://publicserver.boldbi.com) 

8.	Now restart the site in IIS and browse Bold BI site using the new binding URL.
9.	Ensure the created Virtual Server is UP in the Reverse Proxy Server after updating the new binding configuration in the Bold BI Enterprise Edition deployment location.

    > **NOTE:**  The client request URL (https://publicserver.boldbi.com) must be accessible from the Bold BI Enterprise Edition installed machine.
