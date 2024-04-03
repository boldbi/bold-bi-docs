---
layout: post
title: How to integrate Bold BI dashboards with Git repository.
description: This page summarizes the process of integrating Bold BI dashboards with a local Git repository, facilitating seamless collaboration and version control for users.
platform: bold-bi
documentation: ug
---

# Bold BI dashboards Git integration.
In Bold BI, it's possible to download dashboards from tenants deployed on your server. Dashboards can be downloaded through both the UI and API.

## How to download dashboards:

1.	To download the dashboard file via the UI, please refer to the following documentation.

    •   [Download dashboard via UI](/resource-migration/migrate-dashboards-offline/download-dashboards/)

2.	To download the dashboard file via API, please refer to the following documentation.

    •   [Download dashboard via API](https://help.boldbi.com/server-api-reference/v4.0/api-reference/#operation/Dashboards_DownloadDashboard)

Since Bold BI lacks native Git integration, you must rely on an external tool such as [VS Code](https://code.visualstudio.com/) to initialize your Git repository.

Follow these steps to save dashboard files in source control.

1.  Open the bbix file folder using VS Code to create a local Git repository.

    ![open-file-on-vs-code](/static/assets/faq/images/open-file-on-vs-code.png)

2.  After opening the folder, click on the `Source Control` option and choose `Initialize Repository`.

    ![initialize-repository](/static/assets/faq/images/initialize-repository.png)

3.  Enter a commit message and perform the initial commit.

    ![perform-initial-commit](/static/assets/faq/images/perform-initial-commit.png)

4.  From now on, any changes you make to the 'bbix' file in the tracked folder will be monitored by your local Git.

    ![tracked-changes-difference](/static/assets/faq/images/tracked-changes-difference.png)

5.  By working with a local Git repository, you'll get immediate benefits such as:

    •	Backup and quick recovery of previous versions.

    •	Tracking changes:

    ![git-graph](/static/assets/faq/images/git-graph.png)
