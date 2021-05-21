---
layout: post
title: Jira – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Jira data using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Jira data source
Bold BI dashboard designer supports connecting Jira web services through REST API. 

## Choose Jira data source
To configure the Jira data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Jira** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/Jira/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/Jira/ChooseDS_Server.png)


## Create Jira data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Jira data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Jira REST API in the URL textbox. Refer the [Jira API documentation](https://developer.atlassian.com/cloud/jira/software/rest/intro/) for more details.
3. Choose one of the **Request Body** type to make a request, either [**JQL**](/cloud-bi/working-with-data-source/data-connectors/jira/#jql) or [**Raw Query**](/cloud-bi/working-with-data-source/data-connectors/jira/#raw-query).
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Choose **Basic http Authentication** under **Authentication Type** and input a valid **Username** and **API Token**.

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

### Request Body Types

#### JQL
1. Enter your domain name in the **Domain URL** textbox.

   Example: [https://&lt;:your_domain&gt;.atlassian.net](https://%3c:your_domain%3e.atlassian.net)

2. Enter a valid JQL Query in **JQL** field.

   Example: `project = weather`

3. If you need to add custom fields in JQL filtering, then enable **Include Custom Fields** and provide the custom fields in enabled text box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Jira data source. This value is used to fetch the data from Jira data source via pagination.

> **NOTE:** Custom field ID's must be separated using comma.

#### Raw Query 
1. Enter a valid URL in the URL field textbox.

   Example: [https://&lt;:your_domain&gt;.atlassian.net/rest/api/2/project](https://%3c:your_domain%3e.atlassian.net/rest/api/2/project)

2. Select **GET** method for the REST API in **Method** combo box.

#### How do I get API Token for connecting Jira data source?
1. Log in to [Generate API Token](https://id.atlassian.com/manage/api-tokens).
2. Click Create API token.
3. From the dialog that appears, enter a memorable and concise Label for your token and click **Create**.
4. Click Copy to clipboard, then paste the token to your script, or elsewhere to save.

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

1. Replace **&lt;:your_domain&gt;** with your domain name in the URL.
2. For instance, to get the tasks/issues under specific project, replace your JQL Query in the textarea.

      Sample Domain URL: `https://abcde.atlassian.net`

      Sample JQL: `project = weather`

### Sample JQL queries

**List tasks based on status modified**

project = weather AND status CHANGED FROM "In Progress" TO "Open"

**List tasks based on status on specified week**

project = weather AND status was "In Progress" DURING (startOfWeek(), endOfWeek())

**List tasks based on resolution**

project = "weather" AND resolution changed to "Done" by currentUser() during (startOfYear(), endOfYear())

**List tasks based on fixVersion**

project = weather AND fixVersion = latestReleasedVersion(weather)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of data retrieved from Jira Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Blog Post](https://www.boldbi.com/blog/jira-dashboard-example-with-bold-bi)

[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Jira Integration](https://www.boldbi.com/integrations/jira?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbijiraintegration)
