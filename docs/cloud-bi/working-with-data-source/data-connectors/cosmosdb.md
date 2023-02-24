---
layout: post
title: Connect Azure Cosmos DB data in Dashboard | Cloud Bold BI Docs
description: Learn how to connect your Azure Cosmos DB data through MongoDB and create data source for dashboard configuration in Bold BI application for cloud.
canonical: "/cloud-bi/working-with-data-source/data-connectors/cosmosdb/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Cosmos DB data source

Bold BI dashboard designer supports connecting Cosmos DB database through MongoDB client. 

## Configuring Cosmos DB data source
To configure the Cosmos DB data source through the MongoDB data source, follow the given steps:
1. Sign in to your [Azure portal](https://portal.azure.com/) account and open your Cosmos DB account.
2. In the left panel of the account blade, click **Connection String.** It has all the information necessary to connect to Bold BI using the MongoDB data source, so make note of the host, port, SSL, username, and password.
3. To connect to Cosmos DB using the MongoDB connector, an Azure Cosmos DB account should be created with the [API type of MongoDB](https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-manage-database-account) from the Azure Portal.

> **NOTE:** 
>* As of writing, Cosmos DB has a limitation. The type of API cannot be changed after the Azure Cosmos DB account is created, so you either need to create a new account for a different API type or migrate data into a new database account from an older database account. Data migration steps are provided for each API type [for MongoDB](https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-manage-database-account).
>* The Azure Cosmos DB's API for MongoDB is compatible with MongoDB server version 3.2 and 3.6. There are some limitations in query language explained in [this documentation](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb/feature-support-36#query-language-support).

## Choose MongoDB data source by following the given steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **MongoDB** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/mongodb/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.
   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/mongodb/ChooseDS_server.png)

## Create Cosmos DB data source via MongoDB data source
Once you click the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create Cosmos DB data source through MongoDB data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Cosmos DB server or host name in the **Server Name** text box.
3. Enter its corresponding port in **Port** text box.
4. Choose **Enable SSL**, if the given Cosmos DB server configured with SSL Encryption.

   > **NOTE:**  Enable **Allow Self-Signed Certificates** if the Cosmos DB server configured to accept self signed certificates.
   
5. Choose the **Enable SSH**, if the given Cosmos DB server is configured with SSH Port.
6. Enter a valid SSH credentials in the **SSH Server name**, **SSH Port**, **SSH User name**, and **SSH Password**.
    ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/mongodb/SSH_credentials.png)
7. Choose **None** or **SCRAM** authentication in the **Authentication Mechanism** combo box.
8. Enter valid SCRAM credentials in the **Username** and **Password** text boxes if you choose SCRAM *Authentication Mechanism*.
9. Select the database you want to query in the listed database associated with the given Cosmos DB Server in the **Database** combo box.

   > **NOTE:**  If your Cosmos DB server reside inside a firewall, contact Bold BI support to get the list of IP addresses to be white-listed.
   
10. Choose a time interval for **Refresh Settings** using the combo box, to trigger a request to Cosmos DB server periodically to keep the data in sync with our dashboard.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/mongodb/DataSource.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
<tr>
<td>
Pagination
</td>
<td>
On initial connect Cosmos DB will extract a maximum of 10,000 records. Configure the Refresh option and it will extract all the tables and data for the chosen database on every refresh call.
</td>
</tr>
</table>

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Table(s) dialog opens. The schema represents the collection list that are retrieved from the Cosmos DB server. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/mongodb/MongoDBDS_Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/mongodb/MongoDBDS_QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Blog post](https://www.boldbi.com/blog/connect-mongodb-workloads-migrated-to-azure-cosmos-db)

[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[MongoDB Integration](https://www.boldbi.com/integrations/mongodb?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbimongodbintegration)