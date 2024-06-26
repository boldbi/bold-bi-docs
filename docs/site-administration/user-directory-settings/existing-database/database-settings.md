---
layout: post
title: Mapping User Directory Database – Embedded BI | Bold BI Docs
description: Learn how to configure the user directory database and map the required columns to pull user details into Bold BI Embedded.
canonical: "/site-administration/existing-database/database-settings/"
platform: bold-bi
documentation: ug
---

# Existing Database Settings

This section explains how to configure Database Settings with the Bold BI Embedded.

## Get Database Connection Details

To import users into Bold BI Embedded from an Existing Database, configure the existing database details on the database settings page in the User Directories section of Bold BI.

![Import Users from Database - Home](/static/assets/site-administration/images/import-users-home-page-new.png#width=60%)

Users can be imported from the following types of Databases:

1. SQL Server
2. PostgreSQL

To select the type of database from which the users will be imported, click on the `Database type` dropdown.

![Select Database Type](/static/assets/site-administration/images/select-database-type-new.png#width=60%)
 
### SQL Server Database
 
For SQL Server Database, complete the form with the Server name, Authentication type, Username, Password, and Database name.
 
The connection details can be tested by clicking the `Test Connection` option.
  
![Connect SQL Server Database](/static/assets/site-administration/images/connect-database-sqlserver-new.png#width=60%)
 
### PostgreSQL Database
 
For PostgreSQL Database, complete the form with the Server name, Port, Username, Password, and Database name.
 
The connection details can be tested by clicking the `Test Connection` option.
 
![Connect PostgreSQL Database](/static/assets/site-administration/images/connect-database-postgresql-new.png#width=60%)
 
Once the connection details are filled, click `Next` to retrieve the schema of the provided database connection.

![Connect Database](/static/assets/site-administration/images/connect-database-new.png)

## Map Database Columns

The page will appear as shown below once the database has been connected.

![Select Column](/static/assets/site-administration/images/database-select-columns-new.png)

Select the corresponding columns from the database schema for Username, First name, Email address, Last name (Optional), and IsActive (Optional) fields.

![Match Database Column](/static/assets/site-administration/images/match-database-columns-new.png)

If the columns are selected from different tables, the following scenarios will occur:

* If the tables have a single relationship - A join will be made with that specific relationship.

* If the tables have multiple relationships - The relationship can be selected from the list of relationships and then click on `Apply`.

![Select Table Relation](/static/assets/site-administration/images/select-relation.png)

* If there is no relationship between tables - Form a join with the selected tables and then click on `Apply`.

![Form Table Relation](/static/assets/site-administration/images/form-relation.png#width=60%)

After selecting all columns, click on `Save` to retain the database details. Based on these saved details, users will be pulled from the configured Database.

![Saving database details](/static/assets/site-administration/images/save-database-details.png)


![Successful saving](/static/assets/site-administration/images/database-details-saved.png#width=55%)

Additionally, include a `Back` button on the settings page to edit the database details before completing mapping and saving the database configuration.