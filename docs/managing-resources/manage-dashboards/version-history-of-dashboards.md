---
layout: post
title: Dashboard Version History – Embedded BI | Bold BI Docs
description: Learn how versions and file logs for each dashboard will be maintained in the Bold BI Embedded server for every change in a dashboard.
canonical: "/managing-resources/manage-dashboards/version-history-of-dashboards/" 
platform: bold-bi
documentation: ug
---

# Version History

Versions and file logs for each Dashboard will be maintained on the Dashboard server for every change in the Dashboard.

### Versions
For each change in the `.sydx` file, a new version will be created. All versions can be opened individually. The Dashboard can be rolled back to an older version at any time.

![Versions](/static/assets/managing-resources/manage-dashboards/images/versions.png)

#### Version Comments
When creating or updating dashboards, users have the option to add comments. These comments serve as a useful reference and are displayed in the comments column for each version of the dashboard. To learn how to add comments to a dashboard, please refer [here](/getting-started/creating-dashboard/#publishing-dashboards-with-comments).

![Version Comment](/static/assets/managing-resources/manage-dashboards/images/versioncomment.png)

### File logs
For each change in the Dashboard, file logs will be added, including changes to the name, description, making public, making private, and security.

![File logs](/static/assets/managing-resources/manage-dashboards/images/file-logs.png)