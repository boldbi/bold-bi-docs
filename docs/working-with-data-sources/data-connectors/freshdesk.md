---
layout: post
title: Freshdesk – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Freshdesk service using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Freshdesk data source
The Bold BI dashboard designer supports connecting to Freshdesk web services through the REST API. 

## Choose Freshdesk data source
To configure the Freshdesk data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Freshdesk** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/freshdesk/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/freshdesk/ChooseDS_server.png)

## Create Freshdesk data source
Once you click the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Freshdesk data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Freshdesk REST API endpoint in the URL textbox. Refer to the [Freshdesk API documentation](https://developers.freshdesk.com/api/) for more details.

    Example: `https://<:your-domain>.freshdesk.com/api/v2/tickets`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Freshdesk data source.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** in **Authentication Type** combo box.
8. Enter a valid **API Key** to access the endpoint in your account. To obtain an API key in Freshdesk , refer to the [Freshdesk API documentation](https://support.freshdesk.com/en/support/solutions/articles/215517-how-to-find-your-api-key) for more details.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/freshdesk/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Setting up the URL

1. Query the <i>/tickets</i> endpoint.
2. From the information provided, obtain the specific ticket ID.

Replace it in the URL to query a particular conversations:

`https://myaccount.freshdesk.com/api/v2/tickets/<ticket-id>/conversations`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developers.freshdesk.com/api/)

### Sample queries

**Contacts**

`https://myaccount.freshdesk.com/api/v2/contacts`

**Agents**

`https://myaccount.freshdesk.com/api/v2/agents`

**Roles**

`https://myaccount.freshdesk.com/api/v2/roles`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Freshdesk Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/freshdesk/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/freshdesk/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Freshdesk API Limits](https://developers.freshdesk.com/api/#ratelimit)

[Freshdesk Integration](https://www.boldbi.com/integrations/freshdesk)


  
































