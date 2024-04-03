---
layout: post
title: MongoDB – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect MongoDB database with Bold BI Cloud and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to MongoDB data source
Bold BI dashboard designer supports connecting MongoDB database through MongoDB client. 

## Choose MongoDB data source
To configure the MongoDB data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **MongoDB** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/mongodb/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/mongodb/ChooseDS_server.png)

## Advanced
In Advanced category, It will Redirect to the Bold ETL. Refer [Bold ETL](/managing-resources/manage-data-sources/#advanced-category).

## Basic
In Basic Category, It will act as the connector in Bold BI. And need to follow the below steps.

## Create MongoDB data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create MongoDB data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid MongoDB server/host name in the **Server Name** text box.
3. Enter its corresponding port in **Port** text box.
4. Choose **Enable SSL**, if the given MongoDB server configured with SSL Encryption.

   > **NOTE:**  Enable **Allow Self-Signed Certificates** if the MongoDB server configured to accept self signed certificates.

5. Choose **None** or **SCRAM** authentication in **Authentication Mechanism** combo box.
6. Enter valid SCRAM credentials in **Username** and **Password** text boxes, if you choose SCRAM *Authentication Mechanism*.
7. Select the database you want to query in the listed database associated with the given MongoDB Server in **Database** combo box.

   > **NOTE:**  If your MongoDB server reside inside a firewall, contact Bold BI support to get the list of IP addresses to be white-listed.
   
8. Choose a time interval for **Refresh Settings** using the combo box, to trigger a request to MongoDB server periodically to keep the data in sync with our dashboard.  

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Preview and Data Import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the collection list that are retrieved from the MongoDB server.   This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/mongodb/MongoDBDS_Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/mongodb/MongoDBDS_QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/mongodb/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/mongodb/Dashboardparameter.png)

>**Note:** Refer the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.


### Additional Information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
<tr>
<td>
Pagination
</td>
<td>
On initial connect MongoDB will extract a maximum of 10,000 records. Configure the Refresh option and it will extract all the tables and data for the chosen database on every refresh call.
</td>
</tr>
</table>

## Related links
[Blog post](https://www.boldbi.com/blog/connect-mongodb-workloads-migrated-to-azure-cosmos-db)

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[MongoDB Integration](https://www.boldbi.com/integrations/mongodb?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimongodbintegration)

[How to connect MongoDB by direct query mode in Bold BI](https://www.boldbi.com/kb/faq/how-to-connect-mongodb-by-direct-query-mode-in-bold-bi)
