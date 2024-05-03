---
layout: post
title: Intermediate DB for Data Extract - Embedded BI | Bold BI Docs
description: This page summarizes the intermediate database used in Bold BI for processing data extracts with extract mode data sources for embedded analytics.
platform: bold-bi
documentation: ug
---
# Bold BI Intermediate Database in Embedded Analytics

The Bold BI Intermediate Database is a data store used to import data from Web API data sources, extract mode connection data sources like SQL, and statistic files, and connect them with dashboards quickly. 

The Bold BI Data Engine allows you to perform simple transformations on your data and format it for use in visualizations. The following transformations are supported:

* Join tables
* Create calculated fields
* Format
* Filter

> **Note:** The intermediate database is available for On-Premises Deployment, but not for Syncfusion Managed Cloud Server.

You can utilize the scheduled refresh option to update the data. Users will configure the refresh settings for periodic updates. The data will be imported into the intermediate database based on these settings, and the dashboard will be rendered with the newly imported data.

The intermediate database is configured during the installation of the on-premise version. Please refer to the following sections for information on how to configure the database:

* [Latest](/application-startup/latest/#database-configuration)
* [v4.2.68 or earlier](/application-startup/v4.2.68-or-earlier/#database-configuration-for-data-store)

![Bold BI Intermediate Database Structure](/static/assets/working-with-datasource/images/boldbiintermediatedatabase.png)
         
The following intermediate databases are supported in the Bold BI Enterprise platform:
 * Microsoft SQL Server/ Azure SQL
 * PostgreSQL/ Azure PostgreSQL
 * MySQL/ Azure MySQL
 
> **NOTE:** For MySQL/ Azure MySQL, a new database will be created as a schema whenever an extract data source is created. The schema and database are the [same](https://dev.mysql.com/doc/refman/8.0/en/system-schema.html) in MySQL.

 Please refer to this section for details on the [Software Requirements](/deploying-bold-bi/overview/#software-requirements).