---
layout: post
title: How to connect BoldDesk Service in Cloud BI | Bold BI Docs
description: Learn how to connect BoldDesk service using basic http authentication through REST API endpoint with Bold BI Cloud and create powerful dashboards.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to BoldDesk data source
The Bold BI dashboard designer supports connecting BoldDesk web services through REST API. 

## Choose BoldDesk data source
To configure the BoldDesk data source, follow the below steps:
1. Click the **Data Sources** option in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **BoldDesk** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/BoldDesk/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/BoldDesk/ChooseDS_server.png)

## Create BoldDesk data source
Once you click the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the below steps to create BoldDesk data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Enter your **x-api-key** in **API Key** text box for the connected account. Refer to [BoldDesk Document-Authentication](https://developer.bolddesk.com/api#section/Getting-Started/Authentication) for more details.
4. Click the **API Endpoints** dropdown box and choose the required endpoint.
5. Click the **Custom URL** to enter the URL manually. Refer to [BoldDesk API documentation](https://developer.bolddesk.com/api) for more details.
6. Select **GET** method for the REST API in **Method** combo box.
7. In **Max Rows**, enter the maximum number of rows to be fetched from the BoldDesk data source. This value is used to fetch the data from the BoldDesk data source using the pagination.
8. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
9. Choose **None** in the **Authentication Type** combo box.

    ![DataSourcesView](/static/assets/cloud/working-with-datasource/data-connectors/images/BoldDesk/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

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
Period before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
</td>
</tr>
</table>

### Setting up the URL

1. For entering the URL manually, click the **Custom URL**, then enter the URL. Refer to the [BoldDesk API documentation](https://developer.bolddesk.com/api) for more details.

2. For instance, if you need to get the specific ticket, you need to replace your Ticket Id in the following API in Custom URL.

3. Replace it in the URL to query a particular conversations:

    `https://your-domain/api/v1/tickets/<:ticketid>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.bolddesk.com/api)

### Sample queries

**Get all Brands**

`https://your-domain/api/v1/brands`

**Get Contact by Id**

`https://your-domain/api/v1/contacts/<:contactId>`

### Data Refresh Modes

<table>
<tr>
<td>
Full refresh
</td>
<td>
During full refresh, all the data will be pulled for the selected BoldDesk resource and replaces the existing dataset completely.
</td>
</tr>
<tr>
<td>
Incremental refresh
</td>
<td>
During incremental refresh, only the updated data alone will be pulled for the selected BoldDesk resource and appended or updated into the existing dataset. So, the refresh will be faster and consume less memory than the Full refresh.
</td>
</tr>
</table>

Not all BoldDesk resources supports Incremental refresh, only following resources works on Incremental refresh.

<table>
   <tr>
      <th scope="col">Resource</th>
      <th scope="col">URL</th>
      <th scope="col">Incremental identifier columns</th>
   </tr>
   <tr>
      <td>All Tickets</td>
      <td>https://your-domain/api/v1/tickets</td>
      <td>ticketId, lastUpdatedOn</td>
   </tr>
   <tr>
      <td>All Contact</td>
      <td>https://your-domain/api/v1/contacts</td>
      <td>userId, lastModifiedOn</td>
   </tr>
   <tr>
      <td>All Contact Groups</td>
      <td>https://your-domain/api/v1/contact_groups</td>
      <td>contactGroupId, lastModifiedOn</td>
   </tr>
   <tr>
      <td>All Linked Items</td>
      <td>https://your-domain/api/v1/integrations/linkeditems</td>
      <td>ticketId, updatedOn</td>
   </tr>
</table>

>**NOTE:**  If the incremental identifier columns are not included in data sources, then it cannot process incremental refresh, so full refresh happens at that time.
   ![RefreshPreview](/static/assets/cloud/working-with-datasource/data-connectors/images/BoldDesk/RefreshPreview.png)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from BoldDesk Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[BoldDesk API Limits](https://developer.bolddesk.com/api#section/Getting-Started/Rate-Limiting)