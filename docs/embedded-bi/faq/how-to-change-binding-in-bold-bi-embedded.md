---
layout: post
title: Changing Application Binding | Bold BI Documentation
description: Learn how to change the application binding for Bold BI application in IIS. If you have DNS, you can add binding for DNS instead of IP address.
platform: bold-bi
documentation: ug
---

# How to change the binding in the Bold BI Enterprise?
Follow the below steps to change the application binding information.

1. Add new binding to Bold BI Enterprise edition on IIS as shown in the image below.
    **`Example: 172.17.82.1`**
![IIS Binding](/static/assets/embedded/faq/images/add-binding.png)

2. Update the new binding values in below configuration files in deployed location.
    - Update the `InternalAppBIUrl` value in config file in below location,
    `{Deployed Location}\IDP\App_Data\Configuration\config.xml` 
    ![IDP Config File](/static/assets/embedded/faq/images/idp-config.png)  

    - Update the `InternalAppDataServiceUrl`, and `InternalAppIdpUrl` values in the config file in below location  
    `{Deployed Location}\Dashboard Server\App_Data\Configuration\Config.xml`  
    ![DS Config File](/static/assets/embedded/faq/images/ds-config.png)  

> **NOTE:**  By default, Bold BI will be deployed on "C:\Bold BI"

3. Restart the site in IIS and browse the site with old binding URL.

4. Now, navigate to the site settings page of the UMS application using below new binding and update the new binding information as shown in image below.  
**`http://172.17.82.1/ums/en-us/administration`**  
![IDP Base URL](/static/assets/embedded/faq/images/idp-base-url.png)  

5. Now, navigate to the site settings of your dashboard server application using below new binding and update the new binding information as shown in image below.  
**`http://172.17.82.1/bi/en-us/site/site1/administration`**  
![DS Base URL](/static/assets/embedded/faq/images/ds-base-url.png)

6. Now, Bold BI site can be browsed using the new binding.

> **IMPORTANT:**  Don’t remove existing bindings. 

> **NOTE:**  If you have DNS means you can add binding for the DNS instead of IP mentioned here.
