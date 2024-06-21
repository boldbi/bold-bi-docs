---
layout: post
title: How to connect polymorphic databases? | Bold BI Docs
description: Learn the steps of how to connect polymorphic databases using Google Cloud SQL in Embedded Bold BI's Web designer to create & embed powerful dashboards.
canonical: "/cloud-bi/faq/how-to-connect-polymorphic-databases-in-bold-bi/"
platform: bold-bi
documentation: ug
---

# How to connect polymorphic databases in Bold BI

Bold BI application allows you to connect polymorphic databases in Bold BI. Polymorphic databases can create a single instance and access multiple databases.

## Supported polymorphic databases in Bold BI

<style>
td {
  text-align: center;
}
#alignList {
  text-align: left;
}
</style>

<table>
<th>
Providers
</th>
<th>
Data connectors
</th>
<th>
Database Engines
</th>
<tr>
<td rowspan="2">AWS</td>
<td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/amazon-aurora/">Amazon Aurora</td>
<td id="alignList">
•	MySQL <br />
•	PostgreSQL
</td>
</tr>
<tr>
<td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/amazon-rds/">Amazon RDS</td>
<td id="alignList">
•	Amazon Aurora MySQL <br />
•	Amazon Aurora PostgreSQL <br />
•	MySQL <br />
•	MariaDB <br />
•	Oracle <br />
•	PostgreSQL <br />
•	SQL server
</td>
</tr>
<tr>
<td>Google</td>
<td><a href="https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/google-cloud-sql/">Google Cloud SQL</td>
<td id="alignList">
•	MySQL <br />
•	PostgreSQL
</td>
</tr>
</table>

## Connecting polymorphic databases in Bold BI using Google Cloud SQL

1.	Connect your [Google Cloud SQL](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/google-cloud-sql/) data source with MySQL database engine as follows.
   
	![Google Cloud SQL](/static/assets/embedded/faq/images/cloud-mysql.png#max-width=60%)
	
2.	After connecting, you can work with the required tables, views, or stored procedures by dragging and dropping them into the data design view page.

3.	Later, you can change the existing database engine of the Google Cloud SQL data source by clicking the `edit connection` button as follows.

    ![Edit connection](/static/assets/embedded/faq/images/edit-connection.png#max-width=100%)
	
4.	After clicking, the edit connection dialog opens where you can change the database engine from `MySQL` to `PostgreSQL` and configure with the PostgreSQL credentials as follows and click `connect.`

    ![Edit connection panel](/static/assets/embedded/faq/images/edit-connection-panel.png#max-width=60%)
	
5.	You can work with the required tables, views, or stored procedures after connecting with the PostgreSQL database engine and click `Save` to save the data source with a relevant name to proceed with [designing a dashboard.](https://help.boldbi.com/embedded-bi/working-with-dashboards/)

    ![Save option](/static/assets/embedded/faq/images/save-google-cloud.png#max-width=100%)
	
6.	Here, you have created a single instance with the Google Cloud SQL connector and connected it to different database engines .

### Related links

[Editing a Data Connection](https://help.boldbi.com/embedded-bi/working-with-data-source/editing-a-data-connection/)

[Data Transformation](https://help.boldbi.com/embedded-bi/working-with-data-source/transforming-data/)

[Dashboard Designer Walk Through](https://help.boldbi.com/embedded-bi/getting-started/quick-start/)
