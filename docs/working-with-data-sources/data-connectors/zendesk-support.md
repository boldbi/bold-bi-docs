---
layout: post
title: Zendesk Support - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Zendesk Support web service through basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zendesk Support data source
The Bold BI dashboard designer supports connecting to Zendesk Support web services through the REST API. 

## Choose Zendesk Support data source

To configure the Zendesk Support data source, follow these steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zendesk Support** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/ZendeskSupport/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/ZendeskSupport/ChooseDS_Server.png)

## Create Zendesk Support data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow these steps to create a Zendesk Support data source.
1. Enter a name and description (optional) for the data source.
2. Choose The Extract Engine.
3. Enter the **HostName** for the connected account.
4. Click the **API Endpoints** dropdown box and choose the required endpoint.
5. Click the **Custom Url** to enter the URL manually. Refer to the [Zendesk Support API documentation](https://developer.zendesk.com/rest_api/docs/zendesk-apis/resources) for more details. 
6. Select the **GET** method for the REST API in the **Method** combo box.
7. In **Max Rows**, enter the maximum number of rows to be fetched from the Zendesk Support data source. This value is used to fetch the data from the Zendesk Sunshine data source using the pagination.
8. Choose a time interval for the **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
9. Select the **JSON** data type in the **Data Format** combo box.
10. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
11. Enter a valid Zendesk Support **Username** and **Password** to access the endpoints.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/ZendeskSupport/DataSourcesView.png)

## Extract Engine
You can connect to the data source using one of the following extract methods:
- **Bold BI Extract**: Data will be extracted and managed directly within Bold BI.
- **Data Hub**: Data extraction is handled through the Data Hub. An equivalent pipeline is created, utilizing the Data Hub’s Extract, Transform, Load (ETL) capabilities to filter, optimize, or transform the data, and to generate new tables.
- To view the equivalent pipeline created for data extraction, navigate to the Query Designer page and click on View Pipeline.

    ![Refresh Setting](/static/assets/working-with-datasource/images/View_Pipeline.png)

- When the data refresh is configured for data sources that uses the Data Hub Extract Engine, the refresh will be managed within the Data Hub.

You can also edit the connection information set using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only a limited amount of data on a single API request. To retrieve the necessary amount of data, you can set a value in this field. Pagination is handled internally and will fetch the required data.
</td>
</tr>
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. For instance, to get the specific user details, query the <i>/Show User</i> endpoint.
2. From the listed information get the id of the specific user.

Replace it in the URL to query particular conversations:

`https://yourhostname.zendesk.com/api/v2/users/<:id>.json`

### Sample queries

**All Users**

`https://yourhostname.zendesk.com/api/v2/users.json`

**All Groups**

`https://yourhostname.zendesk.com/api/v2/groups.json`

**All Organizations**

`https://yourhostname.zendesk.com/api/v2/organizations.json`


### Preview and data import
* Click the Preview & Connect to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Zendesk Support Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in the designer and click Connect.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table in the Query designer page.

   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/ZendeskSupport/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/ZendeskSupport/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)