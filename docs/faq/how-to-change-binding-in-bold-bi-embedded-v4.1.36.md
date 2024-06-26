---
layout: post
title: Changing Application Binding for version 4.1.36 | Bold BI Docs
description: Learn how to change the application binding for Bold BI application 4.1.36 in IIS. If you have DNS, you can add binding for DNS instead of IP address.
platform: bold-bi
documentation: ug
---

> This document explains how to change the application binding in IIS for Bold BI version 4.1.36.
Check [this](/faq/how-to-change-binding-in-bold-bi-embedded-below-v4.1.36/) to change the IIS binding for the Bold BI version below 4.1.36.
Check [this](/faq/how-to-change-binding-in-bold-bi-embedded/) to change the IIS binding for the Bold BI version above 4.1.36. 

# How to change the binding in Bold BI Enterprise
Follow these steps to change the application binding information:

1. Add a new binding to the Bold BI Enterprise edition on IIS, as shown in the following image.
    **`Example: 172.31.176.1`**
![IIS Binding](/static/assets/faq/images/add-iis-binding.png#width=50%)

2. Update the new binding values in the configuration files listed below at the deployed location.

   Update the `Idp`, `Bi`, `BiDesigner`, and `Reports` values in the specified config file location.
    `{Deployed Location}\app_data\configuration\config.xml` 
    ![Core Config File](/static/assets/faq/images/latest-config-file.png#width=50%)

    > **NOTE:** By default, Bold BI will be deployed on "C:\BoldServices".

3. Update the new binding values in the `product.json` file at the specified location.
`{Deployed Location}\app_data\configuration\product.json`
![Product json File](/static/assets/faq/images/product-json.png#width=50%)

4. Restart the site in IIS and then browse the site with the new binding URL.

5. Now, navigate to the site settings page of the UMS application using the new binding below and update the information as shown in the following image.  
**`http://172.31.176.1/ums/administration`**  
![IDP Base URL](/static/assets/faq/images/idp-url-binding.png#width=50%)  

6. Now, navigate to the site settings of your Bold BI application using the new binding below, and update the new binding information as shown in the following image.  
**`http://172.31.176.1/bi/site/site1/administration`** 
![DS Base URL](/static/assets/faq/images/ds-url-binding.png#width=50%)

7. Now, Bold BI site can be browsed using the new binding.

> **IMPORTANT:** Do not remove the existing bindings. 

> **NOTE:**
> * If you have DNS, you can add a binding for the DNS instead of the IP mentioned here.
> * The IIS Express Development Certificate cannot be used to configure SSL with the IP address or domain. If it is configured with an IP address or domain, the Bold BI application will not function properly.