---
layout: post
title: Dashboard Migration Utility - Embedded | Bold BI Learning
description: Learn how to migrate the classic platform dashboards and data sources into Bold BI Embedded supported formats using migration utility.
canonical: "/cloud-bi/migration-utility/"
platform: bold-bi
documentation: ug
---

# Dashboard Migration Utility

This section explains about, how to migrate the **Syncfusion Dashboard Platform Dashboards/Datasources** into the `Bold BI` site by using Dashboard Migration Utility.

> **NOTE:** The Dashboard Migration utility can only be used for migrating the dashboards from the Syncfusion Dashboard Server to the Bold BI server. This utility cannot be used for migrating the dashboards from the Bold BI instance to another. For this, you can make use of **Publish** Module. Refer to this [section](https://help.boldbi.com/embedded-bi/managing-resources/manage-dashboards/publish-dashboards/) to publish the dashboard from one Bold BI instance to another. 

## Instruction to use the Migration Utility

* Download the Dashboard Migration Utility from the [link](https://files2.syncfusion.com/Installs/MigrationUtility.zip) provided. Once download completed, extract the `.zip` file.

* Usually, the contents downloaded from the online link should be blocked by windows. So, we need to unblock those downloaded contents.

* Open the `PowerShell` in admin mode and enter the below command to unblock the contents present in the extracted folder. Use the extracted folder location for `dir`.

`dir "folder path" -Recurse | Unblock-File`

![Command to unblock the contents](/static/assets/embedded/migration-utility/images/Migration_Utility_command-to-unblock.png)

Once the PowerShell execution completed, continue to run the Dashboard Migration Utility.

## How to run the Dashboard Migration Utility

Run the `Migration Utility.exe` file.

![Run Migration Utility exe file](/static/assets/embedded/migration-utility/images/Migration_Utility_run-exe.png)

Once you have run the utility following window will open

![Migration Utility Window](/static/assets/embedded/migration-utility/images/Migration_Utility_window.png)

Check the `terms and conditions` and click `Next` to start the migration process. 

![Agree terms and conditions](/static/assets/embedded/migration-utility/images/Migration_Utility_agree-terms-and-conditions.png)

By default, the `Backup` option is selected first in the migration process. You can switch to `Restore` option if you have already the backup (*.sybak) file locally.

![Backup and Restore](/static/assets/embedded/migration-utility/images/Migration_Utility_backup-and-restore.png)

## Backup Module

In this module, the Syncfusion Dashboard Server dashboards and datasources will be exported to the provided output directory location, as a backup file in the `.sybak` format. From this backup file only, we can restore the dashboards and datasources to the target Bold BI site. 

### Steps to back up the dashboards and data sources

* Provide valid credentials like `Dashboard Server URL, Username and Password` for authentication.

![Credential](/static/assets/embedded/migration-utility/images/Migration_Utility_credential.png)

* Once the authentication succeeds, the list of `Datasets` in the Syncfusion dashboard server will be shown as below, here you can choose the multiple items to export by using the check box provided. 

![Datasets list](/static/assets/embedded/migration-utility/images/Migration_Utility_datasets-list.png)

* In next, you can see the list of `Dashboards` in the Syncfusion dashboard server like below

![Dashboards list](/static/assets/embedded/migration-utility/images/Migration_Utility_dashboards-list.png)

> **NOTE:**  You can skip the whole Datasets/Dashboards option in the backup process by clicking the `Skip` button. 

* In next, you need to enter the valid `Backup file name` and `Backup Location` to export your dashboards/datasets files

![Exporting](/static/assets/embedded/migration-utility/images/Migration_Utility_exporting.png)

* Then, the backup process will initiate, and the indication will be shown for the progress.  

![Backup process](/static/assets/embedded/migration-utility/images/Migration_Utility_backup-process.png)

* On the successful completion of the backup process, the exported backup file name and its saved location will be shown

![Exported file location](/static/assets/embedded/migration-utility/images/Migration_Utility_Exported-file-location.png)

Also, we can continue the restoring process using `Proceed to Restore` button otherwise `Close` the application.

## Restore Module

In this module, the exported dashboards and datasets will be imported to the target Bold BI site using the backup file (*.sybak). 

> **NOTE:**  `For Bold BI Enterprise:` Migration utility needs to be run from the machine, where the Bold BI Enterprise server is installed..

### Steps to restore the Dashboards and Data sources

* Provide valid credentials like target `Bold BI site URL, Username and Password` for authentication.

![Credential for restoring process](/static/assets/embedded/migration-utility/images/Migration_Utility_Credential-for-restoring-process.png)

* Once the authentication succeeds, you can choose the backup (*.sybak) file’s path in `Backup File Location` to initiate the restore process.

![File location to restore](/static/assets/embedded/migration-utility/images/Migration_Utility_File-location-to-restore.png)

* In next, the list of `Datasets` presents in the (*.sybak) file will be shown as below, you can choose the items to restore by using the check box provided. 

![Select items to restore](/static/assets/embedded/migration-utility/images/Migration_Utility_Select-items-to-restore.png)

* Then, the list of `Dashboards` presents in the (*.sybak) file will be shown as below

![Dashboards list in backup file](/static/assets/embedded/migration-utility/images/Migration_Utility_Dashboards-list-in-backup-file.png)

> **NOTE:**  You can skip the whole Datasets or Dashboards option in the restore module by clicking the `Skip` button in the bottom.

Currently, live datasource connection `(SQL, PostgreSQL)` alone be imported to the Bold BI and the Extract type connections or other connection types were considered as `unsupported` ones as of now. If the unsupported datasource connection type exists, an alert with the below message will be shown and we can’t choose that unsupported items on the restoration process. 

![Alert for unsupported connection](/static/assets/embedded/migration-utility/images/Migration_Utility_Alert-for-unsupported-connection.png)

If the Dashboard created from the `desktop designer`, some Datasource, Widgets and Features are not supported in the Bold BI server. So, it will be considered as the `unsupported` items and those unsupported items will be shown on expansion like below,

![Showing list of unsupported items](/static/assets/embedded/migration-utility/images/Migration_Utility_Showing-list-of-unsupported-items.png)

> **NOTE:**  You can select the dashboards to restore even it having the unsupported items. It can be restored with the supported items that exists.

* If the Bold BI not installed in the default location `(“C:\Bold BI”),` the below window will be shown to get the `Bold BI Installation location`.

![Bold BI Installation location](/static/assets/embedded/migration-utility/images/Migration_Utility_Bold-BI-Installation-location.png)

* Then, the restore process will initiate, and the indication will showing the progress,

![Restore process](/static/assets/embedded/migration-utility/images/Migration_Utility_Restore-process.png)

> **NOTE:**  If the restored dashboards or datasets already present in the server, a dialog will be prompted like below to get confirmation to proceed further. 

![Alert for existing file](/static/assets/embedded/migration-utility/images/Migration_Utility_Alert-for-existing-file.png)

* Once the restoration process got completed, the success message will be shown as below,

![Success message for restore completion](/static/assets/embedded/migration-utility/images/Migration_Utility_Success-message.png)

* Click `Close` to close this application.