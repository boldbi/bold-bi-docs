---
layout: post
title: Publish Dashboards across Multiple Tenants | Bold BI
description: Learn how to publish dashboards across multiple tenants in Bold BI deployed in your server either in same machine or in different instance.
platform: bold-bi
documentation: ug
---

# Publish Dashboards in the Bold BI application

To publish a dashboard to other site(s), follow these steps:

1. Click `Actions` in the dashboard grid context menu and select `Publish` to publish the corresponding dashboard.

   ![Publish Menu](/static/assets/managing-resources/manage-dashboards/images/publish-menu.png)
	
2. For the master site, the dialog will be shown with the options of `Internal Site` and `External Site`. 
   Select either `Internal Site` or `External Site` for publishing the dashboard in the publish dialog and proceed to `Next`.

   ![Select Site](/static/assets/managing-resources/manage-dashboards/images/select-site.png#width=55%)

   For non-master sites, the [external site publish](/managing-resources/manage-dashboards/publish-dashboards/#external-site) dialog will be shown directly. Also, publish the dashboard to the internal sites using the external site publish option for the non-master sites.

   > **NOTE:** The master site is the first site created during startup in Bold BI, and all other sites are considered non-master sites.

## Internal site

Publish the dashboard to the sites created on the same Bold BI server.

1. Choose the sites from the drop-down menu where you want to publish the dashboard.

   ![Select Sites](/static/assets/managing-resources/manage-dashboards/images/select-sites.png#width=55%)

2. Specify the category name in which you want the dashboard to be published on other sites.

   ![Publish Category](/static/assets/managing-resources/manage-dashboards/images/publish-category.png#width=55%)

3. Select the checkbox `Use source dashboard and data source name` if you want to publish the dashboard and data source with the source dashboard and data source name on the destination sites.

   ![Publish dashboard with same name](/static/assets/managing-resources/manage-dashboards/images/publish-dashboard-with-source-name.png#width=55%)

4. If necessary, provide a description for the dashboard.

   ![Publish Dashboard Description](/static/assets/managing-resources/manage-dashboards/images/publish-description.png#width=55%)

5. Select the check box `Lock dashboard editing in published site` if you do not want the published dashboard to be edited on published sites.

   ![Lockdown Dashboard](/static/assets/managing-resources/manage-dashboards/images/lockdown-dashboard.png#width=55%)

6. Select the check box `Lock data source editing in published site` if you do not want the published data source to be edited on published sites.

   ![Lockdown Datasource](/static/assets/managing-resources/manage-dashboards/images/lockdown-datasource.png#width=55%)

7. Select the check box `Make dashboard as public in published site` if you want the published dashboard to be public on published sites.

   ![Make Public Dashboard](/static/assets/managing-resources/manage-dashboards/images/make-public-in-destination-site.png#width=55%)

8. You can choose the owner (who has permission to create dashboard, data source, and category) of the dashboard on the published site using the `Advanced` option. If you do not, it will publish the dashboard with a random user (who has permission to create dashboard, data source, and category).

   ![Select Owner in Advanced](/static/assets/managing-resources/manage-dashboards/images/advanced-owner.png#width=55%)

9. You can individually configure the fields in the `Advanced` window.

   ![Advanced Fields](/static/assets/managing-resources/manage-dashboards/images/advanced-field.png#width=55%)

10. By submitting the form, the publishing process will be started, and you can check the status of the publishing on the **Published Resources** page.

    ![Submit Publish](/static/assets/managing-resources/manage-dashboards/images/submit-publish.png#width=55%)

## External site

Publish the dashboard to the sites created in other Bold BI servers and to the internal sites created in the same Bold BI server for the non-master sites using the external site publish option.

1. Click on `+` to **add external site**.

   ![Add External Site](/static/assets/managing-resources/manage-dashboards/images/add-external-site.png#width=55%)
 
2. Fill in the following details as shown in the image below:

   * **Name** - Enter the name that you want for external site.
   * **Client ID** - Enter the Client Id of the site. 
   * **Client Secret** - Enter the Client Secret of the site.
   * **Site URL** - Enter the URL of the site.

   You can add both internal and external site client IDs and client secrets here.

  ![External Dialog](/static/assets/managing-resources/manage-dashboards/images/external-site-dialog.png#width=55%)

  For the Bold BI Enterprise server, obtain the site's Client ID and Client Secret values from the [site details page](/multi-tenancy/manage-sites/#general). 
  
  ![General Details](/static/assets/managing-resources/manage-dashboards/images/general-details.png)

3. After adding the external site, select the external site from the drop-down menu and follow the same steps mentioned for the internal site to publish the dashboard.
  
> **NOTE:**  The dashboards or the data sources cannot be locked while publishing to the external sites. So, the `Lock dashboard editing in published site` and `Lock data source editing in published site` check box options will not be shown for `External Site`.

## Manage published dashboards

You can view the status of published dashboards on the **Published Resources** page. The published resources are listed in the grid and grouped by the dashboard by default.

![Publish Side Menu](/static/assets/managing-resources/manage-dashboards/images/publish-side-menu.png#width=55%)

![Publish Page](/static/assets/managing-resources/manage-dashboards/images/publish-page.png)

### Synchronize dashboard

When you make changes to the original dashboard, you can synchronize those changes to the published site using the synchronize published resource option.

![Publish Synchronize](/static/assets/managing-resources/manage-dashboards/images/publish-synchronize.png)

### Information of published dashboard

You can view the publishing information of the respective dashboard in a dialog box. Click on `Actions` in the grid context menu and select `Info`.

![Publish Info Action](/static/assets/managing-resources/manage-dashboards/images/publish-info-action.png)

![Publish Info Dialog](/static/assets/managing-resources/manage-dashboards/images/publish-info-dialog.png#width=55%)

### Publish history

You can view the publishing history of the corresponding dashboard. Click on `Actions` in the grid context menu and select `Publish History`.

![Publish History Action](/static/assets/managing-resources/manage-dashboards/images/publish-history.png)

![Publish History Dialog](/static/assets/managing-resources/manage-dashboards/images/publish-history-dialog.png)

### Remove publish dashboard

Published dashboards can also be removed from Bold BI when they are no longer needed. 

Click on `Actions` in the grid context menu and select `Remove` to remove the published dashboard from the list.

![Remove Publish Action](/static/assets/managing-resources/manage-dashboards/images/publish-remove-action.png)