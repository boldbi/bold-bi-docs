---
layout: post
title: Embed Settings – Cloud BI | Bold BI Documentation
description: Learn how to enable the embed authentication and generate the secret code using the embed settings in the Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Embed Settings to generate Embed Secret key

This section explains on how to enable the embed authentication and generate the secret code in the Bold BI Cloud. 

## Get embed secret code

1. Go to the settings page and click `Embed`. Enable the `Enable embed authentication` under that page.

    ![Enable embed authentication](/static/assets/cloud/site-administration/images/enable-embed-option.png)

2. Click `Generate Secret` button.

    ![Generate secret code](/static/assets/cloud/site-administration/images/generate-secret-code.png)

3. On clicking it, the secret code will be generated. Save the secret key safely, as it will not be able to retrieve or restore this generated secret.                    

    ![Copy secret code](/static/assets/cloud/site-administration/images/copy-secret-code.png)

4. Once the secret code is generated, it can be reset by clicking the `Reset Secret` button.

    ![Reset secret code](/static/assets/cloud/site-administration/images/reset-secret-code.png)

> **Warning :** Resetting this code will break the previously working cloud dashboards.

> **NOTE:**  This feature will be available only in Cloud BI Plan.
