---
layout: post
title: Changing DNS for your sites in older versions | Bold BI Docs
description: Learn how to change DNS binding for each site registered with Bold BI application 4.1.36 or below that are used for embedded scenarios.
platform: bold-bi
documentation: ug
---

> This document explains how to change a DNS for each site in the Bold BI version 4.1.36 or below. Check [this](/embedded-bi/faq/how-to-change-dns-for-each-tenant-site/) to change a DNS for each site in the Bold BI version above 4.1.36.

# How to change a DNS for each site in Bold BI Application

Follow these steps for changing a DNS for each site:

## Steps to change DNS for each site

1. Open IIS, to click a `Bindings` for Bold BI Enterprise site and click `Add` for adding a new DNS.

   You can add multiple binding to the Bold BI site in IIS.

   ![New Binding](/bold-bi-docs/static/assets/embedded/faq/images/new-binding.png#width=55%)

2. Fill the `Host name` and click `OK`.

    ![Save Binding](/bold-bi-docs/static/assets/embedded/faq/images/save-binding.png#width=40%)

3. Now, open the Bold BI site settings page and update the `site URL` for the site where you want to change the DNS.

    ![Update Site URL](/bold-bi-docs/static/assets/embedded/faq/images/update-site-url.png#width=50%)

    Now, you will be able to access each site with the specific unique URL.

    > **NOTE:** You can change only the *host name* to the site URL.

4. Click `Save`, now your site will be running with updated site URL.