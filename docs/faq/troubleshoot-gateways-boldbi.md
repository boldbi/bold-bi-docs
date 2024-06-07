---
layout: post
title: Troubleshoot gateways in BoldBI – Embedded BI | Bold BI
description: Common issues with BoldBI embedded connection to SQL databases and failures with query processes require troubleshooting.
platform: bold-bi
documentation: ug
---

# Troubleshooting gateways - Bold BI
This documentation discusses common issues that may arise when using Bold BI. If you encounter an issue that is not listed here, you can create a [support ticket](https://support.boldbi.com/)

## Error: Network related instance-specific error - SQL Server

![Error image network related instance](/static/assets/faq/images/error-network-related-instance.png)

The following are a few possible cases of this issue.<br/>

1. Please verify that the port number provided is valid and that the instance has any firewall rules enabled.
2. If the SQL server has SSL enabled or if the database name has been verified, ensure that the user credentials have the proper permissions to access that database.

## Error: Unable to convert MySQL datetime to System.DateTime
![Error image unable to convert date time to system.datetime](/static/assets/faq/images/error-unable-to-convert-date-time.png)

This issue arises when an additional connection parameter is not specified when connecting to the data source.

**Solution**<br>
![Solution image unable to convert date time](/static/assets/faq/images/solution-unable-to-convert-date-time.png)

## Error: No active warehouse selected in the current session - Snowflake
![Error image no active warehouse selected](/static/assets/faq/images/error-no-active-warehouse.png)

This issue occurs when the active warehouse is not set in the snowflake instance.

**Solution**<br>
To resolve this issue, please add Warehouse=WarehouseName in the Additional connection parameters.<br/>
![Solution image no active warehouse selected](/static/assets/faq/images/solution-no-active-warehouse.png)

## Error: dll not found

This error occurs when the required client DLL is not installed in Bold BI. Please download the client libraries based on your environment using the following help links.

* [Installing client libraries in azure app service](/deploying-bold-bi/deploying-on-azure-app-service/install-client-libraries/)
* [Installing client libraries in linux](/deploying-bold-bi/deploying-on-linux/install-optional-libraries/v4.1-or-older/)
* [Installing client libraries in windows](/deploying-bold-bi/deploying-on-windows/installation-and-deployment/#client-libraries)

## Error: Login failed for user - SQL Server Windows authentication

This issue occurs when the NT **AUTHORITY/SYSTEM** is not added in IIS/IIS EXPRESS to access the SQL Server Windows Authentication mode.

**Solution**<br>

Please follow the instructions provided [here](/faq/how-to-resolve-login-failed-for-user-in-windows-authentication-mode/) to resolve this issue.

## Error: Couldn't connect to server

![Error image Couldn't connect to server](/static/assets/faq/images/error-couldnot-connect-to-server.png)

The following factors led to this type of error:<br/>
1. If any of the IP addresses specified in the [Bold BI Cloud IP addresses](/working-with-data-sources/white-list-ip-address-bold-bi-cloud/) addresses were not whitelisted.
2. If pooling was not defined when a data source was created in Bold BI.

**Solution**<br>
This problem can be fixed by including the pooling value in the additional connection parameters when creating the data source. The **Additional connection parameters: Pooling=True; Connection Reset=false**, and whitelisting the IP addresses mentioned in [Bold BI Cloud IP addresses](/working-with-data-sources/white-list-ip-address-bold-bi-cloud/). <br>Please refer to the following image.</br>

![Solution image Couldn't connect to server](/static/assets/faq/images/solution-couldnot-connect-to-server.png)

## Error: Command Time-out issue

![Error image Command timeout](/static/assets/faq/images/error-command-time-out.png)

The error specified above occurs when the query times out before the operation is finished.

**Solution**<br/>
This issue can be resolved by increasing the command timeout value when creating the data source.<br/>

**Using Bold BI:**<br/>
Please follow these steps to increase the command timeout value in Bold BI.

1. Provide the server with the information on the page for data source connectivity.
2. Increase the command timeout value.
    ![Solution image Command timeout](/static/assets/faq/images/solution-command-time-out1.png)

**Using Nginx:**<br/>
Please find the steps to increase the timeout value in the following Nginx configuration.

1. Edit the boldbi-nginx-config file in the /etc/nginx/sites-enabled directory.<br/>
2. Edit all timeout values and save them.
![Solution image Command timeout](/static/assets/faq/images/solution-command-time-out2.png)
3. Finally, restart nginx by running the following command.<br/>
**sudo systemctl restart nginx**<br/>
Please refer to the provided document for instructions on [manually-configure-nginx](/deploying-bold-bi/deploying-on-linux/installation-and-deployment/bold-bi-on-ubuntu/#manually-configure-nginx)

## Error: No space left on device

![Error image writing file](/static/assets/faq/images/error-writing-file.png)

The specified error occurs when there is not enough space to store temporary files requested by the MySQL server.

**Solution**<br/>
Check if `\temp` is in its own partition by using the `df -h` command.<br/>
If it is in its own partition and running low on space, you can either:
* Modify /tmp so that its partition has more space (either by reallocating or moving it to the main partition – example - [Link](https://ubuntuforums.org/showthread.php?t=1431169&s=8e9bae44a660c5098788d309c6f417bd&p=8976725#post8976725)).
* By modifying the MySQL configuration file, the database uses a [different temporary folder](https://dev.mysql.com/doc/refman/8.0/en/temporary-files.html) on a separate partition. For example, /var/temp.

## Error: Converting varchar to datetime datatype

This error occurs when the SQL server's date format or culture is mismatched.<br/>

**Solution**<br/>
1. Please verify that the date format settings for the server and system are the same.<br/>
2. If the date format in SQL Server is set to dmy, then change it to mdy and vice versa.<br/>
Use the following commands to verify and change the settings.<br/>
`DBCC useroptions`<br/>
![Solution image varchar to date type 1](/static/assets/faq/images/solution-varchar-to-date1.png)
`SET DATEFORMAT mdy`<br/>
![Solution image varchar to date type 2](/static/assets/faq/images/solution-varchar-to-date2.png)

## Error: Unable to connect MySQL in SSL mode
![Error image unable to connect MySQL in SSL mode](/static/assets/faq/images/error-mysql-ssl.png)

This error occurs when Bold BI connects to a MySQL server over SSL without adding the SSL specification.<br/>

**Solution**<br/>
1. Check if the IP addresses mentioned in the provided link [Bold BI Cloud IP addresses](/working-with-data-sources/white-list-ip-address-bold-bi-cloud/) are whitelisted.
2. Verify if the person logging in can access the MySQL server.
3. This issue can be resolved by including **SslMode=Required** as an additional connection parameter.
![Solution image unable to connect MySQL in SSL mode](/static/assets/faq/images/solution-mysql-ssl.png)

## Error: Invalid parameter in expression for SSAS

![Error image invalid parameter in expression](/static/assets/faq/images/error-invalid-parameter-in-expression.png)

A measure must be used for expressions such as SUM, COUNT, and others. The issue shown in the following image may arise if a dimension is included in these expressions.

**Solution**<br/>
Do not use dimension columns in numerical expressions.