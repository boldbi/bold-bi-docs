---
layout: post
title: SurveyMonkey - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect SurveyMonkey web service through REST API endpoint with cloud-hosted Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to SurveyMonkey data source
Bold BI dashboard designer supports connecting SurveyMonkey web services through REST API. 

## Choose SurveyMonkey data source

To configure the SurveyMonkey data source, follow the below steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **SurveyMonkey** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/SurveyMonkey/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/SurveyMonkey/ChooseDS_Server.png)


## Create SurveyMonkey data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create SurveyMonkey data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down drop box and choose the required endpoint.
3. Enter a valid REST API endpoint in the URL textbox. Refer the [SurveyMonkey API documentation](https://developer.surveymonkey.com/api/v3/) for more details.
4. Click **Custom Url** to enter the URL manually.
5. Select **GET** method for the REST API in **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the SurveyMonkey data source. This value is used to fetch the data from SurveyMonkey data source via pagination.
7. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
8. Select **JSON** data type in **Data Format** combo box.

![Data source preview](/static/assets/cloud/working-with-datasource/data-connectors/images/SurveyMonkey/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

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
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. Query the <i>Survey Details</i> endpoint.
2. From the listed information get the survey id for the connected account.

Replace it in the URL to query a particular conversations:

`https://api.surveymonkey.com/v3/surveys/<:surveyid>/details`

### Sample queries
**Survey Categories**

https://api.surveymonkey.com/v3/survey_categories

**Survey Templates**

https://api.surveymonkey.com/v3/survey_templates

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from SurveyMonkey Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)