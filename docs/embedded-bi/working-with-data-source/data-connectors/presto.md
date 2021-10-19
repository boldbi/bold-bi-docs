---
layout: post
title: Presto – Embedded BI Connector | Bold BI Documentation
description: Learn how to connect Presto SQL query engine with Bold BI Embedded and execute queries against data sources such as, MySQL, etc.
canonical: "/cloud-bi/working-with-data-source/data-connectors/presto/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Presto data source
Bold BI Dashboard Designer supports connecting Presto database through SQL Live Query (REST API).

## Choose Presto data source
To configure the Presto data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Presto** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Presto/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Presto/ChooseDS_server.png)

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

   ![Presto Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Presto/Presto_Connection.png)

In future, you can edit the connection information using [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

> **NOTE:**  To connect data source with **SSH**, enable the SSH check box in the **NEW DATA SOURCE** configuration panel and enter the required credentials.
![Enable SSH](/static/assets/embedded/working-with-datasource/images/enable-ssh.png#max-width=60%)
 
### Data Preview
1. Click **Connect** to connect the Presto server with configured details.
The schema represents the collection list that are retrieved from the Presto server. This dialog displays a list of schemas in treeview and its corresponding values.

   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    Either you can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Presto Integration](https://www.boldbi.com/integrations/presto?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiprestointegration)