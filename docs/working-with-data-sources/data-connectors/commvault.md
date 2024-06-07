---
layout: post
title: Commvault Data Connector – Cloud BI | Bold BI Documentation
description: Learn how to connect Commvault web service through basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Commvault data source
The Bold BI dashboard designer supports connecting to Commvault web services through the REST API. 

## Choose Commvault data source

To configure the Commvault data source, follow the below steps:

1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Commvault** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/commvault/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/commvault/ChooseDS_Server.png)

## Create Commvault data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Commvault data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Click on the **API Endpoints** down drop box and choose the required endpoint.
4. Enter a valid REST API endpoint in the URL textbox. Refer to the [Commvault API documentation](https://documentation.commvault.com/v11/essential/rest_api_overview.html) for more details.
5. Click on **Custom Url** to enter the URL manually.
6. Select the **GET** method for the REST API in the **Method** combo box.
7. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
8. Select **JSON** data type in the **Data Format** combo box.
9. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
10. Enter a valid Commvault **Username** and **Password** to access the endpoints.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/commvault/DataSourcesView.png)

You can also edit the connection information that is set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. Query the <i>All schedules</i> endpoint.
2. Retrieve the client ID for the connected account from the listed information.

Replace it in the URL to query a particular conversations:

`http://<yourhostname>/SearchSvc/CVWebService.svc/Schedules?clientId=<:client_id>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://documentation.commvault.com/commvault/v11/article?p=45540.htm)

### Sample queries

**All Clients**

`http://<yourhostname>/SearchSvc/CVWebService.svc/Client`

**Schedule Policy**

`http://<yourhostname>/SearchSvc/CVWebService.svc/SchedulePolicy`

**Virtual machine**

`http://<yourhostname>/SearchSvc/CVWebService.svc/VM`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Commvault Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/commvault/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/commvault/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)