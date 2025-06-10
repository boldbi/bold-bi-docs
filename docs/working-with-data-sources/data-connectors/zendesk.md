---
layout: post
title: Zendesk – Cloud BI Connector | Bold BI Documentation
description: Learn how to connect Zendesk web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Zendesk data source
The Bold BI dashboard designer supports connecting to Zendesk web services through the REST API. 

## Choose Zendesk data source
To configure the Zendesk data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Zendesk** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Zendesk/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Zendesk/ChooseDS_Server.png)

## Create Zendesk data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Zendesk data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Zendesk REST API endpoint in the URL textbox. Refer to the [Zendesk API documentation](https://developer.zendesk.com/rest_api/docs/zendesk-apis/resources) for more details.

    Example: `https://<:yourdomainname>.zendesk.com/api/v2/<:your_endpoint>`    

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In the **Max Rows** field, enter the maximum number of rows to be fetched from the Zendesk data source. This value is used for data pagination.
5. Choose a time interval for **Refresh Settings** using the combo box to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in the **Data Format** combo box.
7. Choose an **Authentication Type** from the dropdown menu.
8. To connect based on the chosen Authentication, please refer to the [Supported Authentication Types](/working-with-data-sources/data-connectors/zendesk/#authentication-for-zendesk).

You also have the option to edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Authentication for Zendesk

#### Basic Authentication
Before accessing your endpoint, make sure that `Password access` is enabled in your account.
1. Login to your [Zendesk](https://www.zendesk.com/login/) account.
2. Click on Admin(gear icon) on the left side bar.
3. Navigate to *Admin -> Channel -> API* and enable Password access.

   ![Password Access](/static/assets/working-with-datasource/data-connectors/images/Zendesk/PasswordAccess.png)

Set **Authentication Type** as *Basic http Authentication* and enter your Zendesk's username and password.

#### API Token Authentication
Before accessing your endpoint, make sure that `Token access` is enabled in your account.
1. Login to your [Zendesk](https://www.zendesk.com/login/) account.
2. Click on Admin(gear icon) on the left side bar.
3. Navigate to *Admin -> Channel -> API* and enable Token access.

   ![Token Access](/static/assets/working-with-datasource/data-connectors/images/Zendesk/TokenAccess.png)

Set **Authentication Type** to *None*. Generate Base64 encoded string of your **&lt;:email_address&gt;/token:&lt;:api_token&gt;** and pass the encoded string  as a **Header** with the key "Authorization" and the value "Basic". password.

#### Additional information
<table width="600">
<tr>
<td>
Max Rows
</td>
<td>
Most REST APIs return only a limited amount of data on a single API request. To retrieve the necessary amount of data, you can set a value in this field. Pagination is handled internally and will fetch the required data.
</td>
</tr>
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

1. Query the <i>/tickets.json</i> endpoint.
2. From the listed information, get the ID of the specific ticket.

Replace it in the URL to query a particular ticket:

`https://domain_name.zendesk.com/api/v2/tickets/12.json`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.zendesk.com/rest_api/docs/zendesk-apis/resources )

### Sample queries
**Tickets**

`https://syncdb.zendesk.com/api/v2/tickets.json`

**Workspaces**

`https://syncdb.zendesk.com/api/v2/workspaces.json`

**Groups**

`https://syncdb.zendesk.com/api/v2/groups.json`

**Satisfaction ratings**

`https://syncdb.zendesk.com/api/v2/satisfaction_ratings.json`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Zendesk Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Zendesk Support API Rate Limits](https://developer.zendesk.com/rest_api/docs/support/introduction#rate-limits)

[Zendesk Limitations of API Pagination](https://develop.zendesk.com/hc/en-us/articles/360001068607#limit)

[Zendesk Rate Limits for Endpoint-specific](https://developer.zendesk.com/rest_api/docs/support/introduction#endpoint-specific-rate-limits)

[Zendesk Integration](https://www.boldbi.com/integrations/zendesk-support)

[Blog Post](https://www.boldbi.com/blog/zendesk-dashboard-example-for-monitoring-customer-service-performance-with-bold-bi)