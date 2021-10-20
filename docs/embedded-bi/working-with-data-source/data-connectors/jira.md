---
layout: post
title: Jira – Embedded BI Data Connector | Bold BI Documentation
description: Learn how to connect Jira data using basic http authentication through REST API endpoint with Bold BI Embedded.
canonical: "/cloud-bi/working-with-data-source/data-connectors/jira/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Jira data source
Bold BI dashboard designer supports connecting Jira web services through REST API. 

## Choose Jira data source
To configure the Jira data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Jira** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Jira/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/Jira/ChooseDS_Server.png)


## Create Jira data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Jira data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Jira REST API in the URL textbox. Refer the [Jira API documentation](https://developer.atlassian.com/cloud/jira/software/rest/intro/) for more details.
3. Choose one of the **Request Body** type to make a request, either [**JQL**](/embedded-bi/working-with-data-source/data-connectors/jira/#jql) or [**Raw Query**](/embedded-bi/working-with-data-source/data-connectors/jira/#raw-query).
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Choose **Basic http Authentication** under **Authentication Type** and input a valid **Username** and **API Token**.

    ![DataSourcesView](/static/assets/embedded/working-with-datasource/data-connectors/images/Jira/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

### Request Body Types

#### JQL
1. Enter your domain name in the **Domain URL** textbox.

   Example: [https://&lt;:your_domain&gt;.atlassian.net](https://%3c:your_domain%3e.atlassian.net)

2. Enter a valid JQL Query in **JQL** field.

   Example: `project = weather`

3. If you need to add custom fields in JQL filtering, then enable **Include Custom Fields** and provide the custom fields in enabled text box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Jira data source. This value is used to fetch the data from Jira data source via pagination.

#### How to get the Custom field ID value from Jira?
1.	In your Jira account, Go to the JQL query search under **Filters -> Advanced Search**.

2.	Type a **Custom field** in the JQL search box and you can view the respective **Custom field ID** in the dropdown as shown in the following image.

   ![CustomFieldDropdown](/static/assets/embedded/working-with-datasource/data-connectors/images/common/CustomFieldDropdown.png)
 
3.	You can add the **Custom field ID** values in the Datasource connection window to retrieve the custom fields data. 

    The syntax for adding Custom Fields,

	  `customfield_<Custom Field ID>`

    Here, the **Epic Link** and **Epic Name** custom fields are added in the following image.

   ![IncludedCustomFields](/static/assets/embedded/working-with-datasource/data-connectors/images/common/IncludedCustomFields.png)

> **NOTE:** 
> * The Custom field IDs must be separated by using a **comma**.
> * If you have a Jira Admin account, you can also view the Custom fields ID by the ways mentioned in this [link](https://confluence.atlassian.com/jirakb/how-to-find-id-for-custom-field-s-744522503.html). 

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

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Blog Post](https://www.boldbi.com/blog/jira-dashboard-example-with-bold-bi)

[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)

[Jira Integration](https://www.boldbi.com/integrations/jira?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbijiraintegration)
