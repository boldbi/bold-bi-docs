---
layout: post
title: How to connect Google Cloud SQL with JBDC URL| Bold BI Docs
description: Learn the steps how to connect Google Cloud SQL using JDBC connection string (or URL) of MySQL or PostgreSQL databases in Embedded Bold BI Web designer.
canonical: "/faq/how-to-connect-google-cloud-sql-data-source-with-jdbc-connection/"
platform: bold-bi
documentation: ug
---
# How to connect Google Cloud SQL data source with JBDC connection string

The Bold BI application allows you to connect a Google Cloud SQL data source using JDBC connection string parameters.

## JDBC connection string

You cannot directly pass the JDBC URL in Bold BI, but you can connect to a Google Cloud SQL data source using the JDBC URL parameters. The general format of the JDBC connection string is as follows. 

`jdbc:<data source>://<server name or hostname>:<port>/<database name>`

## Connecting Google Cloud SQL with JDBC URL
 
1.  Refer to the [Choosing Google Cloud SQL data source documentation](/working-with-data-sources/data-connectors/google-cloud-sql/#choose-google-cloud-sql-data-source) for selecting  the data source from the connectors.

2.	After clicking on the data source, the **NEW DATA SOURCE** configuration panel opens.

3.	You need to configure the configuration panel in order to connect to the Google Cloud SQL data source. Google Cloud SQL supports `MySQL` and `PostgreSQL` database engines, so you can connect with either MySQL or PostgreSQL databases.

    Here, you have the JDBC URL of the `PostgreSQL` data source.
	
    `jdbc:postgresql://demoserver:5740/postgres`

    Here, the values for the `Server name`, `Port`, and `Database` in the JDBC connection string parameters above are specified for connecting the Google Cloud SQL data source with the PostgreSQL database engine in Bold BI. You can also set additional connection parameters using [this](/faq/how-to-enable-ssl-through-connection-parameters-for-postgresql-data-source/) documentation.

    ![Configuration panel](/static/assets/faq/images/configure-cloud-sql.png#max-width=55%)
	
4.	After connecting to the data source, drag and drop the required table from the table schema in the data design view page.
 
    ![Drag table](/static/assets/faq/images/drag-cloud-sql.png#max-width=100%)
	 
5.	Click the `Update` button to view the table data in the data grid.

    ![Update records](/static/assets/faq/images/update-cloud-sql.png#max-width=100%)
	
6.	Click `Save` to save the data source with a relevant name to [design a dashboard.](/working-with-dashboards/)

    ![Save data source](/static/assets/faq/images/save-cloud-sql.png#max-width=100%)
	