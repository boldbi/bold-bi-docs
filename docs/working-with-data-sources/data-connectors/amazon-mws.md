---
layout: post
title: Amazon MWS - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Amazon MWS web service through REST API endpoint with cloud-hosted Bold BI and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to the Amazon MWS Database
The Bold BI dashboard designer supports connecting the Amazon MWS web services using the REST API.

## Choose Amazon MWS data source
To configure the Amazon MWS data source, follow these steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

     ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Amazon MWS** connection in the connection panel.

     ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/AmazonMWS/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.
     ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/AmazonMWS/ChooseDS_server.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

## Create Amazon MWS data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create an Amazon MWS data source.
1. Enter a name and description (optional) for the data source.
2. Choose the region for your account accessing the market place.
3. Select the operation for depends upon your data needs and also, you can use the custom url for the datasource connection

     Example Custom Order API: `https://mws.amazonservices.ca/Orders/2013-09-01?AWSAccessKeyId=<:MWSaccesID>&Action=ListOrders&CreatedAfter=2020-04-30T18%3A30%3A00Z&MWSAuthToken=<:yourmwsauthtoken>&MarketplaceId.Id.1=ATVPDKIKX0DER&SellerId=<:sellerId>&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2020-05-27T09%3A59%3A36Z&Version=2013-09-01`

4. Select the **POST** method for the REST API in the **Method** combo box.
5. In **Max Rows**, enter the maximum number of rows to be fetched from the Amazon MWS data source. This value is used to fetch the data from the Amazon MWS data source using the pagination.
6. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with your dashboard.
7. Select the **XML** data type in the **Data Format** combo box.
8. Enter a valid **SellerID**,**MWSAuthToken**,**AWS accesskeyId**, and **SecretKey** to access the endpoint in your account.

## Connecting using Custom URL details

1. Open Scratch pad URL - https://mws.amazonservices.ca/scratchpad/index.html 

2. Select the API Section, Operation, and provide authentication values. 

3. Once you submit the request, click **Request Details** from the response page.

![scratch pad url details](/static/assets/working-with-datasource/data-connectors/images/AmazonMWS/scratchpad.png)

4. Copy the values of **String to Sign** except the Request Method Type. Construct the values using the https:// and create a request without modifying any values in String to sign.

![string to sign details](/static/assets/working-with-datasource/data-connectors/images/AmazonMWS/stringtosign.png)

5. You can use the constructed URL in the Bold BI Amazon MWS connector custom URL text box.

![constructed url details](/static/assets/working-with-datasource/data-connectors/images/AmazonMWS/constructedurl.png)

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
1. Orders API have to enter the **CreateAfter** and **MarketplaceId** parameters in header.

    ![Order parameter](/static/assets/working-with-datasource/data-connectors/images/AmazonMWS/Order_parameter.png)

2. MatchingProducts API have to enter **marketplaceId** and **Query** parameters in header.

    ![product paramter](/static/assets/working-with-datasource/data-connectors/images/AmazonMWS/Product_parameter.png)

3. You can prepare a custom URL using the [Amazon Scratchpad] [https://docs.developer.amazonservices.com/en_UK/scratchpad/Scratchpad_Using.html](https://docs.developer.amazonservices.com/en_UK/scratchpad/Scratchpad_Using.html)

For more information on the API endpoints available for this data source, refer to their official [API Documentation]( http://docs.developer.amazonservices.com/en_US/dev_guide/index.html)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the Amazon MWS Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in designer and click **Connect**.

    ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.

    ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)
