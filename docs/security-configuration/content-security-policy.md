---
layout: post
title: Configure Content Security Policy to Secure Sites | Bold BI Docs
description: Learn about how to configure Content Security Policy (CSP) settings to secure sites in the Bold BI embedded application.
platform: bold-bi
documentation: ug
---

# Content Security Policy

An attacker may attempt to deliver malicious scripts and inject unwanted data into your site using cross-site scripting (XSS) and data injection attacks. The browser will execute all sources from any origin without restriction, as it does not know whether the source is trusted or not. The malicious script can then access any cookies, session tokens, or other sensitive information stored by the browser. Therefore, to protect your site from this type of attack, the Content Security Policy includes a standardized set of directives that guide the browser on which content sources are allowed and which should be restricted.

## How it works?

The Content Security Policy uses the `Content-Security-Policy` response header to restrict resource loading from unknown domains and allows resources only from the configured list of domains for each source. To restrict the execution of malicious resources, including style, script, font, image, connect, and frame sources, from other domains on your site, configure the Content Security Policy with the specific directive in Bold BI.

## Do enable Content Security Policy will affect existing dashboards rendering?

Enabling Content Security Policy (CSP) will not affect dashboard rendering unless the resources loaded inside the dashboards are requested from unknown domains, and URLs are not excluded from the CSP settings. If you want to load resources for your dashboard from an external URL, you need to add that URL in the respective sources section of the CSP settings.

To learn more about the areas that will be affected in dashboards when the [Content Security Policy (CSP)](https://support.boldbi.com/kb/article/16736/how-will-the-dashboard-get-affected-while-csp-enabled) is enabled in Bold BI.

## Content Security Policy Configuration

Configure the Content Security Policy in the Security settings, which can be found under the Security section in the administration settings of Bold BI.

By default, the Content Security Policy is disabled, allowing sources from all domains without any restriction. The `Content-Security-Policy` response header will not be added to the request.

![Content Security Policy settings](/static/assets/security-configuration/images/csp-settings.png#width=55%)

## Enabling Content Security Policy

If you enable the `Content-Security-Policy` option, the Content-Security-Policy response header will be added to the request header with the default allowed domain values for each source.

![Enabled Content Security Policy settings](/static/assets/security-configuration/images/enable-csp.png#width=55%)

## Policy configuration for Style Source

The `style-src` directive allows only the style sheets from URLs that are added in the `Style Source` field and restricts style sheets from other URLs.

![Content Security Policy settings for source](/static/assets/security-configuration/images/csp-source.png)

The permitted URLs will be added to the `Content-Security-Policy` for the style source.

`Content-Security-Policy: style-src 'self' http://example.com`


## Policy configuration for Script Source

The `script-src` directive allows only JavaScript sources from URLs that are added in the `Script Source` field, and it restricts script sources from other URLs.

![Content Security Policy settings for script](/static/assets/security-configuration/images/csp-script.png)

The allowed URLs will be added to the `Content-Security-Policy` for the script source.

`Content-Security-Policy: script-src 'self' https://test.boldbi.com http://example.com`


## Policy configuration for Font Source

The `font-src` directive allows font sources only from URLs that are added in the `Font Source` field and restricts font sources from other URLs.

![Content Security Policy settings for font](/static/assets/security-configuration/images/csp-font.png)

The permitted URLs will be added to the `Content-Security-Policy` for the font source.

`Content-Security-Policy: font-src 'self' https://test.boldbi.com`


## Policy configuration for Image Source

The `img-src` directive allows only the images from URLs that are added in the `Image Source` field and restricts image sources from other URLs.

![Content Security Policy settings for font](/static/assets/security-configuration/images/csp-image.png)

The permitted URLs will be added to the `Content-Security-Policy` for the image source.

`Content-Security-Policy: img-src 'self' http://localhost:62833`


## Policy configuration for Connect Source

The `connect-src` directive allows the source to make Fetch/XHR requests only from URLs that are added in the `Connect Source` field and restricts sources that make Fetch/XHR requests from other URLs.

![Content Security Policy settings for connect](/static/assets/security-configuration/images/csp-connect.png)

The permitted URLs will be added to the `Content-Security-Policy` for the connect source.

`Content-Security-Policy: connect-src 'self' http://localhost:62833`


## Policy configuration for Frame Source

The `frame-src` directive allows the sources for the nested document to use elements such as `<frame>` and `<iframe>` only from URLs that are added in the `Frame Source` field, and it restricts sources from other URLs.

![Content Security Policy settings for connect](/static/assets/security-configuration/images/csp-frame.png)

The permitted URLs will be added to the `Content-Security-Policy` for the frame source.

`Content-Security-Policy: frame-src 'self' http://example.com`

## Policy configuration for Frame Ancestors 

The `Frame-Ancestors` directive specifies valid parent domains that may embed a dashboard or complete application using `<iframe>` only from URLs added in the `Frame-Ancestors` field. However, the CSP header will not apply this directive if the `X-Frame-Options` has already been enabled.

![Content Security Policy settings for connect](/static/assets/security-configuration/images/csp-frame-ancestors.png)

The allowed URLs will be included in the `Content-Security-Policy` for the frame ancestors.

`Content-Security-Policy: frame-ancestors 'self' http://example.com`