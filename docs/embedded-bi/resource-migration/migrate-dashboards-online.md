---
layout: post
title: Migrate Dashboards Online across Multiple Tenants | Bold BI
description: Learn how to migrate dashboards online across multiple tenants in Bold BI, deployed on your server, either on the same machine or on a different instance.
platform: bold-bi
documentation: ug
---

Migrating a dashboard online refers to the process of publishing a dashboard in the Bold BI application to multiple tenants, either on the same server or on different instances. By doing so, you can easily share dashboards across multiple sites.

# Publish Dashboards Online in the Bold BI application

To publish a dashboard to other site(s), follow these steps:

1. Click `Actions` in the dashboard grid context menu and select `Publish` to publish the corresponding dashboard.

   ![Publish Menu](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-menu.png)
	
2. For the master site, the dialog will be shown as follows with the `Internal Site` and `External Site` options.
   Select the `Internal Site` or `External Site` for publishing dashboard in publish dialog and proceed to `Next`.

   ![Select Site](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/select-site.png#width=55%)

   For non-master sites, [external site publish](/embedded-bi/resource-migration/migrate-dashboards-online/#external-site) dialog will be shown directly. Also, publish the dashboard to the internal sites using the external site publish option for the non-master sites.

   > **NOTE:** Master site is the first created site during startup in Bold BI, and all other sites are considered non-master sites.

## Internal site

Publish the dashboard to the sites created in the same Bold BI server.

1. Choose the sites in the drop-down that you want to publish the dashboard.

   ![Select Sites](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/select-sites.png#width=55%)

2. Specify the category name that you want, the dashboard to be published on other sites.

   ![Publish Category](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-category.png#width=55%)

3. Select the check box `Use source dashboard and data source name`, if you want to publish dashboard and data source with source dashboard and data source name in destination sites.

   ![Publish dashboard with same name](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-dashboard-with-source-name.png#width=55%)

4. If necessary, provide a description for the dashboard.

   ![Publish Dashboard Description](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-description.png#width=55%)

5. Select the check box `Lock dashboard editing in published site`, if you do not want the published dashboard to be edited in the published sites.

   ![Lockdown Dashboard](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/lockdown-dashboard.png#width=55%)

6. Select the check box `Lock data source editing in published site`, if you do not want the published data source to be edited in the published sites.

   ![Lockdown Datasource](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/lockdown-datasource.png#width=55%)

7. Select the check box `Make dashboard as public in published site`, if you want the published dashboard to be public in the published sites.

   ![Make Public Dashboard](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/make-public-in-destination-site.png#width=55%)

8. You can choose the owner (who has permission to create a dashboard, data source, and category) of the dashboard in the published site using the `Advanced` option. If you do not, it will publish the dashboard with a random user (who has permission to create the dashboard, data source, and category).

   ![Select Owner in Advanced](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/advanced-owner.png#width=55%)

9. You can individually configure the fields in the `Advanced` window.

   ![Advanced Fields](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/advanced-field.png#width=55%)

10. By submitting the form, the publishing process will be started and you can check the status of the publishing in the **Published Resources** page.

    ![Submit Publish](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/submit-publish.png#width=55%)

## External site

Publish the dashboard to the sites created in other Bold BI servers and to the internal sites created in the same Bold BI server for the non-master sites using the external site publish option.

1. Click on `+` to **add external site**.

   ![Add External Site](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/add-external-site.png#width=55%)
 
2. Fill in the following details as shown in the following image:

   * **Name** - Enter the name that you want for external site.
   * **Client ID** - Enter the Client Id of the site. 
   * **Client Secret** - Enter the Client Secret of the site.
   * **Site URL** - Enter the URL of the site.

   You can add both internal and external site's client ID and client secret here.

  ![External Dialog](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/external-site-dialog.png#width=55%)

  For the Bold BI Enterprise server, get the site's Client Id and Client Secret values from the [site details page](/embedded-bi/multi-tenancy/manage-sites/#general). 
  
  ![General Details](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/general-details.png)

3. After the external site is added, choose the external site in the drop-down and follow the same steps mentioned in the internal site for publishing the dashboard.
  
> **NOTE:**  The dashboards or the data sources cannot be locked while publishing to the external sites. So, the `Lock dashboard editing in published site` and `Lock data source editing in published site` check box options will not be shown for `External Site`.

## Manage published dashboards

You can view the status of the published dashboards in the **Published Resources** page. The published resources are listed in the grid and grouped by the dashboard by default.

![Publish Side Menu](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-side-menu.png#width=55%)

![Publish Page](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-page.png)

### Synchronize dashboard

When you make some changes in the original dashboard and you can move the changes to the published site using the synchronize published resource option.

![Publish Synchronize](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-synchronize.png)

### Information of published dashboard

You can see the publishing information of the respective dashboard in the dialog box. Click `Actions` in the grid context menu and select `Info`.

![Publish Info Action](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-info-action.png)

![Publish Info Dialog](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-info-dialog.png#width=55%)

### Publish history

You can see the published history of corresponding dashboard. Click `Actions` in the grid context menu and select `Publish History`.

![Publish History Action](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-history.png)

![Publish History Dialog](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-history-dialog.png)

### Remove publish dashboard

Published dashboards can also be removed from the Bold BI when they are no longer required.

Click `Actions` in the grid context menu and select `Remove` to remove the published dashboard from the list.

![Remove Publish Action](/static/assets/embedded/resource-migration/migrate-dashboards-online/images/publish-remove-action.png)