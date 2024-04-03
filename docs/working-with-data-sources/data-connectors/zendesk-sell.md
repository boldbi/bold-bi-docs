---
layout: post
title: Zendesk Sell – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Zendesk Sell web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zendesk Sell data source
Bold BI dashboard designer supports connecting Zendesk Sell web services through REST API. 

## Choose Zendesk Sell data source
To configure the Zendesk Sell data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zendesk Sell** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/ZendeskSell/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/ZendeskSell/ChooseDS_Server.png)


## Create Zendesk Sell data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Zendesk Sell data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down drop box and choose the required endpoint.
3. Click **Custom Url** to enter the URL manually. Refer the [Zendesk Sell API documentation](https://developers.getbase.com/docs/rest/articles/introduction) for more details.
4. Select **GET** method for the REST API in **Method** combo box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the Zendesk Sell data source. This value is used to fetch the data from Zendesk Sell data source via pagination.
6. Replace your **App Token** in the headers (i.e Bearer <Your App token here>).
7. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select **JSON** data type in **Data Format** combo box.
9. Set **Authentication type** as *None*.

   ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/ZendeskSell/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get Access Token for Zendesk Sell?
To get your access token, follow the steps defined in [Zendesk Sell Documentation](https://developers.getbase.com/docs/rest/articles/first_call#generate-access-token)

   ![Access Token](/static/assets/working-with-datasource/data-connectors/images/ZendeskSell/AccessToken.png)

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
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Setting up the URL

1. Query the <i>/leads</i> endpoint.
2. From the listed information, get the ID of the specific lead.

Replace it in the URL to query a particular lead:

[https://api.getbase.com/v2/leads/&lt;:lead_id&gt;](https://api.getbase.com/v2/leads/%3c:lead_id%3e)

### Sample queries
**Orders**

[https://api.getbase.com/v2/orders](https://api.getbase.com/v2/orders)

**Retrieve all *completed and related type* tasks of specific resource type**

[https://api.getbase.com/v2/tasks?type=related&resource_type=leads&completed=true](https://api.getbase.com/v2/tasks?type=related&resource_type=leads&completed=true)

**Deal Sources**

[https://api.getbase.com/v2/deal_sources](https://api.getbase.com/v2/deal_sources)


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Zendesk Sell Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/ZendeskSell/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/ZendeskSell/Dashboardparameter.png)

>**Note:** Refer the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Zendesk Sell Rate Limits](https://developers.getbase.com/docs/rest/articles/rate_limits)

[Zendesk Sell Integration](https://www.boldbi.com/integrations/zendesk-sell?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbizendesksellintegration)