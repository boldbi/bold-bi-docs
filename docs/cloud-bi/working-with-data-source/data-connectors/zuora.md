---
layout: post
title: Create Zuora data source in Cloud BI Connector | Bold BI Docs
description: Learn how to connect Zuora data through basic HTTP authentication with Bold BI to create a data source for the dashboards in your cloud application.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zuora data source
The Bold BI dashboard designer connects the Zuora web services through REST API. 

## Choose Zuora data source

To configure the Zuora data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zuora** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Zuora/ChooseDS.png)

     > **NOTE:** You can also create a data source from the home page by clicking the Data Sources menu from the left menu panel, and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Zuora/ChooseDS_Server.png)

## Create Zuora data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create a Zuora data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Click the **API Endpoints** dropdown box and choose the required endpoint.
4. Click the **Custom URL** to enter the URL manually. Refer to the [Zuora API documentation](https://www.zuora.com/developer/api-reference/) for more details. 
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows fetched from the Zuora data source. This value is used to fetch the data from the Zuora data source using the pagination.
7. Replace your **apiAccessKeyId** with your username and **apiSecretAccessKey** with your password in the headers. Refer to the [Zuora Keys Authentication](https://www.zuora.com/developer/api-reference/#section/Authentication/Other-Supported-Authentication-Schemes).
8. Choose a time interval for the **Refresh Settings** using the combo box to periodically trigger the Rest API request to keep the data in sync with your dashboard.   
9. Select the **JSON** data type in the **Data Format** combo box.
10. Choose **None** in the **Authentication Type** combo box.

    ![Data source preview](/static/assets/cloud/working-with-datasource/data-connectors/images/Zuora/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only fewer data on a single API request. To pull the amount of data you need, set a value in this field.  
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

1. For instance, to get the specific order details, query the <i>/Show Order</i> endpoint.
2. From the listed information, get the id of the specific order.

Replace it in the URL to query particular conversations:

`https://yourhostname/v1/orders/<:orderNumber>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://www.zuora.com/developer/api-reference/)

### Sample queries

**All Orders**

`https://yourhostname/v1/orders`

**All Accounting Codes**

`https://yourhostname/v1/accounting-codes`


### Preview and data import
* Click the **Preview & Connect** to connect with the configurations set.
* The Choose Tables dialog opens. The schema represents the key fields of JSON data retrieved from the Zuora Rest API request. This dialog displays a list of schemas in the treeview and their corresponding values in the grid for preview. Select required schema(s) from the treeview to use in the designer and click Connect.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag from the tree view table in the left pane and drop the table on the Query designer page.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)