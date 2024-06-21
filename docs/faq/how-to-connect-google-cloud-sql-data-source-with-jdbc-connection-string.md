---
layout: post
title: How to connect Google Cloud SQL with JBDC URL| Bold BI Docs
description: Learn the steps how to connect Google Cloud SQL using JDBC connection string (or URL) of MySQL or PostgreSQL databases in Embedded Bold BI Web designer.
canonical: "/cloud-bi/faq/how-to-connect-google-cloud-sql-data-source-with-jdbc-connection/"
platform: bold-bi
documentation: ug
---
# How to connect Google Cloud SQL data source with JBDC connection string

Bold BI application allows you to connect Google Cloud SQL data source with JDBC connection string parameters.

## JDBC connection string

You cannot directly pass the JDBC URL in Bold BI, but you can connect to Google Cloud SQL data source using the JDBC URL parameters. The general format of JDBC connection string is mentioned as follows. 

`jdbc:<data source>://<server name or hostname>:<port>/<database name>`

## Connecting Google Cloud SQL with JDBC URL
 
1.  Refer to the [Choosing Google Cloud SQL data source documentation](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/google-cloud-sql/#choose-google-cloud-sql-data-source) for choosing the data source from the connectors.

2.	After clicking the data source, the **NEW DATA SOURCE** configuration panel opens.

3.	You need to configure the configuration panel to connect to the Google Cloud SQL data source. Since Google Cloud SQL supports `MySQL` and `PostgreSQL` database engines, you can connect with MySQL or PostgreSQL databases.

    Here, you have the JDBC URL of the `PostgreSQL` data source.
	
    `jdbc:postgresql://demoserver:5740/postgres`

    Here, the values for `Server name`, `Port`, and `Database` from the above JDBC connection string parameters for connecting the Google Cloud SQL data source with the PostgreSQL database engine in Bold BI are specified as follows. You can also set the additional connection parameters using [this](https://help.boldbi.com/embedded-bi/faq/how-to-enable-ssl-through-connection-parameters-for-postgresql-data-source/) documentation.

    ![Configuration panel](/static/assets/embedded/faq/images/configure-cloud-sql.png#max-width=55%)
	
4.	After connecting to the data source, drag and drop the required table from the table schema in the data design view page.
 
    ![Drag table](/static/assets/embedded/faq/images/drag-cloud-sql.png#max-width=100%)
	 
5.	Click the `Update` button to view the table data in the data grid.

    ![Update records](/static/assets/embedded/faq/images/update-cloud-sql.png#max-width=100%)
	
6.	Click `Save` to save the data source with a relevant name to [design a dashboard.](https://help.boldbi.com/embedded-bi/working-with-dashboards/)

    ![Save data source](/static/assets/embedded/faq/images/save-cloud-sql.png#max-width=100%)
	