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

<!---
## Add Data Sources
Data source can be created only if the user has `Create All Data Sources` permission.

### Steps to add a data source

1. Click on the `Create` button in the menu and select `Data Source` to add a data source.

	![Create Data Source](/static/assets/embedded/managing-resources/images/create-data-source.png)
	
2. Fill in the form with name and description of the data source and upload the data source file(`.syds`).
	
	![Add Data Source](/static/assets/embedded/managing-resources/images/add-data-source.png)

3. When clicking on `Add`, the data source will be added to the Bold BI.

> **NOTE:**  `Read Write Delete Download` permission for that `Specific Data Source` will be added for the user who created the data source.
	
## Update Data Sources
Name, description and the data source file(`.syds`) can be changed in the update data source dialog box.

![Update Data Source](/static/assets/embedded/managing-resources/images/update-data-source.png)

--->

There are two connection type available in Data source

* Live mode
* Extract mode

## Live mode connection

In this connection type data source directly fetched from source, examples like MySQL, Oracle, etc.

![Live Connection](/static/assets/embedded/managing-resources/images/live-connection-datasource.png)

## Extract mode connection 

In this connection type data source fetched from source periodically, examples like CSV, JSON, etc.

User can see the data source refresh status and occupied data rows count in this page.

![Extract Connection](/static/assets/embedded/managing-resources/images/extract-connection-datasource.png)

Check [connectivity section](/embedded-bi/working-with-data-source/data-connectors/) for more details.

## Refresh Setting

This section explains on how to configure the data source refresh setting.

### Steps to configure a data source refresh setting

1. Click the `Actions` button in the Data sources grid context menu and select `Refresh Setting` option.

    ![Refresh Setting](/static/assets/embedded/managing-resources/images/refresh-setting-context-datasource.png)

2. Select the recurrence type, recurrence, start and end dates in the `Refresh Setting` dialog box.
	* Data refresh can be scheduled hourly, daily, weekly and monthly.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to client Time Zone and shown in the right side for the user’s convenience, after selecting click on the `Schedule` button.

	![Save Schedule](/static/assets/embedded/managing-resources/images/refresh-setting-schedule-datasource.png)

> **NOTE:**  Only the data source created with extract mode will have this refresh setting option.

## Share Data sources

This section explains on how to share data sources with the other users in the Bold BI.

### Steps to share a data source

1. Click the `Actions` button in the Data sources grid context menu and select `Sharing Permissions` option.

	![Manage Permission](/static/assets/embedded/managing-resources/images/manage-permission-context-datasource.png)

2. Select the permission access from the `Select Access` dropdown and type in user or a group name whom you want to share the data source with.
  
	![Share Data source](/static/assets/embedded/managing-resources/images/share-datasource.png)

3. After selecting the permission access and users or groups, click on the `Share` button.

	![Add Data source Permission](/static/assets/embedded/managing-resources/images/add-datasource-permission.png)
	
> **NOTE:**  Only the user who created the data source and the Administrator can share the data source with other Bold BI users.

### Remove Permission

The user who created the data source and the Administrator can remove the shared data source permissions.

1. Click the `Manage Access` button to see the users or groups and their permissions.
    
	![Manage Access Data source](/static/assets/embedded/managing-resources/images/manage-access-datasource.png)

2. Then remove the permissions using the `Remove` option in the `Actions` column of the each permissions.

	![Remove Data source Permission](/static/assets/embedded/managing-resources/images/remove-datasource-permission.png)

<!---
## Open with Dashboard Designer

Data Sources can be launched directly in the Dashboard Designer from the Bold BI. 

Click the `Actions` button in the Data Sources grid context menu and select `Open with Dashboard Designer` to open the Data Source in the Dashboard Designer if it is already installed in the client machine.

![open with  Dashboard Designer](/static/assets/embedded/managing-resources/images/open-with-data-source.png)

If Dashboard Designer is not already installed in the client machine, then Dashboard Designer will be downloaded in the client machine for the user to install.

## Download Data Sources

Click the `Actions` button in the data sources grid context menu and select `Download` to download the data source in `.syds` format.

![Download Data Source](/static/assets/embedded/managing-resources/images/download-data-source.png)

--->

## Version History

Versions and file logs for each data source are maintained in the Bold BI for every changes in the data source. Check [Version History](/embedded-bi/managing-resources/manage-dashboards/version-history-of-dashboards/) section for more details.

## Delete Data Sources
Data Sources can also be deleted from the Bold BI when they are no longer required.

Click the `Actions` button in the data sources grid context menu and select `Delete` to delete the data source.

![Delete Data Source](/static/assets/embedded/managing-resources/images/delete-data-source.png)  

## Preview Data Sources

You can preview the data of your data sources.

Click `Actions` in the data sources grid context menu and select `Preview Data` to preview the data source.

![preview Data Source](/static/assets/embedded/managing-resources/images/preview-data-source.png)

## Copy Data Sources  
You can copy the data source item only for the data source type in **Live** mode connection.

Click the `Actions` button in the data sources grid context menu and select `Copy Data Source` to copy the data source.  

![Copy Data Source](/static/assets/embedded/managing-resources/images/copy-data-source.png)  

> **NOTE:**  The copy option shown only for Live mode connection like SQL and won't shown for Extract mode connection like files, web API, etc.
