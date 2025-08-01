---
layout: post
title: Slack Data Connector – Cloud BI | Bold BI Documentation
description: Learn how to connect Slack web service using OAuth authentication with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Slack data source
The Bold BI dashboard designer supports connecting to Slack web services through the REST API. 

## Choose Slack data source

To configure the Slack data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Slack** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Slack/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Slack/ChooseDS_Server.png)

## Create Slack data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Slack data source.
1. Enter a name and description (optional) for the data source.
2. Choose The Extract Engine.
2. Click on the **API Endpoints** down drop box and choose the required endpoint.
3. Enter a valid REST API endpoint in the URL textbox. Refer to the [Slack API documentation](https://api.slack.com/methods) for more details.
4. Click on **Custom Url** to enter the URL manually.
5. Select the **GET** method for the REST API in the **Method** combo box.
6. Select a time interval for **Refresh Settings** using the drop-down menu to periodically trigger the REST API request to keep the data in sync with our dashboard. 
7. Select **JSON** data type in the **Data Format** combo box.
8. The authentication type will automatically be set to **Slack** since OAuth is used for authenticating with the Slack account.

![Data source preview](/static/assets/working-with-datasource/data-connectors/images/Slack/DataSourcesView.png)

## Extract Engine
You can connect to the data source using one of the following extract methods:
- **Bold BI Extract**: Data will be extracted and managed directly within Bold BI.
- **Data Hub**: Data extraction is handled through the Data Hub. An equivalent pipeline is created, utilizing the Data Hub’s Extract, Transform, Load (ETL) capabilities to filter, optimize, or transform the data, and to generate new tables.
- To view the equivalent pipeline created for data extraction, navigate to the Query Designer page and click on View Pipeline.

    ![Refresh Setting](/static/assets/working-with-datasource/images/View_Pipeline.png)

- When the data refresh is configured for data sources that uses the Data Hub Extract Engine, the refresh will be managed within the Data Hub.

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.


#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call to the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>


### Sample queries
**User conversations**

`https://slack.com/api/users.conversations`

**Channels Groups**

`https://slack.com/api/channels.list`


### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Slack Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Connected accounts for OAuth data sources
If you have already logged into the account and authenticated with the web data source, the account information will be listed here. You can select one of the accounts or connect to a new account by clicking the **Connect New Account** button.

   ![OAuth](/static/assets/working-with-datasource/data-connectors/images/Slack/OAuthDS.png)

You can edit, delete and re-authorize this account from the **Connected Accounts** page.

   ![Manage Accounts](/static/assets/working-with-datasource/data-connectors/images/Slack/ManageDS.png)

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)