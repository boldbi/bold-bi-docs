---
layout: post
title: Fusebill – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Fusebill web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Fusebill data source
Bold BI dashboard designer supports connecting Fusebill web services through REST API. 

## Choose Fusebill data source
To configure the Fusebill data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Fusebill** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Fusebill/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Fusebill/ChooseDS_Server.png)


## Create Fusebill data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Fusebill data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Fusebill REST API endpoint in the URL textbox. Refer the [Fusebill API documentation](https://developer.fusebill.com/reference) for more details.

    Example: [https://secure.fusebill.com/v1/customers/?pageNumber=0&pageSize=20&sortOrder=descending&sortExpression=createdTimestamp](https://secure.fusebill.com/v1/customers/?pageNumber=0&pageSize=20&sortOrder=descending&sortExpression=createdTimestamp)    

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched. This value is used to fetch the data via pagination.
5. Replace **&lt;:your_api_key&gt;** under Headers with a valid **API key**.
6. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
7. Select **JSON** data type in **Data Format** combo box.
8. Choose **None** under **Authentication Type**.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/Fusebill/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Key for connecting Fusebill data source?
1. Login to [Fusebill](https://admin.fusebill.com/Account/Login) account. Go to *Settings -> Integrations -> API Key*.
2. Use this *API Key* as **API Key** in Fusebill data source in Bold BI Dashboard.

   ![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/Fusebill/APIKey.png)

#### Additional information
<table width="600">
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

1. For instance, to get the specific customer details, query the <i>/customers</i> endpoint.
2. From the listed information get the ID of the specific customer.

Replace it in the URL to query a particular customer:

[https://secure.fusebill.com/v1/customers/&lt;:customer_id&gt;](https://secure.fusebill.com/v1/customers/%3c:customer_id%3e)

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.fusebill.com/reference)

### Sample queries
**Specific Customer Email Preferences**

[https://secure.fusebill.com/v1/customers/12345/CustomerEmailPreferences](https://secure.fusebill.com/v1/customers/12345/CustomerEmailPreferences)

**Subscription**

[https://secure.fusebill.com/v1/subscriptions/98765](https://secure.fusebill.com/v1/subscriptions/98765)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Fusebill Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Fusebill Rate Limits](https://developer.fusebill.com/reference#section-rate-limits)

[Fusebill Integration](https://www.boldbi.com/integrations/fusebill)