---
layout: post
title: Finding Error and Event Logs | Bold BI Documentation
description: Know where the error and event logs are generating while interacting with Bold BI application installed in server.
platform: bold-bi
documentation: ug
---

# Where can i find the error and debug log files?
## Error logs
Event log files record the complete details of user interactions in the Bold BI application, one after the other, as users interact with the application.

## Debug logs

Event log files record the complete user interaction details one after the other when users interact with the Bold BI application

> **NOTE:** This settings option is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## How to get the diagnostic logs

The diagnostic logs can be downloaded in the UMS based on the versions of Bold BI, as explained below.

### Bold BI version 6.17 or later

1. In the Bold BI tenant site, click on the Profile icon and select the `Manage sites (Admin access)` option. This will open the **UMS sites page** in a new tab.

    > **NOTE:** This option will only be shown to the UMS Admin user.

    ![Manage Sites Option latest](/static/assets/faq/images/manage-sites-option-6-17.png#max-width=85%)

2. Now, navigate to the UMS site and click on the help icon at the top right, near the profile icon. Select the `Get diagnostic logs` option.

    ![Get Diagnostic Option](/static/assets/faq/images/get-diagnostic-option-6-17.png#max-width=85%)

3. In the `Get diagnostic logs` dialog, select the necessary period options such as `Last 1 hour`, `Last 24 hours`, `Last seven days`, or `All` from the `Select time period` dropdown menu and then click on `Download diagnostic logs`. The logs will now be downloaded.

    ![Get Diagnostic download](/static/assets/faq/images/get-logs-dropdown.png#max-width=85%)

### Bold BI version 6.1 or later

1. In the Bold BI tenant site, click on the Profile icon and select the `Manage sites (Admin access)` option. This will open the **UMS sites page** in a new tab.

    > **NOTE:** This option will only be shown to the UMS Admin user.

    ![Manage Sites Option latest](/static/assets/faq/images/manage-sites-option-6-1.png#max-width=85%)

2. Now, navigate to the UMS site. Click on the help icon in the navigation menu and select the `Get diagnostic logs` option.

    ![Get Diagnostic Option](/static/assets/faq/images/get-diagnostic-option-6-1.png#max-width=85%)

3. In the `Get diagnostic logs` dialog, select the necessary period options such as `Last 1 hour`, `Last 24 hours`, `Last seven days`, or `All` from the `Select time period `dropdown menu and then click on `Download diagnostic logs`. The logs will now be downloaded.

    ![Get Diagnostic download](/static/assets/faq/images/get-logs-dropdown.png#max-width=85%)

### Bold BI version 4.1.36 or later

1. In the Bold BI tenant site, click on the Profile icon and select the `Manage sites (Admin access)` option. This will open the **UMS sites page** in a new tab.

    > **NOTE:** This option will be shown only for the UMS Admin user.

    ![Manage Sites Option](/static/assets/faq/images/manage-sites-option-6-1.png#max-width=85%)

2. Now, navigate to the UMS site. Click on the question mark icon on the navigation menu and select the `Get diagnostic logs` option. The logs will now be downloaded.

    ![Get Diagnostic Option](/static/assets/faq/images/get-diagnostic-option.png#max-width=85%)

You can also manually obtain the log file from the following location for Bold BI version 4.1.36 or later.

> **NOTE:** By default, the Bold BI is deployed in "C:\BoldServices" for Windows and "/var/www/bold-services/application" for Linux.

| Hosted Environment    | Log location                                              	|
|-------------------	|-----------------------------------------------------------	|
| Windows            	| **`{Deployed Location}`**\app_data\logs                       |
| Linux               	| **`{Deployed Location}`**/app_data/logs                       |

### Bold BI version below 4.1.36

We do not have the capability to retrieve the logs directly from the application in this version. Therefore, we will need to obtain them from the deployment location as outlined below.

> **NOTE:**  By default, the Bold BI is deployed in "C:\BoldBI" for Windows.

| Application       	| Log location                                              	|
|-------------------	|-----------------------------------------------------------	|
| Identity Provider 	| **`{Deployed Location}`**\IDP\App_Data\Logs               |
| Dashboard Server  	| **`{Deployed Location}`**\Dashboard Server\App_Data\Logs  	                |
| Designer Service  	| **`{Deployed Location}`**\Dashboard Designer\App_Data\Logs 	        |

## How to get configuration files?

1. This option is available from Bold BI version 6.4 or later for downloading the configuration files along with the logs. 

    > **NOTE:** Enable the checkbox only if the Bold BI support team has requested the configuration files.

2. Please refer to the above [sections](#how-to-get-the-diagnostic-logs) to locate the `Get Diagnostic Logs` option in UMS based on the Bold BI version.

3. In the `Get diagnostic logs` dialog, enable the `Include configuration files` checkbox and click `Download diagnostic logs`, the configuration files will be downloaded along with the logs.

    ![Get configuration file download](/static/assets/faq/images/get-configuration-file.png#max-width=85%)

    > **NOTE:** If you are only going to get configuration files, then you can select the minimum period option **Last 1 hour** instead of **All** from the **Select time period** dropdown menu.

    ![Get Diagnostic Logs](/static/assets/faq/images/get-diagnostic-logs.png#max-width=85%)