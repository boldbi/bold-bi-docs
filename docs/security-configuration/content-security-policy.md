---
layout: post
title: Configure Content Security Policy to Secure Sites | Bold BI Docs
description: Learn about how to configure Content Security Policy (CSP) settings to secure sites in the Bold BI embedded application.
platform: bold-bi
documentation: ug
---

# Content Security Policy

An attacker may try to deliver malicious scripts and inject unwanted data into your site using cross-site scripting (XSS) and data injection attacks. The browser will execute all sources from any origin without restriction, as it doesn't know whether the source is trusted or not, and the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser. Hence to secure your site from this kind of attack, the Content Security Policy has a standardized collection of directives that instruct the browser on which content sources can be allowed and which should be restricted.

## How its work?

The content security policy uses the `Content-Security-Policy` response header to restrict resource loading from unknown domains and allow resources only from the configured list of domains for each source. Restrict the execution of malicious resources including style, script, font, image, connect, and frame sources on your site from other domains by configuring the Content security policy with the specific directive in Bold BI.

## Do enable Content Security Policy will affect existing dashboards rendering?

Enabling Content Security Policy (CSP) will not affect dashboard rendering unless the resources loaded inside the dashboards are requested from unknown domains and URLs are not excluded from the CSP settings. If you want to load resources for your dashboard from an external URL, you need to add that URL in the respective sources section on the CSP settings.

Click [here](/embedded-bi/faq/how-will-the-dashboard-get-affected-while-csp-enabled/) to learn more about the areas which will get affected in dashboards when the CSP is enabled in Bold BI.

## Content Security Policy Configuration

Configure the Content Security Policy in the Security settings under the Security section in the administration settings of Bold BI.

By default, the Content Security Policy is disabled and allows sources from all domains without restriction. The `Content-Security-Policy` response header won't be added to the request.

![Content Security Policy settings](/static/assets/embedded/security-configuration/images/csp-settings.png#width=55%)

## Enabling Content Security Policy

If you enable the `Content-Security-Policy` option, the Content-Security-Policy response header will be added to the request header with the default allowed domain values for each source.

![Enabled Content Security Policy settings](/static/assets/embedded/security-configuration/images/enable-csp.png#width=55%)

## Policy configuration for Style Source

The `style-src` directive allows the style sheets only from URLs that are added in the `Style Source` field and restricts style sheets from other URLs.

![Content Security Policy settings for source](/static/assets/embedded/security-configuration/images/csp-source.png)

The allowed URLs will be added in the `Content-Security-Policy` as follows for the style source.

`Content-Security-Policy: style-src 'self' http://example.com`


## Policy configuration for Script Source

The `script-src` directive allows the JavaScript sources only from URLs that are added in the `Script Source` field and restricts script sources from other URLs.

![Content Security Policy settings for script](/static/assets/embedded/security-configuration/images/csp-script.png)

The allowed URLs will be added in the `Content-Security-Policy` as follows for the script source.

`Content-Security-Policy: script-src 'self' https://test.boldbi.com http://example.com`


## Policy configuration for Font Source

The `font-src` directive allows the font sources only from URLs that are added in the `Font Source` field and restricts font sources from other URLs.

![Content Security Policy settings for font](/static/assets/embedded/security-configuration/images/csp-font.png)

The allowed URLs will be added in the `Content-Security-Policy` as follows for the font source.

`Content-Security-Policy: font-src 'self' https://test.boldbi.com`


## Policy configuration for Image Source

The `img-src` directive allows the images only from URLs that are added in the `Image Source` field and restricts image sources from other URLs.

![Content Security Policy settings for font](/static/assets/embedded/security-configuration/images/csp-image.png)

The allowed URLs will be added in the `Content-Security-Policy` as follows for the image source.

`Content-Security-Policy: img-src 'self' http://localhost:62833`


## Policy configuration for Connect Source

The `connect-src` directive allows the source to make Fetch/XHR requests only from URLs added in the `Connect Source` field and restricts sources that make Fetch/XHR requests from other URLs.

![Content Security Policy settings for connect](/static/assets/embedded/security-configuration/images/csp-connect.png)

The allowed URLs will be added in the `Content-Security-Policy` as follows for the connect source.

`Content-Security-Policy: connect-src 'self' http://localhost:62833`


## Policy configuration for Frame Source

The `frame-src` directive allows the sources for the nested document to use elements like `<frame>` and `<iframe>` only from URLs that are added in the `Frame Source` field and restricts sources from other URLs.

![Content Security Policy settings for connect](/static/assets/embedded/security-configuration/images/csp-frame.png)

The allowed URLs will be added in the `Content-Security-Policy` as follows for the frame source.

`Content-Security-Policy: frame-src 'self' http://example.com`