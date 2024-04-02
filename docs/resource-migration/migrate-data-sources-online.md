---
layout: post
title: Publishing Data Sources Across Multiple Tenants | Bold BI Docs
description: Learn how to publish data sources online across multiple Bold BI tenants, deployed on your servers, either on the same machine or on different instances.
platform: bold-bi
documentation: ug
---

Migrating a data source online refers to the process of publishing a data source in the Bold BI application to multiple tenants, either on the same server or on different instances. By doing so, you can easily share data sources across multiple sites.

> **Note:** This feature is available in On-Premises Deployment, but not in Syncfusion Managed Cloud Server.

# Migrate Data Sources Online
To migrate a data source online, follow these steps:

1. Click on `Actions` in the data source grid context menu and select `Publish` to publish the corresponding data source.

   ![Publish Menu](/static/assets/resource-migration/migrate-data-sources-online/images/publish-datasource.png#width=55%)
	
2. Select `Internal Site` or `External Site` for publishing the data source in the publish dialog box, and then proceed to the next step.

   ![Select Site](/static/assets/resource-migration/migrate-data-sources-online/images/select-site.png#width=55%)

## Internal site

You can publish the data source to the sites created in the same Bold BI server.

1. Choose the site from the drop-down menu where you want to publish the data source.

   ![Select Sites](/static/assets/resource-migration/migrate-data-sources-online/images/select-sites.png#width=55%)

2. Select the check box for `Use original data source and linked data source name` if you want to publish the data source and linked data source with the original name in the destination sites.

   ![Publish Data Source with same name](/static/assets/resource-migration/migrate-data-sources-online/images/publish-datasource-with-source-name.png#width=55%)

3. If necessary, provide a description for the data source.

   ![Publish Data Source Description](/static/assets/resource-migration/migrate-data-sources-online/images/publish-datasource-description.png#width=55%)

4. Select the check box for `Lock data source editing in the published site` if you do not want the published data source to be edited in the published sites.

   ![Lockdown Data Source](/static/assets/resource-migration/migrate-data-sources-online/images/lockdown-datasource.png#width=55%)

5. Select the check box for `Lock linked data source editing in the published site` if you do not want the published linked data source to be edited in the published sites.

   ![Lockdown Linked Data Source](/static/assets/resource-migration/migrate-data-sources-online/images/lockdown-linked-datasource.png#width=55%)

6. You can choose the owner (who has permission to create the data source) of the data source in the published site using the `Advanced` option. If you do not, it will publish the data source with a random user (who has permission to create the data source).

   ![Select Owner in Advanced](/static/assets/resource-migration/migrate-data-sources-online/images/advanced-owner.png#width=55%)

7. You can individually configure the fields for a specific site and a specific owner in the `Advanced` window.

   ![Advanced Fields](/static/assets/resource-migration/migrate-data-sources-online/images/advanced-field.png#width=55%)

8. By submitting the form, the publishing process will be started, and you can check the status of the publishing on the **Published Resources** page.

    ![Submit Publish](/static/assets/resource-migration/migrate-data-sources-online/images/submit-publish.png#width=55%)

## External site

You can publish the data source to sites created on other Bold BI servers.

1. Click `+` button to **add external site**.

   ![Add External Site](/static/assets/resource-migration/migrate-data-sources-online/images/add-external-site.png#width=55%)
 
2. Fill in the following details as shown in the image:

  * **Name** - Enter the name that you want for external site.
  * **Client ID** - Enter the Client Id of the site. 
  * **Client Secret** - Enter the Client Secret of the site.
  * **Site URL** - Enter the URL of the site.

  ![External Dialog](/static/assets/resource-migration/migrate-data-sources-online/images/external-site-dialog.png#width=55%)

  For the Bold BI Enterprise server, you can obtain the site's Client Id and Client Secret values from the site details page.

  ![General Details](/static/assets/resource-migration/migrate-dashboards-online/images/general-details.png)

3. After adding the external site, choose it from the drop-down menu, and follow the same steps mentioned for publishing the data source in the internal site.
  
> **NOTE:** Data sources cannot be locked when publishing to external sites, so the options to `Lock data source editing in the published` site and `Lock linked data source editing in the published site` will not be available for External Sites.

## Manage published data sources

You can view the status of the published data sources on the **Published Resources** page. The published resources are listed in the grid and grouped by the data source by default.

![Publish Page](/static/assets/resource-migration/migrate-data-sources-online/images/publish-page.png)

### Synchronize data source

When you make changes in an original data source, you can move those changes to the published site using the synchronize published resource option.

![Publish Synchronize](/static/assets/resource-migration/migrate-data-sources-online/images/publish-synchronize.png)

### Information of published data source

You can see the publishing information of the respective data source in the dialog box. Click `Actions` in the grid context menu and select `Info`.

![Publish Info Action](/static/assets/resource-migration/migrate-data-sources-online/images/publish-info-action.png)

![Publish Info Dialog](/static/assets/resource-migration/migrate-data-sources-online/images/publish-info-dialog.png#width=55%)

### Publish history

You can see the published history of the corresponding data source. Click `Actions` in the grid context menu and select `Publish History`.

![Publish History Action](/static/assets/resource-migration/migrate-data-sources-online/images/publish-history.png)

![Publish History Dialog](/static/assets/resource-migration/migrate-data-sources-online/images/publish-history-dialog.png#width=75%)

### Remove publish data source

Published data sources can also be removed from Bold BI when they are no longer required.

Click `Actions` in the grid context menu and select `Remove` to remove the published data sources from the list.

![Remove Publish Action](/static/assets/resource-migration/migrate-data-sources-online/images/publish-remove-action.png)

> **NOTE:** Removing the published data source does not remove the data source from the published site.

### Lock and unlock data source

The edit option in the published data sources can be locked or unlocked. Unlock previously locked published data sources and lock them again.

Click `Actions` in the grid context menu and select `Lock Edit` to lock the edit support for the published data sources.

![Lock Edit Action](/static/assets/resource-migration/migrate-data-sources-online/images/publish-datasource-lockedit.png)

Click `Actions` in the grid context menu and select `Unlock Edit` to unlock the edit support for the published data sources.

![Unlock Edit Action](/static/assets/resource-migration/migrate-data-sources-online/images/publish-datasource-unlockedit.png)

### Disable Synchronization of publish data source

The synchronization of published data sources from the source site can be disabled by enabling `Lock Resource Synchronization` in the dashboard settings in the target site.

Learn how to disable synchronization for the published data sources [here](/site-administration/dashboard-settings/lock-resource-synchronization/).

Once these settings are enabled in the target site, synchronization of the published data sources from the source site will fail. Show the failed status in the grid.

![Failed-status-grid](/static/assets/resource-migration/migrate-data-sources-online/images/datasource-failed-status.png)

The failure reason will be displayed as `Resource synchronization is locked in the target site` when clicking on the `Failed` status from the publish history dialog.

![Failure-info](/static/assets/resource-migration/migrate-data-sources-online/images/failure-info-history.png)