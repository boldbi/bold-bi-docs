---
layout: post
title: Deploying Dashboards to Production – Embedded BI | Bold BI Docs
description: Learn how to deploy dashboards from one site to another site with Bold BI Embedded. With this you can deploy any dashboard from testing site to production site.
platform: bold-bi
documentation: ug
---

# Deployment dashboards
You can publish one or more dashboards into a site while creating that site by setting the deployment dashboards. 

> **NOTE:** This feature is available in Bold BI Embedded Analytics but not in Cloud Analytics Server.

This section explains how to add dashboards to each site while deploying that site in the Bold BI application.

## Add deployment dashboards
You can add deployment dashboards by using these steps:

1. Click the `gear` icon and go to dashboard setting page as shown in the following image.

    ![dashboard setting page](/static/assets/site-administration/images/dashboard-setting.png)

2. Click the deployment dashboards tab and you can find the `Add dashboard` button at the right corner.

    ![deployment dashboard page](/static/assets/site-administration/images/deployment-dashboard-page.png)

3. Click the `Add dashboard` and it opens the dialog box.

    ![deployment dashboard dialog](/static/assets/site-administration/images/deployment-dashboard-dialog.png#width=60%)

4. You can give category, name, description, and select the dashboard, which you need to deploy to each site as shown in the following image.

    ![Fill the deployment dashboard dialog](/static/assets/site-administration/images/fill-deployment-dashboard-dialog.png#width=60%)

5. You can publish a dashboard with public accessibility by checking Make Dashboard Public option. This means that anonymous users who have access to the Dashboard link can access it.

    ![Make public the deployment dashboard dialog](/static/assets/site-administration/images/make-public-deployment-dashboard-dialog.png#width=60%)

6. By checking lock option, you can lock your dashboard and data source, which makes not editable and add the deployment dashboard.
    
    ![Lock Option in deployment dashboard dialog](/static/assets/site-administration/images/lock-deployment-dashboard.png#width=60%)

7. You can see the added deployment dashboards in the gird and success message.

    ![deployment dashboards in grid view](/static/assets/site-administration/images/deployment-dashboards-grid-view.png)

    ![deployment dashboard success message](/static/assets/site-administration/images/deployment-dashboard-success-message.png)

> **NOTE:** You are not allowed to add a dashboard more than once in the deployment dashboards.

## Remove the deployment dashboards

You can remove the deployment dashboards by clicking the remove icon and delete message.

![Remove the deployment dashboard](/static/assets/site-administration/images/remove-deployment-dashboard.png)

![Removed deployment dashboard message](/static/assets/site-administration/images/remove-deployment-dashboard-message.png)

## Deployment dashboards in other sites

When you are creating a new site, the deployment dashboards will get added to that site.

You can see the deployment dashboards in other sites as shown in the following image.

![Deployment dashboards in other sites](/static/assets/site-administration/images/deployment-dashboard-other-sites.png#width=60%)

