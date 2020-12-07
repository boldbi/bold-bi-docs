---
layout: post
title: Mapping User Directory Database – Cloud BI | Bold BI Docs
description: Learn how to configure the user directory database and map the required columns to pull user details into Bold BI.
platform: bold-bi
documentation: ug
---

# Existing Database Settings

This section explains how to configure Database Settings with the Bold BI Cloud.

## Get Database Connection Details

To import users into Bold BI Cloud from Existing Database configure the existing database details in database settings page in the administration page of Bold BI. 

![Import Users from Database - Home](/static/assets/cloud/site-administration/images/import-users-home-page-new.png)

Users can be imported from below types of Databases.

1. SQL Server
2. PostgreSQL

To select the database type from which the users to be imported, click on `Database type` dropdown.

![Select Database Type](/static/assets/cloud/site-administration/images/select-database-type-new.png)
 
### SQL Server Database
 
For SQL Server Database, fill the form with Server name, Authentication type, Username, Password and Database name.
 
The connection details can be tested by click on 'Test Connection'
  
![Connect SQL Server Database](/static/assets/cloud/site-administration/images/connect-database-sqlserver-new.png)
 
### PostgreSQL Database
 
For PostgreSQL Database, fill the form with Server name, Port, Username, Password and Database name.
 
The connection details can be tested by click on 'Test Connection'
 
![Connect PostgreSQL Database](/static/assets/cloud/site-administration/images/connect-database-postgresql-new.png)
 
Once the connection details are filled, click on 'Next' for getting schema of the provided database connection.

![Connect Database](/static/assets/cloud/site-administration/images/connect-database-new.png)

## Map Database Columns

The page will look like below once the database has been connected.

![Select Column](/static/assets/cloud/site-administration/images/database-select-columns-new.png)

Select the matched columns from the database schema for Username, First name, Email address, Last name(Optional) and IsActive (Optional) fields.

![Match Database Column](/static/assets/cloud/site-administration/images/match-database-columns-new.png)

If the columns are selected from different tables, below scenarios will happen.

* If the tables have single relationship - The join will be made with the particular relationship.

* If the tables have multiple relationships - The relationship can be selected from the list of relationships and then click on `Apply`

![Select Table Relation](/static/assets/cloud/site-administration/images/select-relation.png)

* If there is no relationship between tables - Form Join with the selected tables and then click on `Apply`

![Form Table Relation](/static/assets/cloud/site-administration/images/form-relation.png)

After selection of all columns, click on `Save` to save the database details. Based on this saved details it will pull the users from the configured Database.

![Saving database details](/static/assets/cloud/site-administration/images/save-database-details.png)


![Successful saving](/static/assets/cloud/site-administration/images/database-details-saved.png)

Also included the `Back` button in the settings page to edit the database details before complete mapping and saving the database configuration.