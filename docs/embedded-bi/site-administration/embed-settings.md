---
layout: post
title: Embed Settings – Embedded BI | Bold BI Documentation
description: Learn how to enable the embed authentication and generate the secret code using the embed settings in the Bold BI server.
canonical: "/cloud-bi/site-administration/embed-settings/"
platform: bold-bi
documentation: ug
---

# Embed Settings to generate Embed Secret key

This section explains on how to enable the embed authentication and generate the secret code in the Bold BI Server. 

## Get embed secret code

1. Go to the settings page and click `Embed`. Enable the `Enable embed authentication` under that page.

    ![Enable embed authentication](/static/assets/embedded/site-administration/images/enable-embed-option.png)

2. Click `Generate Secret` button.

    ![Generate secret code](/static/assets/embedded/site-administration/images/generate-secret-code.png)

3. On clicking it, the secret code will be generated. Save the secret key safely, as it will not be able to retrieve or restore this generated secret.                    

    ![Copy secret code](/static/assets/embedded/site-administration/images/copy-secret-code.png)

4. Once the secret code is generated, it can be reset by clicking the `Reset Secret` button.

    ![Reset secret code](/static/assets/embedded/site-administration/images/reset-secret-code.png)

> **Warning :** Resetting this code will break the previously working embedded dashboards.

## Get common embed secret code from UMS

This common embed secret code would help you to embed the dashboard from multiple sites with the same embed secret code. If you reset the common embed secret code, it will break the previously working embedded dashboards in all the sites. 

1. Click the profile icon and select the `Manage sites(Admin access)` option, then it would open the UMS sites page in a new tab.

    ![Navigate to sites](/static/assets/embedded/site-administration/images/navigate-sites.png)

2. In UMS, go to the settings page and click `Embed.` Enable the `Enable embed authentication` under that page.

    ![Enable embed authentication](/static/assets/embedded/site-administration/images/ums-enable-embed.png)

3. Click the `Generate Secret` button.

    ![Generate secret code](/static/assets/embedded/site-administration/images/ums-generate-secret-code.png)

4. On clicking it, the secret code will be generated. Save the secret key safely as it will not be able to retrieve or restore this generated secret.                    

    ![Copy secret code](/static/assets/embedded/site-administration/images/ums-copy-secret-code.png)

5. Once the secret code is generated, it can be reset by clicking the `Reset Secret` button.

    ![Reset secret code](/static/assets/embedded/site-administration/images/ums-reset-secret-code.png)

> **Warning:** Resetting this common embed code will break the previously working embedded dashboards in multiple sites.

> **NOTE:**  This embed feature will be available only in the Embedded BI Plan.