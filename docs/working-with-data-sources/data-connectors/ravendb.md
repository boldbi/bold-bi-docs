---
layout: post
title: RavenDB - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect RavenDB database with cloud-hosted Bold BI and create data source for dashboard configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to RavenDB data source
The Bold BI dashboard designer supports connecting to RavenDB database using the RavenDB client. 

## Choose RavenDB data source
To configure the RavenDB data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **RavenDB** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/RavenDB/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/RavenDB/ChooseDS_server.png)

## Create RavenDB data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a RavenDB data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid URL in the **Server URL** text box.
3. Select the database in the listed database associated with the given RavenDB Server in **Database** combo box.
4. Enter the valid query in **RQL Query** text box. To know more about RQL Query follow the link `https://ravendb.net/docs/article-page/5.4/csharp/indexes/querying/what-is-rql`.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the RavenDB data source. This value is used to fetch the data from the RavenDB data source using the pagination.
6. Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger a request to the RavenDB server and keep the data in sync with our dashboard.
7. Select **Enable SSL** if the given RavenDB server is configured with SSL Encryption.
8. Upload the PFX certificate file through the **Client Certificate** section. Please refer to the RavenDB documentation for instructions on how to create a certificate from RavenDB studio. To generate and upload the certificate, please follow this link `https://ravendb.net/docs/article-page/4.2/csharp/server/security/authentication/certificate-management`.
9. Enter your certificate passpharse in **Password** text box.
![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/RavenDB/Choose_client_password.png)

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/RavenDB/Choose_client_password.png)
You can also edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
<tr>
<td>
Pagination
</td>
<td>
Upon initial connection, RavenDB will extract a maximum of 1000 records. By configuring the Refresh option, it will extract all tables and data for the selected database on each refresh call.
</td>
</tr>
</table>

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the collection list that is retrieved from the RavenDB server.   This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag the table from the tree view on the left pane and drop it onto the Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/RavenDB/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/RavenDB/Dashboardparameters.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[RavenDB Integration](https://www.boldbi.com/integrations/ravendb?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiravendbintegration)
