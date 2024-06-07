---
layout: post
title: Keen – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Keen web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Keen data source
The Bold BI dashboard designer supports connecting to Keen web services through the REST API.

## Choose Keen data source
To configure the Keen data source, follow the below steps:
1. Click on the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Keen** connection in the connection panel.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/keen/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking on the **Data Sources** menu on the left menu panel and selecting **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/working-with-datasource/data-connectors/images/keen/ChooseDS_server.png)

## Create Keen data source
Once you click on the data source, the NEW DATA SOURCE configuration panel will open. Follow the below steps to create Keen data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Keen REST API endpoint in the URL textbox. Refer to the [Keen API documentation](https://keen.io/docs/api/) for more details.

    Example: `https://api.keen.io/3.0/organizations/<:ORG_ID>/projects/<:PROJECT_ID>`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. Choose a time interval for the **Refresh Settings** using the combo box, to periodically trigger the REST API request and keep the data in sync with our dashboard.  
5. Select **JSON** data type in **Data Format** combo box.
6. Replace `<:project_read_key>` under Headers with a valid API token.
7. Choose **None** under **Authentication** Type as authentication is done through header.

    ![DataSourcesView](/static/assets/working-with-datasource/data-connectors/images/keen/DataSourcesView.png)


You can also edit the connection information set here using the [Edit Connection](/working-with-data-sources/editing-a-data-connection/) option.

#### How do I get API Key for connecting Keen data source?

1. Log in to [keen](https://keen.io/login) account and Go to *Projects*. 
2. Select a valid Project from the *Projects* dropdown menu and navigate to *ACCESS*.
3. Locate your *ACCESS KEY* under *Access Keys*.
4. Click on *NEW ACCESS KEY*, if you don't have a valid API Key.
5. Utilize this *ACCESS KEY* as `<:project_read_key>` in Keen data source in Bold BI Dashboard.

   ![Reveal API Key](/static/assets/working-with-datasource/data-connectors/images/keen/APIKey.png)

#### How do I get Organization Key for connecting Keen data source?

1. Log in to your [keen](https://keen.io/login) account, locate your *ORGANIZATION_ID* from the address bar.
2. Navigate to *Organization Key* and find your organization key. 
3. Utilize this *Organization Key* as *ORGANIZATION_KEY* in Authorization to query the projects.

   `https://api.keen.io/3.0/organizations/ORG_ID/projects/PROJECT_ID`

   Authorization: ORGANIZATION_KEY

   ![Reveal Organization Key](/static/assets/working-with-datasource/data-connectors/images/keen/OrganizationKey.png)

#### How do I get Project Keys for connecting Keen data source?

1. Log in to your [keen](https://keen.io/login) account and navigate to *Projects*. 
2. Select a valid project from the *Projects* dropdown menu and navigate to *ACCESS*.
3. Locate the *PROJECT ID, MASTER KEY, READ KEY*, and *WRITE KEY* under *Project Details*.

   ![Reveal Projet Keys](/static/assets/working-with-datasource/data-connectors/images/keen/ProjectKeys.png)

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
The period of time before the next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose 'Never'.
</td>
</tr>
</table>

### Sample queries

**Projects**

`https://api.keen.io/3.0/organizations/ORG_ID/projects`

Authorization: ORGANIZATION_KEY

**Saved queries**

`https://api.keen.io/3.0/projects/PROJECT_ID/queries/saved/QUERY_NAME/result`

Authorization: READ_KEY

### Preview and data import
* Click **Preview & Connect** to connect with the configurations that have been set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Keen Rest API request. This dialog displays a list of schemas in a treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

### Connect using custom attribute and dashboard parameter

We have added support for **custom attributes and dashboard parameters** in the data source connection. You can now connect to the data source using custom attributes or dashboard parameters.

**Custom Attribute**

![Custom](/static/assets/working-with-datasource/data-connectors/images/keen/Custom.png)

**Dashboard Parameter**

![Dashboard Parameter](/static/assets/working-with-datasource/data-connectors/images/keen/Dashboardparameter.png)

>**Note:** Refer to the [Dashboard Parameter Documentation](https://help.boldbi.com/working-with-data-sources/dashboard-parameter/) and [Custom Attributes Documentation](https://help.boldbi.com/working-with-data-sources/configuring-custom-attribute/) for more details.

## Related links
[Data Transformation](/working-with-data-sources/data-modeling/joining-table/)

[Editing a Data Connection](/working-with-data-sources/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/getting-started/creating-dashboard/)

[Keen API Limits](https://keen.io/docs/api/?shell#limits)

[Keen Integration](https://www.boldbi.com/integrations/keen?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbikeenintegration)