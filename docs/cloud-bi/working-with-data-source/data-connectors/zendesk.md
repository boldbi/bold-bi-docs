---
layout: post
title: Zendesk – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Zendesk web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zendesk data source
Bold BI dashboard designer supports connecting Zendesk web services through REST API. 

## Choose Zendesk data source
To configure the Zendesk data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zendesk** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Zendesk/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Zendesk/ChooseDS_Server.png)


## Create Zendesk data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Zendesk data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Zendesk REST API endpoint in the URL textbox. Refer the [Zendesk API documentation](https://developer.zendesk.com/rest_api/docs/zendesk-apis/resources) for more details.

    Example: [https://&lt;:your_domain_name&gt;.zendesk.com/api/v2/&lt;:your_endpoint&gt;](https://%3c:your_domain_name%3e.zendesk.com/api/v2/%3c:your_endpoint%3e)    

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Zendesk data source. This value is used to fetch the data from Zendesk data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose one of the **Authentication Type** from the dropdown.
8. To connect based on the chosen Authentication, refer [Supported Authentication Types](/cloud-bi/working-with-data-source/data-connectors/zendesk/#authentication-for-zendesk).

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

### Authentication for Zendesk

#### Basic Authentication
Before accessing your endpoint, ensure whether `Password access` is enabled in your account.
1. Login to your [Zendesk](https://www.zendesk.com/login/) account.
2. Click Admin(gear icon) on the left side bar.
3. Go to *Admin -> Channel -> API* and enable Password access.

   ![Password Access](/static/assets/cloud/working-with-datasource/data-connectors/images/Zendesk/PasswordAccess.png)

Set **Authentication Type** as *Basic http Authentication* and input your Zendesk's username and password.

#### API Token Authentication
Before accessing your endpoint, ensure whether `Token access` is enabled in your account.
1. Login to your [Zendesk](https://www.zendesk.com/login/) account.
2. Click Admin(gear icon) on the left side bar.
3. Go to *Admin -> Channel -> API* and enable Token access.

   ![Token Access](/static/assets/cloud/working-with-datasource/data-connectors/images/Zendesk/TokenAccess.png)

Set **Authentication Type** as *None*. Generate Base64 encoded string of your **&lt;:email_address&gt;/token:&lt;:api_token&gt;** and pass the encoded string  as **Header** with key "Authorization" and value "Basic". password.

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

1. Query the <i>/tickets.json</i> endpoint.
2. From the listed information, get the ID of the specific ticket.

Replace it in the URL to query a particular ticket:

[https://domain_name.zendesk.com/api/v2/tickets/12.json](https://domain_name.zendesk.com/api/v2/tickets/12.json)

### Sample queries
**Tickets**

[https://syncdb.zendesk.com/api/v2/tickets.json](https://syncdb.zendesk.com/api/v2/tickets.json)

**Workspaces**

[https://syncdb.zendesk.com/api/v2/workspaces.json](https://syncdb.zendesk.com/api/v2/workspaces.json)

**Groups**

[https://syncdb.zendesk.com/api/v2/groups.json](https://syncdb.zendesk.com/api/v2/groups.json)

**Satisfaction ratings**

[https://syncdb.zendesk.com/api/v2/satisfaction_ratings.json](https://syncdb.zendesk.com/api/v2/satisfaction_ratings.json)


### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Zendesk Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/bold-bi-walk-through/)

[Zendesk Support API Rate Limits](https://developer.zendesk.com/rest_api/docs/support/introduction#rate-limits)

[Zendesk Limitations of API Pagination](https://develop.zendesk.com/hc/en-us/articles/360001068607#limit)

[Zendesk Rate Limits for Endpoint-specific](https://developer.zendesk.com/rest_api/docs/support/introduction#endpoint-specific-rate-limits)

[Zendesk Integration](https://www.boldbi.com/integrations/zendesk?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbizendeskintegration)

[Blog Post](https://www.boldbi.com/blog/zendesk-dashboard-example-for-monitoring-customer-service-performance-with-bold-bi)