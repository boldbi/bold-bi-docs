---
layout: post
title: Commvault - Cloud BI Connector | Bold BI Documentation
description: Learn how to create data source by connecting to the Commvault data source with Bold BI Dashboard Designer
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Commvault data source
Bold BI dashboard designer supports connecting Commvault web services through REST API. 

## Choose Commvault data source

To configure the Commvault data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Commvault** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/commvault/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/commvault/ChooseDS_Server.png)

## Create Commvault data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Commvault data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Click the **API Endpoints** down drop box and choose the required endpoint.
4. Enter a valid REST API endpoint in the URL textbox. Refer the [Commvault API documentation](https://documentation.commvault.com/commvault/v11/article?p=45540.htm) for more details.
5. Click **Custom Url** to enter the URL manually.
6. Select **GET** method for the REST API in **Method** combo box.
7. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select **JSON** data type in **Data Format** combo box.
9. Choose **Basic HTTP Authentication** in **Authentication Type** combo box.
10. Enter a valid Commvault **Username** and **Password** to access the endpoints.

![Data source preview](/static/assets/cloud/working-with-datasource/data-connectors/images/commvault/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. Query the <i>All schedules</i> endpoint.
2. From the listed information get the client id for the connected account.

Replace it in the URL to query a particular conversations:

`http://<yourhostname>/SearchSvc/CVWebService.svc/Schedules?clientId=<:client_id>`

### Sample queries

**All Clients**

`http://<yourhostname>/SearchSvc/CVWebService.svc/Client`

**Schedule Policy**

`http://<yourhostname>/SearchSvc/CVWebService.svc/SchedulePolicy`

**Virtual machine**

`http://<yourhostname>/SearchSvc/CVWebService.svc/VM`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Commvault Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/bold-bi-walk-through/)