---
layout: post
title: Intermediate DB for Data Extract - Embedded BI | Bold BI Docs
description: This page summarizes the intermediate database used in Bold BI for processing data extracts with extract mode data sources for embedded analytics.
platform: bold-bi
documentation: ug
---
# Bold BI Intermediate Database in Embedded Analytics

Bold BI Intermediate database is a data store to import data from the Web API data sources, extract mode connection data sources like SQL, and statistic files and connect with dashboards quickly. 

The Bold BI Data Engine is where you can perform simple transformations to your data and format them for use in visualizations. The following transformations are supported: 

* Join tables
* Create calculated fields
* Format
* Filter

> **Note:** Intermediate Database is available in On-Premises Deployment but not in Syncfusion Managed Cloud Server.

You can use the scheduled refresh option to update data. Refresh settings will be configured by users for periodic updates. Based on the Refresh Settings, data will be imported into the intermediate database and in this case, the dashboard is rendered with the newly imported data.

The intermediate database is configured when the on-premise version is installed. Please refer to the following sections for Database configuration:

* [Latest](/application-startup/latest/#database-configuration)
* [v4.2.68 or earlier](/application-startup/v4.2.68-or-earlier/#database-configuration-for-data-store)

![Bold BI Intermediate Database Structure](/static/assets/working-with-datasource/images/boldbiintermediatedatabase.png)
         
In the Bold BI Enterprise platform, the following intermediate databases are supported.
 * Microsoft SQL Server/ Azure SQL
 * PostgreSQL/ Azure PostgreSQL
 * MySQL/ Azure MySQL
 
> **NOTE:** For MySQL/ Azure MySQL, whenever an extract data source is created, a new database will be created in the configured MySQL data base as schema and database is [same](https://dev.mysql.com/doc/refman/8.0/en/system-schema.html) in MySQL.

 Refer to this section to know the details of [Software Requirements](/deploying-bold-bi/overview/#software-requirements).