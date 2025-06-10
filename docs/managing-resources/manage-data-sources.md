---
layout: post
title: Manage Data sources – Embedded BI | Bold BI Documentation
description: Learn how to manage version history, refresh data, share, copy and delete data sources in Bold BI Embedded.
canonical: "/managing-resources/manage-data-sources/"
platform: bold-bi
documentation: ug
---

# Manage Data Source Connections

This section explains how to share data sources, manage the version history of data sources, and delete them in Bold BI. 

Data sources that are accessible by the user, depending on the user’s permission, are displayed on the data sources page.

![Manage Data Sources](/static/assets/managing-resources/images/manage-data-sources.png)

There are two connection types available in Data Source:

* Live mode
* Extract mode

## Live mode connection

In this connection type, data sources are directly fetched from the source, examples include MySQL, Oracle, etc.

![Live Connection](/static/assets/managing-resources/images/live-connection-datasource.png#width=55%)

## Extract mode connection 

In this connection type, data sources are fetched from the source periodically, examples include CSV, JSON, etc.

Within extract mode, users can choose between two methods of connecting to the data source:
 
- **Bold BI Extract:** 
1. With Bold BI Extract, data is extracted from the source and transferred to the intermediate storage without any modification or optimization. This approach prioritizes speed and simplicity, performing a direct transfer of data. Performance differences between Live Mode and Bold BI Extract are primarily attributed to factors such as server load and resource availability, rather than the extraction process itself.

2. **Use Case:** Suitable for scenarios where a straightforward, unmodified copy of the data is required for analysis or visualization.
 
- **Data Hub:** 
1. The Data Hub option provides users with the capability to transform and aggregate data during the extraction process. This method offers enhanced flexibility in shaping the data to meet specific analytical requirements. Users can leverage the Extract, Transform, Load (ETL) capabilities of Bold BI to optimize the extracted data.
This includes operations such as:

    Filtering:  Selecting specific subsets of data.
  
    Cleansing:  Correcting or removing inaccurate or irrelevant data.
  
    Summarization:  Aggregating data to a higher level (e.g., calculating sums, averages).

2. By applying these transformations, users can streamline analysis workflows, improve query performance, and derive more meaningful insights from the data.
3. **Use Case:** Ideal for scenarios where data requires preparation before analysis, such as combining data from multiple sources, removing noise, or calculating key metrics.
 
In summary, Bold BI provides users with two distinct modes for connecting to SQL data sources, each offering unique benefits depending on the nature of the analysis and the requirements of the user. Whether opting for real-time access through live mode or leveraging the efficiency of extract mode, users can access and analyze SQL data effectively to drive informed decision-making and achieve their analytical objectives.

Users can see the data source refresh status and the number of occupied data rows count on this page.

![Extract Connection](/static/assets/managing-resources/images/extract-connection-datasource.png#width=55%)

Check the [connectivity section](/working-with-data-sources/data-connectors/) for more details.

## Refresh Setting

This section explains on how to configure the data source refresh setting.

### Steps to configure a data source refresh setting

1. Click the `Actions` button in the Data sources grid context menu and select the `Refresh Setting` option.

    ![Refresh Setting](/static/assets/managing-resources/images/refresh-setting-context-datasource.png#width=55%)

2. Select the recurrence type, recurrence, start and end dates in the `Refresh Setting` dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* The minimum data refresh interval time will be 5 minutes.
	* Application Time Zone is displayed below the date picker. The start time of the schedule is converted to the client's Time Zone and shown on the right side for the user's convenience. After selecting, click on the `Schedule` button.
	* Data refresh failure notification can be sent to the owner of the data source with the error message and a link to the data source refresh history by enabling the 'send failure notification to owner' option.
	* Bold BI application deactivates the data refresh after limited consecutive failures and sends the disable notification to the owner by mail.

	![Save Schedule](/static/assets/managing-resources/images/refresh-setting-schedule-datasource.png)

> **NOTE:**  Only the data source created with extract mode will have this refresh setting option.

## Refresh Data
Data refresh can be run on demand by using the `Refresh Data` option in the data source grid context menu.

![Refresh data](/static/assets/managing-resources/images/refresh-data.png#width=55%)

## Refresh History
You can see the data refresh history information of the corresponding data source in the `Refresh History` option in the data source grid context menu. 

![Refresh History](/static/assets/managing-resources/images/refresh-history.png#width=60%)
![Refresh History Info](/static/assets/managing-resources/images/refresh-history-info.png)

You can also see failure information by clicking the failed link in the run history dialog box.

![Refresh Failure Info](/static/assets/managing-resources/images/refresh-failure-info.png#width=55%)

> **NOTE:**  Only the data source created with extract mode will have this refresh history option.

## Refresh Logs
The refresh log provides a comprehensive overview of the refresh activities, including the corresponding timestamp of each event.

To access the refresh logs, click the `View` option in the grid. This will open the refresh log in the New tab.

![Refresh Logs Info](/static/assets/managing-resources/images/refresh-view-logs.png)
![Success Logs Info](/static/assets/managing-resources/images/Success-logs.png)

> **NOTE:**
> * The refresh log will display tooltip information indicating whether it has been deleted after a certain period from its creation time or if it is unavailable due to being an older refresh request.
> * The logs for each refresh will be automatically deleted after 15 days from their respective creation time.

## Row Level Security

Row-level security for the data used to create dashboards allows us to restrict the data visible to each user. If row-level security is applied to a data source, it will be indicated in the listing grid. [Know More](/working-with-data-sources/user-filter/)

![Row-level Security](/static/assets/managing-resources/images/row-level-security.png)

## View Linked Dashboards
You can view the dashboard(s) created with the corresponding data source using the `View Linked Dashboards` option in the data source grid context menu.

![View Linked Dashboards Option](/static/assets/managing-resources/images/view-linked-dashboards-option.png#width=55%)

![View Linked Dashboards Listing](/static/assets/managing-resources/images/view-linked-dashboards-listing.png)

You can also view the number of dashboards linked to the data source on the data source listing page.

![Linked Dashboards Count](/static/assets/managing-resources/images/linked-dashboard-count.png)

> **NOTE:** All the dashboards associated with the data source will be updated whenever the data source is updated.

## Share Data sources

This section explains how to share data sources with other users in Bold BI.

### Steps to share a data source

1. Click the `Actions` button in the Data sources grid context menu and select the `Sharing Permissions` option.

	![Manage Permission](/static/assets/managing-resources/images/manage-permission-context-datasource.png#width=55%)

2. Select the permission access from the `Select Access` dropdown and type in the user or group name with whom you want to share the data source.
  
	![Share Data source](/static/assets/managing-resources/images/share-datasource.png#width=55%)

3. After selecting the permission access and users or groups, click the `Share` button.

	![Add Data source Permission](/static/assets/managing-resources/images/add-datasource-permission.png#width=55%)
	
> **NOTE:**  Only the user who created the data source and the Administrator can share the data source with other Bold BI users.

### Remove Permission

The user who created the data source and the Administrator can remove the shared data source permissions.

1. Click the `Manage Access` button to see the users or groups and their permissions.
    
	![Manage Access Data source](/static/assets/managing-resources/images/manage-access-datasource.png#width=55%)

2. Then remove the permissions using the `Remove` option in the `Actions` column of each permission.

	![Remove Data source Permission](/static/assets/managing-resources/images/remove-datasource-permission.png#width=55%)

## Version History

Versions and file logs for each data source are maintained in Bold BI for every change in the data source. Check the [Version History](/managing-resources/manage-dashboards/version-history-of-dashboards/) section for more details.

## Delete Data Sources
Data Sources can also be deleted from Bold BI when they are no longer required.

Click the `Actions` button in the data sources grid context menu and select `Delete` to delete the data source.

![Delete Data Source](/static/assets/managing-resources/images/delete-data-source.png#width=55%)

## Preview Data Sources

You can preview the data of your data sources.

Click `Actions` in the data sources grid context menu and select `Preview Data` to preview the data source.

![preview Data Source](/static/assets/managing-resources/images/preview-data-source.png#width=55%)

## Information of Data Source

You can see the information of the respective Data Source in the dialog box. Click `Actions` in the grid context menu and select `Info`.

![Data Sources Info](/static/assets/managing-resources/images/datasources-info.png#width=55%)

![Data Sources Info Popup](/static/assets/managing-resources/images/datasources-info-popup.png#width=55%)

## Copy Data Sources  
Copy the data source item for the data sources of the **Live** and **Extract** mode connection types.

Click the `Actions` button in the data sources grid context menu and select `Copy Data Source` to copy the data source.  

![Copy Data Source](/static/assets/managing-resources/images/copy-data-source.png#width=55%)  

## Draft Data Sources
The **Data Source** will be automatically saved as a draft when the user did not publish the created data source.

You can view the unpublished draft data sources in the data source listing page tagged with `draft` label.

![Draft Data Source](/static/assets/managing-resources/images/draft-data-source.png#width=55%)
