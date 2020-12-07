---
layout: post
title: Dashboard Version History – Embedded BI | Bold BI Docs
description: Learn how versions and file logs for each dashboard will be maintained in the Bold BI Embedded server for every change in a dashboard.
canonical: "/cloud-bi/managing-resources/manage-dashboards/version-history-of-dashboards/" 
platform: bold-bi
documentation: ug
---

# Version History

Versions and file logs for each Dashboard will be maintained in the Dashboard server for every changes in the Dashboard.

### Versions
For each change in the `.sydx` file, a new version will be created. All versions can be individually opened. At any time, the Dashboard can be rolled back to an older version.

![Versions](/static/assets/embedded/managing-resources/manage-dashboards/images/versions.png)

### File logs
For each change in the Dashboard including changes in the name, description, category and `.sydx` file, Dashboard server logs the changes done in the file logs.

![File logs](/static/assets/embedded/managing-resources/manage-dashboards/images/file-logs.png)