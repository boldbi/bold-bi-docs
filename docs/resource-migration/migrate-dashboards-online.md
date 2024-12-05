---
layout: post
title: Migrate Dashboards Online across Multiple Tenants | Bold BI
description: Learn how to migrate dashboards online across multiple tenants in Bold BI, deployed on your server, either on the same machine or on a different instance.
platform: bold-bi
documentation: ug
---

Migrating a dashboard online involves the process of publishing a dashboard in the Bold BI application to multiple tenants, whether on the same server or different instances. This allows for easy sharing of dashboards across various sites.

# Publish Dashboards Online in the Bold BI application

To publish a dashboard to other site(s), follow these steps:

1. Click on `Actions` in the dashboard grid context menu and choose `Publish` to publish the selected dashboard.

   ![Publish Menu](/static/assets/resource-migration/migrate-dashboards-online/images/publish-menu.png)
	
2. For the master site, the dialog will be shown as follows with the options for `Internal Site` and `External Site`. Please select either `Internal Site` or `External Site` for publishing the dashboard in the publish dialog, and proceed to the `Next` step.

   ![Select Site](/static/assets/resource-migration/migrate-dashboards-online/images/select-site.png#width=55%)

   For non-master sites, the [external site publish](/resource-migration/migrate-dashboards-online/#external-site) dialog will be shown directly. Additionally, publish the dashboard to the internal sites using the external site publish option for the non-master sites.

   > **NOTE:** The master site is the first site created during startup in Bold BI, and later you can set any other sites as the master site.

## Internal site

Publish the dashboard to the sites created in the same Bold BI server.

1. Choose the sites in the drop-down menu where you want to publish the dashboard.

   ![Select Sites](/static/assets/resource-migration/migrate-dashboards-online/images/select-sites.png#width=55%)

2. Specify the category name where you want the dashboard to be published on other sites.

   ![Publish Category](/static/assets/resource-migration/migrate-dashboards-online/images/publish-category.png#width=55%)

3. Select the checkbox `Use source category name.` if you want to publish the dashboard with the source category name on the destination sites.

   ![Publish Use Source Category](/static/assets/resource-migration/migrate-dashboards-online/images/use-source-category.png#width=55%)

4. Select the checkbox `Use source dashboard and data source name` if you want to publish the dashboard and data source with the source dashboard and data source name in the destination sites.

   ![Publish dashboard with same name](/static/assets/resource-migration/migrate-dashboards-online/images/publish-dashboard-with-source-name.png#width=55%)

5. Provide a description for the dashboard if necessary.

   ![Publish Dashboard Description](/static/assets/resource-migration/migrate-dashboards-online/images/publish-description.png#width=55%)

6. Select the checkbox `Lock dashboard editing in published site` if you do not want the published dashboard to be edited in the published sites.

   ![Lockdown Dashboard](/static/assets/resource-migration/migrate-dashboards-online/images/lockdown-dashboard.png#width=55%)

7. Select the checkbox `Lock data source editing in published site` if you do not want the published data source to be edited in the published sites.

   ![Lockdown Datasource](/static/assets/resource-migration/migrate-dashboards-online/images/lockdown-datasource.png#width=55%)

8. Select the checkbox `Make dashboard as public in published site` if you want the published dashboard to be public in the published sites.

   ![Make Public Dashboard](/static/assets/resource-migration/migrate-dashboards-online/images/make-public-in-destination-site.png#width=55%)

9. You can choose the owner (who has permission to create a dashboard, data source, and category) of the dashboard in the published site using the `Advanced` option. If you do not, it will publish the dashboard with a random user (who has permission to create the dashboard, data source, and category).

   ![Select Owner in Advanced](/static/assets/resource-migration/migrate-dashboards-online/images/advanced-owner.png#width=55%)

10. You can individually configure the fields in the `Advanced` window.

   ![Advanced Fields](/static/assets/resource-migration/migrate-dashboards-online/images/advanced-field.png#width=55%)

11. To publish the dashboard in the same category from the source site to the destination site, check the `Use souce category name` box and select a category from the dropdown menu using the `Advanced` option.

![Use Source Category](/static/assets/resource-migration/migrate-dashboards-online/images/use-source-category-enabled.png#width=55%)

12. If you want to publish in a different category, uncheck the box and enter the category name in the text field to which need to be published.

   ![Use Source Category disabled](/static/assets/resource-migration/migrate-dashboards-online/images/use-source-category-disabled.png#width=55%)


13. By submitting the form, the publishing process will be started and you can check the status of the publishing in the **Published Resources** page.

    ![Submit Publish](/static/assets/resource-migration/migrate-dashboards-online/images/submit-publish.png#width=55%)

## External site

Publish the dashboard to the sites created in other Bold BI servers and to the internal sites created in the same Bold BI server for the non-master sites using the external site publish option.

1. Click on `+` to **add external site**.

   ![Add External Site](/static/assets/resource-migration/migrate-dashboards-online/images/add-external-site.png#width=55%)
 
2. Fill in the following details as shown in the following image:

   * **Name** - Enter the name that you want for external site.
   * **Client ID** - Enter the Client Id of the site. 
   * **Client Secret** - Enter the Client Secret of the site.
   * **Site URL** - Enter the URL of the site.

   You can add both internal and external site's client ID and client secret here.

  ![External Dialog](/static/assets/resource-migration/migrate-dashboards-online/images/external-site-dialog.png#width=55%)

  For the Bold BI Enterprise server, get the site's Client Id and Client Secret values from the [site details page](/multi-tenancy/manage-sites/#general). 
  
  ![General Details](/static/assets/resource-migration/migrate-dashboards-online/images/general-details.png)

3. After the external site is added, choose the external site in the drop-down and follow the same steps mentioned for publishing the dashboard in the internal site.
  
> **NOTE:**  The dashboards or the data sources cannot be locked while publishing to the external sites. Therefore, the options to `Lock dashboard editing in the published site` and `Lock data source editing in the published site` check box will not be shown for External Site.

## Manage published dashboards

You can view the status of the published dashboards on the **Published Resources** page. The published resources are listed in the grid and grouped by the dashboard by default.

![Publish Side Menu](/static/assets/resource-migration/migrate-dashboards-online/images/publish-side-menu.png#width=55%)

![Publish Page](/static/assets/resource-migration/migrate-dashboards-online/images/publish-page.png)

### Synchronize dashboard

When you make changes to the original dashboard, you can move the changes to the published site using the synchronize published resource option.

![Publish Synchronize](/static/assets/resource-migration/migrate-dashboards-online/images/publish-synchronize.png)

### Information of published dashboard

You can see the publishing information of the respective dashboard in the dialog box. Click `Actions` in the grid context menu and select `Info`.

![Publish Info Action](/static/assets/resource-migration/migrate-dashboards-online/images/publish-info-action.png)

![Publish Info Dialog](/static/assets/resource-migration/migrate-dashboards-online/images/publish-info-dialog.png#width=55%)

### Publish history

You can view the publish history of the corresponding dashboard. Click `Actions` in the grid context menu and select `Publish History`.

![Publish History Action](/static/assets/resource-migration/migrate-dashboards-online/images/publish-history.png)

![Publish History Dialog](/static/assets/resource-migration/migrate-dashboards-online/images/publish-history-dialog.png)

### Remove publish dashboard

Published dashboards can also be removed from Bold BI when they are no longer required.

Click `Actions` in the grid context menu and select `Remove` to remove the published dashboard from the list.

![Remove Publish Action](/static/assets/resource-migration/migrate-dashboards-online/images/publish-remove-action.png)

### Lock and unlock publish dashboard

The edit option for published dashboards can be locked or unlocked. Unlock previously locked published dashboards and lock them again.

Click `Actions` in the grid context menu and select `Lock Edit` to lock the edit support for the published dashboard. 

![Lock Edit Action](/static/assets/resource-migration/migrate-dashboards-online/images/publish-lockedit.png)

Click `Actions` in the grid context menu and select `Unlock Edit` to unlock the edit support for the published dashboard.

![Unlock Edit Action](/static/assets/resource-migration/migrate-dashboards-online/images/publish-unlockedit.png)

### Disable Synchronization of publish dashboard

The synchronization of published dashboards from the source site can be disabled by enabling the `Lock Resource Synchronization` in the dashboard settings on the target site. 

Learn how to disable synchronization for the published dashboard in [Lock Resource Synchronization](/site-administration/dashboard-settings/lock-resource-synchronization/).

Once these settings are enabled on the target site, synchronization of the published dashboard from the source site will fail and show the failed status in the grid.

![Failed-status-grid](/static/assets/resource-migration/migrate-dashboards-online/images/grid-failed-status.png)

The failure reason will be displayed as `Resource synchronization is locked on the target site` when clicking on the `Failed` status in the publish history dialog.

![Failure-info](/static/assets/resource-migration/migrate-dashboards-online/images/failure-info-history.png)