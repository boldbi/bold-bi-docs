---
layout: post
title: Multiple users editing the dashboard at same time | Bold BI Docs
description: This page summarizes versioning and what will happen when multiple users are editing the same dashboard or data source at the same time in Bold BI application.
platform: bold-bi
documentation: ug
---

# What will happen during multiple users are editing the same dashboard or data source at the same time

In Bold BI we have `Versioning` support for both dashboards and data sources. Any new publish done for the dashboard will be saved as a new version so that the user can switch back to the previous version if needed. Please refer to this [section](https://help.boldbi.com/embedded-bi/managing-resources/manage-dashboards/version-history-of-dashboards/) for more details. 

When it comes to editing a dashboard or data source, each user working on the dashboard will have an isolated draft maintained. The user can navigate back to the draft when needed. 

Any changes done to the dashboard in draft will be available for the user alone. And when the dashboard is published the changes will be published as a new version in the Bold BI server. The other users will be prompted with a dialog asking whether to load the latest dashboard changes or to load the draft changes on editing the dashboard again.