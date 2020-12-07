---
layout: post
title: Presto – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Presto SQL query engine with Bold BI Cloud and execute queries against data sources such as, MySQL, etc.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Presto data source
Bold BI Dashboard Designer supports connecting Presto database through SQL Live Query (REST API).

## Choose Presto data source
To configure the Presto data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Presto** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Presto/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Presto/ChooseDS_server.png)

## Connect to Presto
### Create Presto data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create a Presto data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid Presto server or host name in the Server Name text box.
3. Enter its corresponding port in Port text box.
4. Enter the Catalog Name from below Presto Connectors Link.
https://prestodb.github.io/docs/current/connector
5. Choose **None** or **BASIC authentication** in Authentication Mechanism combo box.
6. Enter a valid Presto user name and password if you choose Basic Authentication Mechanism.
7. Select the database you want to query in the listed database associated with the given Presto Server in Database combo box.

   ![Presto Connection](/static/assets/cloud/working-with-datasource/data-connectors/images/Presto/Presto_Connection.png)

In future, you can edit the connection information using [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

### Data Preview
1. Click **Connect** to connect the Presto server with configured details.
The schema represents the collection list that are retrieved from the Presto server. This dialog displays a list of schemas in treeview and its corresponding values.

   ![Treeview schema](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    Either you can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/cloud/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/bold-bi-walk-through/)

[Presto Integration](https://www.boldbi.com/integrations/presto?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiprestointegration)