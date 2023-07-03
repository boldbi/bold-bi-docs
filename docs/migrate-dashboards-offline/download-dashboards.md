---
layout: post
title: Exporting Dashboards to a File | Bold BI Cloud Docs
description: Learn how to easily export dashboard files and import into other sites or keep as backup files, with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Download dashboards in the Bold BI application

In Cloud Bold BI, it is possible to download dashboards from tenants. Here is a step-by-step guide on how to download dashboards from sites in Bold BI:

## Prepare dashboards for download

To download the dashboard(s) from site(s), follow these steps:

1. Click on `Actions` in the dashboard grid context menu, and then select the `Download` option to download the corresponding dashboard.
 

   ![Download Menu](/static/assets/resource-migration/migrate-dashboards-offline/images/download-menu.png)

   > **NOTE:** If the download option for a particular dashboard is not visible in the context menu, this indicates that you don't have the necessary permission to download it. Please refer to the [download permission](/migrate-dashboards-offline/download-dashboards/#download-permissions) section to learn how to provide the download permission.

   You can also download more than one dashboard from the page by selecting the dashboard list checkbox, or all dashboards on the page by selecting the `Select All` checkbox in the header.

   ![Bulk Download](/static/assets/resource-migration/migrate-dashboards-offline/images/bulk-download.png)
	
2. After clicking the `Download` option from the context menu or download icon, the dialog box will appear with a description and warning message details.  By default, the `Include sensitive information` checkbox is selected, but you can uncheck it if you want.

   ![Download Dialog](/static/assets/resource-migration/migrate-dashboards-offline/images/download-dialog.png)

3. Click on the `Prepare Download` button in the dialog to initiate the download request for the selected dashboards or individual dashboards. You can then check the status of the download process on the **Offline Resources** page.

   ![Prepare Download](/static/assets/resource-migration/migrate-dashboards-offline/images/prepare-download.png)

   > **NOTE:** The `Include sensitive information` includes data source sensitive credentials. By enabling this option, you can download the dashboards with sensitive details, making it easier to upload them to another server without the need for additional configuration. This can save time and effort, as you can directly use the downloaded dashboards with all the necessary information.

## Download the dashboard file from offline page

After the download process is complete, you can download the downloaded dashboards on the **Offline Resources** page. Here is how to download individual dashboard files or multiple dashboard files in a zip format:

![Offline Resources](/static/assets/resource-migration/migrate-dashboards-offline/images/offline-resources.png)

### Download the dashboard file

To download the dashboard file, follow these steps:

1. Go to the **Offline Resources** page.

   ![Offline Page](/static/assets/resource-migration/migrate-dashboards-offline/images/offline-page.png)
	
2. Click the download icon to download the corresponding dashboard.

   ![Download Icon](/static/assets/resource-migration/migrate-dashboards-offline/images/download-icon.png)

   You can download multiple dashboards by selecting their checkboxes, or select all dashboards on the page by clicking the `Select All` checkbox in the header.

   ![Select All](/static/assets/resource-migration/migrate-dashboards-offline/images/select-all.png)

   Then, click the `Download All` button at the top of the page to download the selected dashboard files.

   ![Download All Button](/static/assets/resource-migration/migrate-dashboards-offline/images/download-all-button.png)

3. When downloading individual dashboards, the dashboard file with the extension `.bbix` will be downloaded. If you download multiple dashboards, a zip file containing the individual `.bbix` files for the selected dashboards will be downloaded.

### Check the status of the downloaded dashboards

You can check the status of the downloaded dashboards by clicking the `Status` column on the **Offline Resources** page. This will show the status of the download process for each dashboard. Also, make sure to refresh the page to see the latest status updates.

![Download Status](/static/assets/resource-migration/migrate-dashboards-offline/images/download-status.png)

If any dashboard fails to download, you can view the reason for the failure by clicking on the `Know More` option in the dialog.

![Download Failure Status](/static/assets/resource-migration/migrate-dashboards-offline/images/download-failure-status.png)

