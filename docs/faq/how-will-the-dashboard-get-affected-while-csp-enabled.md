---
layout: post
title: Impact of CSP policy on dashboards in Embedded BI | Bold BI Docs
description: Learn how will the dashboards get affected when Content Security Policy (CSP) enabled in Bold BI embedded application.
platform: bold-bi
documentation: ug
---

# Do enable Content Security Policy will affect existing dashboards rendering?

Enabling Content Security Policy (CSP) will not affect dashboard rendering unless the resources loaded inside the dashboards are requested from unknown domains and URLs are not excluded from CSP settings. If you want to load resources for your dashboard from an external URL, then you need to add that URL in the respective sources section on the CSP settings.

Click [here](/security-configuration/content-security-policy/) to learn how to configure CSP in the Bold BI.

> **NOTE:** Enabling the Content Security Policy support is not available in On-Premises Deployment and it is available in Syncfusion Managed Cloud Server.

## How will the dashboards get affected while content security policy enabled?

The Content Security Policy uses the `Content-Security-Policy` response header to restrict resource loading from unknown domains and allow resources only from the configured list of domains for each source. Hence, the resources like images and frames loaded inside the dashboard widget from external URLs other than your current domain will be restricted when the CSP is enabled. Let's see some scenarios where the CSP will affect the widget and dashboard rendering.

### Custom widgets

Custom widgets that allow frame source and image source from external URLs will get affected when CSP is enabled in Bold BI. To avoid this, you need to include the external URLs in the respective source sections in the CSP configuration.

Refer to this [link](/security-configuration/content-security-policy/#policy-configuration-for-image-source) to know how to include external URLs for the **image source** in CSP.

Refer to this [link](/security-configuration/content-security-policy/#policy-configuration-for-frame-source) to know how to include external URLs for the **frame source** in CSP.

### Text (Rich Text Editor) widget

The text (Rich Text Editor) widget which allows frame source and image sources from external URLs for frame embed and image embedding will get affected when the CSP is enabled in Bold BI. To avoid this, you need to include the external URLs in the respective source section in the CSP configuration.

Refer to this [link](/security-configuration/content-security-policy/#policy-configuration-for-image-source) to know how to include external URLs for the **image source** in CSP.

Refer to this [link](/security-configuration/content-security-policy/#policy-configuration-for-frame-source) to know how to include external URLs for the **frame source** in CSP.

### Widget using image and link

A widget that allows image source or frame source from an external URL for the background image, icon image, or linking external URL will get affected when the CSP is enabled in Bold BI. For example, the image property for the card widget, the widget which supports conditional formatting with custom image upload, and the link when opened in the pop-up. Images and frame sources loading from the external URLs will be restricted by the CSP. To avoid this, you need to include the external URLs in the respective source sections in the CSP configuration.

Refer to this [link](/security-configuration/content-security-policy/#policy-configuration-for-image-source) to know how to include external URLs for the **image source** in CSP.

Refer to this [link](/security-configuration/content-security-policy/#policy-configuration-for-frame-source) to know how to include external URLs for the **frame source** in CSP.