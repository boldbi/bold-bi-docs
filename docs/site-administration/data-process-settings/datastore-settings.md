---
layout: post
title: Data Extract Storage Settings – Embedded BI | Bold BI Docs
description: Learn how to configure the data store settings for storing extracted data from data sources in Bold BI.
platform: bold-bi
documentation: UG
---

# Configure DataStore Settings

This section explains on how to configure the Data store settings for storing extracted data from data sources. 

DataStore is an intermediate database that is used to store imported data from web data sources and statistic files, there you will have a scheduled refresh option to update data.

## Database configuration

We can connect to the existing SQL Server instance with the below options
1. New Database
2. Existing Database

### New database

* In this method, we have to create a new database for storing the extracted data sources and files in it.  
* Select server type, enter the server instance name, credentials and select `New Database` option.  
* Enter your database name and click the `Save` button.  
![Data store settings](/bold-bi-docs/static/assets/embedded/site-administration/images/datastore-settings.png#width=65%)  

### Existing database
* In this method, we are using an existing database for storing the extracted data sources and files in it.        
* Select server type, enter the server instance name, credentials and select an `Existing Database` option.  
* Choose one of the database from `Select a Database` drop down for creating Data Store tables in that database and click the `Save` button.  
![Datastore for existing database](/bold-bi-docs/static/assets/embedded/site-administration/images/datastore-existing-db.png#width=65%)  
     
> **NOTE:**  The credentials that is given to connect to the SQL Server instance must have permissions to 
>  * Create Database
>  * Create Table
>  * Insert
>  * Update Table
>  * Alter Table
>  * Select
>  * Drop Table
>  * Drop Database 
