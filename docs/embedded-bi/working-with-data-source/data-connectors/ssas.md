---
layout: post
title: Microsoft SSAS – Embedded BI Connector | Bold BI Learning
description: Learn how to connect Microsoft SQL Server Analysis Services (SSAS) with Bold BI Embedded and create data source for widget configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/ssas/"
platform: bold-bi
documentation: ug
---
 
# Connecting to Microsoft SQL Server Analysis Services(SSAS) data source
Bold BI supports connecting Microsoft SQL Server Analysis Services (SSAS) database using the SQL MDX Query (C# API).

## Choose a Microsoft SQL Server Analysis Services (SSAS) data source
To configure the Microsoft SQL Server Analysis Services (SSAS) data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Microsoft SQL Server Analysis Services** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source server](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/ChooseDS_server.png)

## Connect to Microsoft SQL Server Analysis Services (SSAS)
### Create a Microsoft SQL Server Analysis Services (SSAS) data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens.
Follow the given steps to create a Microsoft SQL Server Analysis Services (SSAS) data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid SSAS server (Syncfusion supports both multi-dimensional tabular mode connection) or host name in the **Server name** text box.
3. Choose **None**, **Windows Authentication**, or **Server Authentication** in Authentication Mechanism combo box.
4. Enter a valid SSAS server username and password, if you choose Server Authentication Mechanism.
5. Select the database you want to query in the listed database associated with the given SSAS Server in **Database** combo box.

   ![SSAS Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/SSAS_Connection.png)

In future, you can edit the connection information using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

### Cube customization
> **IMPORTANT:**  Code view and join operation is not supported and the buttons are always in disable state. And data preview is also not supported for the dragged cube.

1. Click **Connect** to connect the SSAS server with configured details. 
The available Cubes list is shown in treeview for the selected database that are retrieved from the SSAS server.

   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Treeview_schema.png)

2. In the data design view page, drag and drop the cube.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/QueryEditor.png)

3. Syncfusion only supports String to Date conversion. You can convert the string to date format and then use this column in the filter and widget operations.

   ![Column customization](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Column_customization.png)

4. Click **Save** to save the data source with a relevant name.

## Connect to expression designer
Expression designer is used to create a calculated field or column based on the field(s) or column(s) in selected cube(s).

   ![Expression Designer](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Expression_dialog.png)
 
### Numbers functions
Currently, Syncfusion supports only the number functions in expression designer. So, the measure column list and number functions are only listed in expression window.
Supported expression list:

1.	ABS
2.	ACOS
3.	ASIN 
4.	ATAN
5.	COS
6.	DEGREES
7.	EXP
8.	LOG
9.	PI
10.	POWER
11.	RADIANS
12.	ROUND
13.	SIGN
14.	SIN
15.	SQRT
16.	TAN

## Query filters or Initial filters 
Query filters can be used to filter data for the created data source. For example, if you want to create a data source to show share market data only for year 2018, then you can use this filter.

   ![Query filters](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Filter_Dialog.png)

You can configure filter by dragging the required columns to right side canvas.

   ![Filter DragDrop](/static/assets/embedded/working-with-datasource/data-connectors/images/ssas/Filter_DragDrop.png)

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[Microsoft SQL Server Analysis Services Integration](https://www.boldbi.com/integrations/microsoft-sql-server-analysis-services?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbissasintegration)