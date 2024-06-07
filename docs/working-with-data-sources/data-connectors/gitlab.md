---
layout: post
title: Gitlab – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Gitlab data through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to GitLab data source
The Bold BI dashboard designer supports connecting to GitLab web services through the REST API. 

## Choose GitLab data source
To configure the GitLab data source, follow the steps below:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click on **CREATE NEW** to initiate a new connection from the connection panel.
3. Choose the **GitLab** connection from the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/GitLab/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu in the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/GitLab/ChooseDS_Server.png)


## Create GitLab data source
Once you click the data source, the NEW DATA SOURCE configuration panel will open. Follow the steps below to create a GitLab data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid GitLab REST API endpoint in the URL textbox. Refer to the [GitLab API documentation](https://GitLab.com/docs/api) for more details.

    Example: `https://<:your_gitlab_domain>.com/api/v4/merge_requests?state=opened&scope=assigned-to-me`  

3. Select the **GET** method for the REST API in the **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the GitLab data source. This value is used to fetch the data from GitLab data source via pagination.
5. Replace **&lt;:your_access_token&gt;** under Headers and input a valid **Access Token**.
6. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
7. Select **JSON** data type in **Data Format** combo box.
8. Choose **None** under **Authentication Type**.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/GitLab/DataSourcesView.png)

You can also edit the connection information set here by using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get Access Token for connecting GitLab data source?
1. Log in to your [GitLab](https://gitlab.com/users/sign_in) account. Click on your avatar and Go to *User Profile -> Settings -> Access Tokens*.
2. Choose a name for the token, set an optional expiry date, and select the [desired scopes](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#limiting-scopes-of-a-personal-access-token).
3. Click on `Create personal access token` and make sure to save the access token. Note that once you leave or refresh the page, you will not be able to access it again.
4. Use this *Personal Access Token* as the **Access Token** in the GitLab data source within the Bold BI Dashboard.

   ![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/GitLab/AccessToken.png)

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

1. For example, to retrieve the projects owned by a specific user, query the */users* endpoint.
2. Obtain the ID/username of the specific user from the provided information.
Replace it in the URL to query a particular user's projects:

`https://<:your_gitlab_domain>.com/api/v4/users/%3c:user_id%3e/projects`

For more information on the API endpoints available for this data source, refer to their official [API Documentation]( https://docs.gitlab.com/ee/api/)

### Sample queries
**List all Pipelines of specific Project**

`https://myorganization.com/api/v4/projects/12345/pipelines`

**List Merge Requests based on specific Labels**

`https://myorganization.com/api/v4/merge_requests?labels=bug,reproduced`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from GitLab Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/GitLab/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/GitLab/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[GitLab Integration](https://www.boldbi.com/integrations/gitlab?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigitlabintegration)