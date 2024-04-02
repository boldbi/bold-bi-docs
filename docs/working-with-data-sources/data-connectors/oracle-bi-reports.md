---
layout: post
title: Oracle BI Reports - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Oracle BI Reports web service through basic HTTP authentication with cloud-hosted Bold BI and create data source for widget configuration. 
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Oracle BI Reports data source

Bold BI dashboard designer supports connecting `Oracle BI Reports` web services through Report services API.

## Choose Oracle BI Reports data source

To configure the `Oracle BI Reports` data source, follow these steps:

1. Click the `Data Sources` button in the configuration panel to add a new data connection.

   ![Click data sources icon](/static/assets/working-with-datasource/data-connectors/images/OracleBIReports/Click_DataSource_Icon.png)

2. Click `CREATE NEW` to launch a new connection from the connection panel.

3. Select the `Oracle BI Reports` connection in the connection panel.

   ![Select the Oracle BI reports data source](/static/assets/working-with-datasource/data-connectors/images/OracleBIReports/Select_OracleBIReports.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Creating data source from server page](/static/assets/working-with-datasource/data-connectors/images/OracleBIReports/Select_OracleBIReports_ServerPage.png)

## Create Oracle BI Reports data source

Once you click the data source, the `NEW DATA SOURCE` configuration panel opens. Follow these steps to create an Oracle BI Reports data source.

1. Enter a `name` and `description` (optional) for the data source.

2. Enter the valid `Base URL`, `Username`, and the `Password`. 

3. The `Choose Report` section option will become visible and list out the Oracle catalogs in the tree view format, and you can expand the tree view to select the report you want to connect. 

   ![Choose report from the tree view](/static/assets/working-with-datasource/data-connectors/images/OracleBIReports/DataSource_ChooseReport.png)

4. If the report has parameters, they will be listed in the `Parameters` section, and you can enter valid values if needed.

   ![Parameters section](/static/assets/working-with-datasource/data-connectors/images/OracleBIReports/DataSource_Parameters.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information

<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

#### Preview and data import

* Click `Preview & Connect` to connect with the configurations set.

* The `Choose Table(s)` dialog opens. The schema represents the key fields of XML data retrieved from Oracle BI reports Report Service API request. This dialog displays a list of schemas in the tree view and its corresponding values in grid for preview. Select required schema(s) from the tree view to use in designer and click `Connect`.

   ![Select required schemas and connect](/static/assets/working-with-datasource/data-connectors/images/OracleBIReports/DataSource_PreviewTable.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table in Query designer page.

   ![Drag the required tables into the query designer](/static/assets/working-with-datasource/data-connectors/images/OracleBIReports/DataSource_SelectTables.png)

Click `Save` to save the data source with a relevant name.

## Related links

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)