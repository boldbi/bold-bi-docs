---
layout: post
title: Data Extract Storage Settings – Embedded BI | Bold BI Docs
description: Learn how to configure the data store settings for storing extracted data from data sources in Bold BI.
platform: bold-bi
documentation: UG
---

# Configure DataStore Settings

This section explains how to configure the DataStore settings for storing extracted data from data sources.

DataStore is an intermediate database used to store imported data from web data sources and statistic files, with a scheduled refresh option to update data.

> **NOTE:** This feature is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

## Database configuration

We can connect to the existing SQL Server instance with the following options:
1. New Database
2. Existing Database

### New database

* In this method, a new database is created to store the extracted data sources and files. 
* Select server type, enter the server instance name, credentials, and choose the `New Database` option.
* Enter your database name and click the `Save` button.  
![Data store settings](/static/assets/site-administration/images/datastore-settings.png#width=65%)

**NOTE:** 
>  1. When selecting Oracle as the database type, users cannot create a new database for storing extracted data sources.
>  2. Changing the database type to Oracle from another database will result in the loss of all previously stored data.

![Oracle data store settings](/static/assets/site-administration/images/oracle-database-settings.png#width=65%)

### Existing database
* In this method, an existing database is used to store the extracted data sources and files.       
* Select server type, enter the server instance name, credentials, and choose the `Existing Database` option.  
* `Select a database` from the drop-down menu to create Data Store tables in that database, then click the `Save` button.  
![Datastore for existing database](/static/assets/site-administration/images/datastore-existing-db.png#width=65%)  
     
> **NOTE:**  The credentials given to connect to the SQL Server instance must have permissions to:
>  * Create Database
>  * Create Table
>  * Insert
>  * Update Table
>  * Alter Table
>  * Select
>  * Drop Table
>  * Drop Database 
