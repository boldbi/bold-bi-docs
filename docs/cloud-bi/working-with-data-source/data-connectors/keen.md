---
layout: post
title: Keen – Cloud BI Data Connector | Bold BI Documentation
description: Learn how to connect Keen web service through REST API endpoint with Bold BI Cloud and create data source.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Keen data source
Bold BI dashboard designer supports connecting Keen web services through REST API.

## Choose Keen data source
To configure the Keen data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Keen** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/keen/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/keen/ChooseDS_server.png)

## Create Keen data source
Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow the below steps to create Keen data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid Keen REST API endpoint in the URL textbox. Refer the [Keen API documentation](https://keen.io/docs/api/) for more details.

    Example: `https://api.keen.io/3.0/organizations/<:ORG_ID>/projects/<:PROJECT_ID>`

3. Select **GET** method for the REST API in **Method** combo box.
4. In **Max Rows**, enter the maximum number of rows to be fetched from the Keen data source.
5. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Select **JSON** data type in **Data Format** combo box.
7. Replace `<:project_read_key>` under Headers with a valid API token.
8. Choose **None** under **Authentication** Type as authentication is done through header.

You can also edit the connection information set here using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Key for connecting Keen data source?

1. Login to [keen](https://keen.io/login) account and Go to *Projects*. 
2. Choose valid Project in *Projects* combo box and go to *ACCESS*.
3. Find your *ACCESS KEY* under *Access Keys*.
4. Click *NEW ACCESS KEY*, if you don't have any valid API Key.
5. Use this *ACCESS KEY* as `<:project_read_key>` in Keen data source in Bold BI Dashboard.

   ![Reveal API Key](/static/assets/cloud/working-with-datasource/data-connectors/images/keen/APIKey.png)

#### How do I get Organization Key for connecting Keen data source?

1. Login to [keen](https://keen.io/login) account,Find your *ORGANIZATION_ID* from the address bar.
2. Go to *Organization Key* and find your organization key. 
3. Use this *Organization Key* as *ORGANIZATION_KEY* in Authorization to query the projects.

   `https://api.keen.io/3.0/organizations/ORG_ID/projects/PROJECT_ID`

   Authorization: ORGANIZATION_KEY

   ![Reveal Organization Key](/static/assets/cloud/working-with-datasource/data-connectors/images/keen/OrganizationKey.png)

#### How do I get Project Keys for connecting Keen data source?

1. Login to [keen](https://keen.io/login) account and Go to *Projects*. 
2. Choose valid Project in *Projects* combo box and go to *ACCESS*.
3. Find the *PROJECT ID, MASTER KEY, READ KEY, WRITE KEY* under *Project Details*.

   ![Reveal Projet Keys](/static/assets/cloud/working-with-datasource/data-connectors/images/keen/ProjectKeys.png)

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date. If you do not want to sync your new data, choose ‘Never’.
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
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from Keen Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[Keen API Limits](https://keen.io/docs/api/?shell#limits)

[Keen Integration](https://www.boldbi.com/integrations/keen?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbikeenintegration)