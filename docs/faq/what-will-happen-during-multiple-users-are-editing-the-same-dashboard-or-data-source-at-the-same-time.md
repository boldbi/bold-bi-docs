---
layout: post
title: Multiple users editing the dashboard at same time | Bold BI Docs
description: This page summarizes versioning and what will happen when multiple users are editing the same dashboard or data source at the same time in Bold BI application.
platform: bold-bi
documentation: ug
---

# What will happen during multiple users are editing the same dashboard or data source at the same time

In Bold BI, we have `versioning` support for both dashboards and data sources. Any new publish made for the dashboard will be saved as a new version so that the user can switch back to the previous version if needed. Please refer to this [section](/managing-resources/manage-dashboards/version-history-of-dashboards/) for more details.

When editing a dashboard or data source, each user working on the dashboard will have their own isolated draft that is maintained. The user can navigate back to the draft when needed.

Any changes made to the dashboard in draft will be available for the user alone. When the dashboard is published, the changes will be published as a new version on the Bold BI server. Other users will be prompted with a dialog asking whether to load the latest dashboard changes or to load the draft changes when editing the dashboard again.