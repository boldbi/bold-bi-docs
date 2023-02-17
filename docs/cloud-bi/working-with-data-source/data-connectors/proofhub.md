---
layout: post
title: ProofHub - Cloud BI Connector | Bold BI Documentation
description: Learn how to connect ProofHub web service through REST API endpoint with cloud-hosted Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to ProofHub data source

The Bold BI dashboard designer supports connecting the ProofHub web services using the REST API.

## Choose ProofHub data source

To configure the ProofHub data source, follow these steps:

1. Click the **Data Sources** button in the configuration panel to add a new data connection.
   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)  
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **ProofHub** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/proofhub/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/cloud/working-with-datasource/data-connectors/images/proofhub/ChooseDS_server.png)

## Create ProofHub data source

Once you click the data source, the NEW DATA SOURCE configuration panel opens. Follow these steps to create the ProofHub data source.
1. Enter a name and description (optional) for the data source.
2. Enter a valid ProofHub REST API endpoint in the URL textbox. Refer to the [ProofHub API documentation](https://github.com/ProofHub/api_v3) for more details.

      Example: `https://<:company_name>.proofhub.com/api/v3/projects`

3. Select the **GET** method for the REST API in the **Method** combo box.
4. Choose a time interval for **Refresh Settings** using the combo box, to trigger the Rest API request periodically to keep the data in sync with your dashboard.  
5. Select the **JSON** data type in the **Data Format** combo box.
6. Replace **&lt;:your_api_key&gt;** under Headers with a valid API key.
7. Choose **None** under the **Authentication** Type, as authentication is done using the header.

![Data source preview](/static/assets/cloud/working-with-datasource/data-connectors/images/proofhub/DataSourcesView.png)

You can also edit the connection information set using the [Edit Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/) option.

#### How do I get API Key for connecting ProofHub Data source?

1. Login to your [ProofHub](https://www.ProofHub.com/login) account.
2. Click Manage profile dropdown and clicking five times on the profile picture. The API key of the logged-in user will be displayed in the pop-up window opened.

![Reveal API Key](/static/assets/cloud/working-with-datasource/data-connectors/images/proofhub/Access_key.png)

#### Additional information
<table width="600">
<tr>
<td>
Refresh Settings
</td>
<td>
Period of time before next refresh call is triggered. This will automatically trigger a call for the API configured in the data source to keep the data up to date.
</td>
</tr>
</table>

### Setting up the URL
1. Replace `<:company_name>` with this base URL.

`https://<:company_name>.proofhub.com/api/v3/projects`

For more information on the API endpoints available for this data source, refer to their official [API Documentation](https://github.com/ProofHub/api_v3)

### Sample queries

**categories**

`https://<:company_name>.proofhub.com/api/v3/categories`


**People**

`https://<:company_name>.proofhub.com/api/v3/people`

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the ProofHub Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in designer and click **Connect**.* The Choose Schema(s) dialog opens. The schema represents the key fields of JSON data retrieved from the ProofHub Rest API request. This dialog displays a list of schemas in the treeview and its corresponding values in the grid for preview. Select required schema(s) from the treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with the selected table schema opens. Drag and drop the table.
   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Related links

[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)

[ProofHub Integration](https://www.boldbi.com/integrations/ProofHub?utm_source=syncfusion&utm_medium=documentation&utm_campaign=boldbiProofHubintegration)
