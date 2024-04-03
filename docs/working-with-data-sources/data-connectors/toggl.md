---
layout: post
title: Toggl – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Toggl data through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Toggl data source
Bold BI dashboard designer supports connecting Toggl web services through REST API. 

## Choose Toggl data source
To configure the Toggl data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Toggl** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/Toggl/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/working-with-datasource/data-connectors/images/Toggl/ChooseDS_Server.png)


## Create Toggl data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Toggl data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Toggl REST API endpoint in the URL textbox. Refer the [Toggl API documentation](https://github.com/toggl/toggl_api_docs/) for more details.

    Example: `https://www.toggl.com/api/v8/dashboard/<:workspace_id>`   

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Toggl data source. This value is used to fetch the data from Toggl data source via pagination.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Choose one of the **Authentication Type** from the dropdown.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/Toggl/DataSourcesView.png)

8. To connect based on the chosen Authentication, refer [Supported Authentication Types](/working-with-data-sources/data-connectors/toggl/#authentication-for-toggl).

> **NOTE:**  You can also query Toggl [Reports API](https://github.com/toggl/toggl_api_docs/blob/master/reports.md)

You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

### Authentication for Toggl 

#### Toggl APIs

Authenticate your Toggl account in one of the below ways:
1. Set **Authentication type** as *Basic http Authentication*. Your API Token should be your **User Name** and 'api_token' is its **Password**.
2. Set **Authentication type** as *Basic http Authentication* and input your Toggl's username and password.
3. Set **Authentication type** as *None*. Generate Base64 encoded string of your username:password/ your_api_token:api_token and pass the encoded string  as **Header** with key "Authorization" and value "Basic".

#### Report APIs
Authenticate your Toggl account like below:
1. Set **Authentication type** as *Basic http Authentication*. Your API Token should be your **User Name** and 'api_token' is its **Password**.

> **NOTE:**  Refer Supported Authentication types for [Toggl API](https://github.com/toggl/toggl_api_docs/blob/master/chapters/authentication.md) and [Reports API](https://github.com/toggl/toggl_api_docs/blob/master/reports.md#authentication).


#### How do I get API Token for connecting Toggl data source?
1. Login to your [Toggl](https://toggl.com/login/) account. 
2. Go to *Profile Settings -> API Token*.

   ![API Token](/static/assets/working-with-datasource/data-connectors/images/Toggl/APIToken.png) 

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

1. For instance, to query about specific workspace, query the <i>/workspaces</i> endpoint.
2. From the listed information, get the ID of the specific workspace.

Replace it in the URL to query a particular workspace:

`https://www.toggl.com/api/v8/dashboard/<:workspace_id>`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://github.com/toggl/toggl_api_docs/)

#### Mandatory Parameters for Reports API
Below request parameters are mandatory to access the report APIs
1. *user_agent* - The name of your application or your email address.
2. *workspace_id* - The workspace whose data you want to access.

### Sample queries
**Tasks**

[https://www.toggl.com/api/v8/tasks/12345](https://www.toggl.com/api/v8/tasks/12345)

**Projects**

[https://www.toggl.com/api/v8/projects](https://www.toggl.com/api/v8/projects)

**Get list of project users in a Workspace**

[https://www.toggl.com/api/v8/workspaces/12345/project_users](https://www.toggl.com/api/v8/workspaces/12345/project_users)

**Get users of specific workspace**

[https://www.toggl.com/api/v8/workspaces/12345/users](https://www.toggl.com/api/v8/workspaces/12345/users)

**Get Dashboard Data**

[https://www.toggl.com/api/v8/dashboard/12345](https://www.toggl.com/api/v8/dashboard/12345)

### Reports API Sample Queries
**Weekly Report URL**

[https://toggl.com/reports/api/v2/weekly?user_agent=application_name&workspace_id=12345](https://toggl.com/reports/api/v2/weekly?user_agent=application_name&workspace_id=12345)

**Detailed Report URL**

[https://toggl.com/reports/api/v2/details?user_agent=application_name&workspace_id=12345](https://toggl.com/reports/api/v2/details?user_agent=application_name&workspace_id=12345)

**Summary Report URL**

[https://toggl.com/reports/api/v2/summary?user_agent=application_name&workspace_id=12345](https://toggl.com/reports/api/v2/summary?user_agent=application_name&workspace_id=12345)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Toggl Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** to the data source connection. You can connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/Toggl/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/Toggl/Dashboardparameter.png)

>**Note:** Refer the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Rate Limitations for Toggl Reports API](https://github.com/toggl/toggl_api_docs/blob/master/reports.md#rate-limiting)

[Toggl Integration](https://www.boldbi.com/integrations/toggl?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbitogglintegration)