---
layout: post
title: Changing Application Binding for version 4.1.36 | Bold BI Docs
description: Learn how to change the application binding for Bold BI application 4.1.36 in IIS. If you have DNS, you can add binding for DNS instead of IP address.
platform: bold-bi
documentation: ug
---

> This document explains how to change the application binding in IIS for the Bold BI version 4.1.36.
Check [this](/embedded-bi/faq/how-to-change-binding-in-bold-bi-embedded-below-v4.1.36/) to change the IIS binding for the Bold BI version below 4.1.36.
Check [this](/embedded-bi/faq/how-to-change-binding-in-bold-bi-embedded/) to change the IIS binding for the Bold BI version above 4.1.36. 

# How to change the binding in Bold BI Enterprise
Follow these steps to change the application binding information:

1. Add a new binding to the Bold BI Enterprise edition on IIS, as shown in the following image.
    **`Example: 172.31.176.1`**
![IIS Binding](/bold-bi-docs/static/assets/embedded/faq/images/add-iis-binding.png#width=50%)

2. Update the new binding values in the following configuration files in the deployed location.

    Update the `Idp`, `Bi`, `BiDesigner`, and `Reports` values in the following config file location.
    `{Deployed Location}\app_data\configuration\config.xml` 
    ![Core Config File](/bold-bi-docs/static/assets/embedded/faq/images/latest-config-file.png#width=50%)

    > **NOTE:** By default, Bold BI will be deployed on "C:\BoldServices".

3. Update the new binding values in the `product.json` file in the following location.
`{Deployed Location}\app_data\configuration\product.json`
![Product json File](/bold-bi-docs/static/assets/embedded/faq/images/product-json.png#width=50%)

4. Restart the site in IIS and browse the site with new binding URL.

5. Now, navigate to the site settings page of the UMS application using below new binding and update the new binding information as shown in the following image.  
**`http://172.31.176.1/ums/administration`**  
![IDP Base URL](/bold-bi-docs/static/assets/embedded/faq/images/idp-url-binding.png#width=50%)  

6. Now, navigate to the site settings of your Bold BI application using below new binding and update the new binding information as shown in the following image.  
**`http://172.31.176.1/bi/site/site1/administration`** 
![DS Base URL](/bold-bi-docs/static/assets/embedded/faq/images/ds-url-binding.png#width=50%)

7. Now, Bold BI site can be browsed using the new binding.

> **IMPORTANT:** Do not remove the existing bindings. 

> **NOTE:**
> * If you have DNS, you can add binding for the DNS instead of IP mentioned here.
> * The IIS Express Development Certificate cannot be used to configure the SSL with the IP address or domain. If it is configured with an IP address or domain, Bold BI application will not function properly.