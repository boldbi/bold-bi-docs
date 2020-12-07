---
layout: post
title: Embed Dashboard with Advanced Security | Bold BI Learning
description: Learn how to embed dashboard with advanced security like restricting embedded dashboard access to specific domains or IP addresses.
platform: bold-bi
documentation: ug
---

# Embed your Dashboard with advanced security

1. Specify the domain you want to embed the dashboard and select `When the dashboard is embedded` option in `Apply these settings`.

    ![Update Embed settings](/static/assets/embedded/iFrame-based/images/update-embed-settings.png)

    Make sure that you use a valid HTTPS URL. The following list shows examples of URLs that are valid for embedded dashboards:

      * `example.com`
      * `data.com`
      * `127.0.0.1`
      * `121.1.0.11`

2. Get embed code for the dashboard, which you want to embed in your website. Check [here](/embedded-bi/iframe-based/dashboard-view-mode/) on how to get the dashboard embed code.

3. The dashboards can be embedded only in the domains specified in the `Accept embedding requests from these websites`

4. If you embed the dashboards other than the specified domains, it will show the blocked message.  

    The blocked message will differ based on the browsers.

    * **Google Chrome**

        Chrome does not show any error message for blocked content of embed dashboards and it simply shows a blank page.

    * **Firefox**

        ![firefox error page](/static/assets/embedded/iFrame-based/images/content-blocked-firefox.png)

    * **Microsoft Edge**

        ![Edge error page](/static/assets/embedded/iFrame-based/images/content-blocked-edge.png)