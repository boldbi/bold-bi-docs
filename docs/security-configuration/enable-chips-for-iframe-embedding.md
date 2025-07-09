---
layout: post
title: Enable CHIPS for IFrame Embedding | Bold BI Documentations
description: Learn to enable CHIPS in Bold BI to store cookies per site, protect user privacy, and prevent cross-site tracking in secure iframe embedding scenarios.
platform: bold-bi
documentation: ug
---

# What is Partitioned Cookies
Cookies Having Independent Partitioned State (CHIPS) also known as partitioned cookies allow web developers to store cookies separately for each top-level site. This helps prevent third-party tracking by making cookies accessible only within the context of the site where they were created.

CHIPS maintain user experience for valid use cases like preserving the state of embedded maps or chat widgets across different host websites while still respecting privacy boundaries.

## How CHIPS Work
When a site like example.com embeds content from source-example.com using an iframe, source-example.com can set a third-party cookie in the user's browser. If the user later visits embed-example.com, which also embeds content from source-example.com, embed-example.com can access the cookie set by source-example.com without requiring the user to sign in again.

Traditionally, browsers store cookies using a host-only key, meaning a cookie set by source-example.com is accessible on any site that embeds it (e.g., example.com, embed-example.com), enabling cross-site tracking.

With third-party cookies being deprecated, this method is no longer allowed. Each time source-example.com is embedded, it would otherwise require the user to re-authenticate.

To address this, CHIPS introduces cookie partitioning. When source-example.com sets a cookie via an iframe on example.com, the browser stores that cookie with two keys:

Partition Key: example.com
Host Key: source-example.com

If the user then visits embed-example.com, which also embeds source-example.com, the cookie is not shared, since the partition key (embed-example.com) differs from the original (example.com).

## How to enable CHIPS for Iframe-based Embedding in Bold BI

1. Please go to the UMS security page in Bold BI and click on the `Cookie Options` tab.

![Partitioned Cookies](/static/assets/security-configuration/images/partitioned-cookies.png#width=40%)

2. 2. To enable CHIPS for iframe-based embedding, turn on the `Enable CHIPS for IFrame-based Embedding` toggle button and save the changes.

![Partitioned Cookies](/static/assets/security-configuration/images/enable-chips.png#width=40%)

3.  Once the changes are saved, the `SameSite attribute` will be set to `None`.