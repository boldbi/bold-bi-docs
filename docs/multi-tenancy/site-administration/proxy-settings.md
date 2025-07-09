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

### Update the URL of the sites

- Enable this checkbox to automatically update the URL for all sites that are deployed using the same domain.

![Proxy Settings Screenshot](/static/assets/multi-tenancy/images/reverse-proxy-setting-multiple-sites.png)

### Ignore SSL Certificate Validation

- If your environment does not have a valid SSL certificate, you can check **Ignore the SSL certificate validation errors**.
- This is helpful for development or internal environments without a trusted certificate authority.

![Proxy Settings Screenshot](/static/assets/multi-tenancy/images/reverse-proxy-settings-ignore-ssl.png)

## Notes

- Use `https` only if a valid SSL certificate is configured.
- Once the proxy settings are updated, you need to **restart IIS** for the changes to take effect.