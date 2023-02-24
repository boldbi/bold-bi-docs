---
layout: post
title: Configure X-Frame-Options in Cloud BI| Bold BI Docs
description: Learn about how to enable X-Frame-Options and restrict pages rendering in a frame to the current domain to secure sites in the Bold BI cloud application.
platform: bold-bi
documentation: ug
---

# X-Frame-Options configuration

X-Frame-Options is used to instruct the browser whether it should allow or restrict page rendering in a frame. It can avoid click-jacking attacks by ensuring that your site content is not embedded into other sites.

> **Warning:** Please make sure that you are not using iframe based embedding, as it will not work when X-Frame-Options setting is enabled in Bold BI.

When X-Frame-Options is enabled in Bold BI, it uses the `X-Frame-Options: SAMEORIGIN` response header, which will allow the rendering of pages in frames only to the current domain and restricts them in other domains.

By default, X-Frame-Options are disabled, and no restrictions are applied for rendering pages in a frame. The `X-Frame-Options` response header won't be added to the request.

![Content Security Policy settings for font](/static/assets/cloud/security-configuration/images/x-frame-options.png#width=55%)

## Enabling X-Frame-Options

If you enable X-Frame-Options, the pages will only be rendered in a frame if its ancestor's domain is the same as the page domain.

![Content Security Policy settings for font](/static/assets/cloud/security-configuration/images/enable-x-frame-options.png)

> **Warning:** Please make sure that you are not using iframe based embedding, as it will not work when X-Frame-Options setting is enabled in Bold BI.