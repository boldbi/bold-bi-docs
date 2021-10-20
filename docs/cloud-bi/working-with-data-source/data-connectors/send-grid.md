---
layout: post
title: SendGrid – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect SendGrid through REST API endpoint with Bold BI Cloud and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to SendGrid data source
Bold BI dashboard designer supports connecting SendGrid web services through REST API. 

## Choose SendGrid data source
To configure the SendGrid data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **SendGrid** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/SendGrid/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/SendGrid/ChooseDS_Server.png)


## Create SendGrid data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create SendGrid data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid SendGrid REST API endpoint in the URL textbox. Refer the [SendGrid API documentation](https://sendgrid.com/docs/API_Reference/api_getting_started.html) for more details.

    Example: [https://api.sendgrid.com/v3/campaigns?limit=100](https://api.sendgrid.com/v3/campaigns?limit=100)    

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched. This value is used to fetch the data via pagination.
5. Replace **&lt;:your_api_key&gt;** under Headers with a valid **API Key**.
6. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
7. Select **JSON** data type in **Data Format** combo box.
8. Choose **None** under **Authentication Type**.

    ![DataSourcesView](/static/assets/cloud/working-with-datasource/data-connectors/images/SendGrid/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Account Key for connecting SendGrid data source?
1. To get your API key, refer [API Key Settings](https://sendgrid.com/docs/ui/account-and-settings/api-keys/)

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

1. For instance, to query about the specific block detail, query the <i>/suppression/blocks</i> endpoint.
2. From the listed information get the email ID of the specific block.

Replace it in the URL to query a particular payment:

[https://api.sendgrid.com/v3/suppression/blocks/&lt;:email_id&gt;](https://api.sendgrid.com/v3/suppression/blocks/%3c:email_id%3e)

### Sample queries
**List all Categories**

[https://api.sendgrid.com/v3/categories](https://api.sendgrid.com/v3/categories)

**Retrieve all cancel/paused scheduled sends information**

[https://api.sendgrid.com/v3/user/scheduled_sends](https://api.sendgrid.com/v3/user/scheduled_sends) 

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from SendGrid Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Blog Post](https://www.boldbi.com/blog/sendgrid-email-stats-tracking-example-with-bold-bi)

[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[SendGrid API Rate Limits](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-rate-limits)

[SendGrid Integration](https://www.boldbi.com/integrations/twilio-sendgrid?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbitwiliosendgridintegration)