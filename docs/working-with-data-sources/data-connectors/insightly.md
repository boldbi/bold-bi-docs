---
layout: post
title: Insightly – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Insightly web service through basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Insightly data source
The Bold BI dashboard designer supports connecting to Insightly web services through the REST API.

## Choose Insightly data source
To configure the Insightly data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Insightly** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/insightly/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/insightly/ChooseDS_server.png)

## Create Insightly data source
Once you click the data source, the NEW DATA SOURCE configuration panel will open. Follow the steps below to create an Insightly data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid Insightly REST API endpoint in the URL textbox. Refer to the [Insightly API documentation](https://api.insightly.com/v3.0/Help) for more details.

    Example: `https://api.insightly.com/v3.0/opportunities`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Insightly data source. This value is used to fetch the data from Insightly data source via pagination.
5. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** under **Authentication Type** combo box.
8. Enter a valid API Key in the **Account Key** text box.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/insightly/DataSourcesView.png)

You can also edit the connection information set here by using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get Account Key for connecting Insightly data source?

1. Log in to your [Insightly](https://login.insightly.com/User/Login?ReturnUrl=%2F) account and navigate to *Profile -> User settings*.
2. Locate the API Key in the *API KEY* section.
3. Use this *API Key* as *Account Key* in when setting up the Insightly data source in Bold BI Dashboard.
4. If you do not have a valid API Key, click on *Generate new API key*.

   ![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/insightly/APIKey.png)

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
<tr>
<td>
API Limits
</td>
<td>
Insightly API requests are limited based on the instance. No more than 5 requests are allowed per second, and the daily limit is determined by the Insightly plans.
</td>
</tr>
</table>

### Sample queries

**Contacts**

`https://api.insightly.com/v3.0/contacts`

**Projects**

`https://api.insightly.com/v3.0/projects`

**Leads**

`https://api.insightly.com/v3.0/Leads`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Insightly Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/insightly/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/insightly/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Insightly API Limits](https://api.insightly.com/v3.0/Help#!/Overview/Technical_Details)

[Insightly Integration](https://www.boldbi.com/integrations/insightly?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiinsightlyintegration)