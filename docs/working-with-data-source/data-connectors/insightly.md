---
layout: post
title: Insightly – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Insightly web service through basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Insightly data source
Bold BI dashboard designer supports connecting Insightly web services through REST API.

## Choose Insightly data source
To configure the Insightly data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Insightly** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/insightly/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/insightly/ChooseDS_server.png)

## Create Insightly data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Insightly data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Insightly REST API endpoint in the URL textbox. Refer the [Insightly API documentation](https://api.insightly.com/v3.0/Help) for more details.

    Example: [https://api.insightly.com/v3.0/opportunities](https://api.insightly.com/v3.0/opportunities)

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Insightly data source. This value is used to fetch the data from Insightly data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** under **Authentication Type** combo box.
8. Enter valid API Key in **Account Key** text box.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/insightly/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Insightly data source?

1. Login to [Insightly](https://login.insightly.com/User/Login?ReturnUrl=%2F) account. Go to *Profile -> User settings*.
2. Find the API Key under *API KEY* section.
3. Use this *API Key* as *Account Key* in Insightly data source in Bold BI Dashboard.
4. Click *Generate new API key* if you don't have any valid API Key.

   ![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/insightly/APIKey.png)

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
<tr>
<td>
API Limits
</td>
<td>
Insightly API requests are limited on the basis of the instance. Not more then 5 requests are allowed per second and the daily limit is based on the Insightly plans.
</td>
</tr>
</table>

### Sample queries

**Contacts**

[https://api.insightly.com/v3.0/contacts](https://api.insightly.com/v3.0/contacts)

**Projects**

[https://api.insightly.com/v3.0/projects](https://api.insightly.com/v3.0/projects)

**Leads**

[https://api.insightly.com/v3.0/Leads](https://api.insightly.com/v3.0/Leads)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Insightly Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Insightly API Limits](https://api.insightly.com/v3.0/Help#!/Overview/Technical_Details)

[Insightly Integration](https://www.boldbi.com/integrations/insightly?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiinsightlyintegration)