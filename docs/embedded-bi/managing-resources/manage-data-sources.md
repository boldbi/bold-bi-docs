---
layout: post
title: Manage Data sources – Embedded BI | Bold BI Documentation
description: Learn how to manage version history, refresh data, share, copy and delete data sources in Bold BI Embedded.
canonical: "/cloud-bi/managing-resources/manage-data-sources/"
platform: bold-bi
documentation: ug
---

# Manage Data Source Connections

This section explains on how to share data sources and manage the version history of data sources and delete them in the Bold BI. 

Data Sources that are accessible by the user depending on the user’s permission is displayed in the data sources page.

![Manage Data Sources](/static/assets/embedded/managing-resources/images/manage-data-sources.png)

There are two connection type available in Data source

* Live mode
* Extract mode

## Live mode connection

In this connection type data source directly fetched from source, examples like MySQL, Oracle, etc.

![Live Connection](/static/assets/embedded/managing-resources/images/live-connection-datasource.png#width=55%)

## Extract mode connection 

In this connection type data source fetched from source periodically, examples like CSV, JSON, etc.

User can see the data source refresh status and occupied data rows count in this page.

![Extract Connection](/static/assets/embedded/managing-resources/images/extract-connection-datasource.png#width=55%)

Check [connectivity section](/embedded-bi/working-with-data-source/data-connectors/) for more details.

## Refresh Setting

This section explains on how to configure the data source refresh setting.

### Steps to configure a data source refresh setting

1. Click the `Actions` button in the Data sources grid context menu and select `Refresh Setting` option.

    ![Refresh Setting](/static/assets/embedded/managing-resources/images/refresh-setting-context-datasource.png#width=55%)

2. Select the recurrence type, recurrence, start and end dates in the `Refresh Setting` dialog box.
	* Data refresh can be scheduled hourly, daily, weekly and monthly.
	* The minimum data refresh interval time will be 5 minutes.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to client Time Zone and shown in the right side for the user’s convenience, after selecting click on the `Schedule` button.
	* Data refresh failure notification can be sent to the owner of the data source with the error message and a link to the data source refresh history by enabling the send failure notification to owner option.
	* Bold BI application deactivates the data refresh, after limited consecutive failures and send the disable notification to the owner by mail.

	![Save Schedule](/static/assets/embedded/managing-resources/images/refresh-setting-schedule-datasource.png)

> **NOTE:**  Only the data source created with extract mode will have this refresh setting option.

## Refresh Data
Data refresh can be made to run on demand by using the `Refresh Data` option in the data source grid context menu. 

![Refresh data](/static/assets/embedded/managing-resources/images/refresh-data.png#width=55%)

## Refresh History
You can see the data refresh history information of corresponding data source in the `Refresh History` option in the data source grid context menu.

![Refresh History](/static/assets/embedded/managing-resources/images/refresh-history.png#width=60%)
![Refresh History Info](/static/assets/embedded/managing-resources/images/refresh-history-info.png)

And, also you can see the failure information by clicking the failed link in run history dialog box.

![Refresh Failure Info](/static/assets/embedded/managing-resources/images/refresh-failure-info.png#width=55%)

> **NOTE:**  Only the data source created with extract mode will have this refresh history option.

## View Linked Dashboards
You can view the dashboard(s) created with the corresponding data source using the `View Linked Dashboards` option in the data source grid context menu.

![View Linked Dashboards Option](/static/assets/embedded/managing-resources/images/view-linked-dashboards-option.png#width=55%)

![View Linked Dashboards Listing](/static/assets/embedded/managing-resources/images/view-linked-dashboards-listing.png)

## Share Data sources

This section explains on how to share data sources with the other users in the Bold BI.

### Steps to share a data source

1. Click the `Actions` button in the Data sources grid context menu and select `Sharing Permissions` option.

	![Manage Permission](/static/assets/embedded/managing-resources/images/manage-permission-context-datasource.png#width=55%)

2. Select the permission access from the `Select Access` dropdown and type in user or a group name whom you want to share the data source with.
  
	![Share Data source](/static/assets/embedded/managing-resources/images/share-datasource.png#width=55%)

3. After selecting the permission access and users or groups, click on the `Share` button.

	![Add Data source Permission](/static/assets/embedded/managing-resources/images/add-datasource-permission.png#width=55%)
	
> **NOTE:**  Only the user who created the data source and the Administrator can share the data source with other Bold BI users.

### Remove Permission

The user who created the data source and the Administrator can remove the shared data source permissions.

1. Click the `Manage Access` button to see the users or groups and their permissions.
    
	![Manage Access Data source](/static/assets/embedded/managing-resources/images/manage-access-datasource.png#width=55%)

2. Then remove the permissions using the `Remove` option in the `Actions` column of the each permissions.

	![Remove Data source Permission](/static/assets/embedded/managing-resources/images/remove-datasource-permission.png#width=55%)

## Version History

Versions and file logs for each data source are maintained in the Bold BI for every changes in the data source. Check [Version History](/embedded-bi/managing-resources/manage-dashboards/version-history-of-dashboards/) section for more details.

## Delete Data Sources
Data Sources can also be deleted from the Bold BI when they are no longer required.

Click the `Actions` button in the data sources grid context menu and select `Delete` to delete the data source.

![Delete Data Source](/static/assets/embedded/managing-resources/images/delete-data-source.png#width=55%)

## Preview Data Sources

You can preview the data of your data sources.

Click `Actions` in the data sources grid context menu and select `Preview Data` to preview the data source.

![preview Data Source](/static/assets/embedded/managing-resources/images/preview-data-source.png#width=55%)

## Information of Data Source

You can see the information of respective Data Source in dialog box. Click `Actions` in the grid context menu and select `Info`.

![Data Sources Info](/static/assets/embedded/managing-resources/images/datasources-info.png#width=55%)

![Data Sources Info Popup](/static/assets/embedded/managing-resources/images/datasources-info-popup.png#width=55%)

## Copy Data Sources  
You can copy the data source item only for the data source type in **Live** mode connection.

Click the `Actions` button in the data sources grid context menu and select `Copy Data Source` to copy the data source.  

![Copy Data Source](/static/assets/embedded/managing-resources/images/copy-data-source.png#width=55%)  

> **NOTE:**  The copy option shown only for Live mode connection like SQL and won't shown for Extract mode connection like files, web API, etc.

## Draft Data Sources
The **Data Source** will be automatically saved as draft when the user did not published the created data source.

You can view the unpublished draft data sources in the data source listing page tagged with `draft` label.

![Draft Data Source](/static/assets/embedded/managing-resources/images/draft-data-source.png#width=55%)

## Publish Data Sources
To publish a data source to other site(s), follow these steps:

1. Click `Actions` in the data source grid context menu and select `Publish` to publish the corresponding data source.

   ![Publish Menu](/static/assets/embedded/managing-resources/images/publish-datasource.png#width=55%)
	
2. Select `Internal Site` or `External Site` for publishing data source in publish dialog box and proceed to Next.

   ![Select Site](/static/assets/embedded/managing-resources/images/select-site.png#width=55%)

### Internal site

You can publish the data source to the sites created in the same Bold BI server.

1. Choose the sites in the drop-down that you want to publish the data source.

   ![Select Sites](/static/assets/embedded/managing-resources/images/select-sites.png#width=55%)

2. Select the check box `Use original data source and linked data source name`, if you want to publish data source and linked data source with source data source name in destination sites.

   ![Publish Data Source with same name](/static/assets/embedded/managing-resources/images/publish-datasource-with-source-name.png#width=55%)

3. If necessary, provide a description for the data source.

   ![Publish Data Source Description](/static/assets/embedded/managing-resources/images/publish-datasource-description.png#width=55%)

4. Select the check box `Lock data source editing in the published site`, if you do not want the published data source to be edited in the published sites.

   ![Lockdown Data Source](/static/assets/embedded/managing-resources/images/lockdown-datasource.png#width=55%)

5. Select the check box `Lock linked data source editing in the published site`, if you do not want the published linked data source to be edited in the published sites.

   ![Lockdown Linked Data Source](/static/assets/embedded/managing-resources/images/lockdown-linked-datasource.png#width=55%)

6. You can choose the owner (who has permission to create the data source) of the data source in the published site using the `Advanced` option. If you do not, it will publish the data source with a random user (who has permission to create the data source).

   ![Select Owner in Advanced](/static/assets/embedded/managing-resources/images/advanced-owner.png#width=55%)

7. You can individually configure the fields for a specific site and a specific owner in the `Advanced` window.

   ![Advanced Fields](/static/assets/embedded/managing-resources/images/advanced-field.png#width=55%)

8. By submitting the form, the publishing process will be started and you can check the status of the publishing in the **Published Resources** page.

    ![Submit Publish](/static/assets/embedded/managing-resources/images/submit-publish.png#width=55%)

### External site

You can publish the data source to the sites created in other Bold BI servers.

1. Click `+` button to **add external site**.

   ![Add External Site](/static/assets/embedded/managing-resources/images/add-external-site.png#width=55%)
 
2. Fill in the following details as shown in the following image.

  * **Name** - Enter the name that you want for external site.
  * **Client ID** - Enter the Client Id of the site. 
  * **Client Secret** - Enter the Client Secret of the site.
  * **Site URL** - Enter the URL of the site.

  ![External Dialog](/static/assets/embedded/managing-resources/images/external-site-dialog.png#width=55%)

  For the Bold BI Enterprise server, you can get the site's Client Id and Client Secret values from the site details page. 

  ![General Details](/static/assets/embedded/managing-resources/manage-dashboards/images/general-details.png)

3. After the external site was added, choose the external site in the drop-down and you can follow the same steps mentioned in the internal site for publishing the data source.
  
> **NOTE:** The data sources cannot be locked while publishing to the external sites. So, the `Lock data source editing in the published site` and `Lock linked data source editing in the published site` check box options will not be shown for `External Site`.

### Manage published data sources

You can view the status of the published data sources on the **Published Resources** page. The published resources are listed in the grid and grouped by the data source by default.

![Publish Page](/static/assets/embedded/managing-resources/images/publish-page.png)

#### Synchronize data source

When you make some changes in an original data source, you can move those changes to the published site using the synchronize published resource option.

![Publish Synchronize](/static/assets/embedded/managing-resources/images/publish-synchronize.png)

#### Information of published data source

You can see the publishing information of respective data source in the dialog box. Click `Actions` in the grid context menu and select `Info`.

![Publish Info Action](/static/assets/embedded/managing-resources/images/publish-info-action.png)

![Publish Info Dialog](/static/assets/embedded/managing-resources/images/publish-info-dialog.png#width=55%)

#### Publish history

You can see the published history of corresponding data source. Click `Actions` in the grid context menu and select `Publish History`.

![Publish History Action](/static/assets/embedded/managing-resources/images/publish-history.png)

![Publish History Dialog](/static/assets/embedded/managing-resources/images/publish-history-dialog.png#width=75%)

#### Remove publish data source

Published data sources can also be removed from the Bold BI when they are no longer required.

Click `Actions` in the grid context menu and select `Remove` to remove the published data sources from the list.

![Remove Publish Action](/static/assets/embedded/managing-resources/images/publish-remove-action.png)

> **NOTE:** Removing the published data source does not remove the data source from the published site.