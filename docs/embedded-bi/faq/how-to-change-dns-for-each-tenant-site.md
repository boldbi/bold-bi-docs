---
layout: post
title: Changing DNS for your sites – Embedded | Bold BI Docs
description: Learn how to change DNS binding for each site registered with Bold BI application that are used for embedded scenarios.
platform: bold-bi
documentation: ug
---

# How to change a DNS for each site in Bold BI Application

Follow the below steps for changing a DNS for each site,

## Steps to change DNS for each site

1. Open IIS, to click a `Bindings` for Bold BI Enterprise site and click an `Add` button for adding a new DNS.

   You can add multiple binding to the Bold BI site in IIS.

   ![New Binding](/static/assets/embedded/faq/images/new-binding.png)

2. Fill the `Host name` as your wish and click `OK`.

    ![Save Binding](/static/assets/embedded/faq/images/save-binding.png)

3. Now open a Bold BI site settings page and update a `site URL` for which site you want to change the DNS.

    ![Update Site URL](/static/assets/embedded/faq/images/update-site-url.png)

    Now you will be able to access each site with the specific unique URL.

    > **NOTE:** You can change only the *host name* to site URL.

 4. Click `Save`, now your site will be running with updated site URL.