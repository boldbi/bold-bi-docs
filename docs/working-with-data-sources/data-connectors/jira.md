---
layout: post
title: Jira – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Jira data using basic http authentication through REST API endpoint with Bold BI Cloud.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Jira data source
The Bold BI dashboard designer supports connecting to both Jira and Jira Service Management (JSM) web services through the REST API.

## Choose Jira data source
To configure the Jira data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Jira** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Jira/ChooseDS.png)

> **NOTE:** You can also create a data source from the home page by clicking the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Jira/ChooseDS_Server.png)

## Advanced
In Advanced category, It will Redirect to the Bold ETL. Refer [Bold ETL](/managing-resources/manage-data-sources/#advanced-category).

## Basic
In the Basic Category, It will act as the connector in Bold BI. And need to follow the below steps.

## Create Jira data source
Once you click the data source, the NEW DATA SOURCE configuration panel will open. Follow the steps below to create a Jira data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Jira REST API endpoint in the URL textbox. Refer to the [Jira API documentation](https://developer.atlassian.com/cloud/jira/software/rest/intro/) for more details.
3. Choose one of the **Request Body** type to make a request, either [**JQL**](/working-with-data-sources/data-connectors/jira/#jql) or [**Raw Query**](/working-with-data-sources/data-connectors/jira/#raw-query).
4. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Choose **Basic http Authentication** under **Authentication Type** and input a valid **Username** and **API Token**.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/Jira/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Request Body Types

#### JQL
1. Enter your domain name in the **Domain URL** textbox.

   Example: <span style="color:#FF4801"> https://&lt;:your_domain&gt;.atlassian.net</span>

2. Enter a valid JQL Query in the **JQL** field.

   Example: `project = weather`

3. If you need to add custom fields in JQL filtering, then enable **Include Custom Fields** and provide the custom fields in the enabled text box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Jira data source. This value is used to fetch the data from Jira data source via pagination.

#### How to get the Custom field ID value from Jira?
1.	In your Jira account, Go to the JQL query search under **Filters -> Advanced Search**.

2.	Type a **Custom field** in the JQL search box and you can view the respective **Custom field ID** in the dropdown as shown in the following image.

   ![CustomFieldDropdown](/static/assets/working-with-datasource/data-connectors/images/common/CustomFieldDropdown.png)
 
3.	You can add the **Custom field ID** values in the Datasource connection window to retrieve the custom fields data. 

    The syntax for adding Custom Fields,

	  `customfield_<Custom Field ID>`

    Here, the **Epic Link** and **Epic Name** custom fields are added in the following image.

   ![IncludedCustomFields](/static/assets/working-with-datasource/data-connectors/images/common/IncludedCustomFields.png)

> **NOTE:** 
> * The Custom field IDs must be separated by using a **comma**.
> * If you have a Jira Admin account, you can also view the Custom fields ID by the ways mentioned in this [knowledge base](https://confluence.atlassian.com/jirakb/how-to-find-id-for-custom-field-s-744522503.html).

#### How To retrieve any field in Jira

To retrieve **any field**, including **custom fields** in Jira and pass the field details to the `Include Custom Fields` text box, follow these steps:

##### For Simple Data Type Fields:

* Add the desired simple data types field, such as text, number, or date, to the Custom Fields section.
Example: To fetch the value of the **project -> name** field, add `project` to the Custom Fields.

 ![project](/static/assets/working-with-datasource/data-connectors/images/Jira/project.png)

##### For **Nested Fields**:

* Split the nested field name using a colon `:` to identify the nested fields.
  
* Syntax:  `<FieldName>:<InnerFieldName>:<Key>`
    For example: To fetch the ID of the status Category of the status. ``` status:statusCategory:id ```

   ![Status_statusCategory_id](/static/assets/working-with-datasource/data-connectors/images/Jira/Status_statusCategory_id.png)

> **Note:**
>
> * When accessing the **inner fields** of a **nested field** in Jira, separate the field names with **colons `(:)`**.
> * For fetching a **custom field** with a **specific field ID**, follow the same procedure by specifying the **Custom field ID** followed by a **colon** and the field ID. For example: **`"customfield_10018:id"`**.
> * **Multiple values** can be passed as default, nested array, or custom fields in the Include Custom Fields text box, and the values should be separated by **commas (,)**. For example: **`"customfield_10018:id, status:statusCategory:id"`**.
> * When fetching the **inner fields** of an **array**, only the **first element** of the array will be fetched based on the field's value.

#### Raw Query 
1. Enter a valid URL in the URL field textbox.

   Example:<span style="color:#FF4801">https://&lt;:your_domain&gt;.atlassian.net/rest/api/2/project</span>

2. Select **GET** method for the REST API in **Method** combo box.

#### How do I get API Token for connecting Jira data source?
1. Log in to [Generate an API Token](https://id.atlassian.com/manage/api-tokens).
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

1. Replace **&lt;:your_domain&gt;** with your domain name in the URL.
2. For example, to retrieve the tasks or issues under a specific project, replace your JQL Query in the text area.

      Sample Domain URL: `https://abcde.atlassian.net`

      Sample JQL: `project = weather`

For more information on the API endpoints available for this data source, refer to their official [API Documentation]( https://developer.atlassian.com/docs/)

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
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of data retrieved from Jira Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Jira/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Jira/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
<a href="https://www.boldbi.com/blog/jira-dashboard-example-with-bold-bi" target="_blank">Blog Post</a>

[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

<a href="https://www.boldbi.com/integrations/jira?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbijiraintegration" target="_blank">Jira Integration</a>
