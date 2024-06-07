---
layout: post
title: How to connect BoldDesk Service in Cloud BI | Bold BI Docs
description: Learn how to connect BoldDesk service using basic http authentication through REST API endpoint with Bold BI Cloud and create powerful dashboards.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to BoldDesk data source
The Bold BI dashboard designer supports connecting to BoldDesk web services through REST API.

## Choose BoldDesk data source
To configure the BoldDesk data source, follow the below steps:
1. Click on the **Data Sources** option in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **BoldDesk** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/BoldDesk/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/BoldDesk/ChooseDS_server.png)

## Create BoldDesk data source
Once you click the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the below steps to create BoldDesk data source.
1. Enter a name and description (optional) for the data source.
2. Enter the **HostName** for the connected account.
3. Enter your **x-api-key** in the **API Key** text box for the connected account. Refer to [BoldDesk Document-Authentication](https://developer.bolddesk.com/api#section/Getting-Started/Authentication) for more details.
4. Click the **API Endpoints** dropdown box and choose the required endpoint.
5. Click the **Custom URL** to enter the URL manually. Refer to [BoldDesk API documentation](https://developer.bolddesk.com/api) for more details.
6. Select **GET** method for the REST API in the **Method** combo box.
7. In **Max Rows**, enter the maximum number of rows to be fetched from the BoldDesk data source. This value is used to fetch the data from the BoldDesk data source using pagination.
8. Choose a time interval for **Refresh Settings** using the combo box to trigger the REST API request periodically to keep the data in sync with our dashboard. 
9. Choose **None** in the **Authentication Type** combo box.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/BoldDesk/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/BoldDesk/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/BoldDesk/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

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

1. To enter the URL manually, click on **Custom URL**, then enter the URL. Refer to the [BoldDesk API documentation](https://developer.bolddesk.com/api) for more details.

2. For example, if you need to retrieve a specific ticket, you must replace your Ticket ID in the following API in the Custom URL.

3. Substitute it in the URL to retrieve specific conversations:

    `https://your-domain/api/v1/tickets/<:ticketid>`

For further information on the API endpoints provided for this data source, consult their official [API Documentation](https://developer.bolddesk.com/api)

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

Not all BoldDesk resources support Incremental refresh; only the following resources work with Incremental refresh.

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

>**NOTE:**  If the incremental identifier columns are not included in the data sources, then incremental refresh cannot be processed, and a full refresh occurs at that time.
   ![RefreshPreview](/static/assets/working-with-datasource/data-connectors/images/BoldDesk/RefreshPreview.png)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Table(s) dialog opens. The schema represents the key fields of JSON data retrieved from the BoldDesk Rest API request. This dialog displays a list of schemas in a tree view and its corresponding values in a grid for preview. Select the required schema(s) from the tree view to use in the designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[BoldDesk API Limits](https://developer.bolddesk.com/api#section/Getting-Started/Rate-Limiting)