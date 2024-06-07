---
layout: post
title: How to configure X-Frame-Options in Embedded BI| Bold BI Docs
description: Learn about how to enable X-Frame-Options and restrict pages rendering in a frame to the current domain to secure sites in the Bold BI embedded application.
platform: bold-bi
documentation: ug
---

# X-Frame-Options configuration

The X-Frame-Options is used to instruct the browser on whether it should allow or restrict page rendering in a frame. It can help prevent click-jacking attacks by ensuring that your site content is not embedded into other sites.

> **Warning:** Please ensure that you do not use iframe-based embedding, as it will not function when the X-Frame-Options setting is enabled in Bold BI.

When X-Frame-Options is enabled in Bold BI, it uses the `X-Frame-Options: SAMEORIGIN` response header. This header allows the rendering of pages in frames only for the current domain and restricts them on other domains.

By default, X-Frame-Options is disabled, and no restrictions are applied for rendering pages in a frame. The `X-Frame-Options` response header will not be added to the request.

![Content Security Policy settings for font](/static/assets/security-configuration/images/x-frame-options.png#width=55%)

## Enabling X-Frame-Options

If you enable X-Frame-Options, the pages will only be rendered in a frame if the domain of its ancestor is the same as the domain of the page.

![Content Security Policy settings for font](/static/assets/security-configuration/images/enable-x-frame-options.png)

> **Warning:** Please ensure that you do not use iframe-based embedding, as it will not function when the X-Frame-Options setting is enabled in Bold BI. Click on the [iFrame Embedding](/embedding-options/iframe-embedding/) to learn more about iframe based embedding.