---
layout: post
title: Changing Application Binding | Bold BI Documentation
description: Learn how to change the application binding for Bold BI application in IIS. If you have DNS, you can add binding for DNS instead of IP address.
platform: bold-bi
documentation: ug
---

> This document explains how to change the application binding in IIS for Bold BI version 4.1.36 and above.
Check [this](/faq/how-to-change-binding-in-bold-bi-embedded-below-v4.1.36/) to change the IIS binding for the Bold BI version below 4.1.36.
Check [this](/faq/how-to-change-binding-in-bold-bi-embedded-v4.1.36/) to change the IIS binding for the Bold BI version 4.1.36.

# How to change the binding in the Bold BI Enterprise
Follow these steps to change the application's binding information:

1. Add a new binding to Bold BI Enterprise Edition on IIS, as shown in the following image.
   **`Example: 172.31.176.1`**
![IIS Binding](/static/assets/faq/images/add-iis-binding.png#width=50%)

2. Now, navigate to the site settings page of the UMS application using the new binding below, and update the binding information as shown in the following image.
**`http://172.31.176.1/ums/administration`** 
![IDP Base URL](/static/assets/faq/images/idp-url-binding.png#width=50%) 

3. Now, navigate to the UMS site listing page and edit the site using the following new binding. Update the new binding information as shown in the following image.  
**`http://172.31.176.1/ums/sites`** 
![UMS site listing](/static/assets/faq/images/ums-site-listing.png#width=60%)
![DS Base URL](/static/assets/faq/images/ds-url-binding-in-ums.png#width=35%)

4. Click `Next` and you will need to provide a `password` for the database that is configured for the respective site.
![Update Site Details](/static/assets/faq/images/update-site-details.png#width=35%)

5. Click `Update` and your site will now be running with the updated site URL.

> **IMPORTANT:** Do not remove the existing bindings. 

> **NOTE:**
> * If you have DNS, you can add a binding for the DNS instead of the IP mentioned here.
> * The IIS Express Development Certificate cannot be used to configure SSL with an IP address or domain. If it is configured with an IP address or domain, the Bold BI application will not function properly.
> * If you have a valid SSL certificate installed on the server machine for the respective domain, you can configure the bindings with "HTTPS" instead of "HTTP" when updating the new binding information.