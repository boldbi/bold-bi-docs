---
layout: post
title: SurveyMonkey - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect SurveyMonkey web service through REST API endpoint with cloud-hosted Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug

---

# Connecting Bold BI to SurveyMonkey data source
The Bold BI dashboard designer supports connecting to SurveyMonkey web services through the REST API. 

## Choose SurveyMonkey data source

To configure the SurveyMonkey data source, follow the below steps:

1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **SurveyMonkey** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/SurveyMonkey/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/SurveyMonkey/ChooseDS_Server.png)


## How to Obtain the Surveymonkey Client ID and Client Secret
> **Note:** SurveyMonkey OAuth credentials are required for the On-Premises Deployment but are not needed in the Syncfusion Managed Cloud Server.

1. Log in to [developer.surveymonkey.com](https://developer.surveymonkey.com/).
2. Click the **Create New App** button.
   ![create new app](/static/assets/working-with-datasource/data-connectors/images/SurveyMonkey/createnewapp.png)

3. Enter the required details and click on the **Create App** button.
   ![app details](/static/assets/working-with-datasource/data-connectors/images/SurveyMonkey/appdetails.png)

4. Now, please go to the **SETTINGS** window, enter the **OAuth Redirect URL**, and then click the Submit Changes button.

   ![settings window](/static/assets/working-with-datasource/data-connectors/images/SurveyMonkey/settingswindow.png)

>**NOTE**: The Bold BI redirect URL should be added in the proper format. Please refer to this URL structure: `https://hostname/bi/designer/v1.0/oauth/agent`.

5. Scroll down and select the scopes based on your requirements, then click the **Update Scopes** button.
   ![update scopes](/static/assets/working-with-datasource/data-connectors/images/SurveyMonkey/scopes.png)

6. You will find the **Client Id and Client Secret** in the **Credentials** section of the **SETTINGS** window.
   ![create new app](/static/assets/working-with-datasource/data-connectors/images/SurveyMonkey/credentials.png)

>**NOTE**: Save the client ID and client secret in Bold BI by following the [OAuth Configuration](/site-administration/data-connector-settings/oauth-configuration/) guide for more details.

## Create SurveyMonkey data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create SurveyMonkey data source.
1. Enter a name and description (optional) for the data source.
2. Click the **API Endpoints** down drop box and choose the required endpoint.
3. Enter a valid REST API endpoint in the URL textbox. Refer to the [SurveyMonkey API documentation](https://developer.surveymonkey.com/api/v3/) for more details.
4. Click **Custom Url** to enter the URL manually.
5. Select the **GET** method for the REST API in the **Method** combo box.
6. In **Max Rows**, enter the maximum number of rows to be fetched from the SurveyMonkey data source. This value is used to fetch the data from SurveyMonkey data source via pagination.
7. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
8. Select **JSON** data type in **Data Format** combo box.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/SurveyMonkey/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

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
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL

1. Query the <i>Survey Details</i> endpoint.
2. From the listed information get the survey id for the connected account.

Replace it in the URL to query a particular conversations:

`https://api.surveymonkey.com/v3/surveys/<:surveyid>/details`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://developer.surveymonkey.com/api/v3/)

### Sample queries
**Survey Categories**

`https://api.surveymonkey.com/v3/survey_categories`

**Survey Templates**

`https://api.surveymonkey.com/v3/survey_templates`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from SurveyMonkey Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

<a href="https://www.boldbi.com/blog/unleash-actionable-insights-from-embedded-surveymonkey-analytics" target="_blank">Unleash Actionable Insights from Embedded SurveyMonkey Analytics</a>
