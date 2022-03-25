---
layout: post
title: Changing Application Binding for Older Versions | Bold BI Docs
description: Learn how to change the application binding for Bold BI below v4.1.36 in IIS. If you have DNS, you can add binding for DNS instead of IP address.
platform: bold-bi
documentation: ug
---

> This document explains how to change the application binding in IIS for the Bold BI version below 4.1.36.
Check [this](/embedded-bi/faq/how-to-change-binding-in-bold-bi-embedded-v4.1.36/) to change the IIS binding for the Bold BI version 4.1.36.
Check [this](/embedded-bi/faq/how-to-change-binding-in-bold-bi-embedded/) to change the IIS binding for the Bold BI version above 4.1.36.

# How to change the binding in the Bold BI Enterprise
Follow these steps to change the application binding information:

1. Add a new binding to Bold BI Enterprise edition on IIS as shown in the following image.
    **`Example: 172.17.82.1`**
![IIS Binding](/static/assets/embedded/faq/images/add-binding.png#width=45%)

2. Update the new binding values in the following configuration files in deployed location.
    - Update the `InternalAppBIUrl` value in config file in the following location.
    `{Deployed Location}\IDP\App_Data\Configuration\config.xml` 
    ![IDP Config File](/static/assets/embedded/faq/images/idp-config.png#width=45%)
    
    - Update the `InternalAppDataServiceUrl`, and `InternalAppIdpUrl` values in the config file in following location.  
    `{Deployed Location}\Dashboard Server\App_Data\Configuration\Config.xml`  
    ![DS Config File](/static/assets/embedded/faq/images/ds-config.png#width=45%)
    
    > **NOTE:** By default, Bold BI will be deployed on "C:\Bold BI".

3. Restart the site in IIS and browse the site with old binding URL.

4. Now, navigate to the site settings page of the UMS application using below new binding and update the new binding information as shown in the following image.  
**`http://172.17.82.1/ums/en-us/administration`**  
![IDP Base URL](/static/assets/embedded/faq/images/idp-base-url.png#width=45%)  

5. Now, navigate to the site settings of your Bold BI application using below new binding and update the new binding information as shown in image below.  
**`http://172.17.82.1/bi/en-us/site/site1/administration`**  
![DS Base URL](/static/assets/embedded/faq/images/ds-base-url.png#width=45%)

6. Now, Bold BI site can be browsed using the new binding.

> **IMPORTANT:** Do not remove the existing bindings. 

> **NOTE:**
> * If you have DNS, you can add binding for the DNS instead of IP mentioned here.
> * IIS Express Development Certificate cannot be used to configure the SSL with the IP address or domain. If it is configured with the IP address or domain, Bold BI application will not work correctly.