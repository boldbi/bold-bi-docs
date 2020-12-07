---
layout: post
title: GoSquared – Embedded BI Connector | Bold BI Documentation
description: Learn how to connect GoSquared web service through REST API endpoint with Bold BI Embedded and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/go-squared/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to GoSquared data source
Bold BI dashboard designer supports connecting GoSquared web services through REST API. 

## Choose GoSquared data source
To configure the GoSquared data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **GoSquared** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/GoSquared/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/GoSquared/ChooseDS_Server.png)


## Create GoSquared data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create GoSquared data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid GoSquared REST API endpoint in the URL textbox. Refer the [GoSquared API documentation](https://www.gosquared.com/docs/api/) for more details.

    Example: [https://api.gosquared.com/now/v3/overview?api_key=&lt;:your_api_key&gt;&site_token=&lt;:your_site_token&gt;](https://api.gosquared.com/now/v3/overview?api_key=%3c:your_api_key%3e&site_token=%3c:your_site_token%3e)    

3. Select **GET** method for the REST API in **Method** combo box.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **None** under **Authentication Type**.

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API key and Site Token for connecting GoSquared data source?
1. Login to [GoSquared](https://www.gosquared.com/login/) account. 
2. To get Site Token, Go to *Settings -> Current Project -> General -> Project Token*.
3. Use this *Project Token* as **Site Token** in GoSquared data source in Bold BI dashboard.

   ![Reveal Site Token](/static/assets/embedded/working-with-datasource/data-connectors/images/GoSquared/SiteToken.png)

4. To get API Key, Go to *Settings -> Your account -> API Access*.
5. If you have an API Key, then use this *API key* as **API Key** in GoSquared data source in Bold BI dashboard.
6. If API key is not available, then generate API Key by clicking *Add new API Key*. 

   ![Reveal API key](/static/assets/embedded/working-with-datasource/data-connectors/images/GoSquared/APIKey.png)

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

1. For instance, to retrieve the, list of online visitors from different countries, replace the *api_key* and *site_token* like in the below URL to query countries list.

   [https://api.gosquared.com/now/v3/countries?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B](https://api.gosquared.com/now/v3/countries?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B)

> **NOTE:**  Add additional parameters in URL based on endpoint to summarize data based on date (e.g.start/from, to). Refer [GoSquared Documentation](https://www.gosquared.com/docs/api/).

### Sample queries
**List of currently running Campaigns**

[https://api.gosquared.com/now/v3/campaigns?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B](https://api.gosquared.com/now/v3/campaigns?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B)

**List of Online Visitors**

[https://api.gosquared.com/now/v3/visitors?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B](https://api.gosquared.com/now/v3/visitors?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B)

**List of Browsers on which Online Visitors use for browsing**

[https://api.gosquared.com/now/v3/browsers?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B](https://api.gosquared.com/now/v3/browsers?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B)

**List of summary about the browser metrics over a given period**

[https://api.gosquared.com/trends/v2/browser?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B](https://api.gosquared.com/trends/v2/browser?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B)

**Combining Functions**

[https://api.gosquared.com/now/v3/timeSeries:1,timeSeries:2,concurrents?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B&timeSeries:1:from=2015-09-01&timeSeries:1:to=2015-09-07&timeSeries:2:from=2015-10-01&timeSeries:2:to=2015-10-07](https://api.gosquared.com/now/v3/timeSeries:1,timeSeries:2,concurrents?api_key=JSOjsiw92he83h42HWj&site_token=GSN-763262983-B&timeSeries:1:from=2015-09-01&timeSeries:1:to=2015-09-07&timeSeries:2:from=2015-10-01&timeSeries:2:to=2015-10-07)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from GoSquared Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/bold-bi-walk-through/)

[GoSquared API Rate Limits](https://www.gosquared.com/docs/api/rate-limits/)

[GoSquared Integration](https://www.boldbi.com/integrations/gosquared?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigosquaredintegration)
