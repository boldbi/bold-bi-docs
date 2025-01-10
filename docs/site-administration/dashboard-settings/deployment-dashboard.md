---
layout: post
title: Deploying Dashboards to Production – Embedded BI | Bold BI Docs
description: Learn how to deploy dashboards from one site to another site with Bold BI Embedded. With this you can deploy any dashboard from testing site to production site.
platform: bold-bi
documentation: ug
---

# Deployment dashboards
You can publish one or more dashboards to a site while creating that site by setting the deployment dashboards.

> **NOTE:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

This section explains how to add dashboards to each site while deploying that site in the Bold BI application.

## Add deployment dashboards
To add deployment dashboards, follow these steps:

1. Click the `gear` icon and go to the dashboard setting page, as shown in the following image.

    ![dashboard setting page](/static/assets/site-administration/images/dashboard-setting.png)

2. Click the deployment dashboards tab, where you can find the `Add dashboard` button at the right corner.

    ![deployment dashboard page](/static/assets/site-administration/images/deployment-dashboard-page.png)

3. Click on `Add dashboard`, which opens a dialog box.

    ![deployment dashboard dialog](/static/assets/site-administration/images/deployment-dashboard-dialog.png#width=60%)

4. Select the category and dashboard that you need to deploy to each site. Provide a category name, dashboard name, and description to be used on the deployed sites, as shown in the following image.

    ![Fill the deployment dashboard dialog](/static/assets/site-administration/images/fill-deployment-dashboard-dialog.png#width=60%)

5. Select the checkbox `Use category and dashboard name`. If you want to publish the dashboard with the source category name and dashboard on the destination sites.

    ![Use category and dashboard name](/static/assets/site-administration/images/use-category-dashboard-name.png#width=60%)

6. You can publish a dashboard with public accessibility by checking the Make Dashboard Public option. This allows anonymous users who have access to the Dashboard link to access it.

    ![Make public the deployment dashboard dialog](/static/assets/site-administration/images/make-public-deployment-dashboard-dialog.png#width=60%)

7. By selecting the lock option, you can lock your dashboard and data source, making it not editable and adding it to the deployment dashboard.
    
    ![Lock Option in deployment dashboard dialog](/static/assets/site-administration/images/lock-deployment-dashboard.png#width=60%)

8. You can view the added deployment dashboards in the grid and receive a success message.

    ![deployment dashboards in grid view](/static/assets/site-administration/images/deployment-dashboards-grid-view.png)

    ![deployment dashboard success message](/static/assets/site-administration/images/deployment-dashboard-success-message.png)

> **NOTE:** You are not allowed to add a dashboard more than once in the deployment dashboards.

## Remove the deployment dashboards

You can remove the deployment dashboards by clicking the remove icon and then selecting delete.

![Remove the deployment dashboard](/static/assets/site-administration/images/remove-deployment-dashboard.png)

![Removed deployment dashboard message](/static/assets/site-administration/images/remove-deployment-dashboard-message.png)

## Deployment dashboards in other sites

When creating a new site, the deployment dashboards will be added to that site.

You can view the deployment dashboards in other sites as shown in the following image.

![Deployment dashboards in other sites](/static/assets/site-administration/images/deployment-dashboard-other-sites.png#width=60%)

