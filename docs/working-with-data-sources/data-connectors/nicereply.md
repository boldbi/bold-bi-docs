---
layout: post
title: Nicereply – Cloud BI Data Connector | Bold BI Learning
description: Learn how to connect Nicereply web service through basic http authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Nicereply data source
Bold BI dashboard designer supports connecting Nicereply web services through REST API.

## Choose Nicereply data source
To configure the Nicereply data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Nicereply** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Nicereply/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Nicereply/ChooseDS_server.png)

## Create Nicereply data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Nicereply data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Nicereply REST API endpoint in the URL textbox. Refer the [Nicereply API documentation](https://api.nicereply.com/docs/v1/#get-started) for more details.

    Example: [https://api.nicereply.com/v1/customers](https://api.nicereply.com/v1/customers)  

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Nicereply data source.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose **Basic HTTP Authentication** under **Authentication Type** as authentication.
8. Enter valid API Key in **Password** text box and leave **Username** text box as empty.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/Nicereply/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get AI Key for connecting Nicereply data source?

1. Login to your [Nicereply](https://admin.nicereply.com/admin/login) account. Go to *Settings -> API*.
2. Use this *Private Key* as *&lt;your_api_key&gt;* in Nicereply data source in Bold BI Dashboard.
3. Click *REGENERATE API KEYS* if you don't have any valid API Key.

   ![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/Nicereply/APIKey.png)

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

### Sample queries

**Surveys**

[https://api.nicereply.com/v1/surveys](https://api.nicereply.com/v1/surveys)

**Teams**

[https://api.nicereply.com/v1/teams](https://api.nicereply.com/v1/teams)

**Users**

[https://api.nicereply.com/v1/users](https://api.nicereply.com/v1/users)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Nicereply Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Nicereply/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Nicereply/Dashboardparameter.png)

>**Note:** Refer the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Nicereply Integration](https://www.boldbi.com/integrations/nicereply?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbinicereplyintegration)