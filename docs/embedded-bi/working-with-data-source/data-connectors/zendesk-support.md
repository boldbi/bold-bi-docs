---
layout: post
title: Zendesk Support- Embedded BI Connector | Bold BI Docs
description: Learn how to create a data source by connecting to the Zendesk Support data source with the Bold BI Embedded.
canonical: "/cloud-bi/working-with-data-source/data-connectors/zendesk-support/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zendesk Support data source
The Bold BI dashboard designer supports connecting Zendesk Support web services through REST API. 

## Choose Zendesk Support data source

To configure the Zendesk Support data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zendesk Support** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/ZendeskSupport/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/ZendeskSupport/ChooseDS_Server.png)

## Create Zendesk Support data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Zendesk Support data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Click the **API Endpoints** dropdown box and choose the required endpoint.
4. Click the **Custom Url** to enter the URL manually. Refer to the [Zendesk Support API documentation](https://developer.zendesk.com/rest_api/docs/zendesk-apis/resources) for more details. 
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the Zendesk Support data source. This value is used to fetch the data from the Zendesk Sunshine data source using the pagination.
7. Choose a time interval for the **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
8. Select the **JSON** data type in the **Data Format** combo box.
9. Choose **Basic HTTP Authentication** in the **Authentication Type** combo box.
10. Enter a valid Zendesk Support **Username** and **Password** to access the endpoints.

![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/ZendeskSupport/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most of the REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
Pagination is handled internally and will fetch the amount of data you need.
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

https://yourhostname.zendesk.com/api/v2/users/<:id>.json

### Sample queries

**All Users**

https://yourhostname.zendesk.com/api/v2/users.json

**All Groups**

https://yourhostname.zendesk.com/api/v2/groups.json

**All Organizations**

https://yourhostname.zendesk.com/api/v2/organizations.json


### Preview and data import
* Click the Preview & Connect to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Zendesk Support Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in the designer and click Connect.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table in the Query designer page.

   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)