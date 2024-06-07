---
layout: post
title: Changing DNS for your sites in older versions | Bold BI Docs
description: Learn how to change DNS binding for each site registered with Bold BI application 4.1.36 or below that are used for embedded scenarios.
platform: bold-bi
documentation: ug
---

> This document explains how to change a DNS for each site in the Bold BI version 4.1.36 or below. Please check [how to change the DNS for each tenant site](/faq/how-to-change-dns-for-each-tenant-site/) in the Bold BI version above 4.1.36.

# How to change a DNS for each site in Bold BI Application

Follow these steps to change the DNS for each site:

## Steps to change DNS for each site

1. Open IIS, click on `Bindings` for the Bold BI Enterprise site, and then click `Add` to add a new DNS.

   You can add multiple binding to the Bold BI site in IIS.

   ![New Binding](/static/assets/faq/images/new-binding.png#width=55%)

2. Fill in the `Host name` and click `OK`.

    ![Save Binding](/static/assets/faq/images/save-binding.png#width=40%)

3. Now, open the Bold BI site settings page and update the `site URL` for the site where you want to change the DNS.

    ![Update Site URL](/static/assets/faq/images/update-site-url.png#width=50%)

    Now, you will be able to access each site with its own unique URL.

    > **NOTE:** You can change only the *host name* to the site URL.

4. Click `Save` and your site will now be running with the updated site URL.