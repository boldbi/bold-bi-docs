---
layout: post
title: Embed Dashboard with Advanced Security | Bold BI Learning
description: Learn how to embed dashboard with advanced security like restricting embedded dashboard access to specific domains or IP addresses.
platform: bold-bi
documentation: ug
---

# Embed your Dashboard with advanced security

1. Please specify the domain in which you want to embed the dashboard and select the `When the dashboard is embedded` option in the `Apply these settings` section.

    ![Update Embed settings](/static/assets/iFrame-based/images/update-embed-settings.png)

    Please ensure that you are using a valid HTTPS URL. The following list provides examples of URLs that are valid for embedded dashboards:

      * `example.com`
      * `data.com`
      * `127.0.0.1`
      * `121.1.0.11`

2. Please find the embed code for the dashboard that you want to include on your website. [Dashboard Embedding](/embedding-options/iframe-embedding/embedding-with-iframe/#Embed the dashboard in an iframe) is a guide on how to obtain the dashboard embed code.

3. The dashboards can only be embedded on the domains that are listed in the `Accept embedding requests from these websites` section.

4. If you embed the dashboards other than the specified domains, it will show the blocked message.  

    The blocked message may vary depending on the browser used.

    * **Google Chrome**

        Chrome does not display any error message for blocked content of embedded dashboards; instead, it simply shows a blank page.

    * **Firefox**

        ![firefox error page](/static/assets/iFrame-based/images/content-blocked-firefox.png)

    * **Microsoft Edge**

        ![Edge error page](/static/assets/iFrame-based/images/content-blocked-edge.png)