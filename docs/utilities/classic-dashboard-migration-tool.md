---
layout: post
title: Dashboard Migration Utility - Embedded | Bold BI Learning
description: Learn how to migrate the classic platform dashboards and data sources into Bold BI Embedded supported formats using the migration utility.
canonical: "/migration-utility/"
platform: bold-bi
documentation: ug
---

# Dashboard Migration Utility

This section explains how to migrate Syncfusion **Dashboard Platform dashboards and data sources** to the `Bold BI` site using the Dashboard Migration Utility.

> **NOTE:** The Dashboard Migration Utility can only be used to migrate dashboards from the Syncfusion Dashboard Server to the Bold BI server. This utility cannot be used to migrate dashboards from one Bold BI instance to another. Instead, you can utilize the **Publish** module for this purpose. Please refer to this [section](https://help.boldbi.com/working-with-dashboards/publish-dashboard/) for instructions on publishing a dashboard from one Bold BI instance to another. It is not suitable for migrating dashboards from the Syncfusion Dashboard Server to the Syncfusion Managed Cloud Server.

## Instruction to Use the Migration Utility

* Download the Dashboard Migration Utility from the provided [link](https://files2.syncfusion.com/Installs/MigrationUtility.zip). Once the download is completed, extract the `.zip` file.

* Usually, the contents downloaded from the online link may be blocked by Windows. Therefore, you need to unblock the downloaded contents.

* Open `PowerShell` in admin mode and enter the command below to unblock the contents present in the extracted folder. Use the extracted folder location for the `dir`.

`dir "folder path" -Recurse | Unblock-File`

![Command to unblock the contents](/static/assets/migration-utility/images/Migration_Utility_command-to-unblock.png)

Once the PowerShell execution is completed, proceed to run the Dashboard Migration Utility.

## How to Run the Dashboard Migration Utility

Run the `Migration Utility.exe` file.

![Run Migration Utility exe file](/static/assets/migration-utility/images/Migration_Utility_run-exe.png)

Once you have run the utility, the following window opens.

![Migration Utility Window](/static/assets/migration-utility/images/Migration_Utility_window.png)

Please check the `terms and conditions` and click `Next` to start the migration process.

![Agree terms and conditions](/static/assets/migration-utility/images/Migration_Utility_agree-terms-and-conditions.png)

By default, the `Backup` option is selected first in the migration process. You can switch to the `Restore` option if you already have the backup (*.sybak) file locally.

![Backup and Restore](/static/assets/migration-utility/images/Migration_Utility_backup-and-restore.png)

## Backup Module

In this module, the Syncfusion Dashboard Server dashboards and data sources are exported to the provided output directory location as a backup file in the `.sybak` format. You can restore the dashboards and data sources to the target Bold BI site only from this backup file.

### Steps to Back Up the Dashboards and Data Sources

* Provide valid credentials like `Dashboard Server URL, Username, and Password` for authentication.

![Credential](/static/assets/migration-utility/images/Migration_Utility_credential.png)

* Once the authentication succeeds, the list of `Datasets` in the Syncfusion Dashboard Server is shown below. Here, you can choose multiple items to export by using the checkbox provided.

![Datasets list](/static/assets/migration-utility/images/Migration_Utility_datasets-list.png)

* Next, you can see the list of `Dashboards` in the Syncfusion Dashboard Server below.

![Dashboards list](/static/assets/migration-utility/images/Migration_Utility_dashboards-list.png)

> **NOTE:** You can skip the whole Datasets/Dashboards option in the backup process by clicking the `Skip` button. 

* Next, you need to enter the valid `Backup file name` and `Backup Location` to export your dashboards/datasets files.

![Exporting](/static/assets/migration-utility/images/Migration_Utility_exporting.png)

* Then, the backup process initiates, and the progress is indicated.

![Backup process](/static/assets/migration-utility/images/Migration_Utility_backup-process.png)

* Upon successful completion of the backup process, the exported backup file name and its saved location are shown.

![Exported file location](/static/assets/migration-utility/images/Migration_Utility_Exported-file-location.png)

You can also continue the restore process by using the `Proceed to Restore` button; otherwise, `close` the application.

## Restore Module

In this module, the exported dashboards and datasets are imported to the target Bold BI site using the backup file (*.sybak). 

> **NOTE:** For `Bold BI Server`, the Migration Utility needs to be run from the machine where the Bold BI Server is installed.

### Steps to Restore the Dashboards and Data Sources

* Provide valid credentials such as the target `Bold BI site URL, username, and password` for authentication.

![Credential for restoring process](/static/assets/migration-utility/images/Migration_Utility_Credential-for-restoring-process.png)

* Once the authentication succeeds, you can choose the path of the backup (*.sybak) file in the `Backup File Location` to initiate the restore process.

![File location to restore](/static/assets/migration-utility/images/Migration_Utility_File-location-to-restore.png)

* Next, the list of `Datasets` present in the (*.sybak) file is displayed below. You can choose the items to restore by using the provided checkbox.

![Select items to restore](/static/assets/migration-utility/images/Migration_Utility_Select-items-to-restore.png)

* Then, the list of `Dashboards` present in the (*.sybak) file is shown.

![Dashboards list in backup file](/static/assets/migration-utility/images/Migration_Utility_Dashboards-list-in-backup-file.png)

> **NOTE:** You can skip the entire Datasets or Dashboards option in the restore module by clicking the `Skip` button at the bottom.

Currently, only live data source connections `(SQL, PostgreSQL)` can be imported to Bold BI, while Extract type connections or other connection types are considered `unsupported` as of now. If an unsupported data source connection type exists, an alert with the following message is displayed, and you won't be able to choose that unsupported item in the restoration process.

![Alert for unsupported connection](/static/assets/migration-utility/images/Migration_Utility_Alert-for-unsupported-connection.png)

If the dashboard is created from the `desktop designer`, some data sources, widgets, and features may not be supported in the Bold BI server. These `unsupported` items are shown on expansion as follows:

![Showing list of unsupported items](/static/assets/migration-utility/images/Migration_Utility_Showing-list-of-unsupported-items.png)

> **NOTE:** You can still select the dashboards to restore even if they contain unsupported items. They can be restored with the supported items that exist.

* If Bold BI is not installed in the default location `(“C:\Bold BI”)`, the window below is displayed to get the `Bold BI Installation location`.

![Bold BI Installation location](/static/assets/migration-utility/images/Migration_Utility_Bold-BI-Installation-location.png)

* The restore process then initiates, and the progress is indicated.

![Restore process](/static/assets/migration-utility/images/Migration_Utility_Restore-process.png)

> **NOTE:** If the restored dashboards or datasets are already present in the server, a dialog prompts you to confirm before proceeding further.

![Alert for existing file](/static/assets/migration-utility/images/Migration_Utility_Alert-for-existing-file.png)

* Once the restoration process is complete, a success message is displayed as shown below.

![Success message for restore completion](/static/assets/migration-utility/images/Migration_Utility_Success-message.png)

* Click `Close` to exit the application.