> **NOTE:** If you come across a download failure error message associated with the download permission, it means that you do not have the required permission to download it. Please refer to the [download permission](/migrate-dashboards-offline/download-dashboards/#download-permissions) section to understand how to grant the download permission.

## Download Permissions

By default, a user can only download their own dashboards. However, an administrator or a user with permission to delegate other permissions can grant download permission to other users for all dashboards, dashboards in a category, or specific dashboards. After the permission is granted, the user(s) will be able to download the dashboards from the tenants in Bold BI.

You can grant download permission to users in two ways: either from the `Dashboards Listing` page or from the `Users and Groups Manage Permission` page.

### Granting download permission from the dashboard listing page

1. Click the `Share Permissions` option in the Dashboards grid context menu.

	![Share Permission](/static/assets/resource-migration/migrate-dashboards-offline/images/share-permission.png)

2. Select the download permission access and search for the users or groups in the search box and click the `Share` button to provide the download permission for that dashboard.

	![Add Permission](/static/assets/resource-migration/migrate-dashboards-offline/images/add-permission.png#width=55%)
	
> **NOTE:**  Only the user who created the dashboard and the Administrator can share the dashboard with other Bold BI users.

### Granting download permission from the users or groups manage permission page

1. Go to the `Users` page and click on `Actions` in the user management grid context menu. Then, select the `Manage Permissions` option.

   ![Users Page](/static/assets/resource-migration/migrate-dashboards-offline/images/users-page.png)

2. Click on the `Add Permission` button and select All Dashboards, Specific Dashboards, or Dashboards in the Category entity you want to grant the download permission for.. 

   ![Add Permission Button](/static/assets/resource-migration/migrate-dashboards-offline/images/add-permission-button.png)

3. Select the `Download` access mode and click the `Add` button to grant the user download permission

   ![Add Download Permission](/static/assets/resource-migration/migrate-dashboards-offline/images/add-download-permission.png)

As we previously outlined the steps for granting download permissions to a user, you can follow a similar process for a group. Navigate to the group listing page, select `Manage Permissions` for the desired group, and add the download permission.

## Limitations of OAuth Data Sources

* As of now, dashboards that are created with data sources that have OAuth cannot be uploaded successfully. Below is the list of data sources with OAuth that cannot be uploaded.<Br>

      1.Asana
      2.AzureDevOps
      3.Bitly
      4.Box
      5.Buffer
      6.DecisionLens
      7.Dropbox
      8.Facebook
      9.FacebookAds
      10.Fitbit
      11.FreshBooks
      12.Gmail
      13.GoogleAds
      14.GoogleAdsense
      15.GoogleAnalytics
      16.GoogleCalendar
      17.GoogleDrive
      18.GoogleSearchConsole
      19.GoogleSheets
      20.GoHighLevel
      21.Keap
      22.Instagram
      23.LinkedIn
      24.MicrosoftDynamicsSales
      25.MicrosoftDynamicsSales
      26.MicrosoftDynamicsService
      27.MicrosoftOneDrive
      28.MicrosoftOutlookCalendar
      29.MicrosoftSharePoint
      30.Podio
      31.QuickBooks
      32.QuickBooksPayments
      33.Salesforce
      34.SalesforceReports
      35.Slack
      36.Smartsheet
      37.Todoist
      38.Wistia
      39.WordPress
      40.Xero
      41.Xero Workflow Max
      42.Youtube
      43.Zoho Books
      44.ZohoCRM
      45.ZohoInvoice

## Limitations of Google BigQuery 

* ### Access Token Validation for Dashboard Upload in Google BigQuery

   * When uploading a dashboard to Google BigQuery, validating the access token's active status is important before uploading. You can successfully upload the dashboard by ensuring the access token is active.

   * Regularly monitor the access token's validity and generate new tokens to maintain a smooth uploading experience.

*  ### Authorization Requirement for Uploading Google BigQuery Dashboard to Other Sites

   * When uploading a Google BigQuery dashboard to other sites, it is essential to ensure that the respective sites have authorized access to the Google BigQuery data source.

   * This [authorization process](/working-with-data-source/data-connectors/google-bigquery/#choose-a-google-bigquery-data-source) guarantees secure and authorized sharing of data between Google BigQuery and external sites.

##  Limitations of Changing SQL Data Sources Mode During Dashboard Upload

* During the process of uploading a dashboard, attempting to change the mode of an SQL data source (e.g., from live to extract or extract to live) in the configuration editor will result in an exception.

*  This exception prevents the successful upload of the dashboard. It is crucial to exercise caution when modifying the data source mode during the upload process to avoid encountering this limitation.

## Inability to Upload Dashboard in SQLite Extract Mode

* Currently, the download and upload feature does not support the SQLite data source in extract mode. However, you can successfully upload the dashboard using the live mode for SQLite.