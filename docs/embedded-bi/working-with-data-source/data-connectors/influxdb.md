---
layout: post
title: Connect to InfluxDB data source | Embedded BI Dashboard
description: Learn how to create data source by connecting to the InfluxDB data source in Embedded BI Dashboard Designer
canonical: "/cloud-bi/working-with-data-source/data-connectors/influxdb/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to InfluxDB data source
The Bold BI Dashboard Designer supports connecting InfluxDB database using SQL Live Query (C# API).

**Supported Server Version:** InfluxDB v1.8

## Choose InfluxDB data source
To configure the InfluxDB data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **InfluxDB** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/ChooseDS_server.png)

## Connect to InfluxDB
### Create InfluxDB data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create an InfluxDB data source: 
1. Enter a name and description (optional) for the data source. 
2. Enter a valid InfluxDB server or host name in the **ServerName** text box.
3. Enter the port, in which the server is running in the **Port** text box.
4. Choose **None** or **Server Authentication** in the Authentication Mechanism combo box.
5. Enter a valid InfluxDB username and password, if you choose a Server Authentication Mechanism
6. Select a database that you want to query in the listed database associated with the given InfluxDB server in the database combo box.

   ![InfluxDB Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Connection.png)

### Data Preview
1. Click **Connect** to connect the InfluxDB server with configured details. 
The schema represents the collection list retrieved from the InfluxDB server. This dialog displays a list of schemas in a tree view and their corresponding values. Measurements will be listed as tables.

   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/QueryEditor.png)

    You can use the  Code View option for passing a query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

### Here is the Bold BI supported features in InfluxDB connector
> **IMPORTANT:**  InfluxDB is a time series database, so few limitations for InfluxDB connector in Bold BI live mode connection.

> **NOTE:**  Joins are not supported for InfluxDB data source in Bold BI.

### Group by and Order by
InfluxDB is a time series database. The data can be ordered only by using the time column and can be grouped only by time intervals.

   ![InfluxDB Group by](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Groupby.png)
  
### Expressions
Expressions can be created for numeric field(s) and calculated field(s) in the selected table.

**Supported functions**

<table>   
   <tr>
   <td>
   Function type </td><td>
   Function name
</td></tr>
   <tr>
   <td>
   Numbers</td><td>
   ABS, ACOS, ASIN, ATAN, COS, COT, DEGREES, EXP, LOG, PI, POWER, RADIANS, ROUND, SIN, SQRT, TAN</td></tr>
   <tr>
   <td>
   Aggregation</td><td>
   AVG, COUNT, COUNTD, MAX, MIN, STDEV, SUM</td></tr>
   <tr>
   <td>
   Logical</td><td>
   NOT</td></tr>
   <tr>
   <td>
   Row</td><td>
   RUNNINGCOUNT, RUNNINGAVG RUNNINGMAX, RUNNINGMIN, RUNNINGSUM</td></tr>
   </table>

   ![InfluxDB Expressions](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Expressions.png)

### Filters
You can only filter numeric columns in the query filters in query designer page.

   ![InfluxDB Filters](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Filters.png)

   ![InfluxDB Filters1](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/Influxdb_Filters1.png)
 
### Widget level filtering
You can filter data based on year, month, week, day, and hour for time column only using the Relative Date Filtering.

   ![InfluxDB WidgetLevelFiltering](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/Influxdb_WidgetLevelFiltering.png)
 
[Relative date filtering](/embedded-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-date-column)

> **NOTE:**  You cannot filter measure columns in the widget level filtering. 

### Top N filters
The data can be applied in the top and bottom filters for time column based on the measure fields in the selected list.

   ![InfluxDB Top N](/static/assets/embedded/working-with-datasource/data-connectors/images/Influxdb/Influxdb_TopN.png)

   (Time column has been filtered top 5 values based on Sum of Alloc)


## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)