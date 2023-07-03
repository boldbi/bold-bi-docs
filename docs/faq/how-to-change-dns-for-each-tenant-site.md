---
layout: post
title: Changing DNS for your sites – Embedded | Bold BI Docs
description: Learn how to change DNS binding for each site registered with Bold BI application that are used for embedded scenarios.
platform: bold-bi
documentation: ug
lang: en
---

> This document explains how to change a DNS for each site in the Bold BI version above 4.1.36. Check [this](/faq/how-to-change-dns-for-each-tenant-site-v4.1.36-or-below/) to change a DNS for each site in the Bold BI version 4.1.36 or below.

# How to change a DNS for each site in Bold BI Application

Follow the below steps for changing a DNS for each site,

## Steps to change DNS for each site

1. Open IIS, to click a `Bindings` for Bold BI Enterprise site and click an `Add` button for adding a new DNS.

   You can add multiple binding to the Bold BI site in IIS.

   ![New Binding](/static/assets/faq/images/new-binding.png#width=50%)

2. Fill the `Host name` and click `OK`

    ![Save Binding](/static/assets/faq/images/save-binding.png#width=40%)

3. Now, open the Bold BI ums site listing page and update the `site URL` for the site where you want to change the DNS.

    ![UMS site listing](/static/assets/faq/images/ums-site-listing.png#width=65%)

    ![Update Site URL](/static/assets/faq/images/update-site-url-in-ums.png#width=35%)

4. Click `Next` and you need to provide the `Password` of the database, which configured for the respective site.

    ![Update Site Details](/static/assets/faq/images/update-site-details.png#width=30%)

5. Click `Update`, now your site will be running with updated site URL.