---
layout: post
title: Trino – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Trino SQL query engine with Bold BI Cloud and execute queries against data sources such as, MySQL, etc.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Trino data source Via Presto 
The Bold BI dashboard designer supports connecting to the Trino database through SQL Live Query (REST API). It is available in the Presto category type.

## Choose Trino data source
To configure the Trino data source Via Presto, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Presto** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Presto/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Presto/ChooseDS_server.png)

## Connect to Trino
### Create Trino data source Via Presto
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create a Trino data source:
1. Enter a name and description (optional) for the data source.
2. In the Connection Type dropdown, select Trino.
3. Enter a valid Trino server or host name in the Server Name text box.
4. Enter its corresponding port in Port text box.
5. Enter the Catalog Name from below [Trino Connectors Link](https://trino.io/docs/current/connector.html).
6. Choose either **None** or **BASIC authentication** in the Authentication Mechanism combo box.
7. Enter a valid Trino user name and password if you choose Basic Authentication Mechanism.
8. Select the database you want to query from the listed databases associated with the given Trino Server in the Database combo box.

   ![Trino Connection](/static/assets/working-with-datasource/data-connectors/images/Trino/Trino_Connection.png)

In future, you can edit the connection information using [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

> **NOTE:**  To connect a data source with **SSH**, enable the SSH check box in the **NEW DATA SOURCE** configuration panel and enter the required credentials.

![Enable SSH](/static/assets/working-with-datasource/data-connectors/images/Trino/image.png#max-width=60%)

### Data Preview
1. Click **Connect** to connect the Trino server with configured details.
The schema represents the collection list that is retrieved from the Trino server. This dialog displays a list of schemas in a tree view and their corresponding values.

   ![Treeview schema](/static/assets/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    Either you can use the Code View options for passing query to display data.

   ![Codeview mode](/static/assets/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Trino/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Trino/DashboardParameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.


## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
