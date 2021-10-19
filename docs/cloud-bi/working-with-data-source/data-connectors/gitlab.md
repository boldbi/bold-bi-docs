---
layout: post
title: Gitlab – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Gitlab data through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to GitLab data source
Bold BI dashboard designer supports connecting GitLab web services through REST API. 

## Choose GitLab data source
To configure the GitLab data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **GitLab** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/GitLab/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/GitLab/ChooseDS_Server.png)


## Create GitLab data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create GitLab data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid GitLab REST API endpoint in the URL textbox. Refer the [GitLab API documentation](https://GitLab.com/docs/api) for more details.

    Example: [https://&lt;:your_gitlab_domain&gt;.com/api/v4/merge_requests?state=opened&scope=assigned-to-me](https://%3c:your_gitlab_domain%3e.com/api/v4/merge_requests?state=opened&scope=assigned-to-me)    

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the GitLab data source. This value is used to fetch the data from GitLab data source via pagination.
5. Replace **&lt;:your_access_token&gt;** under Headers and input a valid **Access Token**.
6. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
7. Select **JSON** data type in **Data Format** combo box.
8. Choose **None** under **Authentication Type**.

    ![DataSourcesView](/static/assets/cloud/working-with-datasource/data-connectors/images/GitLab/DataSourcesView.png)

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get Access Token for connecting GitLab data source?
1. Log in to [GitLab](https://gitlab.com/users/sign_in) account. Click your avatar and Go to *User Profile -> Settings -> Access Tokens*.
2. Choose a name, optional expiry date for the token and choose the [desired scopes](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#limiting-scopes-of-a-personal-access-token).
3. Click the `Create personal access token` and save the access token. Once you leave or refresh the page, you won’t be able to access it again.
4. Use this *Personal Access Token* as **Access Token** in GitLab data source in Bold BI Dashboard.

   ![Reveal API Key](/static/assets/cloud/working-with-datasource/data-connectors/images/GitLab/AccessToken.png)

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

1. For instance, to get the projects owned by the specific user, query the <i>/users</i> endpoint.
2. From the listed information get the ID/username of the specific user.

Replace it in the URL to query a particular user's projects:

[https://&lt;:your_gitlab_domain&gt;.com/api/v4/users/&lt;:user_id&gt;/projects](https://%3c:your_gitlab_domain%3e.com/api/v4/users/%3c:user_id%3e/projects)

### Sample queries
**List all Pipelines of specific Project**

[https://myorganization.com/api/v4/projects/12345/pipelines](https://myorganization.com/api/v4/projects/12345/pipelines)

**List Merge Requests based on specific Labels**

[https://myorganization.com/api/v4/merge_requests?labels=bug,reproduced](https://myorganization.com/api/v4/merge_requests?labels=bug,reproduced)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from GitLab Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[GitLab Integration](https://www.boldbi.com/integrations/gitlab?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbigitlabintegration)