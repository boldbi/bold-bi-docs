---
layout: post
title: Freshdesk – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Freshdesk service using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Freshdesk data source
Bold BI dashboard designer supports connecting Freshdesk web services through REST API. 

## Choose Freshdesk data source
To configure the Freshdesk data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Freshdesk** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/freshdesk/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/freshdesk/ChooseDS_server.png)

## Create Freshdesk data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Freshdesk data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Freshdesk REST API endpoint in the URL textbox. Refer the [Freshdesk API documentation](https://developers.freshdesk.com/api/) for more details.

    Example: [https://&lt;:your-domain&gt;.freshdesk.com/api/v2/tickets](https://%3c:your-domain%3e.freshdesk.com/api/v2/tickets)

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Freshdesk data source.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** in **Authentication Type** combo box.
8. Enter a valid Freshdesk **Username** and **Password** to access the endpoints.

    ![DataSourcesView](/static/assets/cloud/working-with-datasource/data-connectors/images/freshdesk/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

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

1. Query the <i>/tickets</i> endpoint.
2. From the listed information get the id of the specific ticket.

Replace it in the URL to query a particular conversations:

[https://myaccount.freshdesk.com/api/v2/tickets/&lt;ticket_id&gt;/conversations](https://myaccount.freshdesk.com/api/v2/tickets/%3cticket-id%3e/conversations)

### Sample queries

**Contacts**

[https://myaccount.freshdesk.com/api/v2/contacts](https://myaccount.freshdesk.com/api/v2/contacts)

**Agents**

[https://myaccount.freshdesk.com/api/v2/agents](https://myaccount.freshdesk.com/api/v2/agents)

**Roles**

[https://myaccount.freshdesk.com/api/v2/roles](https://myaccount.freshdesk.com/api/v2/roles)


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Freshdesk Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Freshdesk API Limits](https://developers.freshdesk.com/api/#ratelimit)

[Freshdesk Integration](https://www.boldbi.com/integrations/freshdesk)


  
































