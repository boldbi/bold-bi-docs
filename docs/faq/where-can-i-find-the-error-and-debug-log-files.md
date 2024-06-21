---
layout: post
title: Finding Error and Event Logs | Bold BI Documentation
description: Know where the error and event logs are generating while interacting with Bold BI application installed in server.
platform: bold-bi
documentation: ug
---

# Where can i find the error and debug log files?
## Error logs
Error log files are generated when an exception occurs while configuring or interacting with the Bold BI application

## Debug logs

Event log files record the complete user interaction details one after the other when users interact with the Bold BI application

## Log Directories

For any configurations made in the Bold BI, log files are generated in deployed locations under the various modules listed in the following table based on the nature of the error or event.

### Bold BI version 4.1.36 or later

Admin can download log files from `Get diagnostic logs` in UMS.

Follow these steps to download log files:

1. Click the Profile icon and select the `Manage sites (Admin access)` option, and it will open the **UMS sites page** in a new tab.

    ![Manage Sites Option](/static/assets/embedded/faq/images/manage-sites-option.png#max-width=85%)

2. Click the question mark icon on the navigation menu and select the `Get diagnostic logs` option. The logs will now be downloaded

    ![Get Diagnostic Option](/static/assets/embedded/faq/images/get-diagnostic-option.png#max-width=85%)

You can get the log file manually from the following location for Bold BI version 4.1.36 or later.

> **NOTE:** By default, the Bold BI is deployed in "C:\BoldServices" for Windows and "/var/www/bold-services/application" for Linux.

| Hosted Environment    | Log location                                              	|
|-------------------	|-----------------------------------------------------------	|
| Windows            	| **`{Deployed Location}`**\app_data\logs                       |
| Linux               	| **`{Deployed Location}`**/app_data/logs                       |

### Bold BI version below 4.1.36

You can get the log file manually from the following location for Bold BI version below 4.1.36.

> **NOTE:**  By default, the Bold BI is deployed in "C:\BoldBI".

| Application       	| Log location                                              	|
|-------------------	|-----------------------------------------------------------	|
| Identity Provider 	| **`{Deployed Location}`**\IDP\App_Data\Logs               	|
| Dashboard Server  	| **`{Deployed Location}`**\Dashboard Server\App_Data\Logs  	|
| Designer Service  	| **`{Deployed Location}`**\Dashboard Designer\DesignerLogs 	|