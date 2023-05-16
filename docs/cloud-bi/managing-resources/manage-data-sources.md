---
layout: post
title: Manage Data sources – Cloud BI | Bold BI Documentation
description: Learn how to manage version history, refresh data, share, copy and delete data sources in Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Manage Data Source Connections

This section explains on how to share data sources and manage the version history of data sources and delete them in the Bold BI. 

Data Sources that are accessible by the user depending on the user’s permission is displayed in the data sources page.

![Manage Data Sources](/static/assets/cloud/managing-resources/images/manage-data-sources.png)

There are two connection type available in Data source

* Live mode
* Extract mode

## Live mode connection

In this connection type data source directly fetched from source, examples like MySQL, Oracle, etc.

![Live Connection](/static/assets/cloud/managing-resources/images/live-connection-datasource.png#width=55%)

## Extract mode connection 

In this connection type data source fetched from source periodically, examples like CSV, JSON, etc.

User can see the data source refresh status and occupied data rows count in this page.

![Extract Connection](/static/assets/cloud/managing-resources/images/extract-connection-datasource.png#width=55%)

Check [connectivity section](/cloud-bi/working-with-data-source/data-connectors/) for more details.

## Refresh Setting

This section explains on how to configure the data source refresh setting.

### Steps to configure a data source refresh setting

1. Click the `Actions` button in the Data sources grid context menu and select `Refresh Setting` option.

    ![Refresh Setting](/static/assets/cloud/managing-resources/images/refresh-setting-context-datasource.png#width=55%)

2. Select the recurrence type, recurrence, start and end dates in the `Refresh Setting` dialog box.
	* Data refresh can be scheduled hourly, daily, weekly and monthly.
	* The minimum data refresh interval time will be 15 minutes.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to client Time Zone and shown in the right side for the user’s convenience, after selecting click on the `Schedule` button.
	* Data refresh failure notification can be sent to the owner of the data source with the error message and a link to the data source refresh history by enabling the send failure notification to owner option.
	* Bold BI application deactivates the data refresh, after limited consecutive failures and send the disable notification to the owner by mail.

	![Save Schedule](/static/assets/cloud/managing-resources/images/refresh-setting-schedule-datasource.png)

> **NOTE:**  Only the data source created with extract mode will have this refresh setting option.

## Refresh Data
Data refresh can be made to run on demand by using the `Refresh Data` option in the data source grid context menu. 

![Refresh data](/static/assets/cloud/managing-resources/images/refresh-data.png#width=55%)

## Refresh History
You can see the data refresh history information of corresponding data source in the `Refresh History` option in the data source grid context menu.

![Refresh History](/static/assets/cloud/managing-resources/images/refresh-history.png#width=60%)
![Refresh History Info](/static/assets/cloud/managing-resources/images/refresh-history-info.png)

And, also you can see the failure information by clicking the failed link in run history dialog box.

![Refresh Failure Info](/static/assets/cloud/managing-resources/images/refresh-failure-info.png#width=55%)

> **NOTE:**  Only the data source created with extract mode will have this refresh history option.

## Share Data sources

This section explains on how to share data sources with the other users in the Bold BI.

### Steps to share a data source

1. Click the `Actions` button in the Data sources grid context menu and select `Sharing Permissions` option.

	![Manage Permission](/static/assets/cloud/managing-resources/images/manage-permission-context-datasource.png#width=55%)

2. Select the permission access from the `Select Access` dropdown and type in user or a group name whom you want to share the data source with.
  
	![Share Data source](/static/assets/cloud/managing-resources/images/share-datasource.png#width=55%)

3. After selecting the permission access and users or groups, click on the `Share` button.

	![Add Data source Permission](/static/assets/cloud/managing-resources/images/add-datasource-permission.png#width=55%)
	
> **NOTE:**  Only the user who created the data source and the Administrator can share the data source with other Bold BI users.

### Remove Permission

The user who created the data source and the Administrator can remove the shared data source permissions.

1. Click the `Manage Access` button to see the users or groups and their permissions.
    
	![Manage Access Data source](/static/assets/cloud/managing-resources/images/manage-access-datasource.png#width=55%)

2. Then remove the permissions using the `Remove` option in the `Actions` column of the each permissions.

	![Remove Data source Permission](/static/assets/cloud/managing-resources/images/remove-datasource-permission.png#width=55%)

## Version History

Versions and file logs for each data source are maintained in the Bold BI for every changes in the data source. Check [Version History](/cloud-bi/managing-resources/manage-dashboards/version-history-of-dashboards/) section for more details.

## Delete Data Sources
Data Sources can also be deleted from the Bold BI when they are no longer required.

Click the `Actions` button in the data sources grid context menu and select `Delete` to delete the data source.

![Delete Data Source](/static/assets/cloud/managing-resources/images/delete-data-source.png#width=55%)

## Preview Data Sources

You can preview the data of your data sources.

Click `Actions` in the data sources grid context menu and select `Preview Data` to preview the data source.

![preview Data Source](/static/assets/cloud/managing-resources/images/preview-data-source.png#width=55%)

## Copy Data Sources  
You can copy the data source item only for the data source type in **Live** mode connection.

Click the `Actions` button in the data sources grid context menu and select `Copy Data Source` to copy the data source.  

![Copy Data Source](/static/assets/cloud/managing-resources/images/copy-data-source.png#width=55%)  

> **NOTE:**  The copy option shown only for Live mode connection like SQL and won't shown for Extract mode connection like files, web API, etc.
