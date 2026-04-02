---
layout: post
title: Proxy Settings – On-Premises & Embedded | Bold BI Docs
description: Learn how to configure proxy settings in Bold BI to route traffic securely and update domain and site configurations.
platform: bold-bi
documentation: ug
---

# Proxy Settings

You can configure proxy settings in the **Bold BI** application to route traffic through a specified proxy server.

## What is a Reverse Proxy?

A **reverse proxy** is a server that sits between client devices and your backend application servers. It receives incoming requests from clients and forwards them to the appropriate internal server. Once the response is received from the internal server, it is sent back to the client by the reverse proxy.

## Configure Proxy URL

- You can choose either `http` or `https` for the protocol based on your certificate configuration.
- In the **Site or Proxy URL** field, enter your desired domain (e.g., `example.com` or `localhost:55981`).

![Proxy Settings Screenshot](/static/assets/multi-tenancy/images/proxy-settings-site-url.png)

## Available Options

### Preview
- You can use this preview to see how the final Site/Proxy URL will appear once applied.
- This helps verify the correctness of the configured URL before saving.

![Preview](/static/assets/multi-tenancy/images/Preview-Proxy-Settings.png#width=55%)

### Detected current site URL (effective)
- This shows the URL automatically detected from incoming requests.
- It helps confirm what the system currently identifies as the active site address.

![Detected Current Site URL](/static/assets/multi-tenancy/images/Detected-Site-URL.png#width=55%)

### Only sites that currently use this URL

- Enable this option if you want updates to apply only to sites already using the entered URL.
- This prevents accidental URL changes for other sites in your environment.

![Only-Current-Site](/static/assets/multi-tenancy/images/Update-only-specified-sites.png#width=55%)

### Force this URL for all sites

- If you want a single domain to be enforced across all sites, you can enable this option.
- This forces all sites to use the same URL, so use it with caution as it overrides individual site configurations.

![Force-Change-URL](/static/assets/multi-tenancy/images/Update-all-sites.png#width=55%)

### Lock site URLs and prevent automatic updates from reverse proxy requests

- Enable this option when your deployment uses a fixed domain configuration. When turned on, the system stops automatically updating the Site/Proxy URL based on incoming reverse‑proxy requests.

- This ensures that the configured Site/Proxy URL remains stable and can only be changed manually through the administration settings. Even with this option enabled, the application can still be accessed using any valid proxy URL that has been configured in your reverse proxy server.

![Lock Site URL](/static/assets/multi-tenancy/images/Lock-Site-URL.png#width=55%)

### Ignore SSL Certificate Validation

- If your environment does not have a valid SSL certificate, you can check **Ignore the SSL certificate validation errors**.
- This is helpful for development or internal environments without a trusted certificate authority.

![Proxy Settings Screenshot](/static/assets/multi-tenancy/images/ignore-SSL-Certificate.png#width=55%)

## Notes

- Use `https` only if a valid SSL certificate is configured.
- Once the proxy settings are updated, you need to **restart the application** for the changes to take effect when using combined deployment (Bold BI and Bold Reports).